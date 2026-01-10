const BrandValueSection = () => {
  return (
    <section className="section-supporting bg-background">
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pain Slows You Down.{" "}
            <span className="gradient-text">TERRAFREEZE™</span>{" "}
            Helps You Take Control Again.
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
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
