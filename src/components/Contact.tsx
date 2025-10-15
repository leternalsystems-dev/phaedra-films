import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5">
            <span className="text-primary text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us to discuss your project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@cinemavision.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Studio</h3>
                  <p className="text-muted-foreground">123 Creative Ave, Los Angeles, CA 90012</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="bg-background border-border"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
