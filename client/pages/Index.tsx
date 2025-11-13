import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Check,
  Shield,
  Stethoscope,
  FileText,
  Clock,
  Users,
  Search,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Briefcase,
  Plus,
  ChevronDown,
} from "lucide-react";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Most users complete setup in under 5 minutes. Simply create your profile, add your credentials and specialties, and you're ready to start connecting. Our onboarding team is available to help if needed."
    },
    {
      question: "What's included in the free trial?",
      answer: "The 14-day free trial includes full access to all features in your chosen plan. You can search providers, coordinate cases, and use all platform tools. No credit card required to start."
    },
    {
      question: "How does pricing work?",
      answer: "We offer simple monthly subscriptions starting at $49 for providers and $99 for attorneys. Plans scale based on your needs with transparent pricing and no hidden fees. See our Pricing page for full details."
    },
    {
      question: "Is my data secure and HIPAA compliant?",
      answer: "Yes, absolutely. MedNexus is fully HIPAA compliant with bank-level 256-bit encryption. All data is securely stored and transmitted. We undergo regular security audits and maintain strict privacy standards."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes, we offer integrations with popular case management systems, calendars, and communication tools. Enterprise plans include custom API access for seamless integration with your existing workflow."
    },
    {
      question: "What happens after the trial ends?",
      answer: "After your 14-day trial, you can choose to continue with a paid subscription or cancel anytime. There's no automatic billing during the trial period, and we'll remind you before it ends."
    }
  ];

  const testimonials = [
    {
      quote:
        "MedNexus has transformed how we connect clients with medical care. The response time is incredible, and the provider network is exactly what we needed for our personal injury cases.",
      name: "Sarah Mitchell, Esq.",
      title: "Managing Partner, Mitchell & Associates",
      location: "Los Angeles, CA",
      type: "attorney",
    },
    {
      quote:
        "As a chiropractor specializing in accident injuries, joining this network has been phenomenal for my practice. The referrals are high-quality and the coordination tools make everything seamless.",
      name: "Dr. James Chen, DC",
      title: "Accident Injury Specialist",
      location: "Chicago, IL",
      type: "provider",
    },
    {
      quote:
        "The vetting process gives me confidence. Every provider we've worked with through the platform has been professional, responsive, and excellent with our clients.",
      name: "Michael Torres, Esq.",
      title: "Senior Trial Attorney",
      location: "Miami, FL",
      type: "attorney",
    },
    {
      quote:
        "The integrated case management features save me hours every week. Everything I need to coordinate with referring attorneys is in one place.",
      name: "Dr. Emily Rodriguez, MD",
      title: "Orthopedic Surgeon",
      location: "Houston, TX",
      type: "provider",
    },
    {
      quote:
        "Response times are exactly as advertised. We can get our clients scheduled with appropriate specialists within 24 hours, which makes a huge difference in case outcomes.",
      name: "David Park, Esq.",
      title: "Personal Injury Attorney",
      location: "Seattle, WA",
      type: "attorney",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card">
      {/* SECTION 1: HERO */}
      <section className="pt-8 pb-16 md:pb-20 bg-gradient-to-br from-white via-white to-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
          {/* Full Width Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight md:leading-tight mb-12 md:mb-16 text-center self-center">
            Connect Clients with Vetted Medical Experts in 24 Hours
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Side Text */}
            <div className="lg:col-span-2">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Connect with 2,000+ vetted medical specialists instantly. Reduce coordination time by 80% and deliver better outcomes for your personal injury clients.
              </p>

              {/* Value Props */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-1" />
                  <span className="text-base text-foreground"><strong>Pre-vetted specialists</strong> in 50+ states (no more cold calls)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-1" />
                  <span className="text-base text-foreground"><strong>24-hour response guarantee</strong> (clients get care fast)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-1" />
                  <span className="text-base text-foreground"><strong>All-in-one platform</strong> (scheduling, records, billing)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mb-8 text-center">
                <Link
                  to="/signup"
                  className="inline-block px-8 py-3 bg-sage-green text-white font-semibold rounded-lg hover:bg-sage-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start 14-Day Free Trial
                </Link>
                <p className="text-sm text-gray-600 mt-3">
                  No credit card required • Cancel anytime
                </p>
              </div>

              {/* Trust Bar */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    ✓ <strong className="text-primary">Trusted by 500+ personal injury law firms</strong>
                  </span>
                  <span className="hidden sm:inline text-muted-foreground">|</span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    ⭐ <strong className="text-primary">4.9/5 average rating</strong>
                  </span>
                  <span className="hidden sm:inline text-muted-foreground">|</span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    🔒 <strong className="text-primary">HIPAA compliant</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="lg:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80"
                alt="Professional business meeting with documents and handshake representing medical-legal collaboration"
                className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section id="how-it-works" className="py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get Started in 3 Simple Steps</h2>
            <div className="w-16 h-1 bg-sage-green mx-auto mb-6"></div>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              From search to coordination in minutes, not days
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-muted rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
                  alt="Modern business analytics dashboard on computer screen showing professional interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                <div className="absolute top-4 left-4 text-6xl font-bold text-white opacity-80">01</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Set Up Your Practice Profile</h3>
                <p className="text-foreground leading-relaxed">
                  Attorneys and providers can sign up in 5 minutes. Create a detailed profile highlighting your specialties, experience, and service areas.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-muted rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80"
                  alt="Professional using laptop for searching and connecting with medical specialists"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                <div className="absolute top-4 left-4 text-6xl font-bold text-white opacity-80">02</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Find the Right Specialist</h3>
                <p className="text-foreground leading-relaxed">
                  Use advanced search with instant results. Filter by specialty, location, and availability to find the perfect match for your case needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-muted rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80"
                  alt="Team collaboration meeting with professionals coordinating cases and appointments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                <div className="absolute top-4 left-4 text-6xl font-bold text-white opacity-80">03</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Coordinate & Close Cases Faster</h3>
                <p className="text-foreground leading-relaxed">
                  All tools in one dashboard. Schedule appointments, share records securely, track progress, and close cases faster with streamlined coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS BAR */}
      <section className="w-full bg-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {/* Stat 1 */}
            <div className="text-center md:border-r md:border-gray-600 md:border-r-opacity-20">
              <Shield className="w-8 h-8 mx-auto mb-4 text-sage-green" />
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-gray-300 text-lg">Law Firms</div>
            </div>
            {/* Stat 2 */}
            <div className="text-center md:border-r md:border-gray-600 md:border-r-opacity-20">
              <Stethoscope className="w-8 h-8 mx-auto mb-4 text-sage-green" />
              <div className="text-5xl md:text-6xl font-bold mb-2">2,000+</div>
              <div className="text-gray-300 text-lg">Medical Providers</div>
            </div>
            {/* Stat 3 */}
            <div className="text-center md:border-r md:border-gray-600 md:border-r-opacity-20">
              <FileText className="w-8 h-8 mx-auto mb-4 text-sage-green" />
              <div className="text-5xl md:text-6xl font-bold mb-2">50,000+</div>
              <div className="text-gray-300 text-lg">Cases Coordinated</div>
            </div>
            {/* Stat 4 */}
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-sage-green" />
              <div className="text-5xl md:text-6xl font-bold mb-2">24hr</div>
              <div className="text-gray-300 text-lg">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOR ATTORNEYS */}
      <section id="for-attorneys" className="py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80"
                alt="Attorney reviewing legal documents and medical records in professional law office"
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="text-teal font-bold uppercase text-sm mb-4 tracking-widest">For Attorneys</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Find Trusted Medical Experts Fast
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-8 max-w-lg">
                Access our network of 2,000+ pre-vetted medical providers specializing in personal injury cases. Filter by specialty, location, experience, and availability. Review detailed provider profiles including credentials, case history, and peer reviews.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Advanced filtering and search</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Instant connection requests</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Integrated case management</span>
                </div>
              </div>

              <Link to="/features#attorneys" className="text-teal font-semibold text-lg hover:underline inline-flex items-center group">
                Learn more for attorneys
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOR PROVIDERS */}
      <section id="for-providers" className="py-12 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-teal font-bold uppercase text-sm mb-4 tracking-widest">For Providers</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Grow Your Practice with Quality Referrals
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-8 max-w-lg">
                Join our exclusive network of trusted medical providers. Receive qualified referrals from personal injury attorneys across the country. Manage your availability, specialties, and service areas through an intuitive dashboard.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Pre-qualified case referrals</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Flexible scheduling tools</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Secure document sharing</span>
                </div>
              </div>

              <Link to="/features#providers" className="text-teal font-semibold text-lg hover:underline inline-flex items-center group">
                Learn more for providers
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
                alt="Medical professional consulting with patient in modern healthcare office"
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Trusted by Legal and Medical Professionals
            </h2>
            <div className="w-16 h-1 bg-sage-green mx-auto"></div>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-muted p-12 rounded-xl relative">
            {/* Testimonial Content */}
            <div className="text-center mb-8">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-sage-green fill-sage-green" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-2xl italic text-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage-green to-teal text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Author */}
              <h3 className="text-2xl font-bold text-primary mb-2">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-foreground text-lg mb-1">
                {testimonials[currentTestimonial].title}
              </p>
              <p className="text-gray-600 text-base">
                {testimonials[currentTestimonial].location}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="p-2 hover:bg-card rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-teal"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                className="p-2 hover:bg-card rounded-full transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-sage-green mx-auto mb-6"></div>
            <p className="text-xl text-foreground">
              Everything you need to know about getting started
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-muted rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-primary pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5">
                    <p className="text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-foreground mt-12">
            Still have questions?{" "}
            <Link to="/contact" className="text-teal font-semibold hover:underline">
              Contact our team
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: PRICING PREVIEW */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <div className="w-16 h-1 bg-sage-green mx-auto mb-6"></div>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Choose the plan that fits your practice • No long-term contracts
            </p>
          </div>

          {/* Pricing Cards - Two Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Attorneys */}
            <div className="bg-card p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-legal-gold" />
                <h3 className="text-3xl font-bold text-primary">For Attorneys</h3>
              </div>
              <div className="mb-6">
                <p className="text-lg text-foreground mb-4">
                  Connect with vetted medical experts instantly for your personal injury cases
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-foreground">Plans starting at</span>
                  <span className="text-4xl font-bold text-primary">$99</span>
                  <span className="text-lg text-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Access to 2,000+ medical providers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Advanced search and filtering</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Case coordination tools</span>
                </li>
              </ul>
              <Link
                to="/pricing?type=attorney"
                className="block w-full text-center bg-sage-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-sage-green-600 transition-colors duration-300"
              >
                View Attorney Plans →
              </Link>
            </div>

            {/* For Providers */}
            <div className="bg-card p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-8 h-8 text-medical-teal" />
                <h3 className="text-3xl font-bold text-primary">For Providers</h3>
              </div>
              <div className="mb-6">
                <p className="text-lg text-foreground mb-4">
                  Grow your practice by connecting with attorneys who need your expertise
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-foreground">Plans starting at</span>
                  <span className="text-4xl font-bold text-primary">Free</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Reach 500+ law firms instantly</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Professional profile showcase</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Direct case opportunities</span>
                </li>
              </ul>
              <Link
                to="/pricing?type=provider"
                className="block w-full text-center bg-sage-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-sage-green-600 transition-colors duration-300"
              >
                View Provider Plans →
              </Link>
            </div>
          </div>

          <p className="text-center text-foreground mt-12">
            All plans include 24-hour response guarantee and HIPAA-compliant platform • 14-day free trial •{" "}
            <Link to="/pricing" className="text-teal font-semibold hover:underline">
              See full pricing details
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: DUAL CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-navy to-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join 500+ Law Firms Growing with MedNexus
            </h2>
            <p className="text-xl text-white text-opacity-80 max-w-2xl mx-auto">
              Limited onboarding spots available this month • Start your 14-day free trial today
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Attorney Card */}
            <div className="bg-card p-12 rounded-lg text-center">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-4">For Attorneys</h3>
              <p className="text-foreground text-lg mb-8">
                Access our vetted provider network and streamline case coordination
              </p>
              <Link
                to="/signup?type=attorney"
                className="block w-full bg-sage-green text-white font-semibold py-4 px-6 rounded-lg hover:bg-sage-green-600 transition-colors duration-300"
              >
                Sign Up as Attorney
              </Link>
            </div>

            {/* Provider Card */}
            <div className="bg-card p-12 rounded-lg text-center">
              <Plus className="w-12 h-12 text-teal mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-4">For Providers</h3>
              <p className="text-foreground text-lg mb-8">
                Join our exclusive network and receive quality referrals from personal injury attorneys
              </p>
              <Link
                to="/signup?type=provider"
                className="block w-full bg-teal text-white font-semibold py-4 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Sign Up as Provider
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
