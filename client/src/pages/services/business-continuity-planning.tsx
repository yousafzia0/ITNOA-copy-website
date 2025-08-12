import { RotateCcw, FileText, CheckCircle } from "lucide-react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function BusinessContinuityPlanning() {
  const whatWeDo = [
    "Business impact analysis (BIA) to identify critical business functions and dependencies",
    "Risk assessment and threat identification specific to your operational environment",
    "Recovery time objectives (RTO) and recovery point objectives (RPO) establishment",
    "Comprehensive business continuity plan development with detailed response procedures",
    "Emergency response and crisis management protocol design",
    "Communication plans for internal teams, customers, and external stakeholders",
    "Plan testing through tabletop exercises and full-scale simulations",
    "Training programs for business continuity team members and key personnel"
  ];

  const comprehensiveServices = [
    {
      icon: <FileText className="h-6 w-6 text-[#01411c] icon-bounce" />,
      title: "Business Impact Analysis Per ISO 22317",
      description: "Comprehensive business impact analysis following ISO 22317 standards to identify critical business functions, dependencies, and recovery requirements.",
      href: "/services/business-impact-analysis-iso-22301"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#01411c] icon-settings" />,
      title: "Business Continuity System Review (ISO22301)",
      description: "Complete business continuity management system review and compliance assessment against ISO 22301 international standard requirements.",
      href: "/services/business-continuity-system-review-iso-22301"
    }
  ];

  const whyItMatters = `
    Effective business continuity planning is essential for organizational resilience in the face of 
    unexpected disruptions, whether from natural disasters, cyberattacks, supply chain interruptions, 
    or other business risks. Organizations without proper business continuity plans face extended 
    downtime, revenue losses, and potential business failure during critical incidents. Studies show 
    that 40% of businesses never reopen after a major disaster, and 90% fail within a year if they're 
    not operational within 5 days. Our business continuity planning services ensure your organization 
    can maintain critical operations, minimize financial impact, and recover quickly from disruptions.
  `;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#01411c]/10 rounded-xl flex items-center justify-center mr-4">
                  <RotateCcw className="h-10 w-10 text-[#01411c]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  Business <span className="text-[#01411c]">Continuity</span> Planning
                </h1>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Comprehensive business continuity planning services to protect your organization from unexpected disruptions, 
                ensure operational resilience, and minimize business impact during critical incidents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/become-client">
                  <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8 py-4">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
                alt="Business Continuity Planning"
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                What We Do
              </h2>
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#01411c] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-600 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                Why It Matters
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {whyItMatters}
              </p>
              <Link href="/become-client">
                <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white py-4 text-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Business Continuity Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized ISO 22301 compliance services to ensure your business continuity 
              management system meets international standards and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comprehensiveServices.map((service, index) => (
              <Card key={index} className="group bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#01411c]/10 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="ghost" className="text-[#01411c] hover:text-[#012d13] p-0 h-auto text-sm font-semibold">
                      Explore More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
