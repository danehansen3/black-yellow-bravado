import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background YouTube Video (fills screen, cropped for cinematic fit) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[56.25vw] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/y_RmOjkRXHk?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&loop=1&playlist=y_RmOjkRXHk"
            title="Dust and Dirt Adventure"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/70 z-[5]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-wide leading-tight">
          FREE DIRT BIKE <br className="sm:hidden" /> LESSONS
        </h1>

        <p className="font-body text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Experience the raw beauty of Laos on two wheels. Perfect for beginner
          and advanced riders exploring Vang Vieng's stunning terrain.
        </p>

        <Button
          onClick={scrollToContact}
          size="lg"
          className="font-display text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-yellow-glow hover:shadow-yellow-glow/70 transition-all duration-300"
        >
          BOOK YOUR ADVENTURE
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
