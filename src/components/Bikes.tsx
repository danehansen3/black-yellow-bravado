import bikeImage from "@/assets/bike.png";

export const Bikes = () => {
  const bike = {
    name: "Honda CRF 300L",
    category: "OFFROAD / STREET",
    description: "Perfect for beginners and intermediate riders. Lightweight, reliable, and easy to handle on all terrain types.",
    image: bikeImage,
  };

  return (
    <section id="bikes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">
            OUR BIKES
          </h2>
        </div>

        <div className="max-w-5xl mx-auto animate-zoom-in flex flex-col items-center">
          {/* Bike Image */}
          <div className="w-full h-96 md:h-[500px] flex items-center justify-center bg-secondary/30 rounded-lg p-8 mb-12">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bike Info */}
          <div className="text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
              {bike.name}
            </h3>
            <p className="font-body text-sm md:text-base text-foreground/70 mb-6 tracking-wider uppercase font-semibold">
              {bike.category}
            </p>
            <p className="font-body text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {bike.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};