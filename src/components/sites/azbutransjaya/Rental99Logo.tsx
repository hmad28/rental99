import React from "react";
import Image from "next/image";

interface Rental99LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Rental99Logo({ className = "", variant = "dark" }: Rental99LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/images/rental99-logo.png"
        alt="Rental99 Transport Service & Tours"
        width={195}
        height={52}
        priority
        className={`h-10 w-auto object-contain ${
          isLight ? "brightness-0 invert drop-shadow-sm" : ""
        }`}
      />
    </div>
  );
}
