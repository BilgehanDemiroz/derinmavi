import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="eyebrow text-gold mb-3 block">{t("faq.eyebrow")}</span>
        <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">
          {t("faq.title")}
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`border border-border transition-all duration-300 ${
                isOpen ? "bg-white shadow-sm ring-1 ring-gold/10" : "bg-transparent"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left group"
                aria-expanded={isOpen}
              >
                <span className={`font-serif text-lg md:text-xl transition-colors ${
                  isOpen ? "text-gold" : "text-foreground group-hover:text-gold"
                }`}>
                  {f.q}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-gold border-gold text-white rotate-180" : "border-border text-muted-foreground group-hover:border-gold group-hover:text-gold"
                }`}>
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl border-t border-border/50 pt-4">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
