"use client";

import { CarFront, CalendarDays, MessageSquareCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_STEPS } from "./constants";

export function BookingFlow() {
  const getIcon = (type: string) => {
    switch (type) {
      case "car":
        return <CarFront className="size-5 text-[#2563EB]" />;
      case "calendar":
        return <CalendarDays className="size-5 text-[#2563EB]" />;
      case "clipboard":
        return <MessageSquareCheck className="size-5 text-[#2563EB]" />;
      case "check":
        return <ShieldCheck className="size-5 text-[#2563EB]" />;
      default:
        return <CarFront className="size-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E8F0]">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
              <span>Proses Cepat &amp; Praktis</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Cara Booking Singkat
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B]">
              Sewa kendaraan atau paket tour di Lombok hanya dalam 4 langkah mudah tanpa repot.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKING_STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.05}>
              <article className="relative flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-slate-50/50 p-5 shadow-xs transition duration-200 hover:border-blue-300 hover:bg-white hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl bg-blue-50">
                    {getIcon(step.iconType)}
                  </span>
                  <span className="text-xs font-extrabold text-[#2563EB] bg-blue-100/70 rounded-md px-2 py-0.5">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-4 text-sm sm:text-base font-bold text-[#0F172A]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
