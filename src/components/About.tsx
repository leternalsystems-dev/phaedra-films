import { Button } from "@/components/ui/button";
import { Award, Users, Video } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Video, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Industry Awards" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Visual Stories Since 2015
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We are a team of passionate videographers dedicated to capturing moments that matter. 
              With years of experience and a keen eye for detail, we transform ordinary footage into 
              extraordinary visual narratives.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Our approach combines technical expertise with creative vision, ensuring every project 
              receives the attention and artistry it deserves. From intimate weddings to large-scale 
              corporate productions, we bring the same level of commitment and excellence.
            </p>
            <Button variant="hero" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
