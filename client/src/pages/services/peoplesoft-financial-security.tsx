import { DollarSign } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PeoplesoftFinancialSecurity() {
  const whatWeDo = [
    "Configuration Hardening – Evaluate and implement STIG-recommended settings to minimize attack surfaces.",
    "Access Control Review—Verify that privileged and non-privileged database accounts follow least-privilege principles and have appropriate authentication and password policies.",
    "Auditing & Logging – Enable and review database audit logs to track access, changes, and administrative actions per STIG controls.",
    "Patch & Vulnerability Management – Assess patch levels and remediate known vulnerabilities to align with STIG compliance.",
    "Encryption & Data Protection – Validate use of encryption for data-at-rest and data-in-transit per STIG guidelines.",
    "Backup & Recovery Security – Assess backup encryption, retention policies, and disaster recovery readiness.",
    "Compliance Mapping – Map STIG requirements to your regulatory obligations (e.g., SOX, HIPAA, PCI DSS) for a unified control approach.",
    "Database Platforms Reviewed – We assess a wide range of database environments including Microsoft SQL Server (MSSQL), MySQL, PostgreSQL, Oracle Database, SAP Sybase ASE, as well as cloud-hosted databases such as Amazon RDS (MSSQL, MySQL, PostgreSQL, Aurora) Mongo DB and Azure SQL Database."
  ];

  const whyItMatters = [
    "Protects Critical Data—Ensures that sensitive financial, healthcare, and operational information stored in databases is secure from unauthorized access or breaches.",
    "Supports SOX Compliance – Strengthens internal controls over financial reporting by enforcing least-privilege access, logging, and change management requirements.",
    "Safeguards Financial Statement Accuracy – Prevents unauthorized changes to financial data that could result in misstated revenues, expenses, or assets.",
    "Meets Regulatory Requirements – Aligns with HIPAA, PCI DSS, and other industry mandates for data security in banking, healthcare, and other regulated industries.",
    "Mitigates Cloud-Specific Risks – Addresses security gaps unique to AWS, Azure, and other cloud-hosted database environments.",
    "Enhances Audit Readiness – Provides documented evidence of compliance and control effectiveness for internal and external audits."
  ];

  return (
    <ServiceDetailTemplate
      title="PeopleSoft WorkDay Security Audit"
      description="We perform in-depth database security assessments aligned with the Defense Information Systems Agency (DISA) Security Technical Implementation Guides (STIGs) to ensure your databases meet rigorous, standards-based security requirements."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<DollarSign className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    />
  );
}