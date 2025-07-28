import { Tag } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ISO27001Implementation() {
  const whatWeDo = [
    "Gap analysis against ISO 27001:2022 requirements and current organizational practices",
    "Information Security Management System (ISMS) design and implementation",
    "Risk assessment methodology development and comprehensive risk treatment planning",
    "Security control selection and implementation based on Annex A requirements",
    "Documentation development including policies, procedures, and work instructions",
    "Employee training and awareness programs tailored to organizational roles",
    "Internal audit program establishment and management review process design",
    "Certification preparation and support throughout the external audit process"
  ];

  const whyItMatters = `
    ISO 27001 certification demonstrates your organization's commitment to information security best 
    practices and provides a competitive advantage in today's security-conscious marketplace. Beyond 
    compliance benefits, ISO 27001 implementation establishes a systematic approach to managing 
    information security risks, reduces the likelihood of security incidents, and provides a framework 
    for continuous improvement. Many organizations require ISO 27001 certification from their suppliers 
    and partners, making it essential for business development and maintaining customer trust.
  `;

  return (
    <ServiceDetailTemplate
      title="ISO 27001 Implementation"
      description="Comprehensive ISO 27001 implementation services to achieve robust information security management, demonstrate compliance commitment, and build stakeholder trust through internationally recognized certification."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Tag className="h-10 w-10 text-[hsl(var(--pakistan-green))]" />}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
