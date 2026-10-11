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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2244] via-[#1E40AF] to-[#2563EB] p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-blue-900/20">
            {/* Luminous Ambient Glows */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-96 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-xs">
                  <Sparkles className="size-3.5 text-sky-200" />
                  <span>Mulai Perjalanan Anda</span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                  Siap Menjelajahi Lombok
                  <br className="hidden sm:inline" />
                  Bersama Rental99?
                </h2>

                <p className="mt-3 max-w-xl text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Konsultasikan jadwal kedatangan di BIZAM Lombok dan armada impian Anda. Tim kami siap merespons dengan cepat dan ramah 24/7.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-[#1D4ED8] hover:shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="size-4" />
                    <span>Booking via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/10 hover:border-white/30"
                  >
                    <PhoneCall className="size-4 text-slate-300" />
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
