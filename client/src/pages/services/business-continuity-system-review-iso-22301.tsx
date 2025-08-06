import { CheckCircle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function BusinessContinuitySystemReviewISO22301() {
  const whatWeDo = [
    "Comprehensive business continuity management system (BCMS) assessment",
    "ISO 22301 compliance gap analysis and requirements evaluation",
    "Business continuity policy and procedure review and optimization",
    "Management commitment and governance structure assessment",
    "Risk assessment and business impact analysis validation",
    "Business continuity strategy and solution effectiveness review",
    "Plan testing, maintenance, and continuous improvement evaluation",
    "Documentation review and compliance reporting aligned with ISO 22301"
  ];

  const whyItMatters = `
    A comprehensive Business Continuity Management System review against ISO 22301 standards is essential 
    for maintaining organizational resilience and regulatory compliance. Regular reviews ensure that your 
    BCMS remains effective, current, and aligned with evolving business needs and threat landscapes. 
    Without proper system reviews, organizations risk having outdated or ineffective continuity measures 
    that may fail during critical incidents. Our ISO 22301 system review services help organizations 
    evaluate the effectiveness of their entire business continuity framework, identify areas for 
    improvement, and ensure ongoing compliance with international standards, ultimately strengthening 
    their ability to respond to and recover from disruptions while maintaining stakeholder confidence.
  `;

  return (
    <ServiceDetailTemplate
      title="Business Continuity System Review (ISO22301)"
      description="Complete business continuity management system review and compliance assessment against ISO 22301 international standard requirements to ensure effective organizational resilience."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CheckCircle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}