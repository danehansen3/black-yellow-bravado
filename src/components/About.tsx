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
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            MEET THE <span className="text-primary">TEAM</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Our experienced crew is dedicated to providing you with the ultimate 
            dirt bike touring experience, combining safety with pure adrenaline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
