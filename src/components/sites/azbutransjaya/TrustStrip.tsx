import { ShieldCheck, Award, CarFront, Plane } from "lucide-react";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section className="trust-strip-wrap" aria-label="Keunggulan Rental99 Transport Service & Tours">
      <div className="container-page">
        <Reveal className="trust-strip">
          <div>
            <ShieldCheck size={23} />
            <span>
              <strong>Include Driver + BBM</strong>
              <small>Plus Air Mineral dingin gratis selama perjalanan di Lombok.</small>
            </span>
          </div>

          <div>
            <Award size={23} />
            <span>
              <strong>Terpercaya Sejak 2012</strong>
              <small>Pengalaman lebih dari 12 tahun melayani ribuan wisatawan &amp; korporasi.</small>
            </span>
          </div>

          <div>
            <Plane size={23} />
            <span>
              <strong>Area Utama BIZAM Lombok</strong>
              <small>Standby penjemputan tepat waktu di Bandara Internasional Lombok.</small>
            </span>
          </div>

          <div>
            <CarFront size={23} />
            <span>
              <strong>12 Pilihan Armada Lengkap</strong>
              <small>Mulai dari City Car, MPV, SUV, Luxury Alphard, hingga Bus Pariwisata.</small>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
