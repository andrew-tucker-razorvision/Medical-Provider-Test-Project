import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Number of salt rounds for bcrypt password hashing
 * Higher = more secure but slower
 */
const SALT_ROUNDS = 10;

/**
 * JWT secret key from environment variables
 * Used to sign and verify JWT tokens
 */
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';

/**
 * JWT expiration time from environment variables
 * Default: 7 days
 */
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * Hash a plain text password using bcrypt
 * @param password - Plain text password to hash
 * @returns Promise<string> - Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compare a plain text password with a hashed password
 * @param password - Plain text password
 * @param hash - Hashed password from database
 * @returns Promise<boolean> - True if passwords match
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token for a user
 * @param userId - User's unique ID
 * @param email - User's email address
 * @returns string - Signed JWT token
 */
export function generateToken(userId: string, email: string): string {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

/**
 * Verify and decode a JWT token
 * @param token - JWT token to verify
 * @returns { userId: string; email: string } - Decoded token payload
 * @throws Error if token is invalid or expired
 */
export function verifyToken(token: string): { userId: string; email: string } {
  return jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
}
