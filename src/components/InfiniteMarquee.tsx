"use client";

import React from "react";
import {
  Sparkles,
  Zap,
  Globe,
  Radio,
  Cpu,
  Layers,
  CircleDot,
  Shield,
  Compass,
  Command,
  Box,
  Fingerprint,
} from "lucide-react";

export function InfiniteMarquee() {
  // Linha 1 de marcas e produtos parceiros (Movimento Direita -> Esquerda)
  const row1 = [
    {
      name: "AETHER LABS",
      tag: "Autonomous AI",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "NEXUS PAY",
      tag: "Quantum Liquidity",
      icon: <CircleDot className="w-4 h-4 text-purple-300" />,
    },
    {
      name: "KINESIS MOTORS",
      tag: "Electric Hypercars",
      icon: <Zap className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "LUMINA CLOUD",
      tag: "Photonics Infrastructure",
      icon: <Radio className="w-4 h-4 text-purple-300" />,
    },
    {
      name: "HYPERIA OS",
      tag: "Spatial Computing",
      icon: <Layers className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "VALKYRIE VENTURES",
      tag: "Deep Tech Capital",
      icon: <Shield className="w-4 h-4 text-purple-300" />,
    },
    {
      name: "SOLSTICE PLATINUM",
      tag: "Global Asset Terminal",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
    },
  ];

  // Linha 2 de marcas e produtos parceiros (Movimento Esquerda -> Direita)
  const row2 = [
    {
      name: "CHRONOS ATELIER",
      tag: "High Horology",
      icon: <Compass className="w-4 h-4 text-purple-300" />,
    },
    {
      name: "VELOCE STUDIOS",
      tag: "Cinematic Media",
      icon: <Command className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "CYBERFLOW TECH",
      tag: "Decentralized Compute",
      icon: <Globe className="w-4 h-4 text-purple-300" />,
    },
    {
      name: "SYNAPSE BIOMED",
      tag: "Neural Therapeutics",
      icon: <Fingerprint className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "AURA INTERACTIVE",
      tag: "Spatial Interfaces",
      icon: <Box className="w-4 h-4 text-purple-300" />,
    },
    {
      name: "ORBITAL DYNAMICS",
      tag: "Aerospace Systems",
      icon: <Radio className="w-4 h-4 text-purple-400" />,
    },
    {
      name: "PRISM ARCHITECTURE",
      tag: "Generative Environments",
      icon: <Layers className="w-4 h-4 text-purple-300" />,
    },
  ];

  return (
    <section className="relative z-20 w-full py-20 bg-[#05020a]/80 backdrop-blur-xl border-y border-purple-500/10 overflow-hidden">
      {/* Luz ambiente roxa sutil ao fundo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] rounded-full bg-purple-900/15 blur-[140px]" />

      <div className="max-w-[1550px] mx-auto px-6 lg:px-14 xl:px-20 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-[10px] font-mono tracking-widest text-purple-300 uppercase mb-3 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Selected Global Partners &amp; Ecosystem
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
          Powering digital experiences and iconic identity systems for market-defining institutions worldwide.
        </p>
      </div>

      {/* Container com máscara de fade nas duas extremidades (fade suave invisível) */}
      <div className="relative w-full mask-marquee flex flex-col gap-5 sm:gap-6">
        
        {/* =====================================================================
            PRIMEIRA LINHA: MOVIMENTO CONTÍNUO DIREITA → ESQUERDA
            ===================================================================== */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-left flex items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Bloco 1 */}
            {row1.map((brand, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 hover:bg-purple-950/20 backdrop-blur-md transition-all duration-300 shrink-0 cursor-default hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all">
                  {brand.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-[0.16em] text-zinc-200 group-hover:text-purple-200 transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase whitespace-nowrap">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}

            {/* Bloco 2 (Clone idêntico para loop infinito imperceptível sem salto) */}
            {row1.map((brand, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 hover:bg-purple-950/20 backdrop-blur-md transition-all duration-300 shrink-0 cursor-default hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all">
                  {brand.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-[0.16em] text-zinc-200 group-hover:text-purple-200 transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase whitespace-nowrap">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            SEGUNDA LINHA: MOVIMENTO CONTÍNUO ESQUERDA → DIREITA
            ===================================================================== */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-right flex items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Bloco 1 */}
            {row2.map((brand, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 hover:bg-purple-950/20 backdrop-blur-md transition-all duration-300 shrink-0 cursor-default hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all">
                  {brand.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-[0.16em] text-zinc-200 group-hover:text-purple-200 transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase whitespace-nowrap">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}

            {/* Bloco 2 (Clone idêntico para loop infinito imperceptível sem salto) */}
            {row2.map((brand, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 hover:bg-purple-950/20 backdrop-blur-md transition-all duration-300 shrink-0 cursor-default hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all">
                  {brand.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-[0.16em] text-zinc-200 group-hover:text-purple-200 transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase whitespace-nowrap">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
