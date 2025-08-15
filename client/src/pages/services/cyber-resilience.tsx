import { RotateCcw, FileText, CheckCircle, BarChart3, HardDrive, MessageSquare, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import EnterpriseMetrics from "@/components/ui/EnterpriseMetrics";

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
      icon: <CheckCircle className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "ISO 22301 BCMS Assessment",
      description: "Gap analysis, risk assessment, BCMS maturity, RTO/RPO validation (incl. third parties), exercises, and a continual improvement plan.",
      href: "/services/iso-22301-bcms-assessment"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "ISO 22317 Business Impact Analysis",
      description: "Critical activity identification, impact-over-time modeling, dependency mapping, and defensible RTO/RPO targets for recovery planning.",
      href: "/services/business-impact-analysis-iso-22301"
    },
    {
      icon: <HardDrive className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "ISO 27031 ICT Readiness & Disaster Recovery",
      description: "ICT risk & threat assessment, DR strategy validation (alt sites/cloud failover), governance & documentation review, and progressive testing.",
      href: "/services/iso-27031-ict-readiness-disaster-recovery"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Crisis Communication & Incident Response (NIST CSF RS/RC)",
      description: "Response governance, stakeholder matrices, internal/external comms plans, regulator/customer notifications, playbooks, tabletop exercises, and after‑action improvements.",
      href: "/services/crisis-communication-incident-response"
    },
    {
      icon: <Users className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "Supplier & Third‑Party Continuity",
      description: "Continuity requirements in contracts, dependency inventories, attestation review, and coordinated testing with critical providers.",
      href: "/services/supplier-third-party-continuity"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Ransomware Readiness & Recovery",
      description: "Data protection, backup/restore validation, isolation/containment procedures, and recovery time verification for high‑value services.",
      href: "/services/ransomware-readiness-recovery"
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
                Independent continuity and resilience assessments aligned with ISO 22301, ISO 22317, and ISO/IEC 27031, with response and recovery practices mapped to the NIST Cybersecurity Framework (Respond/Recover). We provide management and the Audit Committee with confidence that continuity capabilities are risk-based, measurable, and aligned to strategic objectives, customer expectations, and regulatory requirements.
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
              <div className="w-full max-w-5xl mx-auto">
                <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/40 rounded-2xl shadow-2xl border border-slate-200/50 p-8 md:p-12 backdrop-blur-sm">
                  {/* Professional overlay frame */}
                  <div className="absolute inset-4 bg-gradient-to-br from-emerald-50/30 via-transparent to-blue-50/30 rounded-xl pointer-events-none"></div>
                  
                  {/* Main image container */}
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-inner border border-white/60">
                    <img
                      src="/bcp-diagram.png"
                      alt="Business Continuity Planning Diagram - Time Is Precious When An Event Occurs"
                      className="w-full h-auto rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-500"
                      style={{
                        filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.12)) brightness(1.02) contrast(1.05)',
                        backgroundColor: 'white',
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>
                  
                  {/* Professional corner accent */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-600/15 to-emerald-600/15 rounded-full blur-lg"></div>
                </div>
              </div>
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
