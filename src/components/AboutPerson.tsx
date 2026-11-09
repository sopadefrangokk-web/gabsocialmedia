"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Target, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { GabrielLogo } from "./GabrielLogo";

export function AboutPerson({ onContact }: { onContact?: () => void }) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 10, y: (px - 0.5) * 12 });
    setGlow({ x: px * 100, y: py * 100, active: true });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setGlow((g) => ({ ...g, active: false }));
  };

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative z-20 w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-10 xl:px-14 max-w-[1550px] mx-auto"
    >
      {/* fundo com orbes flutuantes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -left-24 w-[420px] h-[420px] rounded-full bg-purple-700/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-10 -right-24 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div
        className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* cabeçalho da seção */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {t.personTag}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl">
            {t.personTitlePre}{" "}
            <span className="font-serif-italic font-normal bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">
              {t.personTitleHighlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ------- FOTO COM EFEITO 3D ------- */}
          <div className="lg:col-span-5 relative flex justify-center" style={{ perspective: "1000px" }}>
            <div
              ref={cardRef}
              onMouseMove={handleMouse}
              onMouseLeave={resetTilt}
              className="relative w-full max-w-[420px]"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.25s ease-out",
              }}
            >
              {/* brilho que segue o cursor */}
              <div
                className="pointer-events-none absolute -inset-10 z-20 rounded-[40px] opacity-0 transition-opacity duration-500"
                style={{
                  opacity: glow.active ? 1 : 0,
                  background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(192,132,252,0.18), transparent 40%)`,
                }}
              />
              {/* anel orbital */}
              <div className="absolute -inset-6 rounded-[44px] border border-purple-400/20" />
              <div className="absolute -inset-10 rounded-[52px] border border-purple-500/10 rotate-3" />
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-purple-500/40 via-fuchsia-500/20 to-transparent blur-xl" />

              {/* moldura da foto */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-[#140A24] shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                <div className="shine-sweep pointer-events-none absolute inset-0 z-10" />
                {!imgError ? (
                  <>
                    <img
                      src="/gabriel.jpg"
                      alt="Gabriel — Gabriel Social Media"
                      onError={() => setImgError(true)}
                      className="w-full aspect-[3/4] object-cover object-top scale-100 hover:scale-[1.04] transition-transform duration-700"
                    />
                    {/* gradiente inferior para profundidade */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0314]/95 via-[#0A0314]/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-fuchsia-500/15 mix-blend-overlay pointer-events-none" />
                  </>
                ) : (
                  /* placeholder enquanto a foto gabriel.jpg não é adicionada */
                  <div className="w-full aspect-[3/4] bg-gradient-to-b from-[#2A1150] via-[#1A0A30] to-[#0D0618] flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-purple-600/25 border border-purple-400/40 flex items-center justify-center">
                      <span className="font-serif-italic text-4xl font-bold text-purple-200">G</span>
                    </div>
                    <p className="text-sm text-purple-200/80 leading-relaxed max-w-[260px]">
                      Salve a foto de Gabriel como <code className="text-fuchsia-300">public/gabriel.jpg</code> para exibir aqui.
                    </p>
                  </div>
                )}

                {/* selo sobre a foto */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 backdrop-blur-xl px-4 py-2 text-[11px] font-semibold tracking-widest uppercase text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                  Gabriel
                </div>
              </div>

              {/* badges flutuantes */}
              <div className="absolute -right-3 sm:-right-8 top-[18%] z-10 animate-float-badge">
                <div className="rounded-2xl border border-purple-300/40 bg-[#1A0D2E]/90 backdrop-blur-2xl p-3.5 shadow-[0_16px_40px_rgba(124,58,237,0.4)] flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-xs font-semibold text-white leading-tight">
                    {t.personBadgeStrategy}
                  </span>
                </div>
              </div>

              <div className="absolute -left-3 sm:-left-8 bottom-[22%] z-10 animate-float-badge-delay">
                <div className="rounded-2xl border border-white/15 bg-[#12081F]/90 backdrop-blur-2xl p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-fuchsia-300" />
                  </span>
                  <span className="text-xs font-semibold text-white leading-tight">
                    {t.personBadgeDirect}
                  </span>
                </div>
              </div>

              {/* assinatura GB */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                <div className="rounded-full border border-purple-400/30 bg-[#0D0618]/90 backdrop-blur-2xl px-6 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] whitespace-nowrap">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-purple-200">
                    {t.personSignatureRole}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ------- TEXTO ------- */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] border border-white/[0.09] bg-[#0D0618]/55 backdrop-blur-2xl backdrop-saturate-150 p-7 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-600/20 blur-[80px]" />

              <div className="relative">
                <p className="text-lg sm:text-xl lg:text-[22px] leading-[1.65] text-zinc-100 mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                  <span className="font-semibold text-white">{t.personP1.split(".")[0]}.</span>{" "}
                  {t.personP1.split(".").slice(1).join(".").trim()}
                </p>

                <div className="flex gap-4 rounded-2xl border-l-4 border-purple-400 bg-purple-500/10 backdrop-blur-md p-5 sm:p-6 mb-6">
                  <span className="font-serif-italic text-5xl leading-none text-purple-300 select-none">“</span>
                  <p className="text-base sm:text-lg leading-relaxed text-zinc-100 italic">
                    {t.personP2}
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-[1.7] text-zinc-200 mb-8">
                  {t.personP3}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-purple-400/20">
                  <GabrielLogo variant="compact" />
                  <button
                    onClick={onContact}
                    className="group ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    {t.talkToMe}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-18px) translateX(10px); } }
        @keyframes floatSlower { 0%,100% { transform: translateY(0); } 50% { transform: translateY(16px); } }
        @keyframes floatBadge { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
        @keyframes shineSweep { 0% { transform: translateX(-130%) skewX(-12deg); } 100% { transform: translateX(230%) skewX(-12deg); } }
        .animate-float-slow { animation: floatSlow 9s ease-in-out infinite; }
        .animate-float-slower { animation: floatSlower 11s ease-in-out infinite; }
        .animate-float-badge { animation: floatBadge 5s ease-in-out infinite; }
        .animate-float-badge-delay { animation: floatBadge 6s ease-in-out infinite; animation-delay: 1.2s; }
        .shine-sweep { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent); animation: shineSweep 4.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
