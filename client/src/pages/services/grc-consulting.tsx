import { Link } from "wouter";
import { Shield, Tag, Settings, CreditCard, Bug, Cloud, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { AnimatedGRCDashboard } from "@/components/service-animations";

export default function GRCConsulting() {
  const whatWeDo = [
    "Governance framework development and implementation across all organizational levels",
    "Risk assessment and management program design tailored to your business objectives",
    "Compliance mapping and gap analysis for multiple regulatory requirements",
    "Policy and procedure development with clear implementation guidelines",
    "Security control selection and implementation based on risk profiles",
    "Third-party risk management and vendor security assessment programs",
    "Incident response planning and business continuity integration",
    "Ongoing monitoring and reporting mechanisms for continuous improvement"
  ];

  const comprehensiveServices = [
    {
      icon: <Tag className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "ISO 27001 Implementation",
      description: "Achieve robust information security management with ISO 27001 certification. Safeguard business data and build stakeholder trust.",
      href: "/services/iso-27001-implementation"
    },
    {
      icon: <Settings className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "NIST CSF Implementation",
      description: "Strengthen cybersecurity posture with NIST Cybersecurity Framework. Enhance risk management and improve security resilience.",
      href: "/services/nist-csf-implementation"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "PCI DSS Assessments",
      description: "Ensure payment data security and PCI DSS compliance. Protect sensitive cardholder information and mitigate financial risks.",
      href: "/services/pci-dss-assessments"
    },
    {
      icon: <Bug className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Penetration Testing",
      description: "Identify system vulnerabilities with expert penetration testing. Ensure robust security and protect critical business data.",
      href: "/services/penetration-testing"
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Cloud Security Assessments",
      description: "Comprehensive cloud security evaluations to identify vulnerabilities and ensure best practices in cloud infrastructure protection.",
      href: "/services/cloud-security-assessments"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "SOC 2 Compliance",
      description: "Achieve SOC 2 compliance with expert guidance. Meet the highest standards for security, availability, and confidentiality.",
      href: "/services/soc-2"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#01411c]/10 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="h-10 w-10 text-[#01411c]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  Information Security <span className="text-[#01411c]">(ISC)</span> Consulting
                </h1>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Comprehensive Governance, Risk, and Compliance consulting to establish robust security frameworks, 
                meet regulatory requirements, and drive business value through effective risk management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/become-client">
                  <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8 py-4">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <AnimatedGRCDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                What We Do
              </h2>
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#01411c] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-600 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                Why It Matters
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Effective Governance, Risk, and Compliance (GRC) programs are fundamental to organizational resilience 
                and regulatory adherence. Our GRC consulting services help you establish comprehensive frameworks that 
                not only meet regulatory requirements but also drive business value through improved risk management 
                and operational efficiency. With increasing regulatory scrutiny and evolving threat landscapes, a 
                well-designed GRC program protects your organization from financial penalties, reputational damage, 
                and operational disruptions.
              </p>
              <Link href="/become-client">
                <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white py-4 text-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From compliance assessments to penetration testing, we deliver 
              specialized IT security solutions that protect and empower your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveServices.map((service, index) => (
              <Card key={index} className="group bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#01411c]/10 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="ghost" className="text-[#01411c] hover:text-[#012d13] p-0 h-auto text-sm font-semibold">
                      Explore More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01411c] text-white relative overflow-hidden">
        <div className="geometric-pattern absolute inset-0 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and take the first step 
            towards comprehensive cybersecurity protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-client">
              <Button size="lg" className="bg-white text-[#01411c] hover:bg-[#01411c] hover:text-white transition-all duration-300">
                Become a Client
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#01411c] hover:bg-[#01411c] hover:text-white transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
