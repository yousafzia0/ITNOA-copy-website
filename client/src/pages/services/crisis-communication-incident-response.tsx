import { MessageSquare } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function CrisisCommunicationIncidentResponse() {
  const whatWeDo = [
    "Crisis communication strategy development aligned with NIST Cybersecurity Framework Response (RS) and Recovery (RC) functions.",
    "Incident response communication protocols including internal escalation and external stakeholder notification procedures.",
    "Crisis communication team structure and roles definition including spokesperson designation and decision-making authority.",
    "Stakeholder mapping and communication channel identification for customers, suppliers, regulators, media, and employees.",
    "Message templates and communication scripts for various incident scenarios and stakeholder audiences.",
    "Communication timing and frequency protocols to ensure timely and appropriate information sharing during crises.",
    "Media relations and public communication strategies to protect organizational reputation during incident response.",
    "Legal and regulatory notification requirements assessment including breach disclosure and compliance obligations.",
    "Communication effectiveness testing through tabletop exercises and crisis simulation scenarios.",
    "Post-incident communication review and lessons learned integration to improve future crisis response capabilities."
  ];

  const whyItMatters = [
    "Effective crisis communication is critical for maintaining stakeholder confidence and organizational reputation during security incidents.",
    "NIST CSF Response and Recovery functions emphasize communication as essential component of incident response capabilities.",
    "Poor communication during crises can cause additional damage beyond the original incident including customer loss and regulatory penalties.",
    "Regulatory requirements mandate timely and accurate communication about security incidents to various stakeholders and authorities.",
    "Proactive communication planning reduces response time and improves coordination during high-stress incident response situations.",
    "Clear communication protocols support business continuity by enabling stakeholders to take appropriate protective actions.",
    "Professional crisis communication demonstrates organizational competence and can accelerate recovery and stakeholder trust restoration."
  ];

  return (
    <ServiceDetailTemplate
      title="Crisis Communication & Incident Response (NIST CSF RS/RC)"
      description="Crisis communication planning and NIST Cybersecurity Framework incident response capabilities to ensure effective stakeholder communication during security incidents and business disruptions."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<MessageSquare className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}