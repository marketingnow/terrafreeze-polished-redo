import { Card } from "@/components/ui/card";
import emuOilImage from "@/assets/ingredient-emu-oil.jpg";
import arnicaImage from "@/assets/ingredient-arnica.jpg";
import mentholImage from "@/assets/ingredient-menthol.jpg";
import msmImage from "@/assets/ingredient-msm.jpg";
import methylImage from "@/assets/ingredient-methyl.jpg";
import vitaminsImage from "@/assets/ingredient-vitamins.jpg";

const ingredients = [
  {
    category: "COOLING RELIEF",
    name: "Menthol",
    description: "Provides immediate cooling sensation that soothes pain on contact. Creates a refreshing feeling while blocking pain signals to the brain.",
    badge: "Instant cooling action",
    image: mentholImage,
  },
  {
    category: "DEEP PENETRATION",
    name: "Emu Oil",
    description: "Carries active ingredients through all 7 layers of skin directly to inflamed tissues. Faster relief, reduced swelling, and pain that actually goes away.",
    badge: "Clinical-Grade Carrier",
    image: emuOilImage,
  },
  {
    category: "ANTI-INFLAMMATORY",
    name: "Arnica Montana",
    description: "Powerful natural herb that reduces inflammation and bruising at the cellular level. Less swelling, faster healing, and relief that lasts for hours.",
    badge: "Used for 500+ years",
    image: arnicaImage,
  },
  {
    category: "JOINT SUPPORT",
    name: "MSM & Glucosamine",
    description: "Supports joint health by rebuilding cartilage and reducing oxidative stress. Improved mobility, less stiffness, and long-term joint protection.",
    badge: "Supports cellular repair",
    image: msmImage,
  },
  {
    category: "WARMING ACTION",
    name: "Methyl Salicylate",
    description: "Generates a warming sensation to increase blood flow and ease deep joint stiffness. Provides lasting relief that penetrates deep into muscles.",
    badge: "Improves circulation",
    image: methylImage,
  },
  {
    category: "SKIN REPAIR",
    name: "Vitamins C & E",
    description: "Powerful antioxidants that nourish and protect skin while enhancing absorption. Supports tissue repair and keeps skin healthy.",
    badge: "Antioxidant protection",
    image: vitaminsImage,
  },
];

const IngredientsSection = () => {
  return (
    <section className="section-supporting bg-secondary/30">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Badge */}
          <div className="flex justify-center mb-6">
            <span className="font-heading inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
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
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl flex flex-col h-full min-h-[280px] hover:shadow-elevated transition-all duration-300 border-0 p-0"
              >
                {/* Background image */}
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle darkening for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />

                {/* Content */}
                <div className="relative flex flex-col h-full p-7">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white mb-3 leading-tight sm:whitespace-nowrap">
                    {ingredient.name}
                  </h3>

                  <p className="text-white text-base lg:text-lg leading-snug font-semibold max-w-[75%] drop-shadow-md">
                    {ingredient.description}
                  </p>

                  {/* Pill badge bottom-right */}
                  <div className="absolute bottom-5 right-5">
                    <span className="inline-block px-4 py-1.5 bg-white text-foreground text-xs font-mono rounded-full shadow-md">
                      {ingredient.badge}
                    </span>
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
