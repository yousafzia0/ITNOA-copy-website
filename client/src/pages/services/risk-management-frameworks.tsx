import { TrendingUp } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function RiskManagementFrameworks() {
  const whatWeDo = [
    "Enterprise risk management framework development including risk governance structure, risk appetite definition, and risk tolerance establishment.",
    "Risk assessment methodology design including risk identification, analysis, evaluation, and treatment processes aligned with business objectives.",
    "Risk register development and management including risk cataloging, scoring, tracking, and reporting across all organizational risk categories.",
    "Risk monitoring and reporting systems including risk dashboards, KRI development, and executive risk reporting mechanisms.",
    "Risk treatment and mitigation strategy development including risk response options, control selection, and residual risk management.",
    "Third-party and supply chain risk management including vendor risk assessment, contract risk evaluation, and supplier risk monitoring.",
    "Operational risk management including process risk assessment, business continuity integration, and operational risk controls.",
    "Technology and cybersecurity risk integration including IT risk assessment, cyber risk quantification, and technology risk governance.",
    "Regulatory and compliance risk management including regulatory change management, compliance risk assessment, and regulatory reporting.",
    "Risk culture and awareness development including risk training programs, risk communication, and risk accountability frameworks."
  ];

  const whyItMatters = [
    "Effective risk management enables informed decision-making and strategic planning while protecting organizational value and stakeholder interests.",
    "Regulatory requirements increasingly mandate formal risk management frameworks with documented processes and executive oversight.",
    "Risk management frameworks provide structure for managing uncertainty and complexity in rapidly changing business environments.",
    "Stakeholder confidence depends on demonstrated risk management capabilities including investors, customers, and regulatory authorities.",
    "Competitive advantage requires balancing risk-taking for growth opportunities with risk mitigation to protect existing value.",
    "Cost optimization results from systematic risk management preventing costly incidents and enabling efficient resource allocation.",
    "Investment protection requires comprehensive risk management to preserve and enhance organizational value over time."
  ];

  return (
    <ServiceDetailTemplate
      title="Risk Management Frameworks"
      description="Enterprise risk management framework development and implementation to enable informed decision-making, regulatory compliance, and sustainable value creation through systematic risk management."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<TrendingUp className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}