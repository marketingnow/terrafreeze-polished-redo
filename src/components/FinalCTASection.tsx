import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stop Letting Pain Decide Your Day
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Relief shouldn't be complicated — or disappointing.
          </p>

          <a href="#buy" className="btn-primary text-lg group">
            Get Relief Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
