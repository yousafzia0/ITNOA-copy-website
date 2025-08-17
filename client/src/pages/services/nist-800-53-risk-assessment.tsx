import Navigation from "@/components/navigation";
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Clock } from "lucide-react";

export default function NIST80053RiskAssessment() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-full">
                  <Shield className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                NIST 800-53 Risk Assessment
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security controls assessment based on NIST SP 800-53 framework to strengthen your organization's cybersecurity posture and ensure compliance with federal security requirements.
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
                  NIST 800-53 Security Controls Framework
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our NIST 800-53 Risk Assessment service provides a thorough evaluation of your organization's security controls implementation against the comprehensive NIST Special Publication 800-53 framework, ensuring robust protection for federal information systems and organizations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Comprehensive Control Assessment</h3>
                      <p className="text-gray-600">Detailed evaluation of all applicable security control families</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Risk Categorization</h3>
                      <p className="text-gray-600">FIPS 199 impact categorization and control baseline selection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Implementation Guidance</h3>
                      <p className="text-gray-600">Practical recommendations for control implementation and enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Assessment Deliverables</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Security Control Assessment Report</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Risk Assessment Documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Control Implementation Matrix</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Remediation Roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Executive Summary Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Assessment Methodology
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Categorization</h3>
                <p className="text-gray-600">
                  FIPS 199 impact analysis and security categorization of information systems and data types.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Control Assessment</h3>
                <p className="text-gray-600">
                  Detailed evaluation of security control implementation effectiveness and compliance status.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation Review</h3>
                <p className="text-gray-600">
                  Comprehensive review of security documentation, policies, and procedures alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Assessment Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-green-600 font-semibold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">System categorization and control baseline selection</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Control testing and implementation verification</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-green-600 font-semibold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600">Risk analysis and vulnerability identification</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-green-600 font-semibold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting</h3>
                <p className="text-gray-600">Comprehensive findings and remediation roadmap</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Strengthen Your Security Controls?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get expert NIST 800-53 assessment services to enhance your cybersecurity posture
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Assessment
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}