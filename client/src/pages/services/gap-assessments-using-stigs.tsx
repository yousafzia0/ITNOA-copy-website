import { CheckCircle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function GapAssessmentsUsingSTIGs() {
  const whatWeDo = [
    "Multi-platform STIG assessment covering Windows, Linux, network devices, and applications",
    "SCAP-compliant automated scanning for efficient vulnerability identification",
    "Category I, II, III risk prioritization and remediation planning development",
    "DISA security baseline configuration validation and implementation guidance",
    "Comprehensive gap analysis documentation with detailed findings and recommendations",
    "Security control inheritance mapping for complex enterprise environments",
    "Plan of Action and Milestones (POA&M) development for systematic remediation",
    "Continuous monitoring strategy implementation for ongoing STIG compliance"
  ];

  const whyItMatters = `
    DISA Security Technical Implementation Guides (STIGs) represent military-grade security standards 
    essential for Department of Defense (DoD) and federal contractors. STIG compliance ensures systems 
    meet the highest security standards required for government operations and sensitive data protection. 
    Our gap assessment identifies critical vulnerabilities and provides a clear roadmap for achieving 
    STIG compliance, reducing risk exposure, and maintaining authorization to operate (ATO) status. 
    Non-compliance can result in loss of federal contracts and security authorization revocation.
  `;

  return (
    <ServiceDetailTemplate
      title="Gap Assessments Using STIGs"
      description="Comprehensive security gap analysis using DISA Security Technical Implementation Guides (STIGs) to identify vulnerabilities and ensure compliance with military and government security standards."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CheckCircle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}