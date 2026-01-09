import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.jpg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Shop", href: "#shop" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logoImage} 
              alt="TerraFreeze" 
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-nav-link hover:text-nav-link-hover font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex">
              <User className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-nav-link hover:text-nav-link-hover hover:bg-muted rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 px-4">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
