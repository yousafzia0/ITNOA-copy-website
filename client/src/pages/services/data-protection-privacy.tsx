import Navigation from "@/components/navigation";
import { Shield, CheckCircle, Lock, FileText, Eye, Users } from "lucide-react";

export default function DataProtectionPrivacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-emerald-100 rounded-full">
                  <Lock className="h-12 w-12 text-emerald-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data Protection & Privacy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data protection and privacy services ensuring compliance with global regulations like GDPR, CCPA, and other privacy frameworks while safeguarding sensitive information throughout its lifecycle.
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
                  Comprehensive Privacy Framework
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Data Protection & Privacy services provide end-to-end solutions for managing personal data, ensuring regulatory compliance, and implementing privacy-by-design principles across your organization's data ecosystem.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Regulatory Compliance</h3>
                      <p className="text-gray-600">GDPR, CCPA, PIPEDA, and emerging privacy regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Privacy by Design</h3>
                      <p className="text-gray-600">Integration of privacy principles into system architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Lifecycle Management</h3>
                      <p className="text-gray-600">Comprehensive data handling from collection to deletion</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Categories</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Privacy Impact Assessments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Data Classification & Mapping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Consent Management Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Data Subject Rights Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Privacy Policy Development</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-700">
                    <strong>Note:</strong> Additional specialized services will be added to this category. Please contact us for specific privacy and data protection requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Core Privacy Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4">
                  <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Minimization</h3>
                <p className="text-gray-600">
                  Collect only necessary data for specified purposes
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4">
                  <Eye className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  Clear communication about data processing activities
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Control</h3>
                <p className="text-gray-600">
                  Empowering individuals with data subject rights
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security</h3>
                <p className="text-gray-600">
                  Robust protection measures for personal data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Global Privacy Regulations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">GDPR</h3>
                <p className="text-blue-800 mb-4">General Data Protection Regulation</p>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• European Union compliance</li>
                  <li>• Data subject rights</li>
                  <li>• Privacy by design</li>
                  <li>• Breach notification</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4">CCPA</h3>
                <p className="text-purple-800 mb-4">California Consumer Privacy Act</p>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• California compliance</li>
                  <li>• Consumer rights</li>
                  <li>• Data disclosure</li>
                  <li>• Opt-out mechanisms</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">PIPEDA</h3>
                <p className="text-green-800 mb-4">Personal Information Protection Act</p>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Canadian compliance</li>
                  <li>• Consent requirements</li>
                  <li>• Data collection limits</li>
                  <li>• Individual access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <FileText className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Expanding Service Portfolio
              </h2>
              <p className="text-gray-600 mb-6">
                We are continuously expanding our Data Protection & Privacy services to meet evolving regulatory requirements and organizational needs. Additional specialized services will be added to provide comprehensive privacy solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Privacy Audits</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Data Breach Response</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Cross-Border Transfers</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Vendor Assessments</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Protect Your Data, Preserve Privacy
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Expert data protection and privacy services for regulatory compliance
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Discuss Privacy Needs
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}