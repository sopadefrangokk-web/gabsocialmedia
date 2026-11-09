"use client";

import React from "react";

interface GabrielLogoProps {
  variant?: "full" | "compact" | "navbar";
  className?: string;
}

/**
 * Recriação vetorial da marca GB Gabriel Social Media
 * (baseada no PNG anexado pelo cliente)
 */
export function GabrielLogo({ variant = "navbar", className = "" }: GabrielLogoProps) {
  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Monograma GB */}
        <div className="relative inline-flex items-start justify-center leading-none select-none">
          <span
            className="font-serif-italic font-bold text-[#6D28D9] tracking-tighter"
            style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 0.9 }}
          >
            G
          </span>
          <span
            className="font-serif-italic font-bold text-[#6D28D9] -ml-3 mt-1 tracking-tighter"
            style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 0.9 }}
          >
            B
          </span>
          {/* Swoosh */}
          <svg
            className="absolute left-1/2 top-[52%] -translate-x-1/2 w-[130%] pointer-events-none"
            viewBox="0 0 200 24"
            fill="none"
          >
            <path
              d="M4 16 C60 6, 140 4, 196 12"
              stroke="#6D28D9"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span
          className="font-bold tracking-[0.32em] text-[#6D28D9] mt-1"
          style={{ fontSize: "clamp(18px, 2.4vw, 28px)" }}
        >
          GABRIEL
        </span>
        <div className="flex items-center gap-3 mt-1">
          <span className="h-[2px] w-8 bg-[#6D28D9]" />
          <span className="text-[#6D28D9] text-[10px] sm:text-xs font-semibold tracking-[0.45em]">
            SOCIAL MEDIA
          </span>
          <span className="h-[2px] w-8 bg-[#6D28D9]" />
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative inline-flex items-start leading-none">
          <span
            className="font-serif-italic font-bold text-[#7C3AED]"
            style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 28, lineHeight: 0.9 }}
          >
            G
          </span>
          <span
            className="font-serif-italic font-bold text-[#7C3AED] -ml-1.5 mt-0.5"
            style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 28, lineHeight: 0.9 }}
          >
            B
          </span>
          <svg className="absolute left-1/2 top-[58%] -translate-x-1/2 w-[120%]" viewBox="0 0 100 12" fill="none">
            <path d="M2 8 C30 3, 70 2, 98 6" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-bold tracking-[0.22em] text-white text-sm">GABRIEL</span>
          <span className="text-[9px] tracking-[0.38em] text-[#A855F7] font-semibold mt-0.5">SOCIAL MEDIA</span>
        </div>
      </div>
    );
  }

  // navbar variant - horizontal pill style like Fly Studio reference
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative inline-flex items-start leading-none shrink-0">
        <span
          className="font-serif-italic font-bold text-[#8B5CF6]"
          style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 30, lineHeight: 0.9 }}
        >
          G
        </span>
        <span
          className="font-serif-italic font-bold text-[#8B5CF6] -ml-1.5 mt-0.5"
          style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 30, lineHeight: 0.9 }}
        >
          B
        </span>
        <svg className="absolute left-1/2 top-[60%] -translate-x-1/2 w-[125%]" viewBox="0 0 100 12" fill="none">
          <path d="M2 8 C30 3, 70 2, 98 6" stroke="#8B5CF6" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-bold text-white text-[17px] tracking-tight">Gabriel</span>
        <span className="text-[9px] tracking-[0.42em] text-[#A855F7] font-bold mt-0.5">SOCIAL MEDIA</span>
      </div>
    </div>
  );
}
