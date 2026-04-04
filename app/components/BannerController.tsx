"use client";

import { usePathname } from "next/navigation";
import { HeroSection } from "./home/HeroSection";
import DefaultBanner from "./DefaultBanner";

export default function BannerController() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const getTitle = (path: string) => {
    switch (path) {
      case "/about":
        return "About Us";
      case "/why-choose-us":
        return "Why Choose Us";
      case "/blog":
        return "Blog";
      case "/Facility":
        return "Our Facility";
      case "/virtual-tour-stats":
        return "Virtual Stats";
        case "/contact":
          return "Contact us";  
      default:
        return "Page";
    }
  };

  return (
    <>
      {isHome ? (
        <HeroSection />
      ) : (
        <DefaultBanner title={getTitle(pathname)} />
      )}
    </>
  );
}