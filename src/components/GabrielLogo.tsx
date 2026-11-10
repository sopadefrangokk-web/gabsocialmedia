"use client";

import React from "react";

interface GabrielLogoProps {
  variant?: "full" | "compact" | "navbar";
  className?: string;
}

/**
 * Marca oficial GB Gabriel Marketing Digital
 * Imagem: public/logo-gabriel.jpg (gb identidade.jpeg)
 * O JPEG tem fundo branco, por isso exibimos em pastilha branca arredondada.
 */
export function GabrielLogo({ variant = "navbar", className = "" }: GabrielLogoProps) {
  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <span className="inline-flex rounded-2xl bg-white p-3 shadow-[0_0_40px_rgba(124,58,237,0.35)] ring-1 ring-white/20">
          <img
            src="/logo-gabriel.jpg"
            alt="GB Gabriel Marketing Digital"
            className="h-36 sm:h-44 w-auto object-contain"
          />
        </span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="inline-flex rounded-xl bg-white p-1.5 shadow-[0_0_24px_rgba(124,58,237,0.35)] ring-1 ring-white/20">
          <img
            src="/logo-gabriel.jpg"
            alt="GB Gabriel Marketing Digital"
            className="h-10 w-10 object-contain"
          />
        </span>
        <div className="flex flex-col leading-none">
          <span className="font-bold text-white text-sm tracking-tight">GB Gabriel</span>
          <span className="text-[9px] tracking-[0.34em] text-[#A855F7] font-bold mt-1">
            MARKETING DIGITAL
          </span>
        </div>
      </div>
    );
  }

  // navbar variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="inline-flex shrink-0 rounded-lg bg-white p-1 shadow-[0_0_16px_rgba(124,58,237,0.35)] ring-1 ring-white/20">
        <img
          src="/logo-gabriel.jpg"
          alt="GB Gabriel Marketing Digital"
          className="h-8 w-8 object-contain"
        />
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-bold text-white text-[13px] tracking-tight">Gabriel</span>
        <span className="text-[8px] tracking-[0.28em] text-[#A855F7] font-bold mt-0.5">
          MARKETING DIGITAL
        </span>
      </div>
    </div>
  );
}
