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
    "Compliance Testing – Map controls to SOX, GDPR, and other applicable regulations."
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
      heroImage="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.15752-9/532136926_24487405064209113_8619606472841012319_n.png?stp=dst-png_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iHJ6Zd20VOsQ7kNvwFbPEIa&_nc_oc=Adlu9tcNpzVWADXitPmrse0rGkZ786EZqNP4hBWZPeaJsIunp7jN5hkD1QNXxThHCvjBS6PmUabbH9SHMyCyzY33&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&oh=03_Q7cD3AGyezEoEjRCOxFhyKxc8ABKY7vAtpIQllb0ZwnaHNsc-w&oe=68CCA1EA"
    />
  );
}