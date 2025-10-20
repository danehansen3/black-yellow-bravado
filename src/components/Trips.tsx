import { ArrowRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import trip1 from "@/assets/trip1.jpg";
import trip2 from "@/assets/trip2.jpg";
import trip3 from "@/assets/trip3.jpg";
import trip4 from "@/assets/trip4.jpg";
import trip5 from "@/assets/trip5.jpg";

const trips = [
  {
    title: "Endurance Half Day",
    image: trip1,
    description:
      "Dive deep into Laos' raw landscapes with this full half-day experience. Perfect for riders wanting extended exploration of Vang Vieng's hidden trails and stunning scenery.",
    highlights: [
      "6-8 hours of guided riding",
      "Free dirt bike lessons included",
      "All safety gear provided",
      "Explore remote trails and villages",
    ],
    details: {
      duration: "6-8 Hours",
      price: "$250",
      group: "2-5 riders",
    },
  },
  {
    title: "Quickie",
    image: trip2,
    description:
      "Short on time but big on adventure? This express half-day tour packs maximum thrills into a compact timeframe, showcasing Vang Vieng's best trails.",
    highlights: [
      "4-6 hours of guided riding",
      "Free dirt bike lessons included",
      "All safety gear provided",
      "Perfect for beginners and advanced riders",
    ],
    details: {
      duration: "4-6 Hours",
      price: "$155",
      group: "2-5 riders",
    },
  },
  {
    title: "Ride and Camp Adventure",
    image: trip3,
    description:
      "Experience the magic of overnight camping in the Lao wilderness. This 26-hour journey combines thrilling rides with authentic cultural immersion and starlit camping.",
    highlights: [
      "26 hours of exploration",
      "Free dirt bike lessons included",
      "Overnight camping included",
      "All meals and gear provided",
    ],
    details: {
      duration: "1 Night / 2 Days",
      price: "$185",
      group: "2-5 riders",
    },
  },
  {
    title: "Can't Get Enough",
    image: trip4,
    description:
      "Our ultimate multi-day adventure through Laos' most spectacular terrain. Ride through villages, jungles, and mountains while experiencing authentic Lao hospitality.",
    highlights: [
      "52 hours of epic riding",
      "Free dirt bike lessons included",
      "2 nights camping under the stars",
      "All meals, gear, and guides included",
    ],
    details: {
      duration: "2 Nights / 3 Days",
      price: "$330",
      group: "2-5 riders",
    },
  },
  {
    title: "Extended Action Pack",
    image: trip5,
    description:
      "A premium overnight experience with extended riding time. This 28-hour adventure offers the perfect balance of riding intensity and cultural exploration.",
    highlights: [
      "28 hours of guided adventure",
      "Free dirt bike lessons included",
      "Overnight camping included",
      "Premium trails and local experiences",
    ],
    details: {
      duration: "1 Night / 2 Days",
      price: "$225",
      group: "2-5 riders",
    },
  },
];

export const Trips = () => {
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
    <section id="trips" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            EPIC <span className="text-primary">ADVENTURES</span>
          </h2>
          <p className="font-body text-sm text-foreground/90 mb-4 leading-relaxed">
            Experience the raw beauty of Laos on our guided tours. Free dirt
            bike lessons included with every adventure. Perfect for beginners
            and advanced riders exploring Vang Vieng's stunning terrain.
          </p>
        </div>

        <div className="space-y-12">
          {trips.map((trip, index) => (
            <div
              key={trip.title}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Desktop Layout */}
              <div className="hidden md:block">
                <Card className="bg-card border-border overflow-hidden h-[620px]">
                  <div className="grid md:grid-cols-2 gap-0 h-full items-stretch">
                    {/* Image */}
                    <div className="relative overflow-hidden flex h-full">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="object-cover object-center w-full h-full hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                          {trip.title}
                        </h3>

                        <p className="font-body text-sm text-foreground/90 mb-4 leading-relaxed">
                          {trip.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="font-display text-primary font-semibold mb-3">
                            WHAT'S INCLUDED:
                          </h4>
                          <ul className="space-y-2">
                            {trip.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="font-body text-foreground/70 flex items-start"
                              >
                                <span className="text-primary mr-2">▸</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button
                        onClick={scrollToContact}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold mt-6"
                      >
                        CONTACT FOR PRICING
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Mobile Layout - Image with Text Overlay */}
              <div className="md:hidden">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="relative min-h-[500px] overflow-hidden bg-secondary/30">
                    {/* Image */}
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Gradient Overlay - Dark in middle for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80" />
                    
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center p-6">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        {trip.title}
                      </h3>
                      
                      <p className="font-body text-sm text-foreground/90 mb-4 leading-relaxed">
                        {trip.description}
                      </p>

                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-1 text-foreground/90 text-sm">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{trip.details.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-foreground/90 text-sm">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{trip.details.group}</span>
                          </div>
                        </div>

                        <Button 
                          onClick={scrollToContact}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-sm py-2"
                        >
                          BOOK NOW
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};