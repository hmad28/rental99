import Image from "next/image";
import { Armchair, Snowflake, Luggage, Gauge, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "./constants";

export function FeaturedArmada() {
  const customMsg = "Halo Rental99, saya melihat dari website dan ingin menanyakan ketersediaan armada Innova Reborn CVT.";

  return (
    <section className="featured-section">
      <div className="container-page featured-grid">
        <Reveal className="featured-media">
          <Image
            src="/images/innova-dark.png"
            alt="Toyota Innova Reborn CVT warna hitam Rental99"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="featured-image"
          />
        </Reveal>

        <Reveal className="featured-copy" delay={0.1}>
          <p className="featured-eyebrow">Premium Armada</p>
          <h2>Innova Reborn CVT</h2>
          <p className="featured-description">
            Kabin lega dan nyaman untuk kebutuhan keluarga, perjalanan dinas bisnis, maupun perjalanan luar kota bersama Rental99.
          </p>

          <div className="featured-specs">
            <div>
              <Armchair size={31} strokeWidth={1.55} />
              <span>Kabin Nyaman &amp; Luas</span>
            </div>
            <div>
              <Snowflake size={31} strokeWidth={1.55} />
              <span>AC Dingin</span>
            </div>
            <div>
              <Luggage size={31} strokeWidth={1.55} />
              <span>Bagasi Luas</span>
            </div>
            <div>
              <Gauge size={31} strokeWidth={1.55} />
              <span>Performa Tangguh</span>
            </div>
          </div>

          <a href={whatsappUrl(customMsg)} target="_blank" rel="noreferrer" className="featured-cta">
            <MessageCircle size={18} />
            Tanyakan Ketersediaan
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
