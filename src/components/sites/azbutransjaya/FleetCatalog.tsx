"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Gauge,
  UsersRound,
  Snowflake,
  Star,
  MessageCircle,
  MapPinned,
  Plane,
  Heart,
  BriefcaseBusiness,
  Fuel,
} from "lucide-react";
import { FLEET_DATA, FLEET_CATEGORIES, Car, whatsappUrl } from "./constants";

export function FleetCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredCars: Car[] =
    activeCategory === "Semua"
      ? FLEET_DATA
      : FLEET_DATA.filter(
          (car) => car.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="armada" className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28">
      {/* Background skyline overlay */}
      <Image
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-[0.13]"
        src="/images/drivemate/city-bg.jpg"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,.48)_0%,rgba(248,250,252,.94)_34%,#F8FAFC_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.07),transparent_24%),radial-gradient(circle_at_88%_72%,rgba(59,130,246,.05),transparent_28%)]" />

      <div className="site-container relative mx-auto w-[min(100%-40px,1176px)]">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Armada terbaik kami
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#111827] sm:text-[40px]">
              Pilih Kendaraan
              <br />
              Sesuai Kebutuhan Anda
            </h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#64748B]">
              Tersedia 12 pilihan unit prima untuk perjalanan dinas, liburan keluarga, airport transfer BIZAM Lombok, hingga rombongan wisata. Seluruh sewa sudah <strong>Include Driver + BBM + Air Mineral</strong>.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
            href={whatsappUrl("Halo Rental99 Transport Service & Tours, saya ingin konsultasi pilihan armada di Lombok.")}
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi via WhatsApp
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto border-b border-[#E2E8F0]">
          {FLEET_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === "Semua"
                ? FLEET_DATA.length
                : FLEET_DATA.filter(
                    (c) => c.category.toLowerCase() === cat.toLowerCase()
                  ).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer whitespace-nowrap px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "border-b-2 border-[#2563EB] text-[#2563EB]"
                    : "text-[#64748B] hover:text-[#111827]"
                }`}
              >
                {cat === "Semua" ? "Semua Armada" : cat} ({count})
              </button>
            );
          })}
        </div>

        {/* 4-Item Feature Strip */}
        <div className="mt-6 grid gap-y-4 border-y border-[#D9E4F2] py-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 lg:px-5 lg:pl-0">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-[#2563EB]">
              <Plane className="size-5" />
            </span>
            <span>
              <strong className="block text-xs font-bold text-[#111827]">Antar-Jemput BIZAM</strong>
              <span className="mt-0.5 block text-[10px] text-[#64748B]">Standby di Bandara Lombok</span>
            </span>
          </div>

          <div className="flex items-center gap-3 lg:border-l lg:border-[#D9E4F2] lg:px-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-[#2563EB]">
              <MapPinned className="size-5" />
            </span>
            <span>
              <strong className="block text-xs font-bold text-[#111827]">Sasak &amp; Mandalika Tour</strong>
              <span className="mt-0.5 block text-[10px] text-[#64748B]">Desa Sade, Kuta &amp; Sirkuit</span>
            </span>
          </div>

          <div className="flex items-center gap-3 lg:border-l lg:border-[#D9E4F2] lg:px-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-[#2563EB]">
              <Heart className="size-5" />
            </span>
            <span>
              <strong className="block text-xs font-bold text-[#111827]">Wisata 3 Gili</strong>
              <span className="mt-0.5 block text-[10px] text-[#64748B]">Trawangan, Meno &amp; Air</span>
            </span>
          </div>

          <div className="flex items-center gap-3 lg:border-l lg:border-[#D9E4F2] lg:px-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-[#2563EB]">
              <BriefcaseBusiness className="size-5" />
            </span>
            <span>
              <strong className="block text-xs font-bold text-[#111827]">Dinas &amp; Luar Daerah</strong>
              <span className="mt-0.5 block text-[10px] text-[#64748B]">Siap rute Sumbawa &amp; Bima</span>
            </span>
          </div>
        </div>

        {/* Vehicle Cards Grid - 12 Units */}
        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6">
          {filteredCars.map((car) => {
            const bookingMsg = `Halo Rental99 Transport Service & Tours, saya ingin booking armada ${car.name} (${car.price > 0 ? car.priceLabel : "Price by WhatsApp"}). Apakah unit tersedia untuk jadwal sewa saya?`;

            return (
              <article
                key={car.name}
                className="group flex min-h-[500px] w-[82vw] max-w-[310px] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-white bg-white shadow-[0_14px_38px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(37,99,235,.17)] sm:w-auto sm:max-w-none"
              >
                {/* Image Container with Radial Blue Glow */}
                <div className="relative aspect-[1.03] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#EFF6FF_0%,#DBEAFE_52%,#BFDBFE_100%)]">
                  <Image
                    src={car.image}
                    alt={`${car.name} Rental99 Lombok`}
                    fill
                    sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F3E88]/15 to-transparent" />

                  {/* Top Badges */}
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-[#2563EB] px-2.5 py-1.5 text-[9px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,.28)]">
                    <Star className="size-3 fill-current" />
                    {car.badge || "Pilihan Wisata"}
                  </span>
                  <span className="absolute right-3 top-3 rounded-lg border border-white/60 bg-white/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#16A34A] shadow-sm backdrop-blur">
                    Tersedia
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[17px] font-bold tracking-[-0.025em] text-[#111827]">
                    {car.name}
                  </h3>

                  {/* Feature chips */}
                  <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-2 text-[10px] text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <Gauge className="size-3.5 text-[#2563EB]" />
                      {car.transmission}
                    </span>
                    <span className="flex items-center gap-1">
                      <UsersRound className="size-3.5 text-[#2563EB]" />
                      {car.seats}
                    </span>
                    <span className="flex items-center gap-1">
                      <Snowflake className="size-3.5 text-[#2563EB]" />
                      AC Dingin
                    </span>
                  </div>

                  {/* Distinct "Include Driver + BBM + Mineral" Pill */}
                  <div className="mt-3.5 flex items-center gap-1.5 rounded-lg border border-[#DBEAFE] bg-[#EFF6FF] px-2.5 py-1 text-[10.5px] font-bold text-[#1D4ED8]">
                    <Fuel className="size-3 text-[#2563EB]" />
                    <span>Driver + BBM + Mineral Included</span>
                  </div>

                  {/* Price Row */}
                  <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#E2E8F0] pt-3.5">
                    <div>
                      <span className="block text-[10px] text-[#94A3B8]">Paket All-in</span>
                      {car.price > 0 ? (
                        <strong className="text-[18px] font-bold tracking-[-0.025em] text-[#2563EB] [font-variant-numeric:tabular-nums]">
                          Rp {car.price.toLocaleString("id-ID")}
                          <span className="ml-1 text-[11px] font-normal text-[#64748B]">/ Hari</span>
                        </strong>
                      ) : (
                        <strong className="text-[15px] font-bold tracking-tight text-[#2563EB]">
                          Hubungi Kami
                        </strong>
                      )}
                    </div>
                    <span className="text-right text-[10px] font-semibold text-[#16A34A]">
                      {car.price > 0 ? "BBM & Driver Siap" : "Order via WA"}
                    </span>
                  </div>

                  {/* WhatsApp CTA Button */}
                  <a
                    href={whatsappUrl(bookingMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-xs font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,.22)] transition hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_14px_28px_rgba(37,99,235,.3)]"
                  >
                    <MessageCircle className="size-4" />
                    {car.price > 0 ? "Pesan Sekarang" : "Tanya Harga via WA"}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
