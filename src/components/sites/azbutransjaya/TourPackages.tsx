"use client";

import Image from "next/image";
import { CheckCircle2, Clock, MapPin, MessageCircle, ArrowRight, Compass } from "lucide-react";
import { TOUR_PACKAGES_DATA, whatsappUrl } from "./constants";
import { Reveal } from "./Reveal";

export function TourPackages() {
  return (
    <section id="tour" className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-26">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <Reveal className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              <Compass className="size-3.5" />
              <span>Explore Lombok Paradise</span>
            </div>
            <h2 className="mt-3.5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Paket Tour &amp; Wisata Lombok
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              Jelajahi keindahan Lombok tanpa ribet dengan paket tour 1 hari terpopuler. Seluruh paket sudah termasuk transportasi nyaman, driver ramah sebagai pemandu, BBM, air mineral, dan tiket masuk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={whatsappUrl("Halo Rental99 Transport Service & Tours, saya ingin konsultasi custom paket tour di Lombok.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-3 text-xs font-bold text-[#2563EB] shadow-xs transition hover:bg-blue-50 hover:shadow-md"
            >
              <span>Custom Rute Wisata via WhatsApp</span>
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        {/* 3-Column Tour Packages Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {TOUR_PACKAGES_DATA.map((pkg, idx) => {
            const bookingText = `Halo Rental99, saya tertarik memesan "${pkg.title}" (${pkg.duration}). Mohon info ketersediaan dan detail perjalanannya.`;

            return (
              <Reveal key={pkg.id} delay={idx * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
                  {/* Tour Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                    {/* Tag Badge */}
                    <span className="absolute left-3.5 top-3.5 rounded-lg bg-[#2563EB] px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                      {pkg.tag}
                    </span>

                    {/* Duration Pill */}
                    <span className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-lg border border-white/30 bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur">
                      <Clock className="size-3 text-[#2563EB]" />
                      {pkg.duration}
                    </span>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3.5 left-4 right-4">
                      <h3 className="text-lg font-bold leading-snug text-white">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Destinations List */}
                    <div className="mb-5">
                      <span className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                        <MapPin className="size-3.5" />
                        Destinasi Dikunjungi:
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.destinations.map((dest) => (
                          <li key={dest} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                            <span>{dest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Facilities List */}
                    <div className="mt-auto border-t border-slate-100 pt-4">
                      <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Fasilitas Termasuk:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.facilities.map((fac) => (
                          <span
                            key={fac}
                            className="rounded-md bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-[10.5px] font-medium text-slate-600"
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
                      className="mt-6 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-xs font-bold text-white shadow-md shadow-blue-600/20 transition hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-600/30"
                    >
                      <MessageCircle className="size-4" />
                      <span>Pesan Paket Tour Ini</span>
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
