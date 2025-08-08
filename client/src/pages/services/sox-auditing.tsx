import { FileText, Shield, Settings } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSOXAuditing } from "@/components/service-animations";

export default function SOXAuditing() {
  const whatWeDo = [
    "Sarbanes-Oxley Act Section 302 and 404 compliance assessment",
    "IT general controls (ITGC) effectiveness evaluation",
    "Financial reporting systems security and integrity review",
    "Access controls and segregation of duties assessment",
    "Change management and version control procedures evaluation",
    "Data backup and recovery procedures testing",
    "Application security controls for financial systems",
    "Documentation and evidence collection for SOX compliance"
  ];

  const whyItMatters = `
    SOX compliance is mandatory for publicly traded companies and critical for maintaining investor confidence 
    and regulatory compliance. Weaknesses in IT general controls can lead to material weaknesses in internal 
    controls over financial reporting, resulting in audit qualifications, regulatory penalties, and loss of 
    stakeholder trust. With increasing reliance on automated financial processes and systems, robust IT 
    controls are essential for ensuring the accuracy and reliability of financial reporting. Our SOX auditing 
    services help organizations establish and maintain effective IT general controls that support reliable 
    financial reporting and meet regulatory requirements.
  `;

  const comprehensiveServices = [
    {
      icon: <Shield className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Cyber Security Requirements",
      description: "Comprehensive cybersecurity requirements assessment for SOX compliance, including threat management and security control implementation.",
      href: "/services/sox-cyber-security-requirements"
    },
    {
      icon: <Settings className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "IT General Controls",
      description: "In-depth evaluation of IT general controls including access management, change controls, and system operations for financial reporting systems.",
      href: "/services/sox-it-general-controls"
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
                  <FileText className="h-10 w-10 text-[#01411c]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  SOX <span className="text-[#01411c]">Auditing</span>
                </h1>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sarbanes-Oxley compliance audits focusing on IT general controls, financial reporting systems, 
                and regulatory requirements to ensure accurate financial reporting and regulatory compliance.
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
              <AnimatedSOXAuditing />
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
                {whyItMatters}
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
              Our SOX Auditing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive SOX compliance services focusing on cybersecurity requirements 
              and IT general controls for reliable financial reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
    </div>
  );
}