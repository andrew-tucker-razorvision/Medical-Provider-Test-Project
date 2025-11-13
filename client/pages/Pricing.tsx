/**
 * Pricing Page Component
 * Showcases AcciLink's hybrid subscription pricing model for attorneys and providers
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, X, Briefcase, Stethoscope, Shield, Zap, Users, Award, HelpCircle, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function Pricing() {
  const [userType, setUserType] = useState<"attorney" | "provider">("attorney");

  // Attorney pricing tiers
  const attorneyTiers = [
    {
      name: "Starter",
      price: 99,
      commission: "10%",
      description: "Perfect for small firms getting started",
      popular: false,
      features: [
        { text: "10 active cases per month", included: true },
        { text: "Basic provider search", included: true },
        { text: "Email support", included: true },
        { text: "24-hour response time", included: true },
        { text: "Case management dashboard", included: true },
        { text: "Advanced search & filters", included: false },
        { text: "Analytics dashboard", included: false },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: 299,
      commission: "5%",
      description: "For growing practices with higher volume",
      popular: true,
      badge: "Most Popular",
      features: [
        { text: "Unlimited active cases", included: true },
        { text: "Advanced search & filters", included: true },
        { text: "Priority email + phone support", included: true },
        { text: "4-hour priority response time", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "Bulk case management", included: true },
        { text: "Customizable workflows", included: true },
        { text: "Export reports", included: true },
        { text: "API access", included: false },
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: null,
      commission: "3%",
      description: "Custom solutions for large firms",
      popular: false,
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "API access & webhooks", included: true },
        { text: "Custom integrations", included: true },
        { text: "White-label options", included: true },
        { text: "SLA guarantee", included: true },
        { text: "Advanced security features", included: true },
        { text: "Custom training sessions", included: true },
        { text: "Priority feature requests", included: true },
      ],
      cta: "Contact Sales",
    },
  ];

  // Provider pricing tiers
  const providerTiers = [
    {
      name: "Individual",
      price: 0,
      commission: "15%",
      description: "Free for solo practitioners",
      popular: false,
      features: [
        { text: "Basic provider profile", included: true },
        { text: "Receive case requests", included: true },
        { text: "Email notifications", included: true },
        { text: "Standard search visibility", included: true },
        { text: "Case history tracking", included: true },
        { text: "Priority case matching", included: false },
        { text: "Analytics dashboard", included: false },
        { text: "Scheduling integration", included: false },
        { text: "Premium placement", included: false },
      ],
      cta: "Get Started Free",
    },
    {
      name: "Practice",
      price: 49,
      commission: "8%",
      description: "Best for small to medium practices",
      popular: true,
      badge: "Best Value",
      features: [
        { text: "Enhanced provider profile", included: true },
        { text: "Priority case matching", included: true },
        { text: "Scheduling integration", included: true },
        { text: "Email + SMS notifications", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "Review management", included: true },
        { text: "Lead tracking", included: true },
        { text: "Automated reminders", included: true },
        { text: "Team management", included: false },
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Group",
      price: 149,
      commission: "5%",
      description: "For large medical groups and hospitals",
      popular: false,
      features: [
        { text: "Everything in Practice", included: true },
        { text: "Multi-provider profiles", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Premium search placement", included: true },
        { text: "Dedicated support", included: true },
        { text: "Team management tools", included: true },
        { text: "Custom branding", included: true },
        { text: "White-glove onboarding", included: true },
        { text: "Priority support line", included: true },
      ],
      cta: "Start Free Trial",
    },
  ];

  const currentTiers = userType === "attorney" ? attorneyTiers : providerTiers;

  // FAQ data
  const faqs = [
    {
      question: "What's included in the free trial?",
      answer:
        "You get full access to all features in your chosen plan for 14 days. No credit card required to start. You can test all the features, connect with professionals, and see how AcciLink works for your practice before committing.",
    },
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, and you'll be charged the prorated difference. Downgrades take effect at the start of your next billing cycle.",
    },
    {
      question: "How does the commission work?",
      answer:
        "Commission is only charged on successfully completed cases coordinated through our platform. The percentage varies by plan tier. We calculate commission based on the service fee for each completed engagement. No hidden fees - what you see is what you pay.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and debit cards. Enterprise plans can also pay via ACH transfer or wire transfer. All payments are processed securely through our PCI-compliant payment processor.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No! There are no setup fees, onboarding fees, or hidden charges for any plan. You only pay the monthly subscription fee and the commission on completed cases. What you see on this page is exactly what you'll pay.",
    },
    {
      question: "How is commission calculated?",
      answer:
        "Commission is calculated as a percentage of the service fee charged for each successfully completed case. For example, if you charge $1,000 for a medical evaluation and you're on the Professional plan (5% commission), AcciLink would charge $50. You receive detailed invoices showing all commission charges.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings. If you cancel, you'll retain access to your paid features until the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes! We offer a 30-day money-back guarantee on your first payment. If you're not satisfied with AcciLink for any reason within the first 30 days, contact our support team for a full refund. Subsequent months are non-refundable but you can cancel anytime.",
    },
  ];

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Simple, Transparent Pricing for Attorneys and Providers
          </h1>
          <p className="text-lg md:text-xl text-charcoal mb-8 leading-relaxed">
            Choose the plan that fits your needs. Start with a 14-day free trial, no credit card required.
            Our hybrid model combines affordable subscriptions with success-based commissions.
          </p>
          <div className="h-1 w-24 bg-sage-green mx-auto"></div>
        </div>
      </section>

      {/* User Type Toggle */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Tabs defaultValue="attorney" className="w-full max-w-md" onValueChange={(value) => setUserType(value as "attorney" | "provider")}>
            <TabsList className="grid w-full grid-cols-2 h-14">
              <TabsTrigger value="attorney" className="flex items-center gap-2 text-base">
                <Briefcase className="w-4 h-4" />
                For Attorneys
              </TabsTrigger>
              <TabsTrigger value="provider" className="flex items-center gap-2 text-base">
                <Stethoscope className="w-4 h-4" />
                For Providers
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative bg-white border-2 transition-all duration-300 ${
                  tier.popular
                    ? userType === "attorney"
                      ? "border-legal-gold shadow-xl scale-105"
                      : "border-medical-teal shadow-xl scale-105"
                    : "border-gray-200 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className={`${
                      userType === "attorney" ? "bg-legal-gold" : "bg-medical-teal"
                    } text-white px-4 py-1 text-sm font-semibold`}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-navy mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-charcoal">{tier.description}</CardDescription>
                  <div className="mt-6">
                    {tier.price !== null ? (
                      <>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-5xl md:text-6xl font-bold text-navy">${tier.price}</span>
                          <span className="text-lg text-charcoal">/month</span>
                        </div>
                        <div className="mt-2 text-sm text-charcoal">
                          + <span className="font-semibold text-navy">{tier.commission}</span> commission per case
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-navy">Custom</div>
                        <div className="mt-2 text-sm text-charcoal">
                          + <span className="font-semibold text-navy">{tier.commission}</span> commission per case
                        </div>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-charcoal" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-6">
                  <Link
                    to={`/signup?type=${userType}&plan=${tier.name.toLowerCase()}`}
                    className="w-full"
                  >
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-sage-green text-white hover:bg-sage-green/90"
                          : "bg-sage-green text-white hover:bg-sage-green/90"
                      }`}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                  {tier.price !== null && tier.price > 0 && (
                    <p className="text-xs text-center text-charcoal">14-day free trial • No credit card required</p>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Value Section */}
      <section className="py-12 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-sage-green mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Law Firms Trust AcciLink</div>
            </div>
            <div>
              <Award className="w-12 h-12 text-sage-green mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">2,000+</div>
              <div className="text-white/80">Medical Providers</div>
            </div>
            <div>
              <Shield className="w-12 h-12 text-sage-green mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/80">Cases Coordinated</div>
            </div>
            <div>
              <Zap className="w-12 h-12 text-sage-green mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">24-Hour</div>
              <div className="text-white/80">Response Guarantee</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Why Choose AcciLink Pricing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-sage-green mb-3" />
                <h4 className="text-white font-semibold mb-2">No Hidden Fees</h4>
                <p className="text-white/80 text-sm">What you see is what you pay. Transparent pricing, always.</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-sage-green mb-3" />
                <h4 className="text-white font-semibold mb-2">Cancel Anytime</h4>
                <p className="text-white/80 text-sm">No long-term contracts. No cancellation fees.</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-sage-green mb-3" />
                <h4 className="text-white font-semibold mb-2">14-Day Free Trial</h4>
                <p className="text-white/80 text-sm">Try all features risk-free. No credit card required.</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-sage-green mb-3" />
                <h4 className="text-white font-semibold mb-2">Save Time & Money</h4>
                <p className="text-white/80 text-sm">Reduce coordination costs by up to 70%.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-charcoal">Everything you need to know about our pricing</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="text-left hover:text-sage-green">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" />
                    <span className="font-semibold text-navy">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-charcoal pl-8">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Trusted by Leading Professionals
          </h2>
          <p className="text-lg text-charcoal mb-12">
            Join 500+ law firms and 2,000+ medical providers who trust AcciLink
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-light-gray border-none">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sage-green text-sage-green" />
                  ))}
                </div>
                <p className="text-charcoal italic mb-4">
                  "AcciLink has streamlined our medical coordination process. The pricing is fair and transparent,
                  and we've saved thousands in administrative costs."
                </p>
                <p className="font-semibold text-navy">Sarah Johnson</p>
                <p className="text-sm text-charcoal">Senior Partner, Johnson & Associates</p>
              </CardContent>
            </Card>

            <Card className="bg-light-gray border-none">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sage-green text-sage-green" />
                  ))}
                </div>
                <p className="text-charcoal italic mb-4">
                  "The hybrid pricing model works perfectly for our practice. We only pay commission when we get
                  cases, and the monthly fee is very reasonable."
                </p>
                <p className="font-semibold text-navy">Dr. Michael Chen</p>
                <p className="text-sm text-charcoal">Orthopedic Surgeon, Bay Area Medical Group</p>
              </CardContent>
            </Card>

            <Card className="bg-light-gray border-none">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sage-green text-sage-green" />
                  ))}
                </div>
                <p className="text-charcoal italic mb-4">
                  "We switched from our old system to AcciLink and haven't looked back. The ROI was clear within
                  the first month. Highly recommend!"
                </p>
                <p className="font-semibold text-navy">Robert Martinez</p>
                <p className="text-sm text-charcoal">Managing Attorney, Martinez Law Firm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-navy to-teal text-white border-none">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl md:text-4xl text-white mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Start your 14-day free trial today. No credit card required. No commitment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/signup?type=attorney">
                  <Button
                    size="lg"
                    className="bg-sage-green text-white hover:bg-sage-green/90 px-8 py-6 text-lg font-semibold min-w-[240px]"
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Start Free Trial - Attorney
                  </Button>
                </Link>
                <Link to="/signup?type=provider">
                  <Button
                    size="lg"
                    className="bg-sage-green text-white hover:bg-sage-green/90 px-8 py-6 text-lg font-semibold min-w-[240px]"
                  >
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Start Free Trial - Provider
                  </Button>
                </Link>
              </div>
              <p className="text-center text-white/80 mt-6">
                Questions? <a href="/contact" className="underline hover:text-sage-green">Contact our sales team</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
