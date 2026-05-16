import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { useTranslation } from "react-i18next";
import "@/i18n"; // Ensure i18n is initialized

const links = [
  { to: "/", labelKey: "nav.home" },
  { to: "/tours", labelKey: "nav.tours" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/contact", labelKey: "nav.contact" },
] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-sand/85 backdrop-blur-xl border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className={`font-serif italic text-2xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}
        >
          Derin <span className="text-gold">Mavi</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.labelKey)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className={`hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest border px-2 py-1 hover:bg-gold hover:border-gold transition-colors ${
              scrolled ? "border-foreground/20 text-foreground" : "border-white/30 text-white"
            }`}
          >
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-foreground text-background px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-gold transition-colors"
          >
            {t("nav.reservation")}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sand border-b border-border reveal-up">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-foreground/80 hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {t(l.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
