import { useState, useEffect } from "react";
import { Play, ExternalLink, Clock, Eye, FileText, BookOpen, FolderOpen, User, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Resources() {
  const [activeSection, setActiveSection] = useState<'videos' | 'blogs' | 'case-studies' | 'templates'>('videos');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample blog data
  const blogs = [
    {
      id: "nist-csf-assessments",
      title: "NIST CSF Assessments: What Great Assessments Do — and What to Avoid",
      excerpt: "Effective cybersecurity reviews go beyond interviews and document collection. A mature NIST CSF assessment triangulates evidence across people, process, and technology, validates control design and operating effectiveness, and translates findings into a prioritized, resourced roadmap.",
      author: "ITNOA Security Team",
      date: "2025-01-19",
      readTime: "12 min read",
      category: "NIST CSF",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["NIST CSF", "HIPAA alignment", "Risk-informed targets"],
      content: {
        subtitle: "What great assessments do — and what to avoid.",
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
      }
    },
    {
      id: "2",
      title: "Zero Trust Architecture: A Complete Implementation Guide",
      excerpt: "Learn how to implement Zero Trust security model in your organization with practical steps and real-world examples.",
      author: "Dr. Ahmed Khan",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Security Architecture",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["Zero Trust", "Architecture", "Implementation"]
    },
    {
      id: "3",
      title: "AI in Cybersecurity: Opportunities and Risks",
      excerpt: "Exploring how artificial intelligence is transforming cybersecurity while introducing new challenges and vulnerabilities.",
      author: "Michael Chen",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Emerging Technologies",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["AI", "Machine Learning", "Threat Detection"]
    }
  ];

  // Sample case studies data
  const caseStudies = [
    {
      id: "1",
      title: "Fortune 500 Financial Institution: ISO 27001 Implementation",
      excerpt: "How we helped a major bank achieve ISO 27001 certification in 8 months while maintaining operational efficiency.",
      industry: "Financial Services",
      challenge: "Regulatory Compliance",
      solution: "ISO 27001 ISMS Implementation",
      result: "100% compliance achievement",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["ISO 27001", "Banking", "Compliance"]
    },
    {
      id: "2",
      title: "Healthcare Provider: HIPAA Security Assessment",
      excerpt: "Comprehensive security overhaul for a regional healthcare network protecting 500K+ patient records.",
      industry: "Healthcare",
      challenge: "HIPAA Compliance",
      solution: "Security Risk Assessment & Remediation",
      result: "Zero security incidents in 2 years",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["HIPAA", "Healthcare", "Risk Assessment"]
    },
    {
      id: "3",
      title: "E-commerce Platform: PCI DSS Compliance",
      excerpt: "Achieving and maintaining PCI DSS Level 1 compliance for a high-volume online retailer.",
      industry: "E-commerce",
      challenge: "Payment Security",
      solution: "PCI DSS Assessment & Implementation",
      result: "Level 1 PCI DSS compliance",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["PCI DSS", "E-commerce", "Payment Security"]
    }
  ];

  // Sample templates data
  const templates = [
    {
      id: "1",
      title: "Cybersecurity Policy Template Pack",
      description: "Complete set of cybersecurity policies aligned with ISO 27001 and NIST frameworks.",
      type: "Policy Documents",
      format: "Word/PDF",
      pages: "50+ pages",
      category: "Governance",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["Policies", "ISO 27001", "NIST"]
    },
    {
      id: "2",
      title: "Risk Assessment Worksheet",
      description: "Comprehensive risk assessment template with automated risk scoring and treatment planning.",
      type: "Excel Template",
      format: "Excel",
      pages: "Multiple sheets",
      category: "Risk Management",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["Risk Assessment", "Excel", "Automation"]
    },
    {
      id: "3",
      title: "Incident Response Playbook",
      description: "Step-by-step incident response procedures with customizable workflows and communication templates.",
      type: "Playbook",
      format: "Word/PDF",
      pages: "30+ pages",
      category: "Incident Response",
      downloadUrl: "#",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      tags: ["Incident Response", "Playbook", "Procedures"]
    }
  ];

  const handleSectionChange = (section: 'videos' | 'blogs' | 'case-studies' | 'templates') => {
    if (section === activeSection || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Enhanced smooth scroll to top with Lenis
    const globalLenis = (window as any).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(0, { 
        duration: 1.2,
        easing: (t: number) => {
          // Smooth cubic-bezier easing for buttery transitions
          return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
      });
    }
    
    // Change section after enhanced transition
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 1200);
  };

  const videos = [
    {
      id: "1",
      title: "Cybersecurity Best Practices for Small Businesses",
      description: "Learn essential cybersecurity measures every small business should implement to protect against common threats and vulnerabilities.",
      thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      duration: "12:45",
      views: "15.2K",
      category: "Security Fundamentals",
      youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual URLs
      topics: ["Small Business", "Security Basics", "Risk Management"]
    },
    {
      id: "2", 
      title: "ISO 27001 Implementation Guide",
      description: "Complete walkthrough of implementing ISO 27001 information security management system in your organization.",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      duration: "24:18",
      views: "8.7K",
      category: "Compliance",
      youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      topics: ["ISO 27001", "ISMS", "Certification"]
    },
    {
      id: "3",
      title: "Penetration Testing Fundamentals",
      description: "Introduction to penetration testing methodologies, tools, and best practices for identifying security vulnerabilities.",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      duration: "18:32",
      views: "22.1K",
      category: "Testing",
      youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      topics: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking"]
    },
    {
      id: "4",
      title: "Cloud Security Architecture",
      description: "Designing secure cloud infrastructure and implementing security controls in AWS, Azure, and GCP environments.",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      duration: "16:07",
      views: "11.5K",
      category: "Cloud Security",
      youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      topics: ["Cloud Security", "AWS", "Azure", "Architecture"]
    },
    {
      id: "5",
      title: "HIPAA Compliance for Healthcare Organizations",
      description: "Understanding HIPAA requirements and implementing proper security controls to protect patient health information.",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      duration: "20:15",
      views: "9.8K",
      category: "Healthcare Compliance",
      youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      topics: ["HIPAA", "Healthcare", "Patient Data", "Compliance"]
    },
    {
      id: "6",
      title: "SOX IT Controls and Audit Preparation",
      description: "Preparing for SOX audits and implementing effective IT general controls for financial reporting systems.",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
      duration: "28:42",
      views: "6.3K",
      category: "Financial Compliance",
      youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      topics: ["SOX", "Financial Controls", "Audit", "ITGC"]
    }
  ];

  const categories = Array.from(new Set(videos.map(v => v.category)));

  // Render different content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'blogs':
        return renderBlogs();
      case 'case-studies':
        return renderCaseStudies();
      case 'templates':
        return renderTemplates();
      default:
        return renderVideos();
    }
  };

  const renderBlogs = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={blog.id} className="resource-card-enter group overflow-hidden hover:shadow-xl transition-all duration-500 border-slate-200 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both'
                  }}>
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-[#01411c] text-white shadow-lg">
                  {blog.category}
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-[#01411c] transition-colors leading-tight">
                  {blog.title}
                </CardTitle>
                <div className="flex items-center text-sm text-slate-500 space-x-4 mt-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-[#01411c]/30 text-[#01411c] hover:bg-[#01411c]/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </span>
                  <Button 
                    variant="ghost" 
                    className="text-[#01411c] hover:text-white hover:bg-[#01411c] p-2 h-auto transition-all duration-300"
                    onClick={() => {
                      if (blog.id === 'nist-csf-assessments') {
                        // Show detailed blog content - we'll implement this next
                        console.log('Opening NIST CSF blog...');
                      }
                    }}
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderCaseStudies = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="resource-card-enter group overflow-hidden hover:shadow-xl transition-all duration-500 border-slate-200 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both'
                  }}>
              <div className="relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-[#01411c] text-white shadow-lg">
                  {study.industry}
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-[#01411c] transition-colors leading-tight">
                  {study.title}
                </CardTitle>
                <div className="grid grid-cols-2 gap-3 text-sm mt-3">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <span className="font-medium text-slate-700 block mb-1">Challenge:</span>
                    <p className="text-slate-600 text-xs">{study.challenge}</p>
                  </div>
                  <div className="bg-[#01411c]/5 p-3 rounded-lg">
                    <span className="font-medium text-[#01411c] block mb-1">Result:</span>
                    <p className="text-slate-600 text-xs">{study.result}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {study.excerpt}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-[#01411c]/30 text-[#01411c] hover:bg-[#01411c]/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white transition-all duration-300 group">
                  View Case Study
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTemplates = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <Card key={template.id} className="resource-card-enter group overflow-hidden hover:shadow-xl transition-all duration-500 border-slate-200 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both'
                  }}>
              <div className="relative overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-[#01411c] text-white shadow-lg">
                  {template.category}
                </Badge>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur">
                  {template.format}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-[#01411c] transition-colors leading-tight">
                  {template.title}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-slate-500 mt-2 bg-slate-50 p-2 rounded-lg">
                  <span className="font-medium">{template.type}</span>
                  <span className="text-[#01411c] font-medium">{template.pages}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {template.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-[#01411c]/30 text-[#01411c] hover:bg-[#01411c]/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white transition-all duration-300 group">
                  <FileText className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderVideos = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <Badge variant="secondary" className="bg-[#01411c] text-white hover:bg-[#012d13] px-4 py-2">
            All Videos
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-4 py-2 cursor-pointer transition-colors">
              {category}
            </Badge>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card key={video.id} className="resource-card-enter group overflow-hidden hover:shadow-xl transition-all duration-500 border-slate-200 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both'
                  }}>
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#01411c] rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center backdrop-blur">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>
                <Badge className="absolute top-3 left-3 bg-[#01411c] text-white shadow-lg">
                  {video.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-[#01411c] transition-colors leading-tight">
                  {video.title}
                </CardTitle>
                <div className="flex items-center text-sm text-slate-500 mt-2">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{video.views} views</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {video.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs border-[#01411c]/30 text-[#01411c] hover:bg-[#01411c]/10">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <a 
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white transition-all duration-300 group">
                    <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Watch on YouTube
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 text-center bg-slate-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for regular cybersecurity insights, tutorials, 
            and industry updates from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://youtube.com/@itnoa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                <Play className="h-5 w-5 mr-2" />
                Subscribe on YouTube
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-8">
              Request a Topic
            </Button>
          </div>
        </div>

      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Cybersecurity <span className="text-[#01411c]">Resources</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert insights, tutorials, and best practices from our cybersecurity professionals. 
              Stay informed with the latest security trends and implementation guides.
            </p>
            
            {/* Resource Type Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <Button
                onClick={() => handleSectionChange('videos')}
                variant={activeSection === 'videos' ? 'default' : 'outline'}
                className={`resource-nav-button px-8 py-3 text-lg ${
                  activeSection === 'videos' 
                    ? 'bg-[#01411c] text-white hover:bg-[#012d13] shadow-lg' 
                    : 'border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white'
                }`}
                disabled={isTransitioning}
              >
                <Play className="h-5 w-5 mr-2" />
                Videos
              </Button>
              <Button
                onClick={() => handleSectionChange('blogs')}
                variant={activeSection === 'blogs' ? 'default' : 'outline'}
                className={`resource-nav-button px-8 py-3 text-lg ${
                  activeSection === 'blogs' 
                    ? 'bg-[#01411c] text-white hover:bg-[#012d13] shadow-lg' 
                    : 'border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white'
                }`}
                disabled={isTransitioning}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Blogs
              </Button>
              <Button
                onClick={() => handleSectionChange('case-studies')}
                variant={activeSection === 'case-studies' ? 'default' : 'outline'}
                className={`resource-nav-button px-8 py-3 text-lg ${
                  activeSection === 'case-studies' 
                    ? 'bg-[#01411c] text-white hover:bg-[#012d13] shadow-lg' 
                    : 'border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white'
                }`}
                disabled={isTransitioning}
              >
                <FolderOpen className="h-5 w-5 mr-2" />
                Case Studies
              </Button>
              <Button
                onClick={() => handleSectionChange('templates')}
                variant={activeSection === 'templates' ? 'default' : 'outline'}
                className={`resource-nav-button px-8 py-3 text-lg ${
                  activeSection === 'templates' 
                    ? 'bg-[#01411c] text-white hover:bg-[#012d13] shadow-lg' 
                    : 'border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white'
                }`}
                disabled={isTransitioning}
              >
                <FileText className="h-5 w-5 mr-2" />
                Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content with Enhanced Dust Transition */}
      <div className={`relative ${isTransitioning ? 'dust-transition-out' : 'dust-transition-in'}`}>
        {renderContent()}
      </div>

      <Footer />
    </div>
  );
}