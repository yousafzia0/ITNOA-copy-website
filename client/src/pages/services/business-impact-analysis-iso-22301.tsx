import { FileText } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function BusinessImpactAnalysisISO22301() {
  const whatWeDo = [
    "ISO 22301 compliant business impact analysis methodology implementation",
    "Critical business function identification and dependency mapping",
    "Recovery time objectives (RTO) and recovery point objectives (RPO) determination",
    "Impact assessment for various disruption scenarios and threat types",
    "Resource requirement analysis for critical business processes",
    "Stakeholder impact evaluation and communication requirements assessment",
    "Financial impact quantification and cost-benefit analysis",
    "BIA documentation and reporting aligned with ISO 22301 standards"
  ];

  const whyItMatters = `
    Business Impact Analysis (BIA) per ISO 22301 is the foundation of any effective business continuity 
    management system. It provides the critical understanding needed to prioritize resources, establish 
    appropriate recovery strategies, and ensure compliance with international standards. Without a proper 
    BIA aligned with ISO 22301 requirements, organizations risk inadequate preparation for disruptions, 
    inefficient resource allocation, and potential non-compliance with regulatory expectations. Our 
    ISO 22301 compliant BIA services help organizations systematically identify and analyze the potential 
    impacts of disruptions on their operations, enabling them to develop targeted and effective business 
    continuity strategies that meet international best practices and regulatory requirements.
  `;

  return (
    <ServiceDetailTemplate
      title="Business Impact Analysis Per ISO 22301"
      description="Comprehensive business impact analysis following ISO 22301 standards to identify critical business functions, dependencies, and recovery requirements for effective business continuity planning."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<FileText className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}