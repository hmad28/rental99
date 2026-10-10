import React from "react";
import Image from "next/image";

interface Rental99LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Rental99Logo({ className = "" }: Rental99LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/images/rental99-logo.png"
        alt="Rental99 Transport Service & Tours"
        width={195}
        height={52}
        priority
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
