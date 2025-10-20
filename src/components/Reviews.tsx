import { useEffect } from "react";

export const Reviews = () => {
  useEffect(() => {
    // Load Featureable script when component mounts
    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/bundle.js";
    script.defer = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            WHAT OUR RIDERS <span className="text-primary">SAY</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Read reviews from adventurers who've experienced our tours
          </p>
        </div>

        {/* Featureable Embed */}
        <div className="max-w-5xl mx-auto animate-zoom-in">
          <div
            id="featurable-97595e66-d959-489c-8499-866a7c66aa21"
            data-featurable-async
          />
        </div>
      </div>
    </section>
  );
};