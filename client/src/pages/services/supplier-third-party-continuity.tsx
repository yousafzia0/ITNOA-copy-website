import { Users } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SupplierThirdPartyContinuity() {
  const whatWeDo = [
    "Third-party supplier business continuity assessment including evaluation of supplier resilience capabilities and continuity plans.",
    "Supplier dependency mapping to identify critical suppliers and assess potential impact of supplier disruptions on business operations.",
    "Supplier continuity requirements definition including recovery time objectives and service level expectations during disruptions.",
    "Alternative supplier identification and qualification to ensure backup options are available for critical services and products.",
    "Supplier continuity contract terms review including business continuity clauses, liability allocation, and performance guarantees.",
    "Supplier monitoring and reporting mechanisms to track supplier resilience status and early warning indicators.",
    "Collaborative continuity planning with key suppliers to ensure integrated response capabilities during shared disruptions.",
    "Supplier continuity testing and validation through exercises and scenario-based assessments.",
    "Supply chain risk assessment including geographic concentration, single points of failure, and cascading failure risks.",
    "Supplier incident response coordination procedures to ensure effective communication and joint recovery efforts."
  ];

  const whyItMatters = [
    "Supply chain disruptions are increasingly common and can significantly impact business operations even when internal systems remain functional.",
    "Third-party dependencies create risks beyond organizational control requiring proactive management and contingency planning.",
    "Regulatory expectations increasingly include oversight of third-party resilience particularly in critical industries like financial services.",
    "Supplier failures can cascade through supply chains creating widespread disruptions that affect multiple organizations simultaneously.",
    "Effective supplier continuity management reduces business disruption duration and impact when supplier incidents occur.",
    "Competitive advantage can be maintained during industry-wide supplier disruptions through superior supplier continuity planning.",
    "Stakeholder confidence requires demonstration of comprehensive risk management including third-party dependency risks."
  ];

  return (
    <ServiceDetailTemplate
      title="Supplier & Third‑Party Continuity"
      description="Third-party supplier continuity planning and risk management to ensure business resilience through effective management of supplier dependencies and collaborative continuity capabilities."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Users className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}