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
  Brain,
  Lock,
  Eye
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
      title: "IT Audit & Assurance",
      icon: <Search className="h-8 w-8 text-[#01411c] icon-search" />,
      description: "Independent IT audits designed to provide the Audit Committee with assurance that governance, risk management, and control frameworks are operating effectively. We evaluate compliance, mitigate critical risks, and confirm alignment with the organization’s risk appetite, tolerance, and strategic objectives.",
      mainPage: "/services/it-audit",
      services: [
        { name: "SAP Audits", path: "/services/sap-audit", description: "Comprehensive SAP security assessments and compliance reviews.", icon: <Settings className="h-5 w-5 text-[#01411c]" /> },
        { name: "PeopleSoft Audits", path: "/services/peoplesoft-audit", description: "Oracle PeopleSoft security evaluations and risk assessments", icon: <Server className="h-5 w-5 text-[#01411c]" /> },
        { name: "Workday Security", path: "/services/workday-hcm-security", description: "Workday module security reviews and SOX-relevant control testing.", icon: <User className="h-5 w-5 text-[#01411c]" /> },
        { name: "Database Security Audits", path: "/services/database-security-audit", description: "SQL Server, Oracle, MySQL, PostgreSQL configuration and access controls.", icon: <Database className="h-5 w-5 text-[#01411c]" /> },
        { name: "Operating System Audits", path: "/services/os-audit", description: "Linux and Windows configuration, hardening, and logging/monitoring.", icon: <Server className="h-5 w-5 text-[#01411c]" /> },
        { name: "Network Security", path: "/services/network-security", description: "Network design, firewall rules, segmentation, and secure remote access.", icon: <Network className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cloud Security (AWS / Azure / GCP)", path: "/services/cloud-security-audits", description: "Identity, configuration baselines, logging, and CIS benchmark alignment.", icon: <Cloud className="h-5 w-5 text-[#01411c]" /> },
        { name: "Application Security & SDLC", path: "/services/application-security-sdlc", description: "Secure design, code review processes, CI/CD, SAST/DAST, and change control.", icon: <Bug className="h-5 w-5 text-[#01411c]" /> },
        { name: "Identity & Access Management (IAM)", path: "/services/identity-access-management", description: "Joiner–Mover–Leaver, privileged access, RBAC/ABAC, and access reviews.", icon: <User className="h-5 w-5 text-[#01411c]" /> },
        { name: "Vulnerability & Patch Management", path: "/services/vulnerability-patch-management", description: "Scanning coverage, SLAs, risk-based remediation, and exception governance.", icon: <Bug className="h-5 w-5 text-[#01411c]" /> },
        { name: "Incident Response & Resilience", path: "/services/incident-response-resilience", description: "NIST 800-61 alignment, playbooks, exercises, and ransomware readiness.", icon: <RefreshCw className="h-5 w-5 text-[#01411c]" /> },
        { name: "Third-Party / Vendor Risk", path: "/services/third-party-vendor-risk", description: "Due diligence, SOC report review, contract controls, and monitoring.", icon: <Users className="h-5 w-5 text-[#01411c]" /> },
        { name: "SOX Auditing", path: "/services/sox-auditing", description: "ITGC/ITACs, reporting controls, and dependency mapping.", icon: <FileCheck className="h-5 w-5 text-[#01411c]" /> },
        { name: "HIPAA IT Security Audits", path: "/services/hipaa-security-audits", description: "Safeguards for PHI, risk analysis, and corrective action governance.", icon: <Heart className="h-5 w-5 text-[#01411c]" /> },
        { name: "Data Protection & Privacy", path: "/services/data-protection-privacy", description: "GDPR/CCPA readiness, data mapping, and sensitive data safeguarding.", icon: <Shield className="h-5 w-5 text-[#01411c]" /> },
        { name: "IT Governance (COBIT)", path: "/services/it-governance-cobit", description: "Policy framework, roles, KPIs/KRIs, and risk & control alignment.", icon: <BarChart3 className="h-5 w-5 text-[#01411c]" /> },
        { name: "FFIEC Audits", path: "/services/ffiec-audits", description: "Coverage for financial institutions per FFIEC handbooks.", icon: <Building2 className="h-5 w-5 text-[#01411c]" /> },
        { name: "FERPA / FISMA", path: "/services/ferpa-fisma", description: "Education and federal information security compliance support.", icon: <GraduationCap className="h-5 w-5 text-[#01411c]" /> }
      ]
    },
    {
      id: "information-security",
      title: "Cybersecurity & GRC",
      icon: <Shield className="h-8 w-8 text-[#01411c] icon-shield" />,
      description: "Governance, Risk, and Compliance services aligned to NIST CSF, ISO/IEC 27001, and related standards. We establish defensible policies, controls, and operating models that satisfy regulatory expectations and align with business objectives.",
      mainPage: "/services/grc-consulting",
      services: [
        { name: "ISO 27001 Implementation", path: "/services/iso-27001-implementation", description: "ISMS design, control baselines, SoA, risk treatment, and audit readiness.", icon: <Tag className="h-5 w-5 text-[#01411c]" /> },
        { name: "NIST CSF Implementation", path: "/services/nist-csf-implementation", description: "Profile creation, target state, gap remediation, and metrics/KRIs.", icon: <Settings className="h-5 w-5 text-[#01411c]" /> },
        { name: "PCI DSS Assessments", path: "/services/pci-dss-assessments", description: "Scope reduction, control design, evidence packages, and assessor support.", icon: <CreditCard className="h-5 w-5 text-[#01411c]" /> },
        { name: "SOC 2 Compliance", path: "/services/soc-2", description: "Trust Services Criteria mapping, readiness, control testing, and monitoring.", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cloud Security Assessments", path: "/services/cloud-security-assessments", description: "Azure, AWS, and GCP governance, identity, logging, and configuration baselines.", icon: <Cloud className="h-5 w-5 text-[#01411c]" /> },
        { name: "Penetration Testing (Program Oversight)", path: "/services/penetration-testing", description: "Methodology, scope governance, remediation tracking, and retest coordination.", icon: <Bug className="h-5 w-5 text-[#01411c]" /> },
        { name: "NIST 800‑171 Readiness", path: "/services/nist-171-security-assessment", description: "CUI scoping, SSP/POA&M development, and assessment preparation.", icon: <FileText className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cyber Essentials (UK)", path: "/services/cyber-essentials", description: "Baseline control implementation and certification support.", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> },
        { name: "AI Governance & Risk", path: "/services/ai-governance-risk", description: "ISO/IEC 42001 & NIST AI RMF governance, model risk, and responsible AI controls.", icon: <Brain className="h-5 w-5 text-[#01411c]" /> },
        { name: "DevSecOps & Secure SDLC", path: "/services/devsecops-secure-sdlc", description: "CI/CD hardening, SAST/DAST, threat modeling, and pipeline control design.", icon: <Code className="h-5 w-5 text-[#01411c]" /> },
        { name: "Third‑Party / Vendor Risk", path: "/services/third-party-vendor-risk", description: "Due diligence, contract security requirements, and SOC report evaluation.", icon: <Users className="h-5 w-5 text-[#01411c]" /> },
        { name: "Incident Response Program", path: "/services/incident-response-program", description: "NIST 800‑61 alignment, playbooks, tabletop exercises, and forensic readiness.", icon: <Zap className="h-5 w-5 text-[#01411c]" /> },
        { name: "Data Privacy & Protection", path: "/services/data-protection-privacy", description: "GDPR/CCPA/HIPAA privacy programs, data mapping, and sensitive data controls.", icon: <Shield className="h-5 w-5 text-[#01411c]" /> },
        { name: "Risk Management Frameworks", path: "/services/risk-management-frameworks", description: "NIST RMF & ISO 31000 integration, governance, KRIs/KPIs, and risk reporting.", icon: <TrendingUp className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cybersecurity Maturity Assessments", path: "/services/cybersecurity-maturity-assessments", description: "Continuous configuration monitoring and automated compliance at scale.", icon: <Activity className="h-5 w-5 text-[#01411c]" /> },
        { name: "Cloud Security Posture Mgmt (CSPM)", path: "/services/cloud-security-posture-management", description: "Cloud security posture management and continuous monitoring", icon: <Cloud className="h-5 w-5 text-[#01411c]" /> },
        { name: "NIST 800-53 Risk Assessment", path: "/services/nist-800-53-risk-assessment", description: "Risk identification and analysis mapped to 800-53 controls, effectiveness review, and actionable treatment plans.", icon: <Shield className="h-5 w-5 text-[#01411c]" /> },
        { name: "Firewall Ruleset Review (PCI)", path: "/services/firewall-ruleset-review-pci", description: "PCI DSS 4.0 Req. 1 checks: least‑privilege rules, unused/shadow entries, segmentation, logging, and change control with remediation plan.", icon: <Network className="h-5 w-5 text-[#01411c]" /> },
        { name: "Gap Assessments Using STIGs", path: "/services/gap-assessments-using-stigs", description: "DISA STIG baseline vs. current-state hardening for OS, DB, and network devices; prioritized POA&M, exceptions, and hardening runbooks.", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> }
      ]
    },
    {
      id: "business-continuity",
      title: "Business Continuity & Resilience",
      icon: <RotateCcw className="h-8 w-8 text-[#01411c] icon-rotate" />,
      description: "Independent continuity and resilience assessments aligned with ISO 22301, ISO 22317, and ISO/IEC 27031, with response and recovery practices mapped to the NIST Cybersecurity Framework (Respond/Recover). We provide management and the Audit Committee with confidence that continuity capabilities are risk-based, measurable, and aligned to strategic objectives, customer expectations, and regulatory requirements.",
      mainPage: "/services/cyber-resilience",
      services: [
        { name: "ISO 22301 BCMS Assessment", path: "/services/iso-22301-bcms-assessment", description: "Gap analysis, risk assessment, BCMS maturity, RTO/RPO validation (incl. third parties), exercises, and a continual improvement plan.", icon: <CheckCircle className="h-5 w-5 text-[#01411c]" /> },
        { name: "ISO 22317 Business Impact Analysis", path: "/services/business-impact-analysis-iso-22301", description: "ISO 22317 compliant business impact analysis and risk assessment", icon: <BarChart3 className="h-5 w-5 text-[#01411c]" /> },
        { name: "ISO 27031 ICT Readiness & Disaster Recovery", path: "/services/iso-27031-ict-readiness-disaster-recovery", description: "Critical activity identification, impact-over-time modeling, dependency mapping, and defensible RTO/RPO targets for recovery planning.", icon: <HardDrive className="h-5 w-5 text-[#01411c]" /> },
        { name: "Crisis Communication & Incident Response (NIST CSF RS/RC)", path: "/services/crisis-communication-incident-response", description: "ICT risk & threat assessment, DR strategy validation (alt sites/cloud failover), governance & documentation review, and progressive testing.", icon: <MessageSquare className="h-5 w-5 text-[#01411c]" /> },
        { name: "Supplier & Third‑Party Continuity", path: "/services/supplier-third-party-continuity", description: "Continuity requirements in contracts, dependency inventories, attestation review, and coordinated testing with critical providers.", icon: <Users className="h-5 w-5 text-[#01411c]" /> },
        { name: "Ransomware Readiness & Recovery", path: "/services/ransomware-readiness-recovery", description: "Data protection, backup/restore validation, isolation/containment procedures, and recovery time verification for high‑value services.", icon: <AlertTriangle className="h-5 w-5 text-[#01411c]" /> }
      ]
    },
    {
      id: "data-protection-privacy",
      title: "Data Protection & Privacy",
      icon: <Lock className="h-8 w-8 text-[#01411c] icon-lock" />,
      description: "Comprehensive data protection and privacy services ensuring compliance with global regulations like GDPR, CCPA, and other privacy frameworks while safeguarding sensitive information throughout its lifecycle. We implement privacy-by-design principles and establish robust data governance frameworks aligned with regulatory requirements and business objectives.",
      mainPage: "/services/data-protection-privacy",
      services: [
        // Additional specialized services will be added to this category
        // Please contact us for specific privacy and data protection requirements
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Service <span className="text-[#01411c]">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our Service Portfolio represents a comprehensive range of solutions designed to strengthen governance, risk management, and compliance. Each service is tailored to deliver measurable value, ensuring organizations achieve resilience, regulatory alignment, and long-term success.
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
                              <span>View Deliverables</span>
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
                What We Can Offer
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