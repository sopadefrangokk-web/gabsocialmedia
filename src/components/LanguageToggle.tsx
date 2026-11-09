"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, toggle } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      className={`flex items-center rounded-full border border-purple-500/35 bg-[#160c27]/80 backdrop-blur-md overflow-hidden ${
        compact ? "p-1" : "p-1.5"
      }`}
    >
      <Globe className="w-3.5 h-3.5 text-purple-300 ml-1.5 shrink-0" />
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all ${
          lang === "pt"
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all ${
          lang === "en"
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        EN
      </button>
      {/* clique no globo alterna */}
      <button
        type="button"
        onClick={toggle}
        aria-label={lang === "pt" ? "Switch language" : "Alternar idioma"}
        className="sr-only"
      />
    </div>
  );
}
