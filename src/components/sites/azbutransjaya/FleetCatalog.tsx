"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Gauge, UsersRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { FLEET_DATA, FLEET_CATEGORIES, Car, whatsappUrl } from "./constants";

export function FleetCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredCars: Car[] =
    activeCategory === "Semua"
      ? FLEET_DATA
      : FLEET_DATA.filter(
          (car) => car.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="armada" className="fleet-section fleet-catalog-section">
      <div className="container-page fleet-catalog-container">
        <Reveal className="fleet-catalog-heading">
          <div>
            <p className="section-kicker">Armada rental mobil</p>
            <h2>
              Pilih Kendaraan
              <br />
              Sesuai Perjalanan Anda
            </h2>
          </div>
          <p>Pilihan unit untuk perjalanan keluarga, bisnis, airport, wisata, dan rombongan.</p>
          <a href="#kontak">
            Lihat semua armada <ArrowRight size={17} />
          </a>
        </Reveal>

        <div className="fleet-tabs" role="tablist" aria-label="Kategori kendaraan">
          {FLEET_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === "Semua"
                ? FLEET_DATA.length
                : FLEET_DATA.filter(
                    (c) => c.category.toLowerCase() === cat.toLowerCase()
                  ).length;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span className="fleet-tab-badge">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="fleet-track no-scrollbar" role="tabpanel">
          {filteredCars.map((car, idx) => {
            const bookingMsg = `Halo Azbu Trans Jaya, saya melihat dari website dan ingin memesan unit armada ${car.name}. Apakah unit masih tersedia untuk jadwal sewa?`;

            return (
              <Reveal key={car.name} delay={idx * 0.05}>
                <article className="fleet-card">
                  <div className="fleet-image-wrap">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="fleet-image"
                    />
                  </div>

                  <div className="fleet-card-body">
                    <h3 className="fleet-card-title">{car.name}</h3>

                    <div className="fleet-card-specs">
                      <div className="fleet-spec-badge">
                        <span className="fleet-spec-icon-box">
                          <Gauge size={14} />
                        </span>
                        <span className="fleet-spec-text">
                          <span className="fleet-spec-label">Transmisi</span>
                          <strong className="fleet-spec-val">{car.transmission}</strong>
                        </span>
                      </div>

                      <div className="fleet-spec-badge">
                        <span className="fleet-spec-icon-box">
                          <UsersRound size={14} />
                        </span>
                        <span className="fleet-spec-text">
                          <span className="fleet-spec-label">Kapasitas</span>
                          <strong className="fleet-spec-val">{car.seats}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="fleet-card-price-row">
                      <div>
                        <small>Harga Kendaraan</small>
                        <b>
                          Rp {car.price.toLocaleString("id-ID")}{" "}
                          <span className="text-[11px] font-medium text-muted">/ Hari</span>
                        </b>
                      </div>
                      <span className="fleet-driver-addon-tag">+ Driver tersedia</span>
                    </div>

                    <a
                      href={whatsappUrl(bookingMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="fleet-card-cta-btn"
                      aria-label={`Pesan ${car.name} melalui WhatsApp`}
                    >
                      Pesan Sekarang
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
