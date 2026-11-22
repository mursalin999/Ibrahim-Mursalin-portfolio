import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpenText, Crown, Images, Sparkles, Waves, Palette, FileText, ExternalLink, BookOpen, Cpu, GraduationCap, Layers, Users, Leaf, Mail, Github, Linkedin, } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
import { useTilt } from "@/hooks/use-tilt";
import ibrahimPhoto from "@/assets/ibrahim-photo.jpg";
import posterJordan from "@/assets/portfolio/poster-jordan.png";
const appIcons = {
    baySentinel: "/images/apps/baysentinel-icon.jpg",
    designLens: "/images/apps/designlens-icon.jpg",
};
const doorways = [
    {
        eyebrow: "01 · Graphic Design",
        title: "Brand marks, posters & motion for scroll-stopping identity.",
        blurb: "3–4 years crafting logos, campaign posters, apparel, book covers, YouTube thumbnails and motion for brands across Bangladesh and abroad.",
        to: "/graphic-design",
        cta: "Enter the gallery",
        icon: Palette,
        media: posterJordan,
    },
    {
        eyebrow: "02 · Web & App",
        title: "BaySentinel — mapping ghost gear in the Bay of Bengal.",
        blurb: "An open-access climate platform tracking coastal ecosystem vulnerabilities and ghost fishing gear across Bangladesh's coastline. Aligned with UN SDG 13 & 14.",
        to: "/development",
        cta: "See the case studies",
        icon: Waves,
        logo: appIcons.baySentinel,
        accent: "primary",
    },
    {
        eyebrow: "03 · Research",
        title: "DesignLens — AI critique for junior designers, backed by a thesis.",
        blurb: "A peer-archived study (Zenodo, CERN) on vision-LLM design mentorship. Empirical result: +25.6 pts mean improvement across a 12-participant Bangladesh cohort.",
        to: "/research",
        cta: "Read the paper",
        icon: Sparkles,
        logo: appIcons.designLens,
        accent: "secondary",
    },
];
function DoorwayCard({ d, i }) {
    const tilt = useTilt(4);
    return (<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }}>
      <div {...tilt} className="tilt-card panel relative h-full rounded-2xl overflow-hidden p-7 md:p-8 flex flex-col hover:border-primary/50 transition-colors">
        {/* corner glow */}
        <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[80px] pointer-events-none ${d.accent === "secondary" ? "bg-accent/12" : "bg-primary/12"}`}/>

        <div className="relative flex items-start justify-between mb-8">
          {d.logo ? (<img src={d.logo} alt="" className="w-11 h-11 rounded-lg border border-border/70 object-cover" loading="lazy"/>) : (<div className="w-11 h-11 rounded-lg border border-border/70 bg-background/60 flex items-center justify-center">
              <d.icon size={18} className={d.accent === "secondary" ? "text-accent" : "text-primary"}/>
            </div>)}
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {d.eyebrow}
          </span>
        </div>

        {d.media && (<div className="relative mb-6 rounded-lg overflow-hidden border border-border/70 aspect-[16/10]">
            <img src={d.media} alt={d.title} className="w-full h-full object-cover" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"/>
          </div>)}

        <h3 className="relative text-xl md:text-[22px] font-heading font-bold tracking-tight text-foreground leading-[1.2]">
          {d.title}
        </h3>
        <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
          {d.blurb}
        </p>

        <Link to={d.to} className="relative mt-8 pt-6 border-t border-border/60 flex items-center justify-between text-sm font-medium text-foreground group/link">
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            Destination
          </span>
          <span className={`inline-flex items-center gap-1.5 ${d.accent === "secondary" ? "text-accent" : "text-primary"}`}>
            {d.cta}
            <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"/>
          </span>
        </Link>
      </div>
    </motion.div>);
}
const Index = () => {
    return (<div className="min-h-screen bg-background">
      <Helmet>
        <title>Ibrahim Mursalin — Designer · Researcher · Developer</title>
        <meta name="description" content="Ibrahim Mursalin — independent student researcher, graphic designer, and self-taught developer working on human-centered technology for education, creativity and environmental action."/>
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/"/>
        <meta property="og:title" content="Ibrahim Mursalin — Designer · Researcher · Developer"/>
        <meta property="og:description" content="Graphic design, BaySentinel (SDG 14), and DesignLens — noticing what others miss and surfacing it."/>
        <meta property="og:url" content="https://ibrahimmursalin.pro.bd/"/>
      </Helmet>

      <AppNav />

      {/* ── HERO with Signal Field ─────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <SignalField variant="hero"/>

        <div className="container mx-auto max-w-6xl relative z-10 px-5 md:px-10 py-32 md:py-40">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-8 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-primary/60"/>
            Independent Student Researcher · MMXXVI
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-foreground max-w-5xl">
            Ibrahim Mursalin
            <br />
            <span className="text-primary">Independent Student Researcher.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} className="mt-6 font-mono text-[11px] md:text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Graphic Designer · Human–Computer Interaction · Artificial Intelligence · Technology for Social Impact
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-8 max-w-2xl text-base md:text-lg text-foreground/85 leading-relaxed">
            "I design and build human-centered technology that makes education, creativity, and environmental action more accessible in low-resource communities."
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/journey" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium tracking-tight hover:bg-primary/90 transition-all shadow-[0_0_30px_theme(colors.primary.DEFAULT/0.25)]">
              Explore my journey
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </Link>
            <Link to="/research" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border/70 text-foreground/90 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors">
              Research
            </Link>
            <Link to="/graphic-design" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border/70 text-foreground/90 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors">
              Graphic Design
            </Link>
            <a href="#publications" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border/70 text-foreground/90 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors">
              Publications
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
            ["Focus", "Design · HCI · Systems"],
            ["Location", "Mymensingh, BD"],
            ["Archive", "Zenodo · CERN"],
            ["Status", "Open to collab"],
        ].map(([k, v]) => (<div key={k} className="border-l border-primary/40 pl-4">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1.5">
                  {k}
                </p>
                <p className="text-sm text-foreground font-medium">{v}</p>
              </div>))}
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground animate-pulse">
          ↓ Scroll
        </div>
      </section>

      {/* ── NOW (Derek Sivers-style) ──────────────────── */}
      <section id="now" className="relative py-16 md:py-20 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
              /now
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
              Right now.
            </h2>
            <p className="mt-3 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Updated monthly · Nov 2026
            </p>
          </div>
          <ul className="space-y-3 text-[15px] text-foreground/85 leading-relaxed">
            {[
            "Revising the Bay Sentinel research paper.",
            "Seeking expert feedback on a marine-conservation prototype.",
            "Learning more about HCI evaluation methods.",
            "Preparing scholarship and research applications.",
        ].map((n) => (<li key={n} className="flex gap-3 pl-4 border-l border-primary/30">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>
                <span>{n}</span>
              </li>))}
          </ul>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ────────────────────────── */}
      <section className="relative py-24 md:py-28 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              Research Interests
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              The questions I keep <span className="text-primary">returning to.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
            { icon: Users, k: "Human–Computer Interaction", v: "Because the interface is where people decide whether a technology respects them." },
            { icon: Cpu, k: "Artificial Intelligence", v: "Because AI is quickly becoming the medium through which most people will meet computation." },
            { icon: GraduationCap, k: "AI for Education", v: "Because a good mentor is still the rarest resource in the Global South." },
            { icon: Layers, k: "Design Systems", v: "Because consistent, thoughtful systems make good decisions the default, not the exception." },
            { icon: Leaf, k: "Citizen Science", v: "Because the people closest to a problem often hold the most reliable data about it." },
            { icon: Waves, k: "Environmental Sustainability", v: "Because climate resilience is a design problem, and design can make it legible to communities." },
        ].map((r, i) => (<motion.div key={r.k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="panel rounded-xl p-6 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-lg border border-border/70 bg-background/60 flex items-center justify-center mb-4">
                  <r.icon size={16} className="text-primary"/>
                </div>
                <p className="font-heading text-base font-bold text-foreground tracking-tight leading-snug">
                  {r.k}
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.v}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / BIO ───────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40 overflow-hidden">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="relative w-56 md:w-72 shrink-0" style={{ willChange: "transform" }}>
            <div className="relative rounded-2xl overflow-hidden border border-border/70">
              <img src={ibrahimPhoto} alt="Ibrahim Mursalin — designer, researcher, developer based in Bangladesh" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
            </div>
            <div className="absolute -z-10 -bottom-3 -left-3 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 blur-md"/>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              About Me · My Story
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] max-w-3xl">
              A slow drift from Photoshop to <span className="text-primary">research.</span>
            </h2>

            <div className="mt-8 space-y-5 max-w-2xl text-muted-foreground leading-relaxed text-[15px]">
              <p>
                I started with <strong className="text-foreground">graphic design</strong> — self-taught, late nights, YouTube tutorials, freelance jobs for local Bangladeshi brands. Design taught me to notice things: hierarchy, contrast, how a single decision changes how a stranger feels about a brand.
              </p>
              <p>
                Curiosity pulled me into <strong className="text-foreground">programming</strong>, then into <strong className="text-foreground">AI</strong>. I wanted to understand the tools that were quietly reshaping the field I'd just entered. That question — how do these systems actually help or hinder a learner? — led me into <strong className="text-foreground">Human–Computer Interaction</strong>.
              </p>
              <p>
                HCI made me a <strong className="text-foreground">researcher</strong>. I ran a small empirical study, wrote a thesis, and archived it on Zenodo (CERN). Today I build <strong className="text-foreground">technology for social impact</strong> — DesignLens for design learners, Bay Sentinel for marine conservation — and I'm looking for research groups to grow alongside.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
            "Self-taught",
            "Graphic Design",
            "HCI Research",
            "Vision-LLM Pipelines",
            "React · TypeScript",
            "Formative Assessment",
            "Citizen Science",
            "Bangladesh · Global South",
        ].map((s) => (<span key={s} className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded border border-border/70 text-muted-foreground bg-background/40 hover:border-primary/50 hover:text-foreground transition-colors">
                  {s}
                </span>))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DOORWAYS ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <SignalField variant="ambient"/>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-14 md:mb-20 max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              Areas of Work
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Three disciplines. One through-line: <span className="text-primary">people first.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {doorways.map((d, i) => (<DoorwayCard key={d.to} d={d} i={i}/>))}
          </div>
        </div>
      </section>

    {/* ── ACHIEVEMENTS TEASER ────────────────────────── */}
      <section id="achievements" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-accent/5 blur-[140px]"/>
          <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full bg-primary/8 blur-[120px]"/>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                Recognition &amp; Achievements
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Recognition earned <span className="text-primary">the long way.</span>
              </h2>
            </div>
            <Link to="/achievements" className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors">
              View all achievements
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Atlântia International STEM Olympiad 2026 teaser */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="group relative overflow-hidden rounded-2xl panel p-7 md:p-8 hover:border-primary/50 transition-colors flex flex-col">
              <div className="absolute inset-0 pointer-events-none opacity-[0.45]" style={{
            background: "radial-gradient(120% 80% at 100% 0%, hsl(160 77% 59% / 0.14) 0%, transparent 55%), radial-gradient(100% 90% at 0% 100%, hsl(196 90% 55% / 0.10) 0%, transparent 60%)",
        }}/>
              <div className="relative flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.26em] uppercase text-primary">
                    <Award size={12}/> Gold Medal · 2026
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                    Bangladesh National Round
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl md:text-[26px] font-bold tracking-tight text-foreground leading-[1.15]">
                  Atlântia International STEM Olympiad — <span className="text-primary">Gold Medal, 2026</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  Received a Gold Medal in the Engineers category (Grades 9–10) for Bay Sentinel, an environmental technology project focused on coastal conservation.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {["Engineers · Grades 9–10", "Bay Sentinel"].map((s) => (<span key={s} className="px-3 py-1 rounded-full border border-border/70 bg-background/40 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/80">
                        {s}
                      </span>))}
                  </div>
                  <Link to="/achievements/atlantia-stem-olympiad-2026" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-foreground transition-colors">
                    View Details <ArrowUpRight size={13}/>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Lumiere Scholars Essay Award teaser */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="group relative overflow-hidden rounded-2xl panel p-7 md:p-8 hover:border-accent/50 transition-colors flex flex-col">
              <div className="absolute inset-0 pointer-events-none opacity-[0.45]" style={{
            background: "radial-gradient(120% 80% at 0% 0%, hsl(18 100% 68% / 0.12) 0%, transparent 55%), radial-gradient(100% 90% at 100% 100%, hsl(160 77% 59% / 0.10) 0%, transparent 60%)",
        }}/>
              <div className="relative flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.26em] uppercase text-accent">
                    <BookOpenText size={12}/> 30% Merit Scholarship · 2026
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                    Essay Research
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl md:text-[26px] font-bold tracking-tight text-foreground leading-[1.15]">
                  Lumiere Scholars Essay Award — <span className="text-primary">30% Merit Scholarship, 2026</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  Earned a 30% merit scholarship for “Cancer by 2050: Eliminated, or Manageable?”, examining scientific progress alongside prevention, early detection, and healthcare affordability.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {["Cancer by 2050", "Research Writing"].map((s) => (<span key={s} className="px-3 py-1 rounded-full border border-border/70 bg-background/40 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/80">
                        {s}
                      </span>))}
                  </div>
                  <Link to="/achievements/lumiere-scholars-essay-2026" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-foreground transition-colors">
                    View Details <ArrowUpRight size={13}/>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA strip */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6 md:p-7">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              <Crown size={14} className="inline-block mr-1.5 text-primary align-[-2px]"/>
              Also including <strong className="text-foreground">BOCE 2026</strong>, <strong className="text-foreground">IIC 2026</strong>, <strong className="text-foreground">WSDG 2026</strong>, and a <strong className="text-foreground">FIDE Arena Candidate Master</strong> title across the full archive.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/achievements-gallery" className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-border/70 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors">
                <Images size={14}/>
                Image gallery
              </Link>
              <Link to="/achievements" className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-[0_0_30px_theme(colors.primary.DEFAULT/0.25)]">
                Explore achievements
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── JOURNEY STRIP ─────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                My Journey
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Ten chapters. One long <span className="text-primary">self-taught line.</span>
              </h2>
            </div>
            <Link to="/journey" className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors">
              Read all chapters
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </Link>
          </motion.div>

          <div className="relative grid md:grid-cols-4 gap-4">
            {[
            { y: "2020", t: "Self-taught design" },
            { y: "2023", t: "Discovering AI" },
            { y: "2025", t: "DesignLens study" },
            { y: "2026", t: "Zenodo · Bay Sentinel" },
        ].map((c, i) => (<motion.div key={c.y} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="panel rounded-xl p-6 hover:border-primary/40 transition-colors">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-3">
                  {c.y}
                </p>
                <p className="font-heading text-lg font-bold tracking-tight text-foreground">
                  {c.t}
                </p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* ── FEATURED RESEARCH (DesignLens) ────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="rounded-2xl panel overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none"/>
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="p-8 md:p-12">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-4">
                  Flagship Research · DesignLens
                </p>
                <h3 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
                  AI-mediated design critique for self-taught junior designers in low-resource contexts.
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                  {[
            ["Question", "Can persona-driven vision-LLM critique scaffold junior designers where mentors are unavailable?"],
            ["Method", "Mixed-methods study · 12 participants · pre/post rubric"],
            ["Result", "+25.6 pts mean improvement (100-pt rubric)"],
            ["Archive", "Zenodo · CERN Repository"],
        ].map(([k, v]) => (<div key={k}>
                      <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-1">
                        {k}
                      </p>
                      <p className="text-sm text-foreground/85 leading-relaxed">{v}</p>
                    </div>))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/research" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all">
                    Read the paper <ArrowUpRight size={14}/>
                  </Link>
                  <a href="https://designlens-v1.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border/70 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors">
                    Try DesignLens <ExternalLink size={13}/>
                  </a>
                </div>
              </div>
              <div className="relative min-h-[280px] border-t lg:border-t-0 lg:border-l border-border/60">
                <img src="/images/projects/designlens-critique.jpg" alt="DesignLens critique interface" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL IMPACT (Bay Sentinel) ──────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              Technology for Social Impact
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Bay Sentinel — mapping ghost gear in the <span className="text-primary">Bay of Bengal.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden border border-border/60 aspect-[16/10]">
              <img src="/images/projects/baysentinel-live-map.jpg" alt="Bay Sentinel live ghost-gear map" className="w-full h-full object-cover" loading="lazy"/>
            </motion.div>
            <div className="space-y-6">
              {[
            ["Societal problem", "Abandoned fishing gear (‘ghost gear’) silently kills marine life across the Bay of Bengal — largely undocumented."],
            ["Why it matters", "Aligned with UN SDG 13 & 14. A resilient coastline supports the fisheries millions of Bangladeshis depend on."],
            ["Design process", "Citizen-science reporting flow, tile-based mapping, low-bandwidth-friendly UX for coastal users."],
            ["Current limits · Next", "Field validation of reports; partnerships with local NGOs; ML-assisted classification of submitted imagery."],
        ].map(([k, v]) => (<div key={k} className="border-l border-primary/40 pl-4">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-1.5">
                    {k}
                  </p>
                  <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed">{v}</p>
                </div>))}
              <Link to="/development" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors pt-2">
                Full case study <ArrowUpRight size={14}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS (Scholar-style) ──────────────── */}
      <section id="publications" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-10 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                Publications
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Peer-archived, publicly <span className="text-primary">citable.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
              <BookOpen size={12} className="text-primary"/> Scholar-style listing
            </div>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group border-t border-border/60 py-8 grid md:grid-cols-[1fr_auto] gap-6 items-start hover:bg-secondary/20 transition-colors px-2 -mx-2 rounded">
            <div>
              <a href="https://doi.org/10.5281/zenodo.21738196" target="_blank" rel="noopener noreferrer" className="font-heading text-lg md:text-xl font-semibold text-primary hover:underline leading-snug">
                Bridging the Mentorship Gap: An Exploratory Study of AI-Powered Design Critique for Self-Taught Junior Designers in Low-Resource Contexts
              </a>
              <p className="mt-2 text-sm text-foreground/80">
                <span className="italic">I. Mursalin</span> — Zenodo · CERN Open Repository, 2026
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                A vision-LLM orchestration pipeline delivers structured critique through three pedagogical personas — Mentor, Art Director, UX Reviewer — evaluated with 12 self-taught junior designers in Bangladesh (+25.6 pts mean improvement, 100-pt rubric).
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                <span>DOI · 10.5281/zenodo.21738196</span>
                <span>Status · Preprint</span>
                <span>SDG 4 · Quality Education</span>
              </div>
            </div>
            <div className="flex md:flex-col gap-2 md:items-end shrink-0">
              <a href="https://doi.org/10.5281/zenodo.21738196" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-primary/40 bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
                <FileText size={13}/> PDF
              </a>
              <a href="https://doi.org/10.5281/zenodo.21738196" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border/70 text-muted-foreground text-xs hover:text-foreground hover:border-primary/40 transition-colors">
                <ExternalLink size={12}/> Zenodo
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ── RESEARCH PHILOSOPHY ───────────────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              Selected Impact
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Facts, not awards.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
            "Independent AI research conducted without institutional affiliation.",
            "Thesis peer-archived on Zenodo (CERN Open Repository) with a permanent DOI.",
            "Conducted structured user evaluation with 12 self-taught junior designers in Bangladesh.",
            "Developed multiple production web applications (BaySentinel, DesignLens V1 & V2, StudyBuddy).",
            "Created open-access technology for environmental awareness aligned with UN SDG 13 & 14.",
            "Arena Candidate Master (ACM) title from FIDE — regional team captain, National U-20 competitor.",
        ].map((f, i) => (<motion.div key={f} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="panel rounded-xl p-6">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-3">
                  Fact · {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-sm text-foreground/85 leading-relaxed">{f}</p>
              </motion.div>))}
          </div>
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-6">
            Research Philosophy
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="font-heading text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.25]">
            I believe useful technology begins with <span className="text-primary">people</span>, not models. My work sits at the intersection of human-centred AI, evidence, learning and accessibility — I study how systems actually change what learners can do, in the places where mentorship is scarce and bandwidth is thin. Curiosity keeps me moving; evaluation keeps me honest. If a design cannot be defended by what it does for a real person, it doesn't ship.
          </motion.p>
        </div>
      </section>

      {/* ── CURRENT GOALS ─────────────────────────────── */}
      <section className="relative py-20 md:py-24 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
            Current Goals
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15] max-w-3xl">
            Where I'm putting my attention <span className="text-primary">right now.</span>
          </motion.h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
            { k: "Collaboration", v: "Joining an HCI, AI-in-education or marine-conservation research group focused on the Global South." },
            { k: "Extending DesignLens", v: "Longitudinal follow-up with the original cohort, plus a larger multi-country replication study." },
            { k: "Scaling Bay Sentinel", v: "Partnering with local NGOs and adding ML-assisted classification of citizen-submitted imagery." },
        ].map((g, i) => (<motion.div key={g.k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="panel rounded-xl p-6">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-3">
                  {g.k}
                </p>
                <p className="text-sm text-foreground/85 leading-relaxed">{g.v}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* ── WHAT I'M CURIOUS ABOUT NEXT ───────────────── */}
      <section className="relative py-28 md:py-36 px-5 md:px-10 border-t border-border/40 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SignalField variant="ambient"/>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-6">
            Not a contact form
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.02]">
            What I'm curious about <span className="text-primary">next.</span>
          </motion.h2>

          <ol className="mt-14 space-y-10 md:space-y-14">
            {[
            "How can AI support learning without replacing human creativity?",
            "How can citizen science strengthen marine conservation in Bangladesh?",
            "How can better interfaces make advanced technology more accessible in low-resource communities?",
        ].map((q, i) => (<motion.li key={q} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.12 }} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start border-t border-border/40 pt-8">
                <span className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-primary pt-2">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-heading text-xl md:text-3xl font-semibold tracking-tight text-foreground leading-[1.25]">
                  {q}
                </p>
              </motion.li>))}
          </ol>
        </div>
      </section>

      {/* ── LESSONS LEARNED ────────────────────────────── */}
      <section className="relative py-24 md:py-28 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              Lessons Learned
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              What the work has actually <span className="text-primary">taught me.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
            {
                k: "Research",
                v: "Sitting with twelve participants humbled me. My cleanest hypothesis survived contact with real users only because I let their contradictions stay in the data — not because I was clever.",
            },
            {
                k: "Design",
                v: "Good design is mostly restraint. Every time I removed a decorative element from DesignLens, participants used the interface more confidently. The interface should disappear behind the task.",
            },
            {
                k: "Collaboration",
                v: "Building alone taught me speed. Trying to build with others is teaching me something harder — that a good idea in your head is not yet a shared idea, and the translation costs more than the code.",
            },
        ].map((l, i) => (<motion.div key={l.k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="panel rounded-xl p-7">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-4">
                  On {l.k}
                </p>
                <p className="text-[15px] text-foreground/85 leading-relaxed">{l.v}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* ── BEYOND RESEARCH (chess) ───────────────────── */}
      <section className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="relative rounded-2xl panel p-6 md:p-12 overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none"/>
            <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
              <div className="w-16 h-16 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0">
                <Crown size={24} className="text-primary"/>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                  Beyond Research
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Chess, olympiads & the habits behind the work.
                </h3>
                <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2.5 rounded-lg border border-accent/30 bg-accent/[0.06]">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent">FIDE Title</span>
                  <span className="text-sm text-foreground font-medium">Arena Candidate Master (ACM)</span>
                  <span className="hidden md:inline text-border">·</span>
                  <span className="font-mono text-xs text-muted-foreground">FIDE ID · 532020775</span>
                </div>
                <p className="mt-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                  Regional team captain, divisional champion and National U-20 competitor. Chess is where I first learned to sit with an uncomfortable position, calculate three moves deep before committing, and accept that most good ideas fail quietly against a stronger one. That patience shows up every time I run a study or debug a prototype at 2 a.m.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT / LET'S CONNECT ───────────────────── */}
      <section id="contact" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-border/40 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              Let's Connect
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Open to researchers, professors, students, organisations and NGOs.
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
              I read every message. If our interests overlap — HCI, AI for education, citizen science, design for the Global South — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-10">
            <div className="panel rounded-2xl p-7 md:p-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
            { icon: Mail, label: "Email", value: "ibrahimmursalin766@gmail.com", href: "mailto:ibrahimmursalin766@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "/in/ibrahimmursalin", href: "https://www.linkedin.com/in/ibrahimmursalin" },
            { icon: Github, label: "GitHub", value: "@mursalin999", href: "https://github.com/mursalin999" },
            { icon: FileText, label: "Zenodo", value: "doi.org/10.5281/zenodo.21738196", href: "https://doi.org/10.5281/zenodo.21738196" },
            { icon: BookOpen, label: "Google Scholar", value: "Profile", href: "https://scholar.google.com/" },
            { icon: Crown, label: "FIDE", value: "ID 532020775", href: "https://ratings.fide.com/profile/532020775" },
        ].map((c) => (<a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-start gap-3 p-4 rounded-lg border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-colors">
                    <span className="w-9 h-9 rounded-md border border-border/70 bg-background/60 flex items-center justify-center shrink-0">
                      <c.icon size={15} className="text-primary"/>
                    </span>
                    <span className="min-w-0">
                      <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-1">
                        {c.label}
                      </p>
                      <p className="text-sm text-foreground/90 truncate">{c.value}</p>
                    </span>
                    <ArrowUpRight size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors"/>
                  </a>))}
              </div>
            </div>

            <div className="panel rounded-2xl p-7 md:p-10 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-4">
                  Best fit for
                </p>
                <ul className="space-y-2.5 text-sm text-foreground/85">
                  {[
            "Research supervisors & professors",
            "HCI / AI-in-education research groups",
            "Fellow students & collaborators",
            "Marine-conservation organisations",
            "NGOs building for low-resource contexts",
        ].map((x) => (<li key={x} className="flex gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>
                      {x}
                    </li>))}
                </ul>
              </div>
              <a href="mailto:ibrahimmursalin766@gmail.com" className="mt-8 group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all">
                Write to me
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>);
};
export default Index;
