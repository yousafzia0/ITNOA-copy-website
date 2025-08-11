import { Server } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PeoplesoftAudit() {
  const whatWeDo = [
    "Logical Security & Access Controls – Review user profiles, roles, and permission lists to ensure access is appropriate, follows least-privilege principles, and maintains segregation of duties.",
    "Page & Menu Security Review – Assess security to critical PeopleSoft pages, components, and menu paths; verify compliance with company security policies.",
    "Password & Authentication Settings – Validate PSSECOPTIONS configuration, including password length, expiration, lockout policies, and special character requirements.",
    "Change Management Controls – Review program development and migration processes, including Application Designer restrictions, change locking, and emergency change procedures.",
    "Database & Infrastructure Security – Evaluate database access IDs, process scheduler security, and environment configuration.",
    "Operational Monitoring – Assess use of delivered audit tools (DDDAUDIT, SYSAUDIT) and review batch/job scheduling security.",
    "Compliance Testing – Map controls to SOX, GDPR, and other applicable regulations.",
    "PeopleSoft HCM Security Assessment – Comprehensive review of Human Capital Management security controls, payroll access restrictions, and employee data protection measures.",
    "PeopleSoft Financial Security Audit – In-depth analysis of financial module security, general ledger controls, and accounts payable/receivable access management."
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
      title="Peoplesoft Audit"
      description="Thorough Peoplesoft application security reviews focusing on configuration, access management, and data protection protocols for your enterprise applications."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Server className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}