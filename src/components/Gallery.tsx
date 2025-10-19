import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import gal6 from "@/assets/gal6.jpg";
import gal8 from "@/assets/gal8.jpg";
import gal9 from "@/assets/gal9.jpg";
import gal10 from "@/assets/gal10.jpg";
import gal11 from "@/assets/gal11.jpg";
import gal12 from "@/assets/gal12.jpg";
import gal13 from "@/assets/gal13.jpg";
import gal14 from "@/assets/gal14.jpg";
import gal15 from "@/assets/gal15.jpg";
import gal16 from "@/assets/gal16.jpg";
import rec1 from "@/assets/rec1.jpg";
import rec2 from "@/assets/rec2.jpg";

const pastTrips = [
  {
    title: "October 2025",
    thumbnail: rec1,
    date: "October 2025",
    photos: [rec1, rec2],
  },
  {
    title: "Gallery",
    thumbnail: gal4,
    date: "2024-2025",
    photos: [gal1, gal2, gal3, gal4, gal5, gal6, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16],
  },
];

export const Gallery = () => {
  const [selectedTrip, setSelectedTrip] = useState<typeof pastTrips[0] | null>(null);
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Scroll to top when gallery modal opens
  useEffect(() => {
    if (selectedTrip) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTrip]);

  const handleEnlargePhoto = (photo: string, index: number) => {
    setEnlargedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const handlePreviousPhoto = () => {
    if (selectedTrip) {
      const newIndex = currentPhotoIndex === 0 ? selectedTrip.photos.length - 1 : currentPhotoIndex - 1;
      setCurrentPhotoIndex(newIndex);
      setEnlargedPhoto(selectedTrip.photos[newIndex]);
    }
  };

  const handleNextPhoto = () => {
    if (selectedTrip) {
      const newIndex = currentPhotoIndex === selectedTrip.photos.length - 1 ? 0 : currentPhotoIndex + 1;
      setCurrentPhotoIndex(newIndex);
      setEnlargedPhoto(selectedTrip.photos[newIndex]);
    }
  };

  const handleDownloadAllPhotos = async () => {
    if (!selectedTrip) return;

    const zip = new JSZip();

    try {
      // Fetch all images and add them to the zip
      for (let i = 0; i < selectedTrip.photos.length; i++) {
        const photoUrl = selectedTrip.photos[i];
        const response = await fetch(photoUrl);
        const blob = await response.blob();
        const fileName = `photo-${i + 1}.jpg`;
        zip.file(fileName, blob);
      }

      // Generate and download the zip file
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, `${selectedTrip.title}-photos.zip`);
    } catch (error) {
      console.error("Error downloading photos:", error);
      alert("Error downloading photos. Please try again.");
    }
  };

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
                <div className="aspect-video overflow-hidden relative bg-secondary/30">
                  <img
                    src={trip.thumbnail}
                    alt={trip.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
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
      {selectedTrip && !enlargedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col p-4 overflow-hidden">
          <button
            onClick={() => setSelectedTrip(null)}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full mx-auto flex flex-col h-full">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                {selectedTrip.title}
              </h3>
              <p className="font-body text-primary">{selectedTrip.date}</p>
            </div>

            {/* Scrollable Gallery Grid */}
            <div className="flex-1 overflow-y-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedTrip.photos.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-video overflow-hidden rounded-lg bg-secondary/30 cursor-pointer group"
                    onClick={() => handleEnlargePhoto(photo, idx)}
                  >
                    <img
                      src={photo}
                      alt={`${selectedTrip.title} - Photo ${idx + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleDownloadAllPhotos}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD ALL PHOTOS
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Photo Modal */}
      {enlargedPhoto && selectedTrip && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setEnlargedPhoto(null)}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePreviousPhoto}
            className="absolute left-4 text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] flex items-center justify-center">
            <img
              src={enlargedPhoto}
              alt="Enlarged"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 text-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-foreground font-body">
            {currentPhotoIndex + 1} / {selectedTrip.photos.length}
          </div>
        </div>
      )}
    </>
  );
};