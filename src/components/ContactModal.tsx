"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(t.modalServices[0]);
  const [selectedRevenue, setSelectedRevenue] = useState(t.modalRevenues[1]);

  const services = t.modalServices;
  const revenues = t.modalRevenues;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-3xl bg-[#0e071c] border border-purple-500/35 p-6 sm:p-8 shadow-[0_0_80px_rgba(168,85,247,0.35)] overflow-hidden"
      >
        {/* Glow de fundo */}
        <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-purple-600/25 blur-[100px] pointer-events-none" />

        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-purple-300 uppercase">
                {lang === "pt" ? "Sessão Estratégica Individual" : "Individual Strategic Session"}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              {t.modalTitlePre}{" "}
              <span className="font-serif-italic font-normal text-purple-200">
                {t.modalTitleHighlight}
              </span>
              .
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              {t.modalSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Seleção de Objetivo Principal */}
              <div>
                <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  {t.modalLabelBottleneck}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all ${
                        selectedService === srv
                          ? "bg-purple-600/40 border border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                          : "bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campos de Nome e WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    {t.modalLabelName}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Gabriel Silva"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-purple-400 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    {t.modalLabelPhone}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-purple-400 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* @ do Instagram */}
              <div>
                <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                  {t.modalLabelInstagram}
                </label>
                <input
                  required
                  type="text"
                  placeholder="@seuperfil"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-purple-400 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
                />
              </div>

              {/* Faturamento Atual */}
              <div>
                <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                  {t.modalLabelRevenue}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {revenues.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRevenue(r)}
                      className={`py-2 px-2 text-[10px] font-mono rounded-lg transition-all text-center ${
                        selectedRevenue === r
                          ? "bg-purple-600/40 border border-purple-400 text-white"
                          : "bg-white/[0.02] border border-white/[0.06] text-zinc-500 hover:text-white"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <span>{t.modalSubmit}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-600/20 border border-purple-400/50 flex items-center justify-center mb-4 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <CheckCircle2 className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t.modalSuccessTitle}</h3>
            <p className="text-sm text-zinc-400 max-w-sm">
              {t.modalSuccessText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
