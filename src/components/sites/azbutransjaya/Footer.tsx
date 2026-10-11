import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  ADDRESS_TEXT,
  GOOGLE_MAPS_URL,
  whatsappUrl,
} from "./constants";
import { Rental99Logo } from "./Rental99Logo";

export function Footer() {
  return (
    <>
      <footer className="w-full max-w-full overflow-hidden bg-[#071321] text-slate-300">
        <div className="container-page py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* 1. Brand Column */}
            <div className="sm:col-span-2 lg:col-span-4 min-w-0">
              <div className="inline-flex items-center rounded-xl bg-white px-3.5 py-2 shadow-xs">
                <Rental99Logo />
              </div>
              <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400 break-words">
                Rental99 Transport Service &amp; Tours menyediakan layanan rental mobil include driver, BBM, dan air mineral untuk kebutuhan dinas bisnis, liburan keluarga, airport transfer BIZAM Lombok, dan paket wisata Lombok &amp; Gili.
              </p>
            </div>

            {/* 2. Menu Nav Links */}
            <div className="min-w-0 lg:col-span-2">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Menu
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li><a href="#beranda" className="text-slate-400 transition hover:text-white inline-block">Beranda</a></li>
                <li><a href="#armada" className="text-slate-400 transition hover:text-white inline-block">Armada</a></li>
                <li><a href="#layanan" className="text-slate-400 transition hover:text-white inline-block">Layanan</a></li>
                <li><a href="#tour" className="text-slate-400 transition hover:text-white inline-block">Paket Tour</a></li>
                <li><a href="#klien" className="text-slate-400 transition hover:text-white inline-block">Klien Kami</a></li>
                <li><a href="#faq" className="text-slate-400 transition hover:text-white inline-block">FAQ</a></li>
                <li><a href="#kontak" className="text-slate-400 transition hover:text-white inline-block">Kontak</a></li>
              </ul>
            </div>

            {/* 3. Layanan Nav Links */}
            <div className="min-w-0 lg:col-span-3">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Layanan
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li><a href="#layanan" className="text-slate-400 transition hover:text-white block">Layanan City Tour</a></li>
                <li><a href="#layanan" className="text-slate-400 transition hover:text-white block">Layanan Sasak Tour &amp; Gili</a></li>
                <li><a href="#layanan" className="text-slate-400 transition hover:text-white block">Bandara &amp; Pelabuhan</a></li>
                <li><a href="#layanan" className="text-slate-400 transition hover:text-white block break-words">Permintaan ke Luar Daerah/Kota</a></li>
              </ul>
            </div>

            {/* 4. Kontak Column */}
            <div className="sm:col-span-2 lg:col-span-3 min-w-0">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Kontak
              </h3>
              <div className="mt-4 space-y-3.5 text-xs sm:text-sm">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-slate-400 transition hover:text-white min-w-0"
                  title="Buka lokasi di Google Maps"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#2563EB]" />
                  <span className="min-w-0 flex-1 leading-relaxed break-words">
                    {ADDRESS_TEXT}
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded bg-blue-950/80 px-2 py-0.5 text-[10px] font-semibold text-sky-400 border border-blue-800/50 group-hover:border-blue-500 group-hover:text-sky-300">
                      Buka di Maps ↗
                    </span>
                  </span>
                </a>

                <p className="flex items-center gap-2.5 text-slate-400 min-w-0">
                  <Phone className="size-4 shrink-0 text-[#2563EB]" />
                  <span className="truncate">{PHONE_NUMBER}</span>
                </p>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 transition hover:text-white min-w-0"
                >
                  <MessageCircle className="size-4 shrink-0 text-[#25D366]" />
                  <span className="truncate">{PHONE_NUMBER}</span>
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2.5 text-slate-400 transition hover:text-white min-w-0"
                >
                  <Mail className="size-4 shrink-0 text-[#2563EB]" />
                  <span className="truncate">{EMAIL_ADDRESS}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom copyright */}
        <div className="border-t border-slate-800/80 py-5 text-center text-xs text-slate-500">
          <div className="container-page">
            <p>© 2026 Rental99 Transport Service &amp; Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating mobile WhatsApp FAB - Compact & Safe Margins */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-[calc(14px+env(safe-area-inset-bottom))] right-3.5 z-40 flex size-10 sm:size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/25 border border-white/20 transition-transform duration-200 hover:scale-105 active:scale-95 md:hidden"
        aria-label="Chat WhatsApp Rental99"
      >
        <MessageCircle className="size-5 sm:size-5.5 text-white shrink-0" />
        <span className="sr-only">Chat WhatsApp Rental99</span>
      </a>
    </>
  );
}
