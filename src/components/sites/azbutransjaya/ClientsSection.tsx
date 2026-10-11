"use client";

import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CLIENTS_DATA } from "./constants";
import { Reveal } from "./Reveal";

export function ClientsSection() {
  // Split logos into 2 rows for 2 horizontal marquee tracks
  const half = Math.ceil(CLIENTS_DATA.length / 2);
  const row1Logos = CLIENTS_DATA.slice(0, half);
  const row2Logos = CLIENTS_DATA.slice(half);

  // Duplicate each row for a seamless, continuous infinite loop
  const duplicatedRow1 = [...row1Logos, ...row1Logos];
  const duplicatedRow2 = [...row2Logos, ...row2Logos];

  return (
    <section id="klien" className="relative w-full max-w-full overflow-hidden bg-gradient-to-b from-[#F0F7FF]/40 via-white to-white py-16 sm:py-20 lg:py-24 border-b border-blue-100/60">
      <div className="container-page w-full max-w-full min-w-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sisi Kiri: Headline, Deskripsi Singkat & Statistik (35–40% desktop) */}
          <div className="w-full min-w-0 lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-2xs">
                <Award className="size-3.5 shrink-0" />
                <span>Transportasi terpercaya sejak tahun 2012</span>
              </div>

              <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl leading-tight break-words">
                Klien Kami
              </h2>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#475569] break-words">
                Rental99 telah dipercaya oleh instansi kementerian, BUMN, korporasi nasional, dan ribuan pelanggan untuk layanan transportasi yang andal, aman, dan tepat waktu di Lombok.
              </p>

              {/* Trust Metric Highlights */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 max-w-sm">
                <div className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-lg font-black text-[#2563EB]">
                    <ShieldCheck className="size-4 shrink-0" />
                    <span>12+ Tahun</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                    Pengalaman Melayani
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-lg font-black text-[#2563EB]">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                    <span>13+ Mitra</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                    BUMN &amp; Instansi Resmi
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sisi Kanan: Area Infinite Marquee 2 Baris Horizontal (60–65% desktop, stack vertical di mobile) */}
          <div className="w-full min-w-0 lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/50 py-5 sm:py-6 shadow-xs">
                {/* Left & Right Edge Gradient Fades for Smooth Seamless Transition */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-slate-50/95 via-slate-50/60 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-slate-50/95 via-slate-50/60 to-transparent"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-3.5 sm:gap-4 overflow-hidden">
                  {/* Baris Pertama: Bergerak dari Kanan ke Kiri */}
                  <div className="relative w-full overflow-hidden">
                    <div className="client-marquee-left flex gap-3.5 sm:gap-4">
                      {duplicatedRow1.map((client, idx) => (
                        <div
                          key={`row1-${client.name}-${idx}`}
                          className="flex h-[76px] w-[170px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md sm:h-[84px] sm:w-[195px] sm:px-6 sm:py-3.5"
                          title={client.name}
                        >
                          <div className="relative flex h-full w-full items-center justify-center">
                            <Image
                              src={client.logo}
                              alt={client.name}
                              fill
                              sizes="195px"
                              className="object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Baris Kedua: Bergerak Berlawanan Arah (dari Kiri ke Kanan) */}
                  <div className="relative w-full overflow-hidden">
                    <div className="client-marquee-right flex gap-3.5 sm:gap-4">
                      {duplicatedRow2.map((client, idx) => (
                        <div
                          key={`row2-${client.name}-${idx}`}
                          className="flex h-[76px] w-[170px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md sm:h-[84px] sm:w-[195px] sm:px-6 sm:py-3.5"
                          title={client.name}
                        >
                          <div className="relative flex h-full w-full items-center justify-center">
                            <Image
                              src={client.logo}
                              alt={client.name}
                              fill
                              sizes="195px"
                              className="object-contain"
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
