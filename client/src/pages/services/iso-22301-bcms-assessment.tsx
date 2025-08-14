import { CheckCircle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ISO22301BCMSAssessment() {
  const whatWeDo = [
    "Business Continuity Management System (BCMS) maturity assessment against ISO 22301 requirements and international best practices.",
    "Gap analysis of current business continuity policies, procedures, and controls to identify areas for improvement.",
    "Business continuity governance review including roles, responsibilities, and management oversight structures.",
    "Risk management integration assessment to ensure BCMS aligns with organizational risk management frameworks.",
    "Business impact analysis validation and critical process identification to prioritize continuity planning efforts.",
    "Recovery strategy evaluation including alternative work arrangements, backup facilities, and resource requirements.",
    "Plan testing and exercise program review to validate business continuity plan effectiveness and readiness.",
    "Continual improvement process assessment including monitoring, measurement, and corrective action mechanisms.",
    "Documentation review and compliance verification against ISO 22301 standard requirements.",
    "Management review and reporting processes evaluation to ensure executive oversight and accountability."
  ];

  const whyItMatters = [
    "ISO 22301 provides internationally recognized framework for building organizational resilience and ensuring business continuity capabilities.",
    "Structured assessment approach identifies gaps in current capabilities and provides roadmap for improvement aligned with business objectives.",
    "Demonstrates commitment to stakeholders including customers, suppliers, and regulators regarding business continuity preparedness.",
    "Reduces business disruption risks through systematic identification and mitigation of continuity threats and vulnerabilities.",
    "Supports regulatory compliance requirements for business continuity planning across multiple industries and jurisdictions.",
    "Enhances competitive advantage by demonstrating superior resilience capabilities compared to organizations without formal BCMS.",
    "Provides framework for continuous improvement ensuring business continuity capabilities evolve with changing business requirements."
  ];

  return (
    <ServiceDetailTemplate
      title="ISO 22301 BCMS Assessment"
      description="Comprehensive Business Continuity Management System assessment and compliance evaluation against ISO 22301 standards to ensure organizational resilience and effective business continuity capabilities."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CheckCircle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}