import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin, Linkedin, Github, MessageCircle, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: data.message,
        });
        
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Failed to Send Message",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "Phone",
      details: "248 795 0202",
      subtitle: "Available 24/7 for emergencies"
    },
    {
      icon: <Mail className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Email", 
      details: "info@itnoa.com",
      subtitle: "We respond within 4 hours"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      subtitle: "Saturday: 10:00 AM - 2:00 PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Location",
      details: "Serving clients nationwide",
      subtitle: "Remote and on-site consultations available"
    }
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
              Get In <span className="text-[#01411c]">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We go beyond point-in-time assessments. At ITNOA, we deliver complete cybersecurity solutions. Our commitment doesn’t end with the engagement—we remain actively engaged to support remediation and support our clients. Give us a chance to show what we can do for you – test our expertise
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start p-4 rounded-lg hover:bg-slate-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#01411c]/10 rounded-lg flex items-center justify-center mr-4 mt-1 group-hover:bg-[#01411c]/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-1">{info.title}</h3>
                      <p className="text-slate-900 font-medium">{info.details}</p>
                      <p className="text-slate-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="group w-12 h-12 bg-[#01411c] rounded-lg flex items-center justify-center text-white hover:bg-[#012d13] transition-colors duration-300">
                    <Linkedin className="h-6 w-6 icon-bounce" />
                  </a>
                  <a href="#" className="group w-12 h-12 bg-[#01411c] rounded-lg flex items-center justify-center text-white hover:bg-[#012d13] transition-colors duration-300">
                    <Github className="h-6 w-6 icon-flip" />
                  </a>
                  <a href="#" className="group w-12 h-12 bg-[#01411c] rounded-lg flex items-center justify-center text-white hover:bg-[#012d13] transition-colors duration-300">
                    <Youtube className="h-6 w-6 icon-pulse" />
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="mt-12 border-[#01411c]/20 bg-[#01411c]/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Emergency Response</h3>
                  <p className="text-slate-600 mb-4">
                    Experiencing a security incident? Our emergency response team is available 24/7.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Emergency Hotline: +1-800-456-HELP
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john.doe@company.com"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="services">Services Information</SelectItem>
                          <SelectItem value="compliance">Compliance Questions</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="emergency">Security Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="How can we help you? Please provide as much detail as possible about your cybersecurity needs or questions..."
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#01411c] hover:bg-[#012d13] text-white py-4 text-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                    <p className="text-sm text-slate-600">
                      By submitting this form, you agree to our privacy policy. 
                      We'll never share your information with third parties.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">How quickly can you respond to security incidents?</h3>
                <p className="text-slate-600">Our emergency response team is available 24/7 and can typically respond to critical incidents within 2-4 hours.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Do you offer remote consultations?</h3>
                <p className="text-slate-600">Yes, we provide both remote and on-site consultations to accommodate your preferences and requirements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">What industries do you specialize in?</h3>
                <p className="text-slate-600">We serve 8+ industries including financial services, healthcare, government, technology, and manufacturing.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">How long does a typical assessment take?</h3>
                <p className="text-slate-600">Assessment timelines vary based on scope, but most comprehensive assessments take 2-4 weeks to complete.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
