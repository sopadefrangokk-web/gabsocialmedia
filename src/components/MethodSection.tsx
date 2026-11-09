"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, Target, Search, Calendar, Users, Eye } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const ICONS = [Target, Search, Calendar, Users, Eye];

export function MethodSection({ onContact }: { onContact?: () => void }) {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && setVisible(true)),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const doubled = [...t.methodSteps, ...t.methodSteps];

  return (
    <section ref={ref} className="relative z-20 w-full py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-24 w-[420px] h-[420px] rounded-full bg-purple-700/18 blur-[120px]" />
        <div className="absolute bottom-10 -right-24 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
      </div>

      <div className="relative max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              {t.methodTag}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl">
              {t.methodTitlePre}{" "}
              <span className="font-serif-italic font-normal bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">
                {t.methodTitleHighlight}
              </span>
            </h2>
          </div>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-md">{t.methodSubtitle}</p>
        </div>

        {/* trilho infinito */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#05020a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#05020a] to-transparent" />
          <div className="mask-marquee overflow-hidden py-2">
            <div
              className="flex gap-5 w-max animate-method-scroll"
              style={{ animationPlayState: paused ? "paused" : "running" }}
              onMouseMove={() => setPaused(true)}
            >
              {doubled.map((step, i) => {
                const Icon = ICONS[i % ICONS.length];
                const isActive = active === (i % t.methodSteps.length);
                return (
                  <article
                    key={`${step.num}-${i}`}
                    onClick={() => setActive(i % t.methodSteps.length)}
                    className={`group relative w-[320px] sm:w-[400px] shrink-0 cursor-pointer overflow-hidden rounded-[28px] border p-7 sm:p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
                      isActive
                        ? "border-purple-400/60 bg-purple-500/[0.12] shadow-[0_0_45px_rgba(168,85,247,0.28)]"
                        : "border-white/[0.08] bg-[#0D0618]/60 hover:border-purple-400/35"
                    }`}
                  >
                    <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />
                    <div className="relative flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-3">
                        <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_22px_rgba(168,85,247,0.5)] group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-5 h-5 text-white" />
                        </span>
                        <span className="text-xs font-mono font-bold tracking-widest text-purple-300/90">ETAPA {step.num}</span>
                      </span>
                      <span className="text-4xl font-display font-bold text-white/[0.08] group-hover:text-white/[0.14] transition-colors">{step.num}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-tight mb-3">{step.title}</h3>
                    <p className="text-sm text-zinc-300 leading-[1.7] mb-6 min-h-[72px]">{step.desc}</p>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-fuchsia-300 mb-3">{step.subtitle}</p>
                    <ul className="space-y-2.5 mb-6">
                      {step.items.slice(0, 3).map((it) => (
                        <li key={it.title} className="flex items-start gap-2.5 text-[13px] leading-snug text-zinc-200">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-400 shrink-0 shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
                          <span><strong className="text-white font-semibold">{it.title}</strong> — {it.desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-purple-400/25 text-[11px] font-mono tracking-wide text-purple-200/90">{step.footer}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {t.methodSteps.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${active === i ? "w-12 bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.7)]" : "w-2.5 bg-zinc-600 hover:bg-zinc-400"}`}
              aria-label={s.title}
            />
          ))}
          <span className={`inline-flex items-center gap-2 ml-3 rounded-full border px-4 py-2 text-xs sm:text-sm font-mono font-bold tracking-widest backdrop-blur-md transition-all duration-500 ${
            paused
              ? "border-fuchsia-400/60 bg-fuchsia-500/20 text-fuchsia-100 shadow-[0_0_20px_rgba(217,70,239,0.35)]"
              : "border-purple-400/50 bg-purple-500/15 text-purple-200 shadow-[0_0_16px_rgba(168,85,247,0.3)]"
          }`}>
            <span className={`w-2 h-2 rounded-full ${paused ? "bg-fuchsia-300" : "bg-purple-300 animate-pulse"}`} />
            {paused ? (lang === "pt" || undefined ? "PAUSADO" : "PAUSED") : (lang === "pt" || undefined ? "ROLANDO" : "SCROLLING")}
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline font-medium normal-case tracking-normal text-[12px] opacity-90">
              {lang === "pt" || undefined ? "passe o mouse para pausar" : "hover to pause"}
            </span>
          </span>
        </div>

        {onContact && (
          <div className="flex justify-center mt-10">
            <button
              onClick={onContact}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              {t.talkToMe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes methodScroll { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(-50%,0,0); } }
        .animate-method-scroll { animation: methodScroll 42s linear infinite; }
      `}</style>
    </section>
  );
}
