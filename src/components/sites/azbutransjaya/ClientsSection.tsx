"use client";

import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CLIENTS_DATA } from "./constants";
import { Reveal } from "./Reveal";

export function ClientsSection() {
  // Split 14 logos into 2 columns of 7 logos each
  const col1Logos = CLIENTS_DATA.slice(0, 7);
  const col2Logos = CLIENTS_DATA.slice(7, 14);

  // Duplicate each column for a seamless infinite loop
  const duplicatedCol1 = [...col1Logos, ...col1Logos];
  const duplicatedCol2 = [...col2Logos, ...col2Logos];

  return (
    <section id="klien" className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E2E8F0]">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sisi Kiri: Headline & Teks Singkat Sesuai Arahan Client */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
                <Award className="size-3.5" />
                <span>Transportasi terpercaya sejak tahun 2012</span>
              </div>

              <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl leading-tight">
                Klien Kami
              </h2>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                Rental99 telah dipercaya oleh instansi kementerian, BUMN, korporasi nasional, dan ribuan pelanggan untuk layanan transportasi yang andal, aman, dan tepat waktu di Lombok.
              </p>

              {/* Trust Metric Highlights */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 max-w-sm">
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-lg font-black text-[#2563EB]">
                    <ShieldCheck className="size-4" />
                    <span>12+ Tahun</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                    Pengalaman Melayani
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-lg font-black text-[#2563EB]">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>14+ Mitra</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                    BUMN &amp; Instansi Resmi
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sisi Kanan: Logo-logo Client dalam 2 Kolom Infinite Scroll Vertikal */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative h-[360px] sm:h-[420px] lg:h-[440px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xs">
                {/* Top and Bottom Gradient Fades for Smooth Transition */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 sm:h-20 bg-gradient-to-b from-white via-white/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20 bg-gradient-to-t from-white via-white/80 to-transparent" />

                {/* 2 Vertical Marquee Columns */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                  {/* Kolom Pertama: Scroll ke Atas */}
                  <div className="relative overflow-hidden">
                    <div className="client-marquee-up flex flex-col gap-3 sm:gap-3.5 hover:[animation-play-state:paused]">
                      {duplicatedCol1.map((client, idx) => (
                        <div
                          key={`col1-${client.name}-${idx}`}
                          className="flex h-16 sm:h-20 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4 shadow-2xs transition duration-200 hover:border-blue-300 hover:bg-white hover:shadow-sm"
                          title={client.name}
                        >
                          <div className="relative h-9 sm:h-11 w-full flex items-center justify-center">
                            <Image
                              src={client.logo}
                              alt={client.name}
                              fill
                              sizes="(min-width: 1024px) 180px, 140px"
                              className="object-contain filter grayscale opacity-75 transition duration-300 hover:filter-none hover:opacity-100"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Kolom Kedua: Scroll ke Bawah */}
                  <div className="relative overflow-hidden">
                    <div className="client-marquee-down flex flex-col gap-3 sm:gap-3.5 hover:[animation-play-state:paused]">
                      {duplicatedCol2.map((client, idx) => (
                        <div
                          key={`col2-${client.name}-${idx}`}
                          className="flex h-16 sm:h-20 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4 shadow-2xs transition duration-200 hover:border-blue-300 hover:bg-white hover:shadow-sm"
                          title={client.name}
                        >
                          <div className="relative h-9 sm:h-11 w-full flex items-center justify-center">
                            <Image
                              src={client.logo}
                              alt={client.name}
                              fill
                              sizes="(min-width: 1024px) 180px, 140px"
                              className="object-contain filter grayscale opacity-75 transition duration-300 hover:filter-none hover:opacity-100"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
