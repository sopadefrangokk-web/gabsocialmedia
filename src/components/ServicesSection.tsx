"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Box,
  BarChart3,
  Check,
  ArrowRight,
  Code2,
  Palette,
  TrendingUp,
  Cpu,
} from "lucide-react";

export function ServicesSection() {
  const [selectedTab, setSelectedTab] = useState(1); // UI/UX Design selecionado por padrão

  const serviceDetails = [
    {
      id: 0,
      title: "Brand Strategy",
      subtitle: "Positioning, Narrative & Identity Systems",
      description:
        "We engineer high-leverage brand foundations for category-defining organizations. Through rigorous qualitative research and visual semiotics, we construct distinctive identities that command institutional respect.",
      metrics: ["+340% Brand Recall", "Category Leadership", "Global Trademarks"],
      deliverables: [
        "Brand Archetype & Positioning Manifesto",
        "Comprehensive Visual Identity & Kinetic Guidelines",
        "Design Tokens & Typography Licensing Architecture",
        "Verbal Identity & Editorial Tone of Voice",
        "Investor & Market Launch Narrative Assets",
      ],
      technologies: ["Figma Enterprise", "Type Design", "Vector Craft", "Brand Guidelines"],
      accentColor: "from-purple-600 to-indigo-600",
    },
    {
      id: 1,
      title: "UI/UX Design",
      subtitle: "Spatial Products & Human-Grade Digital Experiences",
      description:
        "Digital interfaces calibrated for sensory delight, micro-interaction fluidity, and zero cognitive friction. We blend ergonomic layout structures with cinematic spatial depth to craft products users fall in love with.",
      metrics: ["<80ms Interaction Latency", "99.4% Usability Score", "Zero Cognitive Fatigue"],
      deliverables: [
        "Multi-Platform Design Systems (Web, iOS, macOS, Spatial)",
        "High-Fidelity Micro-Interactions & State Prototyping",
        "Information Architecture & Heuristic Journey Mapping",
        "Dark/Light Theme Engineering with Semantic Colors",
        "Accessibility (WCAG 2.1 AAA) Compliant Design Tokens",
      ],
      technologies: ["Design Systems", "Framer", "Protopie", "CSS Architecture", "Motion Systems"],
      accentColor: "from-fuchsia-600 to-purple-600",
    },
    {
      id: 2,
      title: "Web Development",
      subtitle: "High-Performance Modern Web Engineering",
      description:
        "Clean, maintainable, ultra-fast codebases engineered on modern stacks. From real-time Canvas and WebGL shaders to sub-second serverless rendering, we treat frontend performance as a primary design material.",
      metrics: ["100/100 Lighthouse Performance", "Sub-second TTFB", "Global Edge Cache"],
      deliverables: [
        "Full-Stack Next.js 16 App Router & Server Components",
        "Hardware-Accelerated HTML5 Canvas & WebGL Shaders",
        "Smooth Scroll Orchestration & Physics Interp Engine",
        "Fluid Micro-Interactions & Hardware LERP Transitions",
        "Enterprise API Integration & Edge Runtime Security",
      ],
      technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Canvas API", "WebGL"],
      accentColor: "from-purple-500 to-violet-700",
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Growth Engineering & High-Precision Campaigns",
      description:
        "Data-driven distribution frameworks that amplify market dominance. We connect high-converting digital surfaces with algorithmic acquisition funnels to turn traffic into enduring institutional equity.",
      metrics: ["4.8x Average Return on Ad Spend", "78% Lower CAC", "Scalable Funnel Velocity"],
      deliverables: [
        "High-Conversion Lander Funnels & Dynamic Copy",
        "Behavioral Analytics & Multi-Touch Attribution",
        "Automated CRM & Enterprise Email Journeys",
        "Organic Visibility & Programmatic Search Authority",
        "Real-Time Telemetry & Performance Dashboards",
      ],
      technologies: ["Mixpanel", "Segment", "PostHog", "Conversion CRO", "Edge Analytics"],
      accentColor: "from-indigo-600 to-purple-800",
    },
  ];

  const current = serviceDetails[selectedTab];

  return (
    <section
      id="services"
      className="relative z-20 w-full py-28 px-6 lg:px-14 xl:px-20 max-w-[1550px] mx-auto border-t border-purple-500/10"
    >
      {/* Luz ambiente roxa */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[150px]" />

      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-purple-400">
              Core Practices
            </span>
            <div className="w-8 h-[1px] bg-purple-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Specialized in{" "}
            <span className="font-serif-italic font-normal text-purple-200">
              extreme craft
            </span>
            .
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Every project is built from first principles without generic templates, combining artistic mastery with enterprise-grade engineering.
        </p>
      </div>

      {/* Navegação por Tabs Interativas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {serviceDetails.map((service) => {
          const isSelected = selectedTab === service.id;
          return (
            <button
              key={service.id}
              onClick={() => setSelectedTab(service.id)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? "bg-[#180a2c] border border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  : "bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-purple-500/20"
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500" />
              )}
              <span className="text-[10px] font-mono text-purple-300/80 tracking-widest block mb-2">
                0{service.id + 1} // PRACTICE
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-1">
                {service.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Painel de Detalhes Ativo (Bento Box em Glassmorphism) */}
      <div className="rounded-3xl bg-[#0f071e]/75 border border-purple-500/20 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow dinâmico de fundo */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coluna Esquerda: Descrição, Métricas e Ação */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono tracking-wider text-purple-300 uppercase px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Grid de Métricas de Impacto */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] mb-8">
                {current.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-purple-200">
                      {metric}
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">
                      Benchmark Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags de Tecnologias */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-zinc-500 mr-2">TECH STACK:</span>
              {current.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-950/40 border border-purple-500/25 text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Entregáveis Tangíveis */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                Tangible Deliverables
              </span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>

            <div className="space-y-3.5">
              {current.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-200" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-400/40 hover:border-purple-400 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              >
                <span>Request {current.title} Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
