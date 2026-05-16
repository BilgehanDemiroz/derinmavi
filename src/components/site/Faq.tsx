import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Faq() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
    {
      q: t("faq.q5"),
      a: t("faq.a5"),
    },
  ];
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <span className="eyebrow text-gold mb-3 block">{t("faq.eyebrow")}</span>
        <h2 className="font-serif text-4xl md:text-5xl italic">{t("faq.title")}</h2>
      </div>
      <div className="border-t border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-serif text-lg md:text-xl group-hover:text-gold transition-colors">
                  {f.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
