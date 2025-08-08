import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, RotateCcw, University, Heart, Landmark, Cpu, Factory, GraduationCap, ShoppingCart, Zap, Star } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import { AnimatedPersonLaptop, AnimatedAnalyticsGraph } from "@/components/animated-graphics";

export default function Home() {
  const serviceHighlights = [
    {
      icon: <Search className="h-8 w-8 text-[#01411c] icon-search" />,
      title: "IT Audit",
      description: "Comprehensive IT audits to identify vulnerabilities, assess compliance, and strengthen your security posture with actionable recommendations.",
      href: "/services/it-audit"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#01411c] icon-shield" />,
      title: "Information Security (ISC)",
      description: "Governance, Risk, and Compliance consulting to establish robust security frameworks and meet regulatory requirements effectively.",
      href: "/services/grc-consulting"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-[#01411c] icon-rotate" />,
      title: "Business Continuity",
      description: "Develop comprehensive business continuity and cyber resilience plans to ensure operational stability during disruptions.",
      href: "/services/cyber-resilience"
    }
  ];



  const industries = [
    { icon: <University className="h-8 w-8 text-[#01411c] icon-bounce" />, name: "Financial Services", desc: "Comprehensive security solutions for banks, credit unions, and financial institutions." },
    { icon: <Heart className="h-8 w-8 text-[#01411c] icon-pulse" />, name: "Healthcare", desc: "HIPAA compliance and security solutions for healthcare providers and medical facilities." },
    { icon: <Landmark className="h-8 w-8 text-[#01411c] icon-glow" />, name: "Government", desc: "Federal, state, and local government cybersecurity and compliance services." },
    { icon: <Cpu className="h-8 w-8 text-[#01411c] icon-settings" />, name: "Technology", desc: "Advanced security solutions for tech companies, startups, and software developers." },
    { icon: <Factory className="h-8 w-8 text-[#01411c] icon-shake" />, name: "Manufacturing", desc: "Industrial cybersecurity and operational technology protection solutions." },
    { icon: <GraduationCap className="h-8 w-8 text-[#01411c] icon-float" />, name: "Education", desc: "Cybersecurity solutions for schools, universities, and educational institutions." },
    { icon: <ShoppingCart className="h-8 w-8 text-[#01411c] icon-scale" />, name: "Retail", desc: "PCI DSS compliance and customer data protection for retail businesses." },
    { icon: <Zap className="h-8 w-8 text-[#01411c] icon-pulse" />, name: "Energy", desc: "Critical infrastructure protection for energy and utility companies." }
  ];

  const testimonials = [
    {
      name: "Mary Grey",
      role: "IT Director",
      content: "ITNOA's Cyber Essentials services were exactly what we needed to improve our cybersecurity measures. The team walked us through the entire process and ensured full compliance.",
      initials: "MG"
    },
    {
      name: "Kusick",
      role: "CISO",
      content: "The team helped us navigate data protection complexities. Their comprehensive consulting approach made all the difference in maintaining secure operations.",
      initials: "SF"
    },
    {
      name: "Oliver Simson",
      role: "Security Manager",
      content: "We've worked with ITNOA for over a year. Their penetration testing expertise has significantly improved our security protocols. Highly skilled and trustworthy.",
      initials: "OS"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Securing Your 
                <span className="text-[#01411c]"> Digital Future</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Expert solutions in cybersecurity, data protection, and risk management. 
                Protect your business with customized consultancy services that ensure compliance and resilience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                    Discover Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8 py-4">
                    Talk To A Cybersecurity Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <AnimatedPersonLaptop />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Expert IT Security Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity services tailored to protect your business 
              from evolving threats and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <Card key={index} className="group border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#01411c]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#01411c]/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="ghost" className="text-[#01411c] hover:text-[#012d13] p-0 h-auto font-semibold">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized cybersecurity solutions across diverse industries, 
              tailored to meet unique regulatory and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group text-center p-6 rounded-xl hover:bg-slate-50 transition-all duration-300">
                <div className="w-16 h-16 bg-[#01411c]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#01411c]/20 transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-slate-600 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Consultancy That Empowers You
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                At ITNOA Consulting Services, we are committed to delivering innovative, 
                high-quality, and cost-effective solutions in information security, 
                cybersecurity, data protection, business continuity, and risk management.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our team of experienced professionals is dedicated to helping businesses 
                of all sizes strengthen their digital infrastructure, safeguard sensitive data, 
                and ensure long-term resilience in an increasingly complex digital landscape.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01411c] mb-2">25+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01411c] mb-2">500+</div>
                  <div className="text-slate-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01411c] mb-2">1000+</div>
                  <div className="text-slate-600">Assessments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01411c] mb-2">99%</div>
                  <div className="text-slate-600">Satisfaction</div>
                </div>
              </div>

              <Link href="/become-client">
                <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8 py-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div>
              <AnimatedAnalyticsGraph />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Trusted by organizations worldwide for exceptional cybersecurity consulting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#01411c] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
