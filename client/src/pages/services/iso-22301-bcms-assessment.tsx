import { CheckCircle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ISO22301BCMSAssessment() {
  const whatWeDo = [
    "Gap Analysis & Compliance Review – Assess existing policies, procedures, and controls against ISO 22301 requirements to identify gaps.",
    "Risk & Impact Assessments – Evaluate business risks and conduct Business Impact Analysis (BIA) to prioritize critical processes and resources.",
    "RTO/RPO Identification – Define and validate Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) for both internal operations and third-party provided services and systems critical to your organization.",
    "BCMS Maturity Evaluation – Measure current BCMS maturity and provide recommendations to strengthen resilience.",
    "Testing & Validation – Review and validate continuity and recovery plans through scenario-based exercises and drills.",
    "Continual Improvement Support – Establish monitoring, measurement, and corrective action processes to ensure long-term resilience.",
    "By aligning with ISO 22301, we help ensure operational resilience, regulatory compliance, and stakeholder confidence in your ability to maintain essential services — even when third-party dependencies are impacted."
  ];

  const whyItMatters = [
    "Establishes a structured, internationally recognized framework for building and improving your Business Continuity Management System (BCMS).",
    "Ensures your Business Continuity Plan (BCP) is based on real business risks, priorities, and impact analysis, not assumptions.",
    "Identifies gaps in preparedness, including dependencies on third-party services and their Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs).",
    "Aligns continuity capabilities with strategic business goals, customer expectations, and regulatory requirements.",
    "Improves resilience by integrating continuity planning into daily operations rather than treating it as a one-time exercise.",
    "Strengthens crisis response and recovery by providing clear, tested procedures and achievable recovery objectives.",
    "Drives continual improvement through regular assessments, exercises, and updates to plans and processes."
  ];

  return (
    <ServiceDetailTemplate
      title="ISO 22301 BCMS Assessment"
      description="We perform comprehensive ISO 22301 assessments to evaluate and enhance your organization’s Business Continuity Management System (BCMS). Our approach ensures you can prevent, prepare for, respond to, and recover from disruptive incidents while meeting international best practices."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CheckCircle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}