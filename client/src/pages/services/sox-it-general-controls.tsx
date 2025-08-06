import { Settings } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function SOXITGeneralControls() {
  const whatWeDo = [
    "IT general controls framework design and implementation",
    "Access controls and user provisioning procedures evaluation",
    "Change management and version control processes assessment",
    "Computer operations and job scheduling controls review",
    "System development and maintenance controls evaluation",
    "Data backup and recovery procedures testing",
    "System security and logical access controls assessment",
    "Documentation and testing of ITGC effectiveness"
  ];

  const whyItMatters = `
    IT General Controls (ITGCs) form the foundation of reliable financial reporting by ensuring the 
    integrity, availability, and security of financial systems and data. Deficiencies in ITGCs can 
    lead to material weaknesses in internal control over financial reporting, requiring management 
    and auditor attention and potentially impacting financial statement reliability. Strong ITGCs 
    provide assurance that financial data is processed accurately, completely, and in a timely manner. 
    Our ITGC assessment services help organizations design, implement, and test effective IT general 
    controls that support SOX compliance objectives while enabling efficient business operations and 
    reliable financial reporting processes.
  `;

  return (
    <ServiceDetailTemplate
      title="SOX IT General Controls"
      description="In-depth evaluation of IT general controls including access management, change controls, and system operations for financial reporting systems."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Settings className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}