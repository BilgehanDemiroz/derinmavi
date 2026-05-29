import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PortfolioLogo } from "./PortfolioLogo";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 max-w-sm">
          <div className="font-serif italic text-3xl font-bold mb-5">
            Derin <span className="text-gold">Mavi</span>
          </div>
          <p className="text-xs leading-relaxed text-background/60 mb-8">{t("footer.desc")}</p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/derinmavitur?igsh=czFjd25yNG5objVw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/45 hover:text-gold hover:border-gold transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-6">{t("footer.exp")}</h4>
          <ul className="text-sm text-background/70 flex flex-col gap-3">
            <li>
              <Link to="/tours" className="hover:text-background">
                {t("footer.tours.daily")}
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-background">
                {t("footer.tours.hourly")}
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-background">
                {t("footer.tours.sunset")}
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-background">
                {t("footer.tours.events")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-6">{t("footer.contact")}</h4>
          <ul className="text-sm text-background/70 flex flex-col gap-3">
            <li className="flex gap-2 items-start">
              <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
              <a
                href="https://www.google.com/maps/place/Derin+Mavi+Tur+Teknesi/@38.6704853,26.7523259,17z/data=!3m1!4b1!4m6!3m5!1s0x14bbb50125992395:0x16093c4ef893af4d!8m2!3d38.6704853!4d26.7549008!16s%2Fg%2F11zc0mlblq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors hover:underline underline-offset-4"
              >
                {t("contact.info.marina.value")}
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <Phone size={14} className="mt-1 shrink-0 text-gold" />
              <div className="flex flex-col gap-1">
                <a href="tel:+905338990102" className="hover:text-background transition-colors">
                  +90 533 899 01 02
                </a>
                <a href="tel:+905326954243" className="hover:text-background transition-colors">
                  +90 532 695 42 43
                </a>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={14} className="shrink-0 text-gold" />
              <a href="mailto:focaderinmavi@gmail.com" className="hover:text-background transition-colors">
                focaderinmavi@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-background/40">
        <p>
          © {new Date().getFullYear()} Derin Mavi Tekne Turu. {t("footer.rights")}
        </p>

        {/* Tasarımcı İmzası (Designed by Bilgehan Demiröz) */}
        <a
          href="https://portfolio-website-design-kohl.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-background/85 sm:text-background/35 hover:text-gold transition-colors duration-300 group py-1.5"
        >
          <PortfolioLogo className="w-6 h-6 sm:w-5 sm:h-5 opacity-90 sm:opacity-45 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
          <span className="font-semibold tracking-[0.2em] text-[10px] sm:text-[9px] transition-colors">{t("footer.designed_by")}</span>
        </a>

        <div className="flex gap-6">
          <span>{t("footer.privacy")}</span>
          <span>{t("footer.terms")}</span>
        </div>
      </div>
    </footer>
  );
}
