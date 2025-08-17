import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import { Shield, CheckCircle, Lock, FileText, Eye, Users, ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function DataProtectionPrivacy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden py-20">
          <div className="geometric-pattern absolute inset-0"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                  <Lock className="h-12 w-12 text-[#01411c]" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Data Protection & <span className="text-[#01411c]">Privacy</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive data protection and privacy services ensuring compliance with global regulations like GDPR, CCPA, and other privacy frameworks while safeguarding sensitive information throughout its lifecycle.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive privacy framework design and implementation
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#01411c] rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Regulatory Compliance Assessment</h3>
                    <p className="text-slate-600">GDPR, CCPA, PIPEDA, and emerging privacy regulations alignment with comprehensive gap analysis and remediation planning.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#01411c] rounded-full flex items-center justify-center">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Privacy by Design Implementation</h3>
                    <p className="text-slate-600">Integration of privacy principles into system architecture, development lifecycle, and business processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#01411c] rounded-full flex items-center justify-center">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Lifecycle Management</h3>
                    <p className="text-slate-600">Comprehensive data handling from collection to deletion with robust governance and monitoring frameworks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#01411c] rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Subject Rights Management</h3>
                    <p className="text-slate-600">Automated systems for handling access, rectification, portability, and erasure requests with audit trails.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Privacy Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Shield className="h-5 w-5 text-[#01411c]" />
                    <span className="text-slate-700 font-medium">Privacy Impact Assessments</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <FileText className="h-5 w-5 text-[#01411c]" />
                    <span className="text-slate-700 font-medium">Data Classification & Mapping</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Eye className="h-5 w-5 text-[#01411c]" />
                    <span className="text-slate-700 font-medium">Consent Management Systems</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Users className="h-5 w-5 text-[#01411c]" />
                    <span className="text-slate-700 font-medium">Data Subject Rights Automation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Lock className="h-5 w-5 text-[#01411c]" />
                    <span className="text-slate-700 font-medium">Privacy Policy Development</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[#01411c]/10 rounded-lg border-l-4 border-[#01411c]">
                  <p className="text-sm text-slate-700">
                    <strong>Expanding Portfolio:</strong> Additional specialized services are being added to meet evolving regulatory requirements. Contact us for specific privacy and data protection needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why It Matters
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-slate-600 leading-relaxed">
                  Data protection and privacy compliance are critical for maintaining customer trust, avoiding regulatory penalties, and ensuring sustainable business operations. With global privacy regulations becoming increasingly stringent and data breach costs averaging millions in damages, organizations must implement comprehensive privacy frameworks that protect sensitive information while enabling legitimate business activities. Our privacy-by-design approach ensures compliance is built into your systems and processes from the ground up.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#01411c]/10 rounded-lg mx-auto mb-4">
                    <Lock className="h-6 w-6 text-[#01411c] icon-bounce" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Minimization</h3>
                  <p className="text-slate-600">
                    Collect only necessary data for specified purposes with clear retention policies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#01411c]/10 rounded-lg mx-auto mb-4">
                    <Eye className="h-6 w-6 text-[#01411c] icon-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Transparency</h3>
                  <p className="text-slate-600">
                    Clear communication about data processing activities and individual rights
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#01411c]/10 rounded-lg mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#01411c] icon-glow" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">User Control</h3>
                  <p className="text-slate-600">
                    Empowering individuals with comprehensive data subject rights management
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#01411c]/10 rounded-lg mx-auto mb-4">
                    <Shield className="h-6 w-6 text-[#01411c] icon-shield" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Security</h3>
                  <p className="text-slate-600">
                    Robust protection measures for personal data throughout its lifecycle
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Global Privacy Regulations Coverage
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive compliance services for major privacy frameworks worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-l-4 border-[#01411c] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    GDPR
                  </h3>
                  <p className="text-slate-600 mb-4 font-medium">General Data Protection Regulation</p>
                  <ul className="text-slate-600 space-y-2 text-sm">
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />European Union compliance</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Data subject rights implementation</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Privacy by design integration</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Breach notification procedures</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-[#01411c] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    CCPA
                  </h3>
                  <p className="text-slate-600 mb-4 font-medium">California Consumer Privacy Act</p>
                  <ul className="text-slate-600 space-y-2 text-sm">
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />California compliance framework</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Consumer rights management</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Data disclosure requirements</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Opt-out mechanisms</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-[#01411c] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    PIPEDA
                  </h3>
                  <p className="text-slate-600 mb-4 font-medium">Personal Information Protection Act</p>
                  <ul className="text-slate-600 space-y-2 text-sm">
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Canadian compliance standards</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Consent management systems</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Data collection limitations</li>
                    <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#01411c] mr-2" />Individual access rights</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Expanding Portfolio */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#01411c]/10 rounded-full">
                    <FileText className="h-8 w-8 text-[#01411c]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Expanding Service Portfolio
                </h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  We are continuously expanding our Data Protection & Privacy services to meet evolving regulatory requirements and organizational needs. Additional specialized services will be added to provide comprehensive privacy solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white text-[#01411c] border border-[#01411c]/20 rounded-full text-sm font-medium">Privacy Audits</span>
                <span className="px-4 py-2 bg-white text-[#01411c] border border-[#01411c]/20 rounded-full text-sm font-medium">Data Breach Response</span>
                <span className="px-4 py-2 bg-white text-[#01411c] border border-[#01411c]/20 rounded-full text-sm font-medium">Cross-Border Transfers</span>
                <span className="px-4 py-2 bg-white text-[#01411c] border border-[#01411c]/20 rounded-full text-sm font-medium">Vendor Assessments</span>
                <span className="px-4 py-2 bg-white text-[#01411c] border border-[#01411c]/20 rounded-full text-sm font-medium">Data Governance</span>
                <span className="px-4 py-2 bg-white text-[#01411c] border border-[#01411c]/20 rounded-full text-sm font-medium">Privacy Training</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#01411c] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Protect Your Data, Preserve Privacy
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Expert data protection and privacy services for comprehensive regulatory compliance and customer trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-[#01411c] hover:bg-[#01411c] hover:text-white transition-all duration-300">
                  Discuss Privacy Needs
                </Button>
              </Link>
              <Link href="/become-client">
                <Button size="lg" variant="outline" className="bg-white text-[#01411c] hover:bg-[#01411c] hover:text-white transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
}