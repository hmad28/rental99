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
    <section id="beranda" className="relative w-full max-w-full overflow-hidden border-b border-[#E2E8F0]">
      {/* =========================================
          DESKTOP HERO VIEW (hidden md:block)
          Background: hero-bg-desktop.png
          ========================================= */}
      <div className="hidden md:block relative min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] w-full max-w-full">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 pointer-events-none max-w-full" aria-hidden="true">
          <Image
            src="/images/hero-bg-desktop.png"
            alt="Rental Mobil & Tour BIZAM Lombok Rental99"
            fill
            sizes="100%"
            priority
            className="object-cover object-right-bottom lg:object-center"
          />
        </div>

        {/* Soft bright ambient light overlay on the left to make hero vibrant & sunlit */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-white via-white/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
          aria-hidden="true"
        />

        {/* Desktop Hero Content Overlay */}
        <div className="container-page relative z-10 flex min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] items-center">
          <motion.div className="max-w-[560px] lg:max-w-[620px] py-16 lg:py-20" {...animFadeUp}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-xs backdrop-blur-xs">
              <span>Rental99 • Transport Service &amp; Tours</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08]">
              Rental Mobil &amp; Tour
              <span className="block text-[#2563EB]">BIZAM Lombok</span>
            </h1>

            {/* Beroperasi sejak 2012 - Posisikan tepat di bawah tulisan BIZAM */}
            <div className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/95 px-3.5 py-1 text-xs font-bold text-[#1D4ED8] shadow-xs backdrop-blur-xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Beroperasi sejak 2012</span>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm lg:text-base leading-relaxed text-[#334155] font-medium">
              Layanan transportasi rental mobil profesional di Lombok. Pilihan 12 armada prima lengkap{" "}
              <strong className="text-[#0F172A]">Include Driver + BBM + Air Mineral</strong> untuk airport transfer BIZAM, city tour, Sasak &amp; Gili.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-blue-600/40 active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                <span>Booking via WhatsApp</span>
              </a>

              <a
                href="#armada"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white/95 px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-xs backdrop-blur-xs transition hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-white active:scale-[0.98]"
              >
                <CarFront className="size-4" />
                <span>Lihat Armada</span>
              </a>
            </div>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-100 bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-xs">
                <ShieldCheck className="size-3.5 text-[#2563EB]" />
                Driver + BBM + Mineral
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-100 bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-xs">
                <MapPin className="size-3.5 text-[#2563EB]" />
                Standby BIZAM Lombok
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-100 bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-xs">
                <Award className="size-3.5 text-[#2563EB]" />
                12+ Pilihan Armada Prima
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          MOBILE HERO VIEW (block md:hidden)
          Clean, lower, balanced, no horizontal overflow
          ========================================= */}
      <div className="block md:hidden relative min-h-[690px] sm:min-h-[760px] w-full max-w-full overflow-hidden">
        {/* Mobile Background Image (Full visual, avoiding 100vw) */}
        <div className="absolute inset-0 pointer-events-none max-w-full" aria-hidden="true">
          <Image
            src="/images/hero-bg-mobile.png"
            alt="Rental Mobil & Tour BIZAM Lombok Rental99"
            fill
            sizes="100%"
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Soft white-to-transparent gradient overlay behind text area only (upper 50%) - bright and fresh */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[50%] max-w-full bg-gradient-to-b from-white via-white/90 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-12 -left-12 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl"
          aria-hidden="true"
        />

        {/* Mobile Hero Content Overlay:
            - 24-32px spacing below navbar: pt-8 (32px)
            - 20px horizontal padding: px-5
            - Flex column between top text block & bottom visual space
        */}
        <div className="relative z-10 px-5 pt-8 sm:pt-10 pb-8 flex flex-col justify-between min-h-[690px] sm:min-h-[760px] max-w-full">
          {/* Upper 45–50%: Minimal, Premium Text Block */}
          <div className="max-w-[320px] w-full">
            {/* Small Eyebrow Text */}
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">
              Rental99 • BIZAM Lombok
            </p>

            {/* Strong, Tighter Headline */}
            <h1 className="mt-2.5 text-[28px] sm:text-[32px] font-extrabold tracking-tight text-[#0F172A] leading-[1.14]">
              Rental Mobil &amp; Tour
              <span className="block text-[#2563EB]">BIZAM Lombok</span>
            </h1>

            {/* Beroperasi sejak 2012 - Posisikan tepat di bawah tulisan BIZAM */}
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-[#1D4ED8] shadow-xs backdrop-blur-xs">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>Beroperasi sejak 2012</span>
            </div>

            {/* Short Supporting Sentence */}
            <p className="mt-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium max-w-[310px]">
              Armada terawat lengkap include driver, BBM &amp; mineral siap di Bandara BIZAM.
            </p>

            {/* CTA Row: wraps safely if needed */}
            <div className="mt-5 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-4 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition active:scale-[0.98]"
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

            {/* Compact Trust Line with sufficient spacing below CTA */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2 text-[11px] font-medium text-slate-600">
              <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Include Driver + BBM • Air Mineral • Standby BIZAM</span>
            </div>
          </div>

          {/* Lower 50–55%: Unobstructed Vehicle Fleet Visual Space */}
          <div className="h-[340px] sm:h-[390px] w-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
