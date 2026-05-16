import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905326954243?text=Merhaba%2C%20tekne%20turu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişim"
      className="fixed bottom-24 md:bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-luxe hover:scale-110 transition-transform">
        <MessageCircle size={22} fill="currentColor" />
      </span>
    </a>
  );
}
