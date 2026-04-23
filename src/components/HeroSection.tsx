import { Star, Check, ArrowRight } from "lucide-react";
import productImage from "@/assets/product.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Split background: cool grey left, deep icy blue right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(210 12% 90%) 0%, hsl(210 18% 92%) 40%, hsl(200 70% 82%) 65%, hsl(195 85% 70%) 100%)",
        }}
      />

      {/* Icy frost overlay on right side */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 85% 50%, hsl(190 100% 75% / 0.55) 0%, hsl(195 95% 80% / 0.3) 35%, transparent 65%)",
        }}
      />

      {/* Bright icy glow behind product */}
      <div
        className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(185 100% 85% / 0.85) 0%, hsl(195 95% 75% / 0.45) 40%, transparent 70%)",
        }}
      />

      {/* Top frost highlight */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl bg-cyan-300/40" />

      {/* Bottom icy glow */}
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl bg-sky-400/25" />

      {/* Frost crystals / snowflakes (subtle SVG sparkles) */}
      <svg className="absolute top-12 right-[30%] w-6 h-6 text-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <svg className="absolute top-1/3 right-[8%] w-4 h-4 text-cyan-100/90 drop-shadow-[0_0_6px_rgba(207,250,254,0.9)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
      </svg>
      <svg className="absolute bottom-20 right-[40%] w-5 h-5 text-white/70 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
      </svg>
      <svg className="absolute top-2/3 right-[20%] w-3 h-3 text-cyan-50/80 drop-shadow-[0_0_5px_rgba(236,254,255,0.9)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
      </svg>
      <svg className="absolute top-24 right-[55%] w-4 h-4 text-white/60 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
      </svg>

      {/* Tiny ice particles */}
      <div className="absolute top-20 right-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
      <div className="absolute top-1/2 right-[35%] w-1 h-1 rounded-full bg-cyan-100 shadow-[0_0_8px_rgba(207,250,254,1)]" />
      <div className="absolute bottom-32 right-[18%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
      <div className="absolute top-40 right-[50%] w-1 h-1 rounded-full bg-sky-100 shadow-[0_0_8px_rgba(224,242,254,1)]" />

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
