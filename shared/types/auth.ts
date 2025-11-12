/**
 * Authentication Types
 * Shared types for user authentication across client and server
 */

export type UserType = "attorney" | "provider";

export interface User {
  id: string;
  email: string;
  name: string;
  userType: UserType;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
}
