/**
 * Features Page Component
 * Showcases MedNexus's key capabilities and benefits for attorneys and providers
 */

import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Lock,
  FileText,
  Users,
  MessageSquare,
  CheckCircle,
  Clock,
  Search,
  Award,
  Briefcase,
  Stethoscope,
  UserCheck,
  Bell,
  Database,
  HeadphonesIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export function Features() {
  // Core platform features
  const coreFeatures = [
    {
      icon: Shield,
      title: "Vetted Network",
      description: "Access thoroughly vetted medical professionals and legal experts. Every provider undergoes rigorous credentialing and background verification.",
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Connect with the right professionals in minutes, not days. Our intelligent matching system finds the perfect fit for your specific needs.",
    },
    {
      icon: MessageSquare,
      title: "Secure Communication",
      description: "HIPAA-compliant messaging platform keeps all communications encrypted and secure. Chat, share files, and coordinate seamlessly.",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized document storage with version control. Upload, share, and track all case-related files in one secure location.",
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "Automated notifications keep you informed at every step. Never miss a deadline or important case milestone.",
    },
    {
      icon: Award,
      title: "Expert Credentialing",
      description: "Comprehensive professional profiles showcase credentials, specializations, experience, and peer reviews.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock. Get help when you need it with our 24-hour response guarantee.",
    },
    {
      icon: Lock,
      title: "Compliance & Security",
      description: "Bank-level encryption and HIPAA compliance ensure your sensitive information remains protected at all times.",
    },
  ];

  // Attorney-specific features
  const attorneyFeatures = [
    {
      icon: Search,
      title: "Advanced Provider Search",
      description: "Filter by specialty, location, experience, and availability to find the perfect medical expert for your case.",
    },
    {
      icon: FileText,
      title: "Case Coordination Hub",
      description: "Manage all aspects of medical coordination from one dashboard. Track appointments, reports, and billing.",
    },
    {
      icon: UserCheck,
      title: "Instant Expert Access",
      description: "Connect directly with medical providers who understand legal requirements and can provide expert testimony.",
    },
    {
      icon: Database,
      title: "Document Repository",
      description: "Store and organize all medical records, reports, and correspondence with automatic HIPAA compliance.",
    },
  ];

  // Provider-specific features
  const providerFeatures = [
    {
      icon: Briefcase,
      title: "Direct Attorney Connections",
      description: "Build relationships with law firms seeking medical expertise. Expand your practice with qualified referrals.",
    },
    {
      icon: FileText,
      title: "Case Management Tools",
      description: "Track all attorney requests, appointments, and deliverables in one organized dashboard.",
    },
    {
      icon: MessageSquare,
      title: "Secure Client Portal",
      description: "Communicate with attorneys through our encrypted platform. Share updates and documents safely.",
    },
    {
      icon: Award,
      title: "Professional Profile",
      description: "Showcase your credentials, specializations, and experience. Build your reputation with peer reviews.",
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Sign Up & Profile Setup",
      description: "Create your account and complete your professional profile with credentials and specializations.",
    },
    {
      number: "02",
      title: "Search & Connect",
      description: "Use our advanced search to find the right match, then send connection requests instantly.",
    },
    {
      number: "03",
      title: "Coordinate & Communicate",
      description: "Use our secure platform to schedule, share documents, and track progress in real-time.",
    },
    {
      number: "04",
      title: "Complete & Review",
      description: "Finalize the engagement, process payments, and provide feedback to improve the network.",
    },
  ];

  return (
    <div className="min-h-screen bg-muted pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powerful Features for Seamless Medical-Legal Coordination
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
            MedNexus brings together attorneys and medical providers with enterprise-grade tools designed
            specifically for efficient case coordination and secure collaboration.
          </p>
          <div className="h-1 w-24 bg-sage-green mx-auto"></div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Built for professionals who demand efficiency, security, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-card hover:shadow-xl transition-shadow duration-300 border-none"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Attorneys Section */}
      <section className="py-12 md:py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Built for Legal Professionals
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Streamline your medical coordination with tools designed specifically for attorneys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attorneyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sage-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Providers Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal rounded-full mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Designed for Medical Providers
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Grow your practice with direct access to attorneys who need your expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {providerFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Process Flow */}
      <section className="py-12 md:py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Get started in minutes with our simple, streamlined process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-green text-white rounded-full font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-navy to-teal text-white border-none">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-card/20 rounded-full mb-4 mx-auto">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl md:text-4xl text-white mb-4">
                Security & Compliance You Can Trust
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Your data security and privacy are our top priorities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">HIPAA Compliant</h4>
                    <p className="text-white/80">
                      Full HIPAA compliance with encrypted data storage and transmission
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Bank-Level Encryption</h4>
                    <p className="text-white/80">
                      256-bit SSL encryption protects all sensitive information
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Rigorous Vetting</h4>
                    <p className="text-white/80">
                      All providers undergo comprehensive background checks and credentialing
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Privacy Guaranteed</h4>
                    <p className="text-white/80">
                      Your information is never shared without explicit consent
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-foreground mb-8">
            Join thousands of legal and medical professionals who trust MedNexus for seamless coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup?type=attorney"
              className="px-8 py-4 bg-sage-green text-white rounded-lg hover:bg-sage-green-600 transition-colors duration-200 font-semibold text-lg text-center"
            >
              Sign Up as Attorney
            </Link>
            <Link
              to="/signup?type=provider"
              className="px-8 py-4 bg-sage-green text-white rounded-lg hover:bg-sage-green-600 transition-colors duration-200 font-semibold text-lg text-center"
            >
              Sign Up as Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
