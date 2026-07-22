import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Flame,
  Globe2,
  Landmark,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { BankItem, CarouselItem, content, Language, languages, PricePlan, ShowcaseItem } from "./content/i18n";

const storageKey = "oliveira-systems-language-v2";
const phone = "5564992233700";
const engineDownloadLinks = {
  windows:
    "https://github.com/Kakarottoo1/portfolio-oliveira-systems/releases/download/engine-v4.4/EngineCorban_Setup_v4.4.exe",
  android: "https://github.com/Kakarottoo1/portfolio-oliveira-systems/releases/download/engine-v4.4/Engine_v5.apk",
} as const;

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

function getStoredLanguage(): Language | null {
  try {
    const value = window.localStorage.getItem(storageKey);
    return value === "pt-BR" || value === "en" ? value : null;
  } catch {
    return null;
  }
}

function shouldReduceHeroMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)").matches;
}

function useReduceHeroMotion() {
  const [reduceMotion, setReduceMotion] = useState(shouldReduceHeroMotion);

  useEffect(() => {
    const queries = [
      window.matchMedia("(max-width: 760px)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];
    const update = () => setReduceMotion(queries.some((query) => query.matches));

    update();
    queries.forEach((query) => query.addEventListener("change", update));
    return () => queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  return reduceMotion;
}

function App() {
  const [language, setLanguage] = useState<Language | null>(() => getStoredLanguage());
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLanguage: Language = language ?? "pt-BR";
  const t = content[activeLanguage];

  const chooseLanguage = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
    window.localStorage.setItem(storageKey, nextLanguage);
  }, []);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(t.contact.message)}`;
  }, [t.contact.message]);

  useEffect(() => {
    document.documentElement.lang = activeLanguage;
    document.title = t.metaTitle;
  }, [activeLanguage, t.metaTitle]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  if (!language) {
    return <LanguageGate onChoose={chooseLanguage} />;
  }

  return (
    <div className="app-shell">
      <Header
        language={language}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setLanguage={chooseLanguage}
      />

      <main>
        <Hero language={language} whatsappUrl={whatsappUrl} />
        <SystemsSection language={language} />
        <EngineSection language={language} />
        <ConsigAiSection language={language} />
        <PricingSection language={language} whatsappUrl={whatsappUrl} />
        <ContactSection language={language} whatsappUrl={whatsappUrl} />
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <div className="footer-brand">
            <img src={asset("oliveira-systems.ico")} alt="" />
            <div>
              <strong>Oliveira Systems</strong>
              <span>{t.footer}</span>
            </div>
          </div>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

function LanguageGate({ onChoose }: { onChoose: (language: Language) => void }) {
  const gate = {
    eyebrow: "Language",
    title: "Choose your language",
    subtitle: "Select a language to open the Oliveira Systems portfolio.",
    portuguese: "Português (BR)",
    english: "English",
    note: "You can switch languages later inside the site.",
  };

  return (
    <main className="language-gate">
      <motion.div
        className="gate-stage"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="gate-brand">
          <img src={asset("oliveira-systems.ico")} alt="" />
          <span>{gate.eyebrow}</span>
        </div>

        <div className="gate-copy">
          <p className="eyebrow">{gate.eyebrow}</p>
          <h1>{gate.title}</h1>
          <p>{gate.subtitle}</p>
        </div>

        <div className="gate-actions" aria-label="Language selection">
          <button type="button" className="button button-primary" onClick={() => onChoose("pt-BR")}>
            <Globe2 size={18} />
            {gate.portuguese}
          </button>
          <button type="button" className="button button-secondary" onClick={() => onChoose("en")}>
            <Globe2 size={18} />
            {gate.english}
          </button>
        </div>

        <p className="gate-note">{gate.note}</p>

        <div className="gate-products" aria-hidden="true">
          <span>Engine Corban</span>
          <ArrowRight size={18} />
          <span>ConsigAI</span>
        </div>
      </motion.div>
    </main>
  );
}

function Header({
  language,
  menuOpen,
  setMenuOpen,
  setLanguage,
}: {
  language: Language;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setLanguage: (language: Language) => void;
}) {
  const t = content[language];
  const navItems = [
    ["#systems", t.nav.systems],
    ["#engine", t.nav.engine],
    ["#consigai", t.nav.consigai],
    ["#plans", t.nav.plans],
    ["#contact", t.nav.contact],
  ] as const;

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
        <img src={asset("oliveira-systems.ico")} alt="" />
        <span>
          <strong>Oliveira Systems</strong>
          <small>Engine Corban + ConsigAI</small>
        </span>
      </a>

      <button
        className="icon-button nav-toggle"
        type="button"
        aria-label={menuOpen ? t.nav.close : t.nav.menu}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav id="main-nav" className={`main-nav ${menuOpen ? "is-open" : ""}`}>
        {navItems.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </nav>
    </header>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      {(Object.keys(languages) as Language[]).map((item) => (
        <button
          key={item}
          type="button"
          className={item === language ? "is-active" : ""}
          onClick={() => setLanguage(item)}
        >
          {item === "pt-BR" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}

function Hero({ language, whatsappUrl }: { language: Language; whatsappUrl: string }) {
  const t = content[language];
  const reduceHeroMotion = useReduceHeroMotion();
  const heroBanks = t.engine.banks.slice(0, 16);
  const statusItems = [
    { label: "CLT", value: language === "pt-BR" ? "Com proposta" : "With proposal", color: "#00F2C3" },
    { label: "FGTS", value: language === "pt-BR" ? "Unitário e lote" : "Single and batch", color: "#EC4899" },
    { label: "Crefaz", value: language === "pt-BR" ? "Conta de luz" : "Energy bill", color: "#D6A229" },
  ];
  const engineProofs = t.hero.highlights;
  const consigAiProofs =
    language === "pt-BR"
      ? [
          { label: "Chat Global", color: "#00F2C3" },
          { label: "App Android", color: "#57C982" },
          { label: "Disparador", color: "#F2C94C" },
          { label: "Aquecedor", color: "#F2994A" },
          { label: "CRM e agenda", color: "#18B9E6" },
          { label: "IA comercial", color: "#B58AE6" },
          { label: "CLT IA planilhas", color: "#EC4899" },
          { label: "CLT IA Engine", color: "#00E6E6" },
        ]
      : [
          { label: "Global Chat", color: "#00F2C3" },
          { label: "Android app", color: "#57C982" },
          { label: "Broadcaster", color: "#F2C94C" },
          { label: "Chip warmer", color: "#F2994A" },
          { label: "CRM and schedule", color: "#18B9E6" },
          { label: "Commercial AI", color: "#B58AE6" },
          { label: "CLT AI sheets", color: "#EC4899" },
          { label: "CLT AI Engine", color: "#00E6E6" },
        ];
  const visibleHeroBanks = [...heroBanks, ...heroBanks];
  const consigAiRows = reduceHeroMotion ? [consigAiProofs] : [consigAiProofs, [...consigAiProofs].reverse()];

  return (
    <section id="top" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        {!reduceHeroMotion && (
          <motion.span
            className="scan-line"
            animate={{ x: ["-15%", "115%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      <div className="section-inner hero-inner">
        <motion.div
          className="hero-copy"
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#systems">
              <Sparkles size={18} />
              {t.hero.primary}
            </a>
            <a className="button button-secondary" href="#plans">
              <ArrowRight size={18} />
              {t.hero.secondary}
            </a>
          </div>
          <a className="hero-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            {t.nav.talk}
          </a>

          <div className="hero-brand-card">
            <motion.span
              className="brand-signal"
              animate={reduceHeroMotion ? undefined : { x: ["-24%", "124%"] }}
              transition={reduceHeroMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <div className="brand-card-top">
              <img src={asset("oliveira-systems.ico")} alt="" />
              <div>
                <span>{language === "pt-BR" ? "Engenharia comercial" : "Commercial engineering"}</span>
                <strong>
                  {language === "pt-BR"
                    ? "Do atendimento à consulta, tudo pensado para operação real."
                    : "From service to consultation, built for real operations."}
                </strong>
              </div>
            </div>

            <div className="hero-insight-grid">
              <div className="insight-item engine-item">
                <span>Engine Corban</span>
                <p>
                  {language === "pt-BR"
                    ? "CLT, FGTS e Crefaz em cliente único ou lote, com bancos, roteiros e higienização."
                    : "CLT, FGTS and Crefaz in single or batch mode, with institutions, scripts and enrichment."}
                </p>
              </div>
              <div className="insight-item consigai-item">
                <span>ConsigAI</span>
                <p>
                  {language === "pt-BR"
                    ? "Chat global, CRM, Android, disparos, aquecimento e IA comercial para atendimento."
                    : "Global chat, CRM, Android, broadcasts, warm-up and commercial AI for service."}
                </p>
              </div>
            </div>

            <div className="brand-metrics">
              <span>{language === "pt-BR" ? "2 sistemas próprios" : "2 proprietary systems"}</span>
              <span>{language === "pt-BR" ? "sem fidelidade" : "no lock-in"}</span>
              <span>{language === "pt-BR" ? "ajustes por operação" : "operation-level tuning"}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-command"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
          aria-label="Engine Corban operation preview"
        >
          <div className="command-topline">
            <span>Engine Corban</span>
            <strong>{language === "pt-BR" ? "Operação ativa" : "Active operation"}</strong>
          </div>

          <div className="command-core">
            <motion.div
              className="core-radar"
              animate={reduceHeroMotion ? undefined : { rotate: 360 }}
              transition={reduceHeroMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.div
              className="core-glow"
              animate={reduceHeroMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.72, 1, 0.72] }}
              transition={reduceHeroMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <div className="core-product">
              <img src={asset("engine-corban.ico")} alt="" />
              <span>{language === "pt-BR" ? "Consulta central" : "Central consultation"}</span>
              <strong>CLT • FGTS • Crefaz</strong>
            </div>
          </div>

          <div className="institution-marquee" aria-label={t.engine.banksTitle}>
            <motion.div
              className={`institution-track ${reduceHeroMotion ? "mobile-marquee" : ""}`}
              animate={reduceHeroMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={reduceHeroMotion ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {visibleHeroBanks.map((bank, index) => (
                <span
                  key={`${bank.name}-${index}`}
                  style={{ "--bank-color": bank.color } as CSSProperties}
                >
                  {bank.name}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="live-console">
            <div className="console-heading">
              <span>{language === "pt-BR" ? "Retornos em tempo real" : "Real-time returns"}</span>
              <strong>{language === "pt-BR" ? "sem API bancária" : "no banking API"}</strong>
            </div>
            <div className="console-status">
              {statusItems.map((item) => (
                <motion.div
                  className="status-row"
                  key={item.label}
                  style={{ "--status-color": item.color } as CSSProperties}
                  animate={reduceHeroMotion ? undefined : { opacity: [0.78, 1, 0.78] }}
                  transition={reduceHeroMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hero-proof-strip engine-proof-strip">
            {engineProofs.map((item) => (
              <span key={item}>
                <Check size={15} />
                {item}
              </span>
            ))}
          </div>

          <div className="hero-system-panels">
            <article className="hero-system-panel consigai-system-panel">
              <div className="system-panel-heading">
                <img src={asset("consigai.ico")} alt="" />
                <div>
                  <span>ConsigAI</span>
                  <strong>
                    {language === "pt-BR"
                      ? "Atendimento, CRM, Android e IA"
                      : "Service, CRM, Android and AI"}
                  </strong>
                </div>
              </div>
              <div className="consigai-proof-grid">
                <div className="consigai-live-stage">
                  <div className="consigai-core-card">
                    <motion.span
                      animate={reduceHeroMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
                      transition={reduceHeroMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <img src={asset("consigai.ico")} alt="" />
                    <span>{language === "pt-BR" ? "Central comercial" : "Commercial hub"}</span>
                    <strong>ConsigAI</strong>
                  </div>
                  {consigAiRows.map((row, rowIndex) => (
                    <div className="consigai-module-marquee" key={rowIndex}>
                      <motion.div
                        className={`consigai-module-track ${reduceHeroMotion ? "mobile-marquee" : ""}`}
                        animate={
                          reduceHeroMotion
                            ? undefined
                            : { x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }
                        }
                        transition={
                          reduceHeroMotion
                            ? undefined
                            : { duration: 18 + rowIndex * 4, repeat: Infinity, ease: "linear" }
                        }
                      >
                        {[...row, ...row].map((item, index) => (
                          <span
                            key={`${rowIndex}-${item.label}-${index}`}
                            style={{ "--module-color": item.color } as CSSProperties}
                          >
                            <Sparkles size={14} />
                            {item.label}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductBadge({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="product-badge">
      <img src={asset(icon)} alt="" />
      <strong>{title}</strong>
    </div>
  );
}

function SystemsSection({ language }: { language: Language }) {
  const t = content[language];
  const icons = [Search, MonitorSmartphone];

  return (
    <AnimatedSection id="systems" className="section section-light">
      <SectionHeading eyebrow={t.systems.eyebrow} title={t.systems.title} body={t.systems.intro} />
      <div className="product-grid">
        {t.systems.cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <motion.article className="product-card" key={card.title} whileHover={{ y: -6 }}>
              <Icon size={26} />
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

function ConsigAiSection({ language }: { language: Language }) {
  const t = content[language];

  return (
    <AnimatedSection id="consigai" className="section section-dark">
      <div className="split-heading">
        <SectionHeading eyebrow={t.consigai.eyebrow} title={t.consigai.title} body={t.consigai.intro} />
        <div className="license-pair">
          <LicenseBlock icon={<Smartphone size={24} />} title={t.consigai.crmTitle} body={t.consigai.crmBody} />
          <LicenseBlock icon={<Bot size={24} />} title={t.consigai.completeTitle} body={t.consigai.completeBody} />
        </div>
      </div>
      <FeatureCarousel items={t.consigai.modules} tone="dark" />
    </AnimatedSection>
  );
}

function EngineSection({ language }: { language: Language }) {
  const t = content[language];

  return (
    <AnimatedSection id="engine" className="section section-light engine-section">
      <SectionHeading eyebrow={t.engine.eyebrow} title={t.engine.title} body={t.engine.intro} />

      <div className="engine-layout">
        <div className="bank-panel">
          <div>
            <span className="panel-kicker">{t.engine.banksTitle}</span>
            <p>{t.engine.banksIntro}</p>
          </div>
          <div className="bank-cloud">
            {t.engine.banks.map((bank) => (
              <BankTile key={`${bank.category}-${bank.name}`} bank={bank} />
            ))}
          </div>
        </div>
        <FeatureCarousel items={t.engine.features} tone="light" />
      </div>

      <EngineShowcase
        title={t.engine.showcaseTitle}
        intro={t.engine.showcaseIntro}
        items={t.engine.showcase}
      />

      <div className="hygiene-block">
        <h3>{t.engine.hygieneTitle}</h3>
        <div className="hygiene-grid">
          {t.engine.hygiene.map((item) => (
            <motion.article className="hygiene-card" key={item.title} whileHover={{ y: -5 }}>
              <Landmark size={24} />
              <span>{item.tag}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <EngineVideo
        eyebrow={t.engine.videoEyebrow}
        title={t.engine.videoTitle}
        intro={t.engine.videoIntro}
        note={t.engine.videoNote}
      />

      <EngineDownloads
        eyebrow={t.engine.downloadEyebrow}
        title={t.engine.downloadTitle}
        intro={t.engine.downloadIntro}
        trial={t.engine.downloadTrial}
        items={t.engine.downloads}
      />
    </AnimatedSection>
  );
}

function EngineVideo({
  eyebrow,
  title,
  intro,
  note,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
}) {
  return (
    <div className="engine-video-block">
      <div className="engine-video-copy">
        <span className="panel-kicker">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{intro}</p>
        <small>{note}</small>
      </div>
      <figure className="engine-video-frame">
        <video controls preload="metadata" playsInline poster={asset("engine-clt-unitario.png")}>
          <source src={asset("engine-apresentacao.mp4")} type="video/mp4" />
        </video>
      </figure>
    </div>
  );
}

function EngineDownloads({
  eyebrow,
  title,
  intro,
  trial,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  trial: string;
  items: readonly {
    kind: keyof typeof engineDownloadLinks;
    badge: string;
    title: string;
    size: string;
    body: string;
    cta: string;
  }[];
}) {
  return (
    <div className="engine-download-block">
      <div className="engine-download-header">
        <div>
          <span className="panel-kicker">{eyebrow}</span>
          <h3>{title}</h3>
          <p>{intro}</p>
        </div>
        <span className="download-trial">
          <ShieldCheck size={18} />
          {trial}
        </span>
      </div>

      <div className="engine-download-grid">
        {items.map((item) => {
          const Icon = item.kind === "windows" ? MonitorSmartphone : Smartphone;

          return (
            <motion.article
              className={`engine-download-card ${item.kind === "windows" ? "download-main" : "download-companion"}`}
              key={item.kind}
              whileHover={{ y: -4 }}
            >
              <div className="download-card-top">
                <span className="download-icon">
                  <Icon size={24} />
                </span>
                <span className="download-meta">
                  <strong>{item.badge}</strong>
                  <small>{item.size}</small>
                </span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <a
                className="button button-primary"
                href={engineDownloadLinks[item.kind]}
                download
                aria-label={`${item.cta} - ${item.size}`}
              >
                <Download size={18} />
                {item.cta}
              </a>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function EngineShowcase({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly ShowcaseItem[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="engine-showcase">
      <div className="showcase-header">
        <div>
          <span className="panel-kicker">{title}</span>
          <p>{intro}</p>
        </div>
        <div className="showcase-controls">
          <button type="button" className="icon-button" onClick={scrollPrev} aria-label="Previous screen">
            <ChevronLeft size={20} />
          </button>
          <button type="button" className="icon-button" onClick={scrollNext} aria-label="Next screen">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="showcase-viewport" ref={emblaRef}>
        <div className="showcase-track">
          {items.map((item) => (
            <article className="showcase-slide" key={item.image}>
              <div className="showcase-copy">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <figure className="showcase-frame">
                <img src={asset(item.image)} alt={item.title} loading="lazy" />
              </figure>
            </article>
          ))}
        </div>
      </div>

      <div className="dots showcase-dots" aria-hidden="true">
        {items.map((item, index) => (
          <span key={item.image} className={index === selected ? "is-active" : ""} />
        ))}
      </div>
    </div>
  );
}

function BankTile({ bank }: { bank: BankItem }) {
  return (
    <motion.article
      className="bank-tile"
      style={{ "--bank-color": bank.color } as CSSProperties}
      whileHover={{ y: -3, scale: 1.015 }}
    >
      <strong>{bank.name}</strong>
      <span>{bank.category}</span>
    </motion.article>
  );
}

function PricingSection({ language, whatsappUrl }: { language: Language; whatsappUrl: string }) {
  const t = content[language];

  return (
    <AnimatedSection id="plans" className="section section-gold">
      <SectionHeading eyebrow={t.plans.eyebrow} title={t.plans.title} body={t.plans.intro} centered />
      <div className="pricing-grid">
        {t.plans.items.map((plan) => (
          <PriceCard key={`${plan.product}-${plan.name}`} language={language} plan={plan} whatsappUrl={whatsappUrl} />
        ))}
      </div>
      <p className="payment-note">
        <ShieldCheck size={18} />
        {t.plans.payment}
      </p>
    </AnimatedSection>
  );
}

function ContactSection({ language, whatsappUrl }: { language: Language; whatsappUrl: string }) {
  const t = content[language];

  return (
    <AnimatedSection id="contact" className="contact-section">
      <div className="contact-panel">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} body={t.contact.body} />
        <div className="contact-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            {t.contact.whatsapp}
          </a>
          <a className="button button-secondary" href="#plans">
            <ArrowRight size={18} />
            {t.contact.compare}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

function LicenseBlock({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <motion.article className="license-block" whileHover={{ y: -4 }}>
      <div className="icon-ring">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}

function FeatureCarousel({ items, tone }: { items: readonly CarouselItem[]; tone: "dark" | "light" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const icons = [MessageCircle, Smartphone, Send, Flame, Bot, Workflow, Users, Search];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={`feature-carousel ${tone}`}>
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-track">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="carousel-slide" key={`${item.title}-${index}`}>
                <Icon size={28} />
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="carousel-controls">
        <button type="button" className="icon-button" onClick={scrollPrev} aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <div className="dots" aria-hidden="true">
          {items.map((item, index) => (
            <span key={item.title} className={index === selected ? "is-active" : ""} />
          ))}
        </div>
        <button type="button" className="icon-button" onClick={scrollNext} aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function PriceCard({ language, plan, whatsappUrl }: { language: Language; plan: PricePlan; whatsappUrl: string }) {
  const t = content[language];

  return (
    <motion.article className={`price-card ${plan.featured ? "featured" : ""}`} whileHover={{ y: -6 }}>
      <span>{plan.product}</span>
      <h3>{plan.name}</h3>
      <strong className="price-value">{plan.price}</strong>
      <p>{plan.note}</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            {feature}
          </li>
        ))}
      </ul>
      <a className={plan.featured ? "button button-primary" : "button button-secondary"} href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        {t.nav.talk}
      </a>
    </motion.article>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  centered,
}: {
  eyebrow: string;
  title: string;
  body: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function AnimatedSection({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="section-inner">{children}</div>
    </motion.section>
  );
}

export default App;
