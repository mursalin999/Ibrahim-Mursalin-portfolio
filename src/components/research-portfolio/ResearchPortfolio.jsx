import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Github, Mail, Globe, FileText, ExternalLink, Sparkles, Waves, Crown, } from "lucide-react";
const navLinks = [
    { label: "Research", href: "#research" },
    { label: "Software", href: "#systems" },
    { label: "Cognition", href: "#cognition" },
    { label: "About", href: "#about" },
];
const socials = [
    { icon: Github, href: "https://github.com/ibrahimmursalin", label: "GitHub" },
    { icon: Mail, href: "mailto:ibrahimmursalin766@gmail.com", label: "Email" },
    { icon: Globe, href: "https://designlens-v1.lovable.app", label: "Deployments" },
];
const smoothScroll = (e, href) => {
    if (!href.startsWith("#"))
        return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el)
        el.scrollIntoView({ behavior: "smooth", block: "start" });
};
// ---------------- Nav ----------------
const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"}`}>
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-10">
        <a href="#top" onClick={(e) => smoothScroll(e, "#top")} className="font-heading text-base md:text-lg font-bold tracking-tight text-foreground">
          Ibrahim Mursalin
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (<li key={l.label}>
              <a href={l.href} onClick={(e) => smoothScroll(e, l.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>))}
        </ul>
        <a href="mailto:ibrahimmursalin766@gmail.com" className="hidden md:inline-flex text-xs font-mono tracking-widest uppercase text-primary hover:text-foreground transition-colors">
          Contact
        </a>
      </nav>
    </header>);
};
// ---------------- Hero ----------------
const Hero = () => (<section id="top" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[140px]"/>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/5 blur-[120px]"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,hsl(var(--background))_75%)]"/>
    </div>
    <div className="container mx-auto px-5 md:px-10 relative z-10 py-32 md:py-40">
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-8 flex items-center gap-3">
        <span className="inline-block w-8 h-px bg-primary/60"/>
        Independent Research Portfolio · MMXXVI
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground max-w-5xl">
        Engineering Digital Equity Through{" "}
        <span className="text-primary">Human‑Computer Interaction.</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
        Independent AI Researcher & Systems Developer based in Mymensingh, Bangladesh. Building open‑access software interventions to democratize mentorship and climate awareness in low‑resource environments.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="mt-12 flex flex-wrap items-center gap-6">
        <a href="#research" onClick={(e) => smoothScroll(e, "#research")} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium tracking-tight hover:bg-primary/90 transition-all">
          View Research & Systems
          <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5"/>
        </a>
        <div className="flex items-center gap-5">
          {socials.map((s) => (<a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-primary transition-colors">
              <s.icon size={18}/>
            </a>))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
        {[
        ["Focus", "HCI · AI Systems"],
        ["Location", "Mymensingh, BD"],
        ["Repository", "Zenodo · CERN"],
        ["Status", "Open to Collab"],
    ].map(([k, v]) => (<div key={k} className="border-l border-border/60 pl-4">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1.5">
              {k}
            </p>
            <p className="text-sm text-foreground font-medium">{v}</p>
          </div>))}
      </motion.div>
    </div>
  </section>);
// ---------------- Section header ----------------
const SectionHeader = ({ number, title, kicker }) => (<div className="mb-14 md:mb-20 max-w-3xl">
    <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
      {number}
    </p>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
      {title}
    </h2>
    {kicker && (<p className="mt-5 text-muted-foreground leading-relaxed">{kicker}</p>)}
  </div>);
// ---------------- Research ----------------
const Research = () => (<section id="research" className="relative py-28 md:py-40 px-5 md:px-10">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader number="01 · Academic Research" title="Peer‑archived research on AI‑mediated design pedagogy." kicker="A formal empirical study exploring how vision‑capable LLMs can substitute for scarce human mentorship in low‑resource design education."/>

      <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="relative rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl p-6 md:p-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none"/>

        <div className="relative z-10">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1.5 rounded-md border border-primary/40 text-primary bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
              Preprint · Archived on Zenodo (CERN Repository)
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1.5 rounded-md border border-border text-muted-foreground">
              DOI · 10.5281/zenodo.21738196
            </span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15] max-w-4xl">
            Bridging the Mentorship Gap: An Exploratory Study of AI‑Powered Design Critique for Self‑Taught Junior Designers in Low‑Resource Contexts.
          </h3>

          <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Abstract Snapshot
              </p>
              <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                A vision‑LLM orchestration pipeline delivers structured design critique through three pedagogical persona models — the <span className="text-primary">Mentor</span>, the <span className="text-primary">Art Director</span>, and the <span className="text-primary">UX Reviewer</span> — each grounded in formative assessment theory to scaffold junior designers toward expert‑level visual reasoning.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Empirical Data
              </p>
              <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-5">
                <p className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-none">
                  +25.6 <span className="text-lg text-primary/70 font-medium">pts</span>
                </p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  Mean improvement on a 100‑point rubric across a 12‑participant empirical study conducted in Bangladesh.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="https://doi.org/10.5281/zenodo.21738196" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium tracking-tight hover:bg-primary/90 transition-all">
              <FileText size={16}/>
              Read Preprint Document (PDF)
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </a>
            <a href="https://doi.org/10.5281/zenodo.21738196" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              View on Zenodo <ExternalLink size={13}/>
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  </section>);
const systems = [
    {
        icon: Sparkles,
        name: "DesignLens",
        version: "V2",
        blurb: "An orchestration pipeline translating advanced computer vision into deterministic, persona‑driven design critique protocols.",
        tags: [
            "Vision‑LLM API",
            "React",
            "Tailwind CSS",
            "Formative Assessment Architecture",
        ],
        href: "https://designlens-v1.lovable.app",
    },
    {
        icon: Waves,
        name: "BaySentinel",
        blurb: "An open‑access digital climate intervention mapping coastal ecosystem vulnerabilities and promoting marine conservation in the Bay of Bengal, aligned with UN SDG 13 & 14.",
        tags: [
            "Ecosystem Monitoring",
            "Interactive Dashboards",
            "Spatial Data Visualization",
        ],
        href: "https://baysentinel.pro.bd",
    },
];
const Systems = () => (<section id="systems" className="relative py-28 md:py-40 px-5 md:px-10 border-t border-border/40">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader number="02 · Core Engineering Systems" title="Software architecture & live deployments." kicker="Production interventions engineered from research primitives — each system open for public evaluation."/>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {systems.map((s, i) => (<motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative flex flex-col rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl p-7 md:p-8 hover:border-primary/50 hover:bg-card/60 transition-all duration-500">
            <div className="flex items-start justify-between mb-8">
              <div className="w-11 h-11 rounded-lg border border-border/70 bg-background/60 flex items-center justify-center">
                <s.icon size={18} className="text-primary"/>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors"/>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {s.name}
              </h3>
              {s.version && (<span className="font-mono text-xs text-primary tracking-widest">
                  {s.version}
                </span>)}
            </div>

            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed flex-1">
              {s.blurb}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {s.tags.map((t) => (<span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded border border-border/70 text-muted-foreground bg-background/40">
                  {t}
                </span>))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                Live Deployment
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Launch Interface
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </span>
            </div>
          </motion.a>))}
      </div>
    </div>
  </section>);
// ---------------- Cognition ----------------
const Cognition = () => (<section id="cognition" className="relative py-28 md:py-40 px-5 md:px-10 border-t border-border/40">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader number="03 · Analytical Frameworks" title="The cognitive substrate beneath the engineering."/>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="relative rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl p-6 md:p-12 overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/8 blur-[100px] pointer-events-none"/>

        <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
          <div className="w-16 h-16 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0">
            <Crown size={24} className="text-primary"/>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Strategic Cognition
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Competitive Chess & Strategic Logic
            </h3>

            <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2.5 rounded-lg border border-accent/30 bg-accent/[0.06]">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
                FIDE Title
              </span>
              <span className="text-sm text-foreground font-medium">
                Arena Candidate Master (ACM)
              </span>
              <span className="hidden md:inline text-border">·</span>
              <span className="font-mono text-xs text-muted-foreground">
                FIDE ID · 532020775
              </span>
            </div>

            <p className="mt-8 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
              Serving as team captain to lead my regional squad to a divisional championship and competing at the National U‑20 level. Over‑the‑board algorithmic calculations directly inform my approach to building structured, error‑resilient software architectures and executing complex system debugging.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>);
// ---------------- Footer / Contact ----------------
const Footer = () => (<footer id="about" className="relative py-28 md:py-40 px-5 md:px-10 border-t border-border/40">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-6">
          04 · Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] max-w-3xl">
          Let's collaborate on <span className="text-primary">open‑source digital equity.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-[1fr_auto] gap-10 items-end border-t border-border/60 pt-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Direct Correspondence
            </p>
            <a href="mailto:ibrahimmursalin766@gmail.com" className="group inline-flex items-center gap-3 text-xl md:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
              ibrahimmursalin766@gmail.com
              <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary"/>
            </a>
          </div>

          <div className="flex items-center gap-5">
            {socials.map((s) => (<a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 rounded-md border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <s.icon size={16}/>
              </a>))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
          <span>© MMXXVI Ibrahim Mursalin</span>
          <span>Mymensingh · Bangladesh</span>
          <a href="/portfolio" className="hover:text-foreground transition-colors">
            Design Portfolio →
          </a>
        </div>
      </motion.div>
    </div>
  </footer>);
// ---------------- Root ----------------
const ResearchPortfolio = () => {
    return (<>
      <Nav />
      <main>
        <Hero />
        <Research />
        <Systems />
        <Cognition />
        <Footer />
      </main>
    </>);
};
export default ResearchPortfolio;
