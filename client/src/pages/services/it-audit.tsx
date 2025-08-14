import { Search, Database, Server, Shield, Network, FileText, Building, Heart, GraduationCap, Settings, User, Cloud, Bug, RefreshCw, Users, BarChart3, DollarSign } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ITAudit() {
  const whatWeDo = [
    "Our audits are conducted with precision, following ISACA, IIA, and AICPA standards.",
    "We ensure the scope and planning are clearly defined, thoroughly documented, and formally approved before fieldwork begins.",
    "A formal kickoff meeting is scheduled so the auditee fully understands the audit objectives, plan, and requirements.",
    "We provide weekly progress updates to maintain transparency and alignment.",
    "Testing is performed in a way that enables real-time workpaper reviews, ensuring timely feedback and issue resolution.",
    "Audit reports are delivered promptly at the conclusion of fieldwork.",
    "Our audits follow an agile methodology, enabling on-time completion within the hours budgeted."
  ];

  const whyItMatters = [
    "Adds value by identifying key issues, creates awareness so IT staff can understand  control design and control effectiveness.",
    "We use the CMMI model  (Capability Maturity Model  Integration) to assess control strength objectively.",
    "We identify control frequencies, process owners, control owners, and risk owners to ensure an entrenched understanding of controls and that auditees understand and are better prepared for the taxonomy used.",
    "Recommendations and Management Action Plans are provided in the report to ensure the effectiveness of controls is  maintained going forward . We provide control narratives per each assessment."
  ];

  const comprehensiveServices = [
    {
      icon: <Settings className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "SAP Audits",
      description: "Comprehensive SAP security assessments and compliance reviews to ensure data integrity and access controls.",
      href: "/services/sap-audit"
    },
    {
      icon: <Server className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "PeopleSoft Audits",
      description: "Oracle PeopleSoft security evaluations and risk assessments for enterprise applications.",
      href: "/services/peoplesoft-audit"
    },
    {
      icon: <User className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Workday /HCM Security",
      description: "Workday Human Capital Management security assessments and access control reviews.",
      href: "/services/workday-hcm-security"
    },
    {
      icon: <Database className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "Database Security Audits",
      description: "SQL Server, Oracle, MySQL, and PostgreSQL security audits and vulnerability assessments.",
      href: "/services/database-security-audit"
    },
    {
      icon: <Server className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "Operating System Audits",
      description: "Linux and Windows OS security configuration reviews and hardening assessments.",
      href: "/services/os-audit"
    },
    {
      icon: <Network className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Network Security",
      description: "Network infrastructure and firewall security assessments with penetration testing.",
      href: "/services/network-security"
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#01411c] icon-scale" />,
      title: "Cloud Security (AWS / Azure / GCP)",
      description: "Multi-cloud security assessments and compliance validation across cloud platforms.",
      href: "/services/cloud-security-audits"
    },
    {
      icon: <Bug className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Application Security & SDLC",
      description: "Application security testing and secure development lifecycle assessments.",
      href: "/services/application-security-sdlc"
    },
    {
      icon: <User className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "Identity & Access Management (IAM)",
      description: "IAM security assessments and access control framework reviews.",
      href: "/services/identity-access-management"
    },
    {
      icon: <Bug className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Vulnerability & Patch Management",
      description: "Vulnerability assessment and patch management process reviews.",
      href: "/services/vulnerability-patch-management"
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[#01411c] icon-rotate" />,
      title: "Incident Response & Resilience",
      description: "Incident response capability testing and cyber resilience assessments.",
      href: "/services/incident-response-resilience"
    },
    {
      icon: <Users className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "Third-Party / Vendor Risk",
      description: "Third-party security assessments and vendor risk management reviews.",
      href: "/services/third-party-vendor-risk"
    },
    {
      icon: <FileText className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "SOX Auditing",
      description: "Sarbanes-Oxley compliance auditing and IT general controls testing.",
      href: "/services/sox-auditing"
    },
    {
      icon: <Heart className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "HIPAA IT Security Audits",
      description: "Healthcare data protection and HIPAA compliance security assessments.",
      href: "/services/hipaa-security-audits"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Data Protection & Privacy",
      description: "Data protection compliance and privacy control assessments.",
      href: "/services/data-protection-privacy"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#01411c] icon-scale" />,
      title: "IT Governance (COBIT)",
      description: "IT governance framework implementation and COBIT assessments.",
      href: "/services/it-governance-cobit"
    },
    {
      icon: <Building className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "FFIEC Audits",
      description: "Federal Financial Institution Examination Council compliance assessments.",
      href: "/services/ffiec-audits"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "FERPA / FISMA",
      description: "Educational and federal information security compliance assessments.",
      href: "/services/ferpa-fisma"
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
                  <Search className="h-10 w-10 text-[#01411c]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  IT <span className="text-[#01411c]">Audit</span>
                </h1>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Independent IT audits designed to provide the Audit Committee with assurance that governance, risk management, and control frameworks are operating effectively. We evaluate compliance, mitigate critical risks, and confirm alignment with the organization’s risk appetite, tolerance, and strategic objectives.
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
                alt="IT Audit Services"
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
              <div className="space-y-4 mb-8">
                {whyItMatters.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#01411c] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-600 text-lg">{item}</p>
                  </div>
                ))}
              </div>
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
              Our IT Audit Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From enterprise applications to network security, we deliver 
              specialized IT audit solutions that protect and strengthen your digital infrastructure.
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
    </div>
  );
}
