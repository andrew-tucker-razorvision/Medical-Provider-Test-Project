import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Footer Component
 * Displays site footer with company info, navigation links, and contact details
 * Created: 2024
 */
export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground dark:bg-background dark:border-t dark:border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MedNexus</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Connecting legal and medical professionals for better client outcomes
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-teal transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-teal transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-teal transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Attorneys */}
          <div>
            <h4 className="text-primary-foreground dark:text-foreground font-bold text-sm uppercase mb-6 tracking-widest">
              For Attorneys
            </h4>
            <ul className="space-y-3">
              {[
                "Find Providers",
                "How It Works",
                "Pricing",
                "Success Stories",
                "Attorney Resources",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-teal transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h4 className="text-primary-foreground dark:text-foreground font-bold text-sm uppercase mb-6 tracking-widest">
              For Providers
            </h4>
            <ul className="space-y-3">
              {[
                "Join Network",
                "Provider Benefits",
                "Getting Started",
                "FAQ",
                "Provider Portal Login",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-teal transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground dark:text-foreground font-bold text-sm uppercase mb-6 tracking-widest">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground text-sm hover:text-teal transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground text-sm hover:text-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
              {["Blog", "Careers", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-teal transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:support@mednexus.com"
                className="flex items-center text-muted-foreground text-sm hover:text-teal transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@mednexus.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center text-muted-foreground text-sm hover:text-teal transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 dark:border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 MedNexus. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-teal transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-teal transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground text-sm hover:text-teal transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
