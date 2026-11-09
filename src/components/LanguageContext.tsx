"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "pt" | "en";

export interface Strings {
  nav: string[];
  scheduleSession: string;
  strategyTag: string;
  heroLine1: string;
  heroLine1Italic: string;
  heroLine2: string;
  heroHighlight: string;
  heroSubtitle: string;
  primaryCta: string;
  howItWorks: string;
  validatedBy: string;
  profitableProfiles: string;
  services: { title: string; desc: string }[];
  scrollExplore: string;
  bentoBadge: string;
  bentoTitlePre: string;
  bentoTitleHighlight1: string;
  bentoTitleMid: string;
  bentoTitleHighlight2: string;
  bentoSubtitle: string;
  features: string[];
  growTogether: string;
  talkToMe: string;
  transformTitlePre: string;
  transformTitleHighlight: string;
  transformTextPre: string;
  transformTextPost: string;
  subscribedMessage: string;
  emailPlaceholder: string;
  subscribe: string;
  followersLabel: string;
  myServices: string;
  serviceItems: string[];
  learnMore: string;
  viewsLabel: string;
  bentoFooterTagline: string;
  aboutTag: string;
  aboutTitlePre: string;
  aboutTitleHighlight: string;
  aboutP1: string;
  aboutP2: string;
  stats: string[];
  contactBadge: string;
  contactTitlePre: string;
  contactTitleHighlight: string;
  contactText: string;
  contactCta: string;
  footerRights: string;
  reelTitle: string;
  reelText: string;
  modalTitlePre: string;
  modalTitleHighlight: string;
  modalSubtitle: string;
  modalLabelBottleneck: string;
  modalLabelName: string;
  modalLabelPhone: string;
  modalLabelInstagram: string;
  modalLabelRevenue: string;
  modalSubmit: string;
  modalSuccessTitle: string;
  modalSuccessText: string;
  modalServices: string[];
  modalRevenues: string[];
}

const pt: Strings = {
  nav: ["Início", "Sobre", "Serviços", "Resultados", "Contato"],
  scheduleSession: "Agendar Sessão",
  strategyTag: "Estratégia & Conversão Digital",
  heroLine1: "Seu Instagram está",
  heroLine1Italic: "bonito,",
  heroLine2: "mas",
  heroHighlight: "não vende?",
  heroSubtitle:
    "Transformamos seguidores e curtidas em faturamento real. Estruturamos narrativas visuais, esteiras de conteúdo e funis de conversão para o seu perfil finalmente monetizar com autoridade.",
  primaryCta: "Quero Vender Mais",
  howItWorks: "Ver Como Funciona",
  validatedBy: "Validado por",
  profitableProfiles: "+120 perfis lucrativos",
  services: [
    { title: "Estratégia de Conteúdo", desc: "Linhas editoriais que atraem público comprador e qualificado." },
    { title: "Posicionamento Visual", desc: "Estética cinematográfica que transmite alto valor e autoridade imediata." },
    { title: "Funis de Conversão", desc: "Automações no Direct, Stories magnéticos e páginas com alto fechamento." },
    { title: "Tráfego & Escala", desc: "Campanhas direcionadas para atrair compradores prontos para fechar." },
  ],
  scrollExplore: "Scroll to explore",
  bentoBadge: "Social Media • Conteúdo • Estratégia",
  bentoTitlePre: "Eleve sua",
  bentoTitleHighlight1: "marca",
  bentoTitleMid: "nas redes",
  bentoTitleHighlight2: "sociais.",
  bentoSubtitle: "Estratégia criativa, conteúdo que conecta e resultados reais para o seu negócio.",
  features: ["Estratégias personalizadas", "Conteúdo criativo e envolvente", "Acompanhamento próximo"],
  growTogether: "Vamos crescer juntos",
  talkToMe: "Fale Comigo",
  transformTitlePre: "Transforme suas ideias em conteúdo que",
  transformTitleHighlight: "inspira.",
  transformTextPre: "Junte-se a mais de",
  transformTextPost: "pessoas que confiam no meu trabalho para crescer no digital.",
  subscribedMessage: "Inscrição confirmada! Fique de olho no seu e-mail.",
  emailPlaceholder: "Seu e-mail",
  subscribe: "Inscrever-se",
  followersLabel: "Seguidores alcançados",
  myServices: "Meus Serviços",
  serviceItems: ["Gestão de Redes Sociais", "Criação de Conteúdo (Posts & Reels)", "Estratégia Digital", "Consultoria Criativa"],
  learnMore: "Conheça mais",
  viewsLabel: "Visualizações mensais",
  bentoFooterTagline: "Social Media • Conteúdo • Estratégia",
  aboutTag: "O Diagnóstico Real",
  aboutTitlePre: "Por que 97% dos perfis bonitos continuam",
  aboutTitleHighlight: "sem vender nada",
  aboutP1:
    "Beleza sem estratégia é apenas vaidade cara. No mercado atual, uma boa estética chama a atenção por 3 segundos, mas é a clareza da sua oferta, o posicionamento magnético e os funis ativos no Direct que colocam dinheiro no seu caixa.",
  aboutP2:
    "Não entregamos templates genéricos nem truques de algoritmo. Estruturamos o seu negócio com mentalidade de alta conversão, transformando a sua audiência em compradores de alto valor.",
  stats: ["Aumento em Conversão", "Faturamento Gerado", "Negócios no Topo", "Funis Automáticos"],
  contactBadge: "CONSULTORIA ESTRATÉGICA // AGENDA ABERTA",
  contactTitlePre: "Pronto para transformar seu perfil em uma",
  contactTitleHighlight: "máquina de vendas",
  contactText:
    "Vagas limitadas para acompanhamento estratégico individual. Agende sua sessão diagnóstica confidencial para mapearmos seus maiores gargalos de conversão.",
  contactCta: "Agendar Meu Diagnóstico Gratuito",
  footerRights: "Todos os direitos reservados.",
  reelTitle: "Gabriel Social Media Reel 2026",
  reelText: "Narrativas cinematográficas de marca, interações espaciais e artesanato digital ultra-nítido em 8K.",
  modalTitlePre: "Agende seu",
  modalTitleHighlight: "diagnóstico",
  modalSubtitle: "Mapeie os gargalos que estão impedindo o seu perfil do Instagram de converter seguidores em clientes.",
  modalLabelBottleneck: "Maior Gargalo Atual",
  modalLabelName: "Seu Nome",
  modalLabelPhone: "WhatsApp (com DDD)",
  modalLabelInstagram: "@ do seu Instagram",
  modalLabelRevenue: "Faixa Atual de Faturamento",
  modalSubmit: "Solicitar Meu Diagnóstico Gratuito",
  modalSuccessTitle: "Diagnóstico Solicitado com Sucesso",
  modalSuccessText: "Nossa equipe já está analisando o seu perfil. Entraremos em contato via WhatsApp nas próximas horas.",
  modalServices: ["Estratégia de Conteúdo", "Posicionamento Visual", "Funil de Vendas no Direct", "Tráfego & Escala"],
  modalRevenues: ["Iniciando (< R$ 10k)", "R$ 10k - R$ 30k/mês", "R$ 30k - R$ 80k/mês", "+ R$ 100k/mês"],
};

const en: Strings = {
  nav: ["Home", "About", "Services", "Results", "Contact"],
  scheduleSession: "Book a Session",
  strategyTag: "Strategy & Digital Conversion",
  heroLine1: "Your Instagram is",
  heroLine1Italic: "beautiful,",
  heroLine2: "but it doesn't",
  heroHighlight: "sell?",
  heroSubtitle:
    "We turn followers and likes into real revenue. We structure visual narratives, content streams and conversion funnels so your profile finally monetizes with authority.",
  primaryCta: "I Want to Sell More",
  howItWorks: "See How It Works",
  validatedBy: "Trusted by",
  profitableProfiles: "+120 profitable profiles",
  services: [
    { title: "Content Strategy", desc: "Editorial lines that attract qualified, ready-to-buy audiences." },
    { title: "Visual Positioning", desc: "Cinematic aesthetics that convey high value and instant authority." },
    { title: "Conversion Funnels", desc: "DM automations, magnetic Stories and high-closing pages." },
    { title: "Traffic & Scale", desc: "Targeted campaigns to attract buyers ready to close." },
  ],
  scrollExplore: "Scroll to explore",
  bentoBadge: "Social Media • Content • Strategy",
  bentoTitlePre: "Elevate your",
  bentoTitleHighlight1: "brand",
  bentoTitleMid: "on social",
  bentoTitleHighlight2: "media.",
  bentoSubtitle: "Creative strategy, content that connects and real results for your business.",
  features: ["Tailored strategies", "Creative, engaging content", "Close, hands-on support"],
  growTogether: "Let's grow together",
  talkToMe: "Talk to Me",
  transformTitlePre: "Turn your ideas into content that",
  transformTitleHighlight: "inspires.",
  transformTextPre: "Join",
  transformTextPost: "people who trust my work to grow in the digital world.",
  subscribedMessage: "Subscription confirmed! Keep an eye on your email.",
  emailPlaceholder: "Your email",
  subscribe: "Subscribe",
  followersLabel: "Followers reached",
  myServices: "My Services",
  serviceItems: ["Social Media Management", "Content Creation (Posts & Reels)", "Digital Strategy", "Creative Consulting"],
  learnMore: "Learn more",
  viewsLabel: "Monthly views",
  bentoFooterTagline: "Social Media • Content • Strategy",
  aboutTag: "The Real Diagnosis",
  aboutTitlePre: "Why do 97% of beautiful profiles keep",
  aboutTitleHighlight: "making no sales",
  aboutP1:
    "Beauty without strategy is just expensive vanity. In today's market, good aesthetics grab attention for 3 seconds, but the clarity of your offer, magnetic positioning and active DM funnels are what put money in your bank.",
  aboutP2:
    "We don't deliver generic templates or algorithm hacks. We structure your business with a high-conversion mindset, turning your audience into high-value buyers.",
  stats: ["Conversion Increase", "Revenue Generated", "Top Businesses", "Automated Funnels"],
  contactBadge: "STRATEGIC CONSULTING // SLOTS OPEN",
  contactTitlePre: "Ready to turn your profile into a",
  contactTitleHighlight: "sales machine",
  contactText:
    "Limited spots for individual strategic support. Book your confidential diagnostic session so we can map your biggest conversion bottlenecks.",
  contactCta: "Book My Free Diagnosis",
  footerRights: "All rights reserved.",
  reelTitle: "Gabriel Social Media Reel 2026",
  reelText: "Cinematic brand narratives, spatial interactions and 8K ultra-sharp digital craftsmanship.",
  modalTitlePre: "Book your",
  modalTitleHighlight: "diagnosis",
  modalSubtitle: "Map the bottlenecks preventing your Instagram profile from converting followers into customers.",
  modalLabelBottleneck: "Biggest Current Bottleneck",
  modalLabelName: "Your Name",
  modalLabelPhone: "WhatsApp (with area code)",
  modalLabelInstagram: "Your Instagram @",
  modalLabelRevenue: "Current Revenue Range",
  modalSubmit: "Request My Free Diagnosis",
  modalSuccessTitle: "Diagnosis Requested Successfully",
  modalSuccessText: "Our team is already analyzing your profile. We will contact you via WhatsApp within the next few hours.",
  modalServices: ["Content Strategy", "Visual Positioning", "DM Sales Funnel", "Traffic & Scale"],
  modalRevenues: ["Starting out (< $2k)", "$2k - $6k/month", "$6k - $16k/month", "+ $20k/month"],
};

export const translations: Record<Lang, Strings> = { pt, en };

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Strings;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
