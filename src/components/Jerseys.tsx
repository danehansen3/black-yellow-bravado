import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import jersey1 from "@/assets/jersey_1.jpg";
import jersey2 from "@/assets/jersey_2.jpg";
import jersey3 from "@/assets/jersey_3.jpg";
import jersey4 from "@/assets/jersey_4.jpg";
import jersey5 from "@/assets/jersey_5.jpg";
import jersey6 from "@/assets/jersey_6.jpg";

const jerseys = [
  {
    name: "Thunder Strike Jersey",
    image: jersey1,
    sizes: "S, M, L, XL, XXL",
    description: "Bold black and yellow design",
  },
  {
    name: "Lightning Bolt Jersey",
    image: jersey2,
    sizes: "S, M, L, XL, XXL",
    description: "Bold blue and yellow design",
  },
  {
    name: "Desert Storm Jersey",
    image: jersey3,
    sizes: "S, M, L, XL, XXL",
    description: "Red and black design",
  },
  {
    name: "Full Throttle Jersey",
    image: jersey4,
    sizes: "S, M, L, XL, XXL",
    description: "Checkered design",
  },
    {
    name: "Dust Hustler Jersey",
    image: jersey5,
    sizes: "S, M, L, XL, XXL",
    description: "White and red design",
  },
    {
    name: "Overdrive Jersey",
    image: jersey6,
    sizes: "S, M, L, XL, XXL",
    description: "Brown and black design",
  },
];

export const Jerseys = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="jerseys" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            OFFICIAL <span className="text-primary">JERSEYS</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Ride in style with our exclusive racing jerseys. Premium quality, 
            bold designs, and built for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {jerseys.map((jersey, index) => (
            <Card 
              key={jersey.name}
              className="bg-card border-border overflow-hidden group animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary/30">
                <img
                  src={jersey.image}
                  alt={jersey.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {jersey.name}
                </h3>
                <p className="font-body text-foreground/70 mb-4">
                  {jersey.description}
                </p>
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="font-body text-sm text-foreground/60">
                    <span className="text-primary font-semibold">Available Sizes:</span> {jersey.sizes}
                  </p>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold"
                >
                  CONTACT NOW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
