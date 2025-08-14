import { Activity } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CybersecurityMaturityAssessments() {
  const whatWeDo = [
    "Cybersecurity maturity model development and assessment including capability evaluation across all security domains and functions.",
    "Current state assessment including comprehensive evaluation of existing security controls, processes, and organizational capabilities.",
    "Target state definition including future state design aligned with business objectives, risk tolerance, and regulatory requirements.",
    "Gap analysis and roadmap development including prioritized improvement plan with timelines, resources, and success metrics.",
    "Maturity benchmarking including comparison against industry standards, peer organizations, and recognized maturity frameworks.",
    "Security program effectiveness evaluation including ROI measurement, risk reduction quantification, and performance optimization.",
    "Organizational assessment including security culture evaluation, skill gap analysis, and training needs assessment.",
    "Technology maturity evaluation including security tool effectiveness, architecture assessment, and technology rationalization.",
    "Process maturity assessment including security process effectiveness, automation opportunities, and efficiency improvement.",
    "Continuous improvement planning including maturity monitoring, regular reassessment, and adaptive improvement strategies."
  ];

  const whyItMatters = [
    "Cybersecurity maturity assessment provides objective measurement of security program effectiveness and identifies improvement opportunities.",
    "Regulatory compliance increasingly requires demonstration of security program maturity and continuous improvement capabilities.",
    "Investment justification requires measurable security program outcomes and demonstrated return on cybersecurity investments.",
    "Stakeholder confidence depends on mature security capabilities and demonstrated ability to protect organizational assets.",
    "Competitive advantage results from superior security maturity enabling business growth and innovation with acceptable risk levels.",
    "Cost optimization through maturity assessment identifies inefficient security spending and opportunities for resource reallocation.",
    "Risk reduction results from systematic maturity improvement addressing security gaps and strengthening organizational defenses."
  ];

  return (
    <ServiceDetailTemplate
      title="Cybersecurity Maturity Assessments"
      description="Cybersecurity program maturity evaluation and improvement planning to optimize security investments, demonstrate program effectiveness, and achieve sustainable security excellence."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Activity className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}