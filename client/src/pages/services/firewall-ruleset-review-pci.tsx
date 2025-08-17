import Navigation from "@/components/navigation";
import { Shield, CheckCircle, Network, FileText, AlertTriangle, Clock } from "lucide-react";

export default function FirewallRulesetReviewPCI() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Network className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Firewall Ruleset Review (PCI)
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized firewall configuration assessment ensuring PCI DSS compliance for organizations handling payment card data, with focus on network segmentation and access controls.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  PCI DSS Firewall Compliance
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Firewall Ruleset Review service provides comprehensive analysis of firewall configurations to ensure PCI DSS compliance, focusing on proper network segmentation, access controls, and cardholder data environment protection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">PCI DSS Requirements Analysis</h3>
                      <p className="text-gray-600">Detailed review against PCI DSS firewall requirements 1.1-1.5</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Network Segmentation</h3>
                      <p className="text-gray-600">Validation of proper CDE isolation and network boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Rule Optimization</h3>
                      <p className="text-gray-600">Performance and security enhancement recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Review Components</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Network className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Firewall Configuration Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Access Control Lists Review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Vulnerability Assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Documentation Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Remediation Recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PCI DSS Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              PCI DSS Firewall Requirements Coverage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-blue-600 font-bold">1.1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Firewall Standards</h3>
                <p className="text-gray-600">
                  Review of firewall and router configuration standards and procedures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-blue-600 font-bold">1.2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Default Configurations</h3>
                <p className="text-gray-600">
                  Assessment of vendor default configurations and security hardening.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-blue-600 font-bold">1.3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">DMZ Implementation</h3>
                <p className="text-gray-600">
                  Validation of proper DMZ configuration and network isolation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-blue-600 font-bold">1.4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Inbound Traffic Filtering</h3>
                <p className="text-gray-600">
                  Review of inbound traffic restrictions and access controls.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-blue-600 font-bold">1.5</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Outbound Traffic Controls</h3>
                <p className="text-gray-600">
                  Analysis of outbound traffic restrictions and monitoring.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation Review</h3>
                <p className="text-gray-600">
                  Comprehensive review of firewall documentation and change management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Review Methodology
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Network topology mapping and firewall inventory</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600">Rule-by-rule configuration review and testing</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Validation</h3>
                <p className="text-gray-600">PCI DSS compliance verification and gap analysis</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting</h3>
                <p className="text-gray-600">Detailed findings and optimization recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ensure PCI DSS Firewall Compliance
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Expert firewall review services for payment card industry compliance
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Review
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}