import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/product.png";

const HeroSection = () => {
  // Customer avatars for social proof
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="min-h-[calc(100vh-140px)] relative">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-background" />
        <div className="hidden lg:block w-1/2 bg-secondary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-140px)]">
          {/* Left Content - White Background */}
          <div className="flex flex-col justify-center py-12 lg:py-20 lg:pr-12">
            {/* Social Proof */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Happy customer ${index + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Thousands of happy customers
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Fast-acting pain relief for joints, muscles, and 
              <span className="block">inflammation—feel the freeze</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Try TerraFreeze Extra Strength: Powerful cooling relief that penetrates deep to 
              soothe arthritis, joint inflammation, and muscle pain naturally.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-full">
                Try TerraFreeze Now
              </Button>
            </div>

            {/* Trust Message */}
            <p className="text-sm text-muted-foreground">
              ✓ Free Shipping • 100% Money Back Guarantee • Doctor Recommended
            </p>
          </div>

          {/* Right Content - Cream/Beige Background */}
          <div className="relative flex items-center justify-center py-12 lg:py-20 bg-secondary lg:bg-transparent">
            {/* Floating Review Card - Positioned like Auri example */}
            <div className="absolute top-16 lg:top-24 left-4 lg:left-0 bg-background rounded-xl p-4 shadow-lg max-w-[280px] border border-border z-20">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  Rated 4.9/5 by 50k+ customers
                </span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "After using TerraFreeze for two weeks, my knee pain is practically gone, 
                and I can finally sleep through the night!"
              </p>
            </div>

            {/* Product Image */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={productImage}
                alt="TerraFreeze Extra Strength Pain Relief Cream"
                className="w-72 lg:w-96 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
