import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Award, Heart, Leaf } from "lucide-react";
import harbor from "@/assets/foca-harbor.jpg";
import privateImg from "@/assets/tour-private.jpg";
import { useTranslation } from "react-i18next";
import i18nInstance from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => {
    const t = i18nInstance.t.bind(i18nInstance);
    return {
      meta: [
        { title: "Hakkımızda - Derin Mavi" },
        {
          name: "description",
          content: t("meta.about.desc"),
        },
        { property: "og:title", content: "Hakkımızda - Derin Mavi" },
        { property: "og:description", content: t("meta.about.desc") },
        { property: "og:image", content: harbor },
      ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <header className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={harbor}
          alt="Foça Marina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <span className="eyebrow text-white/80 mb-4 block">{t("about.header.eyebrow")}</span>
            <h1 className="font-serif text-5xl md:text-7xl italic text-white text-balance max-w-3xl">
              {t("about.header.title.1")} <br />
              {t("about.header.title.2")}
            </h1>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="eyebrow text-gold mb-4 block">{t("about.story.eyebrow")}</span>
          <h2 className="font-serif text-4xl italic mb-8">{t("about.story.title")}</h2>
          <div className="space-y-5 text-foreground/75 leading-relaxed">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
          </div>
        </div>
        <img
          src={privateImg}
          alt="Filomuz"
          className="w-full aspect-[4/5] object-cover"
          loading="lazy"
        />
      </section>

      <section className="bg-foreground text-background py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {[
            {
              icon: Award,
              title: t("about.features.1.title"),
              desc: t("about.features.1.desc"),
            },
            {
              icon: Anchor,
              title: t("about.features.2.title"),
              desc: t("about.features.2.desc"),
            },
            {
              icon: Heart,
              title: t("about.features.3.title"),
              desc: t("about.features.3.desc"),
            },
            {
              icon: Leaf,
              title: t("about.features.4.title"),
              desc: t("about.features.4.desc"),
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="text-gold mb-5" size={28} />
              <h3 className="font-serif text-xl mb-3">{title}</h3>
              <p className="text-sm text-background/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
