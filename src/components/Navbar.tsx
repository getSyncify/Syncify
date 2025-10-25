import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="AiDash" className="w-24" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-foreground transition-colors text-muted-foreground">Features</a>
          <a href="#waitlist" className="text-sm hover:text-foreground transition-colors text-muted-foreground">Waitlist</a>
        </div>

        <Button onClick={scrollToWaitlist} className="bg-foreground text-background hover:bg-foreground/90">
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};
