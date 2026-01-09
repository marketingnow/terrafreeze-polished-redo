const BrandValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pain Slows You Down.{" "}
            <span className="gradient-text">TERRAFREEZE™</span>{" "}
            Helps You Take Control Again.
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Most pain relief creams promise relief — few actually deliver it consistently.
            TERRAFREEZE™ was created for people who don't want to rely on pills, don't want 
            greasy messes, and don't want to "just live with it" anymore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandValueSection;
