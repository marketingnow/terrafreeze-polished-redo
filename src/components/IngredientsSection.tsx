import { Card } from "@/components/ui/card";

const ingredients = [
  {
    category: "DEEP PENETRATION",
    name: "Emu Oil",
    description: "Carries active ingredients through all 7 layers of skin directly to inflamed tissues. Faster relief, reduced swelling, and pain that actually goes away.",
    badge: "Clinical-Grade Carrier",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200&h=200&fit=crop&q=80"
  },
  {
    category: "ANTI-INFLAMMATORY",
    name: "Arnica Montana",
    description: "Powerful natural herb that reduces inflammation and bruising at the cellular level. Less swelling, faster healing, and relief that lasts for hours.",
    badge: "Used for 500+ years",
    badgeColor: "bg-green-600",
    image: "https://images.unsplash.com/photo-1518882605630-8eb589210781?w=200&h=200&fit=crop&q=80"
  },
  {
    category: "JOINT SUPPORT",
    name: "MSM & Glucosamine",
    description: "Supports joint health by rebuilding cartilage and reducing oxidative stress. Improved mobility, less stiffness, and long-term joint protection.",
    badge: "Supports cellular repair",
    badgeColor: "bg-accent",
    image: "https://images.unsplash.com/photo-1559757175-7cb05f416679?w=200&h=200&fit=crop&q=80"
  },
  {
    category: "COOLING RELIEF",
    name: "Menthol",
    description: "Provides immediate cooling sensation that soothes pain on contact. Creates a refreshing feeling while blocking pain signals to the brain.",
    badge: "Instant cooling action",
    badgeColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=200&h=200&fit=crop&q=80"
  },
  {
    category: "WARMING ACTION",
    name: "Camphor",
    description: "Stimulates blood flow to treated areas, promoting natural healing. Provides warming relief that penetrates deep into muscles and joints.",
    badge: "Improves circulation",
    badgeColor: "bg-green-600",
    image: "https://images.unsplash.com/photo-1474979266404-7d59ebcbe696?w=200&h=200&fit=crop&q=80"
  },
  {
    category: "SKIN REPAIR",
    name: "Vitamin E",
    description: "Powerful antioxidant that nourishes and protects skin while enhancing absorption. Supports tissue repair and keeps skin healthy.",
    badge: "Antioxidant protection",
    badgeColor: "bg-accent",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=200&fit=crop&q=80"
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
