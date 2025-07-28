import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface ServiceDetailProps {
  title: string;
  description: string;
  whatWeDo: string[];
  whyItMatters: string;
  icon: React.ReactNode;
  heroImage?: string;
}

export default function ServiceDetailTemplate({
  title,
  description,
  whatWeDo,
  whyItMatters,
  icon,
  heroImage
}: ServiceDetailProps) {
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
                <div className="w-16 h-16 bg-[#01411c]/10 rounded-lg flex items-center justify-center mr-4">
                  {icon}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">{title}</h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">{description}</p>
            </div>
            {heroImage && (
              <div className="animate-slide-in-right">
                <img 
                  src={heroImage} 
                  alt={`${title} service`}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Do</h2>
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#01411c] mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-[#01411c]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why It Matters</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{whyItMatters}</p>
                <Link href="/become-client">
                  <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white py-4 text-lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01411c] text-white relative overflow-hidden">
        <div className="geometric-pattern absolute inset-0 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and take the first step 
            towards comprehensive cybersecurity protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-client">
              <Button size="lg" variant="secondary" className="bg-white text-[#01411c] hover:bg-slate-100">
                Become a Client
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#01411c]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
