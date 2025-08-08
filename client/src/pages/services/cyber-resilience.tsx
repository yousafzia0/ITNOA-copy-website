import { RotateCcw, FileText, CheckCircle } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSecurityNetwork } from "@/components/animated-graphics";

export default function CyberResilience() {
  const whatWeDo = [
    "Business impact analysis and critical asset identification across all business functions",
    "Comprehensive business continuity plan development with detailed recovery procedures",
    "Disaster recovery planning for IT systems and data protection strategies",
    "Crisis management and communication plan development for stakeholder coordination",
    "Tabletop exercises and simulation testing to validate plan effectiveness",
    "Supply chain resilience assessment and third-party dependency mapping",
    "Cyber incident response integration with business continuity processes",
    "Regular plan updates and maintenance to adapt to changing business requirements"
  ];

  const whyItMatters = `
    Business continuity and cyber resilience are critical for maintaining operations during unexpected 
    disruptions, whether from cyberattacks, natural disasters, or other business interruptions. Our 
    comprehensive approach ensures your organization can quickly recover from incidents while minimizing 
    financial losses and reputational damage. With the average cost of downtime reaching thousands of 
    dollars per minute for many organizations, investing in robust business continuity and cyber 
    resilience planning is essential for long-term business survival and competitive advantage.
  `;

  const comprehensiveServices = [
    {
      icon: <FileText className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Business Impact Analysis Per ISO 22301",
      description: "Comprehensive business impact analysis following ISO 22301 standards to identify critical business functions, dependencies, and recovery requirements.",
      href: "/services/business-impact-analysis-iso-22301"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "Business Continuity System Review (ISO22301)",
      description: "Complete business continuity management system review and compliance assessment against ISO 22301 international standard requirements.",
      href: "/services/business-continuity-system-review-iso-22301"
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
                  <RotateCcw className="h-10 w-10 text-[#01411c]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  Business Continuity / <span className="text-[#01411c]">Cyber Resilience</span>
                </h1>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Develop comprehensive business continuity and cyber resilience plans to ensure operational stability during disruptions, 
                minimize downtime, and protect your organization's critical assets.
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
              <AnimatedSecurityNetwork />
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
              Our Business Continuity Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized ISO 22301 compliance services to ensure your business continuity 
              and cyber resilience strategies meet international standards and regulatory requirements.
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
