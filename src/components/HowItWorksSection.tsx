import { ArrowRight } from "lucide-react";
import applyImage from "@/assets/howitworks-apply.png";
import absorbsImage from "@/assets/howitworks-absorbs.jpg";
import reliefImage from "@/assets/howitworks-relief.jpg";

const steps = [
  {
    number: "1",
    title: "Apply",
    description:
      "Rub a small amount directly onto the painful area. A little goes a long way — no mess, no greasy residue, no strong smell.",
    image: applyImage,
    alt: "Jar of TERRAFREEZE pain relief cream with a small dollop",
  },
  {
    number: "2",
    title: "Absorbs Deep",
    description:
      "Emu Oil drives the active ingredients through all 7 layers of skin directly to the inflamed tissue — not just the surface like ordinary creams.",
    image: absorbsImage,
    alt: "Cross-section illustration of cream absorbing deep through skin layers",
  },
  {
    number: "3",
    title: "Feel Relief",
    description:
      "Menthol cools on contact while Methyl Salicylate increases blood flow to the area. Pain fades. Stiffness eases. Mobility returns.",
    image: reliefImage,
    alt: "Person moving freely with cooling blue relief glow on shoulder",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-supporting bg-background" id="how-it-works">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="font-display inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
              How It Works
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
            Fast Relief in 3 Simple Steps
          </h2>

          {/* Subheadline */}
          <p className="font-display text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg">
            No pills. No prescriptions. Just rub it on and feel the difference within minutes.
          </p>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-elevated transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7 flex-1 flex flex-col">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <p className="text-center text-sm text-muted-foreground mb-8">
            Results typically felt within 5–10 minutes. Safe for daily use.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a href="#buy" className="btn-primary group">
              Try TERRAFREEZE Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
