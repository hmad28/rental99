import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "./constants";

export function CtaBanner() {
  return (
    <section id="kontak" className="cta-section">
      <div className="container-page">
        <Reveal className="cta-banner cta-banner-large">
          <div className="cta-copy">
            <p className="section-kicker">Mulai perjalanan Anda</p>
            <h2>Siap untuk perjalanan Anda?</h2>
            <p>Sampaikan tanggal, tujuan, dan armada yang Anda butuhkan ke tim Rental99.</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="button-link button-light cta-button"
            >
              <MessageCircle size={18} />
              <span>Booking via WhatsApp</span>
            </a>
          </div>

          <div className="cta-vehicle" aria-hidden="true">
            <Image
              src="/images/hero-fleet-final.png"
              alt="Armada Rental99"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
