import { Star, ArrowRight } from "lucide-react";
import productImage from "@/assets/product.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(200 70% 97%) 0%, hsl(210 30% 98%) 50%, hsl(0 0% 100%) 100%)"
        }}
      />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative content-container py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 stagger-children">
            {/* Rating badge - more prominent */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200/50">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                538,000+ People Already Pain-Free
              </span>
            </div>

            {/* Headline - dominant */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-5">
              Finally Move Without Pain —{" "}
              <span className="gradient-text">
                Without Pills, Prescriptions, or Doctor Visits
              </span>
            </h1>

            {/* Subheadline - tighter */}
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
              One small dab. 60 seconds. Hours of relief. Non-greasy, no smell, no mess.
            </p>

            {/* CTA Button - tight to bullets */}
            <div className="flex flex-col gap-4 items-stretch">
              <a href="#buy" className="btn-primary group w-full justify-center text-lg sm:text-xl py-5 px-6 flex items-center">
                TRY TERRAFREEZE NOW
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-sm text-muted-foreground text-center">
                Try Now Risk Free • 100% Money Back Guarantee
              </p>

            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Glass container for product */}
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Floating testimonial - positioned top left */}
              <div className="absolute -top-2 -left-2 lg:-left-6 z-20 glass-card rounded-lg p-3 max-w-[220px] animate-float">
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-foreground leading-snug italic">
                  "Finally something that works on my knees without burning."
                </p>
                <p className="text-[10px] text-muted-foreground mt-1.5">— Verified Customer</p>
              </div>

              {/* Product glass container */}
              <div 
                className="relative rounded-2xl p-6 lg:p-8"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                  boxShadow: "0 20px 60px -15px rgba(0, 100, 150, 0.12), 0 8px 24px -8px rgba(0, 0, 0, 0.04)"
                }}
              >
                <img
                  src={productImage}
                  alt="TerraFreeze Extra Strength Pain Relief Cream"
                  className="w-full h-auto object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
