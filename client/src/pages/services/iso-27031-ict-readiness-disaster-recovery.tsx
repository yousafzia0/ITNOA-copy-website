import { HardDrive } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ISO27031ICTReadinessDisasterRecovery() {
  const whatWeDo = [
    "Assessment Scope & Objectives – Defining the ICT environments, systems, and services to be included in disaster recovery planning.",
    "Governance & Leadership – Reviewing DRP roles, responsibilities, policies, and top management commitment to ICT resilience.",
    "ICT Risk & Threat Assessment – Identifying risks, vulnerabilities, and potential failure points in ICT infrastructure.",
    "Business Impact & Dependency Analysis – Determining critical ICT services, their dependencies, and their contribution to business-critical processes.",
    "Recovery Objectives – Establishing and validating Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) for ICT systems, including those provided by third parties.",
    "Disaster Recovery Strategies – Reviewing and validating chosen recovery strategies (e.g., alternate sites, cloud failover, high availability solutions).",
    "Disaster Recovery Plan (DRP) Documentation – Assessing plan completeness, accuracy, and alignment with business priorities.",
    "Resource Readiness – Verifying availability and adequacy of people, facilities, equipment, and technology needed to execute DR plans.",
    "Testing & Exercising – Reviewing how DR plans are tested, frequency of exercises, and incorporation of lessons learned.",
    "Monitoring & Continual Improvement – Ensuring DRP processes are maintained, reviewed, and improved as technology, risks, and business needs evolve."
  ];

  const whyItMatters = [
    "Ensures your ICT disaster recovery capabilities directly support your organization’s Business Continuity Management System (BCMS) and overall resilience strategy.",
    "Reduces downtime by aligning Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) with business priorities and customer expectations.",
    "Identifies vulnerabilities in critical IT systems and infrastructure before they cause costly disruptions.",
    "Strengthens confidence in your ability to recover from cyberattacks, hardware failures, natural disasters, and other ICT-related incidents.",
    "Improves coordination between IT, business units, and third-party providers to ensure recovery strategies are achievable and aligned.",
    "Meets ISO, regulatory, and audit expectations for ICT readiness, supporting compliance with industry standards.",
    "Promotes continual improvement by integrating lessons learned from tests and real incidents into updated recovery plans.",
    "Protects brand reputation, customer trust, and revenue by ensuring rapid and reliable restoration of ICT services during a crisis."
  ];

  return (
    <ServiceDetailTemplate
      title="ISO 27031 ICT Readiness & Disaster Recovery"
      description="Our ISO 27031 assessments ensure your Information and Communication Technology (ICT) Disaster Recovery Planning fully supports your organization’s Business Continuity Management System (BCMS) and aligns with ISO 22301."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<HardDrive className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.15752-9/533154052_667036982395440_6020714932223541186_n.png?stp=dst-png_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bKLy9K9nd_EQ7kNvwH0KgZB&_nc_oc=Adn18vWq6dMH_erBoFpPYrgWSzexRst9SRxdiCSGuEoCHSTpHQYD0DRJ6qnac78rp2EHeJw-p028tcdoXm_XVntS&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&oh=03_Q7cD3AEuneNSpaJdcgl5hvnZQvK-MBRPa4M43oG-vpoLt9Pa1A&oe=68CC929A"
    />
  );
}