import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-8">
            <Chrome className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Chrome Extension</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Syncify Your Browsing Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A powerful Chrome extension that seamlessly synchronizes your browsing data, 
            boosts productivity, and enhances your workflow with intelligent features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Add to Chrome - Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>4.9★ Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
