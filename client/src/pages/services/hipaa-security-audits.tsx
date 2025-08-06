import { Heart } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function HIPAASecurityAudits() {
  const whatWeDo = [
    "HIPAA Security Rule compliance assessment and gap analysis",
    "Protected Health Information (PHI) security and access control review",
    "Administrative, physical, and technical safeguards evaluation",
    "Business Associate Agreement (BAA) compliance verification",
    "Healthcare data encryption and transmission security assessment",
    "Audit controls and information access management review",
    "Incident response and breach notification procedure assessment",
    "Risk assessment and security management process evaluation"
  ];

  const whyItMatters = `
    Healthcare organizations handle some of the most sensitive personal information, making them attractive 
    targets for cybercriminals and subject to strict regulatory requirements under HIPAA. Healthcare data 
    breaches can result in significant financial penalties, legal liability, and damage to patient trust. 
    With healthcare cyberattacks increasing and OCR enforcement actions becoming more severe, HIPAA 
    compliance is essential for protecting patient privacy and avoiding regulatory sanctions. Our 
    specialized HIPAA security audits help healthcare organizations assess their compliance posture, 
    identify vulnerabilities in their patient data protection measures, and implement comprehensive 
    security controls that safeguard PHI while supporting quality patient care.
  `;

  return (
    <ServiceDetailTemplate
      title="HIPAA Security Audits"
      description="Healthcare-focused security audits ensuring patient data protection and HIPAA compliance across all systems and processes handling Protected Health Information."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Heart className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}