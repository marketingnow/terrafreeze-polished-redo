import { X, ArrowRight } from "lucide-react";

const problems = [
  "Strong medicinal smells",
  "Relief that fades too fast",
  "Greasy, uncomfortable application",
  "Weak results on joint pain",
];

const ProblemSolutionSection = () => {
  return (
    <section className="section-padding bg-background" id="how-it-works">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          {/* Problem Block */}
          <div className="glass-card rounded-3xl p-8 lg:p-12 mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              If you've tried other creams, you already know the frustration:
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                >
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex justify-center my-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <ArrowRight className="w-6 h-6 text-primary-foreground rotate-90" />
            </div>
          </div>

          {/* Solution Block */}
          <div 
            className="rounded-3xl p-8 lg:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(200 85% 45% / 0.1) 0%, hsl(215 50% 18% / 0.05) 100%)"
            }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              TERRAFREEZE™ was formulated to fix exactly that.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A premium pain relief cream that delivers consistent, lasting comfort without the drawbacks of typical alternatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
