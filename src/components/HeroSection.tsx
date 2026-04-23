import { Star, Check, ArrowRight } from "lucide-react";
import productImage from "@/assets/product.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Split background: soft grey left, icy blue gradient right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(210 15% 94%) 0%, hsl(210 20% 95%) 45%, hsl(200 75% 92%) 70%, hsl(195 85% 88%) 100%)",
        }}
      />

      {/* Icy radial glow behind product (right side) */}
      <div
        className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, hsl(195 95% 80% / 0.55) 0%, hsl(200 90% 85% / 0.25) 45%, transparent 70%)",
        }}
      />

      {/* Frosty highlight top-right */}
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />

      {/* Subtle frost particles */}
      <div className="absolute top-16 right-[28%] w-2 h-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
      <div className="absolute top-1/3 right-[12%] w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      <div className="absolute bottom-24 right-[35%] w-1 h-1 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
      <div className="absolute top-1/2 right-[45%] w-1.5 h-1.5 rounded-full bg-cyan-100/80 shadow-[0_0_10px_rgba(165,243,252,0.9)]" />

      {/* Soft divider glow between halves */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />

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
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 max-w-lg">
              One small dab. 60 seconds. Hours of relief. Non-greasy, no smell, no mess.
            </p>

            {/* Bullet points */}
            <ul className="space-y-2 mb-5">
              {[
                "Works on arthritis, joint pain, muscle aches, and inflammation",
                "FDA Registered • Ships from the USA",
                "Recommended by physical therapists and clinical pain specialists",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-foreground/80 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col gap-2 items-stretch">
              <a href="#buy" className="btn-primary group w-full justify-center text-base sm:text-lg py-4 px-6 flex items-center">
                TRY TERRAFREEZE NOW
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-muted-foreground text-center">
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
