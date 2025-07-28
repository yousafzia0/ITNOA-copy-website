import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { University, Heart, Landmark, Cpu, Factory, GraduationCap, ShoppingCart, Zap } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Industries() {
  const industries = [
    {
      icon: <University className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Financial Services",
      description: "Comprehensive security solutions for banks, credit unions, and financial institutions. We help navigate complex regulatory requirements including PCI DSS, SOX, and anti-money laundering compliance.",
      features: ["PCI DSS Compliance", "Risk Assessment", "Fraud Prevention", "Regulatory Reporting"]
    },
    {
      icon: <Heart className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Healthcare",
      description: "HIPAA compliance and security solutions for healthcare providers and medical facilities. Protect patient data while maintaining operational efficiency and regulatory compliance.",
      features: ["HIPAA Compliance", "PHI Protection", "Medical Device Security", "Breach Prevention"]
    },
    {
      icon: <Landmark className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Government",
      description: "Federal, state, and local government cybersecurity and compliance services. Meet stringent security requirements while protecting citizen data and critical infrastructure.",
      features: ["FISMA Compliance", "Authority to Operate (ATO)", "NIST 800-171", "Security Clearance Support"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Technology",
      description: "Advanced security solutions for tech companies, startups, and software developers. Scale your security program as your business grows while maintaining innovation speed.",
      features: ["DevSecOps", "Cloud Security", "API Security", "Secure Development Lifecycle"]
    },
    {
      icon: <Factory className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Manufacturing",
      description: "Industrial cybersecurity and operational technology protection solutions. Secure critical manufacturing processes while maintaining productivity and safety standards.",
      features: ["OT Security", "Industrial IoT Protection", "Supply Chain Security", "Safety System Integration"]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Education",
      description: "Cybersecurity solutions for schools, universities, and educational institutions. Protect student data and research while enabling digital learning environments.",
      features: ["FERPA Compliance", "Student Data Protection", "Research Security", "Campus Network Security"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Retail",
      description: "PCI DSS compliance and customer data protection for retail businesses. Secure payment processing and customer information across all channels.",
      features: ["PCI DSS Compliance", "Point-of-Sale Security", "E-commerce Protection", "Customer Privacy"]
    },
    {
      icon: <Zap className="h-12 w-12 text-[hsl(var(--pakistan-green))]" />,
      name: "Energy",
      description: "Critical infrastructure protection for energy and utility companies. Ensure grid reliability and security while meeting regulatory requirements.",
      features: ["NERC CIP Compliance", "Grid Security", "SCADA Protection", "Incident Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Industries <span className="text-[hsl(var(--pakistan-green))]">We Serve</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized cybersecurity solutions across diverse industries, 
              tailored to meet unique regulatory and operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-20 h-20 bg-[hsl(var(--pakistan-green))]/10 rounded-lg flex items-center justify-center mr-6 group-hover:bg-[hsl(var(--pakistan-green))]/20 transition-colors duration-300">
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry.name}</h3>
                      <p className="text-slate-600 mb-6">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-[hsl(var(--pakistan-green))] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-slate-600">
              Our expertise spans multiple sectors with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--pakistan-green))] mb-2">500+</div>
              <div className="text-slate-600">Organizations Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--pakistan-green))] mb-2">8</div>
              <div className="text-slate-600">Industry Verticals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--pakistan-green))] mb-2">1000+</div>
              <div className="text-slate-600">Compliance Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--pakistan-green))] mb-2">99.9%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--pakistan-green))] text-white relative overflow-hidden">
        <div className="geometric-pattern absolute inset-0 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our industry experts help you navigate the complex cybersecurity landscape 
            and achieve compliance while protecting your critical assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-client">
              <Button size="lg" variant="secondary" className="bg-white text-[hsl(var(--pakistan-green))] hover:bg-slate-100">
                Get Industry-Specific Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--pakistan-green))]">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
