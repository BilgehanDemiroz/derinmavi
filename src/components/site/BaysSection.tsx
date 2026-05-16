import sirenImg from "@/assets/bay-siren.jpg";
import incirImg from "@/assets/bay-incir.jpg";
import orakImg from "@/assets/bay-orak.jpg";
import { useTranslation } from "react-i18next";

export function BaysSection() {
  const { t } = useTranslation();

  const bays = [
    {
      name: t("bays.siren.name"),
      subtitle: t("bays.siren.subtitle"),
      desc: t("bays.siren.desc"),
      image: sirenImg,
    },
    {
      name: t("bays.incir.name"),
      subtitle: t("bays.incir.subtitle"),
      desc: t("bays.incir.desc"),
      image: incirImg,
    },
    {
      name: t("bays.orak.name"),
      subtitle: t("bays.orak.subtitle"),
      desc: t("bays.orak.desc"),
      image: orakImg,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div>
          <span className="eyebrow text-gold mb-3 block">{t("bays.eyebrow")}</span>
          <h2 className="font-serif text-4xl md:text-5xl italic text-balance max-w-2xl">
            {t("bays.title_1")} <br />
            {t("bays.title_2")}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">{t("bays.desc")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {bays.map((b, i) => (
          <article
            key={b.name}
            className={`relative overflow-hidden group ${i === 1 ? "md:translate-y-12" : ""}`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
              <span className="eyebrow text-gold-soft mb-2 block">{b.subtitle}</span>
              <h3 className="font-serif text-2xl mb-2">{b.name}</h3>
              <p className="text-sm text-background/75 max-w-[28ch]">{b.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
