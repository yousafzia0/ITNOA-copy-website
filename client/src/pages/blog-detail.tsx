import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogDetail() {
  const params = useParams();
  const blogId = params.id;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // NIST CSF blog content
  const blogContent = {
    id: "nist-csf-assessments",
    title: "NIST CSF Assessments: What Great Assessments Do — and What to Avoid",
    subtitle: "What great assessments do — and what to avoid.",
    author: "ITNOA Security Team",
    date: "2025-01-19",
    readTime: "12 min read",
    category: "NIST CSF",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    tags: ["NIST CSF", "HIPAA alignment", "Risk-informed targets"],
    excerpt: "Effective cybersecurity reviews go beyond interviews and document collection. A mature NIST CSF assessment triangulates evidence across people, process, and technology, validates control design and operating effectiveness, and translates findings into a prioritized, resourced roadmap.",
    sections: [
      {
        title: "From Interviews to Evidence",
        content: "Effective cybersecurity reviews go beyond interviews and document collection. A mature NIST CSF assessment triangulates evidence across people, process, and technology, validates control design and operating effectiveness, and translates findings into a prioritized, resourced roadmap.",
        pills: ["NIST CSF", "HIPAA alignment", "Risk-informed targets"]
      },
      {
        title: "Scope Anchors",
        items: [
          "Five CSF Functions (Identify, Protect, Detect, Respond, Recover)",
          "23 Categories with measurable outcomes", 
          "Tier-based maturity scoring (1–4)",
          "Control ownership & frequencies",
          "Automation vs. manual controls"
        ]
      },
      {
        title: "Do's",
        type: "do",
        items: [
          "Test design and effectiveness for each CSF category; don't stop at policy reviews.",
          "Corroborate evidence with logs, configuration states, tickets, and re-performance of key controls.",
          "Score maturity consistently using NIST tiers and set a realistic, time-bound target profile.",
          "Engage cross-functional owners—IT, Security, Privacy, Compliance, and ERM—for shared accountability.",
          "Prioritize automation for asset discovery, monitoring, and anomaly detection to reduce manual failure risk.",
          "Integrate remediation into GRC tooling with clear owners, due dates, and metrics."
        ]
      },
      {
        title: "Don'ts",
        type: "dont",
        items: [
          "Don't rely on interviews alone without evidence and sampling.",
          "Don't treat the CSF as a checklist—assess outcomes, not only artifacts.",
          "Don't centralize all control ownership in IT; involve business/data owners.",
          "Don't ignore detective controls—SIEM coverage, anomaly thresholds, and alert triage matter.",
          "Don't postpone tabletop exercises—response and recovery must be validated regularly."
        ]
      },
      {
        title: "What a High-Value Assessment Delivers",
        items: [
          "An executive-ready narrative that connects maturity, risk, and business impact.",
          "A sequenced remediation plan with funding signals (people, process, technology).",
          "KPIs/KRIs for continuous monitoring (coverage %, MTTR, control failure rates, tabletop cadence).",
          "Ownership shifts where appropriate (e.g., third-party controls owned by supply chain)."
        ]
      }
    ]
  };

  if (blogId !== "nist-csf-assessments") {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/resources">
              <Button className="bg-[#01411c] hover:bg-[#012d13] text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Resources
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/resources">
            <Button variant="ghost" className="mb-8 text-[#01411c] hover:text-[#012d13] hover:bg-[#01411c]/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="bg-[#01411c] text-white mb-4">
              {blogContent.category}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {blogContent.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              {blogContent.subtitle}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {blogContent.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blogContent.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blogContent.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {blogContent.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-[#01411c]/30 text-[#01411c]">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img 
              src={blogContent.image} 
              alt={blogContent.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              {blogContent.excerpt}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {blogContent.sections.map((section, index) => (
              <Card key={index} className="border-slate-200 overflow-hidden">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {section.content && (
                    <div className="mb-6">
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {section.content}
                      </p>
                      {section.pills && (
                        <div className="flex flex-wrap gap-2">
                          {section.pills.map((pill) => (
                            <Badge key={pill} className="bg-[#01411c]/10 text-[#01411c] border-[#01411c]/20">
                              {pill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {section.items && (
                    <ul className={`space-y-3 ${section.type === 'do' ? 'do-list' : section.type === 'dont' ? 'dont-list' : ''}`}>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={`flex items-start space-x-3 ${
                          section.type === 'do' ? 'text-green-800' : 
                          section.type === 'dont' ? 'text-red-800' : 'text-slate-700'
                        }`}>
                          {section.type === 'do' && (
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          )}
                          {section.type === 'dont' && (
                            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          )}
                          {!section.type && (
                            <div className="flex-shrink-0 w-2 h-2 bg-[#01411c] rounded-full mt-2"></div>
                          )}
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Help with NIST CSF Assessment?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our cybersecurity experts can help you implement a comprehensive NIST CSF assessment program 
              tailored to your organization's specific needs and risk profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#01411c] hover:bg-[#012d13] text-white px-8">
                  Get Expert Consultation
                </Button>
              </Link>
              <Link href="/services/grc-consulting">
                <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8">
                  Learn About Our GRC Services
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}