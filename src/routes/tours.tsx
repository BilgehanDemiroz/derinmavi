import { createFileRoute } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/site/TourCard";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Route = createFileRoute("/tours")({
  head: () => {
    const { t } = i18n;
    return {
      meta: [
        { title: t("meta.tours.title") },
        {
          name: "description",
          content: t("meta.tours.desc"),
        },
        { property: "og:title", content: t("meta.tours.title") },
        {
          property: "og:description",
          content: t("meta.tours.desc"),
        },
      ],
    };
  },
  component: ToursPage,
});

function ToursPage() {
  const { t } = useTranslation();
  const daily = tours.filter((t) => t.category === "daily");
  const hourly = tours.filter((t) => t.category === "hourly");
  const sunset = tours.filter((t) => t.category === "sunset");

  return (
    <>
      <header className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <span className="eyebrow text-gold mb-4 block">{t("tours.page.eyebrow")}</span>
        <h1 className="font-serif text-5xl md:text-7xl italic text-balance max-w-3xl">
          {t("tours.page.title")}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl">{t("tours.page.desc")}</p>
      </header>

      <Section
        title={t("home.highlights.daily.title")}
        eyebrow={t("tours.category.daily")}
        tours={daily}
      />
      <Section
        title={t("home.highlights.hourly.title")}
        eyebrow={t("tours.category.hourly")}
        tours={hourly}
        dark
      />
      <Section
        title={t("home.highlights.sunset.title")}
        eyebrow={t("tours.category.sunset")}
        tours={sunset}
      />
    </>
  );
}

function Section({
  title,
  eyebrow,
  tours: list,
  dark,
}: {
  title: string;
  eyebrow: string;
  tours: typeof tours;
  dark?: boolean;
}) {
  return (
    <section className={`py-20 px-6 ${dark ? "bg-foreground text-background" : ""}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className={`eyebrow ${dark ? "text-gold-soft" : "text-gold"} mb-3 block`}>
            {eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl italic">{title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {list.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
