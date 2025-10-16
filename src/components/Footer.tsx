import { Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Phaedra Films</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2025 Phaedra Films. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              YouTube
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Vimeo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
