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
