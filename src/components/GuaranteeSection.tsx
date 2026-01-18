import { ShieldCheck, ArrowRight } from "lucide-react";
const GuaranteeSection = () => {
  return <section className="section-supporting bg-background" id="guarantee">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(215 50% 18%) 0%, hsl(200 85% 30%) 100%)"
        }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Try TERRAFREEZE Risk-Free for 60 Days
              </h2>
              
              <p className="text-base lg:text-lg text-white/80 mb-6 max-w-xl mx-auto">
                If you don't feel relief, return it for a full refund.
                <br />
                <span className="font-medium text-white">No hassle. No fine print.</span>
              </p>

              <a href="#buy" className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-accent font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-elevated group" style={{
              borderRadius: "4px"
            }}>
                Try It Risk-Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GuaranteeSection;