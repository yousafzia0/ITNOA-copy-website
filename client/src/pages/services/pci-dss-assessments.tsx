import { CreditCard } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function PCIDSSAssessments() {
  const whatWeDo = [
    "PCI DSS scope definition and cardholder data environment (CDE) mapping",
    "Comprehensive security assessment against all 12 PCI DSS requirements",
    "Network segmentation validation and cardholder data flow analysis",
    "Vulnerability scanning and penetration testing for PCI compliance",
    "Compensating controls evaluation and implementation guidance",
    "Self-Assessment Questionnaire (SAQ) completion and validation support",
    "Report on Compliance (ROC) preparation and submission assistance",
    "Ongoing compliance monitoring and quarterly security assessment coordination"
  ];

  const whyItMatters = `
    PCI DSS compliance is mandatory for any organization that processes, stores, or transmits credit 
    card information, with non-compliance resulting in significant fines and potential loss of payment 
    processing privileges. Beyond regulatory requirements, PCI DSS implementation provides a robust 
    security framework that protects sensitive payment data and reduces the risk of costly data breaches. 
    The average cost of a payment card data breach exceeds $5 million, making PCI DSS compliance both 
    a regulatory necessity and a sound business investment. Our assessment services ensure not only 
    compliance achievement but also sustainable security practices that protect your organization 
    and customers' sensitive financial information.
  `;

  return (
    <ServiceDetailTemplate
      title="PCI DSS Assessments"
      description="Comprehensive PCI DSS compliance assessments to ensure payment data security, meet regulatory requirements, protect sensitive cardholder information, and mitigate financial and reputational risks."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<CreditCard className="h-10 w-10 text-[#01411c]" />}

    />
  );
}
