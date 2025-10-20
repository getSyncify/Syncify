import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Introducing Syncify 2.0",
    description: "Major updates including AI-powered features, improved performance, and a redesigned interface.",
    date: "March 15, 2025",
    category: "Product Updates"
  },
  {
    title: "5 Ways to Boost Browser Productivity",
    description: "Learn how to maximize your efficiency with smart tab management and keyboard shortcuts.",
    date: "March 10, 2025",
    category: "Tips & Tricks"
  },
  {
    title: "Privacy & Security Best Practices",
    description: "Understanding how Syncify protects your data with end-to-end encryption and zero-knowledge architecture.",
    date: "March 5, 2025",
    category: "Security"
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, features, and tips
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                  {post.category}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
