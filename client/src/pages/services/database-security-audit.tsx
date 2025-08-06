import { Shield } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function DatabaseSecurityAudit() {
  const whatWeDo = [
    "Database access control and privilege escalation vulnerability assessment",
    "Data encryption at rest and in transit security evaluation",
    "Database configuration hardening and security parameter review",
    "SQL injection and database-specific vulnerability testing",
    "Database backup security and recovery procedure assessment",
    "User authentication and authorization mechanism analysis",
    "Database auditing and logging configuration review",
    "Compliance verification against PCI DSS, HIPAA, and industry standards"
  ];

  const whyItMatters = `
    Databases contain an organization's most valuable and sensitive information, making them prime targets 
    for cybercriminals and insider threats. Database security breaches can result in massive data theft, 
    regulatory penalties, and severe reputational damage. With data protection regulations becoming 
    increasingly stringent and attack techniques growing more sophisticated, comprehensive database 
    security audits are essential for protecting sensitive information. Our specialized database security 
    assessments help organizations identify vulnerabilities, implement robust security controls, and 
    maintain compliance with regulatory requirements while ensuring optimal database performance.
  `;

  return (
    <ServiceDetailTemplate
      title="Database Security Audit"
      description="In-depth database security assessments covering encryption, access controls, vulnerability scanning, and compliance verification for all database platforms."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Shield className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}