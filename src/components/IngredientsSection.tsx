import { Snowflake, Leaf, Droplet, Zap } from "lucide-react";

const ingredients = [
  {
    icon: Snowflake,
    name: "Menthol",
    benefit: "Instant cooling sensation that calms irritation on contact",
  },
  {
    icon: Leaf,
    name: "Aloe Vera",
    benefit: "Soothes and hydrates skin while reducing redness",
  },
  {
    icon: Droplet,
    name: "MSM",
    benefit: "Supports joint comfort and flexibility naturally",
  },
  {
    icon: Zap,
    name: "Arnica Extract",
    benefit: "Traditional botanical known for soothing sore muscles",
  },
];

const IngredientsSection = () => {
  return (
    <section className="section-supporting bg-secondary/30">
      <div className="content-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
              What's Inside <span className="gradient-text">TERRAFREEZE™</span>
            </h2>
            <p className="text-muted-foreground">
              Quality ingredients. Real results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-5 group hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <ingredient.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
