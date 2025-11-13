/**
 * Signup Page Component
 * User registration with Attorney/Provider type selection
 */

import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Briefcase, Stethoscope, User, Mail, Lock, Phone, Building, Award, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";
import type { RegisterCredentials } from "@/shared/types/auth";

// Common validation schema (base fields without refine)
const commonSchemaBase = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

// Attorney schema
const attorneySchema = commonSchemaBase.extend({
  userType: z.literal("attorney"),
  firmName: z.string().min(2, "Firm name must be at least 2 characters"),
  barNumber: z.string().min(5, "Bar number must be at least 5 characters"),
  statesOfPractice: z.string().min(1, "Please select at least one state"),
  firmSize: z.string().min(1, "Please select firm size"),
  pricingPlan: z.string().min(1, "Please select a pricing plan"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Provider schema
const providerSchema = commonSchemaBase.extend({
  userType: z.literal("provider"),
  practiceName: z.string().min(2, "Practice name must be at least 2 characters"),
  professionalTitle: z.string().min(1, "Please select your professional title"),
  licenseNumber: z.string().min(5, "License number must be at least 5 characters"),
  statesLicensed: z.string().min(1, "Please select at least one state"),
  yearsExperience: z.coerce.number().min(0).max(70, "Years must be between 0 and 70"),
  pricingPlan: z.string().min(1, "Please select a pricing plan"),
  phone: z.string().min(1, "Phone number is required for providers"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type AttorneyFormData = z.infer<typeof attorneySchema>;
type ProviderFormData = z.infer<typeof providerSchema>;

export function Signup() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<"attorney" | "provider">(
    (searchParams.get("type") as "attorney" | "provider") || "attorney"
  );

  const preselectedPlan = searchParams.get("plan");

  // Attorney form
  const attorneyForm = useForm<AttorneyFormData>({
    resolver: zodResolver(attorneySchema),
    defaultValues: {
      userType: "attorney",
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phone: "",
      firmName: "",
      barNumber: "",
      statesOfPractice: "",
      firmSize: "",
      pricingPlan: preselectedPlan && userType === "attorney" ? preselectedPlan : "",
      agreeToTerms: false,
    },
  });

  // Provider form
  const providerForm = useForm<ProviderFormData>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      userType: "provider",
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phone: "",
      practiceName: "",
      professionalTitle: "",
      licenseNumber: "",
      statesLicensed: "",
      yearsExperience: 0,
      pricingPlan: preselectedPlan && userType === "provider" ? preselectedPlan : "",
      agreeToTerms: false,
    },
  });

  // Sync tab with URL parameter
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "attorney" || type === "provider") {
      setUserType(type);
    }
  }, [searchParams]);

  const onAttorneySubmit = async (data: AttorneyFormData) => {
    setIsLoading(true);
    try {
      const credentials: RegisterCredentials = {
        ...data,
        statesOfPractice: data.statesOfPractice.split(",").map(s => s.trim()),
      };
      await registerUser(credentials);
      toast.success("Account created successfully!", {
        description: "Welcome to AcciLink!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Registration failed", {
        description: error instanceof Error ? error.message : "Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onProviderSubmit = async (data: ProviderFormData) => {
    setIsLoading(true);
    try {
      const credentials: RegisterCredentials = {
        ...data,
        statesLicensed: data.statesLicensed.split(",").map(s => s.trim()),
      };
      await registerUser(credentials);
      toast.success("Account created successfully!", {
        description: "Welcome to AcciLink!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Registration failed", {
        description: error instanceof Error ? error.message : "Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const US_STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-16">
      {/* Hero */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Create Your AcciLink Account
          </h1>
          <p className="text-lg text-charcoal mb-6">
            Join 500+ law firms and 2,000+ medical providers
          </p>
          <div className="h-1 w-24 bg-sage-green mx-auto"></div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Tabs value={userType} onValueChange={(value) => setUserType(value as "attorney" | "provider")}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="attorney" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Sign Up as Attorney
              </TabsTrigger>
              <TabsTrigger value="provider" className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Sign Up as Provider
              </TabsTrigger>
            </TabsList>

            {/* Attorney Form */}
            <TabsContent value="attorney">
              <Card>
                <form onSubmit={attorneyForm.handleSubmit(onAttorneySubmit)}>
                  <CardHeader>
                    <CardTitle>Attorney Registration</CardTitle>
                    <CardDescription>Create your attorney account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="fullName"
                            {...attorneyForm.register("fullName")}
                            className="pl-10"
                            placeholder="John Doe"
                          />
                        </div>
                        {attorneyForm.formState.errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.fullName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            {...attorneyForm.register("email")}
                            className="pl-10"
                            placeholder="john@lawfirm.com"
                          />
                        </div>
                        {attorneyForm.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Password *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type="password"
                            {...attorneyForm.register("password")}
                            className="pl-10"
                            placeholder="••••••••"
                          />
                        </div>
                        {attorneyForm.formState.errors.password && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.password.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            {...attorneyForm.register("confirmPassword")}
                            className="pl-10"
                            placeholder="••••••••"
                          />
                        </div>
                        {attorneyForm.formState.errors.confirmPassword && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.confirmPassword.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            {...attorneyForm.register("phone")}
                            className="pl-10"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="firmName">Law Firm Name *</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="firmName"
                            {...attorneyForm.register("firmName")}
                            className="pl-10"
                            placeholder="Smith & Associates"
                          />
                        </div>
                        {attorneyForm.formState.errors.firmName && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.firmName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="barNumber">State Bar Number *</Label>
                        <div className="relative">
                          <Award className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="barNumber"
                            {...attorneyForm.register("barNumber")}
                            className="pl-10"
                            placeholder="12345"
                          />
                        </div>
                        {attorneyForm.formState.errors.barNumber && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.barNumber.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="statesOfPractice">States of Practice * (comma-separated)</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="statesOfPractice"
                            {...attorneyForm.register("statesOfPractice")}
                            className="pl-10"
                            placeholder="CA, NY, TX"
                          />
                        </div>
                        {attorneyForm.formState.errors.statesOfPractice && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.statesOfPractice.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firmSize">Firm Size *</Label>
                        <Select onValueChange={(value) => attorneyForm.setValue("firmSize", value)} defaultValue={attorneyForm.watch("firmSize")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select firm size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">Solo</SelectItem>
                            <SelectItem value="2-10">2-10 attorneys</SelectItem>
                            <SelectItem value="11-50">11-50 attorneys</SelectItem>
                            <SelectItem value="51+">51+ attorneys</SelectItem>
                          </SelectContent>
                        </Select>
                        {attorneyForm.formState.errors.firmSize && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.firmSize.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="pricingPlan">Pricing Plan *</Label>
                        <Select onValueChange={(value) => attorneyForm.setValue("pricingPlan", value)} defaultValue={attorneyForm.watch("pricingPlan")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select plan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="starter">Starter - $99/mo</SelectItem>
                            <SelectItem value="professional">Professional - $299/mo</SelectItem>
                            <SelectItem value="enterprise">Enterprise - Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        {attorneyForm.formState.errors.pricingPlan && (
                          <p className="text-red-500 text-sm mt-1">{attorneyForm.formState.errors.pricingPlan.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={attorneyForm.watch("agreeToTerms")}
                        onCheckedChange={(checked) => attorneyForm.setValue("agreeToTerms", checked as boolean)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I agree to the <Link to="/terms" className="text-teal underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-teal underline">Privacy Policy</Link>
                      </Label>
                    </div>
                    {attorneyForm.formState.errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">{attorneyForm.formState.errors.agreeToTerms.message}</p>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full bg-sage-green hover:bg-sage-green/90" size="lg" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                    <div className="text-center text-sm text-charcoal">
                      14-day free trial • No credit card required • HIPAA compliant
                    </div>
                    <div className="text-center text-sm">
                      Already have an account? <Link to="/login" className="text-teal underline">Log in</Link>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            {/* Provider Form */}
            <TabsContent value="provider">
              <Card>
                <form onSubmit={providerForm.handleSubmit(onProviderSubmit)}>
                  <CardHeader>
                    <CardTitle>Provider Registration</CardTitle>
                    <CardDescription>Create your medical provider account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="fullName"
                            {...providerForm.register("fullName")}
                            className="pl-10"
                            placeholder="Dr. Jane Smith"
                          />
                        </div>
                        {providerForm.formState.errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.fullName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            {...providerForm.register("email")}
                            className="pl-10"
                            placeholder="jane@medical.com"
                          />
                        </div>
                        {providerForm.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Password *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type="password"
                            {...providerForm.register("password")}
                            className="pl-10"
                            placeholder="••••••••"
                          />
                        </div>
                        {providerForm.formState.errors.password && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.password.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            {...providerForm.register("confirmPassword")}
                            className="pl-10"
                            placeholder="••••••••"
                          />
                        </div>
                        {providerForm.formState.errors.confirmPassword && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.confirmPassword.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            {...providerForm.register("phone")}
                            className="pl-10"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        {providerForm.formState.errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="practiceName">Practice Name *</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="practiceName"
                            {...providerForm.register("practiceName")}
                            className="pl-10"
                            placeholder="Smith Medical Group"
                          />
                        </div>
                        {providerForm.formState.errors.practiceName && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.practiceName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="professionalTitle">Professional Title *</Label>
                        <Select onValueChange={(value) => providerForm.setValue("professionalTitle", value)} defaultValue={providerForm.watch("professionalTitle")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select title" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MD">MD - Medical Doctor</SelectItem>
                            <SelectItem value="DO">DO - Doctor of Osteopathy</SelectItem>
                            <SelectItem value="DC">DC - Doctor of Chiropractic</SelectItem>
                            <SelectItem value="PT">PT - Physical Therapist</SelectItem>
                            <SelectItem value="RN">RN - Registered Nurse</SelectItem>
                            <SelectItem value="NP">NP - Nurse Practitioner</SelectItem>
                            <SelectItem value="PA">PA - Physician Assistant</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {providerForm.formState.errors.professionalTitle && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.professionalTitle.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="licenseNumber">License Number *</Label>
                        <div className="relative">
                          <Award className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="licenseNumber"
                            {...providerForm.register("licenseNumber")}
                            className="pl-10"
                            placeholder="ABC12345"
                          />
                        </div>
                        {providerForm.formState.errors.licenseNumber && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.licenseNumber.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="statesLicensed">States Licensed * (comma-separated)</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="statesLicensed"
                            {...providerForm.register("statesLicensed")}
                            className="pl-10"
                            placeholder="CA, NY, TX"
                          />
                        </div>
                        {providerForm.formState.errors.statesLicensed && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.statesLicensed.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="yearsExperience">Years of Experience *</Label>
                        <Input
                          id="yearsExperience"
                          type="number"
                          {...providerForm.register("yearsExperience")}
                          placeholder="10"
                          min="0"
                          max="70"
                        />
                        {providerForm.formState.errors.yearsExperience && (
                          <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.yearsExperience.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="pricingPlan">Pricing Plan *</Label>
                      <Select onValueChange={(value) => providerForm.setValue("pricingPlan", value)} defaultValue={providerForm.watch("pricingPlan")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual - Free</SelectItem>
                          <SelectItem value="practice">Practice - $49/mo</SelectItem>
                          <SelectItem value="group">Group - $149/mo</SelectItem>
                        </SelectContent>
                      </Select>
                      {providerForm.formState.errors.pricingPlan && (
                        <p className="text-red-500 text-sm mt-1">{providerForm.formState.errors.pricingPlan.message}</p>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={providerForm.watch("agreeToTerms")}
                        onCheckedChange={(checked) => providerForm.setValue("agreeToTerms", checked as boolean)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I agree to the <Link to="/terms" className="text-teal underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-teal underline">Privacy Policy</Link>
                      </Label>
                    </div>
                    {providerForm.formState.errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">{providerForm.formState.errors.agreeToTerms.message}</p>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full bg-sage-green hover:bg-sage-green/90" size="lg" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                    <div className="text-center text-sm text-charcoal">
                      14-day free trial • No credit card required • HIPAA compliant
                    </div>
                    <div className="text-center text-sm">
                      Already have an account? <Link to="/login" className="text-teal underline">Log in</Link>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
