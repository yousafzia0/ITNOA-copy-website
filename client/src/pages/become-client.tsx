import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Shield, Users, Award, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function BecomeClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    industry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/become-client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: data.message,
        });
        
        setFormData({
          name: "",
          email: "",
          organization: "",
          industry: "",
          message: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-[#01411c]" />,
      title: "Expert Guidance",
      description:
        "Work with certified cybersecurity professionals with decades of experience across multiple industries.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#01411c]" />,
      title: "Personalized Solutions",
      description:
        "Receive customized cybersecurity strategies tailored to your specific business needs and risk profile.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#01411c]" />,
      title: "Proven Results",
      description:
        "Join over 500 organizations that trust us to protect their critical assets and maintain compliance.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Discussion",
      description:
        "Introductory conversation to understand your needs, goals, environment, and areas of concern.",
    },
    {
      step: "2",
      title: "Prelim Assessment (Inquiry Only)",
      description:
        "A high‑level assessment based solely on your input and initial inquiry to scope effort and priorities.",
    },
    {
      step: "3",
      title: "Detailed Review",
      description:
        "Deep‑dive review per discussion: analysis of policies and standards, examination of supporting evidence, and reperformance of controls as required to verify design and operating effectiveness.",
    },
    {
      step: "4",
      title: "Custom Strategy",
      description:
        "A tailored cybersecurity roadmap aligned with business objectives and relevant frameworks (e.g., NIST, ISO, PCI, HIPAA).",
    },

    {
      step: "5",
      title: "Management Action Plan & Implementation Support",
      description:
        "Hands‑on support to build the management action plan, sequence tasks, track remediation, and provide ongoing guidance and monitoring.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Become Our <span className="text-[#01411c]">Client</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We go beyond point-in-time assessments. At ITNOA, we deliver complete cybersecurity solutions. Our commitment doesn’t end with the engagement—we remain actively engaged to support remediation and support our clients. Give us a chance to show what we can do for you – test our expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Benefits & Process */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Why Partner With ITNOA?
              </h2>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-16 h-16 bg-[#01411c]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Our Process
              </h3>

              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-[#01411c] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="shadow-2xl border-[#01411c]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">
                    Get Your Free Consultation
                  </CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll contact you within 24
                    hours to discuss your cybersecurity needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@company.com"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          handleInputChange("organization", e.target.value)
                        }
                        placeholder="Your company name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          handleInputChange("industry", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="financial">
                            Financial Services
                          </SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="manufacturing">
                            Manufacturing
                          </SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="energy">
                            Energy & Utilities
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">
                        Tell us about your cybersecurity needs *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Describe your current challenges, compliance requirements, or specific services you're interested in..."
                        required
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#01411c] hover:bg-[#012d13] text-white py-4 text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#01411c] mr-2" />
                        Free consultation
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#01411c] mr-2" />
                        No commitment required
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            If you have urgent cybersecurity concerns or need immediate support,
            don't hesitate to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4"
              >
                Contact Us Directly
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8 py-4"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
