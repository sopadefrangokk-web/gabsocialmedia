"use client";

import React, { useState } from "react";
import {
  Layers,
  Box,
  BarChart3,
  ArrowUpRight,
  ArrowRight,
  Play,
  Menu,
  X,
} from "lucide-react";
import { ScrollCanvas } from "@/components/ScrollCanvas";
import { BentoHero } from "@/components/BentoHero";
import { AboutPerson } from "@/components/AboutPerson";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { MethodSection } from "@/components/MethodSection";
import { FaqSection } from "@/components/FaqSection";
import { WebsitesSection } from "@/components/WebsitesSection";
import { GabrielLogo } from "@/components/GabrielLogo";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const SECTION_IDS = ["home", "about", "services", "results", "contact"];
const SECTION_INDEX: Record<string, number> = {
  home: 0,
  about: 1,
  services: 2,
  results: 3,
  contact: 4,
};

function HomeContent() {
  const { t } = useLanguage();
  const [activeNavIdx, setActiveNavIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number>(1);
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);

  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = t.nav;

  const serviceIcons = [
    <svg
      key="spark"
      className="w-4 h-4 text-purple-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>,
    <Layers key="layers" className="w-4 h-4 text-purple-300" />,
    <Box key="box" className="w-4 h-4 text-purple-300" />,
    <BarChart3 key="chart" className="w-4 h-4 text-purple-300" />,
  ];

  const services = t.services.map((s, i) => ({
    id: i,
    title: s.title,
    description: s.desc,
    icon: serviceIcons[i],
  }));

  const goToSection = (index: number) => {
    setActiveNavIdx(index);
    setMobileMenuOpen(false);
    const id = SECTION_IDS[index];
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-[#05020a] text-white selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <ScrollCanvas totalFrames={76} speed={10.5} loop={true} />

      <div className="pointer-events-none fixed -bottom-32 left-0 right-0 h-[380px] w-full overflow-hidden opacity-70 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#c084fc" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b0764" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6b21a8" stopOpacity="0" />
              <stop offset="45%" stopColor="#a855f7" stopOpacity="0.65" />
              <stop offset="80%" stopColor="#e879f9" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
            </linearGradient>
            <filter id="glowWave" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M-50,220 C280,310 520,110 850,200 C1120,270 1320,160 1520,240"
            stroke="url(#waveGrad1)"
            strokeWidth="3.5"
            filter="url(#glowWave)"
          />
          <path
            d="M-30,290 C340,160 680,340 980,180 C1240,240 1380,140 1500,200"
            stroke="url(#waveGrad2)"
            strokeWidth="2.5"
            filter="url(#glowWave)"
          />
        </svg>
      </div>

      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden z-10"
      >
        <header className="relative z-50 w-full px-6 lg:px-14 pt-7 pb-4 flex items-center justify-between gap-3 flex-wrap">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer"
          >
            <GabrielLogo variant="navbar" />
          </div>

          <nav className="hidden md:flex items-center bg-[#130b20]/75 border border-white/[0.08] backdrop-blur-xl rounded-full p-1.5 shadow-lg shadow-black/50">
            {navItems.map((item, i) => {
              const isActive = activeNavIdx === i;
              return (
                <button
                  key={item + i}
                  onClick={() => goToSection(i)}
                  className={`relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.55)] border border-purple-400/40"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageToggle />
            <button
              onClick={() => goToContact()}
              className="group hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-purple-500/35 bg-[#160c27]/80 backdrop-blur-md text-xs font-medium text-white hover:border-purple-400 hover:bg-purple-900/35 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <span>{t.scheduleSession}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-white hover:bg-white/[0.08]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] z-50 bg-[#06030c]/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between border-t border-purple-900/30">
            <div className="flex flex-col gap-3">
              {navItems.map((item, i) => (
                <button
                  key={item + i}
                  onClick={() => goToSection(i)}
                  className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                    activeNavIdx === i
                      ? "bg-purple-600/30 border border-purple-500/40 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        <main className="relative flex-1 flex flex-col justify-center px-6 lg:px-14 xl:px-20 max-w-[1550px] mx-auto w-full pt-2 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] lg:text-xs font-bold uppercase tracking-[0.28em] text-purple-400">
                  {t.strategyTag}
                </span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
                {t.heroLine1}{" "}
                <span className="font-serif-italic font-normal text-purple-200/95 tracking-normal">
                  {t.heroLine1Italic}
                </span>
                <br />
                <span className="text-white">{t.heroLine2} </span>
                <span className="relative inline-block mt-1">
                  <span className="bg-gradient-to-r from-white via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {t.heroHighlight}
                  </span>
                  <svg
                    className="absolute -bottom-3.5 left-0 w-[105%] h-5 text-purple-500 pointer-events-none"
                    viewBox="0 0 320 28"
                    fill="none"
                  >
                    <path
                      d="M3 16 C80 26 210 24 315 7"
                      stroke="url(#purpleSwoosh)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="purpleSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="60%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="max-w-lg text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                {t.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-8">
                <button
                  onClick={() => goToContact()}
                  className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white text-sm font-semibold shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>{t.primaryCta}</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-end min-h-[300px] pointer-events-none">
              <div className="hidden sm:flex flex-col items-end gap-2 pr-4 text-right">
                <div className="px-4 py-2 rounded-full bg-[#130924]/80 border border-purple-500/30 backdrop-blur-xl flex items-center gap-3 shadow-2xl">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-purple-200">
                    8K CINEMATIC // SLOW MOTION
                  </span>
                  <span className="text-[10px] text-zinc-600">|</span>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase">
                    Studio Reel
                  </span>
                </div>
              </div>

              <div className="hidden xl:flex flex-col gap-3.5 absolute right-0 top-1/2 -translate-y-1/2 text-[9px] font-semibold tracking-[0.28em] text-zinc-500 uppercase select-none">
                <span className="hover:text-purple-300 transition-colors">Branding</span>
                <span className="text-purple-400">UI / UX</span>
                <span>Digital Marketing</span>
                <span>Creative Design</span>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-6 w-full z-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => {
                const isActive = activeCard === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveCard(service.id)}
                    className={`group relative cursor-pointer rounded-2xl p-5 transition-all duration-400 ${
                      isActive
                        ? "glass-panel-active transform -translate-y-1"
                        : "glass-panel hover:bg-white/[0.04] hover:border-purple-500/25"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-purple-600/40 text-purple-200 border border-purple-400/50 shadow-[0_0_18px_rgba(168,85,247,0.45)]"
                            : "bg-white/[0.03] text-zinc-400 border border-white/[0.07] group-hover:text-white group-hover:border-purple-500/20"
                        }`}
                      >
                        {service.icon}
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                          isActive
                            ? "text-purple-300 group-hover:translate-x-1"
                            : "text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1"
                        }`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3
                      className={`text-sm font-semibold mb-1 tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-zinc-200 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center pt-6 pb-2 z-30">
            <div className="w-5 h-8 rounded-full border border-purple-400/40 flex items-start justify-center p-1 mb-2">
              <div className="w-1 h-2 rounded-full bg-purple-400 animate-apple-wheel" />
            </div>
            <span className="text-[9px] font-semibold tracking-[0.32em] text-zinc-400 uppercase">
              {t.scrollExplore}
            </span>
          </div>
        </main>
      </section>

      <BentoHero onContact={() => goToContact()} />

      <DiagnosisSection />

      <AboutPerson onContact={() => goToContact()} />

      {/* Método — carrossel infinito */}
      <MethodSection onContact={() => goToContact()} />

      

      {/* FAQ — penúltima seção, antes do Contato */}
      <FaqSection onContact={() => goToContact()} />

      {/* Criação de Sites — penúltima seção */}
      <WebsitesSection />

      <section id="contact" className="relative z-20 w-full py-32 px-6 lg:px-14 xl:px-20 max-w-[1550px] mx-auto border-t border-purple-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#190c2e] border border-purple-500/40 text-xs font-mono text-purple-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            {t.contactBadge}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            {t.contactTitlePre}{" "}
            <span className="font-serif-italic font-normal text-purple-300">
              {t.contactTitleHighlight}
            </span>
            ?
          </h2>

          <a
            href="https://wa.me/5551935017693?text=Ol%C3%A1!%20Podemos%20conversar%20sobre%20um%20poss%C3%ADvel%20projeto%3F%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-105"
          >
            <span>{t.contactCta}</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </section>

      <footer className="relative z-20 w-full py-12 px-6 lg:px-14 border-t border-purple-900/20 bg-[#05020a] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div className="flex items-center gap-3">
          <GabrielLogo variant="compact" />
        </div>
        <div>
          © 2026 GB Gabriel Marketing Digital. {t.footerRights}
        </div>
      </footer>

      {isPlayingShowreel && (
        <div
          onClick={() => setIsPlayingShowreel(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl aspect-video rounded-3xl bg-[#0e0618] border border-purple-500/40 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(168,85,247,0.35)]"
          >
            <button
              onClick={() => setIsPlayingShowreel(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-purple-600/30 border border-purple-400/50 flex items-center justify-center mb-4 text-purple-300">
              <Play className="w-7 h-7 fill-purple-300 ml-1" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{t.reelTitle}</h3>
            <p className="text-zinc-400 max-w-md text-sm">
              {t.reelText}
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
