import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
                <CardDescription>support@syncify.app</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
                <CardDescription>Available 9am-5pm EST</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
                  <Send className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Social</CardTitle>
                <CardDescription>@syncify on Twitter</CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border animate-scale-in">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
