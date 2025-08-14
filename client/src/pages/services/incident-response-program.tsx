import { Zap } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function IncidentResponseProgram() {
  const whatWeDo = [
    "Incident response program design and implementation including governance structure, roles, responsibilities, and escalation procedures.",
    "Incident response team development including team structure, training programs, and competency development for incident responders.",
    "Incident response playbook creation including detailed procedures for different incident types, decision trees, and response workflows.",
    "Incident detection and monitoring capability assessment including SIEM integration, threat hunting, and early warning systems.",
    "Incident containment and eradication procedures including isolation strategies, malware removal, and system recovery protocols.",
    "Digital forensics capability development including evidence preservation, chain of custody, and forensic analysis procedures.",
    "Communication and notification protocols including internal escalation, external stakeholder notification, and regulatory reporting requirements.",
    "Incident response testing and simulation including tabletop exercises, technical drills, and full-scale incident response exercises.",
    "Post-incident analysis and improvement including lessons learned documentation, process improvement, and knowledge management.",
    "Legal and regulatory compliance integration including breach notification requirements, law enforcement coordination, and regulatory reporting."
  ];

  const whyItMatters = [
    "Effective incident response can reduce average breach cost by up to $2 million and significantly minimize business disruption duration.",
    "Regulatory requirements mandate timely incident response and breach notification with specific timeframes and reporting obligations.",
    "Modern threats require coordinated response capabilities including technical, legal, communications, and business continuity elements.",
    "Incident response readiness demonstrates due diligence supporting cyber insurance coverage and reducing liability exposure.",
    "Stakeholder confidence depends on demonstrated ability to detect, respond to, and recover from security incidents effectively.",
    "Competitive advantage requires maintaining operations during security incidents while competitors may experience extended downtime.",
    "Investment protection requires rapid incident response to minimize impact on business operations, customer data, and organizational reputation."
  ];

  return (
    <ServiceDetailTemplate
      title="Incident Response Program"
      description="Incident response program development and capability assessment to ensure organizations can effectively detect, contain, and recover from security incidents while meeting regulatory and stakeholder expectations."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Zap className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}