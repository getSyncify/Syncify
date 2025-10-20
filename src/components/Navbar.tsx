import { Button } from "@/components/ui/button";
import { Chrome, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/10 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png" // Root-relative path for public/
              alt="Syncify Logo"
              className="h-20 w-auto" // Tailwind: adjust height, keep aspect ratio
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#screenshots" className="text-sm hover:text-primary transition-colors">Screenshots</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#blog" className="text-sm hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all">
              <Chrome className="w-4 h-4 mr-2" />
              Add to Chrome
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-sm hover:text-primary transition-colors">Features</a>
            <a href="#screenshots" className="block text-sm hover:text-primary transition-colors">Screenshots</a>
            <a href="#pricing" className="block text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#blog" className="block text-sm hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="block text-sm hover:text-primary transition-colors">Contact</a>
            <Button className="w-full bg-gradient-primary">
              <Chrome className="w-4 h-4 mr-2" />
              Add to Chrome
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
