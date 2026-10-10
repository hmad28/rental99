"use client";

import Image from "next/image";
import { CheckCircle2, Clock, MapPin, MessageCircle, ArrowRight, Compass } from "lucide-react";
import { TOUR_PACKAGES_DATA, whatsappUrl } from "./constants";
import { Reveal } from "./Reveal";

export function TourPackages() {
  return (
    <section id="tour" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E8F0]">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10 sm:mb-12">
          <Reveal className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
              <Compass className="size-3.5" />
              <span>Paket Wisata Lombok</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Paket Tour Pilihan
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B]">
              Jelajahi keindahan Lombok tanpa ribet. Sudah termasuk kendaraan ber-AC, supir pemandu, BBM, air mineral, dan tiket masuk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={whatsappUrl("Halo Rental99 Transport Service & Tours, saya ingin konsultasi custom paket tour di Lombok.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#2563EB] shadow-xs transition hover:bg-blue-50 hover:shadow-sm"
            >
              <span>Custom Rute via WhatsApp</span>
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        {/* 3-Column Tour Packages Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOUR_PACKAGES_DATA.map((pkg, idx) => {
            const bookingText = `Halo Rental99, saya tertarik memesan "${pkg.title}" (${pkg.duration}). Mohon info ketersediaan dan detail perjalanannya.`;

            return (
              <Reveal key={pkg.id} delay={idx * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                  {/* Tour Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    {/* Tag Badge */}
                    <span className="absolute left-3 top-3 rounded-md bg-[#2563EB] px-2.5 py-1 text-[10px] font-bold text-white shadow-xs">
                      {pkg.tag}
                    </span>

                    {/* Duration Pill */}
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800 backdrop-blur">
                      <Clock className="size-3 text-[#2563EB]" />
                      {pkg.duration}
                    </span>

                    {/* Title on Image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <h3 className="text-base font-bold text-white leading-snug">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    {/* Destinations List */}
                    <div className="mb-4">
                      <span className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                        <MapPin className="size-3" />
                        Destinasi Utama:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {pkg.destinations.map((dest) => (
                          <li key={dest} className="flex items-start gap-1.5">
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                            <span className="line-clamp-1">{dest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Facilities List */}
                    <div className="mt-auto border-t border-slate-100 pt-3">
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.facilities.map((fac) => (
                          <span
                            key={fac}
                            className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                          >
                            {fac}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={whatsappUrl(bookingText)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] text-xs font-bold text-white shadow-xs transition hover:bg-[#1D4ED8] hover:shadow-md active:scale-[0.98]"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>Pesan Paket Tour via WA</span>
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
