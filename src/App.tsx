import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
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
import { CarouselItem, content, Language, languages, PricePlan } from "./content/i18n";

const storageKey = "oliveira-systems-language-v2";
const phone = "5564992233700";

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
        <ConsigAiSection language={language} />
        <EngineSection language={language} />
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
          <span>ConsigAI</span>
          <ArrowRight size={18} />
          <span>Engine Corban</span>
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
    ["#consigai", t.nav.consigai],
    ["#engine", t.nav.engine],
    ["#plans", t.nav.plans],
    ["#contact", t.nav.contact],
  ] as const;

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
        <img src={asset("oliveira-systems.ico")} alt="" />
        <span>
          <strong>Oliveira Systems</strong>
          <small>ConsigAI + Engine Corban</small>
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

  return (
    <section id="top" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <motion.span
          className="scan-line"
          animate={{ x: ["-15%", "115%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
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
        </motion.div>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
          aria-label={t.hero.flowTitle}
        >
          <div className="stage-heading">
            <span>{t.hero.flowTitle}</span>
            <strong>ConsigAI + Engine Corban</strong>
          </div>

          <div className="flow-map">
            {t.hero.flow.map((step, index) => (
              <motion.div
                className="flow-step"
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 + index * 0.1, duration: 0.5 }}
              >
                <div className="flow-node">
                  <strong>{step}</strong>
                </div>
                {index < t.hero.flow.length - 1 && <i aria-hidden="true" />}
              </motion.div>
            ))}
          </div>

          <div className="product-orbit">
            <ProductBadge icon="consigai.ico" title="ConsigAI" />
            <motion.div
              className="orbit-line"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.6, repeat: Infinity }}
            />
            <ProductBadge icon="engine-corban.ico" title="Engine Corban" />
          </div>

          <div className="hero-highlights">
            {t.hero.highlights.map((item) => (
              <span key={item}>
                <Check size={15} />
                {item}
              </span>
            ))}
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
  const icons = [MonitorSmartphone, Search];

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
              <span key={bank}>{bank}</span>
            ))}
          </div>
        </div>
        <FeatureCarousel items={t.engine.features} tone="light" />
      </div>

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
    </AnimatedSection>
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
