import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally something that works on my knees without burning.",
    author: "Verified Customer",
  },
  {
    quote: "I use it before bed and wake up less stiff.",
    author: "Verified Customer",
  },
  {
    quote: "Way better than the drugstore brands.",
    author: "Verified Customer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30" id="reviews">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real People. Real Relief.
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <p className="text-sm text-muted-foreground font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
