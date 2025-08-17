import { Network } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function FirewallRulesetReviewPCI() {
  const whatWeDo = [
    "Comprehensive firewall rule analysis against PCI DSS requirements 1.1 through 1.5",
    "Cardholder Data Environment (CDE) network segmentation validation and testing",
    "Access control list review and unnecessary rule identification for removal",
    "Default deny policy implementation verification and traffic flow analysis",
    "DMZ configuration assessment and perimeter security control evaluation",
    "Network topology documentation review and logical diagram validation",
    "Firewall management process assessment and change control verification",
    "Quarterly firewall rule review process establishment and documentation"
  ];

  const whyItMatters = `
    PCI DSS firewall compliance is critical for organizations processing, storing, or transmitting payment 
    card data. Proper firewall configuration ensures network segmentation that isolates the cardholder data 
    environment, preventing unauthorized access and reducing the scope of PCI DSS compliance. Our specialized 
    review identifies configuration weaknesses, unnecessary exposure, and helps optimize firewall performance 
    while maintaining security. Non-compliance can result in significant fines, loss of merchant processing 
    privileges, and reputational damage following data breaches.
  `;

  return (
    <ServiceDetailTemplate
      title="Firewall Ruleset Review (PCI)"
      description="Specialized firewall configuration assessment ensuring PCI DSS compliance for organizations handling payment card data, with focus on network segmentation and access controls."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Network className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}