export type Language = "pt-BR" | "en";

export type CarouselItem = {
  title: string;
  body: string;
  tag: string;
};

export type PricePlan = {
  product: string;
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
};

export const languages: Record<Language, string> = {
  "pt-BR": "Português (BR)",
  en: "English",
};

export const content = {
  "pt-BR": {
    metaTitle: "Oliveira Systems | ConsigAI e Engine Corban",
    gate: {
      eyebrow: "Oliveira Systems",
      title: "Escolha seu idioma",
      subtitle:
        "Acesse uma apresentação completa dos sistemas ConsigAI e Engine Corban para automações, atendimento, crédito e operações comerciais.",
      portuguese: "Português (BR)",
      english: "English",
      note: "Você pode trocar o idioma novamente dentro do site.",
    },
    nav: {
      systems: "Sistemas",
      consigai: "ConsigAI",
      engine: "Engine",
      plans: "Planos",
      contact: "Contato",
      talk: "Falar pelo WhatsApp",
      menu: "Abrir menu",
      close: "Fechar menu",
    },
    hero: {
      eyebrow: "Portfólio empresarial de automações e sistemas",
      title: "Oliveira Systems",
      subtitle:
        "Um ecossistema para atendimento, CRM, app Android, IA comercial, consulta multi-banco, higienização e propostas para crédito, vendas e rotinas comerciais.",
      primary: "Conhecer sistemas",
      secondary: "Ver planos",
      flowTitle: "Fluxo de operação",
      flow: ["Lead", "ConsigAI", "IA e CRM", "Engine", "Proposta"],
      highlights: [
        "Sem fidelidade em nenhum plano",
        "ConsigAI com app Android",
        "Engine com até 5 logins simultâneos",
        "Português e inglês",
      ],
    },
    systems: {
      eyebrow: "Dois produtos, uma operação",
      title: "Atendimento organizado. Consulta precisa.",
      intro:
        "ConsigAI cuida da comunicação comercial. Engine Corban entra na etapa de consulta CLT, organização de bancos, higienizadores, roteiros e resultados.",
      cards: [
        {
          title: "ConsigAI",
          tag: "CRM, WhatsApp, Android e IA",
          body:
            "Central comercial com Chat Global, disparador, aquecedor, app Android, agenda, números conectados e módulos de IA para CLT/FGTS.",
        },
        {
          title: "Engine Corban",
          tag: "Consulta, lote e higienização",
          body:
            "Robô de consultas para consignado CLT com processamento unitário e por planilha, multi login, roteiros por banco e higienizadores.",
        },
      ],
    },
    consigai: {
      eyebrow: "ConsigAI",
      title: "Central comercial com WhatsApp, Android, disparos, aquecimento e IA",
      intro:
        "O Modo CRM concentra a rotina da equipe. O Modo Completo mantém essa base e adiciona a camada de IA para atendimento CLT/FGTS.",
      crmTitle: "Modo CRM",
      crmBody:
        "Ideal para organizar atendimento, números conectados, agenda, clientes, disparos e operação pelo computador ou Android.",
      completeTitle: "Modo Completo",
      completeBody:
        "Adiciona inteligência artificial para conduzir conversas, confirmar dados, contornar objeções e apoiar propostas CLT/FGTS.",
      modules: [
        {
          tag: "Atendimento",
          title: "Chat Global",
          body:
            "Conversas de todos os números conectados em uma central, com filtros, fotos, grupos, chats ocultos/fixados e envio de texto, áudio e mídia.",
        },
        {
          tag: "Mobile",
          title: "App Android",
          body:
            "Aplicativo Android para acompanhar e responder pelo celular, com pareamento por token, conversa em tempo real e acesso fora do computador.",
        },
        {
          tag: "Prospecção",
          title: "Disparador",
          body:
            "Envios por planilha, variações de mensagem, delays, alternância de números, distribuição igualitária ou personalizada e histórico.",
        },
        {
          tag: "Operação",
          title: "Aquecedor de chips",
          body:
            "Conversas entre chips com roteiros, fila de aquecimentos, horários, intervalos, limite diário por número e acompanhamento da sessão.",
        },
        {
          tag: "IA",
          title: "CLT IA por planilhas",
          body:
            "Atendimento automático a partir de planilhas, com confirmação de identidade, proposta, contorno, coleta de dados e sinalização ao consultor.",
        },
        {
          tag: "IA + consulta",
          title: "CLT IA Engine",
          body:
            "Atende clientes fora da planilha, identifica interesse em FGTS ou CLT, orienta a coleta e aciona a consulta quando o cliente está pronto.",
        },
      ],
    },
    engine: {
      eyebrow: "Engine Corban",
      title: "Robô de consultas para consignado CLT com lote, roteiros, higienização e multi login",
      intro:
        "Consulta CPF por CPF ou planilhas em lote, organiza resultados e dá suporte operacional para a equipe vender com mais precisão.",
      banksTitle: "Bancos disponíveis",
      banksIntro:
        "A disponibilidade pode variar por tipo de consulta, mas o ecossistema trabalha hoje com os principais bancos da operação.",
      banks: [
        "Banco Prata",
        "Mercantil",
        "Handbank",
        "PH Tech",
        "Novo Saque",
        "Grana Tech",
        "V8",
        "Zili",
        "Happy",
        "Drex Bank",
        "Presença",
        "Go Fintech",
        "Sua Tech",
        "Soma",
      ],
      features: [
        {
          tag: "Execução",
          title: "Unitário e lote",
          body:
            "Consulta individual com dados do cliente e processamento por planilhas, com histórico rápido e arquivos de saída organizados.",
        },
        {
          tag: "Produtividade",
          title: "Multi login",
          body:
            "Suporte a até 5 logins simultâneos, com escolha entre modo paralelo ou sequencial conforme a rotina da operação.",
        },
        {
          tag: "Operação",
          title: "Roteiros por banco",
          body:
            "Regras editáveis com público atendido, prazos, valores, bancos aceitos, bancos não aceitos, seguro e observações.",
        },
        {
          tag: "Resultado",
          title: "Proposta estruturada",
          body:
            "Retorno com status, valor liberado, parcela, prazo, taxa e propostas adicionais quando disponíveis.",
        },
      ],
      hygieneTitle: "Higienizadores",
      hygiene: [
        {
          tag: "Target C2",
          title: "Cadastro completo",
          body:
            "Puxa nome completo, nascimento, nome da mãe, e-mail, até 5 telefones e endereço completo.",
        },
        {
          tag: "Power Hub",
          title: "Telefones e dados",
          body:
            "Puxa nome completo, data de nascimento, nome da mãe e até 4 telefones para contato.",
        },
        {
          tag: "Promosys",
          title: "Dados e vínculo",
          body:
            "Puxa dados cadastrais, telefones e informações de vínculo empregatício para triagem.",
        },
        {
          tag: "BrasilAPI",
          title: "CEP, CNPJ e bancos",
          body:
            "Consulta CEP, CNPJ e dados bancários disponíveis para enriquecer cadastros e apoiar conferências operacionais.",
        },
        {
          tag: "ViaCEP",
          title: "Endereço completo por CEP",
          body:
            "Retorna logradouro, bairro, cidade, UF e CEP para completar, validar ou padronizar endereços.",
        },
        {
          tag: "Receita WS",
          title: "Dados cadastrais por CNPJ",
          body:
            "Consulta razão social, nome fantasia, situação cadastral, CNAE, endereço e dados principais do CNPJ.",
        },
      ],
    },
    plans: {
      eyebrow: "Planos e licenças",
      title: "Planos claros, sem fidelidade em nenhum sistema",
      intro:
        "ConsigAI separa operação sem IA e operação com IA. Engine Corban segue a tabela atual dos planos.",
      payment: "Pagamentos via PIX ou cartão. Desconto acima de 3 contratações nos planos Engine.",
      items: [
        {
          product: "ConsigAI",
          name: "Modo CRM",
          price: "Consultar vendedor",
          note: "Valor conforme operação",
          features: ["Chat Global", "App Android", "Disparador", "Aquecedor", "CRM, agenda e conexões"],
        },
        {
          product: "ConsigAI",
          name: "Modo Completo",
          price: "Consultar vendedor",
          note: "Valor conforme operação",
          featured: true,
          features: ["Tudo do Modo CRM", "CLT IA por planilhas", "CLT IA Engine", "Roteiros IA", "Modelos e segurança"],
        },
        {
          product: "Engine Corban",
          name: "Plano Engine Completo",
          price: "R$ 119,90/mês",
          note: "Acesso a todo o sistema",
          features: ["Consulta unitária", "Consulta em lote", "Bancos", "Roteiros", "Higienizadores"],
        },
        {
          product: "Engine Corban",
          name: "Plano Engine SUBS",
          price: "R$ 189,90/mês",
          note: "Equipe com subusuários",
          featured: true,
          features: ["Acesso completo para master", "Consulta unitária para subusuários", "Até 3 subusuários", "Controle de equipe"],
        },
      ] satisfies PricePlan[],
    },
    contact: {
      eyebrow: "Contato",
      title: "Escolha a licença certa para sua operação",
      body:
        "Fale com um vendedor para contratar, pedir demonstração ou montar uma proposta entre ConsigAI CRM, ConsigAI Completo, Engine Completo e Engine SUBS. Também analisamos ajustes para outras áreas, como marketing, advocacia, atendimento e operações comerciais.",
      whatsapp: "Falar pelo WhatsApp",
      compare: "Comparar planos",
      message: "Olá, quero conhecer os planos ConsigAI e Engine Corban.",
    },
    footer: "Automação para crédito, atendimento, vendas e operações comerciais.",
  },
  en: {
    metaTitle: "Oliveira Systems | ConsigAI and Engine Corban",
    gate: {
      eyebrow: "Oliveira Systems",
      title: "Choose your language",
      subtitle:
        "Open a complete presentation of ConsigAI and Engine Corban for automation, customer service, credit and business operations.",
      portuguese: "Português (BR)",
      english: "English",
      note: "You can switch the language again inside the site.",
    },
    nav: {
      systems: "Systems",
      consigai: "ConsigAI",
      engine: "Engine",
      plans: "Plans",
      contact: "Contact",
      talk: "WhatsApp",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: "Business portfolio for automations and systems",
      title: "Oliveira Systems",
      subtitle:
        "An ecosystem for customer service, CRM, Android app, commercial AI, multi-bank consultation, data enrichment and proposals for credit, sales and business workflows.",
      primary: "Explore systems",
      secondary: "View plans",
      flowTitle: "Operation flow",
      flow: ["Lead", "ConsigAI", "AI and CRM", "Engine", "Proposal"],
      highlights: [
        "No loyalty contract in any plan",
        "ConsigAI with Android app",
        "Engine with up to 5 simultaneous logins",
        "Portuguese and English",
      ],
    },
    systems: {
      eyebrow: "Two products, one operation",
      title: "Organized service. Precise consultation.",
      intro:
        "ConsigAI manages the commercial communication layer. Engine Corban handles CLT consultation, banks, enrichers, bank scripts and structured results.",
      cards: [
        {
          title: "ConsigAI",
          tag: "CRM, WhatsApp, Android and AI",
          body:
            "A commercial hub with Global Chat, broadcaster, chip warmer, Android app, schedule, connected numbers and AI modules for CLT/FGTS.",
        },
        {
          title: "Engine Corban",
          tag: "Consultation, batch and enrichment",
          body:
            "A CLT payroll loan consultation robot with single and spreadsheet processing, multi-login, bank scripts and data enrichers.",
        },
      ],
    },
    consigai: {
      eyebrow: "ConsigAI",
      title: "Commercial hub with WhatsApp, Android, broadcasts, warm-up and AI",
      intro:
        "CRM Mode centralizes daily team routines. Full Mode keeps that base and adds AI for CLT/FGTS customer service.",
      crmTitle: "CRM Mode",
      crmBody:
        "Best for organizing service, connected numbers, schedule, customers, broadcasts and operation from desktop or Android.",
      completeTitle: "Full Mode",
      completeBody:
        "Adds artificial intelligence to conduct conversations, confirm data, handle objections and support CLT/FGTS proposals.",
      modules: [
        {
          tag: "Service",
          title: "Global Chat",
          body:
            "Conversations from all connected numbers in one hub, with filters, photos, groups, hidden/pinned chats and text, audio and media sending.",
        },
        {
          tag: "Mobile",
          title: "Android App",
          body:
            "Android app to follow and reply from the phone, with token pairing, real-time conversation and access away from the computer.",
        },
        {
          tag: "Prospecting",
          title: "Broadcaster",
          body:
            "Spreadsheet-based sending, message variations, delays, number rotation, equal or custom distribution and history.",
        },
        {
          tag: "Operation",
          title: "Chip warmer",
          body:
            "Conversations between chips with scripts, warm-up queue, schedules, intervals, daily limit per number and session tracking.",
        },
        {
          tag: "AI",
          title: "CLT AI by spreadsheets",
          body:
            "Automated service from spreadsheets, with identity confirmation, proposal, objection handling, data collection and consultant signaling.",
        },
        {
          tag: "AI + consultation",
          title: "CLT AI Engine",
          body:
            "Handles customers outside the spreadsheet, identifies FGTS or CLT interest, guides data collection and triggers consultation when ready.",
        },
      ],
    },
    engine: {
      eyebrow: "Engine Corban",
      title: "CLT consultation robot with batch, bank scripts, data enrichment and multi-login",
      intro:
        "Consult one customer at a time or process spreadsheets in batch, organize results and support the team with more accurate sales data.",
      banksTitle: "Available banks",
      banksIntro:
        "Availability may vary by consultation type, but the ecosystem currently works with the main banks in the operation.",
      banks: [
        "Banco Prata",
        "Mercantil",
        "Handbank",
        "PH Tech",
        "Novo Saque",
        "Grana Tech",
        "V8",
        "Zili",
        "Happy",
        "Drex Bank",
        "Presença",
        "Go Fintech",
        "Sua Tech",
        "Soma",
      ],
      features: [
        {
          tag: "Execution",
          title: "Single and batch",
          body:
            "Single customer consultation and spreadsheet processing, with quick history and organized output files.",
        },
        {
          tag: "Productivity",
          title: "Multi-login",
          body:
            "Support for up to 5 simultaneous logins, with parallel or sequential mode according to the operation routine.",
        },
        {
          tag: "Operation",
          title: "Bank scripts",
          body:
            "Editable rules with eligible public, terms, values, accepted banks, blocked banks, insurance and notes.",
        },
        {
          tag: "Result",
          title: "Structured proposal",
          body:
            "Returns status, approved value, installment, term, rate and additional proposals when available.",
        },
      ],
      hygieneTitle: "Data enrichers",
      hygiene: [
        {
          tag: "Target C2",
          title: "Full registration",
          body:
            "Fetches full name, birth date, mother's name, email, up to 5 phone numbers and full address.",
        },
        {
          tag: "Power Hub",
          title: "Phones and data",
          body:
            "Fetches full name, birth date, mother's name and up to 4 phone numbers for contact.",
        },
        {
          tag: "Promosys",
          title: "Data and employment",
          body:
            "Fetches registration data, phones and employment relationship information for screening.",
        },
        {
          tag: "BrasilAPI",
          title: "CEP, CNPJ and banks",
          body:
            "Checks CEP, CNPJ and available banking data to enrich records and support operational validation.",
        },
        {
          tag: "ViaCEP",
          title: "Full address by CEP",
          body:
            "Returns street, district, city, state and CEP to complete, validate or standardize addresses.",
        },
        {
          tag: "Receita WS",
          title: "Company data by CNPJ",
          body:
            "Checks legal name, trade name, registration status, CNAE, address and main CNPJ details.",
        },
      ],
    },
    plans: {
      eyebrow: "Plans and licenses",
      title: "Clear plans, no loyalty contract in any system",
      intro:
        "ConsigAI separates the operation without AI from the operation with AI. Engine Corban follows the current plan table.",
      payment: "Payments via PIX or card. Discount above 3 Engine contracts.",
      items: [
        {
          product: "ConsigAI",
          name: "CRM Mode",
          price: "Ask the seller",
          note: "Adjusted to the operation",
          features: ["Global Chat", "Android app", "Broadcaster", "Chip warmer", "CRM, schedule and connections"],
        },
        {
          product: "ConsigAI",
          name: "Full Mode",
          price: "Ask the seller",
          note: "Price according to operation",
          featured: true,
          features: ["Everything in CRM Mode", "CLT AI by spreadsheets", "CLT AI Engine", "AI scripts", "Models and safety"],
        },
        {
          product: "Engine Corban",
          name: "Engine Complete Plan",
          price: "R$ 119.90/month",
          note: "Access to the full system",
          features: ["Single consultation", "Batch consultation", "Banks", "Scripts", "Data enrichers"],
        },
        {
          product: "Engine Corban",
          name: "Engine SUBS Plan",
          price: "R$ 189.90/month",
          note: "Team with sub-users",
          featured: true,
          features: ["Full master access", "Single consultation for sub-users", "Up to 3 sub-users", "Team control"],
        },
      ] satisfies PricePlan[],
    },
    contact: {
      eyebrow: "Contact",
      title: "Choose the right license for your operation",
      body:
        "Talk to a seller to subscribe, request a demo or build a proposal between ConsigAI CRM, ConsigAI Full, Engine Complete and Engine SUBS. We also analyze adaptations for other fields, such as marketing, law firms, customer service and commercial operations.",
      whatsapp: "Talk on WhatsApp",
      compare: "Compare plans",
      message: "Hello, I want to know the ConsigAI and Engine Corban plans.",
    },
    footer: "Automation for credit, customer service, sales and business operations.",
  },
} as const;
