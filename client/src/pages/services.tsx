import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, RotateCcw, Tag, Settings, CreditCard, Bug, Cloud, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Services() {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-[#01411c]" />,
      title: "IT Audit",
      description: "Comprehensive IT audits to identify vulnerabilities, assess compliance, and strengthen your security posture with actionable recommendations.",
      href: "/services/it-audit"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#01411c]" />,
      title: "Information Security (GRC) Consulting",
      description: "Governance, Risk, and Compliance consulting to establish robust security frameworks and meet regulatory requirements effectively.",
      href: "/services/grc-consulting"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-[#01411c]" />,
      title: "Business Continuity / Cyber Resilience",
      description: "Develop comprehensive business continuity and cyber resilience plans to ensure operational stability during disruptions.",
      href: "/services/cyber-resilience"
    },
    {
      icon: <Bug className="h-8 w-8 text-[#01411c]" />,
      title: "Penetration Testing",
      description: "Identify system vulnerabilities with expert penetration testing services. Ensure robust security and protect critical business data.",
      href: "/services/penetration-testing"
    },
    {
      icon: <Tag className="h-8 w-8 text-[#01411c]" />,
      title: "ISO 27001 Implementation",
      description: "Achieve robust information security management with ISO 27001 certification. Safeguard business data and build stakeholder trust.",
      href: "/services/iso-27001-implementation"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#01411c]" />,
      title: "NIST CSF Implementation",
      description: "Strengthen cybersecurity posture with NIST Cybersecurity Framework implementation. Enhance risk management and improve security resilience.",
      href: "/services/nist-csf-implementation"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#01411c]" />,
      title: "PCI DSS Assessments",
      description: "Ensure payment data security and PCI DSS compliance. Protect sensitive cardholder information and mitigate financial risks.",
      href: "/services/pci-dss-assessments"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-[#01411c]" />,
      title: "Business Continuity Planning",
      description: "Comprehensive Business Continuity Plans (BCP) to protect your organization from unexpected disruptions and ensure smooth operations.",
      href: "/services/business-continuity-planning"
    },
    {
      icon: <Cloud className="h-8 w-8 text-[#01411c]" />,
      title: "Cloud Security Assessments",
      description: "Identify and address vulnerabilities in your cloud infrastructure, ensuring alignment with security best practices and data protection.",
      href: "/services/cloud-security-assessments"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#01411c]" />,
      title: "NIST 800-171 Security Assessment",
      description: "NIST 800-171 Security Assessments to assist organizations in meeting government requirements for protecting Controlled Unclassified Information (CUI).",
      href: "/services/nist-171-security-assessment"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#01411c]" />,
      title: "Cyber Essentials",
      description: "Achieve Cyber Essentials certification with our expert support. Safeguard your business from cyber threats and demonstrate security commitment.",
      href: "/services/cyber-essentials"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#01411c]" />,
      title: "SOC 2",
      description: "Achieve SOC 2 compliance with our expert services. Ensure your organization meets the highest standards for security, availability, and confidentiality.",
      href: "/services/soc-2"
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
              Our <span className="text-[#01411c]">Services</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions designed to protect your business, 
              ensure compliance, and build resilience against evolving digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <Link href={service.href}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#01411c]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#01411c]/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-[#01411c] font-semibold group-hover:text-[#012d13] transition-colors duration-300">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
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
            Contact our cybersecurity experts today for a free consultation and discover 
            how we can help protect your organization from digital threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-client">
              <Button size="lg" variant="secondary" className="bg-white text-[#01411c] hover:bg-slate-100">
                Become a Client
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#01411c]">
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
