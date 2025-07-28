import { Shield } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function GRCConsulting() {
  const whatWeDo = [
    "Governance framework development and implementation across all organizational levels",
    "Risk assessment and management program design tailored to your business objectives",
    "Compliance mapping and gap analysis for multiple regulatory requirements",
    "Policy and procedure development with clear implementation guidelines",
    "Security control selection and implementation based on risk profiles",
    "Third-party risk management and vendor security assessment programs",
    "Incident response planning and business continuity integration",
    "Ongoing monitoring and reporting mechanisms for continuous improvement"
  ];

  const whyItMatters = `
    Effective Governance, Risk, and Compliance (GRC) programs are fundamental to organizational resilience 
    and regulatory adherence. Our GRC consulting services help you establish comprehensive frameworks that 
    not only meet regulatory requirements but also drive business value through improved risk management 
    and operational efficiency. With increasing regulatory scrutiny and evolving threat landscapes, a 
    well-designed GRC program protects your organization from financial penalties, reputational damage, 
    and operational disruptions.
  `;

  return (
    <ServiceDetailTemplate
      title="Information Security (GRC) Consulting"
      description="Comprehensive Governance, Risk, and Compliance consulting to establish robust security frameworks, meet regulatory requirements, and drive business value through effective risk management."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Shield className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
