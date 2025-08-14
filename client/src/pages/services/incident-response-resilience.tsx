import { RefreshCw } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function IncidentResponseResilience() {
  const whatWeDo = [
    "Incident response plan assessment – Comprehensive review of incident response procedures, roles, responsibilities, and escalation processes.",
    "Incident response team readiness evaluation – Assessment of incident response team capabilities, training, and coordination mechanisms.",
    "Cyber resilience testing and tabletop exercises – Simulated incident scenarios to test response procedures and identify improvement opportunities.",
    "Business continuity and disaster recovery integration – Review of incident response alignment with business continuity and DR plans.",
    "Forensic capabilities and evidence preservation – Assessment of digital forensics capabilities and evidence handling procedures.",
    "Communication and notification procedures – Evaluation of internal and external communication protocols during security incidents.",
    "Post-incident review and lessons learned – Assessment of incident analysis, root cause identification, and improvement implementation.",
    "Threat hunting and proactive detection – Review of threat hunting capabilities and proactive security monitoring processes."
  ];

  const whyItMatters = [
    "Effective incident response can reduce the average cost of a data breach by up to $2 million and minimize business disruption.",
    "Ensures compliance with breach notification requirements under regulations like GDPR, HIPAA, and state privacy laws.",
    "Reduces dwell time of attackers in the environment through rapid detection, containment, and eradication procedures.",
    "Preserves evidence and supports legal proceedings through proper forensic procedures and chain of custody maintenance.",
    "Builds organizational resilience by testing and improving response capabilities before actual incidents occur."
  ];

  return (
    <ServiceDetailTemplate
      title="Incident Response & Resilience"
      description="Incident response capability testing and cyber resilience assessments to ensure organizations can effectively detect, contain, and recover from security incidents while maintaining business operations."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<RefreshCw className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}