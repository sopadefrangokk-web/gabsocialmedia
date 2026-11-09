"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Sparkles,
  Check,
  Palette,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

const WA_LINK =
  "https://wa.me/5551935017693?text=Ol%C3%A1%2C%20Gabriel!%20Quero%20levar%20meu%20neg%C3%B3cio%20para%20a%20internet.";

export function WebsitesSection() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });
  const [cursor, setCursor] = useState({ x: 0, y: 0, inside: false });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 8, y: (px - 0.5) * 10 });
    setGlow({ x: px * 100, y: py * 100, active: true });
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, inside: true });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setGlow((g) => ({ ...g, active: false }));
    setCursor((c) => ({ ...c, inside: false }));
  };

  return (
    <section ref={sectionRef} className="relative z-20 w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-10 xl:px-14 max-w-[1550px] mx-auto">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -right-24 w-[460px] h-[460px] rounded-full bg-violet-700/20 blur-[120px] animate-sites-float" />
        <div className="absolute bottom-10 -left-24 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-sites-float-delay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <div
        className={`relative rounded-[32px] lg:rounded-[40px] border border-purple-500/25 bg-[#0D0618]/55 backdrop-blur-2xl backdrop-saturate-150 p-7 sm:p-10 lg:p-14 shadow-[0_0_80px_rgba(168,85,247,0.18)] overflow-hidden transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600/15 blur-[110px]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ------- TEXTO ------- */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300 mb-6">
              <Globe className="w-3.5 h-3.5" />
              {t.sitesTag}
            </span>

            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-bold tracking-tight text-white leading-[1.08] mb-6">
              {t.sitesTitle}{" "}
              <span className="font-serif-italic font-normal bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">
                {t.sitesTitleHighlight}
              </span>
            </h2>

            <p className="text-zinc-200 text-base sm:text-lg leading-[1.75] mb-4">
              {t.sitesP1}
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-[1.75] mb-8">
              {t.sitesP2}
            </p>

            {/* checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9">
              {[
                { icon: Monitor, label: t.sitesBadge1 },
                { icon: Palette, label: t.sitesBadge2 },
                { icon: TrendingUp, label: t.sitesBadge3 },
              ].map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-4 py-3.5 text-sm font-medium text-zinc-100"
                >
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-white" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>

            {/* dispositivos */}
            <div className="flex items-center gap-3 mb-9">
              <span className="text-xs font-mono tracking-widest uppercase text-zinc-500">
                {lang === "pt" ? "Funciona em:" : "Works on:"}
              </span>
              {[
                { icon: Smartphone, label: "Mobile" },
                { icon: Tablet, label: "Tablet" },
                { icon: Monitor, label: "Desktop" },
              ].map((d) => (
                <span
                  key={d.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-purple-500/10 px-3.5 py-1.5 text-xs font-medium text-purple-200"
                >
                  <d.icon className="w-3.5 h-3.5" />
                  {d.label}
                </span>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.75)] hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              {t.sitesCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* ------- IMAGEM COM MOLDURA DE NAVEGADOR ------- */}
          <div className="lg:col-span-6 order-1 lg:order-2" style={{ perspective: "1000px" }}>
            <div
              ref={cardRef}
              onMouseMove={handleMouse}
              onMouseLeave={resetTilt}
              className="relative max-w-[540px] mx-auto"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.25s ease-out",
              }}
            >
              {/* brilho que segue cursor */}
              <div
                className="pointer-events-none absolute -inset-8 z-20 rounded-[40px] transition-opacity duration-500"
                style={{
                  opacity: glow.active ? 1 : 0,
                  background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(192,132,252,0.16), transparent 40%)`,
                }}
              />
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-purple-500/40 via-fuchsia-500/20 to-transparent blur-xl" />
              <div className="absolute -inset-2 rounded-[30px] border border-purple-400/20" />

              {/* cursor customizado que segue o mouse dentro do card */}
              <div
                className={`pointer-events-none absolute z-30 w-8 h-8 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${cursor.inside ? "opacity-100" : "opacity-0"}`}
                style={{ left: cursor.x, top: cursor.y }}
              >
                <span className="absolute inset-0 rounded-full border-2 border-fuchsia-400/70 bg-fuchsia-500/20 backdrop-blur-sm animate-ping-slow" />
                <span className="absolute inset-[10px] rounded-full bg-fuchsia-400" />
              </div>

              {/* janela do navegador */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#140A24] shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                <div className="shine-sweep pointer-events-none absolute inset-0 z-10" />
                {/* barra do navegador */}
                <div className="relative z-10 flex items-center gap-3 border-b border-white/10 bg-black/40 backdrop-blur-xl px-5 py-3.5">
                  <span className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </span>
                  <span className="flex flex-1 items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-[11px] text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {lang === "pt" ? "seu-negocio.com.br" : "your-business.com"}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-purple-500/20 border border-purple-400/30 px-2.5 py-1 text-[10px] font-bold tracking-widest text-purple-200">
                    <Zap className="w-3 h-3" />
                    {lang === "pt" ? "AO VIVO" : "LIVE"}
                  </span>
                </div>

                <div className="relative">
                  {!imgError ? (
                    <img
                      src="/gabriel-site.jpg"
                      alt="Gabriel — Criação de Sites"
                      onError={() => setImgError(true)}
                      className="w-full aspect-[3/4] object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    /* placeholder enquanto gabriel-site.jpg não é adicionada */
                    <div className="w-full aspect-[3/4] bg-gradient-to-b from-[#241040] via-[#1A0A30] to-[#0D0618] flex flex-col items-center justify-center gap-4 p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-purple-600/25 border border-purple-400/40 flex items-center justify-center">
                        <Globe className="w-9 h-9 text-purple-300" />
                      </div>
                      <p className="text-sm text-purple-200/80 leading-relaxed max-w-[280px]">
                        Salve a foto do escritório como{" "}
                        <code className="text-fuchsia-300">public/gabriel-site.jpg</code> para exibir aqui.
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0A0314]/95 via-[#0A0314]/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-fuchsia-500/15 mix-blend-overlay pointer-events-none" />
                </div>

                {/* linha de status */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-black/45 backdrop-blur-xl px-5 py-3 text-[11px] text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    {lang === "pt" ? "Carregamento rápido" : "Fast loading"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                    {lang === "pt" ? "Design sob medida" : "Tailored design"}
                  </span>
                </div>
              </div>

              {/* badge flutuante */}
              <div className="absolute -right-2 sm:-right-5 top-[22%] z-10 animate-sites-badge">
                <div className="rounded-2xl border border-purple-300/40 bg-[#1A0D2E]/90 backdrop-blur-2xl px-4 py-3 shadow-[0_16px_40px_rgba(124,58,237,0.4)] flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-xs font-semibold text-white leading-tight">
                    {t.sitesBadge3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sitesFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        @keyframes sitesBadge { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
        @keyframes shineSweep { 0% { transform: translateX(-130%) skewX(-12deg); } 100% { transform: translateX(230%) skewX(-12deg); } }
        @keyframes pingSlow { 0% { transform: scale(0.7); opacity: 0.9; } 100% { transform: scale(1.4); opacity: 0; } }
        .animate-sites-float { animation: sitesFloat 9s ease-in-out infinite; }
        .animate-sites-float-delay { animation: sitesFloat 11s ease-in-out infinite; animation-delay: 1.5s; }
        .animate-sites-badge { animation: sitesBadge 5s ease-in-out infinite; }
        .animate-ping-slow { animation: pingSlow 1.6s cubic-bezier(0,0,0.2,1) infinite; }
        .shine-sweep { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent); animation: shineSweep 4.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
