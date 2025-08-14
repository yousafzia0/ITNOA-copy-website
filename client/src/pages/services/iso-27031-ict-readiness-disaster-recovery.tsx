import { HardDrive } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ISO27031ICTReadinessDisasterRecovery() {
  const whatWeDo = [
    "ICT readiness assessment aligned with ISO/IEC 27031 guidelines for ICT readiness for business continuity.",
    "Information and communication technology continuity strategy development and validation.",
    "ICT service continuity requirements analysis including recovery time objectives and recovery point objectives.",
    "Technology infrastructure resilience evaluation including redundancy, failover capabilities, and backup systems.",
    "Data backup and recovery testing to ensure critical information can be restored within required timeframes.",
    "Communication systems continuity assessment including voice, data, and collaboration platform resilience.",
    "Cloud services and third-party ICT provider continuity evaluation and dependency mapping.",
    "ICT disaster recovery plan development and testing including scenario-based exercises and simulations.",
    "Cybersecurity integration ensuring ICT continuity plans address security threats and recovery from cyber incidents.",
    "ICT continuity governance and management processes review including roles, responsibilities, and escalation procedures."
  ];

  const whyItMatters = [
    "ICT systems are critical enablers of business operations making their continuity essential for organizational resilience.",
    "ISO/IEC 27031 provides structured approach to ICT readiness ensuring technology supports rather than hinders business continuity.",
    "Reduces technology-related business disruption through systematic identification and mitigation of ICT continuity risks.",
    "Ensures ICT recovery capabilities align with business requirements and stakeholder expectations for service restoration.",
    "Supports compliance with regulatory requirements for technology resilience across industries including financial services and healthcare.",
    "Demonstrates due diligence in ICT risk management supporting cyber insurance requirements and stakeholder confidence.",
    "Provides framework for continuous improvement ensuring ICT continuity capabilities evolve with technological changes and business growth."
  ];

  return (
    <ServiceDetailTemplate
      title="ISO/IEC 27031 ICT Readiness & Disaster Recovery"
      description="ICT readiness for business continuity and disaster recovery planning aligned with ISO/IEC 27031 standards to ensure technology infrastructure supports organizational resilience."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<HardDrive className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}