import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, MapPin, Check, ArrowLeft } from "lucide-react";
import { getTour, tours } from "@/data/tours";
import { useTranslation } from "react-i18next";
import i18nInstance from "@/i18n";
import { ReservationForm } from "@/components/site/ReservationForm";

export const Route = createFileRoute("/tours/$tourId")({
  loader: ({ params }) => {
    const tour = getTour(params.tourId);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => {
    const tour = loaderData?.tour;
    const t = i18nInstance.t.bind(i18nInstance);
    if (!tour) return { meta: [{ title: t("meta.tours.title") }] };
    return {
      meta: [
        { title: `${t(tour.title)} — Derin Mavi` },
        { name: "description", content: t(tour.description) },
        { property: "og:title", content: t(tour.title) },
        { property: "og:description", content: t(tour.description) },
        { property: "og:image", content: tour.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-serif text-4xl mb-4">Tur bulunamadı</h1>
        <Link to="/tours" className="btn-ghost">
          Turlara Dön
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-[60vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-serif text-2xl mb-4">Bir hata oluştu</h1>
        <p className="text-sm text-muted-foreground mb-6">{error.message}</p>
        <button onClick={reset} className="btn-ghost">
          Tekrar Dene
        </button>
      </div>
    </div>
  ),
  component: TourDetail,
});

function TourDetail() {
  const { t } = useTranslation();
  const { tour } = Route.useLoaderData();
  const others = tours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <>
      <article className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={14} /> Tüm Turlar
          </Link>
          <span className="eyebrow text-gold mb-3 block">{t(tour.categoryLabel)}</span>
          <h1 className="font-serif text-4xl md:text-6xl italic mb-6 text-balance">
            {t(tour.title)}
          </h1>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-muted-foreground mb-10">
            <span className="flex items-center gap-2">
              <Clock size={14} /> {t(tour.duration)}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {t(tour.route)}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-0 mb-12 shadow-card overflow-hidden border border-border">
            <div className="lg:col-span-7 relative h-[400px] lg:h-auto">
              <img
                src={tour.image}
                alt={tour.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {tour.stops && tour.stops.length > 0 && (
              <div className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-center bg-card">
                <span className="eyebrow text-gold mb-3 block">Güzergah & Keşif Noktaları</span>
                <h3 className="font-serif text-4xl mb-8 italic text-balance">
                  Neler Göreceksiniz?
                </h3>
                <ul className="space-y-5">
                  {tour.stops.map((stop: string, i: number) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center shrink-0 text-gold font-serif text-sm group-hover:bg-gold group-hover:text-background transition-colors duration-300">
                        {i + 1}
                      </span>
                      <span className="text-lg font-serif text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {t(stop)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="text-base leading-relaxed text-foreground/80 mb-12 max-w-2xl">
            {t(tour.description)}
          </p>

          <div className="grid sm:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="eyebrow text-gold mb-5">Dahil Olanlar</h3>
              <ul className="space-y-3">
                {tour.includes.map((i: string) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" /> {t(i)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-gold mb-5">Öne Çıkanlar</h3>
              <ul className="space-y-3">
                {tour.highlights.map((i: string) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" /> {t(i)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="aspect-[16/9] bg-muted overflow-hidden">
            <iframe
              title="Foça Marina Konumu"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.74%2C38.66%2C26.78%2C38.69&layer=mapnik&marker=38.6717%2C26.7574"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 bg-card p-8 shadow-card">
            <ReservationForm tourTitle={tour.title} />
          </div>
        </aside>
      </article>

      <section className="bg-foreground text-background py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl italic mb-10">Diğer Deneyimlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {others.map((t_item) => (
              <Link
                key={t_item.id}
                to="/tours/$tourId"
                params={{ tourId: t_item.id }}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={t_item.image}
                    alt={t_item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="eyebrow text-gold-soft">{t(t_item.categoryLabel)}</span>
                <h3 className="font-serif text-xl mt-2 group-hover:text-gold transition-colors">
                  {t(t_item.title)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
