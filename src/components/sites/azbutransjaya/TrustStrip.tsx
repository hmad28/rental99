import { ShieldCheck, MessageCircle, CarFront, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section className="trust-strip-wrap" aria-label="Keunggulan Azbu Trans Jaya">
      <div className="container-page">
        <Reveal className="trust-strip">
          <div>
            <ShieldCheck size={23} />
            <span>
              <strong>Unit Disiapkan Sebelum Jalan</strong>
              <small>Kondisi dan kebersihan kendaraan dipersiapkan sebelum jadwal keberangkatan.</small>
            </span>
          </div>

          <div>
            <MessageCircle size={23} />
            <span>
              <strong>Konsultasi via WhatsApp</strong>
              <small>Kebutuhan perjalanan dibahas langsung agar pilihan kendaraan lebih sesuai.</small>
            </span>
          </div>

          <div>
            <CarFront size={23} />
            <span>
              <strong>Pilihan Armada Fleksibel</strong>
              <small>Pilihan kendaraan untuk kebutuhan pribadi, keluarga, bisnis, atau rombongan.</small>
            </span>
          </div>

          <div>
            <MapPin size={23} />
            <span>
              <strong>Berbasis Surabaya &amp; Sidoarjo</strong>
              <small>Detail titik jemput dan tujuan dikonfirmasi sesuai ketersediaan layanan.</small>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
