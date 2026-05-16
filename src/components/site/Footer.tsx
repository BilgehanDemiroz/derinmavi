import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 max-w-sm">
          <div className="font-serif italic text-3xl font-bold mb-5">
            Derin <span className="text-gold">Mavi</span>
          </div>
          <p className="text-xs leading-relaxed text-background/60 mb-8">
            Kuzey Ege'nin kalbinde, aile işletmesi premium deniz deneyimleri. On yılı aşkın deneyim,
            lisanslı tam donanımlı filo, yüzlerce mutlu konuk.
          </p>
          <div className="flex gap-3">
            <span
              aria-label="Instagram yakında"
              title="Instagram profili eklenecek"
              className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/45"
            >
              <Instagram size={14} />
            </span>
            <span
              aria-label="Facebook yakında"
              title="Facebook profili eklenecek"
              className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/45"
            >
              <Facebook size={14} />
            </span>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-6">Deneyim</h4>
          <ul className="text-sm text-background/70 flex flex-col gap-3">
            <li>
              <Link to="/tours" className="hover:text-background">
                Günlük Turlar
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-background">
                Saatlik Kiralama
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-background">
                Gün Batımı Turu
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-background">
                Özel Kutlamalar
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-6">İletişim</h4>
          <ul className="text-sm text-background/70 flex flex-col gap-3">
            <li className="flex gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" /> Foça Marina, B Iskelesi, İzmir
            </li>
            <li className="flex gap-2">
              <Phone size={14} className="mt-0.5 shrink-0" /> +90 532 695 42 43
            </li>
            <li className="flex gap-2">
              <Mail size={14} className="mt-0.5 shrink-0" /> bilgehandemiroz7@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-background/40">
        <p>© {new Date().getFullYear()} Derin Mavi Tekne Turları. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <span>Gizlilik Politikası</span>
          <span>Kullanım Koşulları</span>
        </div>
      </div>
    </footer>
  );
}
