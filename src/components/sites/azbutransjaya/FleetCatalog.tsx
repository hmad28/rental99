"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Gauge, UsersRound, Snowflake, Fuel, Star, MessageCircle } from "lucide-react";
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
          <p>
            Pilihan unit terawat untuk perjalanan keluarga, bisnis, airport transfer, dan wisata di Surabaya &amp; Sidoarjo.
          </p>
          <a href="#kontak" className="inline-flex items-center gap-2 font-bold text-[#2563EB] hover:text-[#1D4ED8]">
            Lihat semua armada <ArrowRight size={17} />
          </a>
        </Reveal>

        {/* Category Tabs */}
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

        {/* Modern Drivemate-inspired Fleet Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="tabpanel">
          {filteredCars.map((car, idx) => {
            const bookingMsg = `Halo Rental99, saya melihat dari website dan ingin booking armada ${car.name}. Apakah unit tersedia untuk jadwal sewa?`;

            return (
              <Reveal key={car.name} delay={idx * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#BFDBFE] hover:shadow-[0_24px_54px_rgba(37,99,235,0.15)]">
                  {/* Dominant Image Container with Soft Blue Radial Backdrop */}
                  <div className="relative aspect-[1.12] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#EFF6FF_0%,#DBEAFE_54%,#BFDBFE_100%)]">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle bottom gradient shadow */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-900/15 to-transparent" />

                    {/* Top Left Feature Badge */}
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-[#2563EB] px-2.5 py-1 text-[9.5px] font-bold text-white shadow-[0_6px_16px_rgba(37,99,235,0.32)]">
                      <Star size={11} className="fill-current" />
                      {car.badge || "Pilihan Populer"}
                    </span>

                    {/* Top Right Availability Badge */}
                    <span className="absolute right-3 top-3 inline-flex items-center rounded-lg border border-white/70 bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600 shadow-sm backdrop-blur">
                      Tersedia
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Vehicle Title */}
                    <h3 className="text-[17px] font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {car.name}
                    </h3>

                    {/* Drivemate-style Facilities Chips */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold text-[#64748B]">
                      <span className="inline-flex items-center gap-1">
                        <Gauge size={13.5} className="text-[#2563EB]" />
                        {car.transmission}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <UsersRound size={13.5} className="text-[#2563EB]" />
                        {car.seats}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Snowflake size={13.5} className="text-[#2563EB]" />
                        AC Dingin
                      </span>
                    </div>

                    {/* Distinct "Include Driver + BBM" Badge */}
                    <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200/80 px-2.5 py-1 text-[10.5px] font-bold text-[#1D4ED8]">
                      <Fuel size={12.5} className="text-[#2563EB]" />
                      <span>Include Driver + BBM Tersedia</span>
                    </div>

                    {/* Pricing Information Row */}
                    <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#E2E8F0] pt-3.5">
                      <div>
                        <span className="block text-[10px] font-semibold text-[#94A3B8]">Lepas Kunci</span>
                        <strong className="block text-[17px] font-black tracking-tight text-[#2563EB] tabular-nums">
                          Rp {car.price.toLocaleString("id-ID")}
                          <span className="ml-1 text-[11px] font-medium text-slate-500">/hari</span>
                        </strong>
                      </div>

                      <div className="text-right">
                        <span className="block text-[9.5px] font-semibold text-[#94A3B8]">Paket All-in</span>
                        <span className="block text-[12.5px] font-extrabold text-slate-700 tabular-nums">
                          Rp {car.allInPrice.toLocaleString("id-ID")}
                          <span className="ml-0.5 text-[10px] font-normal text-slate-400">/hr</span>
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp CTA Button */}
                    <a
                      href={whatsappUrl(bookingMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-xs font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,99,235,0.36)]"
                      aria-label={`Pesan ${car.name} melalui WhatsApp Rental99`}
                    >
                      <MessageCircle size={15} />
                      <span>Pesan Sekarang</span>
                      <ArrowRight size={13} />
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
