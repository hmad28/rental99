"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, MessageCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { FLEET_DATA, FLEET_CATEGORIES, Car, whatsappUrl } from "./constants";
import { Reveal } from "./Reveal";

const INITIAL_DISPLAY_COUNT = 8;

export function FleetCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [showAll, setShowAll] = useState(false);

  // Filter cars by category
  const filteredCars: Car[] =
    activeCategory === "Semua"
      ? FLEET_DATA
      : FLEET_DATA.filter(
          (car) => car.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // When "Semua" is active, limit to INITIAL_DISPLAY_COUNT unless user toggles "Lihat Semua"
  const visibleCars =
    activeCategory === "Semua" && !showAll
      ? filteredCars.slice(0, INITIAL_DISPLAY_COUNT)
      : filteredCars;

  return (
    <section id="armada" className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF]/50 via-white to-white py-16 sm:py-20 lg:py-24 border-b border-blue-100/60">
      {/* Subtle Ambient Sky Glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" aria-hidden="true" />

      <div className="container-page relative z-10">
        {/* Section Header - Clean & Conversion-Focused */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-2xs">
              <Sparkles className="size-3.5" />
              <span>Pilihan Armada Terawat</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Armada Unggulan Rental99
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#475569]">
              Tersedia 12 pilihan unit prima untuk perjalanan Anda di Lombok. Seluruh harga sudah termasuk layanan supir profesional dan BBM.
            </p>
          </Reveal>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {FLEET_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          Grid Layout:
          - Mobile: 2 Kolom side-by-side (grid-cols-2)
          - Tablet: 2-3 Kolom (sm:grid-cols-2 md:grid-cols-3)
          - Desktop: 4 Kolom (lg:grid-cols-4)
        */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {visibleCars.map((car, idx) => {
            const isBus = car.price === 0;
            const bookingMsg = `Halo Rental99, saya lihat di website Rental99, saya ingin booking armada ${car.name} (${!isBus ? `Rp ${car.price.toLocaleString("id-ID")}` : "Order by WhatsApp"}). Mohon info ketersediaan unitnya.`;

            return (
              <Reveal key={car.name} delay={idx * 0.04}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-2.5 sm:p-4 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                  {/* Dominant Vehicle Image - Square 1:1 */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Secondary Category / Feature Badge - Repositioned to top-right with safe margins */}
                    {car.badge && (
                      <span
                        className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 max-w-[70%] truncate rounded-md bg-[#2563EB]/95 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-white shadow-xs backdrop-blur-xs"
                        title={car.badge}
                      >
                        {car.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Content - Compact & Clean */}
                  <div className="mt-3 flex flex-1 flex-col justify-between">
                    <div>
                      {/* Nama Unit */}
                      <h3 className="text-xs sm:text-sm font-bold tracking-tight text-[#0F172A] line-clamp-1" title={car.name}>
                        {car.name}
                      </h3>

                      {/* Harga Utama */}
                      <div className="mt-1">
                        {!isBus ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm sm:text-base font-extrabold text-[#2563EB] [font-variant-numeric:tabular-nums]">
                              Rp {car.price.toLocaleString("id-ID")}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500">/ hari</span>
                          </div>
                        ) : (
                          <span className="inline-block text-xs sm:text-sm font-bold text-[#2563EB]">
                            Order by WhatsApp
                          </span>
                        )}
                      </div>

                      {/* Include Singkat: Driver + BBM & Mineral selama perjalanan */}
                      <div className="mt-2.5 space-y-1 border-t border-slate-100 pt-2 text-[10px] sm:text-[11px] text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 shrink-0 text-emerald-600" />
                          <span className="font-medium truncate">Driver + BBM</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 shrink-0 text-emerald-600" />
                          <span className="font-medium truncate">Mineral selama perjalanan</span>
                        </div>
                      </div>
                    </div>

                    {/* Tombol WhatsApp CTA */}
                    <a
                      href={whatsappUrl(bookingMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] text-[11px] sm:text-xs font-bold text-white shadow-xs transition hover:bg-[#1D4ED8] hover:shadow-md active:scale-[0.98]"
                    >
                      <MessageCircle className="size-3.5 sm:size-4 shrink-0" />
                      <span>{isBus ? "Order by WA" : "Pesan via WA"}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Toggle "Lihat Semua Armada" Button */}
        {activeCategory === "Semua" && filteredCars.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-[#2563EB] shadow-xs transition hover:bg-blue-50 hover:shadow-md cursor-pointer"
            >
              <span>{showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua Armada (${filteredCars.length} Unit)`}</span>
              {showAll ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
