import { Card, CardContent } from "@/components/ui/card";
import johnnie from "@/assets/johnnie.jpg";
import mony from "@/assets/mony.jpg";
import tar from "@/assets/tar.jpg";
import richie from "@/assets/richie.jpg";
import sarah from "@/assets/sarah.jpg";
import aboutImage from "@/assets/gal3.jpg";

const teamMembers = [
  {
    name: "Johnnie Sampasong",
    role: "Owner",
    bio: "Founder of Dust & Dirt. With many years of riding experience, He's the man you can count on for organizing a trip of a lifetime!",
    image: johnnie,
  },
  {
    name: "Mony Silijalern",
    role: "Owner",
    bio: "Cofounder of Dust & Dirt. A very skilled off-road rider ready to lead the team to success. If you want someone to complete a challenging task, count on Mony.",
    image: mony,
  },
  {
    name: "Tar Chantavong",
    role: "Guide",
    bio: "Head mechanic/expert tour guide. A very skilled off-road rider and a grease monkey, a guy with constant smiles and passionate enthusiasm for providing an unforgettable experience.",
    image: tar,
  },
  {
    name: "Richie Carr",
    role: "Guide",
    bio: "Tour guide/marketing assistant. He has mastered scuba diving and now off-road riding, adventure is in his blood. A certified instructor full of energy and knowledge.",
    image: richie,
  },
  {
    name: "Sarah Boswijk",
    role: "Owner",
    bio: "Cofounder of Dust & Dirt. A brilliant planner who can make things happen, she's who you can count on when it comes to organizing an unforgettable tour.",
    image: sarah,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            ABOUT <span className="text-primary">US</span>
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block mb-20">
          <Card className="bg-card border-border overflow-hidden animate-zoom-in max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 md:h-full">
              {/* Image */}
              <div className="overflow-hidden md:h-full">
                <img
                  src={aboutImage}
                  alt="Dust and Dirt Adventure"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                    A tour company that offers exhilarating off-road dirt bike experiences through the stunning landscapes of Laos. Designed for both beginners and experienced riders, their guided tours take adventurers deep into the rugged mountains just north of Vang Vieng, where breathtaking scenery, challenging trails, and an authentic outdoor experience await. Whether you're looking for a quick adrenaline rush or a multi-day adventure, Dust and Dirt provides a unique way to explore the unspoiled beauty of the Lao countryside.
                  </p>

                  <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                    Riders can expect to traverse diverse terrains, from rocky paths and dense forests to open fields with panoramic mountain views. Our tours are well-structured to ensure both excitement and safety, with experienced guides leading the way and providing expert instruction. Along the journey, participants can enjoy scenic stops, interact with local communities, and experience the thrill of off-road riding in one of Southeast Asia's most picturesque regions. For those opting for multi-day tours, the adventure continues with camping under the stars, offering a truly immersive experience in nature.
                  </p>

                  <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
                    Beyond just a dirt biking trip, Dust and Dirt creates unforgettable memories for adventurers who crave something beyond the usual tourist trails. Our commitment to high-quality bikes, professional guidance, and an adventurous spirit makes them a top choice for thrill-seekers visiting Laos. Whether you're an off-road enthusiast or a first-timer looking for a once-in-a-lifetime experience, Dust and Dirt promises an epic ride through the heart of the Lao wilderness.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Mobile Layout - Text Overlay */}
        <div className="md:hidden mb-20 animate-zoom-in">
          <div className="relative overflow-hidden rounded-lg flex flex-col justify-center min-h-[500px]">
            {/* Background Image */}
            <img
              src={aboutImage}
              alt="Dust and Dirt Adventure"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

            {/* Text Overlay */}
            <div className="relative z-10 p-6 max-h-full overflow-y-auto">
              <div className="space-y-4 text-foreground/90">
                <p className="font-body text-sm leading-relaxed">
                  A tour company that offers exhilarating off-road dirt bike experiences through the stunning landscapes of Laos. Designed for both beginners and experienced riders, their guided tours take adventurers deep into the rugged mountains just north of Vang Vieng.
                </p>

                <p className="font-body text-sm leading-relaxed">
                  Riders can expect to traverse diverse terrains with experienced guides ensuring both excitement and safety. Along the journey, participants enjoy scenic stops and interact with local communities.
                </p>

                <p className="font-body text-sm leading-relaxed">
                  Dust and Dirt creates unforgettable memories for adventurers seeking authentic experiences beyond usual tourist trails. An epic ride through the heart of the Lao wilderness awaits!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Crew Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            MEET THE <span className="text-primary">CREW</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Our experienced Vang Vieng-based team is dedicated to showing you the raw beauty of Laos 
            while keeping your adventure safe and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="font-body text-foreground/70">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
