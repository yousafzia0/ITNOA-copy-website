import { Database } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SAPAudit() {
  const whatWeDo = [
    "SAP authorization concept and role-based access control (RBAC) assessment – Evaluate the design, assignment, and enforcement of SAP roles to ensure least privilege and compliance",
    "Critical SAP transaction and function module security analysis – Identify and review high-risk transactions and function modules that could lead to fraud, misuse, or operational disruption.",
    "SAP database security configuration and encryption review – Assess database-level access, password policies, and encryption mechanisms for compliance and best practice alignment.",
    "User access management and segregation of duties (SoD) evaluation: Review user provisioning, de-provisioning, and SoD conflicts to reduce the risk of unauthorized activities.",
    "SAP system configuration and parameter security assessment – Verify that system settings, parameters, and security controls are appropriately configured and enforced.",
    "Interface and integration security testing for SAP connections—Assess the security of integrations with other applications, middleware, and external services.",
    "SAP change management and transport security review – Evaluate processes controlling SAP changes and transports to ensure integrity, traceability, and compliance.",
    "Compliance verification against SOX, GDPR, and industry standards – Perform audits to confirm SAP environment alignment with regulatory and industry security requirements."
  ];

  const whyItMatters = [
    "Protects critical business data from unauthorized access and breaches.",
    "Ensures compliance with SOX, GDPR, and other regulatory requirements.", 
    "Prevents fraud and operational disruptions through strong access controls.",
    "Reduces risk by maintaining proper segregation of duties (SoD).",
    "Safeguards system changes and integrations from security weaknesses."
  ];

  return (
    <ServiceDetailTemplate
      title="SAP Audit"
      description="At ITNOA Consulting, we bring deep expertise in SAP security, governance, and compliance to ensure your systems are secure and audit-ready. Our consultants have extensive experience conducting comprehensive SAP assessments aligned with industry best practices and global standards such as ISACA, IIA, SOX, and GDPR. We combine a meticulous, risk-based approach with hands-on technical knowledge of SAP environments, ensuring that every aspect—from user access to database encryption—is reviewed precisely. Whether your organization is seeking to strengthen internal controls, meet regulatory requirements, or proactively identify vulnerabilities, we can deliver actionable insights and practical remediation strategies.

"
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Database className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.15752-9/533190182_1198041465421102_8165287624210008343_n.png?stp=dst-png_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=X7GA1PKeH74Q7kNvwHdliY6&_nc_oc=AdmZeuTXPgbyTLhjEIj9GMi2xB0bJJWNvxiTJK94VSyXxXRT71eBFvAT_sARe9fXB6mJSwjqbB6I3dXZaNKMM3-J&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&oh=03_Q7cD3AFaVRjcUFR2L1otc10VhJKUhdFZQ1gApkd18S4BMcIOpA&oe=68CC8E2A"
    />
  );
}