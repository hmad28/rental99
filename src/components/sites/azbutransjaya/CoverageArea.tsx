import Image from "next/image";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { COVERAGE_PINS, whatsappUrl } from "./constants";

export function CoverageArea() {
  return (
    <section id="tentang" className="coverage-section">
      <div className="container-page coverage-grid">
        <Reveal className="coverage-map">
          <Image
            src="/images/service-map-v2.png"
            alt="Peta area layanan Azbu Trans Jaya"
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
          />
          <div className="coverage-pins" aria-hidden="true">
            {COVERAGE_PINS.map((pin) => (
              <span key={pin.name} style={{ left: pin.left, top: pin.top }}>
                <MapPin size={16} fill="currentColor" strokeWidth={2} />
                {pin.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="coverage-copy" delay={0.1}>
          <p className="section-kicker">Area layanan Azbu</p>
          <h2>Rental Mobil Surabaya untuk Perjalanan yang Fleksibel</h2>
          <p>
            Detail titik jemput dan tujuan dibahas terlebih dahulu agar kendaraan yang dipilih sesuai kebutuhan perjalanan Anda.
          </p>

          <div className="coverage-list">
            {COVERAGE_PINS.map((pin) => (
              <span key={pin.name}>
                <Check size={15} />
                {pin.name}
              </span>
            ))}
          </div>

          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="coverage-cta">
            Hubungi Azbu Trans Jaya <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
