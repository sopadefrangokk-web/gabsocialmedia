"use client";

import React from "react";
import { Sparkles, Eye, Zap, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: <Eye className="w-5 h-5 text-purple-300" />,
      title: "Visionary Direction",
      desc: "We don't follow trends; we define visual archetypes that position brands years ahead of their industry.",
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-300" />,
      title: "Kinetic Craftsmanship",
      desc: "Motion is emotion. We build fluid, high-frame-rate interactive systems where every touchpoint feels alive.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-300" />,
      title: "Commercial Impact",
      desc: "Aesthetic mastery backed by conversion engineering, user psychology, and scalable digital architectures.",
    },
  ];

  return (
    <section id="about" className="relative z-20 w-full py-28 px-6 lg:px-14 xl:px-20 max-w-[1550px] mx-auto">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[150px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Manifesto */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-purple-400">
              Who We Are
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            We sculpt digital gravity for{" "}
            <span className="font-serif-italic font-normal text-purple-200">
              ambitious
            </span>{" "}
            founders.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            NOVA was founded on a singular conviction: ordinary design disappears, but extraordinary digital experiences generate lasting brand equity and market dominance.
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            Operating at the intersection of cinematic art direction, advanced frontend engineering, and behavioral design, we help world-class companies command the attention they deserve.
          </p>

          <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Award-Winning Standard</h4>
              <p className="text-xs text-zinc-400">Honored by Awwwards, FWA, and CSS Design Awards in 2025-2026.</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Pillars Grid */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-2xl bg-[#11091e]/60 border border-white/[0.07] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:bg-[#160c28]/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-purple-600/30 transition-all">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
