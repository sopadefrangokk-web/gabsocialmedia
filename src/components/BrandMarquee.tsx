"use client";

import React from "react";
import { Sparkles, Award, TrendingUp, Users } from "lucide-react";

export function BrandMarquee() {
  const brands = [
    { name: "AETHER LABS", type: "AI Robotics" },
    { name: "NEXUS PAY", type: "Fintech" },
    { name: "KINESIS", type: "Motion Systems" },
    { name: "LUMINA CLOUD", type: "Infrastructure" },
    { name: "VELOCE TECH", type: "Automotive" },
    { name: "SYNERGY OS", type: "Operating System" },
  ];

  const stats = [
    {
      value: "120+",
      label: "Global Brands Scaled",
      icon: <Users className="w-4 h-4 text-purple-400" />,
    },
    {
      value: "$450M+",
      label: "Client Value Generated",
      icon: <TrendingUp className="w-4 h-4 text-purple-400" />,
    },
    {
      value: "38",
      label: "Design & Tech Awards",
      icon: <Award className="w-4 h-4 text-purple-400" />,
    },
    {
      value: "99.2%",
      label: "Retention & Satisfaction",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
    },
  ];

  return (
    <section className="relative z-20 w-full py-16 border-y border-white/[0.06] bg-[#070310]/70 backdrop-blur-lg">
      <div className="max-w-[1550px] mx-auto px-6 lg:px-14 xl:px-20">
        {/* Subtitle */}
        <p className="text-center text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-8">
          Trusted by pioneering technology leaders worldwide
        </p>

        {/* Brand Logos (Puro vetor/tipografia futurista sem imagens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity mb-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/[0.03] transition-all cursor-default"
            >
              <span className="text-base font-extrabold tracking-[0.2em] text-zinc-300 group-hover:text-purple-300 group-hover:scale-105 transition-all">
                {brand.name}
              </span>
              <span className="text-[10px] tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {brand.type}
              </span>
            </div>
          ))}
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/[0.05]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-start p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-all hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
