import { Link } from "wouter";
import { Shield, Tag, Settings, CreditCard, Bug, Cloud, CheckCircle, ArrowRight, FileText, Brain, Code, Users, Zap, TrendingUp, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
      description: "Information Security Management System implementation and certification support.",
      href: "/services/iso-27001-implementation"
    },
    {
      icon: <Settings className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "NIST CSF Implementation",
      description: "NIST Cybersecurity Framework adoption and implementation guidance.",
      href: "/services/nist-csf-implementation"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "PCI DSS Assessments",
      description: "Payment Card Industry Data Security Standard compliance assessments.",
      href: "/services/pci-dss-assessments"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "SOC 2 Compliance",
      description: "Service Organization Control 2 audits and compliance support.",
      href: "/services/soc-2"
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Cloud Security Assessments",
      description: "AWS, Azure, and Google Cloud security evaluations and assessments.",
      href: "/services/cloud-security-assessments"
    },
    {
      icon: <Bug className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "Penetration Testing (Program Oversight)",
      description: "Comprehensive security testing and penetration testing program oversight.",
      href: "/services/penetration-testing"
    },
    {
      icon: <FileText className="h-6 w-6 text-[#01411c] icon-scale" />,
      title: "NIST 800‑171 Readiness",
      description: "NIST SP 800-171 compliance for controlled unclassified information.",
      href: "/services/nist-171-security-assessment"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Cyber Essentials (UK)",
      description: "UK government cybersecurity certification scheme compliance.",
      href: "/services/cyber-essentials"
    },
    {
      icon: <Brain className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "AI Governance & Risk",
      description: "AI governance frameworks and risk management assessments.",
      href: "/services/ai-governance-risk"
    },
    {
      icon: <Code className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "DevSecOps & Secure SDLC",
      description: "DevSecOps implementation and secure development lifecycle.",
      href: "/services/devsecops-secure-sdlc"
    },
    {
      icon: <Users className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Third‑Party / Vendor Risk",
      description: "Third-party security assessments and vendor risk management.",
      href: "/services/third-party-vendor-risk"
    },
    {
      icon: <Zap className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "Incident Response Program",
      description: "Incident response program development and capability assessment.",
      href: "/services/incident-response-program"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Data Privacy & Protection",
      description: "Data protection compliance and privacy control assessments.",
      href: "/services/data-protection-privacy"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#01411c] icon-scale" />,
      title: "Risk Management Frameworks",
      description: "Enterprise risk management framework development and implementation.",
      href: "/services/risk-management-frameworks"
    },
    {
      icon: <Activity className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Cybersecurity Maturity Assessments",
      description: "Cybersecurity program maturity evaluation and improvement planning.",
      href: "/services/cybersecurity-maturity-assessments"
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "Cloud Security Posture Mgmt (CSPM)",
      description: "Cloud security posture management and continuous monitoring.",
      href: "/services/cloud-security-posture-management"
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
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
                alt="Information Security GRC Consulting"
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
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
