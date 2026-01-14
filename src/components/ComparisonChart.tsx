import { Check, X, Zap, Layers, Heart, Shield, FlaskConical } from "lucide-react";

const comparisonData = [
  {
    icon: Zap,
    feature: "Relief you can actually feel — fast",
    terrafreeze: "Cooling relief hits in minutes, not \"eventually.\"",
    others: "Weak, delayed, or you're left wondering if it's even working.",
  },
  {
    icon: Layers,
    feature: "Handles more than one kind of pain",
    terrafreeze: "Works on muscle aches, joint stiffness, nerve discomfort, arthritis, and inflammation — all at once.",
    others: "Built for one thing only; everything else is a gamble.",
  },
  {
    icon: Heart,
    feature: "Doesn't just cover it up — helps you heal",
    terrafreeze: "Tackles inflammation and supports tissue recovery, not just surface-level numbing.",
    others: "Temporary mask that wears off without fixing anything underneath.",
  },
  {
    icon: Shield,
    feature: "No painful burn or angry skin",
    terrafreeze: "Soothing cool sensation without harsh sting or redness.",
    others: "Burns like fire, irritates sensitive skin, or causes rashes.",
  },
  {
    icon: FlaskConical,
    feature: "Backed by science, not just hype",
    terrafreeze: "Research-validated ingredients chosen for proven pain-relief pathways.",
    others: "Trendy buzzwords and fillers with little to no real evidence.",
  },
];

const ComparisonChart = () => {
  return (
    <section className="section-supporting bg-background">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
            <span className="gradient-text">TERRAFREEZE™</span> vs Other Pain Relief Creams
          </h2>

          {/* Desktop 3-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            {/* Column 1: Features */}
            <div className="glass-card rounded-2xl p-6 bg-muted/30">
              <h3 className="font-heading font-bold text-muted-foreground text-sm uppercase tracking-wider mb-6 text-center">
                What Actually Matters to You
              </h3>
              <div className="space-y-6">
                {comparisonData.map((row, index) => (
                  <div key={index} className="flex items-start gap-3 min-h-[80px]">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <row.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-tight">
                      {row.feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: TERRAFREEZE (Highlighted) */}
            <div className="glass-card rounded-2xl p-6 bg-primary/5 border-2 border-primary/30 relative shadow-lg shadow-primary/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="font-heading font-bold text-primary text-base uppercase tracking-wider mb-6 text-center">
                TERRAFREEZE™
              </h3>
              <div className="space-y-6">
                {comparisonData.map((row, index) => (
                  <div key={index} className="flex items-start gap-3 min-h-[80px]">
                    <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm text-foreground leading-tight">
                      {row.terrafreeze}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Others */}
            <div className="glass-card rounded-2xl p-6 bg-muted/20">
              <h3 className="font-heading font-bold text-muted-foreground text-sm uppercase tracking-wider mb-6 text-center">
                Other Pain Relief Creams
              </h3>
              <div className="space-y-6">
                {comparisonData.map((row, index) => (
                  <div key={index} className="flex items-start gap-3 min-h-[80px]">
                    <div className="w-6 h-6 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" strokeWidth={3} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {row.others}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stacked Layout */}
          <div className="lg:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div key={index} className="glass-card rounded-xl p-5">
                {/* Feature Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <row.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {row.feature}
                  </p>
                </div>
                
                {/* TERRAFREEZE */}
                <div className="flex items-start gap-3 mb-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">TERRAFREEZE™</span>
                    <p className="text-sm text-foreground mt-1">{row.terrafreeze}</p>
                  </div>
                </div>
                
                {/* Others */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-5 h-5 rounded bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Others</span>
                    <p className="text-sm text-muted-foreground mt-1">{row.others}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;
