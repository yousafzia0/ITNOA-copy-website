import { Network } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function NetworkSecurity() {
  const whatWeDo = [
    "Network architecture design and security assessment",
    "Firewall configuration and rule effectiveness evaluation",
    "Intrusion detection and prevention system (IDS/IPS) review",
    "Network segmentation and access control analysis",
    "Wireless network security and encryption assessment",
    "VPN security configuration and remote access evaluation",
    "Network monitoring and incident response capability review",
    "Network protocol security and traffic analysis"
  ];

  const whyItMatters = `
    Network security forms the perimeter defense for organizational IT infrastructure, and weak network 
    controls can expose sensitive systems to external and internal threats. With remote work becoming 
    more prevalent and cloud adoption increasing, network security has become more complex and critical 
    than ever. Poorly configured firewalls, inadequate network segmentation, and insufficient monitoring 
    can provide attackers with pathways to access valuable data and systems. Our comprehensive network 
    security assessments help organizations identify vulnerabilities in their network infrastructure, 
    implement robust security controls, and establish effective monitoring capabilities to detect and 
    respond to threats in real-time.
  `;

  return (
    <ServiceDetailTemplate
      title="Network Security"
      description="Advanced network security assessments including firewall configurations, intrusion detection, and network segmentation analysis for comprehensive network protection."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Network className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}