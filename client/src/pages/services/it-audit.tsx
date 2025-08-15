import { Search, Database, Server, Shield, Network, FileText, Building, Heart, GraduationCap, Settings, User, Cloud, Bug, RefreshCw, Users, BarChart3, DollarSign } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ITAudit() {
  const whatWeDo = [
    "All IT audit engagements are conducted in accordance with IIA International Standards for the Professional Practice of Internal Auditing, incorporating ISACA and AICPA methodologies where applicable.",
    "Comprehensive risk-based audit planning with clearly defined scope, objectives, and resource allocation, formally approved by the Chief Audit Executive and communicated to senior management.",
    "Structured engagement management including formal kickoff meetings with auditees to establish audit objectives, timeline, resource requirements, and communication protocols.",
    "Continuous stakeholder communication through weekly progress reporting to maintain transparency, manage expectations, and facilitate timely issue resolution.",
    "Evidence-based testing procedures with real-time workpaper review capabilities, ensuring audit quality and enabling prompt identification and escalation of significant control deficiencies.",
    "Timely delivery of comprehensive audit reports with clear findings, risk ratings, and actionable management recommendations aligned with organizational risk appetite.",
    "Agile audit methodology focused on value-added insights, efficient resource utilization, and adherence to approved engagement budgets and timelines."
  ];

  const whyItMatters = [
    "Provides objective assurance to the Board and Audit Committee regarding the adequacy and effectiveness of IT governance, risk management, and internal control frameworks.",
    "Utilizes CMMI (Capability Maturity Model Integration) and COBIT frameworks to assess control maturity and effectiveness, providing quantitative risk-based assessments.",
    "Establishes clear accountability by identifying process owners, control owners, and risk owners, ensuring proper segregation of duties within the Three Lines of Defense model.",
    "Delivers comprehensive management action plans with specific remediation timelines, accountability assignments, and follow-up procedures to ensure sustainable control improvement and regulatory compliance.",
    "Provides detailed control narratives and testing procedures that support external auditor reliance and regulatory examination readiness."
  ];

  const comprehensiveServices = [
    {
      icon: <Settings className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "SAP Security & Governance Audits",
      description: "Comprehensive SAP ERP security assessments including GRC implementation, segregation of duties analysis, and financial reporting control evaluations.",
      href: "/services/sap-audit"
    },
    {
      icon: <Server className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "PeopleSoft Financial & HCM Audits",
      description: "Oracle PeopleSoft security evaluations including SOX-relevant ITGC testing, privileged access reviews, and data integrity assessments.",
      href: "/services/peoplesoft-audit"
    },
    {
      icon: <User className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Workday HCM Security Assessments",
      description: "Workday Human Capital Management security reviews including role-based access controls, business process controls, and integration security testing.",
      href: "/services/workday-hcm-security"
    },
    {
      icon: <Database className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "Database Security Control Audits",
      description: "Enterprise database security assessments covering SQL Server, Oracle, MySQL, and PostgreSQL access controls, encryption, and audit logging.",
      href: "/services/database-security-audit"
    },
    {
      icon: <Server className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "Operating System Control Audits",
      description: "Windows and Linux operating system security assessments including privileged access management, system hardening, and security monitoring controls.",
      href: "/services/os-audit"
    },
    {
      icon: <Network className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Network Security Architecture Reviews",
      description: "Network infrastructure security assessments including firewall rule governance, network segmentation effectiveness, and secure remote access controls.",
      href: "/services/network-security"
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#01411c] icon-scale" />,
      title: "Cloud Security Governance Audits (AWS/Azure/GCP)",
      description: "Cloud infrastructure security assessments including identity and access management, configuration baselines, security monitoring, and CIS benchmark compliance.",
      href: "/services/cloud-security-audits"
    },
    {
      icon: <Bug className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Application Security & SDLC Audits",
      description: "Software development lifecycle security assessments including secure coding practices, CI/CD pipeline security, SAST/DAST implementation, and change management controls.",
      href: "/services/application-security-sdlc"
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "IT Change Management Audits",
      description: "IT change management process assessments including change approval workflows, emergency change procedures, and change success rate monitoring.",
      href: "/services/it-governance-cobit"
    },
    {
      icon: <Users className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Identity & Access Management Audits",
      description: "Enterprise IAM control assessments including privileged access management, access certification processes, and role-based access control effectiveness.",
      href: "/services/identity-access-management"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "IT Governance & Performance Audits",
      description: "IT governance framework assessments based on COBIT principles including IT strategy alignment, performance measurement, and resource optimization.",
      href: "/services/it-governance-cobit"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "SOX IT General Controls (ITGC) Audits",
      description: "Sarbanes-Oxley IT general controls assessments including access controls, change management, system operations, and data backup/recovery controls.",
      href: "/services/sox-it-general-controls"
    }
  ];

  const industries = [
    { icon: <Building className="h-8 w-8 text-[#01411c] icon-bounce" />, name: "Financial Services", desc: "Specialized audit services for banks and financial institutions including Fed/OCC examination readiness and FFIEC compliance." },
    { icon: <Heart className="h-8 w-8 text-[#01411c] icon-pulse" />, name: "Healthcare", desc: "HIPAA Security Rule compliance audits and Protected Health Information safeguard assessments for healthcare providers." },
    { icon: <GraduationCap className="h-8 w-8 text-[#01411c] icon-float" />, name: "Public Companies", desc: "SOX 404 IT general controls audits and management testing coordination for publicly traded companies." }
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
                  <Search className="h-10 w-10 text-[#01411c]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  IT Audit & <span className="text-[#01411c]">Assurance Services</span>
                </h1>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Independent IT audit engagements conducted in accordance with IIA International Standards, designed to provide 
                Chief Audit Executives and Board members with objective assurance over IT governance, risk management, and 
                internal control frameworks within established organizational risk appetite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/become-client">
                  <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                    Schedule IT Audit Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8 py-4">
                    Contact Our Audit Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                IIA Standards-Based Audit Methodology
              </h2>
              <div className="space-y-6">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#01411c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                Value to Chief Audit Executives
              </h2>
              <div className="space-y-6">
                {whyItMatters.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#01411c]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight className="w-3 h-3 text-[#01411c]" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive IT Audit Service Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized audit services covering all critical IT domains with risk-based methodologies 
              and Board-ready reporting for effective governance oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {comprehensiveServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-[#01411c]/30">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="font-semibold text-lg ml-3 text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-[#01411c] text-sm font-medium">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industry-Specific Audit Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized audit approaches tailored to industry-specific regulatory requirements and risk profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-slate-900 mb-4">{industry.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01411c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your IT Governance Framework?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our IT audit experts to discuss your organizational risk appetite, 
            audit universe development, and Board reporting requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-client">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#01411c] px-8 py-4">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#01411c] hover:bg-white/90 px-8 py-4">
                Contact IT Audit Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}