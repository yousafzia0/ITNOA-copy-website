import { Settings } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function NISTCSFImplementation() {
  const whatWeDo = [
    "Current state assessment using NIST Cybersecurity Framework core functions",
    "Target state definition aligned with business objectives and risk tolerance",
    "Gap analysis and roadmap development for framework implementation",
    "Core function implementation: Identify, Protect, Detect, Respond, and Recover",
    "Cybersecurity governance structure establishment and role definition",
    "Risk management process integration with business decision-making",
    "Metrics and measurement program development for continuous monitoring",
    "Framework maturity assessment and improvement planning for ongoing enhancement"
  ];

  const whyItMatters = `
    The NIST Cybersecurity Framework provides a flexible, risk-based approach to cybersecurity that 
    can be adapted to organizations of any size or industry. Unlike prescriptive standards, the CSF 
    allows organizations to prioritize cybersecurity activities based on business needs and risk 
    profiles. Implementation of the NIST CSF improves communication between business and technical 
    teams, enhances risk management capabilities, and provides a common language for discussing 
    cybersecurity across the organization. Many regulatory frameworks now reference or require 
    NIST CSF implementation, making it a strategic investment for long-term compliance and security effectiveness.
  `;

  return (
    <ServiceDetailTemplate
      title="NIST CSF Implementation"
      description="Strategic NIST Cybersecurity Framework implementation to strengthen your organization's cybersecurity posture, enhance risk management capabilities, and establish a flexible, risk-based security program."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Settings className="h-10 w-10 text-[hsl(var(--pakistan-green))]" />}
      heroImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
