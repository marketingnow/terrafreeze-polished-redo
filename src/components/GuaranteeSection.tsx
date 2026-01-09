import { ShieldCheck, ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background" id="guarantee">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(215 50% 18%) 0%, hsl(200 85% 30%) 100%)"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Try TERRAFREEZE™ Risk-Free for 60 Days
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                If you don't feel relief, return it for a full refund.
                <br />
                <span className="font-medium text-white">No hassle. No fine print.</span>
              </p>

              <a href="#buy" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-elevated group" style={{ borderRadius: "4px" }}>
                Try It Risk-Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
