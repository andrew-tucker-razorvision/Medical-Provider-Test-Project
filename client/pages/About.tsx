/**
 * About Page
 * Professional about page with company story, mission, values, and trust indicators
 * Builds credibility and explains MedNexus's purpose to attorneys and medical providers
 */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Target,
  Building2,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Heart,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Vetting",
      description:
        "Every provider in our network undergoes rigorous credential verification, background checks, and peer reviews to ensure the highest quality of care.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Our 24-hour response guarantee and integrated platform eliminate delays, helping you coordinate care faster and close cases more efficiently.",
    },
    {
      icon: Target,
      title: "Better Outcomes",
      description:
        "By connecting attorneys with specialized medical experts and providers with qualified cases, we improve outcomes for clients and practices alike.",
    },
  ];

  const stats = [
    {
      icon: Building2,
      value: "500+",
      label: "Law Firms",
    },
    {
      icon: Users,
      value: "2,000+",
      label: "Medical Providers",
    },
    {
      icon: FileText,
      value: "50,000+",
      label: "Cases Coordinated",
    },
    {
      icon: Clock,
      value: "24-Hour",
      label: "Response Time",
    },
  ];

  const differentiators = [
    "Rigorous vetting process for all medical providers",
    "Nationwide network spanning 50+ states",
    "Integrated case management and communication tools",
    "24-hour response guarantee for urgent requests",
    "HIPAA-compliant platform with bank-level security",
    "Dedicated support team available during business hours",
  ];

  return (
    <div className="min-h-screen bg-muted pt-32 pb-16 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Transforming Medical-Legal Coordination
        </h1>
        <p className="text-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          MedNexus bridges the gap between personal injury attorneys and medical
          professionals, streamlining case coordination and improving outcomes
          for everyone involved.
        </p>
        <div className="w-16 h-1 bg-sage-green mx-auto mt-6"></div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              MedNexus was born from a simple observation: personal injury
              attorneys and medical providers were struggling to connect
              efficiently, leading to delayed care, missed opportunities, and
              frustrated clients.
            </p>
            <p>
              Founded in 2020 by a team of legal and healthcare professionals,
              we saw firsthand how fragmented communication and lack of trusted
              networks were creating bottlenecks in the personal injury
              ecosystem. Attorneys needed reliable access to vetted medical
              experts, while providers sought quality case referrals without the
              administrative burden.
            </p>
            <p>
              We built MedNexus to solve this problem. Today, our platform
              connects over 500 law firms with 2,000+ medical providers across
              the United States, facilitating seamless coordination that benefits
              everyone—especially the clients who need timely, quality care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Mission & Values
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            We're driven by a commitment to excellence, efficiency, and better
            outcomes for the personal injury community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="bg-sage-green rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary text-center">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="bg-navy py-16 mb-20 -mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-sage-green" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose MedNexus Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose MedNexus
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            We've built the most trusted platform for medical-legal coordination
            with features that set us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Key Differentiators */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {differentiators.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Trust Badge */}
          <Card className="shadow-lg bg-gradient-to-br from-navy to-teal text-white">
            <CardHeader>
              <div className="bg-card rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-white text-center">
                Built on Trust
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-gray-100 leading-relaxed">
                Security, privacy, and quality are at the core of everything we
                do. Our platform is HIPAA-compliant, encrypted, and regularly
                audited to protect sensitive case information.
              </p>
              <p className="text-gray-100 leading-relaxed">
                Every provider undergoes comprehensive vetting including
                credential verification, malpractice insurance checks, and peer
                reviews before joining our network.
              </p>
              <p className="text-gray-100 leading-relaxed font-semibold">
                Your trust is our most valuable asset.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-navy to-teal py-16 -mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of law firms and thousands of medical providers who
            trust MedNexus to coordinate personal injury cases efficiently and
            professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=attorney">
              <Button className="bg-sage-green hover:bg-sage-green/90 text-white font-semibold px-8 py-6 text-lg">
                Sign Up as Attorney
              </Button>
            </Link>
            <Link to="/signup?type=provider">
              <Button className="bg-card hover:bg-gray-100 text-primary font-semibold px-8 py-6 text-lg">
                Sign Up as Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
