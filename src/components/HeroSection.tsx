import { Star, Check, ArrowRight } from "lucide-react";
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
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative content-container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 stagger-children">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground/70">
                4.8/5 Rated by Real Customers
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Fast-Acting Pain Relief —{" "}
              <span className="gradient-text">
                Without Pills, Prescriptions, or Waiting
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Target muscle, joint, and inflammation pain in minutes with a cooling-then-soothing cream designed for daily use.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-10">
              {[
                "Works on sore muscles, stiff joints, and inflammation",
                "Non-greasy • No harsh smell • Easy daily use",
                "Trusted by active adults and chronic pain sufferers",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#buy" className="btn-primary group">
                Get Relief Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-muted-foreground self-center">
                Free shipping • 60-day guarantee
              </p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Glass container for product */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Floating testimonial - positioned top left */}
              <div className="absolute -top-4 -left-4 lg:-left-8 z-20 glass-card rounded-xl p-4 max-w-[260px] animate-float">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed italic">
                  "Finally something that works on my knees without burning."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Verified Customer</p>
              </div>

              {/* Product glass container */}
              <div 
                className="relative rounded-3xl p-8 lg:p-12"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                  boxShadow: "0 25px 80px -20px rgba(0, 100, 150, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.05)"
                }}
              >
                <img
                  src={productImage}
                  alt="TerraFreeze Extra Strength Pain Relief Cream"
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-4 right-4 lg:right-0 glass-card rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">In Stock • Ships Today</span>
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
