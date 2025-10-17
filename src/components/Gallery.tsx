import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import desertTrip from "@/assets/trip-desert.jpg";
import mountainTrip from "@/assets/trip-mountain.jpg";

const pastTrips = [
  {
    title: "Mojave Desert Adventure 2024",
    thumbnail: desertTrip,
    date: "March 2024",
    photos: [desertTrip], // In real app, this would have multiple photos
  },
  {
    title: "Rocky Mountain Expedition 2023",
    thumbnail: mountainTrip,
    date: "September 2023",
    photos: [mountainTrip], // In real app, this would have multiple photos
  },
];

export const Gallery = () => {
  const [selectedTrip, setSelectedTrip] = useState<typeof pastTrips[0] | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
              PREVIOUS <span className="text-primary">ADVENTURES</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
              Relive the excitement of our past tours. Click on any trip to view 
              and download the complete gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pastTrips.map((trip, index) => (
              <Card 
                key={trip.title}
                className="bg-card border-border overflow-hidden group cursor-pointer animate-zoom-in hover:border-primary transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedTrip(trip)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={trip.thumbnail}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="font-display text-foreground text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      CLICK TO VIEW GALLERY
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {trip.title}
                  </h3>
                  <p className="font-body text-primary font-semibold">
                    {trip.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedTrip(null)}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                {selectedTrip.title}
              </h3>
              <p className="font-body text-primary">{selectedTrip.date}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {selectedTrip.photos.map((photo, idx) => (
                <div key={idx} className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={photo}
                    alt={`${selectedTrip.title} - Photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD ALL PHOTOS
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
