import { User } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function WorkdayHCMSecurity() {
  const whatWeDo = [
    "Workday HCM security configuration assessment – Review role-based access controls, business process security, and integration security within Workday Human Capital Management.",
    "User access management and privilege review – Evaluate user provisioning, de-provisioning, and access certification processes to ensure proper segregation of duties.",
    "Payroll and compensation data protection – Assess security controls protecting sensitive payroll information, salary data, and compensation plans.",
    "Employee data privacy compliance – Review controls for protecting personal employee information in compliance with GDPR, CCPA, and other privacy regulations.",
    "Integration security testing – Evaluate security of integrations between Workday and other HR systems, payroll processors, and third-party applications.",
    "Business process security review – Assess security controls within HR business processes including hiring, termination, transfers, and performance management.",
    "Report and analytics security – Review access controls and data security for Workday reports, dashboards, and analytics containing sensitive HR data.",
    "Compliance verification for SOX and industry standards – Ensure Workday HCM configurations meet regulatory requirements and industry best practices."
  ];

  const whyItMatters = [
    "Protects sensitive employee data including social security numbers, salary information, and personal details from unauthorized access.",
    "Ensures compliance with privacy regulations like GDPR, CCPA, and employment law requirements.",
    "Prevents payroll fraud and unauthorized changes to compensation data through proper access controls.",
    "Supports SOX compliance by maintaining proper segregation of duties in HR processes that impact financial reporting.",
    "Reduces risk of data breaches that could result in regulatory penalties and damage to employee trust."
  ];

  return (
    <ServiceDetailTemplate
      title="Workday /HCM Security"
      description="Comprehensive Workday Human Capital Management security assessments focusing on protecting employee data, ensuring proper access controls, and maintaining compliance with privacy regulations and industry standards."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<User className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}