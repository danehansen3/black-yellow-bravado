import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Contact = () => {
  const whatsappNumber = "8562059480427";
  const whatsappMessage = "Hi! I'm interested in booking a dirt bike tour in Vang Vieng.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramHandle = "@dustanddirtvangvieng";
  const instagramUrl = "https://www.instagram.com/dustanddirtvangvieng";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to experience the raw beauty of Laos? Contact us on WhatsApp or follow us 
            on Instagram for the latest adventure updates from Vang Vieng.
          </p>
        </div>

        {/* WhatsApp Card */}
        <Card className="bg-card border-border animate-zoom-in max-w-2xl mx-auto mb-12">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                WHATSAPP
              </h3>
              <p className="font-body text-foreground/70 mb-6">
                Get instant answers about our Vang Vieng tours, free dirt bike lessons, 
                equipment, and availability. Perfect for beginners and advanced riders.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-lg px-8 py-6 shadow-yellow-glow hover:shadow-yellow-glow/70 transition-all"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                CHAT NOW
              </a>
            </Button>

            <p className="font-body text-xs text-foreground/50 mt-4">
              Available: Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM
            </p>
          </CardContent>
        </Card>

        {/* Instagram Feed & Follow */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border animate-zoom-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Instagram className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  INSTAGRAM
                </h3>
                <p className="font-body text-foreground/70 mb-6">
                  Follow us for daily adventure shots from Vang Vieng, tour highlights, and 
                  behind-the-scenes action exploring the raw beauty of Laos.
                </p>
              </div>

              {/* Instagram Posts Grid */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* POST 1 - PASTE INSTAGRAM EMBED CODE BELOW */}
                <div className="instagram-post-wrapper">
                  {/* Replace this placeholder div with your first Instagram embed code */}
                  <div className="bg-secondary/30 rounded-lg p-8 text-center aspect-square flex flex-col items-center justify-center">
                    <Instagram className="h-12 w-12 text-primary/40 mb-2" />
                    <p className="font-body text-xs text-foreground/50">Post 1</p>
                  </div>
                </div>
                {/* POST 1 - PASTE INSTAGRAM EMBED CODE ABOVE */}

                {/* POST 2 - PASTE INSTAGRAM EMBED CODE BELOW */}
                <div className="instagram-post-wrapper">
                  {/* Replace this placeholder div with your second Instagram embed code */}
                  <div className="bg-secondary/30 rounded-lg p-8 text-center aspect-square flex flex-col items-center justify-center">
                    <Instagram className="h-12 w-12 text-primary/40 mb-2" />
                    <p className="font-body text-xs text-foreground/50">Post 2</p>
                  </div>
                </div>
                {/* POST 2 - PASTE INSTAGRAM EMBED CODE ABOVE */}

                {/* POST 3 - PASTE INSTAGRAM EMBED CODE BELOW */}
                <div className="instagram-post-wrapper">
                  {/* Replace this placeholder div with your third Instagram embed code */}
                  <div className="bg-secondary/30 rounded-lg p-8 text-center aspect-square flex flex-col items-center justify-center">
                    <Instagram className="h-12 w-12 text-primary/40 mb-2" />
                    <p className="font-body text-xs text-foreground/50">Post 3</p>
                  </div>
                </div>
                {/* POST 3 - PASTE INSTAGRAM EMBED CODE ABOVE */}

              </div>

              {/* Instagram Embed Script - Only include once */}
              <script async src="//www.instagram.com/embed.js"></script>

              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-lg px-8 py-6 shadow-yellow-glow hover:shadow-yellow-glow/70 transition-all"
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  FOLLOW US
                </a>
              </Button>

              <p className="font-body text-sm text-primary mt-4 text-center">
                {instagramHandle}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h2>
            <p className="font-body text-lg text-foreground/70">
              Everything you need to know about our Vang Vieng dirt bike tours
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    How many people are on the tour?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    We are a small local company and prefer to tour with a small group as well. After we experienced driving commercial around SE-Asia, we specifically chose to drive with a maximum of 5 customers. Every tour can be different, sometimes it will be just you and the tour guide and sometimes with others. Usually there will be other people staying at the campsite when you arrive in the mountains. Also depending on high or low season.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    Do I have to be an experienced driver?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    We offer tours adjusted to your level (and the group). Some of our customers come in unexperienced or even without ever driven a manual bike before. We can sometimes offer lessons, and always offer time to test drive before going on tour to make you feel comfortable on the dirt bike. Only if you feel comfortable, we will let you go on our tour, because we highly value safety.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    What time will we be back in Vangvieng?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    Depending on the tour you will pick. The half day tour returns around 15:30, but these times are discussable. The 2 days 1 night, will be back around 11:00. And with the 3 days 2 nights, around 13:00. Driving a dirt bike in Laos at times will mean bad roads and potholes, which makes it fun, but also can cause delays due to for example: a flat tire or a truck that blocks the road. We strive to be back around the given times but ask our customers to keep in mind that problems can always occur on the road.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    Where are we driving to?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    Every tour we will drive to a different hidden gem in Laos. The half day tour will be in and around the nature side of Vangvieng. Both of our overnight tours to camp in the mountains will include driving to Phoukhoun (110 KM from here). We teamed up with a local strawberry farm and set up a camping ground with beautiful surroundings. With the 3 days 2 nights tour, you will also drive to Phasanin village (160 KM from here) and camp on a top view platform on Sanin mountain (Elevation 6000 feet). Both the overnight tours our team will guide you to drive along the mountain ridges during sunset on trails that are only accessible by our tour guides, because it's on a Lao military base.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    Is the road difficult for beginners?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    Based on your experience we choose our route and roads. The half day tour can be fully adjusted to your experience and desire. Our tours will be a mix of paved road, dirt road and trails/off-roading. The 2 days 1 night tour is suitable for every rider and if you are a beginner, the tour guide will adjust the tempo and road to your level. We value safety and therefor prefer to start our tours slowly to get used to the roads, dirt bike, and riding in Laos. When you feel comfortable, there is plenty of space to increase some speed and adventure!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    Is there food for vegetarians/vegans?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    During our overnight tours you will have breakfast, lunch and dinner. There will be a vegetarian option. If you're vegan, we can try to work together as much as possible, but we can't promise fully providing vegan meals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    What's included?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    When you rent a dirt bike it includes a helmet, safety gear and gloves. Our half day tour includes a tour guide and safety gear. Both of our overnight tours include protective gears, a tour guide/mechanic, food & water (3 meals for the Express tour, 6 meals for the D&D Special tour), trail riding guide, camping in tents, morning sunrise coffee and some surprise bonuses.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    What's not included?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    When you go on an overnight tour with us, here's what to bring. A small backpack, windbreaker and/or a warm jacket, toiletries, a flashlight (phone), good shoes, cash (around 300.000 kip), swimming shorts/suit, a bottle of water and optional is a dust mask and power bank. For the half day tour, make sure to bring water, lunch and a dust mask.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    Is the driving mostly off-roading?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    The roads will be a combination of paved road, dirt road and trails. Depending on your experience and preference the tour guide will take you to a terrain that matches your interests, level and desire. We're happy to meet your riding needs and there is a reason we're called Dust & Dirt!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    Does the tour guide speak English?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    We chose to be a Local owned company and mostly employ/work with Lao people because we wanted to build a company that spreads family. Our tour guides are still learning English and every tour they learn more by spending time with customers from all over the world. They know the area very well, can easily communicate with the locals and can always use Google translate or call with us during tours. It's important for us that customers get the chance to share culture within our tours. And we like to give our customers a true Lao experience. And if you're interested in learning some Lao words, they will happily teach you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    How is the temperature in the mountains?
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/80">
                    The altitude is higher when we reach the campsites in the mountains. Make sure that you will bring something warm to wear at nighttime, because the temperature can drop there in comparison to Vangvieng.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
