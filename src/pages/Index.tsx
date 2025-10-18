import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Trips } from "@/components/Trips";
import { Jerseys } from "@/components/Jerseys";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Contract } from "@/components/Contract";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <About />
      <Trips />
      <Jerseys />
      <Gallery />
      <Contact />
      <Location />
      <Contract />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
