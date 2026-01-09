import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does it work for joint pain?",
    answer:
      "Yes! TERRAFREEZE™ is specifically formulated to target joint pain, including knee, shoulder, hip, and elbow discomfort. The cooling-then-soothing action penetrates deep to provide relief where you need it most.",
  },
  {
    question: "Is it just another menthol cream?",
    answer:
      "TERRAFREEZE™ goes beyond basic menthol creams. Our advanced formula combines cooling relief with soothing botanicals and active ingredients that work together to provide longer-lasting comfort without the harsh medicinal smell.",
  },
  {
    question: "How often can I use it?",
    answer:
      "You can safely apply TERRAFREEZE™ up to 3-4 times daily. It's designed for regular use and is gentle enough for daily application on sore muscles and stiff joints.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "We offer a 60-day money-back guarantee. If you're not completely satisfied with your results, simply contact us for a full refund — no questions asked. We're confident in TERRAFREEZE™, and we want you to be too.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30" id="ingredients">
      <div className="content-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about TERRAFREEZE™
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 last:border-0"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
