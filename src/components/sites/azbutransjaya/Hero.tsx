"use client";

import Image from "next/image";
import { CarFront, MessageCircle, ShieldCheck, MapPin, Award, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "./constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animFadeUp = !shouldReduceMotion
    ? {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  return (
    <section id="beranda" className="relative w-full overflow-hidden border-b border-[#E2E8F0]">
      {/* =========================================
          DESKTOP HERO VIEW (hidden md:block)
          Background: hero-bg-desktop.png
          ========================================= */}
      <div className="hidden md:block relative min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] w-full">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/hero-bg-desktop.png"
            alt="Rental Mobil & Tour BIZAM Lombok Rental99"
            fill
            sizes="100vw"
            priority
            className="object-cover object-right-bottom lg:object-center"
          />
        </div>

        {/* Desktop Hero Content Overlay */}
        <div className="container-page relative z-10 flex min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] items-center">
          <motion.div className="max-w-[560px] lg:max-w-[620px] py-16 lg:py-20" {...animFadeUp}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-2xs backdrop-blur-xs">
              <span>Rental99 • Transport Service &amp; Tours</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08]">
              Rental Mobil &amp; Tour
              <span className="block text-[#2563EB]">BIZAM Lombok</span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm lg:text-base leading-relaxed text-[#475569] font-medium">
              Transportasi terpercaya sejak tahun 2012 di Lombok. Pilihan 12 armada prima lengkap{" "}
              <strong className="text-[#0F172A]">Include Driver + BBM + Air Mineral</strong> untuk airport transfer BIZAM, city tour, Sasak &amp; Gili.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                <span>Booking via WhatsApp</span>
              </a>

              <a
                href="#armada"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-xs backdrop-blur-xs transition hover:border-blue-400 hover:text-[#2563EB] hover:bg-white active:scale-[0.98]"
              >
                <CarFront className="size-4" />
                <span>Lihat Armada</span>
              </a>
            </div>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white/85 px-3 py-1.5 shadow-2xs backdrop-blur-xs">
                <ShieldCheck className="size-3.5 text-[#2563EB]" />
                Driver + BBM + Mineral
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white/85 px-3 py-1.5 shadow-2xs backdrop-blur-xs">
                <Award className="size-3.5 text-[#2563EB]" />
                Terpercaya Sejak 2012
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white/85 px-3 py-1.5 shadow-2xs backdrop-blur-xs">
                <MapPin className="size-3.5 text-[#2563EB]" />
                Standby BIZAM Lombok
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          MOBILE HERO VIEW (block md:hidden)
          Redesigned: Clean, Premium, Minimal UI
          ========================================= */}
      <div className="block md:hidden relative min-h-[660px] sm:min-h-[720px] w-full overflow-hidden">
        {/* Mobile Background Image (Full visual) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/hero-bg-mobile.png"
            alt="Rental Mobil & Tour BIZAM Lombok Rental99"
            fill
            sizes="100vw"
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Soft white-to-transparent gradient overlay behind text area only (upper 50%) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[52%] bg-gradient-to-b from-white/95 via-white/80 to-transparent"
          aria-hidden="true"
        />

        {/* Mobile Hero Content Overlay */}
        <div className="relative z-10 px-5 pt-7 pb-8 flex flex-col justify-between min-h-[660px] sm:min-h-[720px]">
          {/* Upper 45–50%: Minimal, Premium Text Block */}
          <div className="max-w-[320px]">
            {/* Small Eyebrow Text */}
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">
              Rental99 • BIZAM Lombok
            </p>

            {/* Strong, Tighter Headline */}
            <h1 className="mt-1.5 text-[27px] sm:text-[31px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
              Rental Mobil &amp; Tour
              <span className="block text-[#2563EB]">BIZAM Lombok</span>
            </h1>

            {/* Short Supporting Sentence */}
            <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
              Armada terawat lengkap include driver, BBM &amp; mineral siap di Bandara BIZAM.
            </p>

            {/* One Primary WhatsApp CTA + One Secondary "Lihat Armada" Text Link */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-xs font-bold text-white shadow-md shadow-blue-600/25 transition active:scale-[0.98]"
              >
                <MessageCircle className="size-3.5" />
                <span>Booking via WA</span>
              </a>

              <a
                href="#armada"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition py-1"
              >
                <span>Lihat Armada</span>
                <ArrowRight className="size-3 text-[#2563EB]" />
              </a>
            </div>

            {/* Compact Trust Line */}
            <div className="mt-3.5 flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500">
              <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Driver + BBM • Air Mineral • Sejak 2012</span>
            </div>
          </div>

          {/* Lower 50–55%: Unobstructed Vehicle Fleet & Lombok Scenery Visual Space */}
          <div className="h-[320px] sm:h-[370px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
