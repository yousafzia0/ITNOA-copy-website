import { RotateCcw } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function BusinessContinuityPlanning() {
  const whatWeDo = [
    "Business impact analysis (BIA) to identify critical business functions and dependencies",
    "Risk assessment and threat identification specific to your operational environment",
    "Recovery time objectives (RTO) and recovery point objectives (RPO) establishment",
    "Comprehensive business continuity plan development with detailed response procedures",
    "Emergency response and crisis management protocol design",
    "Communication plans for internal teams, customers, and external stakeholders",
    "Plan testing through tabletop exercises and full-scale simulations",
    "Training programs for business continuity team members and key personnel",
    "Business Impact Analysis Per ISO 22301 standard implementation and assessment",
    "Business Continuity System Review (ISO22301) compliance evaluation and gap analysis"
  ];

  const whyItMatters = `
    Effective business continuity planning is essential for organizational resilience in the face of 
    unexpected disruptions, whether from natural disasters, cyberattacks, supply chain interruptions, 
    or other business risks. Organizations without proper business continuity plans face extended 
    downtime, revenue losses, and potential business failure during critical incidents. Studies show 
    that 40% of businesses never reopen after a major disaster, and 90% fail within a year if they're 
    not operational within 5 days. Our business continuity planning services ensure your organization 
    can maintain critical operations, minimize financial impact, and recover quickly from disruptions.
  `;

  return (
    <ServiceDetailTemplate
      title="Business Continuity Planning"
      description="Comprehensive business continuity planning services to protect your organization from unexpected disruptions, ensure operational resilience, and minimize business impact during critical incidents."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<RotateCcw className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
