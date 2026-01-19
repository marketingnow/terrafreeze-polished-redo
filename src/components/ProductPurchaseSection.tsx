import { useState } from "react";
import { Star, Check, Truck, ShieldCheck, Lock } from "lucide-react";
import productImage from "@/assets/product.png";

const packages = [
  {
    id: 1,
    tubes: 1,
    label: "Try It",
    originalPrice: 99.99,
    price: 89.99,
    perTube: 89.99,
    popular: false
  },
  {
    id: 3,
    tubes: 3,
    label: "Best Value",
    originalPrice: 299.97,
    price: 199.99,
    perTube: 66.66,
    popular: true
  },
  {
    id: 6,
    tubes: 6,
    label: "Maximum Savings",
    originalPrice: 599.94,
    price: 349.99,
    perTube: 58.33,
    popular: false
  }
];

// Placeholder gallery images - you'll replace these with your actual images
const galleryImages = [
  productImage,
  productImage,
  productImage,
  productImage,
];

const ProductPurchaseSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(3);
  const [selectedImage, setSelectedImage] = useState(0);
  const selected = packages.find(p => p.id === selectedPackage)!;

  return (
    <section className="section-major bg-background" id="buy">
      <div className="content-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Product Image with Gallery */}
            <div className="relative lg:sticky lg:top-24">
              <div
                className="rounded-2xl p-6 lg:p-8"
                style={{
                  background: "linear-gradient(145deg, hsl(200 70% 97%) 0%, hsl(210 30% 96%) 100%)"
                }}
              >
                <img
                  src={galleryImages[selectedImage]}
                  alt="TerraFreeze Pain Relief Cream"
                  className="w-full max-w-xs mx-auto object-contain"
                />
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex gap-2 mt-4 justify-center">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Quote */}
              <div className="glass-card rounded-xl p-4 mt-4">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm italic">
                  "I was skeptical — but this worked when nothing else did."
                </p>
              </div>
            </div>

            {/* Purchase Options */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                TERRAFREEZE Pain Relief Cream
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-foreground">
                  ${selected.price.toFixed(2)}
                </span>
                <span className="text-base text-muted-foreground line-through">
                  ${selected.originalPrice.toFixed(2)}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                  Save ${(selected.originalPrice - selected.price).toFixed(2)}
                </span>
              </div>

              {/* Package Selector */}
              <div className="space-y-2 mb-6">
                {packages.map(pkg => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full p-3.5 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedPackage === pkg.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedPackage === pkg.id
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        >
                          {selectedPackage === pkg.id && (
                            <Check className="w-3 h-3 text-primary-foreground" />
                          )}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground text-sm">
                            {pkg.tubes} {pkg.tubes === 1 ? "Tube" : "Tubes"}
                          </span>
                          <span className="text-muted-foreground text-sm ml-2">
                            — {pkg.label}
                          </span>
                          {pkg.popular && (
                            <span className="ml-2 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded">
                              ⭐ Most Popular
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-foreground text-sm">
                          ${pkg.price.toFixed(2)}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          ${pkg.perTube.toFixed(2)}/tube
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <button className="btn-primary w-full text-base py-4 mb-4">
                Add to Cart — Get Relief Today
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>60-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPurchaseSection;