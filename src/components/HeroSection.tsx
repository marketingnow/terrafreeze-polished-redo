import { Star, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Placeholder avatar images - you can replace with real customer photos
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="hero-gradient min-h-[calc(100vh-140px)] flex items-center py-12 lg:py-20 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            {/* Social Proof */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Happy customer ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Loved by <span className="font-semibold text-foreground">50,000+</span> customers
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Experience Instant
              <span className="text-primary"> Cooling Relief</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Our advanced freeze technology targets muscle pain and inflammation at the source, 
              delivering fast-acting, long-lasting relief you can feel in minutes.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="hero">
                Try TerraFreeze Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              <div className="flex items-center gap-2.5 bg-trust-bg border border-trust-border rounded-lg px-4 py-2.5 shadow-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Doctor Recommended
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-trust-bg border border-trust-border rounded-lg px-4 py-2.5 shadow-sm">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Clinically Tested
                </span>
              </div>
            </div>

            {/* Risk-Free Message */}
            <p className="mt-6 text-sm text-muted-foreground">
              ✓ Try Risk Free • 100% Money Back Guarantee • Free Shipping
            </p>
          </div>

          {/* Right Content - Product Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              {/* Placeholder for product image */}
              <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative overflow-hidden shadow-xl">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
                
                {/* Product placeholder */}
                <div className="relative z-10 text-center p-8">
                  <div className="w-48 h-64 lg:w-56 lg:h-72 mx-auto bg-gradient-to-b from-primary/20 to-primary/30 rounded-xl flex items-center justify-center border border-primary/20">
                    <div className="text-center">
                      <div className="text-primary font-bold text-xl mb-2">TerraFreeze</div>
                      <div className="text-muted-foreground text-sm">Product Image</div>
                      <div className="text-xs text-muted-foreground mt-1">(Provide actual image)</div>
                    </div>
                  </div>
                </div>

                {/* Floating review card */}
                <div className="absolute bottom-8 -left-4 lg:left-8 bg-card rounded-xl p-4 shadow-lg max-w-[240px] border border-border animate-fade-in">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
                  </div>
                  <p className="text-sm text-foreground italic">
                    "Finally found relief after trying everything. TerraFreeze works instantly!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Sarah M., Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
