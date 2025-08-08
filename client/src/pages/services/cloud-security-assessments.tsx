import { Cloud } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CloudSecurityAssessments() {
  const whatWeDo = [
    "Multi-cloud environment security posture assessment across AWS, Azure, and GCP",
    "Cloud configuration review and security best practices validation",
    "Identity and access management (IAM) evaluation and privilege analysis",
    "Data encryption and protection mechanism assessment for data at rest and in transit",
    "Network security and segmentation review in cloud environments",
    "Compliance validation against cloud security frameworks (CSA CCM, NIST, ISO 27017)",
    "Container and serverless security assessment for modern application architectures",
    "Cloud security monitoring and incident response capability evaluation"
  ];

  const whyItMatters = `
    Cloud security assessments are critical as organizations increasingly rely on cloud infrastructure 
    for business-critical operations and sensitive data storage. Misconfigured cloud services are 
    responsible for a significant percentage of data breaches, with studies showing that 95% of cloud 
    security failures are due to customer error rather than cloud provider issues. Our comprehensive 
    cloud security assessments help identify configuration vulnerabilities, ensure compliance with 
    security best practices, and validate that your cloud infrastructure aligns with your organization's 
    security requirements. With the shared responsibility model in cloud computing, understanding and 
    securing your portion of the responsibility is essential for protecting your data and applications.
  `;

  return (
    <ServiceDetailTemplate
      title="Cloud Security Assessments"
      description="Comprehensive cloud security assessments to identify vulnerabilities in your cloud infrastructure, ensure security best practices implementation, and validate compliance across multi-cloud environments."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Cloud className="h-10 w-10 text-[#01411c]" />}

    />
  );
}
