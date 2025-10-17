import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import desertTrip from "@/assets/trip-desert.jpg";
import mountainTrip from "@/assets/trip-mountain.jpg";

const trips = [
  {
    title: "Desert Dunes Expedition",
    image: desertTrip,
    description: "Navigate through breathtaking sand dunes and rocky terrain on this 3-day adventure through pristine desert landscapes. Experience the raw beauty of endless horizons and challenging trails.",
    highlights: [
      "3 days of guided desert riding",
      "Professional photography included",
      "Premium bike rentals available",
      "All safety gear provided",
    ],
    details: {
      duration: "3 Days / 2 Nights",
      location: "Mojave Desert",
      group: "Max 12 riders",
    },
  },
  {
    title: "Mountain Trail Mastery",
    image: mountainTrip,
    description: "Conquer steep inclines and technical trails through dense forests and mountain passes. This 5-day tour is perfect for experienced riders seeking the ultimate challenge and scenic rewards.",
    highlights: [
      "5 days of mountain terrain",
      "Expert trail navigation",
      "Camping under the stars",
      "Meals and accommodations included",
    ],
    details: {
      duration: "5 Days / 4 Nights",
      location: "Rocky Mountains",
      group: "Max 10 riders",
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
            Choose your next adrenaline-packed journey. Each tour is crafted to deliver 
            unforgettable experiences with top-notch equipment and expert guidance.
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
                        <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                        <p className="font-body text-xs text-foreground/60">{trip.details.location}</p>
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
