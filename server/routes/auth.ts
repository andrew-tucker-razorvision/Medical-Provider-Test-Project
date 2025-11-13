import { Router } from 'express';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import { hashPassword, comparePassword, generateToken, verifyToken } from '../utils/auth';
import type { LoginCredentials, RegisterCredentials } from '../../shared/types/auth';

export const authRouter = Router();

/**
 * POST /api/auth/register
 * Register a new user (attorney or provider)
 */
authRouter.post('/register', async (req, res) => {
  try {
    const credentials: RegisterCredentials = req.body;

    // Validate required fields
    if (!credentials.email || !credentials.password || !credentials.fullName || !credentials.userType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, credentials.email))
      .limit(1);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const passwordHash = await hashPassword(credentials.password);

    // Create user
    const [newUser] = await db
      .insert(users)
      .values({
        email: credentials.email,
        passwordHash,
        fullName: credentials.fullName,
        userType: credentials.userType as 'attorney' | 'provider',
        phone: credentials.phone || null,
        // Attorney fields
        firmName: credentials.firmName || null,
        barNumber: credentials.barNumber || null,
        statesOfPractice: credentials.statesOfPractice ? JSON.stringify(credentials.statesOfPractice) : null,
        firmSize: credentials.firmSize || null,
        // Provider fields
        practiceName: credentials.practiceName || null,
        professionalTitle: credentials.professionalTitle || null,
        licenseNumber: credentials.licenseNumber || null,
        statesLicensed: credentials.statesLicensed ? JSON.stringify(credentials.statesLicensed) : null,
        yearsExperience: credentials.yearsExperience || null,
        // Pricing plan
        pricingPlan: credentials.pricingPlan || null,
      })
      .returning();

    // Generate token
    const token = generateToken(newUser.id, newUser.email);

    // Return user without password
    const { passwordHash: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      user: {
        ...userWithoutPassword,
        id: newUser.id,
        name: newUser.fullName,
        type: newUser.userType as 'attorney' | 'provider',
        statesOfPractice: newUser.statesOfPractice ? JSON.parse(newUser.statesOfPractice) : null,
        statesLicensed: newUser.statesLicensed ? JSON.parse(newUser.statesLicensed) : null,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

/**
 * POST /api/auth/login
 * Login with email and password
 */
authRouter.post('/login', async (req, res) => {
  try {
    const { email, password }: LoginCredentials = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    // Find user
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify password
    const isValid = await comparePassword(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user.id, user.email);

    // Return user without password
    const { passwordHash: _, ...userWithoutPassword } = user;

    res.json({
      user: {
        ...userWithoutPassword,
        id: user.id,
        name: user.fullName,
        type: user.userType as 'attorney' | 'provider',
        statesOfPractice: user.statesOfPractice ? JSON.parse(user.statesOfPractice) : null,
        statesLicensed: user.statesLicensed ? JSON.parse(user.statesLicensed) : null,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

/**
 * GET /api/auth/me
 * Get current user from JWT token
 */
authRouter.get('/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.substring(7);
    const { userId } = verifyToken(token);

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { passwordHash: _, ...userWithoutPassword } = user;

    res.json({
      user: {
        ...userWithoutPassword,
        id: user.id,
        name: user.fullName,
        type: user.userType as 'attorney' | 'provider',
        statesOfPractice: user.statesOfPractice ? JSON.parse(user.statesOfPractice) : null,
        statesLicensed: user.statesLicensed ? JSON.parse(user.statesLicensed) : null,
      },
    });
  } catch (error) {
    console.error('Auth verification error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});
