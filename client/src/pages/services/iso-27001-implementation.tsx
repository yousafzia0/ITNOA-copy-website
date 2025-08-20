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
      icon={<Tag className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.15752-9/533078569_1833486734272823_8771195115195428800_n.png?stp=dst-png_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xsjtgbP0PkQQ7kNvwGenkd4&_nc_oc=AdlIzb96O_qnbuzNVxZ6NesV4KYi4RGEolBYEVbGfi0Chnb_MsfxyP2TfmO67Xsg8vVvgyoLUNzM_BpAoY3N_qQG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&oh=03_Q7cD3AGDTmWNCOs7d4vsNW7fbK1OSBquXJ-TklM3GYvRZaN9fQ&oe=68CCBF73"
    />
  );
}
