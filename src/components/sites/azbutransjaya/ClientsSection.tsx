"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { CLIENTS_DATA } from "./constants";
import { Reveal } from "./Reveal";

export function ClientsSection() {
  const row1Logos = CLIENTS_DATA;
  const row2Logos = [...CLIENTS_DATA.slice(6), ...CLIENTS_DATA.slice(0, 6)];

  return (
    <section
      id="klien"
      className="relative w-full max-w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100"
    >
      {/* Section Header */}
      <div className="container-page mb-10 sm:mb-14 text-center">
        <Reveal>
          {/* Claim badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 text-xs font-bold text-[#2563EB] shadow-xs">
            <Award className="size-3.5 text-[#2563EB]" />
            <span>Transportasi terpercaya sejak tahun 2012</span>
          </div>

          <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
            Dipercaya Oleh Klien &amp; Mitra Kami
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#475569]">
            Rental99 telah menjadi mitra transportasi terpercaya bagi instansi kementerian, BUMN, korporasi nasional, perbankan, dan ribuan pelanggan di seluruh Lombok.
          </p>
        </Reveal>
      </div>

      {/* 2-Row Horizontal Infinite Marquee Ticker */}
      <div className="relative w-full max-w-full overflow-hidden py-2">
        {/* Soft Left & Right Edge Gradient Fades for Smooth Seamless Transition */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-6 sm:gap-8 overflow-hidden">
          {/* Baris Pertama: Bergerak terus ke satu arah (Kanan ke Kiri) */}
          <div className="flex flex-nowrap w-full overflow-hidden select-none">
            {[0, 1, 2, 3].map((trackIdx) => (
              <div
                key={`r1-track-${trackIdx}`}
                className="client-marquee-track-left flex shrink-0 items-center gap-10 sm:gap-14 pr-10 sm:pr-14"
                aria-hidden={trackIdx > 0 ? "true" : undefined}
              >
                {row1Logos.map((client, idx) => (
                  <div
                    key={`r1-${trackIdx}-${client.name}-${idx}`}
                    className="flex h-12 sm:h-14 w-[130px] sm:w-[160px] shrink-0 items-center justify-center"
                    title={client.name}
                  >
                    <div className="relative h-8 sm:h-10 w-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 130px, 160px"
                        className="object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Baris Kedua: Bergerak ke arah sebaliknya (Kiri ke Kanan) */}
          <div className="flex flex-nowrap w-full overflow-hidden select-none">
            {[0, 1, 2, 3].map((trackIdx) => (
              <div
                key={`r2-track-${trackIdx}`}
                className="client-marquee-track-right flex shrink-0 items-center gap-10 sm:gap-14 pr-10 sm:pr-14"
                aria-hidden={trackIdx > 0 ? "true" : undefined}
              >
                {row2Logos.map((client, idx) => (
                  <div
                    key={`r2-${trackIdx}-${client.name}-${idx}`}
                    className="flex h-12 sm:h-14 w-[130px] sm:w-[160px] shrink-0 items-center justify-center"
                    title={client.name}
                  >
                    <div className="relative h-8 sm:h-10 w-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 130px, 160px"
                        className="object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Trust Highlights */}
      <div className="container-page mt-12 sm:mt-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-center">
          <div className="rounded-xl border border-blue-100 bg-white p-3.5 sm:p-4 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#2563EB]">12+ Tahun</span>
            <span className="block mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Pengalaman Melayani</span>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-3.5 sm:p-4 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#2563EB]">13+ Mitra</span>
            <span className="block mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">BUMN &amp; Korporasi</span>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-3.5 sm:p-4 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#2563EB]">12 Unit</span>
            <span className="block mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Armada Siap Jalan</span>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-3.5 sm:p-4 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#2563EB]">24 Jam</span>
            <span className="block mt-1 text-[11px] sm:text-xs font-semibold text-slate-600">Standby di BIZAM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
