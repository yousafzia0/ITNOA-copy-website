import { DollarSign } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PeoplesoftFinancialSecurity() {
  const whatWeDo = [
    "General Ledger Security Controls – Review chart of accounts access, journal entry permissions, and period close procedures to ensure proper segregation of duties and prevent unauthorized financial adjustments.",
    "Accounts Payable Security Assessment – Evaluate vendor master maintenance, invoice processing, payment approvals, and three-way matching controls to prevent fraud and ensure accurate expense reporting.",
    "Accounts Receivable Access Review – Assess customer master data security, billing processes, cash application controls, and credit limit management to protect revenue integrity.",
    "Fixed Asset Security Controls – Review asset master maintenance, depreciation calculations, asset transfers, and disposal processes to ensure accurate asset valuation and compliance with accounting standards.",
    "Budget & Planning Security – Evaluate access controls for budget creation, modifications, and reporting to ensure proper authorization and prevent unauthorized budget manipulations.",
    "Cash Management Security – Assess bank account setup, cash positioning, investment management, and treasury operations to protect liquid assets and ensure proper cash controls.",
    "Procurement Security Controls – Review purchase order creation, receiving processes, supplier management, and contract compliance to ensure proper procurement governance.",
    "Financial Reporting Security – Evaluate access to financial reports, consolidation processes, and external reporting to ensure data integrity and compliance with SEC requirements.",
    "Integration & Interface Security – Assess data flows between PeopleSoft Financials and external systems including banks, tax systems, and subsidiary applications to ensure secure data transmission."
  ];

  const whyItMatters = [
    "Financial systems are the backbone of organizational reporting and directly impact investor confidence, regulatory compliance, and business decision-making. Securing these systems is critical for maintaining financial integrity and preventing material misstatements.",
    "SOX Compliance Requirements – Under Sarbanes-Oxley, public companies must demonstrate effective internal controls over financial reporting. Our assessments verify that your PeopleSoft Financial systems meet all SOX requirements and support accurate financial statements.",
    "Fraud Prevention & Detection – Financial systems are prime targets for both external attacks and internal fraud. Proper security controls, segregation of duties, and monitoring capabilities are essential for preventing and detecting fraudulent activities.",
    "Regulatory Reporting Accuracy – Financial data feeds into numerous regulatory reports including SEC filings, tax returns, and industry-specific compliance reports. Ensuring data integrity at the source system level is crucial for regulatory compliance.",
    "Audit Efficiency – Well-controlled financial systems enable more efficient external audits by providing auditors with confidence in system-generated reports and reducing the need for extensive substantive testing.",
    "Business Process Optimization – Security assessments often identify opportunities to streamline financial processes while maintaining proper controls, resulting in improved efficiency and reduced operational risk.",
    "Vendor & Customer Trust – Demonstrating strong financial controls builds confidence with vendors, customers, lenders, and other stakeholders who rely on your organization's financial stability and integrity.",
    "Our deep expertise in both PeopleSoft Financials and regulatory requirements ensures that your financial systems maintain the highest standards of security, accuracy, and compliance while supporting efficient business operations."
  ];

  return (
    <ServiceDetailTemplate
      title="PeopleSoft Financial Security Audit"
      description="In-depth security analysis of PeopleSoft Financial systems including general ledger, accounts payable/receivable, and financial reporting controls for SOX compliance."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<DollarSign className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    />
  );
}