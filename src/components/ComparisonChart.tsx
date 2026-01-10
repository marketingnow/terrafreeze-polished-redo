import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  {
    feature: "Fast Relief",
    terrafreeze: true,
    drugstore: "partial",
    pills: false,
  },
  {
    feature: "Non-Greasy",
    terrafreeze: true,
    drugstore: false,
    pills: true,
  },
  {
    feature: "Daily Use Safe",
    terrafreeze: true,
    drugstore: true,
    pills: false,
  },
  {
    feature: "No Harsh Smell",
    terrafreeze: true,
    drugstore: false,
    pills: true,
  },
  {
    feature: "Targeted Application",
    terrafreeze: true,
    drugstore: "partial",
    pills: false,
  },
];

const StatusIcon = ({ status }: { status: boolean | string }) => {
  if (status === true) {
    return (
      <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
        <Check className="w-4 h-4 text-primary" />
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
        <Minus className="w-4 h-4 text-amber-600" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
      <X className="w-4 h-4 text-muted-foreground" />
    </div>
  );
};

const ComparisonChart = () => {
  return (
    <section className="section-supporting bg-background">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            See How <span className="gradient-text">TERRAFREEZE™</span> Compares
          </h2>

          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-4 lg:p-6 bg-secondary/50 border-b border-border/50">
              <div className="text-sm font-medium text-muted-foreground"></div>
              <div className="text-center">
                <span className="font-heading font-bold text-primary text-sm lg:text-base">
                  TERRAFREEZE™
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Drugstore Creams</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Pills</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 p-4 lg:px-6 items-center ${
                  index !== comparisonData.length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                <div className="text-sm lg:text-base font-medium text-foreground">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.terrafreeze} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.drugstore} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.pills} />
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
