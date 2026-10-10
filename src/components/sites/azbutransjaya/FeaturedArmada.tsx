import Image from "next/image";
import { Armchair, Snowflake, Luggage, Fuel, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "./constants";

export function FeaturedArmada() {
  const customMsg = "Halo Rental99 Transport Service & Tours, saya ingin menanyakan ketersediaan unit Toyota Innova Reborn (Include Driver + BBM + Mineral) di Lombok.";

  return (
    <section className="featured-section">
      <div className="container-page featured-grid">
        <Reveal className="featured-media">
          <Image
            src="/images/innova-dark.png"
            alt="Toyota Innova Reborn Rental99 Lombok"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="featured-image"
          />
        </Reveal>

        <Reveal className="featured-copy" delay={0.1}>
          <p className="featured-eyebrow">Paling Diminati Wisatawan</p>
          <h2>Toyota Innova Reborn</h2>
          <p className="featured-description">
            Pilihan utama untuk perjalanan keluarga, dinas bisnis, dan tour wisata di Lombok. Perjalanan semakin nyaman karena sudah <strong>Include Driver berpengalaman, BBM, dan Air Mineral</strong>.
          </p>

          <div className="featured-specs">
            <div>
              <Armchair size={31} strokeWidth={1.55} />
              <span>Kabin Luas 7 Kursi</span>
            </div>
            <div>
              <Snowflake size={31} strokeWidth={1.55} />
              <span>AC Double Blower</span>
            </div>
            <div>
              <Luggage size={31} strokeWidth={1.55} />
              <span>Kapasitas Bagasi Lega</span>
            </div>
            <div>
              <Fuel size={31} strokeWidth={1.55} />
              <span>Include Driver &amp; BBM</span>
            </div>
          </div>

          <a href={whatsappUrl(customMsg)} target="_blank" rel="noreferrer" className="featured-cta">
            <MessageCircle size={18} />
            <span>Pesan Rp 850.000 / Hari</span>
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
