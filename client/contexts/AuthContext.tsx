/**
 * AuthContext
 * Provides authentication state and functions throughout the application
 * Uses mock authentication with hardcoded test credentials
 */

import { createContext, useState, useEffect, ReactNode } from "react";
import { User, LoginCredentials } from "../../shared/types/auth";

// Mock user database
const MOCK_USERS = {
  "attorney@test.com": {
    id: "1",
    email: "attorney@test.com",
    name: "John Attorney",
    userType: "attorney" as const,
    password: "password123",
  },
  "provider@test.com": {
    id: "2",
    email: "provider@test.com",
    name: "Dr. Sarah Provider",
    userType: "provider" as const,
    password: "password123",
  },
};

interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("auth_user");
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser = MOCK_USERS[credentials.email as keyof typeof MOCK_USERS];

    if (!mockUser || mockUser.password !== credentials.password) {
      throw new Error("Invalid email or password");
    }

    // Create user object without password
    const authenticatedUser: User = {
      id: mockUser.id,
      email: mockUser.email,
      name: mockUser.name,
      userType: mockUser.userType,
    };

    setUser(authenticatedUser);
    localStorage.setItem("auth_user", JSON.stringify(authenticatedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
