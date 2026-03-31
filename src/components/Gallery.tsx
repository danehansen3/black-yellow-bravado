import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Dynamically import all gallery images (gal* and rec*)
const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/{gal,rec}*.jpg",
  { eager: true }
);

const galleryImages: string[] = Object.values(galleryModules).map((m) => m.default);

const INITIAL_COUNT = 6;

export const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, INITIAL_COUNT);

  useEffect(() => {
    if (enlargedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [enlargedIndex]);

  const handlePrev = () => {
    if (enlargedIndex === null) return;
    setEnlargedIndex(enlargedIndex === 0 ? galleryImages.length - 1 : enlargedIndex - 1);
  };

  const handleNext = () => {
    if (enlargedIndex === null) return;
    setEnlargedIndex(enlargedIndex === galleryImages.length - 1 ? 0 : enlargedIndex + 1);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
              PHOTO <span className="text-primary">GALLERY</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
              Relive the excitement of our past adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {visibleImages.map((src, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg bg-secondary/30 cursor-pointer group"
                onClick={() => setEnlargedIndex(idx)}
              >
                <img
                  src={src}
                  alt={`Gallery photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {!showAll && galleryImages.length > INITIAL_COUNT && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAll(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold tracking-wide"
              >
                VIEW ALL PHOTOS ({galleryImages.length})
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enlarged Photo Modal */}
      {enlargedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setEnlargedIndex(null)}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="max-w-5xl max-h-[80vh] flex items-center justify-center">
            <img
              src={galleryImages[enlargedIndex]}
              alt={`Gallery photo ${enlargedIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 text-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-foreground font-body">
            {enlargedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
};
