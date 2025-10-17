import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import desertTrip from "@/assets/trip-desert.jpg";
import mountainTrip from "@/assets/trip-mountain.jpg";

const trips = [
  {
    title: "Endurance Half Day",
    image: desertTrip,
    description: "Dive deep into Laos' raw landscapes with this full half-day experience. Perfect for riders wanting extended exploration of Vang Vieng's hidden trails and stunning scenery.",
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
    image: mountainTrip,
    description: "Short on time but big on adventure? This express half-day tour packs maximum thrills into a compact timeframe, showcasing Vang Vieng's best trails.",
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
    title: "1 Night / 2 Day Adventure",
    image: desertTrip,
    description: "Experience the magic of overnight camping in the Lao wilderness. This 26-hour journey combines thrilling rides with authentic cultural immersion and starlit camping.",
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
    title: "2 Night / 3 Day Expedition",
    image: mountainTrip,
    description: "Our ultimate multi-day adventure through Laos' most spectacular terrain. Ride through villages, jungles, and mountains while experiencing authentic Lao hospitality.",
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
    image: desertTrip,
    description: "A premium overnight experience with extended riding time. This 28-hour adventure offers the perfect balance of riding intensity and cultural exploration.",
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            EPIC <span className="text-primary">ADVENTURES</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the raw beauty of Laos on our guided tours. Free dirt bike lessons included with every adventure. 
            Perfect for beginners and advanced riders exploring Vang Vieng's stunning terrain.
          </p>
        </div>

        <div className="space-y-12">
          {trips.map((trip, index) => (
            <Card 
              key={trip.title}
              className="bg-card border-border overflow-hidden animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <CardContent className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                      {trip.title}
                    </h3>
                    
                    <p className="font-body text-foreground/80 mb-6 leading-relaxed">
                      {trip.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-display text-primary font-semibold mb-3">
                        WHAT'S INCLUDED:
                      </h4>
                      <ul className="space-y-2">
                        {trip.highlights.map((highlight) => (
                          <li key={highlight} className="font-body text-foreground/70 flex items-start">
                            <span className="text-primary mr-2">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Trip Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                      <div className="text-center">
                        <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
                        <p className="font-body text-xs text-foreground/60">{trip.details.duration}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">{trip.details.price}</div>
                        <p className="font-body text-xs text-foreground/60">Per Person</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                        <p className="font-body text-xs text-foreground/60">{trip.details.group}</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold"
                  >
                    CONTACT FOR PRICING
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
