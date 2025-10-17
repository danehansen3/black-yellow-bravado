import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
          FREE DIRT
          <span className="block text-primary mt-2">BIKE LESSONS</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Experience the thrill of dirt bike touring with expert guides, 
          premium equipment, and unforgettable trails.
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
