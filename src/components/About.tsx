import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  {
    name: "Jake Morrison",
    role: "Lead Tour Guide",
    bio: "15 years of off-road racing experience",
    image: team1,
  },
  {
    name: "Sarah Chen",
    role: "Head Mechanic",
    bio: "Expert in dirt bike maintenance and safety",
    image: team2,
  },
  {
    name: "Mike Rodriguez",
    role: "Safety Director",
    bio: "Certified instructor with 1000+ tours led",
    image: team3,
  },
  {
    name: "Alex Thompson",
    role: "Trail Scout",
    bio: "Local expert who knows every hidden path",
    image: team1,
  },
  {
    name: "Emma Davis",
    role: "Photography Lead",
    bio: "Capturing your epic moments since 2018",
    image: team2,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
                <p className="font-body text-foreground/70">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
