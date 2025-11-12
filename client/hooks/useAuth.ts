/**
 * useAuth Hook
 * Custom hook to access authentication context
 * Provides user state and auth functions throughout the application
 */

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
