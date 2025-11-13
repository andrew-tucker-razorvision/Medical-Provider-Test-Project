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
  phone?: string;
  // Attorney-specific fields
  firmName?: string;
  barNumber?: string;
  statesOfPractice?: string[];
  firmSize?: string;
  // Provider-specific fields
  practiceName?: string;
  professionalTitle?: string;
  licenseNumber?: string;
  statesLicensed?: string[];
  yearsExperience?: number;
  // Pricing
  pricingPlan?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  // Common fields
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  userType: UserType;
  agreeToTerms: boolean;
  // Attorney-specific fields
  firmName?: string;
  barNumber?: string;
  statesOfPractice?: string[];
  firmSize?: string;
  // Provider-specific fields
  practiceName?: string;
  professionalTitle?: string;
  licenseNumber?: string;
  statesLicensed?: string[];
  yearsExperience?: number;
  // Pricing
  pricingPlan?: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
}
