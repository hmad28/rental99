"use client";

import { ShieldCheck, Clock, Headphones, Car, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { EXPERIENCE_ITEMS } from "./constants";

export function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldCheck className="size-6 text-[#2563EB]" />;
      case "clock":
        return <Clock className="size-6 text-[#2563EB]" />;
      case "headset":
        return <Headphones className="size-6 text-[#2563EB]" />;
      case "car":
        return <Car className="size-6 text-[#2563EB]" />;
      default:
        return <ShieldCheck className="size-6 text-[#2563EB]" />;
    }
  };

  return (
    <section id="keunggulan" className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF]/50 via-white to-white py-16 sm:py-20 lg:py-24 border-b border-blue-100/60">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-2xs">
              <Check className="size-3.5" />
              <span>Nilai Layanan Kami</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Kenapa Pilih Rental99
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#475569]">
              Berpengalaman lebih dari 12 tahun memberikan layanan transportasi terbaik, aman, dan nyaman di Lombok.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="grid size-12 place-items-center rounded-xl bg-blue-50/90 shadow-2xs">
                  {getIcon(item.iconType)}
                </div>
                <h3 className="mt-4 text-sm sm:text-base font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
