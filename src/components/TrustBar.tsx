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
    description: "180-day money back promise",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-border/30">
      <div className="content-container py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
