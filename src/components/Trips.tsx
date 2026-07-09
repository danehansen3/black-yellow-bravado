import { ArrowRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import trip1 from "@/assets/trip1.jpg";
import trip2 from "@/assets/trip2.jpg";
import trip3 from "@/assets/trip3.jpg";
import trip4 from "@/assets/trip4.jpg";
import trip5 from "@/assets/trip5.jpg";
import trip6 from "@/assets/about.jpg";

const trips = [
  {
    title: "Ride & Camp Adventure",
    badge: "Most Popular",
    image: trip3,
    description:
      "Our signature overnight adventure. Perfect for first-time riders and experienced off-road enthusiasts alike. Driving lessons are provided before the tour for beginners, allowing everyone to experience Laos' incredible backcountry safely.",
    highlights: [
      "Beginner & Premium routes available",
      "Driving lessons included for beginners",
      "1 Night / 2 Days adventure",
      "Camping included",
      "Professional local guide",
      "Safety gear provided",
    ],
    details: {
      duration: "1 Night / 2 Days",
      group: "2-5 riders",
    },
  },
  {
    title: "Quickie",
    badge: "Second Most Popular",
    image: trip2,
    description:
      "Perfect if you're short on time. Spend 3-6 hours exploring the beautiful trails surrounding Vang Vieng. Beginners receive driving lessons before the ride, while experienced riders can choose a more technical premium route.",
    highlights: [
      "3-6 hour day tour",
      "Beginner & Premium options",
      "Driving lessons included for beginners",
      "Safety equipment provided",
      "Perfect introduction to off-road riding",
    ],
    details: {
      duration: "3-6 Hours",
      group: "2-5 riders",
    },
  },
  {
    title: "Endurance Day Tour",
    image: trip1,
    description:
      "Our premium full-day experience designed for riders looking for maximum time on challenging off-road terrain. This tour is intended for experienced riders seeking an extended adventure.",
    highlights: [
      "Premium-only experience",
      "8 hours of riding",
      "100% off-road adventure",
      "Advanced terrain",
      "Professional guide",
      "Safety gear included",
    ],
    details: {
      duration: "8 Hours",
      group: "2-5 riders",
    },
  },
  {
    title: "Can't Get Enough",
    image: trip4,
    description:
      "The premium version of our Ride & Camp Adventure. Spend more time on technical trails and remote terrain while still enjoying an unforgettable overnight camping experience.",
    highlights: [
      "Premium-only route",
      "1 Night / 2 Days",
      "Longer and more technical riding",
      "Camping included",
      "Professional guides",
      "Safety equipment included",
    ],
    details: {
      duration: "1 Night / 2 Days",
      group: "2-5 riders",
    },
  },
  {
    title: "Extended Action Pack",
    image: trip5,
    description:
      "Our ultimate premium expedition through the mountains of Laos. Two unforgettable nights of camping combined with the longest and most demanding riding we offer.",
    highlights: [
      "Premium-only expedition",
      "2 Nights / 3 Days",
      "Longest riding distances",
      "Remote mountain trails",
      "Camping included",
      "Meals and equipment provided",
    ],
    details: {
      duration: "2 Nights / 3 Days",
      group: "2-5 riders",
    },
  },
  {
    title: "Premium Off-Road Challenge",
    image: trip6, 
    description:
      "Designed exclusively for experienced riders wanting an entire day of technical off-road riding. No pavement—just challenging trails, jungle terrain, river crossings, and mountain tracks.",
    highlights: [
      "Premium-only",
      "8 hours of riding",
      "100% off-road",
      "Advanced terrain",
      "Professional guide",
      "Safety equipment provided",
    ],
    details: {
      duration: "8 Hours",
      group: "2-5 riders",
    },
  }
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
            Whether you've never ridden a dirt bike before or you're an experienced off-road rider, we have an adventure for you. Driving lessons can be provided before every tour for beginners, while experienced riders can choose our Premium routes featuring longer rides and more technical terrain throughout the mountains of Laos.
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
                        <h3 className="font-display text-3xl font-bold text-foreground mb-3">
                        {trip.title}
                      </h3>

                      {trip.badge && (
                        <div className="mb-4">
                          <span
                            className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                              trip.badge === "Most Popular"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-orange-500/20 text-orange-300"
                            }`}
                          >
                            {trip.badge === "Most Popular"
                              ? "⭐ Most Popular"
                              : "🔥 Second Most Popular"}
                          </span>
                        </div>
                      )}

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