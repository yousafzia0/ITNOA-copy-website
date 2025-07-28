import { Search } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ITAudit() {
  const whatWeDo = [
    "Comprehensive security posture assessments across all IT infrastructure components",
    "Vulnerability identification and risk analysis using industry-leading tools and methodologies",
    "Compliance gap analysis against relevant standards (ISO 27001, NIST, SOX, etc.)",
    "Network architecture review and security control evaluation",
    "Access control and identity management assessment",
    "Data protection and privacy compliance verification",
    "Business process security evaluation and workflow analysis",
    "Detailed reporting with prioritized remediation recommendations"
  ];

  const whyItMatters = `
    In today's threat landscape, regular IT audits are essential for maintaining robust cybersecurity defenses. 
    Our comprehensive audits help organizations identify vulnerabilities before attackers do, ensure compliance 
    with regulatory requirements, and establish a solid foundation for ongoing security improvements. With cyber 
    threats evolving constantly, proactive auditing is your first line of defense against potential breaches 
    and regulatory penalties.
  `;

  return (
    <ServiceDetailTemplate
      title="IT Audit"
      description="Comprehensive IT audits to identify vulnerabilities, assess compliance, and strengthen your security posture with actionable recommendations and expert guidance."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Search className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
