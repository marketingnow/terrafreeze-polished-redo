import { Calendar, Heart, Home, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: Calendar,
    title: "Made for Daily Use",
    description: "Safe for everyday application",
  },
  {
    icon: Heart,
    title: "Non-Habit Forming",
    description: "No dependency concerns",
  },
  {
    icon: Home,
    title: "Easy At-Home Relief",
    description: "No appointments needed",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description: "60-day money back promise",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-border/50">
      <div className="content-container py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
