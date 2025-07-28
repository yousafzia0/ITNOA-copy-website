import { Bug } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PenetrationTesting() {
  const whatWeDo = [
    "External network penetration testing to identify perimeter security weaknesses",
    "Internal network assessments to evaluate lateral movement and privilege escalation risks",
    "Web application security testing using OWASP methodology and advanced techniques",
    "Mobile application penetration testing for iOS and Android platforms",
    "Wireless network security assessments and configuration reviews",
    "Social engineering testing including phishing simulations and physical security assessments",
    "Red team exercises simulating advanced persistent threat (APT) scenarios",
    "Detailed reporting with executive summaries and technical remediation guidance"
  ];

  const whyItMatters = `
    Penetration testing provides a real-world assessment of your security defenses by simulating actual 
    attack scenarios. Unlike automated vulnerability scans, our expert-led penetration tests identify 
    complex attack chains and business logic flaws that could be exploited by sophisticated attackers. 
    Regular penetration testing helps organizations stay ahead of evolving threats, validate security 
    investments, and meet compliance requirements. With the global average cost of a data breach 
    exceeding $4 million, investing in penetration testing is a cost-effective way to identify and 
    remediate vulnerabilities before they can be exploited.
  `;

  return (
    <ServiceDetailTemplate
      title="Penetration Testing"
      description="Expert-led penetration testing services to identify system vulnerabilities, validate security controls, and provide actionable remediation guidance to strengthen your security posture."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Bug className="h-10 w-10 text-[hsl(var(--pakistan-green))]" />}
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}
