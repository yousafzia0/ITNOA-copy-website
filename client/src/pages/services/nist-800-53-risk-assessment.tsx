import { Shield } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function NIST80053RiskAssessment() {
  const whatWeDo = [
    "Comprehensive security control assessment against NIST SP 800-53 control families",
    "FIPS 199 impact categorization and appropriate control baseline selection",
    "Risk assessment methodology development aligned with NIST RMF processes",
    "Security control implementation gap analysis and remediation planning",
    "Detailed assessment documentation including POA&M development",
    "Control inheritance and responsibility mapping for hybrid environments",
    "Assessment and authorization boundary definition and documentation",
    "Continuous monitoring strategy development and implementation planning"
  ];

  const whyItMatters = `
    NIST 800-53 compliance is essential for federal agencies and organizations handling federal information 
    systems. This comprehensive framework provides a catalog of security and privacy controls that form 
    the foundation of the Risk Management Framework (RMF). Our assessment ensures your organization meets 
    federal security requirements, reduces risk exposure, and establishes a robust security posture that 
    protects sensitive information assets. Compliance with NIST 800-53 is often mandatory for government 
    contracts and demonstrates commitment to rigorous cybersecurity standards.
  `;

  return (
    <ServiceDetailTemplate
      title="NIST 800-53 Risk Assessment"
      description="Comprehensive security controls assessment based on NIST SP 800-53 framework to strengthen your organization's cybersecurity posture and ensure compliance with federal security requirements."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Shield className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}