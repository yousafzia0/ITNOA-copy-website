import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import BecomeClient from "@/pages/become-client";
import Contact from "@/pages/contact";
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
import DatabaseSecurityAudit from "@/pages/services/database-security-audit";
import OSAudit from "@/pages/services/os-audit";
import NetworkSecurity from "@/pages/services/network-security";
import SOXAuditing from "@/pages/services/sox-auditing";
import FFIECAudits from "@/pages/services/ffiec-audits";
import HIPAASecurityAudits from "@/pages/services/hipaa-security-audits";
import FERPAFISMAudit from "@/pages/services/ferpa-fisma";
// SOX Auditing Services
import SOXCyberSecurityRequirements from "@/pages/services/sox-cyber-security-requirements";
import SOXITGeneralControls from "@/pages/services/sox-it-general-controls";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/become-client" component={BecomeClient} />
      <Route path="/contact" component={Contact} />
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
      <Route path="/services/database-security-audit" component={DatabaseSecurityAudit} />
      <Route path="/services/os-audit" component={OSAudit} />
      <Route path="/services/network-security" component={NetworkSecurity} />
      <Route path="/services/sox-auditing" component={SOXAuditing} />
      <Route path="/services/ffiec-audits" component={FFIECAudits} />
      <Route path="/services/hipaa-security-audits" component={HIPAASecurityAudits} />
      <Route path="/services/ferpa-fisma" component={FERPAFISMAudit} />
      {/* SOX Auditing Services */}
      <Route path="/services/sox-cyber-security-requirements" component={SOXCyberSecurityRequirements} />
      <Route path="/services/sox-it-general-controls" component={SOXITGeneralControls} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
