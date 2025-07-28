import { Link } from "wouter";
import { Shield, Phone, Mail, Clock, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="geometric-pattern absolute inset-0 opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[hsl(var(--pakistan-green))] rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ITNOA</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Leading cybersecurity consultancy delivering innovative solutions 
              in information security, data protection, and risk management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--pakistan-green))] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--pakistan-green))] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(var(--pakistan-green))] transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[hsl(var(--pakistan-accent))] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-[hsl(var(--pakistan-accent))] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-300 hover:text-[hsl(var(--pakistan-accent))] transition-colors duration-300">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[hsl(var(--pakistan-accent))] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3 text-[hsl(var(--pakistan-green))]" />
                <span>+1-800-456-478-23</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3 text-[hsl(var(--pakistan-green))]" />
                <span>info@itnoa.com</span>
              </li>
              <li className="flex items-start text-slate-300">
                <Clock className="h-4 w-4 mr-3 text-[hsl(var(--pakistan-green))] mt-1" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 ITNOA Consulting Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-[hsl(var(--pakistan-accent))] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-[hsl(var(--pakistan-accent))] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-[hsl(var(--pakistan-accent))] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
