import { Server } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PeoplesoftAudit() {
  const whatWeDo = [
    "PeopleSoft application security configuration and access control review",
    "User authentication and authorization mechanisms assessment",
    "PeopleSoft database security and encryption evaluation",
    "Role-based security and permission class analysis",
    "Integration security review for PeopleSoft connections and interfaces",
    "Application development security and code review procedures",
    "PeopleSoft patch management and vulnerability assessment",
    "Regulatory compliance verification for HR and financial data protection"
  ];

  const whyItMatters = `
    PeopleSoft applications manage critical HR, financial, and operational data that requires robust security 
    protection. Security gaps in PeopleSoft environments can expose sensitive employee information, financial 
    records, and business processes to unauthorized access. With increasing data privacy regulations and 
    sophisticated attack vectors targeting enterprise applications, regular PeopleSoft security audits are 
    crucial for maintaining compliance and protecting sensitive organizational data. Our specialized audits 
    help organizations identify PeopleSoft-specific vulnerabilities and implement comprehensive security 
    measures to safeguard their most valuable information assets.
  `;

  return (
    <ServiceDetailTemplate
      title="Peoplesoft Audit"
      description="Thorough Peoplesoft application security reviews focusing on configuration, access management, and data protection protocols for your enterprise applications."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Server className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}