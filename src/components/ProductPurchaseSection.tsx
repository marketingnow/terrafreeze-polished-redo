import { useState } from "react";
import { Star, Check, Truck, Package, RotateCcw, Flame } from "lucide-react";
import productImage from "@/assets/product.png";

type PackageOption = {
  id: number;
  jars: number;
  pricePerJar: number;
  totalPrice: number;
  badge?: { label: string; tone: "dark" | "amber" };
  cartUrl: string;
};

const packages: PackageOption[] = [
  {
    id: 1,
    jars: 1,
    pricePerJar: 29.95,
    totalPrice: 29.95,
    cartUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32168",
  },
  {
    id: 3,
    jars: 3,
    pricePerJar: 23.32,
    totalPrice: 69.95,
    badge: { label: "BEST SELLER", tone: "dark" },
    cartUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32169",
  },
  {
    id: 6,
    jars: 6,
    pricePerJar: 19.83,
    totalPrice: 119.0,
    badge: { label: "BEST VALUE", tone: "amber" },
    cartUrl: "https://terrafreeze.com/checkout/?add-to-cart=19140&variation_id=32170",
  },
];

const ProductPurchaseSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(3);
  const selected = packages.find((p) => p.id === selectedPackage)!;

  return (
    <section className="section-major bg-background" id="buy">
      <div className="content-container">
        <div className="max-w-2xl mx-auto">
          {/* Title + Reviews */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
              TERRAFREEZE™
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-muted-foreground text-base">53,805 Reviews</span>
            </div>
          </div>

          {/* Quantity Select */}
          <p className="text-foreground text-lg mb-3">Select quantity:</p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <div key={pkg.id} className="relative pt-3">
                  {pkg.badge && (
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold tracking-wider rounded z-10 ${
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
                    className={`w-full rounded-2xl border-2 p-4 transition-all text-center ${
                      isSelected
                        ? "border-foreground bg-orange-50/60"
                        : "border-border bg-card hover:border-foreground/40"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2 h-24">
                      <img
                        src={productImage}
                        alt={`${pkg.jars} jar${pkg.jars > 1 ? "s" : ""}`}
                        className="h-full object-contain"
                        style={{
                          transform: pkg.jars === 6 ? "scale(1.1)" : "scale(1)",
                        }}
                      />
                    </div>
                    <p className="font-heading font-bold text-foreground text-base">
                      {pkg.jars} {pkg.jars === 1 ? "Jar" : "Jars"}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      ${pkg.pricePerJar.toFixed(2)} each
                    </p>
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
            className="block w-full text-center font-bold tracking-wide text-white py-5 rounded-md transition-all hover:opacity-90 mb-6"
            style={{
              fontSize: "22px",
              backgroundColor: "hsl(160 50% 60%)",
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
                60-Day Money-<br />Back Guarantee
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
