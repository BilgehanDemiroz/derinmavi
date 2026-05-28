import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { ReservationForm } from "@/components/site/ReservationForm";
import { useTranslation } from "react-i18next";
import i18nInstance from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => {
    const t = i18nInstance.t.bind(i18nInstance);
    return {
      meta: [
        { title: "İletişim - Derin Mavi" },
        {
          name: "description",
          content: t("meta.contact.desc"),
        },
        { property: "og:title", content: "İletişim - Derin Mavi" },
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
              values: [{ text: "+90 533 899 01 02", href: "https://wa.me/905338990102" }],
              note: t("contact.info.whatsapp.note"),
            },
            {
              icon: Phone,
              label: t("contact.info.phone.label"),
              values: [
                { text: "+90 533 899 01 02", href: "tel:+905338990102" },
                { text: "+90 532 695 42 43", href: "tel:+905326954243" },
              ],
            },
            {
              icon: MapPin,
              label: t("contact.info.marina.label"),
              values: [
                {
                  text: t("contact.info.marina.value"),
                  href: "https://www.google.com/maps/place/Derin+Mavi+Tur+Teknesi/@38.6704853,26.7523259,17z/data=!3m1!4b1!4m6!3m5!1s0x14bbb50125992395:0x16093c4ef893af4d!8m2!3d38.6704853!4d26.7549008!16s%2Fg%2F11zc0mlblq",
                },
              ],
            },
            {
              icon: Clock,
              label: t("contact.info.hours.label"),
              values: [{ text: t("contact.info.hours.value") }],
            },
          ].map(({ icon: Icon, label, values, note }) => (
            <div key={label} className="flex gap-5">
              <span className="w-12 h-12 shrink-0 border border-border flex items-center justify-center text-foreground">
                <Icon size={18} />
              </span>
              <div className="flex flex-col justify-center">
                <span className="eyebrow text-muted-foreground block mb-1">{label}</span>
                <div className="flex flex-col gap-2 font-serif text-xl">
                  {values.map(({ text, href }) =>
                    href ? (
                      <a
                        key={text}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold transition-colors block"
                      >
                        {text}
                      </a>
                    ) : (
                      <span key={text} className="block text-foreground">
                        {text}
                      </span>
                    ),
                  )}
                </div>
                {note && <span className="text-xs text-muted-foreground mt-1.5 block">{note}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7 bg-card p-10 shadow-card">
          <h2 className="font-serif text-3xl italic mb-2">{t("contact.form.title")}</h2>
          <p className="text-sm text-muted-foreground mb-8">{t("contact.form.desc")}</p>
          <ReservationForm />
        </div>
      </section>

      <section className="relative aspect-[16/8] md:aspect-[21/8] w-full group overflow-hidden">
        <iframe
          title="Derin Mavi Konumu"
          src="https://maps.google.com/maps?q=38.6704853,26.7549008+(Derin%20Mavi%20Tur%20Teknesi)&t=&z=17&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 transition-all duration-500"
          loading="lazy"
        />
        {/* Google Haritalar'a yönlendiren şık cam efektli tıklama katmanı */}
        <a
          href="https://www.google.com/maps/place/Derin+Mavi+Tur+Teknesi/@38.6704853,26.7523259,17z/data=!3m1!4b1!4m6!3m5!1s0x14bbb50125992395:0x16093c4ef893af4d!8m2!3d38.6704853!4d26.7549008!16s%2Fg%2F11zc0mlblq"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/0 hover:bg-black/10 flex items-center justify-center transition-all duration-300"
        >
          <span className="bg-background/85 backdrop-blur-md text-foreground px-5 py-3 rounded shadow-luxe font-semibold tracking-wider text-[10px] uppercase inline-flex items-center gap-2 border border-foreground/5 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <MapPin size={13} className="text-gold" />
            {t("contact.map.open_in_google")}
          </span>
        </a>
      </section>
    </>
  );
}
