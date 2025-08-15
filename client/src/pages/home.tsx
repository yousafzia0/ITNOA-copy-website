import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, RotateCcw, University, Heart, Landmark, Cpu, Factory, GraduationCap, ShoppingCart, Zap, Star } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Home() {
  const serviceHighlights = [
    {
      icon: <Search className="h-8 w-8 text-[#01411c] icon-search" />,
      title: "IT Audit & Assurance Services",
      description: "Independent IT audit engagements conducted in accordance with IIA International Standards, designed to provide the Audit Committee and Board with objective assurance that IT governance, risk management, and internal control frameworks operate effectively within the organization's established risk appetite and tolerance.",
      href: "/services/it-audit"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#01411c] icon-shield" />,
      title: "Governance, Risk & Compliance (GRC) Advisory",
      description: "Enterprise GRC program development and implementation services aligned with IIA's Three Lines of Defense Model and international standards including NIST CSF and ISO/IEC 27001. We establish defensible governance frameworks, risk management processes, and compliance monitoring that satisfy Board oversight and regulatory expectations.",
      href: "/services/grc-consulting"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-[#01411c] icon-rotate" />,
      title: "Business Continuity & Cyber Resilience Assurance",
      description: "Independent business continuity and cyber resilience assessments aligned with ISO 22301, ISO 22317, and ISO/IEC 27031 standards. Response and recovery practices are mapped to the NIST Cybersecurity Framework (Respond/Recover). We provide management and the Audit Committee with objective assurance that continuity capabilities are risk-based, measurable, and aligned to strategic objectives and regulatory requirements.",
      href: "/services/cyber-resilience"
    }
  ];

  const industries = [
    { icon: <University className="h-8 w-8 text-[#01411c] icon-bounce" />, name: "Financial Services", desc: "Specialized audit services for banks, credit unions, and financial institutions including Fed/OCC examination readiness and FFIEC compliance assessments." },
    { icon: <Heart className="h-8 w-8 text-[#01411c] icon-pulse" />, name: "Healthcare", desc: "HIPAA Security Rule compliance audits and Protected Health Information (PHI) safeguard assessments for healthcare providers and covered entities." },
    { icon: <Landmark className="h-8 w-8 text-[#01411c] icon-glow" />, name: "Government", desc: "FISMA compliance assessments, FedRAMP readiness evaluations, and cybersecurity framework implementations for federal, state, and local government entities." },
    { icon: <Cpu className="h-8 w-8 text-[#01411c] icon-settings" />, name: "Technology", desc: "SOC 2 compliance assessments, software development lifecycle (SDLC) security reviews, and cloud security governance for technology companies." },
    { icon: <Factory className="h-8 w-8 text-[#01411c] icon-shake" />, name: "Manufacturing", desc: "Industrial control systems (ICS) security assessments, operational technology (OT) risk evaluations, and supply chain security audits." },
    { icon: <GraduationCap className="h-8 w-8 text-[#01411c] icon-float" />, name: "Education", desc: "FERPA compliance assessments, student data protection reviews, and cybersecurity program evaluations for educational institutions." },
    { icon: <ShoppingCart className="h-8 w-8 text-[#01411c] icon-scale" />, name: "Retail", desc: "PCI DSS compliance assessments, payment card data security evaluations, and customer data protection audits for retail organizations." },
    { icon: <Zap className="h-8 w-8 text-[#01411c] icon-pulse" />, name: "Energy", desc: "Critical infrastructure protection assessments, NERC CIP compliance evaluations, and operational technology security reviews for energy and utility companies." }
  ];

  const testimonials = [
    {
      name: "Shah G",
      role: "Chief Audit Executive",
      content: "ITNOA's deep expertise in IT audit methodology and PeopleSoft controls made our audit engagement highly effective. Their alignment with IIA Standards provided the Board with confidence in our IT governance framework.",
      initials: "SG"
    },
    {
      name: "Kusick",
      role: "Chief Information Security Officer",
      content: "The team's comprehensive approach to GRC consulting and their understanding of the Three Lines of Defense model significantly strengthened our risk management program and regulatory compliance posture.",
      initials: "SF"
    },
    {
      name: "Oliver Simson",
      role: "Senior IT Audit Manager",
      content: "A trusted partner for independent IT assurance and business continuity assessments. Their board-ready reporting and management action plan development exceeded our expectations.",
      initials: "OS"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Strengthening Organizational 
                <span className="text-[#01411c]"> Assurance & Risk Management</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Independent IT audit services conducted in accordance with IIA International Standards, designed for Chief Audit Executives and Board oversight. 
                We provide objective assurance over IT governance, risk management, and internal control frameworks within your organization's established risk appetite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                    Explore IT Audit Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8 py-4">
                    Consult With An IT Audit Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
                alt="IT audit professionals conducting governance and risk management assessment"
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Independent IT Audit & Assurance Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive audit services designed for Chief Audit Executives, Audit Committees, and Board oversight. 
              All engagements are conducted in accordance with IIA International Standards for Professional Practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serviceHighlights.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#01411c]/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-4 text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industry-Specific Audit Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized audit methodologies and regulatory compliance assessments tailored to industry-specific risk profiles and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-3">{industry.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                IIA Standards-Based Audit Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ITNOA delivers independent IT audit and assurance services that align with the Institute of Internal Auditors (IIA) International Standards for the Professional Practice of Internal Auditing. Our methodology is designed to provide Chief Audit Executives and Board members with objective, risk-based assessments of IT governance, risk management, and internal control effectiveness.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We specialize in Three Lines of Defense model implementation, enterprise risk management framework development, and Board-ready reporting that demonstrates the value of internal audit function in organizational governance and strategic risk management.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white">
                  Schedule An Audit Consultation
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-[#01411c] mb-2">15+</div>
                <div className="text-slate-600">Years of IT Audit Excellence</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-[#01411c] mb-2">500+</div>
                <div className="text-slate-600">Successful Audit Engagements</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-[#01411c] mb-2">50+</div>
                <div className="text-slate-600">Specialized IT Audit Services</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-[#01411c] mb-2">100%</div>
                <div className="text-slate-600">IIA Standards Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Chief Audit Executive Testimonials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by Chief Audit Executives, CISOs, and Board members for independent IT audit and assurance services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#01411c] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-slate-300 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-200 leading-relaxed">{testimonial.content}</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}