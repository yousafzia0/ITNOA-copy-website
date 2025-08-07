import { Search, Database, Server, Shield, Network, FileText, Building, Heart, GraduationCap } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ITAudit() {
  const whatWeDo = [
    "Our audits are meticulously and methodically created using  ISACA, IIA, and  AICPA guidelines.",
    "We make sure the scope and planning are specific, well-documented, and approved before the start of the audit.",
    "Schedule a formal kickoff meeting to ensure the auditee knows the audit plan and requirements.",
    "We provide updates weekly.",
    "The testing is done so that workpaper reviews are possible in real time.",
    "Audit reports are available at the end of the fieldwork.",
    "Our audits are performed using agile  to ensure  On time completion per hours budgeted."
  ];

  const whyItMatters = [
    "Adds value by identifying key issues, creates awareness so IT staff can understand  control design and control effectiveness.",
    "We use the CMMI model  (Capability Maturity Model  Integration) to assess control strength objectively.",
    "We identify control frequencies, process owners, control owners, and risk owners to ensure an entrenched understanding of controls and that auditees understand and are better prepared for the taxonomy used.",
    "Recommendations and Management Action Plans are provided in the report to ensure the effectiveness of controls is  maintained going forward . We provide control narratives per each assessment."
  ];

  const comprehensiveServices = [
    {
      icon: <Database className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "SAP Audit",
      description: "Comprehensive SAP IT Audit  assessments to ensure data integrity, access controls, and compliance with industry standards.",
      href: "/services/sap-audit"
    },
    {
      icon: <Server className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "Peoplesoft Audit",
      description: "Thorough Peoplesoft application security reviews focusing on configuration, access management, and data protection protocols.",
      href: "/services/peoplesoft-audit"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "Database Security Audit",
      description: "In-depth database security assessments covering encryption, access controls, vulnerability scanning, and compliance verification.",
      href: "/services/database-security-audit"
    },
    {
      icon: <Server className="h-6 w-6 text-[#01411c] icon-pulse" />,
      title: "Linux Windows Operating System Audit",
      description: "Comprehensive OS security evaluations examining system hardening, patch management, and security configurations.",
      href: "/services/os-audit"
    },
    {
      icon: <Network className="h-6 w-6 text-[#01411c] icon-float" />,
      title: "Network Security",
      description: "Advanced network security assessments including firewall configurations, intrusion detection, and network segmentation analysis.",
      href: "/services/network-security"
    },
    {
      icon: <FileText className="h-6 w-6 text-[#01411c] icon-glow" />,
      title: "SOX Auditing",
      description: "Sarbanes-Oxley compliance audits focusing on IT general controls, financial reporting systems, and regulatory requirements.",
      href: "/services/sox-auditing"
    },
    {
      icon: <Building className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "FFIEC Audits",
      description: "Federal Financial Institutions Examination Council compliance assessments for financial sector cybersecurity requirements.",
      href: "/services/ffiec-audits"
    },
    {
      icon: <Heart className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "HIPAA Security Audits",
      description: "Healthcare-focused security audits ensuring patient data protection and HIPAA compliance across all systems.",
      href: "/services/hipaa-security-audits"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#01411c] icon-shake" />,
      title: "FERPA/FISMA",
      description: "Educational and federal security compliance assessments covering data privacy and information system security requirements.",
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
                Comprehensive IT audits to identify vulnerabilities, assess compliance, and strengthen your security posture 
                with actionable recommendations and expert guidance.
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
