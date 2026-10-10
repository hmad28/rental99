import Image from "next/image";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  ADDRESS_TEXT,
  GOOGLE_MAPS_URL,
  whatsappUrl,
} from "./constants";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container-page footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Image
                src="/images/azbu-logo.png"
                alt="Azbu Trans Jaya"
                width={250}
                height={100}
                className="footer-logo"
              />
            </div>
            <p>
              Azbu Trans Jaya menyediakan layanan rental mobil untuk berbagai kebutuhan perjalanan di Surabaya dan Sidoarjo.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Menu</h3>
            <a href="#beranda">Beranda</a>
            <a href="#armada">Armada</a>
            <a href="#layanan">Layanan</a>
            <a href="#tentang">Tentang</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Layanan</h3>
            <a href="#layanan">Rental Harian</a>
            <a href="#layanan">Rental + Driver</a>
            <a href="#layanan">Antar Jemput &amp; Airport</a>
            <a href="#layanan">Wisata &amp; Rombongan</a>
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
          <p>© 2026 Azbu Trans Jaya. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating mobile WhatsApp button */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="mobile-whatsapp"
        aria-label="Chat WhatsApp Azbu Trans Jaya"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
