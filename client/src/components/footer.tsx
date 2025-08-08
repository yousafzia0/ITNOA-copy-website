import { Link } from "wouter";
import { Shield, Phone, Mail, Clock, Linkedin, Github, MessageCircle, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#01411c] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-white glow-text-footer">
                ITNOA
              </span>
            </div>
            <p className="text-green-100 mb-6 max-w-md">
              ITNOA Consulting Services delivers innovative, high-quality IT solutions customized to the unique needs of businesses across industries. Built on trust, excellence, and efficiency, we specialize in information and cyber security to help organizations stay secure and competitive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center hover:bg-[#21965f] transition-colors duration-300">
                <Linkedin className="h-5 w-5 icon-bounce" />
              </a>
              <a href="#" className="group w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center hover:bg-[#21965f] transition-colors duration-300">
                <Github className="h-5 w-5 icon-flip" />
              </a>
              <a href="#" className="group w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center hover:bg-[#21965f] transition-colors duration-300">
                <Youtube className="h-5 w-5 icon-pulse" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-200 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-green-200 hover:text-white transition-colors duration-300">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="group flex items-center text-green-100 p-2 rounded hover:bg-green-800/30 transition-colors duration-300">
                <Phone className="h-4 w-4 mr-3 text-[#21965f] icon-shake" />
                <span>248 795 0202</span>
              </li>
              <li className="group flex items-center text-green-100 p-2 rounded hover:bg-green-800/30 transition-colors duration-300">
                <Mail className="h-4 w-4 mr-3 text-[#21965f] icon-bounce" />
                <span>info@itnoa.com</span>
              </li>
              <li className="group flex items-start text-green-100 p-2 rounded hover:bg-green-800/30 transition-colors duration-300">
                <Clock className="h-4 w-4 mr-3 text-[#21965f] mt-1 icon-pulse" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 ITNOA Consulting Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
