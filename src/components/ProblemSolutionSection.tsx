import { X, ArrowRight } from "lucide-react";

const problems = [
  "Strong medicinal smells",
  "Relief that fades too fast",
  "Greasy, uncomfortable application",
  "Weak results on joint pain",
];

const ProblemSolutionSection = () => {
  return (
    <section className="section-supporting bg-background" id="how-it-works">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          {/* Problem Block */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 mb-6">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
              If you've tried other creams, you already know the frustration:
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex justify-center my-5">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
              <ArrowRight className="w-5 h-5 text-primary-foreground rotate-90" />
            </div>
          </div>

          {/* Solution Block */}
          <div 
            className="rounded-2xl p-6 lg:p-8 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(200 85% 45% / 0.08) 0%, hsl(215 50% 18% / 0.04) 100%)"
            }}
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
              TERRAFREEZE™ was formulated to fix exactly that.
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A premium pain relief cream that delivers consistent, lasting comfort without the drawbacks of typical alternatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
