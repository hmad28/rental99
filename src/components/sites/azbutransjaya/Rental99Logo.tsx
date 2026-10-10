import React from "react";

interface Rental99LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Rental99Logo({ className = "", variant = "dark" }: Rental99LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#0F172A] shadow-md shadow-blue-600/20 border border-blue-400/30">
        <span className="text-white font-black text-lg tracking-tighter italic">99</span>
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span
            className={`font-black text-xl tracking-tight ${
              isLight ? "text-white" : "text-[#0F172A]"
            }`}
          >
            RENTAL
          </span>
          <span className="font-black text-xl text-[#2563EB] ml-0.5">99</span>
        </div>
        <span
          className={`text-[9.5px] font-bold uppercase tracking-[0.22em] mt-0.5 ${
            isLight ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Surabaya &amp; Sidoarjo
        </span>
      </div>
    </div>
  );
}
