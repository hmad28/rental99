"use client";

import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CLIENTS_DATA } from "./constants";
import { Reveal } from "./Reveal";

export function ClientsSection() {
  // 7 logos for column 1
  const col1Logos = [
    CLIENTS_DATA[0], // MS Glow For Men
    CLIENTS_DATA[1], // DANA Indonesia
    CLIENTS_DATA[2], // BRIN
    CLIENTS_DATA[3], // J99 Corp.
    CLIENTS_DATA[4], // Traveloka
    CLIENTS_DATA[5], // Bank Mandiri
    CLIENTS_DATA[6], // Bank Indonesia
  ];

  // 7 logos for column 2 (6 remaining + Bank Mandiri to maintain equal height)
  const col2Logos = [
    CLIENTS_DATA[7], // Kementerian Imigrasi & Pemasyarakatan
    CLIENTS_DATA[8], // Aston International
    CLIENTS_DATA[9], // Ferrari Owners' Club Indonesia
    CLIENTS_DATA[10], // BNPB Indonesia
    CLIENTS_DATA[11], // Telkom Indonesia
    CLIENTS_DATA[12], // McLaren Club Indonesia
    CLIENTS_DATA[5], // Bank Mandiri
  ];

  // Logos with square / compact aspect ratios to scale slightly so they are visually balanced
  const isBoostedLogo = (name: string) => {
    return (
      name.includes("MS Glow") ||
      name.includes("McLaren") ||
      name.includes("Ferrari") ||
      name.includes("BNPB")
    );
  };

  return (
    <section
      id="klien"
      className="relative w-full max-w-full overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 lg:py-24 border-b border-[#E2E8F0]"
    >
      {/* Scoped keyframes for continuous vertical infinite marquee in opposite directions */}
      <style>{`
        @keyframes clientVerticalScrollUp {
          0% {
            transform: translate3d(0px, 0px, 0px);
          }
          100% {
            transform: translate3d(0px, -100%, 0px);
          }
        }

        @keyframes clientVerticalScrollDown {
          0% {
            transform: translate3d(0px, -100%, 0px);
          }
          100% {
            transform: translate3d(0px, 0px, 0px);
          }
        }

        .client-vertical-track-up {
          display: flex !important;
          flex-direction: column !important;
          flex-shrink: 0 !important;
          will-change: transform;
          animation: clientVerticalScrollUp 26s linear infinite !important;
        }

        .client-vertical-track-down {
          display: flex !important;
          flex-direction: column !important;
          flex-shrink: 0 !important;
          will-change: transform;
          animation: clientVerticalScrollDown 28s linear infinite !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .client-vertical-track-up {
            animation: clientVerticalScrollUp 26s linear infinite !important;
          }
          .client-vertical-track-down {
            animation: clientVerticalScrollDown 28s linear infinite !important;
          }
        }
      `}</style>

      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sisi Kiri: Badge, Headline, Deskripsi, dan Statistik */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
                <Award className="size-3.5" />
                <span>Transportasi terpercaya sejak tahun 2012</span>
              </div>

              <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl leading-tight">
                Dipercaya Oleh Klien &amp; Mitra Kami
              </h2>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                Rental99 telah dipercaya oleh instansi kementerian, BUMN, korporasi nasional, perbankan, dan ribuan pelanggan untuk layanan transportasi yang andal, aman, dan tepat waktu di Lombok.
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
                    <span>13+ Mitra</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                    BUMN &amp; Instansi Resmi
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sisi Kanan: 2 Kolom Vertikal Bergerak Naik & Turun Berlawanan Arah */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative h-[420px] sm:h-[470px] lg:h-[500px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xs">
                {/* Top and Bottom Gradient Fades for Smooth Transition */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 sm:h-20 bg-gradient-to-b from-white via-white/80 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20 bg-gradient-to-t from-white via-white/80 to-transparent"
                  aria-hidden="true"
                />

                {/* 2 Vertical Marquee Columns */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full overflow-hidden">
                  {/* Kolom 1 (Kiri): Bergerak dari Bawah ke Atas */}
                  <div className="flex flex-col h-full overflow-hidden select-none">
                    {[0, 1].map((trackIdx) => (
                      <div
                        key={`col1-track-${trackIdx}`}
                        className="client-vertical-track-up flex flex-col gap-3 sm:gap-3.5 pb-3 sm:pb-3.5"
                        aria-hidden={trackIdx > 0 ? "true" : undefined}
                      >
                        {col1Logos.map((client, idx) => (
                          <div
                            key={`col1-${trackIdx}-${client.name}-${idx}`}
                            className="flex h-18 sm:h-20 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 sm:p-4 shadow-2xs transition duration-200 hover:border-blue-300 hover:bg-white hover:shadow-xs"
                            title={client.name}
                          >
                            <div className="relative h-10 sm:h-12 w-full flex items-center justify-center">
                              <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                sizes="(min-width: 1024px) 200px, 150px"
                                className={`object-contain ${
                                  isBoostedLogo(client.name)
                                    ? "scale-115 sm:scale-120"
                                    : "scale-100"
                                }`}
                                loading="eager"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Kolom 2 (Kanan): Bergerak dari Atas ke Bawah */}
                  <div className="flex flex-col h-full overflow-hidden select-none">
                    {[0, 1].map((trackIdx) => (
                      <div
                        key={`col2-track-${trackIdx}`}
                        className="client-vertical-track-down flex flex-col gap-3 sm:gap-3.5 pb-3 sm:pb-3.5"
                        aria-hidden={trackIdx > 0 ? "true" : undefined}
                      >
                        {col2Logos.map((client, idx) => (
                          <div
                            key={`col2-${trackIdx}-${client.name}-${idx}`}
                            className="flex h-18 sm:h-20 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 sm:p-4 shadow-2xs transition duration-200 hover:border-blue-300 hover:bg-white hover:shadow-xs"
                            title={client.name}
                          >
                            <div className="relative h-10 sm:h-12 w-full flex items-center justify-center">
                              <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                sizes="(min-width: 1024px) 200px, 150px"
                                className={`object-contain ${
                                  isBoostedLogo(client.name)
                                    ? "scale-115 sm:scale-120"
                                    : "scale-100"
                                }`}
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
