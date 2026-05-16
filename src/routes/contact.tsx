import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { ReservationForm } from "@/components/site/ReservationForm";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => {
    const { t } = i18n;
    return {
      meta: [
        { title: t("meta.contact.title") },
        {
          name: "description",
          content: t("meta.contact.desc"),
        },
        { property: "og:title", content: t("meta.contact.title") },
        {
          property: "og:description",
          content: t("meta.contact.desc"),
        },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <header className="px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <span className="eyebrow text-gold mb-4 block">{t("contact.header.eyebrow")}</span>
        <h1 className="font-serif text-5xl md:text-7xl italic text-balance max-w-3xl">
          {t("contact.header.title.1")} <br />
          {t("contact.header.title.2")}
        </h1>
      </header>

      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 pb-24">
        <div className="lg:col-span-5 space-y-8">
          {[
            {
              icon: MessageCircle,
              label: t("contact.info.whatsapp.label"),
              value: "+90 532 695 42 43",
              href: "https://wa.me/905326954243",
              note: t("contact.info.whatsapp.note"),
            },
            {
              icon: Phone,
              label: t("contact.info.phone.label"),
              value: "+90 532 695 42 43",
              href: "tel:+905326954243",
            },
            {
              icon: MapPin,
              label: t("contact.info.marina.label"),
              value: t("contact.info.marina.value"),
            },
            {
              icon: Clock,
              label: t("contact.info.hours.label"),
              value: t("contact.info.hours.value"),
            },
          ].map(({ icon: Icon, label, value, href, note }) => (
            <a key={label} href={href ?? "#"} className="flex gap-5 group">
              <span className="w-12 h-12 shrink-0 border border-border flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors">
                <Icon size={18} />
              </span>
              <span>
                <span className="eyebrow text-muted-foreground block">{label}</span>
                <span className="font-serif text-xl block group-hover:text-gold transition-colors">
                  {value}
                </span>
                {note && <span className="text-xs text-muted-foreground">{note}</span>}
              </span>
            </a>
          ))}
        </div>

        <div className="lg:col-span-7 bg-card p-10 shadow-card">
          <h2 className="font-serif text-3xl italic mb-2">{t("contact.form.title")}</h2>
          <p className="text-sm text-muted-foreground mb-8">{t("contact.form.desc")}</p>
          <ReservationForm />
        </div>
      </section>

      <section className="aspect-[16/8] md:aspect-[21/8] w-full">
        <iframe
          title="Foça Marina Konumu"
          src="https://www.openstreetmap.org/export/embed.html?bbox=26.74%2C38.66%2C26.78%2C38.69&layer=mapnik&marker=38.6717%2C26.7574"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}
