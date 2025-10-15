import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CinemaVision</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors">
            Portfolio
          </a>
          <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        
        <Button>Get in Touch</Button>
      </div>
    </nav>
  );
};

export default Navigation;
