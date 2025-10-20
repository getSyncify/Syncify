import { Card } from "@/components/ui/card";

const screenshots = [
  {
    title: "Dashboard View",
    description: "Clean and intuitive dashboard",
    image: "/screenshots/dashboard.png"
  },
  {
    title: "Tab Management",
    description: "Organize tabs efficiently",
    image: "/screenshots/tabs.png"
  },
  {
    title: "Settings Panel",
    description: "Customize to your needs",
    image: "/screenshots/settings.png"
  }
];

export const Screenshots = () => {
  return (
    <section id="screenshots" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the beautiful and intuitive interface
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center">
                {/* Replace these divs with actual screenshots */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-primary opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    Replace with actual screenshot:<br/>
                    <code className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">
                      {screenshot.image}
                    </code>
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{screenshot.title}</h3>
                <p className="text-muted-foreground text-sm">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          💡 <strong>Easy to customize:</strong> Simply replace the image paths in <code className="bg-muted px-2 py-1 rounded">src/components/Screenshots.tsx</code> with your actual screenshot URLs or add them to the <code className="bg-muted px-2 py-1 rounded">public/screenshots/</code> folder
        </p>
      </div>
    </section>
  );
};
