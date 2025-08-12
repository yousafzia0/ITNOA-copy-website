import { Users } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PeoplesoftHCMSecurity() {
  const whatWeDo = [
    "Role-Based Security Review – Assess user roles, permissions, and segregation of duties within Infor CloudSuite and on-prem modules.",
    "Application Configuration Audit – Evaluate configuration settings for financials, supply chain, and HR modules to ensure compliance and security.",
    "Data & Database Security – Review database encryption, access controls, and data segregation mechanisms.",
    "Change & Release Management – Assess processes for system updates, custom development, and integrations, ensuring proper testing and approvals.",
    "Integration & Interface Security – Review connections between Infor and external systems for secure authentication and data handling.",
    "Regulatory Compliance Alignment – Verify adherence to SOX, HIPAA (for healthcare), and industry-specific security requirements."
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
      title="PeopleSoft InFro Security Assessment"
      description="Comprehensive security review of PeopleSoft Human Capital Management systems focusing on employee data protection, payroll security, and HR compliance requirements."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Users className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    />
  );
}