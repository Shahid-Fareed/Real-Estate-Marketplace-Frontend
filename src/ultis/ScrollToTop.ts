import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Add a type declaration for the window object
declare global {
  interface Window {
    scrollTo(options?: ScrollToOptions): void;
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scroll(0, 0);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (typeof window.scrollTo === "function") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    scrollToTop();
  }, [pathname]);

  return null;
}
