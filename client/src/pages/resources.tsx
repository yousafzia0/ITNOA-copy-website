import { Play, ExternalLink, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Resources() {
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
          </div>
        </div>
      </section>

      {/* Video Gallery */}
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
            {videos.map((video) => (
              <Card key={video.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                  <Badge className="absolute top-2 left-2 bg-[#01411c] text-white">
                    {video.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-[#01411c] transition-colors">
                    {video.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <Eye className="h-4 w-4 mr-1" />
                    {video.views} views
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 mb-4 line-clamp-3">
                    {video.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <a 
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4 ml-2" />
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

      <Footer />
    </div>
  );
}