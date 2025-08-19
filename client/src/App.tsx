import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import BecomeClient from "@/pages/become-client";
import Contact from "@/pages/contact";
import Resources from "@/pages/resources";
import ITAudit from "@/pages/services/it-audit";
import GRCConsulting from "@/pages/services/grc-consulting";
import CyberResilience from "@/pages/services/cyber-resilience";
import PenetrationTesting from "@/pages/services/penetration-testing";
import ISO27001Implementation from "@/pages/services/iso-27001-implementation";
import NISTCSFImplementation from "@/pages/services/nist-csf-implementation";
import PCIDSSAssessments from "@/pages/services/pci-dss-assessments";
import BusinessContinuityPlanning from "@/pages/services/business-continuity-planning";
import CloudSecurityAssessments from "@/pages/services/cloud-security-assessments";
import NIST171SecurityAssessment from "@/pages/services/nist-171-security-assessment";
import CyberEssentials from "@/pages/services/cyber-essentials";
import SOC2 from "@/pages/services/soc-2";
// IT Audit Services
import SAPAudit from "@/pages/services/sap-audit";
import PeoplesoftAudit from "@/pages/services/peoplesoft-audit";
import WorkdayHCMSecurity from "@/pages/services/workday-hcm-security";
import DatabaseSecurityAudit from "@/pages/services/database-security-audit";
import OSAudit from "@/pages/services/os-audit";
import NetworkSecurity from "@/pages/services/network-security";
import CloudSecurityAudits from "@/pages/services/cloud-security-audits";
import ApplicationSecuritySDLC from "@/pages/services/application-security-sdlc";
import IdentityAccessManagement from "@/pages/services/identity-access-management";
import VulnerabilityPatchManagement from "@/pages/services/vulnerability-patch-management";
import IncidentResponseResilience from "@/pages/services/incident-response-resilience";
import ThirdPartyVendorRisk from "@/pages/services/third-party-vendor-risk";
import SOXAuditing from "@/pages/services/sox-auditing";
import HIPAASecurityAudits from "@/pages/services/hipaa-security-audits";
import ITGovernanceCOBIT from "@/pages/services/it-governance-cobit";
import FFIECAudits from "@/pages/services/ffiec-audits";
import FERPAFISMAudit from "@/pages/services/ferpa-fisma";
// SOX Auditing Services
import SOXCyberSecurityRequirements from "@/pages/services/sox-cyber-security-requirements";
import SOXITGeneralControls from "@/pages/services/sox-it-general-controls";
// Business Continuity Services
import ISO22301BCMSAssessment from "@/pages/services/iso-22301-bcms-assessment";
import BusinessImpactAnalysisISO22301 from "@/pages/services/business-impact-analysis-iso-22301";
import ISO27031ICTReadinessDisasterRecovery from "@/pages/services/iso-27031-ict-readiness-disaster-recovery";
import CrisisCommunicationIncidentResponse from "@/pages/services/crisis-communication-incident-response";
import SupplierThirdPartyContinuity from "@/pages/services/supplier-third-party-continuity";
import RansomwareReadinessRecovery from "@/pages/services/ransomware-readiness-recovery";
import BusinessContinuitySystemReviewISO22301 from "@/pages/services/business-continuity-system-review-iso-22301";
// GRC Consulting Services
import AIGovernanceRisk from "@/pages/services/ai-governance-risk";
import DevSecOpsSecureSDLC from "@/pages/services/devsecops-secure-sdlc";
import IncidentResponseProgram from "@/pages/services/incident-response-program";
import RiskManagementFrameworks from "@/pages/services/risk-management-frameworks";
import CybersecurityMaturityAssessments from "@/pages/services/cybersecurity-maturity-assessments";
import CloudSecurityPostureManagement from "@/pages/services/cloud-security-posture-management";
import NIST80053RiskAssessment from "@/pages/services/nist-800-53-risk-assessment";
import FirewallRulesetReviewPCI from "@/pages/services/firewall-ruleset-review-pci";
import GapAssessmentsUsingSTIGs from "@/pages/services/gap-assessments-using-stigs";
// Data Protection & Privacy Services
import DataProtectionPrivacy from "@/pages/services/data-protection-privacy";
import BlogDetail from "@/pages/blog-detail";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on route change
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Also use global Lenis instance if available
      const globalLenis = (window as any).lenis;
      if (globalLenis && globalLenis.scrollTo) {
        globalLenis.scrollTo(0, { immediate: true });
      }
    };
    
    // Execute immediately and with slight delays to ensure it works
    scrollToTop();
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/become-client" component={BecomeClient} />
      <Route path="/contact" component={Contact} />
      <Route path="/resources" component={Resources} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/services/it-audit" component={ITAudit} />
      <Route path="/services/grc-consulting" component={GRCConsulting} />
      <Route path="/services/cyber-resilience" component={CyberResilience} />
      <Route path="/services/penetration-testing" component={PenetrationTesting} />
      <Route path="/services/iso-27001-implementation" component={ISO27001Implementation} />
      <Route path="/services/nist-csf-implementation" component={NISTCSFImplementation} />
      <Route path="/services/pci-dss-assessments" component={PCIDSSAssessments} />
      <Route path="/services/business-continuity-planning" component={BusinessContinuityPlanning} />
      <Route path="/services/cloud-security-assessments" component={CloudSecurityAssessments} />
      <Route path="/services/nist-171-security-assessment" component={NIST171SecurityAssessment} />
      <Route path="/services/cyber-essentials" component={CyberEssentials} />
      <Route path="/services/soc-2" component={SOC2} />
      {/* IT Audit Services */}
      <Route path="/services/sap-audit" component={SAPAudit} />
      <Route path="/services/peoplesoft-audit" component={PeoplesoftAudit} />
      <Route path="/services/workday-hcm-security" component={WorkdayHCMSecurity} />
      <Route path="/services/database-security-audit" component={DatabaseSecurityAudit} />
      <Route path="/services/os-audit" component={OSAudit} />
      <Route path="/services/network-security" component={NetworkSecurity} />
      <Route path="/services/cloud-security-audits" component={CloudSecurityAudits} />
      <Route path="/services/application-security-sdlc" component={ApplicationSecuritySDLC} />
      <Route path="/services/identity-access-management" component={IdentityAccessManagement} />
      <Route path="/services/vulnerability-patch-management" component={VulnerabilityPatchManagement} />
      <Route path="/services/incident-response-resilience" component={IncidentResponseResilience} />
      <Route path="/services/third-party-vendor-risk" component={ThirdPartyVendorRisk} />
      <Route path="/services/sox-auditing" component={SOXAuditing} />
      <Route path="/services/hipaa-security-audits" component={HIPAASecurityAudits} />
      <Route path="/services/data-protection-privacy" component={DataProtectionPrivacy} />
      <Route path="/services/it-governance-cobit" component={ITGovernanceCOBIT} />
      <Route path="/services/ffiec-audits" component={FFIECAudits} />
      <Route path="/services/ferpa-fisma" component={FERPAFISMAudit} />
      {/* SOX Auditing Services */}
      <Route path="/services/sox-cyber-security-requirements" component={SOXCyberSecurityRequirements} />
      <Route path="/services/sox-it-general-controls" component={SOXITGeneralControls} />
      {/* Business Continuity Services */}
      <Route path="/services/iso-22301-bcms-assessment" component={ISO22301BCMSAssessment} />
      <Route path="/services/business-impact-analysis-iso-22301" component={BusinessImpactAnalysisISO22301} />
      <Route path="/services/iso-27031-ict-readiness-disaster-recovery" component={ISO27031ICTReadinessDisasterRecovery} />
      <Route path="/services/crisis-communication-incident-response" component={CrisisCommunicationIncidentResponse} />
      <Route path="/services/supplier-third-party-continuity" component={SupplierThirdPartyContinuity} />
      <Route path="/services/ransomware-readiness-recovery" component={RansomwareReadinessRecovery} />
      <Route path="/services/business-continuity-system-review-iso-22301" component={BusinessContinuitySystemReviewISO22301} />
      {/* GRC Consulting Services */}
      <Route path="/services/ai-governance-risk" component={AIGovernanceRisk} />
      <Route path="/services/devsecops-secure-sdlc" component={DevSecOpsSecureSDLC} />
      <Route path="/services/incident-response-program" component={IncidentResponseProgram} />
      <Route path="/services/risk-management-frameworks" component={RiskManagementFrameworks} />
      <Route path="/services/cybersecurity-maturity-assessments" component={CybersecurityMaturityAssessments} />
      <Route path="/services/cloud-security-posture-management" component={CloudSecurityPostureManagement} />
      <Route path="/services/nist-800-53-risk-assessment" component={NIST80053RiskAssessment} />
      <Route path="/services/firewall-ruleset-review-pci" component={FirewallRulesetReviewPCI} />
      <Route path="/services/gap-assessments-using-stigs" component={GapAssessmentsUsingSTIGs} />
      {/* Data Protection & Privacy Services */}
      <Route path="/services/data-protection-privacy" component={DataProtectionPrivacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling with optimal settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoResize: true,
      prevent: (node: any) => node.classList?.contains('no-lenis'),
    });

    // Store global Lenis instance for scroll-to-top functionality
    (window as any).lenis = lenis;

    // Animation frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
