import { Bug } from "lucide-react";
import ServiceDetailTemplate from "@/components/service-detail-template";

export default function ApplicationSecuritySDLC() {
  const whatWeDo = [
    "Secure Development Lifecycle (SDLC) assessment – Review of security controls integrated throughout the software development process from planning to deployment.",
    "Static Application Security Testing (SAST) – Source code analysis to identify security vulnerabilities, coding flaws, and compliance violations.",
    "Dynamic Application Security Testing (DAST) – Runtime testing of web applications to identify security vulnerabilities in deployed applications.",
    "Interactive Application Security Testing (IAST) – Real-time security testing during application execution to identify vulnerabilities with minimal false positives.",
    "Software Composition Analysis (SCA) – Assessment of third-party components and dependencies for known vulnerabilities and license compliance.",
    "Security code review and threat modeling – Manual security assessment of application architecture and code to identify design flaws and security gaps.",
    "DevSecOps integration assessment – Evaluation of security controls integrated into CI/CD pipelines and automated security testing processes.",
    "Application security training and awareness – Assessment of developer security training programs and security-aware coding practices."
  ];

  const whyItMatters = [
    "Application vulnerabilities are the leading cause of data breaches, making secure development practices essential for protecting organizational data.",
    "Integrating security early in the development lifecycle reduces remediation costs by up to 100x compared to fixing vulnerabilities in production.",
    "Ensures compliance with secure coding standards and regulatory requirements for applications handling sensitive data.",
    "Reduces time-to-market by identifying and addressing security issues before they impact deployment schedules.",
    "Protects against emerging threats targeting application vulnerabilities such as injection attacks, broken authentication, and insecure direct object references."
  ];

  return (
    <ServiceDetailTemplate
      title="Application Security & SDLC"
      description="Comprehensive application security testing and secure development lifecycle assessments to identify vulnerabilities and integrate security controls throughout the software development process."
      whatWeDo={whatWeDo}
      whyItMatters={whyItMatters}
      icon={<Bug className="h-10 w-10 text-[#01411c]" />}
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
    />
  );
}