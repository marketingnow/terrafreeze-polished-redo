import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-announcement text-announcement-foreground py-2.5 px-4 relative">
      <div className="container flex items-center justify-center gap-2 text-sm font-medium">
        <span>🔥 NEW YEAR SALE - SAVE UP TO 40% + FREE SHIPPING</span>
        <span className="hidden sm:inline text-announcement-foreground/80">|</span>
        <span className="hidden sm:inline text-announcement-foreground/90">Limited Time Offer</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-announcement-foreground/10 rounded-sm transition-colors"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
