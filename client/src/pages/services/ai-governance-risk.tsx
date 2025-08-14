import { Brain } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function AIGovernanceRisk() {
  const whatWeDo = [
    "AI governance framework development including policies, procedures, and oversight structures for responsible AI implementation.",
    "AI risk assessment and management including identification of AI-specific risks such as bias, privacy, and algorithmic transparency.",
    "AI ethics and responsible AI program design ensuring AI systems align with organizational values and ethical principles.",
    "AI model validation and testing including bias detection, fairness evaluation, and performance monitoring.",
    "AI data governance and privacy protection ensuring AI training data complies with privacy regulations and data protection standards.",
    "AI regulatory compliance assessment including evaluation against emerging AI regulations such as EU AI Act and sectoral requirements.",
    "AI third-party vendor risk management including assessment of AI service providers and algorithmic auditing capabilities.",
    "AI incident response and monitoring including procedures for addressing AI system failures, bias incidents, and unintended outcomes.",
    "AI transparency and explainability assessment ensuring AI decision-making processes can be understood and documented.",
    "AI cybersecurity risk evaluation including adversarial attacks, model poisoning, and AI system vulnerabilities."
  ];

  const whyItMatters = [
    "AI systems introduce unique risks including algorithmic bias, privacy violations, and decision-making opacity that require specialized governance approaches.",
    "Regulatory landscape for AI is rapidly evolving with new requirements for AI transparency, accountability, and risk management across multiple jurisdictions.",
    "AI failures can result in significant financial, legal, and reputational consequences including discrimination claims and regulatory penalties.",
    "Stakeholder trust in AI systems depends on demonstrable governance, risk management, and ethical AI practices.",
    "Competitive advantage in AI adoption requires balancing innovation with responsible AI practices and risk mitigation.",
    "AI governance supports sustainable AI scaling by establishing frameworks for managing AI risks as systems become more complex and widespread.",
    "Investment protection requires proper AI risk management to prevent costly AI project failures and ensure return on AI investments."
  ];

  return (
    <ServiceDetailTemplate
      title="AI Governance & Risk"
      description="AI governance frameworks and risk management assessments to ensure responsible AI implementation, regulatory compliance, and ethical AI practices while supporting innovation and business objectives."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Brain className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}