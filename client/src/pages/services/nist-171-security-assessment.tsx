import { Shield } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function NIST171SecurityAssessment() {
  const whatWeDo = [
    "NIST 800-171 compliance gap analysis against all 110 security requirements",
    "Controlled Unclassified Information (CUI) identification and classification support",
    "Security control implementation assessment and effectiveness evaluation",
    "System Security Plan (SSP) development and maintenance guidance",
    "Plan of Action and Milestones (POA&M) creation for remediation tracking",
    "Contractor compliance verification and supplier assessment support",
    "DFARS compliance evaluation and DoD contract requirement alignment",
    "Continuous monitoring program design for ongoing compliance maintenance"
  ];

  const whyItMatters = `
    NIST 800-171 compliance is mandatory for organizations handling Controlled Unclassified Information 
    (CUI) in federal contracts, with non-compliance resulting in contract loss and significant financial 
    penalties. The Department of Defense and other federal agencies require NIST 800-171 compliance 
    as a prerequisite for contract awards, making it essential for organizations in the defense industrial 
    base and federal contracting ecosystem. Recent regulatory changes have increased enforcement and 
    penalty structures, with organizations facing up to $10,000 per violation per day. Our assessment 
    services help ensure not only initial compliance achievement but also sustainable compliance practices 
    that protect both your organization and the sensitive government information you handle.
  `;

  return (
    <ServiceDetailTemplate
      title="NIST 800-171 Security Assessment"
      description="Comprehensive NIST 800-171 security assessments to help organizations meet government requirements for protecting Controlled Unclassified Information (CUI) and maintain federal contract eligibility."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Shield className="h-10 w-10 text-[hsl(var(--pakistan-green))]" />}
      heroImage="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
