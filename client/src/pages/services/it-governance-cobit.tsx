import { BarChart3 } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ITGovernanceCOBIT() {
  const whatWeDo = [
    "COBIT framework implementation assessment – Evaluation of Control Objectives for Information and Related Technologies framework adoption and maturity.",
    "IT governance structure and oversight review – Assessment of IT governance committees, roles, responsibilities, and decision-making processes.",
    "IT strategic alignment evaluation – Review of IT strategy alignment with business objectives and strategic planning processes.",
    "IT risk management and compliance assessment – Evaluation of IT risk governance, risk appetite, and regulatory compliance management.",
    "IT performance measurement and KPIs – Assessment of IT performance metrics, balanced scorecards, and value delivery measurement.",
    "IT resource management and optimization – Review of IT resource allocation, capacity planning, and cost management processes.",
    "IT service management and ITIL alignment – Assessment of IT service delivery, service level management, and ITIL process implementation.",
    "Digital transformation governance – Evaluation of governance structures supporting digital initiatives and technology modernization."
  ];

  const whyItMatters = [
    "Effective IT governance ensures technology investments deliver business value and support organizational objectives.",
    "Provides framework for managing IT risks and ensuring compliance with regulatory requirements across the organization.",
    "Enables better decision-making through clear governance structures, defined roles, and performance measurement.",
    "Supports audit and regulatory requirements by demonstrating mature IT governance and control frameworks.",
    "Facilitates digital transformation by establishing governance mechanisms for emerging technologies and innovation initiatives."
  ];

  return (
    <ServiceDetailTemplate
      title="IT Governance (COBIT)"
      description="IT governance framework implementation and COBIT assessments to ensure effective technology governance, strategic alignment, and value delivery from IT investments."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<BarChart3 className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}