import { RotateCcw } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CyberResilience() {
  const whatWeDo = [
    "Business impact analysis and critical asset identification across all business functions",
    "Comprehensive business continuity plan development with detailed recovery procedures",
    "Disaster recovery planning for IT systems and data protection strategies",
    "Crisis management and communication plan development for stakeholder coordination",
    "Tabletop exercises and simulation testing to validate plan effectiveness",
    "Supply chain resilience assessment and third-party dependency mapping",
    "Cyber incident response integration with business continuity processes",
    "Regular plan updates and maintenance to adapt to changing business requirements"
  ];

  const whyItMatters = `
    Business continuity and cyber resilience are critical for maintaining operations during unexpected 
    disruptions, whether from cyberattacks, natural disasters, or other business interruptions. Our 
    comprehensive approach ensures your organization can quickly recover from incidents while minimizing 
    financial losses and reputational damage. With the average cost of downtime reaching thousands of 
    dollars per minute for many organizations, investing in robust business continuity and cyber 
    resilience planning is essential for long-term business survival and competitive advantage.
  `;

  return (
    <ServiceDetailTemplate
      title="Business Continuity / Cyber Resilience"
      description="Develop comprehensive business continuity and cyber resilience plans to ensure operational stability during disruptions, minimize downtime, and protect your organization's critical assets."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<RotateCcw className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
