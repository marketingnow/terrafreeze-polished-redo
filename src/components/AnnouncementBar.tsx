import { X, Truck, Shield, Users } from "lucide-react";
import { useState } from "react";
const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return <div className="bg-announcement text-announcement-foreground py-2.5 px-4 relative">
      <div className="content-container flex items-center justify-center gap-6 text-sm font-medium">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4" />
          <span>Free Shipping Today</span>
        </div>
        <span className="hidden sm:inline opacity-40">•</span>
        <div className="hidden sm:flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <span>180-Day Pain Relief Guarantee</span>
        </div>
        <span className="hidden md:inline opacity-40">•</span>
        <div className="hidden md:flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>Trusted by 10,000+ Customers</span>
        </div>
      </div>
      <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded transition-colors" aria-label="Close announcement">
        <X className="h-4 w-4" />
      </button>
    </div>;
};
export default AnnouncementBar;