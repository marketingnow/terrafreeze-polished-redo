import { Card } from "@/components/ui/card";

const ingredients = [
  {
    category: "DEEP PENETRATION",
    name: "Emu Oil",
    description: "Carries active ingredients through all 7 layers of skin directly to inflamed tissues. Faster relief, reduced swelling, and pain that actually goes away.",
    badge: "Clinical-Grade Carrier",
    badgeColor: "bg-primary",
    image: "https://terrafreeze.com/wp-content/uploads/2024/09/terrafreeze_3.png"
  },
  {
    category: "ANTI-INFLAMMATORY",
    name: "Arnica Montana",
    description: "Powerful natural herb that reduces inflammation and bruising at the cellular level. Less swelling, faster healing, and relief that lasts for hours.",
    badge: "Used for 500+ years",
    badgeColor: "bg-green-600",
    image: "https://terrafreeze.com/wp-content/uploads/2024/09/terrafreeze_4.png"
  },
  {
    category: "JOINT SUPPORT",
    name: "MSM & Glucosamine",
    description: "Supports joint health by rebuilding cartilage and reducing oxidative stress. Improved mobility, less stiffness, and long-term joint protection.",
    badge: "Supports cellular repair",
    badgeColor: "bg-accent",
    image: "https://terrafreeze.com/wp-content/uploads/2024/09/terrafreeze_10.png"
  },
  {
    category: "COOLING RELIEF",
    name: "Menthol",
    description: "Provides immediate cooling sensation that soothes pain on contact. Creates a refreshing feeling while blocking pain signals to the brain.",
    badge: "Instant cooling action",
    badgeColor: "bg-primary",
    image: "https://terrafreeze.com/wp-content/uploads/2024/09/terrafreeze_1.png"
  },
  {
    category: "WARMING ACTION",
    name: "Methyl Salicylate",
    description: "Generates a warming sensation to increase blood flow and ease deep joint stiffness. Provides lasting relief that penetrates deep into muscles.",
    badge: "Improves circulation",
    badgeColor: "bg-green-600",
    image: "https://terrafreeze.com/wp-content/uploads/2024/09/terrafreeze_5.png"
  },
  {
    category: "SKIN REPAIR",
    name: "Vitamins C & E",
    description: "Powerful antioxidants that nourish and protect skin while enhancing absorption. Supports tissue repair and keeps skin healthy.",
    badge: "Antioxidant protection",
    badgeColor: "bg-accent",
    image: "https://terrafreeze.com/wp-content/uploads/2024/09/terrafreeze_11.png"
  },
];

const IngredientsSection = () => {
  return (
    <section className="section-supporting bg-secondary/30">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
              What's Inside
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Only 6 Ingredients. Zero Fillers. <em className="text-primary">All Active.</em>
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">
            We don't hide behind 30-ingredient labels. TERRAFREEZE™ contains only clinically-proven active ingredients, each one selected to deliver real pain relief from within.
          </p>

          {/* 6 Ingredient Cards - 3x2 Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="glass-card p-6 flex flex-col h-full hover:shadow-elevated transition-all duration-300">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded uppercase tracking-wide">
                    {ingredient.category}
                  </span>
                </div>

                {/* Ingredient Name */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {ingredient.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                  {ingredient.description}
                </p>

                {/* Bottom section with badge and image */}
                <div className="flex items-end justify-between mt-auto">
                  <span className={`text-primary text-sm font-medium`}>
                    {ingredient.badge}
                  </span>
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={ingredient.image} 
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
