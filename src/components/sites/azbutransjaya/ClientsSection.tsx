"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { CLIENTS_DATA } from "./constants";
import { Reveal } from "./Reveal";

export function ClientsSection() {
  // Row 1: Full CLIENTS_DATA duplicated for seamless infinite loop (13 * 2 = 26 items)
  const duplicatedRow1 = [...CLIENTS_DATA, ...CLIENTS_DATA];

  // Row 2: Shifted CLIENTS_DATA (to provide visual variety against row 1) duplicated for seamless infinite loop
  const row2Logos = [...CLIENTS_DATA.slice(6), ...CLIENTS_DATA.slice(0, 6)];
  const duplicatedRow2 = [...row2Logos, ...row2Logos];

  return (
    <section id="klien" className="relative w-full max-w-full overflow-hidden bg-gradient-to-b from-[#F0F7FF]/50 via-white to-white py-16 sm:py-20 lg:py-24 border-b border-blue-100/60">
      {/* Section Header */}
      <div className="container-page mb-10 sm:mb-12 text-center">
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
      <div className="relative w-full max-w-full overflow-hidden">
        {/* Left & Right Edge Gradient Fades for Smooth Seamless Transition */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-3.5 sm:gap-4.5 overflow-hidden">
          {/* Baris Pertama: Bergerak terus ke satu arah (Kanan ke Kiri) */}
          <div className="relative w-full overflow-hidden">
            <div className="client-marquee-left flex gap-3.5 sm:gap-4.5 hover:[animation-play-state:paused]">
              {duplicatedRow1.map((client, idx) => (
                <div
                  key={`r1-${client.name}-${idx}`}
                  className="flex h-[76px] sm:h-[86px] w-[180px] sm:w-[210px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
                  title={client.name}
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="210px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Baris Kedua: Bergerak ke arah sebaliknya (Kiri ke Kanan) */}
          <div className="relative w-full overflow-hidden">
            <div className="client-marquee-right flex gap-3.5 sm:gap-4.5 hover:[animation-play-state:paused]">
              {duplicatedRow2.map((client, idx) => (
                <div
                  key={`r2-${client.name}-${idx}`}
                  className="flex h-[76px] sm:h-[86px] w-[180px] sm:w-[210px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
                  title={client.name}
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="210px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Highlights */}
      <div className="container-page mt-10 sm:mt-12">
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
