import { useState, useEffect } from "react";
import {
  ChevronRight,
  Check,
  Play,
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
} from "lucide-react";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "AcciLink has transformed how we connect clients with medical care. The response time is incredible, and the provider network is exactly what we needed for our personal injury cases.",
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
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="pt-8 pb-16 md:pb-20 bg-gradient-to-br from-white via-white to-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Full Width Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight md:leading-tight mb-12 md:mb-16">
            Connect Personal Injury Attorneys with Trusted Medical Providers Instantly
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Side Text */}
            <div className="lg:col-span-2">
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Streamline case management and improve client outcomes with our vetted network of medical professionals specializing in personal injury cases.
              </p>

              {/* Value Props */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-1" />
                  <span className="text-base text-charcoal">Vetted providers in 50+ states</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-1" />
                  <span className="text-base text-charcoal">24-hour response guarantee</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-1" />
                  <span className="text-base text-charcoal">Seamless case coordination tools</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <button className="px-8 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get Started Free
                </button>
                <a href="#" className="flex items-center text-teal font-semibold hover:underline group">
                  <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Watch 2-min demo
                </a>
              </div>

              {/* Trust Bar */}
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm mb-4">
                  ✓ Trusted by 500+ law firms nationwide
                </p>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="hidden lg:flex items-center justify-center lg:col-span-3">
              <img
                src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional handshake between attorneys and medical providers"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="w-full bg-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {/* Stat 1 */}
            <div className="text-center md:border-r md:border-gray-600 md:border-r-opacity-20">
              <Shield className="w-8 h-8 mx-auto mb-4 text-orange" />
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-gray-300 text-lg">Law Firms</div>
            </div>
            {/* Stat 2 */}
            <div className="text-center md:border-r md:border-gray-600 md:border-r-opacity-20">
              <Stethoscope className="w-8 h-8 mx-auto mb-4 text-orange" />
              <div className="text-5xl md:text-6xl font-bold mb-2">2,000+</div>
              <div className="text-gray-300 text-lg">Medical Providers</div>
            </div>
            {/* Stat 3 */}
            <div className="text-center md:border-r md:border-gray-600 md:border-r-opacity-20">
              <FileText className="w-8 h-8 mx-auto mb-4 text-orange" />
              <div className="text-5xl md:text-6xl font-bold mb-2">50,000+</div>
              <div className="text-gray-300 text-lg">Cases Coordinated</div>
            </div>
            {/* Stat 4 */}
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-orange" />
              <div className="text-5xl md:text-6xl font-bold mb-2">24hr</div>
              <div className="text-gray-300 text-lg">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section id="how-it-works" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">How It Works</h2>
            <div className="w-16 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Connect with the right medical professionals in three simple steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-light-gray rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/267482/pexels-photo-267482.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Create user profile setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-4 left-4 text-6xl font-bold text-white opacity-80">01</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-navy mb-4">Create Your Profile</h3>
                <p className="text-charcoal leading-relaxed">
                  Law firms and providers create detailed profiles highlighting specialties, experience, and service areas.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-light-gray rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Search and connect with providers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-4 left-4 text-6xl font-bold text-white opacity-80">02</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-navy mb-4">Search & Connect</h3>
                <p className="text-charcoal leading-relaxed">
                  Attorneys search our vetted provider network by specialty, location, and availability. Send connection requests instantly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-light-gray rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6809657/pexels-photo-6809657.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coordinate care and appointments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-4 left-4 text-6xl font-bold text-white opacity-80">03</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-navy mb-4">Coordinate Care</h3>
                <p className="text-charcoal leading-relaxed">
                  Manage appointments, share records securely, and track case progress through our integrated platform dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOR ATTORNEYS */}
      <section id="for-attorneys" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Law office with justice scales and attorney workspace"
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="text-teal font-bold uppercase text-sm mb-4 tracking-widest">For Attorneys</p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Find Trusted Medical Experts Fast
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-8 max-w-lg">
                Access our network of 2,000+ pre-vetted medical providers specializing in personal injury cases. Filter by specialty, location, experience, and availability. Review detailed provider profiles including credentials, case history, and peer reviews.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Advanced filtering and search</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Instant connection requests</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Integrated case management</span>
                </div>
              </div>

              <a href="#" className="text-teal font-semibold text-lg hover:underline inline-flex items-center group">
                Learn more for attorneys
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOR PROVIDERS */}
      <section id="for-providers" className="py-12 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-teal font-bold uppercase text-sm mb-4 tracking-widest">For Providers</p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Grow Your Practice with Quality Referrals
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-8 max-w-lg">
                Join our exclusive network of trusted medical providers. Receive qualified referrals from personal injury attorneys across the country. Manage your availability, specialties, and service areas through an intuitive dashboard.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Pre-qualified case referrals</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Flexible scheduling tools</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-success mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Secure document sharing</span>
                </div>
              </div>

              <a href="#" className="text-teal font-semibold text-lg hover:underline inline-flex items-center group">
                Learn more for providers
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://images.pexels.com/photos/6129037/pexels-photo-6129037.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical provider in healthcare workspace with modern technology"
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Trusted by Legal and Medical Professionals
            </h2>
            <div className="w-16 h-1 bg-orange mx-auto"></div>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-light-gray p-12 rounded-xl relative">
            {/* Testimonial Content */}
            <div className="text-center mb-8">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange fill-orange" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-2xl italic text-charcoal mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>

              {/* Author */}
              <h3 className="text-2xl font-bold text-navy mb-2">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-charcoal text-lg mb-1">
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
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-navy" />
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
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6 text-navy" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DUAL CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-navy to-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white text-opacity-80 max-w-2xl mx-auto">
              Join thousands of legal and medical professionals already connected on our platform
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Attorney Card */}
            <div className="bg-white p-12 rounded-lg text-center">
              <Briefcase className="w-12 h-12 text-navy mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-navy mb-4">For Attorneys</h3>
              <p className="text-charcoal text-lg mb-8">
                Access our vetted provider network and streamline case coordination
              </p>
              <button className="w-full bg-orange text-white font-semibold py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Sign Up as Attorney
              </button>
            </div>

            {/* Provider Card */}
            <div className="bg-white p-12 rounded-lg text-center">
              <Plus className="w-12 h-12 text-teal mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-navy mb-4">For Providers</h3>
              <p className="text-charcoal text-lg mb-8">
                Join our exclusive network and receive quality referrals from personal injury attorneys
              </p>
              <button className="w-full bg-teal text-white font-semibold py-4 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300">
                Sign Up as Provider
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
