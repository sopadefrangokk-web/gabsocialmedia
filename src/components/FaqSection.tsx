"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function FaqSection({ onContact }: { onContact?: () => void }) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative z-20 w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-10 xl:px-14 max-w-[1550px] mx-auto"
    >
      {/* orbes ambiente */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -left-24 w-[420px] h-[420px] rounded-full bg-purple-700/20 blur-[120px] animate-faq-float" />
        <div className="absolute bottom-10 -right-24 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-faq-float-delay" />
      </div>

      <div
        className={`relative rounded-[32px] lg:rounded-[40px] border border-purple-500/25 bg-[#0D0618]/55 backdrop-blur-2xl backdrop-saturate-150 p-7 sm:p-10 lg:p-14 xl:p-16 shadow-[0_0_80px_rgba(168,85,247,0.18)] overflow-hidden transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />
        <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-fuchsia-600/15 blur-[100px]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* coluna esquerda: título */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300 mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                {t.faqTag}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-5">
                {t.faqTitlePre}{" "}
                <span className="font-serif-italic font-normal bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">
                  {t.faqTitleHighlight}
                </span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-md">
                {t.faqSubtitle}
              </p>
            </div>

            <button
              onClick={onContact}
              className="group hidden lg:inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.talkToMe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* coluna direita: acordeão */}
          <div className="lg:col-span-7 space-y-4">
            {t.faqItems.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className={`group rounded-3xl border backdrop-blur-xl transition-all duration-500 overflow-hidden ${
                    open
                      ? "border-purple-400/50 bg-purple-500/[0.12] shadow-[0_0_35px_rgba(168,85,247,0.22)]"
                      : "border-white/[0.08] bg-white/[0.03] hover:border-purple-400/25 hover:bg-white/[0.05]"
                  }`}
                  style={{
                    transitionDelay: visible ? `${i * 80}ms` : "0ms",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 sm:gap-5 p-5 sm:p-6 text-left"
                  >
                    <span
                      className={`shrink-0 rounded-2xl border px-3 py-2 text-xs font-mono font-bold tracking-wider transition-all ${
                        open
                          ? "border-purple-400/50 bg-purple-600/35 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                          : "border-white/[0.08] bg-white/[0.04] text-purple-300/80"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 text-base sm:text-lg font-semibold leading-snug transition-colors ${
                        open ? "text-white" : "text-zinc-100 group-hover:text-white"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        open
                          ? "rotate-45 bg-gradient-to-br from-violet-500 to-fuchsia-500 border-purple-300/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                          : "border-purple-400/30 bg-purple-500/10 text-purple-300 group-hover:text-white"
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 sm:pl-[76px] sm:pr-8">
                        <p className="text-sm sm:text-base text-zinc-300 leading-[1.75] border-l-2 border-purple-400/40 pl-5">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <button
              onClick={onContact}
              className="group lg:hidden w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all mt-2"
            >
              {t.talkToMe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes faqFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        .animate-faq-float { animation: faqFloat 9s ease-in-out infinite; }
        .animate-faq-float-delay { animation: faqFloat 11s ease-in-out infinite; animation-delay: 1.5s; }
      `}</style>
    </section>
  );
}
