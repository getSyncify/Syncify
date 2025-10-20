import { Cloud, Lock, Zap, Layout, Globe, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Cloud,
    title: "Seamless Sync",
    description: "Automatically sync your bookmarks, tabs, and settings across all your devices in real-time."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "End-to-end encryption ensures your data stays private and secure. We never track or sell your information."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with minimal resource usage. Experience blazing fast sync without slowing down your browser."
  },
  {
    icon: Layout,
    title: "Smart Organization",
    description: "Intelligent tab grouping and bookmark management powered by AI to keep your browsing organized."
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "Works seamlessly across Windows, Mac, Linux, and mobile devices for a unified experience."
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Smart suggestions and automation features that learn from your browsing habits to boost productivity."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to enhance your browsing experience and boost productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
