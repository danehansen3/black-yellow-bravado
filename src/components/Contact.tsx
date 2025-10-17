import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = "Hi! I'm interested in booking a dirt bike tour.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your adventure? Contact us on WhatsApp for instant 
            booking, pricing information, and any questions you may have.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border animate-zoom-in">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                MESSAGE US ON WHATSAPP
              </h3>
              <p className="font-body text-foreground/70 mb-8">
                Our team responds within minutes during business hours. 
                Get instant answers to all your questions about tours, pricing, 
                equipment, and availability.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-lg px-12 py-6 shadow-yellow-glow hover:shadow-yellow-glow/70 transition-all"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                CHAT ON WHATSAPP
              </a>
            </Button>

            <p className="font-body text-sm text-foreground/50 mt-6">
              Available: Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
