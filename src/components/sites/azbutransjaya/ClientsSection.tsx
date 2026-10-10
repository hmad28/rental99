"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { CLIENTS_DATA } from "./constants";
import { Reveal } from "./Reveal";

export function ClientsSection() {
  // Duplicate for seamless infinite loop (14 * 2 = 28)
  const duplicatedLogos = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section id="klien" className="relative overflow-hidden bg-white py-20 lg:py-24 border-y border-[#E2E8F0]">
      <div className="container-page mb-12 text-center">
        <Reveal>
          {/* Claim badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-[#2563EB] shadow-xs">
            <Award className="size-4 text-[#2563EB]" />
            <span>Transportasi terpercaya sejak tahun 2012</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
            Dipercaya Oleh Klien &amp; Mitra Kami
          </h2>

          <p className="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-[#64748B]">
            Rental99 telah menjadi partner perjalanan terpercaya bagi kementerian, BUMN, perusahaan multinasional, perbankan, maskapai, dan ribuan wisatawan di Lombok &amp; sekitarnya.
          </p>
        </Reveal>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Marquee Track */}
        <div className="client-marquee-track flex gap-5 py-3 hover:[animation-play-state:paused]">
          {duplicatedLogos.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex h-20 min-w-[190px] sm:min-w-[210px] items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-3.5 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md"
              title={client.name}
            >
              <div className="relative h-11 w-32 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="160px"
                  className="object-contain filter grayscale contrast-125 opacity-80 transition duration-300 hover:filter-none hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom trust highlights */}
      <div className="container-page mt-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 text-center">
          <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-2xl font-black text-[#2563EB]">12+</span>
            <span className="block mt-1 text-xs font-semibold text-slate-600">Tahun Pengalaman</span>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-2xl font-black text-[#2563EB]">14+</span>
            <span className="block mt-1 text-xs font-semibold text-slate-600">Klien Korporat &amp; BUMN</span>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-2xl font-black text-[#2563EB]">12 Unit</span>
            <span className="block mt-1 text-xs font-semibold text-slate-600">Armada Siap Jalan</span>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <span className="text-2xl font-black text-[#2563EB]">24 Jam</span>
            <span className="block mt-1 text-xs font-semibold text-slate-600">Standby di BIZAM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
