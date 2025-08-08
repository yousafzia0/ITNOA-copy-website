import { Database } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SAPAudit() {
  const whatWeDo = [
    "SAP authorization concept and role-based access control (RBAC) assessment – Evaluate the design, assignment, and enforcement of SAP roles to ensure least privilege and compliance.",
    "Critical SAP transaction and function module security analysis – Identify and review high-risk transactions and function modules that could lead to fraud, misuse, or operational disruption.",
    "SAP database security configuration and encryption review – Assess database-level access, password policies, and encryption mechanisms for compliance and best practice alignment.",
    "User access management and segregation of duties (SoD) evaluation: Review user provisioning, de-provisioning, and SoD conflicts to reduce the risk of unauthorized activities.",
    "SAP system configuration and parameter security assessment – Verify that system settings, parameters, and security controls are appropriately configured and enforced.",
    "Interface and integration security testing for SAP connections—Assess the security of integrations with other applications, middleware, and external services.",
    "SAP change management and transport security review – Evaluate processes controlling SAP changes and transports to ensure integrity, traceability, and compliance.",
    "Compliance verification against SOX, GDPR, and industry standards – Perform audits to confirm SAP environment alignment with regulatory and industry security requirements."
  ];

  const whyItMatters = [
    "SAP systems are the backbone of many enterprise operations, containing critical business data and processes that require robust protection.",
    "Security vulnerabilities in SAP environments can lead to unauthorized access to sensitive financial data, intellectual property theft, and compliance violations.", 
    "With increasing regulatory requirements and sophisticated cyber threats targeting ERP systems, regular SAP security audits are essential for maintaining data integrity.",
    "Proper access controls and security measures protect against financial and reputational damage from potential breaches.",
    "Our specialized SAP audit services help organizations identify vulnerabilities unique to SAP environments.",
    "We provide actionable recommendations to implement robust security measures tailored to your specific business needs and risk profile."
  ];

  return (
    <ServiceDetailTemplate
      title="SAP Audit"
      description="At ITNOA Consulting, we bring deep expertise in SAP security, governance, and compliance to ensure your systems are secure and audit-ready. Our consultants have extensive experience conducting comprehensive SAP assessments aligned with industry best practices and global standards such as ISACA, IIA, SOX, and GDPR. We combine a meticulous, risk-based approach with hands-on technical knowledge of SAP environments, ensuring that every aspect—from user access to database encryption—is reviewed precisely. Whether your organization is seeking to strengthen internal controls, meet regulatory requirements, or proactively identify vulnerabilities, we can deliver actionable insights and practical remediation strategies.
"
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Database className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}