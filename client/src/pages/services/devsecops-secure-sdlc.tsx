import { Code } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function DevSecOpsSecureSDLC() {
  const whatWeDo = [
    "DevSecOps strategy development and implementation including integration of security practices into development and operations workflows.",
    "Secure Software Development Lifecycle (SDLC) design including security requirements, threat modeling, and secure coding practices.",
    "CI/CD pipeline security integration including automated security testing, vulnerability scanning, and security gate implementation.",
    "Infrastructure as Code (IaC) security including security policy as code, configuration management, and infrastructure security validation.",
    "Container and Kubernetes security including image scanning, runtime protection, and orchestration security configuration.",
    "Application security testing automation including SAST, DAST, IAST, and SCA tool integration and optimization.",
    "Security training and culture development for development teams including secure coding training and security awareness programs.",
    "Compliance automation and documentation including regulatory requirement integration and audit trail establishment.",
    "Security metrics and KPI development including security debt tracking, vulnerability management metrics, and security ROI measurement.",
    "Cloud-native security architecture including serverless security, microservices security, and cloud security posture management."
  ];

  const whyItMatters = [
    "Traditional security approaches cannot keep pace with modern development velocity requiring integration of security into DevOps processes.",
    "Security vulnerabilities introduced during development are exponentially more expensive to fix in production than during development phases.",
    "Regulatory compliance increasingly requires security controls integrated throughout the development lifecycle not just at deployment.",
    "DevSecOps enables faster time-to-market while maintaining security quality through automation and early security integration.",
    "Modern application architectures including containers, microservices, and serverless require security approaches integrated with development practices.",
    "Competitive advantage depends on ability to deliver secure applications rapidly while maintaining security posture and compliance requirements.",
    "Investment protection requires sustainable security practices that scale with development velocity and organizational growth."
  ];

  return (
    <ServiceDetailTemplate
      title="DevSecOps & Secure SDLC"
      description="DevSecOps implementation and secure development lifecycle integration to enable rapid, secure application delivery while maintaining compliance and reducing security debt."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Code className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}