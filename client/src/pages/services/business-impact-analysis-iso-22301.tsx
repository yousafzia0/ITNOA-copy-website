import { FileText } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function BusinessImpactAnalysisISO22301() {
  const whatWeDo = [
    "Assessment Scope & Objectives – Defining the boundaries, purpose, and expected outcomes of the BIA.",
    "Activity Identification – Documenting all business activities, functions, and services relevant to continuity planning.",
    "Critical Activity Analysis – Determining which activities are time-sensitive and essential for delivering products, services, and obligations.",
    "Impact Categories & Criteria – Defining and applying impact measures (financial, reputational, legal/regulatory, operational, contractual).",
    "Impact Over Time Assessment – Evaluating how impacts escalate over specific timeframes during a disruption.",
    "Dependency Mapping – Identifying required people, facilities, technology, suppliers, and other resources for each critical activity.",
    "RTO/RPO Determination – Establishing Recovery Time Objectives and Recovery Point Objectives, including for third-party provided services and systems.",
    "Prioritization of Activities – Ranking activities based on urgency and impact to guide recovery strategies.",
    "Linkage to Risk Assessment – Ensuring BIA outputs feed directly into the organization’s risk assessment and continuity strategy.",
    "Review & Validation – Confirming findings with stakeholders and aligning results with BCMS objectives.",
  ];

  const whyItMatters = [
    "Provides a factual, evidence-based foundation for your Business Continuity Management System (BCMS) and Business Continuity Plan (BCP).",
    "Ensures recovery strategies are built around actual business priorities, not assumptions.",
    "Identifies critical activities and the true impacts of their disruption over time, enabling informed decision-making.",
    "Highlights dependencies on people, facilities, technology, suppliers, and third-party services — including their Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs).",
    "Aligns continuity planning with strategic objectives, regulatory requirements, and customer expectations.",
    "Supports effective allocation of resources to where they are needed most during a crisis.",
    "Improves resilience by making recovery timelines realistic, achievable, and clearly communicated across the organization.",
    "Drives continuous improvement by providing measurable benchmarks for future assessments and plan updates."
  ];

  return (
    <ServiceDetailTemplate
      title="Business Impact Analysis Per ISO 22317"
      description="Our ISO 22317 assessments provide a structured, evidence-based review of your Business Impact Analysis process, ensuring it supports the development of an effective Business Continuity Management System (BCMS) in line with ISO 22301."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<FileText className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
