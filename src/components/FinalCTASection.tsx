import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-supporting bg-secondary/40">
      <div className="content-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Stop Letting Pain Decide Your Day
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Relief shouldn't be complicated — or disappointing.
          </p>

          <a href="#buy" className="btn-primary group">
            Get Relief Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
