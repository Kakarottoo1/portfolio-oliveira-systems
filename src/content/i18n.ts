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
    metaTitle: "Oliveira Systems | Engine Corban",
    gate: {
      eyebrow: "Oliveira Systems",
      title: "Escolha seu idioma",
      subtitle:
        "Acesse uma apresentação completa do Engine Corban para automações, consultas, crédito e operações comerciais.",
      portuguese: "Português (BR)",
      english: "English",
      note: "Você pode trocar o idioma novamente dentro do site.",
    },
    nav: {
      systems: "Sistemas",
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
        "Engine Corban lidera a operação de consultas, bancos, higienizadores, roteiros e propostas, agora com crédito pessoal Mercantil integrado ao fluxo.",
      primary: "Conhecer o Engine",
      secondary: "Ver planos",
      flowTitle: "Fluxo de operação",
      flow: ["Cliente", "Engine", "Instituições", "Higienização", "Proposta"],
      highlights: [
        "Crédito pessoal Mercantil integrado",
        "23+ instituições no ecossistema",
        "21 bancos CLT disponíveis",
        "Usuário e senha nas instituições",
        "Sem API bancária",
      ],
    },
    systems: {
      eyebrow: "Engine Corban",
      title: "Consulta, lote e proposta em uma operação só.",
      intro:
        "O Engine Corban concentra consultas CLT, FGTS, Crefaz, Mercantil crédito pessoal, roteiros por banco, higienização e processamento em lote.",
      cards: [
        {
          title: "Engine Corban",
          tag: "Consulta, lote e higienização",
          body:
            "Robô de consultas para consignado CLT, FGTS, empréstimo na conta de luz via formulário e crédito pessoal Mercantil, com lote, multi login, roteiros e higienizadores.",
        },
        {
          title: "Mercantil Crédito Pessoal",
          tag: "Nova integração",
          body:
            "Integração adicionada ao Engine para ampliar a análise além do consignado, mantendo a rotina de consulta e proposta dentro do mesmo fluxo operacional.",
        },
      ],
    },
    engine: {
      eyebrow: "Engine Corban",
      title: "Engine Corban consulta CLT, FGTS, Crefaz e crédito pessoal Mercantil com lote, roteiros, higienização e multi login",
      intro:
        "Hoje são 21 instituições CLT, bancos FGTS, Crefaz por formulário para empréstimo na conta de luz e crédito pessoal Mercantil integrado. A operação consulta CPF por CPF ou planilhas em lote, organiza retornos e prepara a proposta com mais precisão.",
      banksTitle: "Instituições por operação",
      banksIntro:
        "Cada instituição fica separada por cor e categoria para a equipe localizar rápido o banco certo, o tipo de consulta e o fluxo de proposta, incluindo o crédito pessoal Mercantil.",
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
        { name: "Mercantil Pessoal", category: "Crédito pessoal", color: "#2F9BFF" },
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
          tag: "Mercantil",
          title: "Crédito pessoal integrado",
          body:
            "Consulta de crédito pessoal Mercantil dentro do Engine, ampliando as oportunidades para clientes fora do fluxo consignado tradicional.",
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
        "Telas reais da operação para mostrar como o Engine trabalha em consulta única, lote, FGTS, Crefaz e Mercantil pessoal, sempre usando os acessos das instituições por usuário e senha.",
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
      videoEyebrow: "Apresentação em vídeo",
      videoTitle: "Engine Corban em funcionamento",
      videoIntro:
        "Uma demonstração rápida do Engine em operação, com consultas, lote, instituições, FGTS, Crefaz, Mercantil pessoal, roteiros e organização da proposta.",
      videoNote:
        "O vídeo fica com controle manual para o visitante assistir no próprio ritmo, sem carregar pesado antes do play.",
      downloadEyebrow: "Downloads oficiais",
      downloadTitle: "Baixe o Engine para Windows e teste por 24h",
      downloadIntro:
        "O Engine principal roda no computador Windows. O app Android é um complemento para acompanhar a operação e fazer consultas conectadas ao Engine PC.",
      downloadTrial: "Teste grátis do Engine PC por 24h",
      downloads: [
        {
          kind: "windows",
          badge: "Sistema principal",
          title: "Engine Corban 4.6 para Windows",
          size: "aprox. 110 MB",
          body:
            "Versão atualizada do sistema principal da operação. Instale no computador para consultar instituições, rodar lote, roteiros, higienizadores e propostas.",
          cta: "Baixar Engine para Windows",
        },
        {
          kind: "android",
          badge: "Complemento",
          title: "App Android que acompanha o Engine PC",
          size: "aprox. 50 MB",
          body:
            "Aplicativo atualizado para acompanhar o Engine PC e fazer consultas pelo celular com base na operação principal. Não substitui o sistema do computador.",
          cta: "Baixar app complementar",
        },
      ],
    },
    plans: {
      eyebrow: "Planos e licenças",
      title: "Planos claros para o Engine, sem fidelidade",
      intro:
        "Engine Corban segue a tabela atual dos planos, com licença mensal e sem fidelidade.",
      payment: "Pagamentos via PIX ou cartão. Desconto acima de 3 contratações nos planos Engine.",
      items: [
        {
          product: "Engine Corban",
          name: "Plano Engine Completo",
          price: "R$ 119,90/mês",
          note: "Acesso a todo o sistema",
          features: ["Consulta unitária", "Consulta em lote", "CLT, FGTS, Crefaz e Mercantil pessoal", "Roteiros", "Higienizadores"],
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
        "Fale com um vendedor para contratar, pedir demonstração ou montar uma proposta entre Engine Completo e Engine SUBS. Também analisamos ajustes para outras áreas, como marketing, advocacia, atendimento e operações comerciais.",
      whatsapp: "Falar pelo WhatsApp",
      compare: "Comparar planos",
      message: "Olá, quero conhecer os planos do Engine Corban.",
    },
    footer: "Automação para crédito, consultas, propostas e operações comerciais.",
  },
  en: {
    metaTitle: "Oliveira Systems | Engine Corban",
    gate: {
      eyebrow: "Oliveira Systems",
      title: "Choose your language",
      subtitle:
        "Open a complete Engine Corban presentation for automation, consultations, credit and business operations.",
      portuguese: "Português (BR)",
      english: "English",
      note: "You can switch the language again inside the site.",
    },
    nav: {
      systems: "Systems",
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
        "Engine Corban leads consultations, institutions, enrichers, scripts and proposals, now with Mercantil personal credit integrated into the flow.",
      primary: "Explore Engine",
      secondary: "View plans",
      flowTitle: "Operation flow",
      flow: ["Customer", "Engine", "Institutions", "Enrichment", "Proposal"],
      highlights: [
        "Mercantil personal credit integrated",
        "23+ institutions in the ecosystem",
        "21 available CLT banks",
        "Institution portal credentials",
        "No banking API required",
      ],
    },
    systems: {
      eyebrow: "Engine Corban",
      title: "Consultation, batch processing and proposal in one operation.",
      intro:
        "Engine Corban concentrates CLT, FGTS, Crefaz, Mercantil personal credit, bank scripts, enrichment and batch processing.",
      cards: [
        {
          title: "Engine Corban",
          tag: "Consultation, batch and enrichment",
          body:
            "Consultation robot for CLT payroll credit, FGTS, energy-bill loans through a form flow and Mercantil personal credit, with batch processing, multi-login, scripts and enrichers.",
        },
        {
          title: "Mercantil Personal Credit",
          tag: "New integration",
          body:
            "Integration added to Engine to expand analysis beyond payroll credit while keeping consultation and proposal inside the same operational flow.",
        },
      ],
    },
    engine: {
      eyebrow: "Engine Corban",
      title: "Engine Corban consults CLT, FGTS, Crefaz and Mercantil personal credit with batch processing, scripts, enrichment and multi-login",
      intro:
        "Today it includes 21 CLT institutions, FGTS banks, Crefaz through a form flow for energy-bill loans and integrated Mercantil personal credit. The operation can consult one customer at a time or process spreadsheets in batch, organize returns and prepare proposals with more precision.",
      banksTitle: "Institutions by operation",
      banksIntro:
        "Each institution is separated by color and category so the team can quickly find the right bank, consultation type and proposal flow, including Mercantil personal credit.",
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
        { name: "Mercantil Personal", category: "Personal credit", color: "#2F9BFF" },
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
          tag: "Mercantil",
          title: "Integrated personal credit",
          body:
            "Mercantil personal credit consultation inside Engine, expanding opportunities for customers outside the traditional payroll-credit flow.",
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
        "Real operation screens showing how Engine handles single consultation, batch processing, FGTS, Crefaz and Mercantil personal credit, using institution portal credentials.",
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
      videoEyebrow: "Video presentation",
      videoTitle: "Engine Corban in action",
      videoIntro:
        "A quick demonstration of Engine in operation, with consultations, batch processing, institutions, FGTS, Crefaz, Mercantil personal credit, scripts and proposal organization.",
      videoNote:
        "The video uses manual controls so visitors can watch at their own pace without loading heavily before playback.",
      downloadEyebrow: "Official downloads",
      downloadTitle: "Download Engine for Windows and start a 24-hour trial",
      downloadIntro:
        "The main Engine system runs on a Windows desktop. The Android app is a companion for monitoring the operation and running consultations connected to Engine PC.",
      downloadTrial: "Free 24-hour Engine PC trial",
      downloads: [
        {
          kind: "windows",
          badge: "Main system",
          title: "Engine Corban 4.6 for Windows",
          size: "approx. 110 MB",
          body:
            "Updated version of the main operating system. Install it on the desktop to consult institutions, process batches, scripts, enrichers and proposals.",
          cta: "Download Engine for Windows",
        },
        {
          kind: "android",
          badge: "Companion",
          title: "Android app that follows Engine PC",
          size: "approx. 50 MB",
          body:
            "Updated app for following Engine PC and running consultations from the phone based on the main operation. It does not replace the desktop system.",
          cta: "Download companion app",
        },
      ],
    },
    plans: {
      eyebrow: "Plans and licenses",
      title: "Clear Engine plans, no loyalty contract",
      intro:
        "Engine Corban follows the current plan table, with monthly license and no loyalty contract.",
      payment: "Payments via PIX or card. Discount above 3 Engine contracts.",
      items: [
        {
          product: "Engine Corban",
          name: "Engine Complete Plan",
          price: "R$ 119.90/month",
          note: "Access to the full system",
          features: ["Single consultation", "Batch consultation", "CLT, FGTS, Crefaz and Mercantil personal credit", "Scripts", "Data enrichers"],
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
        "Talk to a seller to subscribe, request a demo or build a proposal between Engine Complete and Engine SUBS. We also analyze adaptations for other fields, such as marketing, law firms, customer service and commercial operations.",
      whatsapp: "Talk on WhatsApp",
      compare: "Compare plans",
      message: "Hello, I want to know the Engine Corban plans.",
    },
    footer: "Automation for credit, consultations, proposals and business operations.",
  },
} as const;
