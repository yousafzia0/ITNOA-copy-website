import { Cloud } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CloudSecurityAudits() {
  const whatWeDo = [
    "AWS Security Assessment – Comprehensive review of Amazon Web Services configurations including IAM policies, S3 bucket security, VPC configurations, and CloudTrail logging.",
    "Azure Security Evaluation – Microsoft Azure security assessment covering Azure Active Directory, resource group permissions, storage account security, and Azure Security Center recommendations.",
    "Google Cloud Platform (GCP) Security Review – GCP security assessment including Cloud IAM, Cloud Storage permissions, VPC security, and Cloud Security Command Center analysis.",
    "Multi-cloud security posture assessment – Cross-platform security evaluation identifying configuration drift and security gaps across multiple cloud providers.",
    "Cloud compliance verification – Assessment against frameworks including SOC 2, PCI DSS, HIPAA, and FedRAMP requirements for cloud environments.",
    "Container and Kubernetes security – Security assessment of containerized applications, Docker configurations, and Kubernetes cluster security.",
    "Cloud data protection and encryption – Review of data encryption at rest and in transit, key management practices, and data loss prevention controls.",
    "DevSecOps and CI/CD pipeline security – Assessment of security controls integrated into development and deployment pipelines."
  ];

  const whyItMatters = [
    "Cloud misconfigurations are responsible for the majority of data breaches, making proper security assessment critical for protecting organizational data.",
    "Ensures compliance with industry regulations and standards across cloud environments where data residency and control requirements apply.",
    "Identifies and remediates security gaps before they can be exploited by attackers targeting cloud infrastructure.",
    "Supports cost optimization by identifying overprovisioned resources and unnecessary security services.",
    "Provides assurance to stakeholders that cloud adoption maintains or improves security posture compared to on-premises environments."
  ];

  return (
    <ServiceDetailTemplate
      title="Cloud Security (AWS / Azure / GCP)"
      description="Multi-cloud security assessments and compliance validation across AWS, Microsoft Azure, and Google Cloud Platform to ensure secure cloud adoption and maintain regulatory compliance."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Cloud className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}