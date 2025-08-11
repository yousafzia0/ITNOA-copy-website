import { Users } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PeoplesoftHCMSecurity() {
  const whatWeDo = [
    "Employee Data Access Controls – Review user permissions for sensitive HR data including salary, performance reviews, disciplinary actions, and personal information to ensure proper segregation of duties.",
    "Payroll Security Assessment – Evaluate access controls for payroll processing, salary adjustments, tax information, and direct deposit configurations to prevent unauthorized modifications.",
    "Time & Labor Security Review – Assess security controls for time entry, overtime approvals, and labor distribution to ensure accurate labor cost reporting and prevent time fraud.",
    "Benefits Administration Security – Review access to health insurance, retirement plans, and other benefit information to protect employee privacy and prevent unauthorized changes.",
    "Performance Management Controls – Evaluate security for performance reviews, goal setting, and compensation planning modules to maintain confidentiality and data integrity.",
    "Talent Acquisition Security – Assess security controls for recruiting, applicant tracking, and onboarding processes to protect candidate and new hire information.",
    "HRIS Integration Security – Review data flows between PeopleSoft HCM and external systems including background check providers, benefits carriers, and payroll services.",
    "Audit Trail & Monitoring – Evaluate logging capabilities for HR transactions, data changes, and system access to support compliance and forensic investigations.",
    "Data Privacy Compliance – Assess controls for handling personally identifiable information (PII) in compliance with GDPR, CCPA, and other privacy regulations."
  ];

  const whyItMatters = [
    "Human Resources systems contain some of the most sensitive data in any organization, including personal identifiers, salary information, health records, and performance evaluations. Protecting this data is not just a compliance requirement but essential for maintaining employee trust and organizational reputation.",
    "Regulatory Compliance – HR systems must comply with numerous regulations including GDPR for privacy, SOX for financial reporting accuracy, EEOC for employment practices, and industry-specific requirements like HIPAA for healthcare organizations.",
    "Data Privacy Protection – With increasing privacy regulations worldwide, organizations must demonstrate proper controls over employee personal data, including consent management, data retention policies, and breach notification procedures.",
    "Payroll Accuracy & Fraud Prevention – Weak security controls in payroll systems can lead to overpayments, ghost employees, unauthorized salary adjustments, and tax compliance issues that result in significant financial losses and regulatory penalties.",
    "Insider Threat Mitigation – HR systems are particularly vulnerable to insider threats due to the sensitive nature of the data and the need for broad access by HR personnel. Proper access controls and monitoring are essential.",
    "Audit Readiness – External auditors increasingly focus on HR system controls during SOX audits, particularly around compensation reporting and management override capabilities that could affect financial statements.",
    "Our specialized experience in HR system security ensures that your PeopleSoft HCM implementation maintains the highest standards of data protection while enabling efficient HR operations and compliance with all applicable regulations."
  ];

  return (
    <ServiceDetailTemplate
      title="PeopleSoft HCM Security Assessment"
      description="Comprehensive security review of PeopleSoft Human Capital Management systems focusing on employee data protection, payroll security, and HR compliance requirements."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Users className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
    />
  );
}