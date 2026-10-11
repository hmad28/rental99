"use client";

import Image from "next/image";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappUrl, PHONE_NUMBER } from "./constants";

export function CtaBanner() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#071F42] p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-blue-900/30">
            {/* Background Image: cta-bg.png */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <Image
                src="/images/cta-bg.png"
                alt="Rental99 Lombok Transport Service & Tours"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover object-right md:object-center"
              />
              {/* Soft overlay on left side to guarantee high contrast text legibility while revealing background artwork */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#071F42]/85 via-[#071F42]/50 to-transparent lg:w-3/5" />
              {/* Bottom edge fade on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F42]/70 via-transparent to-transparent md:hidden" />
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-xs">
                  <Sparkles className="size-3.5 text-sky-300" />
                  <span>Mulai Perjalanan Anda</span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                  Siap Menjelajahi Lombok
                  <br className="hidden sm:inline" />
                  Bersama Rental99?
                </h2>

                <p className="mt-3 max-w-xl text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  Konsultasikan jadwal kedatangan di BIZAM Lombok dan armada impian Anda. Tim kami siap merespons dengan cepat dan ramah 24/7.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/40 transition hover:bg-[#1D4ED8] hover:shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="size-4" />
                    <span>Booking via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-xs transition hover:bg-white/20 hover:border-white/50"
                  >
                    <PhoneCall className="size-4 text-sky-200" />
                    <span>Telepon Langsung</span>
                  </a>
                </div>
              </div>

              {/* Vehicle visual preview */}
              <div className="relative aspect-[16/9] lg:aspect-auto lg:h-64 lg:col-span-5">
                <Image
                  src="/images/hero-fleet-final.png"
                  alt="Armada Rental99 Lombok"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
