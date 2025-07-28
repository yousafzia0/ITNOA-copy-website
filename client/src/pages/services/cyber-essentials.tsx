import { CheckCircle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CyberEssentials() {
  const whatWeDo = [
    "Cyber Essentials scheme readiness assessment and gap analysis",
    "Five key security control implementation: firewalls, secure configuration, access control, malware protection, and patch management",
    "Technical vulnerability assessment and remediation guidance",
    "Security policy development and implementation support",
    "Employee awareness training and security culture development",
    "Certification preparation and submission support for both Cyber Essentials and Cyber Essentials Plus",
    "Annual re-certification planning and ongoing compliance maintenance",
    "Supply chain security assessment and vendor risk management integration"
  ];

  const whyItMatters = `
    Cyber Essentials certification demonstrates your organization's commitment to cybersecurity fundamentals 
    and provides a competitive advantage when bidding for government contracts or working with security-conscious 
    clients. The scheme addresses the most common cyber attack methods, with proper implementation preventing 
    approximately 80% of common cyber attacks. Many organizations now require Cyber Essentials certification 
    from their suppliers and partners, making it essential for business development and maintaining customer 
    relationships. Beyond compliance benefits, Cyber Essentials implementation establishes essential security 
    controls that significantly reduce your organization's cyber risk exposure and provides a foundation for 
    more advanced security initiatives.
  `;

  return (
    <ServiceDetailTemplate
      title="Cyber Essentials"
      description="Expert Cyber Essentials certification support to help your organization achieve recognized cybersecurity standards, demonstrate security commitment, and protect against common cyber threats."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CheckCircle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
