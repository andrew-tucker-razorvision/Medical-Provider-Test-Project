/**
 * Dashboard Page
 * Protected page showing user information after login
 * Displays user profile and logout functionality
 */

import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { toast } from "sonner";
import {
  User,
  Mail,
  Briefcase,
  Stethoscope,
  LogOut,
  Shield,
} from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully", {
      description: "Come back soon!",
    });
    navigate("/");
  };

  if (!user) {
    return null; // ProtectedRoute will handle redirect
  }

  const userTypeIcon =
    user.userType === "attorney" ? (
      <Briefcase className="w-8 h-8" />
    ) : (
      <Stethoscope className="w-8 h-8" />
    );

  const userTypeLabel =
    user.userType === "attorney" ? "Attorney" : "Medical Provider";

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-navy mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-charcoal text-lg">
            You're logged in as a {userTypeLabel}
          </p>
        </div>

        {/* User Profile Card */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="bg-sage-green rounded-full p-4 text-white">
                {userTypeIcon}
              </div>
              <div>
                <CardTitle className="text-2xl text-navy">
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Your account details and settings
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* User Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex items-start space-x-3">
                <User className="w-5 h-5 text-teal mt-1" />
                <div>
                  <p className="text-sm font-semibold text-navy uppercase tracking-wide">
                    Full Name
                  </p>
                  <p className="text-charcoal">{user.name}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal mt-1" />
                <div>
                  <p className="text-sm font-semibold text-navy uppercase tracking-wide">
                    Email Address
                  </p>
                  <p className="text-charcoal">{user.email}</p>
                </div>
              </div>

              {/* User Type */}
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-teal mt-1" />
                <div>
                  <p className="text-sm font-semibold text-navy uppercase tracking-wide">
                    Account Type
                  </p>
                  <p className="text-charcoal capitalize">{user.userType}</p>
                </div>
              </div>

              {/* User ID */}
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-teal mt-1" />
                <div>
                  <p className="text-sm font-semibold text-navy uppercase tracking-wide">
                    User ID
                  </p>
                  <p className="text-charcoal font-mono">{user.id}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-navy">Quick Actions</CardTitle>
            <CardDescription>
              Common tasks for {userTypeLabel.toLowerCase()}s
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4 flex-col space-y-2"
                disabled
              >
                <Briefcase className="w-6 h-6" />
                <span>View Cases</span>
                <span className="text-xs text-gray-500">(Coming Soon)</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex-col space-y-2"
                disabled
              >
                <Mail className="w-6 h-6" />
                <span>Messages</span>
                <span className="text-xs text-gray-500">(Coming Soon)</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex-col space-y-2"
                disabled
              >
                <User className="w-6 h-6" />
                <span>Profile Settings</span>
                <span className="text-xs text-gray-500">(Coming Soon)</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
