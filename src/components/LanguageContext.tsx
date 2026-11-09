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
  expertiseTag: string;
  expertiseTitlePre: string;
  expertiseTitleHighlight: string;
  expertiseDesc: string;
  practiceLabel: string;
  benchmarkVerified: string;
  deliverablesLabel: string;
  techStackLabel: string;
  requestPrefix: string;
  expertise: {
    title: string;
    subtitle: string;
    description: string;
    metrics: string[];
    deliverables: string[];
  }[];
  worksTag: string;
  worksTitlePre: string;
  worksTitleHighlight: string;
  worksCurated: string;
  worksExplore: string;
  works: { category: string; desc: string }[];
  personTag: string;
  personTitlePre: string;
  personTitleHighlight: string;
  personP1: string;
  personP2: string;
  personP3: string;
  personBadgeDirect: string;
  personBadgeStrategy: string;
  personSignatureRole: string;
  faqTag: string;
  faqTitlePre: string;
  faqTitleHighlight: string;
  faqSubtitle: string;
  faqItems: { q: string; a: string }[];
  sitesTag: string;
  sitesTitle: string;
  sitesTitleHighlight: string;
  sitesP1: string;
  sitesP2: string;
  sitesCta: string;
  sitesBadge1: string;
  sitesBadge2: string;
  sitesBadge3: string;
  methodTag: string;
  methodTitlePre: string;
  methodTitleHighlight: string;
  methodSubtitle: string;
  methodSteps: {
    num: string;
    title: string;
    desc: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    footer: string;
  }[];
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
    "Transformo seguidores e curtidas em faturamento real. Estruturo narrativas visuais, esteiras de conteúdo e funis de conversão para o seu perfil finalmente monetizar com autoridade.",
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
  transformTextPre: "Junte-se a todas as pessoas que confiaram no meu trabalho e conseguiram",
  transformTextPost: "resultados inexplicáveis.",
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
    "Não entrego templates genéricos nem truques de algoritmo. Estruturo o seu negócio com mentalidade de alta conversão, transformando a sua audiência em compradores de alto valor.",
  stats: ["Aumento em Conversão", "Faturamento Gerado", "Negócios no Topo", "Funis Automáticos"],
  contactBadge: "CONSULTORIA ESTRATÉGICA // AGENDA ABERTA",
  contactTitlePre: "Pronto para transformar seu perfil em uma",
  contactTitleHighlight: "máquina de vendas",
  contactText:
    "Vagas limitadas para acompanhamento estratégico individual. Agende sua sessão diagnóstica confidencial para mapearmos seus maiores gargalos de conversão.",
  contactCta: "Agendar Meu Diagnóstico Gratuito",
  footerRights: "Todos os direitos reservados.",
  reelTitle: "GB Gabriel Marketing Digital Reel 2026",
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
  expertiseTag: "Práticas Principais",
  expertiseTitlePre: "Especializado em",
  expertiseTitleHighlight: "artesanato extremo",
  expertiseDesc: "Cada projeto é construído do zero, sem templates genéricos, unindo maestria artística e engenharia de alto padrão.",
  practiceLabel: "PRÁTICA",
  benchmarkVerified: "Benchmark Verificado",
  deliverablesLabel: "Entregáveis Tangíveis",
  techStackLabel: "TECNOLOGIAS:",
  requestPrefix: "Solicitar especificação de",
  expertise: [
    {
      title: "Estratégia de Marca",
      subtitle: "Posicionamento, Narrativa & Sistemas de Identidade",
      description:
        "Construo bases de marca de alto impacto para organizações que definem categorias. Com pesquisa qualitativa rigorosa e semiótica visual, construo identidades distintas que entregam respeito institucional.",
      metrics: ["+340% Reconhecimento de Marca", "Liderança de Categoria", "Marcas Registradas Globais"],
      deliverables: [
        "Arquétipo de Marca & Manifesto de Posicionamento",
        "Identidade Visual Completa & Diretrizes Cinéticas",
        "Arquitetura de Tipografia & Tokens de Design",
        "Identidade Verbal & Tom de Voz Editorial",
        "Narrativa de Lançamento para Mercado e Investidores",
      ],
    },
    {
      title: "Design UI/UX",
      subtitle: "Produtos Digitais & Experiências Humanas",
      description:
        "Interfaces calibradas para deleite sensorial, fluidez de micro-interações e zero fricção cognitiva. Uno estruturas ergonômicas com profundidade espacial cinematográfica para criar produtos que as pessoas amam.",
      metrics: ["<80ms Latência de Interação", "99,4% Pontuação de Usabilidade", "Zero Fadiga Cognitiva"],
      deliverables: [
        "Design Systems Multiplataforma (Web, iOS, macOS, Espacial)",
        "Micro-interações de Alta Fidelidade & Protótipos",
        "Arquitetura da Informação & Jornada do Usuário",
        "Engenharia de Tema Escuro/Claro",
        "Design Tokens Acessíveis (WCAG 2.1 AAA)",
      ],
    },
    {
      title: "Desenvolvimento Web",
      subtitle: "Engenharia Web Moderna de Alto Desempenho",
      description:
        "Bases de código limpas, manuteníveis e ultra-rápidas em stacks modernas. De Canvas em tempo real a renderização serverless em sub-segundo, trato o desempenho do frontend como material de design primário.",
      metrics: ["100/100 Desempenho Lighthouse", "TTFB Sub-segundo", "Cache Global de Borda"],
      deliverables: [
        "Apps Next.js 16 Full-Stack & Server Components",
        "Canvas HTML5 & Shaders WebGL Acelerados por Hardware",
        "Scroll Suave & Transições com Física LERP",
        "Micro-interações Fluidas Aceleradas",
        "Integração de APIs Enterprise & Segurança em Runtime",
      ],
    },
    {
      title: "Marketing Digital",
      subtitle: "Engenharia de Crescimento & Campanhas de Precisão",
      description:
        "Estruturas de distribuição orientadas a dados que amplificam o domínio de mercado. Conecto superfícies digitais de alta conversão com funis de aquisição algorítmica para transformar tráfego em equity duradoura.",
      metrics: ["4,8x Retorno Médio em Anúncios", "78% Menor CAC", "Velocidade de Funil Escalável"],
      deliverables: [
        "Funis de Landing Page de Alta Conversão & Copy Dinâmica",
        "Analytics Comportamental & Atribuição Multi-Toque",
        "CRM Automatizado & Jornadas de E-mail Enterprise",
        "Visibilidade Orgânica & Autoridade de Busca",
        "Dashboards de Telemetria em Tempo Real",
      ],
    },
  ],
  worksTag: "Portfólio",
  worksTitlePre: "Comissões",
  worksTitleHighlight: "selecionadas",
  worksCurated: "Portfólio Curado // 2025–2026",
  worksExplore: "Explorar Estudo de Caso",
  works: [
    { category: "Computação Espacial", desc: "Plataforma autônoma de inteligência espacial projetada para gestão de ativos institucionais." },
    { category: "Tecnologia Automotiva", desc: "Configurador 3D interativo em tempo real e experiência de telemetria para hipercarros elétricos." },
    { category: "Liquidez Global", desc: "Identidade visual completa e terminal de transações para capital transfronteiras de última geração." },
    { category: "Robótica Quântica", desc: "Presença web cinematográfica e suíte de documentação técnica para fotônica quântica." },
  ],
  personTag: "Apresentação",
  personTitlePre: "Quem está por trás",
  personTitleHighlight: "do seu perfil",
  personP1: "Eu sou Gabriel. Mais do que cuidar das publicações, meu trabalho é entender o seu negócio, encontrar a melhor forma de comunicar seu valor e construir uma presença digital que faça sentido para seus objetivos.",
  personP2: "Cada conteúdo tem uma intenção, cada escolha faz parte de uma estratégia e cada etapa é acompanhada de perto por mim.",
  personP3: "Você não vai falar com uma equipe que repassa tarefas. Vai falar diretamente com quem pensa, planeja e cuida do seu perfil.",
  personBadgeDirect: "Atendimento direto comigo",
  personBadgeStrategy: "Estratégia + Acompanhamento próximo",
  personSignatureRole: "GB Gabriel • Marketing Digital",
  faqTag: "Tire suas dúvidas",
  faqTitlePre: "Perguntas",
  faqTitleHighlight: "frequentes",
  faqSubtitle: "Tudo o que você precisa saber antes de começar — sem enrolação, direto ao ponto.",
  faqItems: [
    {
      q: "Preciso ter muitos seguidores para começar?",
      a: "Não. O número de seguidores não define o seu resultado — o que define é a clareza da sua oferta e o posicionamento do perfil. Começo do zero ou com um perfil pequeno, com consistência: construo a base, a narrativa e o conteúdo para atrair o público certo, não qualquer público. Crescimento consistente vem de estratégia, não de quantidade.",
    },
    {
      q: "Quanto tempo leva para ver resultado?",
      a: "Depende do ponto de partida, do nicho e da frequência. Na maioria dos casos, os primeiros sinais — perfil mais profissional, mensagens mais qualificadas e conteúdo com mais intenção — aparecem entre 30 e 60 dias. Crescimento sólido e vendas recorrentes levam de 3 a 6 meses de consistência. Meu trabalho é acelerar esse processo com estratégia, não com promessas milagrosas.",
    },
    {
      q: "Eu preciso gravar os vídeos?",
      a: "Depende do formato que funciona melhor para o seu negócio. Posso escrever roteiros e direcionar a gravação — você grava com o celular em poucos minutos por semana, ou, se preferir, produzimos com roteiro e direção para você apenas aparecer. Em alguns casos, trabalhamos com banco de imagens, bastidores e conteúdo criado por mim. Você nunca fica travado por não saber gravar.",
    },
    {
      q: "Como é feito o pagamento?",
      a: "O pagamento é mensal, simples e transparente: Pix ou cartão de crédito, sem taxa escondida e sem fidelidade forçada. Você começa com o diagnóstico gratuito, escolhe o plano ideal para o seu momento e só então ativamos o trabalho. Tudo é formalizado em contrato, com recibo e acompanhamento de perto por mim — direto comigo, sem intermediários.",
    },
  ],
  sitesTag: "Criação de Sites",
  sitesTitle: "Seu negócio merece ir além das",
  sitesTitleHighlight: "redes sociais.",
  sitesP1: "Transformo sua presença digital em uma experiência profissional com sites modernos, estratégicos e personalizados. Soluções pensadas para pequenos negócios, profissionais autônomos e prestadores de serviço que desejam fortalecer sua marca, ampliar sua visibilidade e conquistar novas oportunidades.",
  sitesP2: "Tudo isso com um site responsivo, desenvolvido para oferecer uma experiência fluida em celulares, tablets e computadores.",
  sitesCta: "Quero levar meu negócio para a internet",
  sitesBadge1: "100% Responsivo",
  sitesBadge2: "Design Personalizado",
  sitesBadge3: "Foco em Conversão",
  methodTag: "Nosso Método",
  methodTitlePre: "Do início ao resultado:",
  methodTitleHighlight: "nosso processo",
  methodSubtitle: "Um método claro, estratégico e personalizado — do primeiro olhar no seu perfil até a evolução contínua.",
  methodSteps: [
    {
      num: "01",
      title: "Objetivos",
      desc: "Todo projeto precisa de uma direção. Definimos objetivos de acordo com a realidade de cada marca, conectando conteúdo, posicionamento e estratégia para construir uma presença digital mais consistente.",
      subtitle: "O que buscamos alcançar",
      items: [
        { title: "Mais engajamento", desc: "Aproximar a marca do público e estimular conexões." },
        { title: "Uma marca mais forte", desc: "Construir reconhecimento, identidade e confiança." },
        { title: "Crescimento consistente", desc: "Ampliar a presença digital e gerar novas oportunidades." },
      ],
      footer: "Planejamento • Estratégia • Resultados",
    },
    {
      num: "02",
      title: "Análise",
      desc: "Antes de definir qualquer estratégia, precisamos entender o cenário atual da sua marca. Analisamos o perfil, o público e os conteúdos para identificar pontos de melhoria e oportunidades.",
      subtitle: "O que analisamos",
      items: [
        { title: "Perfil", desc: "Avaliamos como sua marca se apresenta, seu posicionamento, sua identidade e os pontos que a diferenciam." },
        { title: "Público", desc: "Entendemos quem acompanha sua marca, seus interesses e que tipo de conteúdo desperta sua atenção." },
        { title: "Conteúdo", desc: "Observamos o desempenho das publicações para identificar o que gera interesse e o que precisa ser ajustado." },
        { title: "Oportunidades", desc: "Identificamos caminhos para melhorar sua presença digital e tornar a comunicação mais eficiente." },
      ],
      footer: "Estratégia • Dados • Crescimento • Resultados",
    },
    {
      num: "03",
      title: "Calendário de Postagens",
      desc: "Cada publicação precisa ter um propósito. Organizamos os conteúdos em um calendário estratégico, considerando a rotina da marca, os interesses do público e os objetivos de comunicação.",
      subtitle: "Como organizamos",
      items: [
        { title: "Planejamento", desc: "Definimos os melhores momentos e formatos para publicar, considerando a proposta de cada conteúdo." },
        { title: "Organização", desc: "Estruturamos as publicações com antecedência, com visão clara do que será produzido e divulgado." },
        { title: "Consistência", desc: "Mantemos uma frequência alinhada à realidade da marca, fortalecendo sua presença no digital." },
        { title: "Desempenho", desc: "Acompanhamos a resposta do público para entender o que funciona e orientar os próximos conteúdos." },
      ],
      footer: "Organização • Constância • Estratégia • Evolução",
    },
    {
      num: "04",
      title: "Clientes",
      desc: "Cada marca tem sua própria história, necessidades e objetivos. Cada projeto é desenvolvido com atenção à identidade do negócio, unindo estratégia, criatividade e comunicação com propósito.",
      subtitle: "O que guia cada projeto",
      items: [
        { title: "Personalização", desc: "Cada cliente recebe um planejamento próprio, a partir de seus objetivos, segmento e posicionamento." },
        { title: "Criatividade", desc: "Conteúdos que valorizam a identidade da marca, despertam interesse e comunicam com propósito." },
        { title: "Parceria", desc: "Relação próxima, com diálogo aberto, alinhamento constante e acompanhamento em cada etapa." },
        { title: "Evolução", desc: "Fortalecemos a presença digital da marca, ampliamos sua visibilidade e criamos oportunidades." },
      ],
      footer: "Identidade • Criatividade • Parceria • Evolução",
    },
    {
      num: "05",
      title: "Antes",
      desc: "Todo projeto começa com uma boa análise. Antes de propor mudanças, entendemos como sua marca se apresenta, como se comunica e onde estão as oportunidades de evolução.",
      subtitle: "O que observamos",
      items: [
        { title: "Perfil", desc: "Analisamos a apresentação do perfil, a identidade visual e o posicionamento da marca." },
        { title: "Público", desc: "Identificamos o público que a marca deseja alcançar, seus interesses e comportamento." },
        { title: "Conteúdo", desc: "Avaliamos as publicações atuais, identificando pontos fortes e aspectos a aprimorar." },
        { title: "Desempenho", desc: "Observamos os resultados para reconhecer oportunidades e saber onde evoluir." },
      ],
      footer: "Identidade visual • Conteúdo • Público-alvo • Posicionamento • Estratégia • Desempenho",
    },
  ],
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
    "I turn followers and likes into real revenue. I build visual narratives, content streams and conversion funnels so your profile finally monetizes with authority.",
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
  transformTextPre: "Join everyone who trusted my work and achieved",
  transformTextPost: "inexplicable results.",
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
    "I don't deliver generic templates or algorithm hacks. I structure your business with a high-conversion mindset, turning your audience into high-value buyers.",
  stats: ["Conversion Increase", "Revenue Generated", "Top Businesses", "Automated Funnels"],
  contactBadge: "STRATEGIC CONSULTING // SLOTS OPEN",
  contactTitlePre: "Ready to turn your profile into a",
  contactTitleHighlight: "sales machine",
  contactText:
    "Limited spots for individual strategic support. Book your confidential diagnostic session so we can map your biggest conversion bottlenecks.",
  contactCta: "Book My Free Diagnosis",
  footerRights: "All rights reserved.",
  reelTitle: "GB Gabriel Marketing Digital Reel 2026",
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
  expertiseTag: "Core Practices",
  expertiseTitlePre: "Specialized in",
  expertiseTitleHighlight: "extreme craft",
  expertiseDesc: "Every project is built from first principles without generic templates, combining artistic mastery with enterprise-grade engineering.",
  practiceLabel: "PRACTICE",
  benchmarkVerified: "Benchmark Verified",
  deliverablesLabel: "Tangible Deliverables",
  techStackLabel: "TECH STACK:",
  requestPrefix: "Request",
  expertise: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ],
  worksTag: "Portfolio",
  worksTitlePre: "Selected",
  worksTitleHighlight: "commissions",
  worksCurated: "Curated Portfolio // 2025–2026",
  worksExplore: "Explore Case Study",
  works: [
    { category: "Spatial Computing", desc: "Autonomous spatial intelligence platform designed for institutional asset management." },
    { category: "Automotive Tech", desc: "Real-time interactive 3D configurator and vehicle telemetry experience for electric hypercars." },
    { category: "Global Liquidity", desc: "Complete visual identity and transaction terminal for next-generation cross-border capital." },
    { category: "Quantum Robotics", desc: "Cinematic web presence and technical documentation suite for quantum photonics." },
  ],
  personTag: "Introduction",
  personTitlePre: "Who is behind",
  personTitleHighlight: "your profile",
  personP1: "I'm Gabriel. More than managing posts, my work is understanding your business, finding the best way to communicate your value and building a digital presence that makes sense for your goals.",
  personP2: "Every piece of content has an intention, every choice is part of a strategy and every step is closely followed by me.",
  personP3: "You won't talk to a team passing tasks around. You'll talk directly to the person who thinks, plans and takes care of your profile.",
  personBadgeDirect: "Direct support from me",
  personBadgeStrategy: "Strategy + close follow-up",
  personSignatureRole: "GB Gabriel • Marketing Digital",
  faqTag: "Answer your questions",
  faqTitlePre: "Frequently asked",
  faqTitleHighlight: "questions",
  faqSubtitle: "Everything you need to know before starting — no fluff, straight to the point.",
  faqItems: [
    {
      q: "Do I need many followers to get started?",
      a: "No. Follower count doesn't drive results — offer clarity and profile positioning do. Whether starting from zero or with a small profile, I build the foundation, narrative and content to attract the right audience, not just any audience. Consistent growth comes from strategy, not volume.",
    },
    {
      q: "How long does it take to see results?",
      a: "It depends on your starting point, niche and consistency. In most cases, first signals — a more professional profile, more qualified messages and more intentional content — appear within 30 to 60 days. Solid growth and recurring sales take 3 to 6 months of consistency. My job is to accelerate that with strategy, not miracle promises.",
    },
    {
      q: "Do I need to record the videos?",
      a: "It depends on the format that works best for your business. I can write scripts and direct the recording — you film on your phone in a few minutes per week, or if you prefer, we produce with script and direction so you only show up. In some cases, we work with stock imagery, behind-the-scenes footage and content created by me. You're never stuck because you don't know how to record.",
    },
    {
      q: "How is payment handled?",
      a: "Payment is monthly, simple and transparent: Pix or credit card, no hidden fees and no forced lock-in. You start with the free diagnosis, choose the ideal plan for your stage and only then we activate the work. Everything is formalized in a contract, with receipt and close follow-up from me — directly with me, no middlemen.",
    },
  ],
  sitesTag: "Website Creation",
  sitesTitle: "Your business deserves to go beyond",
  sitesTitleHighlight: "social media.",
  sitesP1: "I transform your digital presence into a professional experience with modern, strategic and personalized websites. Solutions designed for small businesses, freelancers and service providers who want to strengthen their brand, expand their visibility and win new opportunities.",
  sitesP2: "All with a responsive website, developed to offer a smooth experience on phones, tablets and computers.",
  sitesCta: "I want to take my business online",
  sitesBadge1: "100% Responsive",
  sitesBadge2: "Custom Design",
  sitesBadge3: "Focused on Conversion",
  methodTag: "Our Method",
  methodTitlePre: "From start to results:",
  methodTitleHighlight: "our process",
  methodSubtitle: "A clear, strategic and personalized method — from the first look at your profile to continuous evolution.",
  methodSteps: [
    {
      num: "01",
      title: "Goals",
      desc: "Every project needs direction. We define goals according to each brand's reality, connecting content, positioning and strategy to build a more consistent digital presence.",
      subtitle: "What we aim to achieve",
      items: [
        { title: "More engagement", desc: "Bring the brand closer to the audience and spark connections." },
        { title: "A stronger brand", desc: "Build recognition, identity and trust." },
        { title: "Consistent growth", desc: "Expand your digital presence and create new opportunities." },
      ],
      footer: "Planning • Strategy • Results",
    },
    {
      num: "02",
      title: "Analysis",
      desc: "Before defining any strategy, we need to understand your brand's current scenario. We analyze your profile, audience and content to spot improvement points and opportunities.",
      subtitle: "What we analyze",
      items: [
        { title: "Profile", desc: "We assess how your brand presents itself, its positioning and identity." },
        { title: "Audience", desc: "We understand who follows your brand and what content grabs their attention." },
        { title: "Content", desc: "We look at post performance to identify what sparks interest and what needs adjustment." },
        { title: "Opportunities", desc: "We identify ways to improve your presence and make communication more efficient." },
      ],
      footer: "Strategy • Data • Growth • Results",
    },
    {
      num: "03",
      title: "Posting Calendar",
      desc: "Every post needs a purpose. We organize content in a strategic calendar, considering your brand routine, audience interests and communication goals.",
      subtitle: "How we organize",
      items: [
        { title: "Planning", desc: "We define the best moments and formats to publish, considering each content's purpose." },
        { title: "Organization", desc: "We structure posts in advance with a clear view of what will be produced." },
        { title: "Consistency", desc: "We keep a posting frequency aligned with your brand's reality." },
        { title: "Performance", desc: "We track audience response to understand what works and guide the next steps." },
      ],
      footer: "Organization • Consistency • Strategy • Growth",
    },
    {
      num: "04",
      title: "Clients",
      desc: "Every brand has its own story, needs and goals. Each project is developed with attention to your business identity, combining strategy, creativity and purposeful communication.",
      subtitle: "What guides each project",
      items: [
        { title: "Personalization", desc: "A tailored plan built from your goals, segment and positioning." },
        { title: "Creativity", desc: "Content that values your brand identity and sparks interest." },
        { title: "Partnership", desc: "Close relationship, open dialogue and follow-up at every step." },
        { title: "Evolution", desc: "We strengthen your presence, expand visibility and create opportunities." },
      ],
      footer: "Identity • Creativity • Partnership • Evolution",
    },
    {
      num: "05",
      title: "Before",
      desc: "Every project starts with a good analysis. Before proposing changes, we understand how your brand presents itself, communicates and where the opportunities are.",
      subtitle: "What we observe",
      items: [
        { title: "Profile", desc: "We analyze profile presentation, visual identity and brand positioning." },
        { title: "Audience", desc: "We identify the audience your brand wants to reach and its behavior." },
        { title: "Content", desc: "We assess current posts, spotting strengths and improvement points." },
        { title: "Performance", desc: "We observe results to recognize opportunities and know where to evolve." },
      ],
      footer: "Visual identity • Content • Target audience • Positioning • Strategy • Performance",
    },
  ],
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
