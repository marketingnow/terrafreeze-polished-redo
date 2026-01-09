import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logoImage}
              alt="TerraFreeze"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-accent-foreground/70">
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Returns
            </a>
          </div>
          
          <p className="text-sm text-accent-foreground/60">
            © 2025 TerraFreeze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
