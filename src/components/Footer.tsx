import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="AiDash" className="w-32" />

          <div className="text-center">
            <h3 className="font-semibold mb-2 text-foreground">Contact</h3>
            <a
              href="mailto:contact@getaidash.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@getaidash.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © 2025 AiDash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
