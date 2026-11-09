"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, TrendingUp, DollarSign, Target, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

export function DiagnosisSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 4, y: (px - 0.5) * 5 });
    setGlow({ x: px * 100, y: py * 100, active: true });
  };

  const c340 = useCountUp(340, visible);
  const c10 = useCountUp(10, visible);
  const c120 = useCountUp(120, visible);

  const stats = [
    { icon: TrendingUp, value: `+${c340}%`, label: t.stats[0] },
    { icon: DollarSign, value: `${c10}K+`, label: t.stats[1] },
    { icon: Target, value: `+${c120}`, label: t.stats[2] },
    { icon: Clock, value: "24/7", label: t.stats[3] },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative z-20 w-full min-h-[90vh] flex items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-14 max-w-[1550px] mx-auto"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-purple-700/20 blur-[120px] animate-sparkle-float" />
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-sparkle-float" style={{ animationDelay: "1.4s" }} />
        <span className="absolute top-[18%] left-[8%] text-purple-300/50 text-lg animate-sparkle-float select-none">✦</span>
        <span className="absolute top-[30%] right-[10%] text-fuchsia-300/40 text-sm animate-sparkle-float select-none" style={{ animationDelay: "0.7s" }}>✦</span>
        <span className="absolute bottom-[22%] left-[14%] text-purple-400/30 text-xl animate-sparkle-float select-none" style={{ animationDelay: "1.1s" }}>✦</span>
        <span className="absolute bottom-[32%] right-[18%] text-purple-300/30 text-base animate-sparkle-float select-none" style={{ animationDelay: "1.8s" }}>✦</span>
      </div>

      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setGlow((g) => ({ ...g, active: false }));
        }}
        className="relative w-full rounded-[32px] lg:rounded-[40px] border border-purple-400/30 bg-[#0D0618]/55 backdrop-blur-2xl backdrop-saturate-150 p-8 sm:p-12 lg:p-16 xl:p-20 shadow-[0_0_80px_rgba(168,85,247,0.22),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s ease-out, opacity 1s ease, translate 1s ease",
          opacity: visible ? 1 : 0,
          translate: visible ? "0" : "0 40px",
        }}
      >
        {/* glow que segue o cursor */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: glow.active ? 1 : 0,
            background: `radial-gradient(700px circle at ${glow.x}% ${glow.y}%, rgba(192,132,252,0.14), transparent 45%)`,
          }}
        />
        {/* feixe gradiente animado na borda superior */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(192,132,252,0.9),rgba(232,121,249,0.9),transparent)] bg-[length:200%_100%] animate-border-flow" />
        <div className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-purple-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

        {/* varredura de luz */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shine-sweep absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <div className="relative w-full max-w-none">
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-purple-200 bg-purple-500/15 border border-purple-400/30 rounded-full px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-300" />
              {t.aboutTag}
            </span>
            <span className="h-px w-16 bg-gradient-to-r from-purple-400/80 to-transparent" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-purple-300/80">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              GB MARKETING DIGITAL
            </span>
          </div>

          {/* Título chamativo com fonte display + itálico serifado */}
          <h2 className="font-display headline-glow text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-8 lg:mb-10 max-w-5xl">
            {t.aboutTitlePre}{" "}
            <span className="font-serif-italic font-normal bg-gradient-to-r from-purple-200 via-fuchsia-200 to-purple-300 bg-clip-text text-transparent neon-underline pb-2 pr-1">
              {t.aboutTitleHighlight}
            </span>
            <span className="text-fuchsia-300">?</span>
          </h2>

          {/* parágrafos com destaque tipográfico */}
          <p className="text-zinc-100 text-lg sm:text-xl lg:text-2xl leading-[1.6] mb-6 max-w-5xl">
            {t.aboutP1}
          </p>

          <div className="relative max-w-4xl mb-14">
            <span className="absolute -left-4 top-1 text-6xl font-serif-italic text-purple-400/40 select-none leading-none">“</span>
            <p className="border-l-[3px] border-fuchsia-400/70 bg-white/[0.04] backdrop-blur-md rounded-r-2xl pl-6 sm:pl-8 py-5 pr-6 text-zinc-200 text-base sm:text-lg lg:text-xl leading-[1.7]">
              {t.aboutP2}
            </p>
          </div>

          {/* métricas interativas com contagem */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white/[0.04] border border-purple-400/20 backdrop-blur-md p-5 lg:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-300/50 hover:bg-purple-500/10 hover:shadow-[0_16px_40px_rgba(124,58,237,0.3)] cursor-default"
                style={{ transitionDelay: visible ? `${i * 90}ms` : "0ms" }}
              >
                <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="inline-flex w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.45)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <s.icon className="w-5 h-5 text-white" />
                </span>
                <div className="font-display text-3xl lg:text-4xl font-bold text-purple-200 font-mono drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 mt-2 leading-snug">{s.label}</div>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-400 to-fuchsia-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes borderFlow { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }
        .animate-border-flow { animation: borderFlow 5s linear infinite; }
        @keyframes shineSweepX { 0% { transform: translateX(-150%) skewX(-14deg); } 100% { transform: translateX(900%) skewX(-14deg); } }
        .animate-shine-sweep { animation: shineSweepX 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
