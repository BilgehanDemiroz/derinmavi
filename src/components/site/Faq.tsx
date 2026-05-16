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
            <div key={i} className="border border-border rounded-md">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
                aria-expanded={isOpen}
              >
                <span className={`font-serif text-lg md:text-xl ${isOpen ? "text-gold" : "text-foreground"}`}>
                  {f.q}
                </span>
                <span className="shrink-0 w-8 h-8 flex items-center justify-center">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {isOpen && (
                <div className="p-4 pt-0 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}