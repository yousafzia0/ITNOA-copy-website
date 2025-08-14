import { User } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function IdentityAccessManagement() {
  const whatWeDo = [
    "Identity and Access Management (IAM) architecture review – Assessment of IAM infrastructure, identity providers, and access management frameworks.",
    "Access control policy evaluation – Review of role-based access control (RBAC), attribute-based access control (ABAC), and policy enforcement mechanisms.",
    "Privileged Access Management (PAM) assessment – Evaluation of privileged account security, just-in-time access, and administrative access controls.",
    "Single Sign-On (SSO) and federation security – Assessment of SSO implementations, SAML/OAuth configurations, and identity federation security.",
    "Multi-Factor Authentication (MFA) effectiveness review – Evaluation of MFA implementations, authentication factors, and bypass mechanisms.",
    "User lifecycle management assessment – Review of user provisioning, de-provisioning, and access certification processes.",
    "Directory services security evaluation – Assessment of Active Directory, LDAP, and cloud directory security configurations.",
    "Identity governance and compliance verification – Review of access governance processes, segregation of duties, and regulatory compliance."
  ];

  const whyItMatters = [
    "Identity-related breaches account for over 80% of security incidents, making effective IAM controls critical for organizational security.",
    "Ensures compliance with regulations requiring proper access controls such as SOX, HIPAA, PCI DSS, and GDPR.",
    "Reduces insider threat risk through proper access provisioning, monitoring, and periodic access reviews.",
    "Supports zero-trust security architecture by enforcing least-privilege access and continuous authentication.",
    "Prevents unauthorized access to sensitive systems and data through robust identity verification and access control mechanisms."
  ];

  return (
    <ServiceDetailTemplate
      title="Identity & Access Management (IAM)"
      description="Comprehensive IAM security assessments and access control framework reviews to ensure proper identity verification, access controls, and compliance with security regulations."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<User className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}