import { Target, Snowflake, Droplets, Clock } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Targeted Relief",
    description: "Absorbs fast and goes straight to the source of pain.",
  },
  {
    icon: Snowflake,
    title: "Cooling + Soothing Action",
    description: "Cools on contact, then eases tension and stiffness.",
  },
  {
    icon: Droplets,
    title: "Clean, Non-Greasy Feel",
    description: "No sticky residue. No overpowering smell.",
  },
  {
    icon: Clock,
    title: "Built for Daily Use",
    description: "Use before work, after activity, or during flare-ups.",
  },
];

const ValuePillars = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="content-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
