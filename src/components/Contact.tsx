import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const whatsappNumber = "8562059480427";
  const whatsappMessage = "Hi! I'm interested in booking a dirt bike tour in Vang Vieng.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramHandle = "@dustanddirtvangvieng";
  const instagramUrl = "https://www.instagram.com/dustanddirtvangvieng";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to experience the raw beauty of Laos? Contact us on WhatsApp or follow us 
            on Instagram for the latest adventure updates from Vang Vieng.
          </p>
        </div>

        {/* WhatsApp Card */}
        <Card className="bg-card border-border animate-zoom-in max-w-2xl mx-auto mb-12">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                WHATSAPP
              </h3>
              <p className="font-body text-foreground/70 mb-6">
                Get instant answers about our Vang Vieng tours, free dirt bike lessons, 
                equipment, and availability. Perfect for beginners and advanced riders.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-lg px-8 py-6 shadow-yellow-glow hover:shadow-yellow-glow/70 transition-all"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                CHAT NOW
              </a>
            </Button>

            <p className="font-body text-xs text-foreground/50 mt-4">
              Available: Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM
            </p>
          </CardContent>
        </Card>

        {/* Instagram Feed & Follow */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border animate-zoom-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Instagram className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  INSTAGRAM
                </h3>
                <p className="font-body text-foreground/70 mb-6">
                  Follow us for daily adventure shots from Vang Vieng, tour highlights, and 
                  behind-the-scenes action exploring the raw beauty of Laos.
                </p>
              </div>

              {/* Instagram Feed Embed - Replace this iframe with actual Instagram embed code */}
              <div className="mb-6 bg-secondary/30 rounded-lg p-8 text-center">
                <Instagram className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <p className="font-body text-sm text-foreground/50">
                  Instagram feed will display here once connected
                </p>
                <p className="font-body text-xs text-foreground/40 mt-2">
                  Visit Instagram's embedding tool to generate your feed embed code
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-lg px-8 py-6 shadow-yellow-glow hover:shadow-yellow-glow/70 transition-all"
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  FOLLOW US
                </a>
              </Button>

              <p className="font-body text-sm text-primary mt-4 text-center">
                {instagramHandle}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
