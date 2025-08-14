import { Cloud } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CloudSecurityPostureManagement() {
  const whatWeDo = [
    "Cloud Security Posture Management (CSPM) program development including continuous monitoring, compliance validation, and risk assessment across multi-cloud environments.",
    "Cloud configuration assessment and remediation including security misconfigurations, compliance violations, and best practice implementation.",
    "Multi-cloud security governance including unified security policies, cross-platform visibility, and centralized security management.",
    "Automated compliance monitoring including regulatory framework mapping, continuous compliance validation, and compliance reporting automation.",
    "Cloud security baseline establishment including security standards definition, configuration templates, and security-by-default implementation.",
    "Cloud workload protection including runtime security, vulnerability management, and threat detection across cloud infrastructure.",
    "Identity and access management in cloud including cloud IAM optimization, privilege management, and access governance.",
    "Cloud security orchestration including security workflow automation, incident response automation, and remediation orchestration.",
    "Cloud security metrics and reporting including security KPI development, executive dashboards, and security posture tracking.",
    "DevSecOps integration including security pipeline integration, infrastructure as code security, and cloud-native security controls."
  ];

  const whyItMatters = [
    "Cloud misconfigurations are responsible for majority of cloud security incidents requiring continuous monitoring and management.",
    "Multi-cloud environments create complexity requiring unified security posture management across different cloud platforms.",
    "Regulatory compliance in cloud requires continuous monitoring and evidence collection for audit and regulatory reporting.",
    "Cloud security automation is essential for managing scale and velocity of cloud deployments while maintaining security standards.",
    "Cost optimization requires security posture management to prevent expensive security incidents and optimize security tool utilization.",
    "Business enablement depends on secure cloud adoption allowing organizations to leverage cloud benefits while managing security risks.",
    "Competitive advantage results from superior cloud security posture enabling faster cloud adoption and innovation with reduced risk."
  ];

  return (
    <ServiceDetailTemplate
      title="Cloud Security Posture Mgmt (CSPM)"
      description="Cloud security posture management and continuous monitoring to ensure secure cloud adoption, regulatory compliance, and automated security governance across multi-cloud environments."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Cloud className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}