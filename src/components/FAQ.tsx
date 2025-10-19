import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How many people are on the tour?",
    answer: "We are a small local company and prefer to tour with a small group as well. After we experienced driving commercial around SE-Asia, we specifically chose to drive with a maximum of 5 customers. Every tour can be different, sometimes it will be just you and the tour guide and sometimes with others. Usually there will be other people staying at the campsite when you arrive in the mountains. Also depending on high or low season."
  },
  {
    question: "Do I have to be an experienced driver?",
    answer: "We offer tours adjusted to your level (and the group). Some of our customers come in unexperienced or even without ever driven a manual bike before. We can sometimes offer lessons, and always offer time to test drive before going on tour to make you feel comfortable on the dirt bike. Only if you feel comfortable, we will let you go on our tour, because we highly value safety."
  },
  {
    question: "What time will we be back in Vangvieng?",
    answer: "Depending on the tour you will pick. The half day tour returns around 15:30, but these times are discussable. The 2 days 1 night, will be back around 11:00. And with the 3 days 2 nights, around 13:00. Driving a dirt bike in Laos at times will mean bad roads and potholes, which makes it fun, but also can cause delays due to for example: a flat tire or a truck that blocks the road. We strive to be back around the given times but ask our customers to keep in mind that problems can always occur on the road."
  },
  {
    question: "Where are we driving to?",
    answer: "Every tour we will drive to a different hidden gem in Laos. The half day tour will be in and around the nature side of Vangvieng. Both of our overnight tours to camp in the mountains will include driving to Phoukhoun (110 KM from here). We teamed up with a local strawberry farm and set up a camping ground with beautiful surroundings. With the 3 days 2 nights tour, you will also drive to Phasanin village (160 KM from here) and camp on a top view platform on Sanin mountain (Elevation 6000 feet). Both the overnight tours our team will guide you to drive along the mountain ridges during sunset on trails that are only accessible by our tour guides, because it's on a Lao military base."
  },
  {
    question: "Is the road difficult for beginners?",
    answer: "Based on your experience we choose our route and roads. The half day tour can be fully adjusted to your experience and desire. Our tours will be a mix of paved road, dirt road and trails/off-roading. The 2 days 1 night tour is suitable for every rider and if you are a beginner, the tour guide will adjust the tempo and road to your level. We value safety and therefor prefer to start our tours slowly to get used to the roads, dirt bike, and riding in Laos. When you feel comfortable, there is plenty of space to increase some speed and adventure!"
  },
  {
    question: "Is there food for vegetarians/vegans?",
    answer: "During our overnight tours you will have breakfast, lunch and dinner. There will be a vegetarian option. If you're vegan, we can try to work together as much as possible, but we can't promise fully providing vegan meals."
  },
  {
    question: "What's included?",
    answer: "When you rent a dirt bike it includes a helmet, safety gear and gloves. Our half day tour includes a tour guide and safety gear. Both of our overnight tours include protective gears, a tour guide/mechanic, food & water (3 meals for the Express tour, 6 meals for the D&D Special tour), trail riding guide, camping in tents, morning sunrise coffee and some surprise bonuses."
  },
  {
    question: "What's not included?",
    answer: "When you go on an overnight tour with us, here's what to bring. A small backpack, windbreaker and/or a warm jacket, toiletries, a flashlight (phone), good shoes, cash (around 300.000 kip), swimming shorts/suit, a bottle of water and optional is a dust mask and power bank. For the half day tour, make sure to bring water, lunch and a dust mask."
  },
  {
    question: "Is the driving mostly off-roading?",
    answer: "The roads will be a combination of paved road, dirt road and trails. Depending on your experience and preference the tour guide will take you to a terrain that matches your interests, level and desire. We're happy to meet your riding needs and there is a reason we're called Dust & Dirt!"
  },
  {
    question: "Does the tour guide speak English?",
    answer: "We chose to be a Local owned company and mostly employ/work with Lao people because we wanted to build a company that spreads family. Our tour guides are still learning English and every tour they learn more by spending time with customers from all over the world. They know the area very well, can easily communicate with the locals and can always use Google translate or call with us during tours. It's important for us that customers get the chance to share culture within our tours. And we like to give our customers a true Lao experience. And if you're interested in learning some Lao words, they will happily teach you."
  },
  {
    question: "How is the temperature in the mountains?",
    answer: "The altitude is higher when we reach the campsites in the mountains. Make sure that you will bring something warm to wear at nighttime, because the temperature can drop there in comparison to Vangvieng."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
          </h2>
          <p className="font-body text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about our dirt bike tours in Laos
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-zoom-in">
          <Accordion type="single" collapsible className="space-y-8">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-border rounded-lg px-6 border"
              >
                <AccordionTrigger className="font-display text-left text-2xl font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-xl font-medium text-foreground/80 leading-relaxed tracking-wide">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};