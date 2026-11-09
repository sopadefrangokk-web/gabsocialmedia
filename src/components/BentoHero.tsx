"use client";

import React, { useState } from "react";
import {
  Camera,
  Music2,
  Play,
  TrendingUp,
  ArrowRight,
  Mail,
  CheckCircle2,
  Target,
  Video,
  Lightbulb,
  Heart,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { GabrielLogo } from "./GabrielLogo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";

const SECTION_IDS = ["home", "services", "work", "about", "contact"];

export function BentoHero({ onContact }: { onContact?: () => void }) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState("home");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3200);
  };

  const scrollTo = (index: number) => {
    const id = SECTION_IDS[index] || "home";
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-20 w-full px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 pb-16 lg:pt-10 lg:pb-20 max-w-[1550px] mx-auto">
      {/* glow ambiente */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-purple-800/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-indigo-800/15 blur-[140px]" />
      </div>

      <div className="relative rounded-[32px] border border-white/[0.08] bg-[#0A0318]/90 backdrop-blur-xl p-3 sm:p-4 lg:p-5 shadow-[0_0_90px_rgba(124,58,237,0.12)] overflow-hidden">
        {/* faixa roxa superior direita */}
        <div className="pointer-events-none absolute -right-10 -top-10 w-[320px] h-[220px] rotate-[-12deg] bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent blur-2xl" />

        {/* ================= NAVBAR ================= */}
        <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-[#130921]/85 backdrop-blur-2xl px-5 sm:px-7 py-3.5 mb-4 lg:mb-5">
          <GabrielLogo variant="navbar" />

          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/[0.06] p-1">
            {t.nav.map((item, i) => (
              <button
                key={item + i}
                onClick={() => scrollTo(i)}
                className={`px-5 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  activeId === SECTION_IDS[i]
                    ? "bg-violet-600/25 border border-violet-400/50 text-white shadow-[0_0_18px_rgba(168,85,247,0.35)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageToggle compact />
            <button
              onClick={onContact}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.talkToMe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </header>

        {/* ================= GRID BENTO ================= */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* ------- CARD ESQUERDA PRINCIPAL ------- */}
          <article className="lg:col-span-7 relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#1A0D2E] via-[#12081F] to-[#0C0516] p-7 sm:p-9 lg:p-10 min-h-[560px] lg:min-h-[640px] flex">
            {/* arco orbital decorativo */}
            <div className="pointer-events-none absolute -right-24 -top-24 w-[520px] h-[520px] rounded-full border-[22px] border-purple-500/[0.08]" />
            <div className="pointer-events-none absolute -right-16 -top-16 w-[420px] h-[420px] rounded-full border border-purple-400/[0.08]" />
            <div className="pointer-events-none absolute right-[38%] top-[28%] w-12 h-12 rounded-full border border-purple-400/25" />
            <span className="pointer-events-none absolute right-[30%] top-[18%] text-purple-400/60 text-xl select-none">✦</span>

            <div className="relative z-10 flex flex-col w-full sm:max-w-[52%] lg:max-w-[55%] min-w-0 pr-2 sm:pr-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-[11px] tracking-wide text-zinc-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
                {t.bentoBadge}
              </span>

              <h1 className="text-[36px] sm:text-[44px] xl:text-[52px] font-extrabold leading-[1.04] tracking-tight text-white mb-5">
                {t.bentoTitlePre}{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
                  {t.bentoTitleHighlight1}
                </span>
                <br />
                {t.bentoTitleMid}{" "}
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  {t.bentoTitleHighlight2}
                </span>
              </h1>

              <p className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-[340px] sm:max-w-[360px]">
                {t.bentoSubtitle}
              </p>

              <ul className="space-y-4 mb-9">
                {[
                  { icon: BarChart3, label: t.features[0] },
                  { icon: Video, label: t.features[1] },
                  { icon: Heart, label: t.features[2] },
                ].map((f) => (
                  <li key={f.label} className="flex items-center gap-3.5 text-sm text-zinc-200">
                    <span className="w-10 h-10 shrink-0 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-zinc-200">
                      <f.icon className="w-[18px] h-[18px]" />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={onContact}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.75)] hover:scale-[1.03] active:scale-[0.98] transition-all"
                >
                  {t.growTogether}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* ----- Celular 3D + ícones flutuantes ----- */}
            <div className="pointer-events-none absolute right-0 sm:right-6 lg:right-10 bottom-0 top-0 hidden sm:flex items-end lg:items-center justify-center w-[40%] max-w-[300px] ml-auto">
              <div className="relative translate-y-6 lg:translate-y-2">
                {/* glow atrás */}
                <div className="absolute inset-0 bg-purple-600/30 blur-[60px] rounded-full scale-90" />
                {/* celular */}
                <div className="relative w-[180px] sm:w-[200px] lg:w-[230px] aspect-[9/19] rounded-[38px] border border-white/25 bg-[#0D0619] shadow-[0_30px_80px_rgba(0,0,0,0.7)] -rotate-[8deg] overflow-hidden">
                  <div className="absolute inset-[6px] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#3B0A6E] via-[#1E0A3A] to-[#0F0520]">
                    <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-fuchsia-500/40 blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-violet-500/50 blur-2xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(192,132,252,0.35),transparent_55%)]" />
                    {/* tela status */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-16 rounded-full bg-black/70 border border-white/10" />
                  </div>
                  <div className="absolute inset-[6px] rounded-[32px] border border-purple-300/20 pointer-events-none" />
                </div>

                {/* ícones flutuantes */}
                <div className="absolute -left-4 top-[18%] w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-purple-300/40 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-[0_12px_30px_rgba(124,58,237,0.55)] -rotate-6 backdrop-blur">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -right-4 top-[30%] w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/20 bg-[#160B2A]/95 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.6)] rotate-3">
                  <Music2 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -left-2 top-[52%] w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/20 bg-[#160B2A]/95 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.6)] -rotate-3">
                  <span className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
                    <Play className="w-4.5 h-4.5 text-[#1A0D2E] fill-[#1A0D2E] ml-0.5" />
                  </span>
                </div>
                <div className="absolute -right-2 bottom-[18%] w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-purple-300/40 bg-gradient-to-br from-[#2A1150] to-[#1A0A30] flex items-center justify-center shadow-[0_12px_30px_rgba(124,58,237,0.45)] rotate-2">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>

                {/* anel orbital */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-purple-400/[0.14] -rotate-12 pointer-events-none" />
              </div>
            </div>

            {/* versão mobile do celular (simplificada) */}
            <div className="sm:hidden pointer-events-none absolute right-4 bottom-4 w-[120px] aspect-[9/19] rounded-[22px] border border-white/25 bg-[#0D0619] rotate-[-8deg] overflow-hidden opacity-90">
              <div className="absolute inset-[4px] rounded-[18px] bg-gradient-to-br from-[#3B0A6E] to-[#12081F]" />
            </div>
          </article>

          {/* ------- COLUNA DIREITA ------- */}
          <div className="lg:col-span-5 grid grid-rows-1 gap-4 lg:gap-5">
            {/* Card newsletter */}
            <article className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#1A0D2E] to-[#0D0618] p-7 lg:p-8">
              <div className="pointer-events-none absolute -right-10 -top-8 text-[120px] leading-none text-purple-600/20 font-black rotate-[-18deg] select-none">✦</div>
              <Sparkles className="w-5 h-5 text-fuchsia-400 mb-4" />
              <h2 className="text-[26px] sm:text-[30px] font-bold leading-tight text-white mb-3">
                {t.transformTitlePre}{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.transformTitleHighlight}</span>
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {t.transformTextPre} <span className="text-violet-400 font-semibold">10k+</span> {t.transformTextPost}
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2.5 rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-3.5 text-sm text-purple-100">
                  <CheckCircle2 className="w-5 h-5 text-purple-300" />
                  {t.subscribedMessage}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <label className="flex flex-1 items-center gap-2.5 rounded-full border border-white/[0.1] bg-black/30 px-5 py-3 focus-within:border-purple-400/60 transition-colors">
                    <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    {t.subscribe}
                  </button>
                </form>
              )}
            </article>

            {/* Cards 20K+ e Serviços */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {/* 20K+ */}
              <article className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#1A0D2E] to-[#0D0618] p-6 lg:p-7 min-h-[190px] flex flex-col">
                <span className="w-9 h-9 rounded-full bg-violet-500/20 border border-violet-400/30 flex items-center justify-center mb-4">
                  <TrendingUp className="w-4 h-4 text-violet-300 rotate-[-18deg]" />
                </span>
                <span className="text-3xl lg:text-[34px] font-extrabold tracking-tight text-white">10K+</span>
                <span className="text-xs text-zinc-400 mt-1">{t.followersLabel}</span>
                {/* linha */}
                <svg className="mt-auto pt-4 w-full" viewBox="0 0 160 40" fill="none">
                  <path
                    d="M4 32 C30 30, 48 22, 68 24 C88 26, 104 12, 124 14 C138 15, 148 8, 156 6"
                    stroke="#A855F7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="156" cy="6" r="4" fill="#A855F7" />
                  <circle cx="156" cy="6" r="8" fill="#A855F7" opacity="0.25" />
                </svg>
              </article>

              {/* Serviços */}
              <article className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#1A0D2E] to-[#0D0618] p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  <h3 className="text-sm font-semibold text-white">{t.myServices}</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    { icon: BarChart3, text: t.serviceItems[0] },
                    { icon: Video, text: t.serviceItems[1] },
                    { icon: Target, text: t.serviceItems[2] },
                    { icon: Lightbulb, text: t.serviceItems[3] },
                  ].map((s) => (
                    <li key={s.text} className="flex items-center gap-3 text-[13px] text-zinc-200 leading-tight">
                      <span className="w-9 h-9 shrink-0 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center">
                        <s.icon className="w-4 h-4 text-zinc-200" />
                      </span>
                      {s.text}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo(1)}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors"
                >
                  {t.learnMore}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </article>
            </div>

            {/* 200K+ */}
            <article className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#1A0D2E] to-[#0D0618] p-6 lg:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <span className="w-9 h-9 rounded-full bg-violet-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </span>
                  <div className="text-3xl lg:text-[34px] font-extrabold tracking-tight text-white">50K+</div>
                  <div className="text-xs text-zinc-400 mt-1">{t.viewsLabel}</div>
                </div>
                {/* barras */}
                <div className="flex items-end gap-1.5 h-[72px] pt-6">
                  {[18, 28, 22, 38, 34, 52, 48, 68].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`w-1.5 rounded-full ${i >= 6 ? "bg-gradient-to-t from-violet-600 to-fuchsia-400" : "bg-violet-800/70"}`}
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* rodapé da bento com marca completa */}
        <div className="relative z-10 mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[22px] border border-white/[0.06] bg-white/[0.02] px-6 py-4">
          <GabrielLogo variant="compact" />
          <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-500">
            {t.bentoFooterTagline}
          </p>
          <span className="text-xs text-zinc-500">© 2026 Gabriel Social Media</span>
        </div>
      </div>
    </section>
  );
}
