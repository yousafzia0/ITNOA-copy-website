import { Server } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function OSAudit() {
  const whatWeDo = [
    "Operating system hardening and security configuration assessment",
    "Patch management processes and vulnerability remediation review",
    "User account management and privilege escalation vulnerability testing",
    "File system security and access control evaluation",
    "System logging and monitoring configuration assessment",
    "Network service security and unnecessary service identification",
    "Security policy enforcement and compliance verification",
    "Boot security and system integrity protection review"
  ];

  const whyItMatters = `
    Operating systems form the foundation of all IT infrastructure, and security weaknesses at this level 
    can compromise entire network environments. Unpatched systems, misconfigured security settings, and 
    inadequate access controls can provide attackers with easy entry points into organizational networks. 
    With cybercriminals constantly developing new techniques to exploit OS vulnerabilities, regular operating 
    system security audits are critical for maintaining a strong security posture. Our comprehensive OS 
    audits help organizations identify security gaps, implement proper hardening measures, and establish 
    robust security baselines for both Linux and Windows environments.
  `;

  return (
    <ServiceDetailTemplate
      title="Linux Windows Operating System Audit"
      description="Comprehensive OS security evaluations examining system hardening, patch management, and security configurations for Linux and Windows environments."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Server className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}