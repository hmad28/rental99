"use client";

import { Compass, Palmtree, Plane, MapPin, ArrowRight, MessageCircle, Layers } from "lucide-react";
import { SERVICES_DATA, whatsappUrl } from "./constants";
import { Reveal } from "./Reveal";

export function Services() {
  const getIcon = (type: string) => {
    switch (type) {
      case "compass":
        return <Compass className="size-5 text-[#2563EB]" />;
      case "palmtree":
        return <Palmtree className="size-5 text-[#2563EB]" />;
      case "plane":
        return <Plane className="size-5 text-[#2563EB]" />;
      case "map":
        return <MapPin className="size-5 text-[#2563EB]" />;
      default:
        return <Compass className="size-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="layanan" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E8F0]">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sisi Kiri: Header & Deskripsi Singkat */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
                <Layers className="size-3.5" />
                <span>Layanan Utama</span>
              </div>

              <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl leading-tight">
                Solusi Transportasi
                <br className="hidden sm:inline" />
                Terpercaya di Lombok
              </h2>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                Rental99 siap melayani berbagai kebutuhan mobilitas Anda dengan unit bersih, supir berpengalaman, dan layanan tepat waktu di seluruh Lombok hingga rute luar pulau.
              </p>

              <div className="mt-6 sm:mt-8">
                <a
                  href={whatsappUrl("Halo Rental99 Transport Service & Tours, saya ingin konsultasi layanan transportasi di Lombok.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-[#1D4ED8] hover:shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="size-4" />
                  <span>Konsultasi Layanan via WA</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Sisi Kanan: Satu Card Putih Clean Berisi 4 Layanan Layout Vertikal */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs transition duration-200 hover:shadow-md">
                <div className="divide-y divide-slate-100">
                  {SERVICES_DATA.map((srv) => (
                    <a
                      key={srv.id}
                      href={whatsappUrl(`Halo Rental99, saya ingin menanyakan informasi mengenai "${srv.title}".`)}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 transition hover:bg-blue-50/40"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        {/* Icon kecil dengan aksen biru lembut */}
                        <div className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100/80">
                          {getIcon(srv.iconType)}
                        </div>

                        {/* Judul bold & Subjudul singkat 1 baris */}
                        <div className="min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] transition truncate">
                            {srv.title}
                          </h3>
                          <p className="mt-0.5 text-xs text-[#64748B] truncate">
                            {srv.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Panah halus */}
                      <ArrowRight className="size-4 shrink-0 text-slate-300 transition duration-200 group-hover:translate-x-1 group-hover:text-[#2563EB]" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
