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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/videos/DraftResource_1745057607.926917.MOV"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-wide leading-tight">
          FREE DIRT BIKE <br className="sm:hidden" /> LESSONS
        </h1>

        <p className="font-body text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Experience the raw beauty of Laos on two wheels. Perfect for beginner and advanced riders exploring Vang Vieng's stunning terrain.
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
