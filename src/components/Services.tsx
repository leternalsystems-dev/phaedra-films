import { Card } from "@/components/ui/card";
import { Heart, Briefcase, Music, Film, Camera, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Films",
      description: "Capture your special day with cinematic storytelling that preserves every precious moment"
    },
    {
      icon: Briefcase,
      title: "Corporate Videos",
      description: "Professional brand stories and promotional content that elevate your business"
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative visual narratives that bring your music to life with style and energy"
    },
    {
      icon: Film,
      title: "Documentary",
      description: "Compelling real-world stories told with authenticity and artistic vision"
    },
    {
      icon: Camera,
      title: "Commercial Ads",
      description: "High-impact advertising content that captures attention and drives results"
    },
    {
      icon: Users,
      title: "Event Coverage",
      description: "Complete event documentation from conferences to concerts with multi-camera setups"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5">
            <span className="text-primary text-sm font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional videography services tailored to capture your vision and tell your story
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
