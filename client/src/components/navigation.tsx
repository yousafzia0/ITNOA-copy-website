import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
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
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[hsl(var(--pakistan-green))] rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[hsl(var(--pakistan-green))]">ITNOA</span>
            </div>
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
                      ? "text-[hsl(var(--pakistan-green))] border-b-2 border-[hsl(var(--pakistan-green))]"
                      : "text-slate-600 hover:text-[hsl(var(--pakistan-green))]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/become-client">
              <Button className="bg-[hsl(var(--pakistan-green))] hover:bg-[hsl(var(--pakistan-light))] text-white px-6 py-2">
                Become a Client
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
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
                          ? "text-[hsl(var(--pakistan-green))]"
                          : "text-slate-600 hover:text-[hsl(var(--pakistan-green))]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/become-client" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[hsl(var(--pakistan-green))] hover:bg-[hsl(var(--pakistan-light))] text-white mt-4">
                      Become a Client
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
