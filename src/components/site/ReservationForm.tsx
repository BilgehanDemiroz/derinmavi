import { useState } from "react";
import { z } from "zod";
import { useTranslation } from "react-i18next";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  date: z.string().min(1),
  guests: z.string(),
  message: z.string().max(500).optional(),
});

type ReservationData = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "905326954243";

function createReservationMessage(data: ReservationData, tourTitle?: string) {
  return [
    "Merhaba, rezervasyon müsaitliği sormak istiyorum.",
    tourTitle ? `Tur: ${tourTitle}` : null,
    `Ad Soyad: ${data.name}`,
    `Telefon: ${data.phone}`,
    `Tarih: ${data.date}`,
    `Kişi sayısı: ${data.guests}`,
    data.message ? `Not: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export function ReservationForm({ tourTitle }: { tourTitle?: string }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Dynamic error messages using safeParse but custom validation logic or localized error mapping
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      let msg = t("form.default_err");

      if (firstError?.path[0] === "name") msg = t("form.name_err");
      else if (firstError?.path[0] === "phone") msg = t("form.phone_err");
      else if (firstError?.path[0] === "date") msg = t("form.date_err");

      setError(msg);
      setStatus("err");
      return;
    }

    const message = createReservationMessage(parsed.data, tourTitle);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setError(null);
    setStatus("ok");
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-5">
      {tourTitle && (
        <div className="col-span-2 mb-2">
          <p className="eyebrow text-gold mb-1">{t("form.tour")}</p>
          <p className="font-serif text-xl">{tourTitle}</p>
        </div>
      )}
      <Field label={t("form.name")} name="name" type="text" required className="col-span-2" />
      <Field label={t("form.phone")} name="phone" type="tel" required className="col-span-2" />
      <Field label={t("form.date")} name="date" type="date" required />
      <div>
        <label className="eyebrow text-foreground/60 mb-2 block">{t("form.guests")}</label>
        <select
          name="guests"
          className="w-full bg-transparent border-b border-border py-2 text-sm focus:outline-none focus:border-gold transition-colors"
        >
          <option>{t("form.guests.1")}</option>
          <option>{t("form.guests.2")}</option>
          <option>{t("form.guests.3")}</option>
          <option>{t("form.guests.4")}</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="eyebrow text-foreground/60 mb-2 block">{t("form.message")}</label>
        <textarea
          name="message"
          rows={3}
          className="w-full bg-transparent border-b border-border py-2 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>
      {status === "err" && <p className="col-span-2 text-xs text-destructive">{error}</p>}
      {status === "ok" && (
        <p className="col-span-2 text-xs text-emerald-700 bg-emerald-50 p-3">{t("form.success")}</p>
      )}
      <button type="submit" className="col-span-2 mt-4 btn-primary">
        {t("form.submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  return (
    <div className={className}>
      <label className="eyebrow text-foreground/60 mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-border py-2 text-sm focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
