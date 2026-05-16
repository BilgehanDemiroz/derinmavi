import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function MobileBookingBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-foreground/95 backdrop-blur text-background border-t border-background/10 p-3 flex gap-2">
      <a
        href="tel:+905326954243"
        aria-label="Telefon"
        className="flex items-center justify-center w-12 h-12 border border-background/20"
      >
        <Phone size={16} />
      </a>
      <Link
        to="/contact"
        className="flex-1 flex items-center justify-center bg-gold text-foreground text-xs font-bold uppercase tracking-widest"
      >
        Hemen Rezervasyon
      </Link>
    </div>
  );
}
