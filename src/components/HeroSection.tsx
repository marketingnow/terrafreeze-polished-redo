import { Star, Check, ArrowRight } from "lucide-react";
import productImage from "@/assets/product.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Base: clean white → light ice blue, deeper on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(0 0% 100%) 0%, hsl(205 40% 97%) 45%, hsl(200 60% 90%) 75%, hsl(202 65% 82%) 100%)",
        }}
      />

      {/* Right column depth: deeper crystalline blue behind product */}
      <div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{
          background:
            "radial-gradient(ellipse 80% 75% at 75% 50%, hsl(210 55% 78% / 0.55) 0%, hsl(208 60% 70% / 0.25) 45%, transparent 75%)",
        }}
      />

      {/* Soft crystalline glow behind the jar */}
      <div
        className="absolute top-1/2 right-[14%] -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(200 70% 85% / 0.6) 0%, hsl(210 60% 75% / 0.25) 50%, transparent 75%)",
        }}
      />

      {/* Top-right corner: navy ice shards (confined, fading inward) */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[38%] h-[55%]"
        style={{
          maskImage:
            "radial-gradient(ellipse 100% 100% at 100% 0%, black 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 100% 0%, black 0%, black 30%, transparent 75%)",
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shardTR" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(215 50% 28%)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(215 50% 28%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="400,0 400,180 280,40" fill="url(#shardTR)" />
          <polygon points="400,60 400,220 320,90" fill="url(#shardTR)" opacity="0.7" />
          <polygon points="360,0 400,0 400,120 300,20" fill="url(#shardTR)" opacity="0.5" />
          <polygon points="400,140 400,260 340,160" fill="url(#shardTR)" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom-left corner: navy ice shards (confined, fading inward) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[32%] h-[45%]"
        style={{
          maskImage:
            "radial-gradient(ellipse 100% 100% at 0% 100%, black 0%, black 25%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 0% 100%, black 0%, black 25%, transparent 70%)",
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shardBL" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(215 45% 30%)" stopOpacity="0.14" />
              <stop offset="100%" stopColor="hsl(215 45% 30%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,400 0,240 140,400" fill="url(#shardBL)" />
          <polygon points="0,340 0,400 90,400" fill="url(#shardBL)" opacity="0.7" />
          <polygon points="0,400 0,300 180,400" fill="url(#shardBL)" opacity="0.5" />
        </svg>
      </div>

      <div className="relative content-container py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 stagger-children">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200/50">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                538,000+ People Already Pain-Free
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] mb-3">
              Finally Move Without Pain —{" "}
              <span className="gradient-text">
                Without Pills, Prescriptions, or Doctor Visits
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-black font-medium leading-relaxed mb-4 max-w-lg">
              One small dab. 60 seconds. Hours of relief. Non-greasy, no smell, no mess.
            </p>

            {/* Bullet points */}
            <ul className="space-y-2.5 mb-5">
              {[
                "Works on arthritis, joint pain, muscle aches, and inflammation",
                "FDA Registered • Ships from the USA",
                "Recommended by physical therapists and clinical pain specialists",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-black font-medium text-base">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col gap-2 items-stretch">
              <a href="#buy" className="btn-primary group w-full justify-center text-base sm:text-lg py-4 px-6 flex items-center">
                TRY TERRAFREEZE NOW
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-sm text-black font-medium text-center">
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
