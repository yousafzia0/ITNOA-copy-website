import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Shield, 
  RotateCcw, 
  ArrowRight,
  Database,
  Server,
  Network,
  FileCheck,
  Building2,
  Heart,
  GraduationCap,
  Tag,
  Settings,
  CreditCard,
  CheckCircle,
  Cloud,
  Bug,
  FileText,
  RefreshCw,
  BarChart3,
  User,
  Users,
  DollarSign,
  HardDrive,
  MessageSquare,
  AlertTriangle,
  Zap,
  Code,
  TrendingUp,
  Activity,
  Brain
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Services() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const serviceCategories = [
    {
      id: "it-audit",
      title: "IT Audit",
      icon: <Search className="h-8 w-8 text-[#01411c] icon-search" />,
      description: "ITNOA designs and operates an integrated internal audit function that conforms to the Institute of Internal Auditors (IIA) Standards and Code of Ethics and provides the Audit Committee with independent, objective assurance. Our work establishes a three-year, top-down, risk-based plan; delivers audits on schedule; prioritizes critical risk mitigation; and supports operations within the enterprise’s approved risk appetite and tolerance.",
      mainPage: "/services/it-audit",
      services: [
        { name: "SAP Audits", path: "/services/sap-audit", description: "Comprehensive SAP security assessments and compliance reviews", icon: <Settings className="h-5 w-5 text-[#01411c]" /> },
        { name: "PeopleSoft Audits", path: "/services/peoplesoft-audit", description: "Oracle PeopleSoft security evaluations and risk assessments", icon: <Server className="h-5 w-5 text-[#01411c]" /> },
        { name: "Workday /HCM Security", path: "/services/workday-hcm-security", description: "Workday Human Capital Management security assessments", icon: <User className="h-5 w-5 text-[#01411c]" /> },
        { name: "Database Security Audits", path: "/services/database-security-audit", description: "SQL Server, Oracle, MySQL, and PostgreSQL security audits", icon: <Database className="h-5 w-5 text-[#01411c]" /> },
        { name: "Operating System Audits", path: "/services/os-audit", description: "Linux and Windows OS security configuration reviews", icon: <Server className="h-5 w-5 text-[#01411c]" /> },
        { name: "Network Security", path: "/services/network-security", description: "Network infrastructure and firewall security assessments", icon: <Network className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cloud Security (AWS / Azure / GCP)", path: "/services/cloud-security-audits", description: "Multi-cloud security assessments and compliance validation", icon: <Cloud className="h-5 w-5 text-[#01411c]" /> },
        { name: "Application Security & SDLC", path: "/services/application-security-sdlc", description: "Application security testing and secure development lifecycle", icon: <Bug className="h-5 w-5 text-[#01411c]" /> },
        { name: "Identity & Access Management (IAM)", path: "/services/identity-access-management", description: "IAM security assessments and access control reviews", icon: <User className="h-5 w-5 text-[#01411c]" /> },
        { name: "Vulnerability & Patch Management", path: "/services/vulnerability-patch-management", description: "Vulnerability assessment and patch management reviews", icon: <Bug className="h-5 w-5 text-[#01411c]" /> },
        { name: "Incident Response & Resilience", path: "/services/incident-response-resilience", description: "Incident response capability and cyber resilience testing", icon: <RefreshCw className="h-5 w-5 text-[#01411c]" /> },
        { name: "Third-Party / Vendor Risk", path: "/services/third-party-vendor-risk", description: "Third-party security assessments and vendor risk management", icon: <Users className="h-5 w-5 text-[#01411c]" /> },
        { name: "SOX Auditing", path: "/services/sox-auditing", description: "Sarbanes-Oxley compliance auditing and controls testing", icon: <FileCheck className="h-5 w-5 text-[#01411c]" /> },
        { name: "HIPAA IT Security Audits", path: "/services/hipaa-security-audits", description: "Healthcare data protection and HIPAA compliance assessments", icon: <Heart className="h-5 w-5 text-[#01411c]" /> },
        { name: "Data Protection & Privacy", path: "/services/data-protection-privacy", description: "Data protection compliance and privacy control assessments", icon: <Shield className="h-5 w-5 text-[#01411c]" /> },
        { name: "IT Governance (COBIT)", path: "/services/it-governance-cobit", description: "IT governance framework implementation and COBIT assessments", icon: <BarChart3 className="h-5 w-5 text-[#01411c]" /> },
        { name: "FFIEC Audits", path: "/services/ffiec-audits", description: "Federal Financial Institution Examination Council compliance", icon: <Building2 className="h-5 w-5 text-[#01411c]" /> },
        { name: "FERPA / FISMA", path: "/services/ferpa-fisma", description: "Educational and federal information security compliance", icon: <GraduationCap className="h-5 w-5 text-[#01411c]" /> }
      ]
    },
    {
      id: "information-security",
      title: "Information Security (GRC) Consulting",
      icon: <Shield className="h-8 w-8 text-[#01411c] icon-shield" />,
      description: "Advisory and implementation support to establish governance, risk, and compliance capabilities that meet regulatory expectations and align security controls with business objectives. Services are anchored to recognized frameworks and emphasize defensible documentation and operational practicality.",
      mainPage: "/services/grc-consulting",
      services: [
        { name: "ISO 27001 Implementation", path: "/services/iso-27001-implementation", description: "Information Security Management System implementation", icon: <Tag className="h-5 w-5 text-[#01411c]" /> },
        { name: "NIST CSF Implementation", path: "/services/nist-csf-implementation", description: "NIST Cybersecurity Framework adoption and implementation", icon: <Settings className="h-5 w-5 text-[#01411c]" /> },
        { name: "PCI DSS Assessments", path: "/services/pci-dss-assessments", description: "Payment Card Industry Data Security Standard compliance", icon: <CreditCard className="h-5 w-5 text-[#01411c]" /> },
        { name: "SOC 2 Compliance", path: "/services/soc-2", description: "Service Organization Control 2 audits and compliance", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cloud Security Assessments", path: "/services/cloud-security-assessments", description: "AWS, Azure, and Google Cloud security evaluations", icon: <Cloud className="h-5 w-5 text-[#01411c]" /> },
        { name: "Penetration Testing (Program Oversight)", path: "/services/penetration-testing", description: "Comprehensive security testing and vulnerability assessments", icon: <Bug className="h-5 w-5 text-[#01411c]" /> },
        { name: "NIST 800‑171 Readiness", path: "/services/nist-171-security-assessment", description: "NIST SP 800-171 compliance for controlled unclassified information", icon: <FileText className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cyber Essentials (UK)", path: "/services/cyber-essentials", description: "UK government cybersecurity certification scheme", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> },
        { name: "AI Governance & Risk", path: "/services/ai-governance-risk", description: "AI governance frameworks and risk management assessments", icon: <Brain className="h-5 w-5 text-[#01411c]" /> },
        { name: "DevSecOps & Secure SDLC", path: "/services/devsecops-secure-sdlc", description: "DevSecOps implementation and secure development lifecycle", icon: <Code className="h-5 w-5 text-[#01411c]" /> },
        { name: "Third‑Party / Vendor Risk", path: "/services/third-party-vendor-risk", description: "Third-party security assessments and vendor risk management", icon: <Users className="h-5 w-5 text-[#01411c]" /> },
        { name: "Incident Response Program", path: "/services/incident-response-program", description: "Incident response program development and capability assessment", icon: <Zap className="h-5 w-5 text-[#01411c]" /> },
        { name: "Data Privacy & Protection", path: "/services/data-protection-privacy", description: "Data protection compliance and privacy control assessments", icon: <Shield className="h-5 w-5 text-[#01411c]" /> },
        { name: "Risk Management Frameworks", path: "/services/risk-management-frameworks", description: "Enterprise risk management framework development and implementation", icon: <TrendingUp className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cybersecurity Maturity Assessments", path: "/services/cybersecurity-maturity-assessments", description: "Cybersecurity program maturity evaluation and improvement planning", icon: <Activity className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cloud Security Posture Mgmt (CSPM)", path: "/services/cloud-security-posture-management", description: "Cloud security posture management and continuous monitoring", icon: <Cloud className="h-5 w-5 text-[#01411c]" /> }
      ]
    },
    {
      id: "business-continuity",
      title: "Business Continuity / Cyber Resilience",
      icon: <RotateCcw className="h-8 w-8 text-[#01411c] icon-rotate" />,
      description: "Development and validation of business continuity, disaster recovery, and cyber resilience capabilities that protect critical services and meet stakeholder expectations. Work is aligned to ISO 22301/22317 and ISO/IEC 27031, with traceability to risk assessments and executive-approved recovery objectives.",
      mainPage: "/services/cyber-resilience",
      services: [
        { name: "ISO 22301 BCMS Assessment", path: "/services/iso-22301-bcms-assessment", description: "Business Continuity Management System assessment and compliance evaluation", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> },
        { name: "ISO 22317 Business Impact Analysis", path: "/services/business-impact-analysis-iso-22301", description: "ISO 22317 compliant business impact analysis and risk assessment", icon: <BarChart3 className="h-5 w-5 text-[#01411c]" /> },
        { name: "ISO/IEC 27031 ICT Readiness & Disaster Recovery", path: "/services/iso-27031-ict-readiness-disaster-recovery", description: "ICT readiness for business continuity and disaster recovery planning", icon: <HardDrive className="h-5 w-5 text-[#01411c]" /> },
        { name: "Crisis Communication & Incident Response (NIST CSF RS/RC)", path: "/services/crisis-communication-incident-response", description: "Crisis communication planning and NIST CSF incident response capabilities", icon: <MessageSquare className="h-5 w-5 text-[#01411c]" /> },
        { name: "Supplier & Third‑Party Continuity", path: "/services/supplier-third-party-continuity", description: "Third-party supplier continuity planning and risk management", icon: <Users className="h-5 w-5 text-[#01411c]" /> },
        { name: "Ransomware Readiness & Recovery", path: "/services/ransomware-readiness-recovery", description: "Ransomware prevention, readiness assessment, and recovery planning", icon: <AlertTriangle className="h-5 w-5 text-[#01411c]" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#01411c] to-[#012d13] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Cybersecurity Services Categories
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              ITNOA delivers independent, standards-aligned services that provide the Audit Committee, senior management, and stakeholders with reliable assurance and practical recommendations. Select a category to view scope, approach, and deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-slate-600">
              Click on any category to explore our specialized services
            </p>
          </div>

          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${serviceCategories.indexOf(category) * 200}ms`, animationFillMode: 'both' }}>
                <Collapsible 
                  open={openSections.includes(category.id)}
                  onOpenChange={() => toggleSection(category.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors p-6 lg:p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0 service-category-icon">
                            {category.icon}
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                              {category.title}
                            </CardTitle>
                            <CardDescription className="text-slate-600 text-base lg:text-lg">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Link href={category.mainPage}>
                            <Button 
                              variant="outline" 
                              className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white hidden sm:flex items-center space-x-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Overview</span>
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                          {openSections.includes(category.id) ? (
                            <ChevronUp className="h-6 w-6 text-[#01411c]" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-[#01411c]" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="service-expand overflow-hidden">
                    <CardContent className="pt-0 pb-6 px-6 lg:px-8">
                      <div className="border-t pt-6">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {category.services.map((service, index) => (
                            <Link key={service.path} href={service.path}>
                              <Card 
                                className="h-full service-card border border-slate-200 hover:border-[#01411c]/30 group animate-in fade-in slide-in-from-bottom-4"
                                style={{ 
                                  animationDelay: `${index * 100}ms`,
                                  animationFillMode: 'both'
                                }}
                              >
                                <CardContent className="p-4">
                                  <div className="flex items-start space-x-3 mb-3">
                                    <div className="flex-shrink-0 mt-0.5 service-item-icon">
                                      {service.icon}
                                    </div>
                                    <h4 className="font-semibold text-slate-900 group-hover:text-[#01411c] transition-colors leading-tight">
                                      {service.name}
                                    </h4>
                                  </div>
                                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                    {service.description}
                                  </p>
                                  <div className="flex items-center text-[#01411c] group-hover:translate-x-1 transition-transform duration-200">
                                    <span className="text-sm font-medium">Learn More</span>
                                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Mobile View Overview Button */}
                        <div className="mt-6 sm:hidden">
                          <Link href={category.mainPage}>
                            <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white">
                              View {category.title} Overview
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#01411c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your cybersecurity needs and get a customized solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-[#01411c] hover:bg-[#01411c] hover:text-white transition-all duration-300">
                Contact Us
              </Button>
            </Link>
            <Link href="/become-client">
              <Button size="lg" variant="outline" className="bg-white text-[#01411c] hover:bg-[#01411c] hover:text-white transition-all duration-300">
                Become a Client
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}