import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Relief you can actually feel — fast",
    terrafreeze: "Cooling relief hits in minutes, not \"eventually.\"",
    others: "Weak, delayed, or you're left wondering if it's even working.",
  },
  {
    feature: "Handles more than one kind of pain",
    terrafreeze: "Works on muscle aches, joint stiffness, nerve discomfort, arthritis, and inflammation — all at once.",
    others: "Built for one thing only; everything else is a gamble.",
  },
  {
    feature: "Doesn't just cover it up — helps you heal",
    terrafreeze: "Tackles inflammation and supports tissue recovery, not just surface-level numbing.",
    others: "Temporary mask that wears off without fixing anything underneath.",
  },
  {
    feature: "No painful burn or angry skin",
    terrafreeze: "Soothing cool sensation without harsh sting or redness.",
    others: "Burns like fire, irritates sensitive skin, or causes rashes.",
  },
  {
    feature: "Backed by science, not just hype",
    terrafreeze: "Research-validated ingredients chosen for proven pain-relief pathways.",
    others: "Trendy buzzwords and fillers with little to no real evidence.",
  },
];

const ComparisonChart = () => {
  return (
    <section className="section-supporting bg-background">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            <span className="gradient-text">TERRAFREEZE™</span> vs Other Pain Relief Creams
          </h2>

          {/* Desktop 3-Column Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-3">
            {/* Column 1: Features (Left) */}
            <div className="bg-muted/40 rounded-2xl p-5">
              <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-5 text-center">
                Feature
              </h3>
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="flex items-start gap-2 min-h-[72px] py-2 border-b border-border/30 last:border-0">
                    <div className="w-5 h-5 rounded bg-muted-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {row.feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: TERRAFREEZE (Center - Hero) */}
            <div className="bg-primary rounded-2xl p-5 shadow-xl shadow-primary/20 relative z-10 scale-[1.02]">
              <h3 className="font-heading font-bold text-primary-foreground text-base uppercase tracking-wider mb-5 text-center">
                TERRAFREEZE™
              </h3>
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="flex items-start gap-2 min-h-[72px] py-2 border-b border-primary-foreground/20 last:border-0">
                    <div className="w-5 h-5 rounded bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                    </div>
                    <p className="text-sm text-primary-foreground leading-snug">
                      {row.terrafreeze}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Others (Right) */}
            <div className="bg-muted/40 rounded-2xl p-5">
              <h3 className="font-heading font-bold text-muted-foreground text-sm uppercase tracking-wider mb-5 text-center">
                Other Pain Relief Creams
              </h3>
              <div className="space-y-4">
                {comparisonData.map((row, index) => (
                  <div key={index} className="flex items-start gap-2 min-h-[72px] py-2 border-b border-border/30 last:border-0">
                    <div className="w-5 h-5 rounded bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-destructive" strokeWidth={3} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {row.others}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stacked Layout */}
          <div className="md:hidden space-y-3">
            {comparisonData.map((row, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                {/* Feature Header */}
                <div className="bg-muted/40 p-3 flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-muted-foreground/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  </div>
                  <p className="text-xs font-semibold text-foreground">
                    {row.feature}
                  </p>
                </div>
                
                {/* TERRAFREEZE */}
                <div className="bg-primary p-3 flex items-start gap-2">
                  <div className="w-4 h-4 rounded bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary-foreground/80 uppercase tracking-wider">TERRAFREEZE™</span>
                    <p className="text-xs text-primary-foreground mt-0.5">{row.terrafreeze}</p>
                  </div>
                </div>
                
                {/* Others */}
                <div className="bg-muted/30 p-3 flex items-start gap-2">
                  <div className="w-4 h-4 rounded bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Others</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{row.others}</p>
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
