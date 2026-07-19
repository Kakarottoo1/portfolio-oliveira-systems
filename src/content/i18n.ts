export type Language = "pt-BR" | "en";

export type CarouselItem = {
  title: string;
  body: string;
  tag: string;
};

export type BankItem = {
  name: string;
  category: string;
  color: string;
};

export type ShowcaseItem = {
  tag: string;
  title: string;
  body: string;
  image: string;
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
        "Engine Corban lidera a operação de consultas, bancos, higienizadores, roteiros e propostas. ConsigAI entra como camada comercial para atendimento, CRM, Android, disparos e IA.",
      primary: "Conhecer o Engine",
      secondary: "Ver planos",
      flowTitle: "Fluxo de operação",
      flow: ["Cliente", "Engine", "Instituições", "Higienização", "Proposta"],
      highlights: [
        "23+ instituições no ecossistema",
        "21 bancos CLT disponíveis",
        "Usuário e senha nas instituições",
        "Sem API bancária",
        "Até 5 logins simultâneos",
      ],
    },
    systems: {
      eyebrow: "Dois produtos, uma operação",
      title: "Engine na frente. ConsigAI no atendimento.",
      intro:
        "O Engine Corban é o centro de consulta e proposta. O ConsigAI fica abaixo como base de atendimento, CRM, Android, disparos, aquecimento e IA comercial.",
      cards: [
        {
          title: "Engine Corban",
          tag: "Consulta, lote e higienização",
          body:
            "Robô de consultas para consignado CLT, FGTS e empréstimo na conta de luz via formulário, com lote, multi login, roteiros por banco e higienizadores.",
        },
        {
          title: "ConsigAI",
          tag: "CRM, WhatsApp, Android e IA",
          body:
            "Central comercial com Chat Global, disparador, aquecedor, app Android, agenda, números conectados e módulos de IA para atendimento e proposta.",
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
      title: "Engine Corban consulta mais de 23 instituições com lote, roteiros, higienização e multi login",
      intro:
        "Hoje são 21 instituições CLT, bancos FGTS e Crefaz por formulário para empréstimo na conta de luz. A operação consulta CPF por CPF ou planilhas em lote, organiza retornos e prepara a proposta com mais precisão.",
      banksTitle: "Instituições por operação",
      banksIntro:
        "Cada instituição fica separada por cor e categoria para a equipe localizar rápido o banco certo, o tipo de consulta e o fluxo de proposta.",
      banks: [
        { name: "Banco Prata", category: "CLT", color: "#00F2C3" },
        { name: "Mercantil", category: "CLT", color: "#2F9BFF" },
        { name: "Handbank", category: "CLT", color: "#8B7CF6" },
        { name: "Novo Saque", category: "CLT", color: "#F5A000" },
        { name: "PH Tech", category: "CLT", color: "#FF4545" },
        { name: "Di+", category: "CLT", color: "#F2C94C" },
        { name: "Grana Tech", category: "CLT", color: "#70BF36" },
        { name: "V8", category: "CLT", color: "#A020F0" },
        { name: "Banco Presença", category: "CLT", color: "#F5A000" },
        { name: "Happy", category: "CLT", color: "#38BDF8" },
        { name: "Drex Bank", category: "CLT", color: "#00E66B" },
        { name: "Go Fintech", category: "CLT", color: "#00E6E6" },
        { name: "Sua Tech", category: "CLT", color: "#D600FF" },
        { name: "Grandino", category: "CLT", color: "#0057D9" },
        { name: "Finitech do Corban", category: "CLT", color: "#18B9E6" },
        { name: "Soma", category: "CLT", color: "#FF7A00" },
        { name: "Evol", category: "CLT", color: "#B58AE6" },
        { name: "Fox", category: "CLT", color: "#F2994A" },
        { name: "VCTEX", category: "CLT", color: "#EC4899" },
        { name: "HaveCred", category: "CLT", color: "#57C982" },
        { name: "Zili", category: "CLT", color: "#8E98A5" },
        { name: "Lotus FGTS", category: "FGTS", color: "#263B8F" },
        { name: "Prata FGTS", category: "FGTS", color: "#00F2C3" },
        { name: "Novo Saque FGTS", category: "FGTS", color: "#EF9F27" },
        { name: "VCTEX FGTS", category: "FGTS", color: "#EC4899" },
        { name: "Crefaz", category: "Energia", color: "#D6A229" },
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
          tag: "Acesso",
          title: "Usuário e senha nas instituições",
          body:
            "As consultas usam os acessos que a operação já possui nos portais das instituições. Não é necessário contratar API dos bancos.",
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
        {
          tag: "Energia",
          title: "Crefaz por formulário",
          body:
            "Fluxo dedicado para empréstimo na conta de luz, com preenchimento por formulário e organização das informações para seguir a proposta.",
        },
      ],
      showcaseTitle: "Engine na prática",
      showcaseIntro:
        "Telas reais da operação para mostrar como o Engine trabalha em consulta única, lote, FGTS e Crefaz, sempre usando os acessos das instituições por usuário e senha.",
      showcase: [
        {
          tag: "CLT unitário",
          title: "Resultado por cliente único",
          body:
            "Mostra o retorno por instituição, status da proposta, valor liberado, parcela, prazo e juros em uma visão rápida para o consultor.",
          image: "engine-clt-unitario.png",
        },
        {
          tag: "CLT em lote",
          title: "Processamento por planilha",
          body:
            "Seleciona bancos, escolhe modo paralelo ou sequencial e acompanha estatísticas em tempo real por instituição consultada.",
          image: "engine-clt-lote.png",
        },
        {
          tag: "FGTS unitário",
          title: "Consulta FGTS por CPF",
          body:
            "Consulta Novo Saque, Lotus, Prata e VCTEX FGTS pela mesma tela, com execução unitária e modo oculto quando necessário.",
          image: "engine-fgts-unitario.png",
        },
        {
          tag: "FGTS em massa",
          title: "Lote FGTS com estatísticas",
          body:
            "Processa planilhas FGTS, separa consultados, processados, com proposta, sem proposta e erros por banco.",
          image: "engine-fgts-lote.png",
        },
        {
          tag: "Crefaz unitário",
          title: "Empréstimo na conta de luz",
          body:
            "Fluxo por formulário com dados do cliente, vínculo, CEP, endereço e resultado unitário para proposta Crefaz.",
          image: "engine-crefaz-unitario.png",
        },
        {
          tag: "Crefaz em lote",
          title: "Planilha Crefaz",
          body:
            "Consulta em lote com nome, CPF, telefone e CEP, status da planilha, navegador oculto e log operacional.",
          image: "engine-crefaz-lote.png",
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
          product: "Engine Corban",
          name: "Plano Engine Completo",
          price: "R$ 119,90/mês",
          note: "Acesso a todo o sistema",
          features: ["Consulta unitária", "Consulta em lote", "23+ instituições", "Roteiros", "Higienizadores"],
        },
        {
          product: "Engine Corban",
          name: "Plano Engine SUBS",
          price: "R$ 189,90/mês",
          note: "Equipe com subusuários",
          featured: true,
          features: ["Acesso completo para master", "Consulta unitária para subusuários", "Até 3 subusuários", "Controle de equipe"],
        },
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
        "Engine Corban leads consultations, banks, enrichers, scripts and proposals. ConsigAI works as the commercial layer for service, CRM, Android, broadcasts and AI.",
      primary: "Explore Engine",
      secondary: "View plans",
      flowTitle: "Operation flow",
      flow: ["Customer", "Engine", "Institutions", "Enrichment", "Proposal"],
      highlights: [
        "23+ institutions in the ecosystem",
        "21 available CLT banks",
        "Institution portal credentials",
        "No banking API required",
        "Up to 5 simultaneous logins",
      ],
    },
    systems: {
      eyebrow: "Two products, one operation",
      title: "Engine first. ConsigAI for service.",
      intro:
        "Engine Corban is the consultation and proposal center. ConsigAI sits below as the service, CRM, Android, broadcast, warm-up and commercial AI layer.",
      cards: [
        {
          title: "Engine Corban",
          tag: "Consultation, batch and enrichment",
          body:
            "A consultation robot for CLT payroll loans, FGTS and energy-bill loan forms, with batch processing, multi-login, bank scripts and enrichers.",
        },
        {
          title: "ConsigAI",
          tag: "CRM, WhatsApp, Android and AI",
          body:
            "A commercial hub with Global Chat, broadcaster, chip warmer, Android app, schedule, connected numbers and AI modules for service and proposals.",
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
      title: "Engine Corban consults 23+ institutions with batch processing, scripts, enrichment and multi-login",
      intro:
        "Today it includes 21 CLT institutions, FGTS banks and Crefaz through a form flow for energy-bill loans. The operation can consult one customer at a time or process spreadsheets in batch, organize returns and prepare proposals with more precision.",
      banksTitle: "Institutions by operation",
      banksIntro:
        "Each institution is separated by color and category so the team can quickly find the right bank, consultation type and proposal flow.",
      banks: [
        { name: "Banco Prata", category: "CLT", color: "#00F2C3" },
        { name: "Mercantil", category: "CLT", color: "#2F9BFF" },
        { name: "Handbank", category: "CLT", color: "#8B7CF6" },
        { name: "Novo Saque", category: "CLT", color: "#F5A000" },
        { name: "PH Tech", category: "CLT", color: "#FF4545" },
        { name: "Di+", category: "CLT", color: "#F2C94C" },
        { name: "Grana Tech", category: "CLT", color: "#70BF36" },
        { name: "V8", category: "CLT", color: "#A020F0" },
        { name: "Banco Presença", category: "CLT", color: "#F5A000" },
        { name: "Happy", category: "CLT", color: "#38BDF8" },
        { name: "Drex Bank", category: "CLT", color: "#00E66B" },
        { name: "Go Fintech", category: "CLT", color: "#00E6E6" },
        { name: "Sua Tech", category: "CLT", color: "#D600FF" },
        { name: "Grandino", category: "CLT", color: "#0057D9" },
        { name: "Finitech do Corban", category: "CLT", color: "#18B9E6" },
        { name: "Soma", category: "CLT", color: "#FF7A00" },
        { name: "Evol", category: "CLT", color: "#B58AE6" },
        { name: "Fox", category: "CLT", color: "#F2994A" },
        { name: "VCTEX", category: "CLT", color: "#EC4899" },
        { name: "HaveCred", category: "CLT", color: "#57C982" },
        { name: "Zili", category: "CLT", color: "#8E98A5" },
        { name: "Lotus FGTS", category: "FGTS", color: "#263B8F" },
        { name: "Prata FGTS", category: "FGTS", color: "#00F2C3" },
        { name: "Novo Saque FGTS", category: "FGTS", color: "#EF9F27" },
        { name: "VCTEX FGTS", category: "FGTS", color: "#EC4899" },
        { name: "Crefaz", category: "Energy", color: "#D6A229" },
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
          tag: "Access",
          title: "Username and password at each institution",
          body:
            "Consultations use the credentials the operation already has in each institution portal. No banking API contract is required.",
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
        {
          tag: "Energy",
          title: "Crefaz form flow",
          body:
            "Dedicated flow for energy-bill loans, with form submission and organized information to continue the proposal.",
        },
      ],
      showcaseTitle: "Engine in practice",
      showcaseIntro:
        "Real operation screens showing how Engine handles single consultation, batch processing, FGTS and Crefaz, using institution portal credentials.",
      showcase: [
        {
          tag: "Single CLT",
          title: "Single customer result",
          body:
            "Shows each institution return, proposal status, approved value, installment, term and interest rate in a quick consultant view.",
          image: "engine-clt-unitario.png",
        },
        {
          tag: "Batch CLT",
          title: "Spreadsheet processing",
          body:
            "Select banks, choose parallel or sequential mode and follow real-time statistics by consulted institution.",
          image: "engine-clt-lote.png",
        },
        {
          tag: "Single FGTS",
          title: "FGTS consultation by CPF",
          body:
            "Consult Novo Saque, Lotus, Prata and VCTEX FGTS from the same screen, with single execution and hidden mode when needed.",
          image: "engine-fgts-unitario.png",
        },
        {
          tag: "Batch FGTS",
          title: "FGTS batch with statistics",
          body:
            "Processes FGTS spreadsheets and separates pending, processed, with proposal, without proposal and errors by bank.",
          image: "engine-fgts-lote.png",
        },
        {
          tag: "Single Crefaz",
          title: "Energy-bill loan",
          body:
            "Form flow with customer data, employment link, CEP, address and single result for the Crefaz proposal.",
          image: "engine-crefaz-unitario.png",
        },
        {
          tag: "Batch Crefaz",
          title: "Crefaz spreadsheet",
          body:
            "Batch consultation with name, CPF, phone and CEP, spreadsheet status, hidden browser and operational log.",
          image: "engine-crefaz-lote.png",
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
          product: "Engine Corban",
          name: "Engine Complete Plan",
          price: "R$ 119.90/month",
          note: "Access to the full system",
          features: ["Single consultation", "Batch consultation", "23+ institutions", "Scripts", "Data enrichers"],
        },
        {
          product: "Engine Corban",
          name: "Engine SUBS Plan",
          price: "R$ 189.90/month",
          note: "Team with sub-users",
          featured: true,
          features: ["Full master access", "Single consultation for sub-users", "Up to 3 sub-users", "Team control"],
        },
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
