import { Building } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function FFIECAudits() {
  const whatWeDo = [
    "FFIEC Cybersecurity Assessment Tool (CAT) implementation and evaluation",
    "Information security program maturity assessment",
    "Risk management and governance framework review",
    "Incident response and business continuity planning assessment",
    "Third-party risk management and vendor security evaluation",
    "Customer authentication and access control review",
    "Data protection and privacy control assessment",
    "Regulatory compliance verification and gap analysis"
  ];

  const whyItMatters = `
    Financial institutions face unique cybersecurity challenges and regulatory requirements under FFIEC 
    guidance. The increasing sophistication of cyber threats targeting financial services, combined with 
    strict regulatory oversight, makes FFIEC compliance critical for maintaining operational licenses and 
    customer trust. Non-compliance can result in significant regulatory penalties, examination findings, 
    and enforcement actions. Our specialized FFIEC audit services help financial institutions assess 
    their cybersecurity posture against regulatory expectations, identify compliance gaps, and implement 
    robust security controls that meet or exceed FFIEC standards while supporting business objectives.
  `;

  return (
    <ServiceDetailTemplate
      title="FFIEC Audits"
      description="Federal Financial Institutions Examination Council compliance assessments for financial sector cybersecurity requirements and regulatory compliance."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Building className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}