import { User } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function WorkdayHCMSecurity() {
  const whatWeDo = [
    "Access & Authentication Controls – Evaluate role-based permissions, SSO configuration, and MFA enforcement for HR, payroll, and finance data.",
    "Business Process Configuration Review – Assess workflow security and approvals for sensitive transactions (e.g., payroll changes, job offers, supplier payments).",
    "Data Protection & Privacy Controls – Validate encryption, audit logs, and data retention policies in alignment with GDPR, HIPAA, and other regulations.",
    "Change Control & Tenant Management – Review update management, configuration migration, and sandbox controls to ensure integrity of changes.",
    "Integration Security Review – Assess Workday Studio and API connections to third-party systems for secure authentication and least-privilege acces.",
    "Audit & Compliance Reporting – Leverage Workday’s reporting capabilities to verify compliance with internal policies and external regulatory standards."
  ];

  const whyItMatters = [
    "Effective ERP security and control testing—whether in PeopleSoft, Infor, or Workday—is essential for safeguarding financial data integrity, meeting regulatory requirements, and ensuring accurate financial reporting.",
    "SOX Compliance – Under the Sarbanes-Oxley Act, organizations must demonstrate that their financial reporting systems have strong internal controls. Our audits test user access, segregation of duties, change management, and system configuration to verify that only authorized individuals can initiate, approve, or post transactions that impact the general ledger.",
    "Accuracy of Financial Statements – Weak ERP controls can result in misstated revenues, expenses, or assets. By reviewing end-to-end workflows—from transaction entry to reporting—we ensure data accuracy, completeness, and integrity, minimizing the risk of errors or fraudulent adjustments in the financial statements.",
    "Banking & Financial Services Expertise – In banking, where transaction volumes are high and regulatory scrutiny is intense, we understand the need for precise access controls, reconciliations, and audit trails to support both internal and external audits.",
    "Healthcare Industry Experience – In healthcare, ERP systems often integrate with patient billing, supply chain, and payroll. We bring experience navigating HIPAA, revenue cycle compliance, and cost reporting controls to ensure financial data is accurate, secure, and auditable.",
    "Our proven track record in banking and healthcare ERP audits means we know how to design control testing that not only meets compliance requirements but also supports operational efficiency and business confidence."
  ];

  return (
    <ServiceDetailTemplate
      title="Workday Security"
      description="Comprehensive Workday  security assessments focusing on protecting employee data, ensuring proper access controls, and maintaining compliance with privacy regulations and industry standards."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<User className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}