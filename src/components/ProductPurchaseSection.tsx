import { useState } from "react";
import { Star, Check, Truck, Package, RotateCcw, Flame } from "lucide-react";
import productImage from "@/assets/product.png";
import product3Pack from "@/assets/product-3pack.png";
import product6Pack from "@/assets/product-6pack.png";

type PackageOption = {
  id: number;
  jars: number;
  title: string;
  tagline: string;
  pricePerJar: number;
  totalPrice: number;
  regularPrice: number;
  badge?: { label: string; tone: "dark" | "amber" };
  cartUrl: string;
  image: string;
};

const packages: PackageOption[] = [
  {
    id: 1,
    jars: 1,
    title: "TERRAFREEZE 2oz Jar",
    tagline: "Ideal for trial or occasional use.",
    pricePerJar: 29.95,
    totalPrice: 29.95,
    regularPrice: 49.95,
    cartUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32168",
    image: productImage,
  },
  {
    id: 3,
    jars: 3,
    title: "TERRAFREEZE 3-Pack",
    tagline: "Perfect for ongoing relief.",
    pricePerJar: 23.32,
    totalPrice: 69.95,
    regularPrice: 119.0,
    badge: { label: "BEST SELLER", tone: "dark" },
    cartUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32169",
    image: product3Pack,
  },
  {
    id: 6,
    jars: 6,
    title: "TERRAFREEZE 6-Pack",
    tagline: "Maximum value for long-term relief.",
    pricePerJar: 19.83,
    totalPrice: 119.0,
    regularPrice: 234.0,
    badge: { label: "BEST VALUE", tone: "amber" },
    cartUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32170",
    image: product6Pack,
  },
];

const ProductPurchaseSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(3);
  const selected = packages.find((p) => p.id === selectedPackage)!;

  return (
    <section className="section-major bg-background" id="buy">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          {/* Title + Reviews */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-muted-foreground text-lg">538,000+ Pain Free Adults And Counting</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Stock up. Save more.
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              From workout soreness to everyday aches, TERRAFREEZE delivers fast, targeted relief the whole household can count on.
            </p>
          </div>

          {/* Quantity Select */}
          <p className="text-foreground text-xl mb-4 font-medium">Select quantity:</p>
          <div className="grid grid-cols-3 gap-4 sm:gap-5 mb-10 items-stretch">
            {packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <div key={pkg.id} className="relative pt-3">
                  {pkg.badge && (
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 text-xs font-bold tracking-wider rounded-t-md ${
                        pkg.badge.tone === "dark"
                          ? "bg-foreground text-background"
                          : "bg-amber-400 text-foreground"
                      }`}
                    >
                      {pkg.badge.label}
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full h-full rounded-2xl rounded-tl-2xl rounded-tr-2xl border-2 p-5 sm:p-6 pt-7 transition-all text-center ${
                      isSelected
                        ? "border-foreground bg-orange-50/60"
                        : "border-border bg-card hover:border-foreground/40"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-4 h-40 sm:h-44">
                      <img
                        src={pkg.image}
                        alt={`${pkg.jars} jar${pkg.jars > 1 ? "s" : ""}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="font-heading font-bold text-foreground text-base sm:text-lg leading-tight">
                      {pkg.title}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 leading-snug min-h-[40px]">
                      {pkg.tagline}
                    </p>
                    <div className="flex items-baseline justify-center gap-2 mt-3">
                      <span className="text-sm text-muted-foreground line-through">
                        ${pkg.regularPrice.toFixed(2)}
                      </span>
                      <span className="text-accent font-bold text-xl">
                        ${pkg.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Purchase Type */}
          <p className="text-foreground text-lg mb-3">Select your purchase type:</p>
          <div className="border-2 border-foreground rounded-2xl p-5 bg-orange-50/60 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
              </div>
              <span className="font-semibold text-foreground text-lg">One Time</span>
              <span className="text-foreground text-lg ml-2">${selected.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={selected.cartUrl}
            className="block w-full text-center font-bold tracking-wide text-primary-foreground bg-primary py-5 rounded-md transition-all hover:opacity-90 mb-6"
            style={{
              fontSize: "22px",
            }}
          >
            ADD TO CART — ${selected.totalPrice.toFixed(2)}
          </a>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 mb-6 pt-2">
            <div className="flex flex-col items-center text-center gap-2">
              <Package className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground leading-tight">
                Free shipping on<br />orders $99+
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-x border-border">
              <Truck className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground leading-tight">
                4-7 Day<br />US Delivery
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground leading-tight">
                180-Day Money-<br />Back Guarantee
              </span>
            </div>
          </div>

          {/* Selling fast banner */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 flex items-center justify-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-foreground">
              Selling fast — <span className="font-semibold">363 orders in the last 24 hours!</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPurchaseSection;
