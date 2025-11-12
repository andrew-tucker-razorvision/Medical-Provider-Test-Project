/**
 * Contact Page
 * Professional contact page with form and company information
 * Mock form submission with validation and toast notifications
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  User,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Tag,
} from "lucide-react";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  userType: z.string().min(1, "Please select your user type"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock submission (log to console)
      console.log("Contact form submission:", data);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you soon.",
      });

      // Reset form
      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Get In Touch
          </h1>
          <p className="text-charcoal text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-semibold text-navy uppercase tracking-wide"
                    >
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10"
                        {...register("name")}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-navy uppercase tracking-wide"
                    >
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        {...register("email")}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-navy uppercase tracking-wide"
                    >
                      Phone Number (Optional)
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="pl-10"
                        {...register("phone")}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* User Type Select */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="userType"
                      className="text-sm font-semibold text-navy uppercase tracking-wide"
                    >
                      I am a... *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("userType", value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="attorney">Attorney</SelectItem>
                        <SelectItem value="provider">
                          Medical Provider
                        </SelectItem>
                        <SelectItem value="inquiry">
                          General Inquiry
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.userType && (
                      <p className="text-sm text-red-500">
                        {errors.userType.message}
                      </p>
                    )}
                  </div>

                  {/* Subject Select */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-semibold text-navy uppercase tracking-wide"
                    >
                      Subject *
                    </Label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                      <Select
                        onValueChange={(value) => setValue("subject", value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger className="w-full pl-10">
                          <SelectValue placeholder="What is this regarding?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Question
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership Inquiry
                          </SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="billing">
                            Billing Question
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.subject && (
                      <p className="text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-navy uppercase tracking-wide"
                    >
                      Message *
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        className="pl-10 min-h-[150px]"
                        {...register("message")}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-sage-green hover:bg-sage-green/90 text-white font-semibold flex items-center justify-center space-x-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Takes 1 column */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-navy">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy uppercase tracking-wide mb-1">
                      Address
                    </p>
                    <p className="text-charcoal text-sm">
                      123 Medical Plaza
                      <br />
                      Suite 500
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-charcoal text-sm hover:text-teal transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:support@accilink.com"
                      className="text-charcoal text-sm hover:text-teal transition-colors"
                    >
                      support@accilink.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy uppercase tracking-wide mb-1">
                      Business Hours
                    </p>
                    <p className="text-charcoal text-sm">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-charcoal">
                    For urgent matters, please call us directly during business
                    hours. We typically respond to all inquiries within 24
                    hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
