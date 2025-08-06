import { GraduationCap } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function FERPAFISMAudit() {
  const whatWeDo = [
    "FERPA compliance assessment for educational record protection",
    "FISMA security control implementation and effectiveness review",
    "Student data privacy and access control evaluation",
    "Federal information system security assessment",
    "Risk management framework (RMF) implementation review",
    "Security authorization and continuous monitoring assessment",
    "Educational technology security and data handling evaluation",
    "Incident response and breach notification procedure review"
  ];

  const whyItMatters = `
    Educational institutions and federal agencies must comply with strict data protection and security 
    requirements under FERPA and FISMA regulations. Educational records contain sensitive student 
    information that requires careful protection, while federal information systems face constant 
    cybersecurity threats from nation-state actors and cybercriminals. Non-compliance can result in 
    loss of federal funding, regulatory sanctions, and compromise of sensitive data. Our specialized 
    FERPA/FISMA audit services help educational institutions and federal agencies assess their 
    compliance posture, identify security gaps, and implement comprehensive protection measures that 
    meet regulatory requirements while supporting their mission-critical operations.
  `;

  return (
    <ServiceDetailTemplate
      title="FERPA/FISMA"
      description="Educational and federal security compliance assessments covering data privacy and information system security requirements for academic and government organizations."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<GraduationCap className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}