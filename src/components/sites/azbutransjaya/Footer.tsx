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
      <footer className="site-footer">
        <div className="container-page footer-grid">
          <div className="footer-brand">
            <div className="inline-flex items-center rounded-xl bg-white px-3.5 py-2 shadow-xs">
              <Rental99Logo />
            </div>
            <p>
              Rental99 Transport Service &amp; Tours menyediakan layanan rental mobil include driver, BBM, dan air mineral untuk kebutuhan dinas bisnis, liburan keluarga, airport transfer BIZAM Lombok, dan paket wisata Lombok &amp; Gili.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Menu</h3>
            <a href="#beranda">Beranda</a>
            <a href="#armada">Armada</a>
            <a href="#layanan">Layanan</a>
            <a href="#tour">Paket Tour</a>
            <a href="#klien">Klien Kami</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Layanan</h3>
            <a href="#layanan">Layanan City Tour</a>
            <a href="#layanan">Layanan Sasak Tour &amp; Gili</a>
            <a href="#layanan">Bandara &amp; Pelabuhan</a>
            <a href="#layanan">Permintaan ke Luar Daerah/Kota</a>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Kontak</h3>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-address-link"
              title="Buka lokasi di Google Maps"
            >
              <MapPin size={17} />
              <span>
                <span>{ADDRESS_TEXT}</span>
                <span className="footer-maps-badge">Buka di Maps ↗</span>
              </span>
            </a>

            <p>
              <Phone size={17} />
              <span>{PHONE_NUMBER}</span>
            </p>

            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={17} />
              <span>{PHONE_NUMBER}</span>
            </a>

            <a href={`mailto:${EMAIL_ADDRESS}`}>
              <Mail size={17} />
              <span>{EMAIL_ADDRESS}</span>
            </a>
          </div>
        </div>

        <div className="container-page footer-bottom">
          <p>© 2026 Rental99 Transport Service &amp; Tours. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating mobile WhatsApp FAB */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-[calc(20px+env(safe-area-inset-bottom))] right-4 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/30 transition-transform duration-200 hover:scale-105 active:scale-95 md:hidden"
        aria-label="Chat WhatsApp Rental99"
      >
        <MessageCircle className="size-6 text-white shrink-0" />
        <span className="sr-only">Chat WhatsApp Rental99</span>
      </a>
    </>
  );
}
