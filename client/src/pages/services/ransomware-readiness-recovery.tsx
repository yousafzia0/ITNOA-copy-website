import { AlertTriangle } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function RansomwareReadinessRecovery() {
  const whatWeDo = [
    "Ransomware readiness assessment including evaluation of preventive controls, detection capabilities, and response procedures.",
    "Ransomware incident response plan development including containment, eradication, and recovery procedures specific to ransomware attacks.",
    "Backup and recovery system validation to ensure data can be restored without paying ransom demands.",
    "Network segmentation and isolation strategy review to limit ransomware spread and protect critical systems.",
    "Ransomware detection and monitoring capabilities assessment including endpoint detection, network monitoring, and behavioral analysis.",
    "User awareness training program development focused on ransomware prevention and recognition of suspicious activities.",
    "Ransomware recovery testing including simulated attacks and recovery exercises to validate response capabilities.",
    "Legal and regulatory compliance review for ransomware incidents including breach notification and law enforcement coordination.",
    "Business continuity integration ensuring ransomware response aligns with broader business continuity and disaster recovery plans.",
    "Post-incident analysis and improvement procedures to enhance ransomware resilience based on lessons learned and threat intelligence."
  ];

  const whyItMatters = [
    "Ransomware attacks have increased dramatically with average recovery costs exceeding millions of dollars including downtime and recovery expenses.",
    "Many organizations paying ransoms still experience significant data loss and extended recovery times making prevention and response planning critical.",
    "Regulatory authorities increasingly expect organizations to demonstrate ransomware preparedness and may impose penalties for inadequate protection.",
    "Ransomware attacks can cause extended business disruptions affecting not only IT systems but also operational technology and business processes.",
    "Effective ransomware readiness reduces attack success rates and significantly decreases recovery time when incidents do occur.",
    "Insurance coverage for ransomware is increasingly dependent on demonstrated security controls and incident response capabilities.",
    "Stakeholder confidence and business reputation depend on ability to maintain operations and protect data during ransomware threats."
  ];

  return (
    <ServiceDetailTemplate
      title="Ransomware Readiness & Recovery"
      description="Ransomware prevention, readiness assessment, and recovery planning to protect against cyber threats and ensure rapid recovery from ransomware attacks without paying ransom demands."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<AlertTriangle className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}