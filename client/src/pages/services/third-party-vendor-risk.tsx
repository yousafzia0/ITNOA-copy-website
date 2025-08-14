import { Users } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ThirdPartyVendorRisk() {
  const whatWeDo = [
    "Third-party risk assessment framework review – Evaluation of vendor risk management policies, procedures, and governance structures.",
    "Vendor security assessment and due diligence – Comprehensive security evaluation of third-party vendors and service providers.",
    "Supply chain security analysis – Assessment of supply chain risks, dependencies, and security controls across vendor relationships.",
    "Contract and SLA security review – Evaluation of security requirements, liability terms, and performance metrics in vendor agreements.",
    "Vendor access controls and monitoring – Review of third-party access to organizational systems, data, and facilities.",
    "Fourth-party risk evaluation – Assessment of risks from vendors' subcontractors and downstream partners.",
    "Vendor performance monitoring and reporting – Review of ongoing vendor risk monitoring, KPI tracking, and reporting processes.",
    "Incident response and vendor breach management – Assessment of procedures for managing security incidents involving third parties."
  ];

  const whyItMatters = [
    "Third-party breaches account for over 29% of all data breaches, making vendor risk management critical for organizational security.",
    "Ensures compliance with regulations requiring oversight of third-party processors such as GDPR, HIPAA, and PCI DSS.",
    "Protects against supply chain attacks that can compromise organizational systems through trusted vendor relationships.",
    "Reduces liability and financial exposure from vendor security incidents through proper risk assessment and contractual protections.",
    "Maintains business continuity by ensuring critical vendors have adequate security and resilience capabilities."
  ];

  return (
    <ServiceDetailTemplate
      title="Third-Party / Vendor Risk"
      description="Comprehensive third-party security assessments and vendor risk management reviews to protect against supply chain risks and ensure vendor security compliance."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Users className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}