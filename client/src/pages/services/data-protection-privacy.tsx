import { Shield } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function DataProtectionPrivacy() {
  const whatWeDo = [
    "Data protection compliance assessment – Comprehensive review of data protection practices against GDPR, CCPA, and other privacy regulations.",
    "Personal data inventory and mapping – Identification and classification of personal data flows, storage locations, and processing activities.",
    "Privacy impact assessments (PIAs) – Evaluation of privacy risks in new projects, systems, and data processing activities.",
    "Data subject rights implementation review – Assessment of procedures for handling data subject requests including access, rectification, and deletion.",
    "Consent management and legal basis review – Evaluation of consent mechanisms, legal basis documentation, and preference management systems.",
    "Cross-border data transfer compliance – Assessment of international data transfers, adequacy decisions, and transfer mechanism implementation.",
    "Data breach notification procedures – Review of breach detection, assessment, and notification processes for regulatory compliance.",
    "Privacy by design and default assessment – Evaluation of privacy controls integrated into system design and default configurations."
  ];

  const whyItMatters = [
    "Data protection violations can result in fines up to 4% of annual global revenue under GDPR, making compliance essential for business operations.",
    "Ensures customer trust and brand protection by demonstrating commitment to privacy and data protection.",
    "Reduces legal and regulatory risks associated with data processing activities across multiple jurisdictions.",
    "Supports competitive advantage by enabling data-driven business activities while maintaining compliance with privacy requirements.",
    "Protects against reputational damage and customer loss resulting from privacy breaches and regulatory enforcement actions."
  ];

  return (
    <ServiceDetailTemplate
      title="Data Protection & Privacy"
      description="Comprehensive data protection compliance and privacy control assessments to ensure alignment with GDPR, CCPA, and other privacy regulations while supporting business objectives."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Shield className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}