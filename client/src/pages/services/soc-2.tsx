import { CheckCircle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SOC2() {
  const whatWeDo = [
    "SOC 2 readiness assessment and gap analysis against Trust Services Criteria",
    "Control environment design and implementation for security, availability, processing integrity, confidentiality, and privacy",
    "Vendor management and third-party risk assessment program development",
    "Information security program design aligned with SOC 2 requirements",
    "Policy and procedure development with clear control implementation guidance",
    "Employee training and awareness programs for SOC 2 compliance requirements",
    "Pre-audit testing and remediation support to ensure audit readiness",
    "Ongoing monitoring and compliance maintenance for continuous certification"
  ];

  const whyItMatters = `
    SOC 2 compliance has become a critical requirement for SaaS providers, cloud service companies, 
    and technology organizations serving enterprise customers. Many large organizations now require 
    SOC 2 reports from their technology vendors as part of their vendor risk management programs, 
    making certification essential for business development and customer retention. SOC 2 Type II 
    reports demonstrate not only that appropriate controls are in place but also that they operate 
    effectively over time. Beyond regulatory and customer requirements, SOC 2 implementation 
    establishes robust operational controls that improve service reliability, data protection, 
    and overall business resilience, providing both compliance benefits and operational improvements.
  `;

  return (
    <ServiceDetailTemplate
      title="SOC 2"
      description="Comprehensive SOC 2 compliance services to help your organization achieve the highest standards for security, availability, processing integrity, confidentiality, and privacy in service delivery."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CheckCircle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
