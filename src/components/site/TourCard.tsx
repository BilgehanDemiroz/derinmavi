import { Link } from "@tanstack/react-router";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Tour } from "@/data/tours";
import { useTranslation } from "react-i18next";

export function TourCard({ tour }: { tour: Tour }) {
  const { t } = useTranslation();
  return (
    <Link to="/tours/$tourId" params={{ tourId: tour.id }} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-muted">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-sand/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <span className="eyebrow text-gold">{t(tour.categoryLabel)}</span>
        <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
          <Clock size={12} /> {t(tour.duration)}
        </span>
      </div>
      <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors">
        {t(tour.title)}
      </h3>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{t(tour.route)}</p>

    </Link>
  );
}
