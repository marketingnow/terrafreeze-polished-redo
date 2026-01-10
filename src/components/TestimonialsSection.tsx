import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "My knee pain was keeping me up at night. Now I apply TerraFreeze before bed and wake up without that awful stiffness.",
    author: "Margaret T.",
    location: "Verified Buyer",
    highlight: "knee pain",
  },
  {
    quote: "I've tried every drugstore cream for my lower back. This is the only one that actually penetrates and lasts.",
    author: "Robert K.",
    location: "Verified Buyer",
    highlight: "lower back",
  },
  {
    quote: "After years of shoulder tension from desk work, I finally found something that gives me real relief without the greasy mess.",
    author: "Sandra M.",
    location: "Verified Buyer",
    highlight: "shoulder tension",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-major bg-secondary/30" id="reviews">
      <div className="content-container">
        <div className="text-center mb-10">
          {/* Large rating display */}
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2.5 bg-amber-50 rounded-full border border-amber-200/50">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-heading font-bold text-foreground text-lg">4.8/5</span>
            <span className="text-muted-foreground">from 10,000+ reviews</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Real People. Real Relief.
          </h2>
          <p className="text-muted-foreground">
            Hear from customers who finally found what works
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 lg:p-7 hover:shadow-elevated transition-all duration-300 relative ${
                index === 1 ? "md:-translate-y-2" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Stars - larger and more prominent */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-5 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
