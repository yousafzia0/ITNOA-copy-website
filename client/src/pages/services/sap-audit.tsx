import { Database } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SAPAudit() {
  const whatWeDo = [
    "SAP authorization concept and role-based access control (RBAC) assessment",
    "Critical SAP transaction and function module security analysis",
    "SAP database security configuration and encryption review",
    "User access management and segregation of duties (SoD) evaluation",
    "SAP system configuration and parameter security assessment",
    "Interface and integration security testing for SAP connections",
    "SAP change management and transport security review",
    "Compliance verification against SOX, GDPR, and industry standards"
  ];

  const whyItMatters = `
    SAP systems are the backbone of many enterprise operations, containing critical business data and processes. 
    Security vulnerabilities in SAP environments can lead to unauthorized access to sensitive financial data, 
    intellectual property theft, and compliance violations. With increasing regulatory requirements and sophisticated 
    cyber threats targeting ERP systems, regular SAP security audits are essential to maintain data integrity, 
    ensure proper access controls, and protect against financial and reputational damage. Our specialized SAP 
    audit services help organizations identify vulnerabilities unique to SAP environments and implement robust 
    security measures tailored to their business needs.
  `;

  return (
    <ServiceDetailTemplate
      title="SAP Audit"
      description="Comprehensive SAP system security assessments to ensure data integrity, access controls, and compliance with industry standards for your enterprise resource planning environment."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Database className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}