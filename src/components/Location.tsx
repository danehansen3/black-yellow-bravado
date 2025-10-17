import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const Location = () => {
  // Replace with actual location coordinates
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e10c999%3A0xfb5baa3e7d3b8e7b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

  return (
    <section id="location" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            FIND <span className="text-primary">US</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Find us in Vang Vieng for gear fitting, free dirt bike lessons, and tour briefings.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border overflow-hidden animate-zoom-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                {/* Address Info */}
                <div className="p-8 bg-background flex flex-col justify-center">
                  <div className="mb-6">
                    <MapPin className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      OUR BASE
                    </h3>
                  </div>
                  <div className="space-y-3 font-body text-foreground/70">
                    <p className="font-semibold text-foreground">
                      Dust & Dirt Vang Vieng
                    </p>
                    <p>Unnamed Road</p>
                    <p>Vang Vieng, Laos</p>
                    <p className="pt-4 text-primary font-semibold">
                      Open daily for tours and lessons
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="md:col-span-2 h-96 md:h-auto">
                  <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
