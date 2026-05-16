import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Anchor, Sun, Sunset, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-yacht.jpg";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/site/TourCard";
import { ReservationForm } from "@/components/site/ReservationForm";
import { BaysSection } from "@/components/site/BaysSection";
import { Faq } from "@/components/site/Faq";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Derin Mavi — Foça'da Premium Tekne Turları & Özel Yat" },
      {
        name: "description",
        content:
          "Foça İzmir'de günlük tekne turları, saatlik özel yat kiralama ve gün batımı turları. Lisanslı kaptan, lüks filo, kolay rezervasyon.",
      },
    ],
  }),
  component: HomePage,
});

function useSunsetCountdown() {
  const [str, setStr] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const sunset = new Date(now);
      sunset.setHours(20, 15, 0, 0);
      if (sunset.getTime() < now.getTime()) sunset.setDate(sunset.getDate() + 1);
      const diff = sunset.getTime() - now.getTime();
      const h = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const s = Math.floor((diff % 6e4) / 1000);
      setStr(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return str;
}

function HomePage() {
  const { t } = useTranslation();
  const sunset = useSunsetCountdown();
  const featured = tours.filter((t) => t.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Foça koylarında lüks yat"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl reveal-up">
          <span className="eyebrow text-white/90 mb-6 block">{t("home.eyebrow")}</span>
          <h1 className="font-serif text-5xl md:text-8xl text-white leading-[1.05] mb-8 text-balance">
            {t("home.title_1")} <br />
            <span className="italic font-medium text-gold-soft">{t("home.title_2")}</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 text-pretty">
            {t("home.desc")}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-hero-light w-full md:w-auto">
              {t("home.book")}
            </Link>
            <Link to="/tours" className="btn-hero-outline w-full md:w-auto">
              {t("home.explore")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden md:flex items-center gap-3 text-white/80 z-10">
          <div className="w-12 h-px bg-white/40" />
          <span className="text-[10px] uppercase tracking-[0.2em]">{t("home.scroll")}</span>
        </div>

      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              icon: Anchor,
              title: t("home.highlights.daily.title"),
              desc: t("home.highlights.daily.desc"),
            },
            {
              icon: Sun,
              title: t("home.highlights.hourly.title"),
              desc: t("home.highlights.hourly.desc"),
            },
            {
              icon: Sunset,
              title: t("home.highlights.sunset.title"),
              desc: t("home.highlights.sunset.desc"),
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-sand p-10 group hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <Icon className="text-gold mb-6" size={28} />
              <h3 className="font-serif text-2xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <span className="eyebrow text-gold mb-3 block">{t("home.featured.eyebrow")}</span>
            <h2 className="font-serif text-4xl md:text-5xl italic text-balance max-w-2xl">
              {t("home.featured.title")}
            </h2>
          </div>
          <Link
            to="/tours"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-foreground pb-1"
          >
            {t("home.featured.all")}{" "}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </section>

      <BaysSection />

      {/* SUNSET COUNTDOWN STRIP */}
      <section className="bg-foreground text-background py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Sunset className="text-gold" size={32} />
            <div>
              <p className="eyebrow text-gold mb-1">{t("home.countdown.eyebrow")}</p>
              <p className="font-serif text-3xl tracking-wide">{sunset || "—"}</p>
            </div>
          </div>
          <p className="text-sm text-background/60 max-w-md text-center md:text-right">
            {t("home.countdown.desc")}
          </p>
          <Link to="/contact" className="btn-hero-light">
            {t("home.countdown.book")}
          </Link>
        </div>
      </section>

      {/* RESERVATION + REVIEWS */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="eyebrow text-gold mb-3 block">{t("home.reservation.eyebrow")}</span>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-6 text-balance">
            {t("home.reservation.title_1")} <br />
            {t("home.reservation.title_2")}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            {t("home.reservation.desc")}
          </p>
        </div>

        <div className="bg-card p-10 shadow-card">
          <ReservationForm />
        </div>
      </section>

      <Faq />
    </>
  );
}
