import { Star, Check, ArrowRight } from "lucide-react";
import productImage from "@/assets/product.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Base: clean white → icy blue, deeper on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(0 0% 100%) 0%, hsl(205 50% 96%) 38%, hsl(200 75% 86%) 65%, hsl(202 80% 72%) 90%, hsl(208 75% 60%) 100%)",
        }}
      />

      {/* Right column: deep icy crystalline wash */}
      <div
        className="absolute inset-y-0 right-0 w-[55%]"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 70% 50%, hsl(200 90% 75% / 0.65) 0%, hsl(208 80% 60% / 0.35) 45%, transparent 80%)",
        }}
      />

      {/* Bright frost halo behind jar */}
      <div
        className="absolute top-1/2 right-[14%] -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(190 100% 92% / 0.9) 0%, hsl(200 85% 80% / 0.45) 45%, transparent 75%)",
        }}
      />

      {/* === FROSTED ICE SHARDS — RIGHT SIDE === */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%]"
        style={{
          maskImage: "linear-gradient(to left, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, black 55%, transparent 100%)",
        }}
      >
        <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <linearGradient id="iceShard" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(195 100% 98%)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="hsl(210 80% 70%)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="iceShardDeep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(205 90% 85%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(215 70% 35%)" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          {/* Top right shards */}
          <polygon points="600,0 600,260 360,40" fill="url(#iceShard)" />
          <polygon points="600,80 600,320 420,120" fill="url(#iceShardDeep)" opacity="0.55" />
          <polygon points="540,0 600,0 600,180 460,30" fill="url(#iceShard)" opacity="0.7" />
          <polygon points="600,200 600,360 480,220" fill="url(#iceShard)" opacity="0.5" />
          {/* Bottom right shards */}
          <polygon points="600,600 600,400 420,600" fill="url(#iceShardDeep)" opacity="0.5" />
          <polygon points="600,520 600,600 500,600" fill="url(#iceShard)" opacity="0.6" />
          <polygon points="600,440 600,600 360,600" fill="url(#iceShard)" opacity="0.35" />
          {/* Crystalline edge highlights */}
          <polyline points="600,0 360,40 540,180 380,220 600,260" fill="none" stroke="hsl(195 100% 100%)" strokeOpacity="0.6" strokeWidth="1.2" />
          <polyline points="600,400 420,600" fill="none" stroke="hsl(195 100% 100%)" strokeOpacity="0.5" strokeWidth="1" />
          <polyline points="600,200 480,220 600,360" fill="none" stroke="hsl(195 100% 100%)" strokeOpacity="0.45" strokeWidth="1" />
          {/* Frost cracks */}
          <g stroke="hsl(200 100% 98%)" strokeOpacity="0.55" strokeWidth="0.8" fill="none">
            <path d="M600 50 L470 110 L380 90 L320 130" />
            <path d="M470 110 L460 170" />
            <path d="M380 90 L350 50" />
            <path d="M600 540 L470 510 L400 540" />
            <path d="M470 510 L490 460" />
          </g>
        </svg>
      </div>

      {/* Snowflakes on right side */}
      <svg className="absolute top-[12%] right-[28%] w-7 h-7 text-white/90 drop-shadow-[0_0_10px_rgba(186,230,253,0.95)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        <path d="M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l-2 2" />
      </svg>
      <svg className="absolute top-[28%] right-[6%] w-5 h-5 text-cyan-50 drop-shadow-[0_0_8px_rgba(207,250,254,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        <path d="M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2" />
      </svg>
      <svg className="absolute bottom-[18%] right-[36%] w-6 h-6 text-white/85 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        <path d="M12 5l-2 2M12 5l2 2M5 12l2-2M19 12l-2-2" />
      </svg>
      <svg className="absolute top-[55%] right-[20%] w-4 h-4 text-cyan-100/90 drop-shadow-[0_0_6px_rgba(207,250,254,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
      <svg className="absolute top-[8%] right-[12%] w-4 h-4 text-white/80 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
      <svg className="absolute bottom-[8%] right-[18%] w-5 h-5 text-cyan-50/90 drop-shadow-[0_0_8px_rgba(224,242,254,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        <path d="M12 5l-2 2M12 5l2 2" />
      </svg>

      {/* Ice sparkle particles */}
      <div className="absolute top-[20%] right-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" />
      <div className="absolute top-[45%] right-[32%] w-1 h-1 rounded-full bg-cyan-100 shadow-[0_0_8px_rgba(207,250,254,1)]" />
      <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" />
      <div className="absolute top-[40%] right-[10%] w-1 h-1 rounded-full bg-sky-100 shadow-[0_0_8px_rgba(224,242,254,1)]" />
      <div className="absolute bottom-[45%] right-[28%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />

      {/* Bottom-left subtle frost wisp */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[28%] h-[40%]"
        style={{
          maskImage: "radial-gradient(ellipse 100% 100% at 0% 100%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 0% 100%, black 0%, transparent 70%)",
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
          <polygon points="0,400 0,260 160,400" fill="hsl(200 70% 75%)" fillOpacity="0.2" />
          <polygon points="0,400 0,330 90,400" fill="hsl(195 80% 85%)" fillOpacity="0.3" />
          <polyline points="0,260 160,400" fill="none" stroke="hsl(195 100% 100%)" strokeOpacity="0.45" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative content-container py-8 lg:py-10">
        {/* MOBILE-ONLY: rating + headline above image */}
        <div className="lg:hidden mb-6">
          <div className="flex flex-col items-start gap-1.5 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} strokeWidth={0} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-heading text-sm font-medium text-foreground">
              538,000+ Pain Free Adults And Counting
            </span>
          </div>

          <h1 className="font-display font-medium text-foreground leading-[1.1]" style={{ fontSize: "45px" }}>
            Finally Move Without Pain —{" "}
            <span className="gradient-text">
              Without Pills, Prescriptions, or Doctor Visits
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left Content (desktop) / Below image (mobile) */}
          <div className="order-2 lg:order-1 stagger-children">
            {/* Rating badge - desktop only */}
            <div className="hidden lg:inline-flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} strokeWidth={0} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-heading text-sm font-medium text-foreground">
                538,000+ Pain Free Adults And Counting
              </span>
            </div>

            {/* Headline - desktop only */}
            <h1 className="hidden lg:block font-display font-medium text-foreground leading-[1.1] mb-3" style={{ fontSize: "45px" }}>
              Finally Move Without Pain —{" "}
              <span className="gradient-text">
                Without Pills, Prescriptions, or Doctor Visits
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-display text-black font-medium leading-relaxed mb-4 max-w-lg" style={{ fontSize: "20px" }}>
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
                  <span className="font-display text-black font-medium" style={{ fontSize: "18px" }}>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col gap-2 items-stretch">
              <a href="#buy" className="btn-primary group w-full justify-center py-4 px-4 sm:px-6 flex items-center rounded-md text-lg sm:text-2xl whitespace-nowrap font-heading font-bold">
                TRY TERRAFREEZE NOW
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="font-heading text-sm text-black font-medium text-center">
                Try Now Risk Free • 100% Money Back Guarantee
              </p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Floating testimonial - desktop only */}
              <div className="hidden lg:block absolute -top-2 -left-2 lg:-left-6 z-20 glass-card rounded-lg p-3 max-w-[220px] animate-float">
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} strokeWidth={0} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="font-heading text-xs text-foreground leading-snug italic">
                  "Finally something that works on my knees without burning."
                </p>
                <p className="font-heading text-[10px] text-muted-foreground mt-1.5">— Verified Customer</p>
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
