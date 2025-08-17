import Navigation from "@/components/navigation";
import { Shield, CheckCircle, Search, FileText, AlertTriangle, Settings } from "lucide-react";

export default function GapAssessmentsUsingSTIGs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-violet-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Search className="h-12 w-12 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Gap Assessments Using STIGs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security gap analysis using DISA Security Technical Implementation Guides (STIGs) to identify vulnerabilities and ensure compliance with military and government security standards.
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
                  DISA STIG Compliance Assessment
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our STIG-based gap assessment service provides thorough evaluation of your systems against Defense Information Systems Agency (DISA) Security Technical Implementation Guides, ensuring compliance with DoD and federal security requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Multi-Platform STIG Coverage</h3>
                      <p className="text-gray-600">Windows, Linux, network devices, and application STIGs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Automated Scanning</h3>
                      <p className="text-gray-600">SCAP-compliant tools for efficient vulnerability identification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Risk Prioritization</h3>
                      <p className="text-gray-600">CAT I, II, III categorization and remediation planning</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">STIG Categories Covered</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Operating Systems (Windows/Linux)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Network Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Database Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Web Servers & Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Search className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Virtualization Platforms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STIG Severity Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              STIG Severity Classification
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                  <span className="text-red-600 font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Category I (High)</h3>
                <p className="text-gray-600">
                  Vulnerabilities that could directly result in loss of confidentiality, availability, or integrity. Immediate remediation required.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                  <span className="text-yellow-600 font-bold">II</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Category II (Medium)</h3>
                <p className="text-gray-600">
                  Vulnerabilities that could significantly impact security posture or reduce mitigating controls. Timely remediation required.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-blue-600 font-bold">III</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Category III (Low)</h3>
                <p className="text-gray-600">
                  Vulnerabilities that degrade security measures. Should be corrected but pose lower risk to overall security posture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Tools */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Assessment Tools & Methodology
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SCAP Tools</h3>
                <p className="text-gray-600">Security Content Automation Protocol compliance scanning</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">STIG Viewer</h3>
                <p className="text-gray-600">Official DISA STIG validation and checklist tools</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Manual Validation</h3>
                <p className="text-gray-600">Expert review for complex configurations and policies</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Analysis</h3>
                <p className="text-gray-600">Comprehensive risk assessment and impact analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Assessment Deliverables</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">STIG Compliance Report</h3>
                      <p className="text-gray-600">Detailed findings for each STIG rule with compliance status</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Gap Analysis Matrix</h3>
                      <p className="text-gray-600">Comprehensive view of non-compliant items and remediation steps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Remediation Roadmap</h3>
                      <p className="text-gray-600">Prioritized action plan based on risk and effort assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Executive Dashboard</h3>
                      <p className="text-gray-600">High-level summary with compliance metrics and trends</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Enhanced security posture alignment with DoD standards</li>
                  <li>• Improved compliance for government contractors</li>
                  <li>• Reduced risk of security incidents and breaches</li>
                  <li>• Streamlined audit preparation and documentation</li>
                  <li>• Cost-effective remediation planning and execution</li>
                  <li>• Continuous monitoring and improvement framework</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Achieve STIG Compliance Excellence
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Expert DISA STIG assessment services for military-grade security standards
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Assessment
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}