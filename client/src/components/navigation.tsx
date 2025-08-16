import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Star } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isKalimahOpen, setIsKalimahOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
            <span className="text-2xl sm:text-3xl font-bold text-[#01411c] glow-text">
              ITNOA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 pb-1 ${
                    isActive(item.href)
                      ? "text-[#01411c] border-b-2 border-[#01411c]"
                      : "text-slate-600 hover:text-[#01411c]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button and Islamic Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Islamic Button - Only on home page */}
            {location === "/" && (
              <div className="relative">
                <Button
                  onClick={() => setIsKalimahOpen(!isKalimahOpen)}
                  variant="outline"
                  className="border-[#01411c] text-[#01411c] hover:bg-[#01411c] hover:text-white px-4 py-2"
                >
                  <Star className="h-4 w-4 mr-2" />
                  ☪
                </Button>
                
                {/* Dropdown */}
                {isKalimahOpen && (
                  <div 
                    className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
                    style={{ animation: 'slideDown 0.3s ease-out' }}
                  >
                    <div className="text-center">
                      <img
                        src="/kalimah.png"
                        alt="Kalimah Tawheed"
                        className="w-full h-auto mb-4 rounded-lg"
                        style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))' }}
                      />
                      <p className="text-sm text-slate-700 leading-relaxed italic">
                        "There is none worthy of worship except Allah. He is alone and has no partner. To Him belongs the Kingdom and for Him is all praise. He gives life and causes death. In His hand is all good and He has power over everything."
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Backdrop to close dropdown */}
                {isKalimahOpen && (
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsKalimahOpen(false)}
                  />
                )}
              </div>
            )}
            
            <Link href="/become-client">
              <Button className="bg-[#01411c] hover:bg-[#012d13] text-white px-6 py-2">
                How Can We Help
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="p-3 hover:bg-[#01411c]/10 rounded-lg"
                >
                  <Menu className="h-8 w-8 text-[#01411c] icon-pulse" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 font-medium ${
                        isActive(item.href)
                          ? "text-[#01411c]"
                          : "text-slate-600 hover:text-[#01411c]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/become-client" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#01411c] hover:bg-[#012d13] text-white mt-4">
                      How Can We Help
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
