import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after scrolling down 100px
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <button
        onClick={scrollDown}
        className="group bg-white/90 backdrop-blur-sm border border-[#01411c]/20 rounded-full p-3 hover:bg-[#01411c] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Scroll down to see more content"
      >
        <ChevronDown className="h-6 w-6 text-[#01411c] group-hover:text-white animate-pulse" />
      </button>
      <div className="text-center mt-2">
        <span className="text-xs text-slate-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
          More below
        </span>
      </div>
    </div>
  );
}