"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code, Palette, Smartphone, Globe } from "lucide-react";

export function SelectedWork() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Experiences", "Branding", "Digital Products"];

  const projects = [
    {
      id: "hyperia",
      title: "Hyperia OS",
      category: "Digital Products",
      year: "2026",
      tags: ["Next.js", "Design System", "3D Motion"],
      summary: "Autonomous AI workspace with spatial canvas and multi-agent coordination interface.",
      accent: "from-purple-600 via-violet-500 to-indigo-600",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <div className="w-full max-w-[280px] h-[160px] rounded-xl bg-purple-950/40 border border-purple-500/40 p-3 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <div className="w-2 h-2 rounded-full bg-green-400/80" />
              </div>
              <span className="text-[10px] font-mono text-purple-300">hyperia.v2</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-purple-400/30 rounded" />
              <div className="h-2 w-1/2 bg-purple-400/20 rounded" />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-8 bg-purple-600/30 rounded border border-purple-400/30" />
                <div className="h-8 bg-purple-600/20 rounded border border-purple-400/20" />
                <div className="h-8 bg-purple-600/40 rounded border border-purple-400/40" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] text-zinc-400">
              <span>99.98% Latency</span>
              <span className="text-purple-300 font-semibold">Active</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "aether",
      title: "Aether Energy",
      category: "Web Experiences",
      year: "2025",
      tags: ["WebGL", "Branding", "Creative Tech"],
      summary: "Immersive narrative for the leader in orbital clean fusion and deep-space infrastructure.",
      accent: "from-fuchsia-600 via-purple-600 to-purple-900",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <div className="relative w-36 h-36 rounded-full border border-fuchsia-400/40 flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full border border-purple-400/60 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-400 shadow-[0_0_25px_rgba(232,121,249,0.8)]" />
            </div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
          </div>
        </div>
      ),
    },
    {
      id: "solstice",
      title: "Solstice Pay",
      category: "Branding",
      year: "2026",
      tags: ["Identity", "Typography", "Fintech 3.0"],
      summary: "Global brand overhaul for a trillion-dollar institutional cross-border liquidity network.",
      accent: "from-indigo-600 via-purple-700 to-violet-900",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <div className="relative w-56 h-32 rounded-2xl bg-gradient-to-tr from-[#1b0b33] to-[#2c134d] border border-purple-400/40 p-4 shadow-xl flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono tracking-widest text-purple-200">SOLSTICE PLATINUM</span>
              <div className="w-5 h-5 rounded-full border border-purple-300/40" />
            </div>
            <div>
              <div className="text-[11px] font-mono tracking-widest text-zinc-400">•••• •••• •••• 9842</div>
              <div className="text-[9px] text-purple-300/70 mt-1">QUANTUM SETTLEMENT LAYER</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "kinesis",
      title: "Kinesis Motors",
      category: "Web Experiences",
      year: "2025",
      tags: ["Interactive 3D", "E-commerce", "Performance"],
      summary: "Ultra-responsive vehicle configurator and telemetry dashboard for electric hypercars.",
      accent: "from-purple-700 via-indigo-600 to-black",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <svg className="w-48 h-24 text-purple-400" viewBox="0 0 200 100" fill="none">
            <path
              d="M10,70 L40,70 L70,30 L150,30 L180,60 L195,70"
              stroke="url(#carLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="55" cy="70" r="12" stroke="#c084fc" strokeWidth="2" />
            <circle cx="165" cy="70" r="12" stroke="#c084fc" strokeWidth="2" />
            <defs>
              <linearGradient id="carLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7e22ce" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },
  ];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative z-20 w-full py-28 px-6 lg:px-14 xl:px-20 max-w-[1550px] mx-auto border-t border-white/[0.06]">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-purple-400">
              Selected Works
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Case studies in{" "}
            <span className="font-serif-italic font-normal text-purple-200">
              digital excellence
            </span>
            .
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? "bg-purple-600/40 border border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  : "bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-3xl bg-[#0f071c]/60 border border-white/[0.08] overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col justify-between"
          >
            {/* Visual Graphic Mockup Container */}
            <div className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-[#190d2e]/80 to-[#0c0517] overflow-hidden flex items-center justify-center border-b border-white/[0.06]">
              {/* Corner badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-purple-300">
                {item.year}
              </div>

              {/* Arrow action */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-purple-600/30 border border-purple-400/40 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-purple-600 transition-all shadow-lg">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Graphic element */}
              <div className="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                {item.graphic}
              </div>
            </div>

            {/* Info details */}
            <div className="p-7">
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
