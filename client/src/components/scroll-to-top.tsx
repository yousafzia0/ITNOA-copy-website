import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location]);

  return null;
}