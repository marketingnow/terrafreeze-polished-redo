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
    <section className="section-tight bg-secondary/40">
      <div className="content-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-5 hover:shadow-elevated transition-all duration-300 group ${
                index === 0 ? "lg:bg-primary/5" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
