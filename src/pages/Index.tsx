import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Google Analytics - Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
    
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: 'AiDash - Chat Management Dashboard',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    `;
    document.head.appendChild(script2);

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Homepage',
        page_location: window.location.href,
        page_path: '/'
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </main>
  );
};

export default Index;
