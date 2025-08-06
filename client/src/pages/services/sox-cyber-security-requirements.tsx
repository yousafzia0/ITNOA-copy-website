import { Shield } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SOXCyberSecurityRequirements() {
  const whatWeDo = [
    "SOX cybersecurity framework development and implementation",
    "Threat assessment and risk management for financial reporting systems",
    "Cybersecurity policy development aligned with SOX requirements",
    "Security incident response procedures for financial systems",
    "Cybersecurity controls testing and validation",
    "Third-party risk assessment for financial reporting vendors",
    "Security awareness training for finance and IT personnel",
    "Continuous monitoring and threat detection for financial systems"
  ];

  const whyItMatters = `
    Cybersecurity is integral to SOX compliance as cyber threats can directly impact the integrity and 
    reliability of financial reporting systems. Cyber attacks targeting financial data can result in 
    material misstatements, data manipulation, or system unavailability that affects financial reporting 
    processes. With the increasing sophistication of cyber threats and regulatory focus on cybersecurity 
    governance, organizations must implement robust cybersecurity measures specifically designed to 
    protect financial reporting systems and processes. Our SOX cybersecurity requirements assessment 
    helps organizations integrate cybersecurity controls into their SOX compliance programs, ensuring 
    financial data integrity while meeting regulatory expectations.
  `;

  return (
    <ServiceDetailTemplate
      title="SOX Cyber Security Requirements"
      description="Comprehensive cybersecurity requirements assessment for SOX compliance, including threat management and security control implementation for financial reporting systems."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Shield className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}