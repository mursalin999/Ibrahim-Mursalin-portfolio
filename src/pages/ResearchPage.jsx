import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
const papers = [
    {
        year: "2026",
        status: "Preprint",
        sdg: "SDG 4 · Quality Education",
        doi: "10.5281/zenodo.21738196",
        title: "Bridging the Mentorship Gap: An Exploratory Study of AI-Powered Design Critique for Self-Taught Junior Designers in Low-Resource Contexts.",
        authors: "Ibrahim Mursalin",
        archive: "Zenodo · CERN Repository",
        abstract: "A vision-LLM orchestration pipeline delivers structured design critique through three pedagogical persona models — the Mentor, the Art Director and the UX Reviewer — each grounded in formative assessment theory to scaffold junior designers toward expert-level visual reasoning. Empirical evaluation conducted in Bangladesh with 12 self-taught junior designers.",
        findings: [
            "Persona-driven critique produced statistically meaningful gains vs. generic AI feedback",
            "Formative assessment scaffolding outperformed summative-only critique across all rubric dimensions",
            "Participants reported increased confidence in accepting/rejecting AI feedback autonomously",
            "Pipeline is portable to other low-resource design education contexts in South Asia",
        ],
        metric: { value: "+25.6 pts", label: "Mean improvement · 100-pt rubric · n=12" },
        href: "https://doi.org/10.5281/zenodo.21738196",
    },
];
function PaperSpecimen({ p, i }) {
    return (<motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative rounded-2xl panel overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none"/>

      {/* metadata header — data specimen row */}
      <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 px-6 md:px-10 py-4 border-b border-border/60 bg-background/30 font-mono text-[10px] tracking-[0.25em] uppercase">
        <span className="inline-flex items-center gap-1.5 text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
          {p.status}
        </span>
        <span className="text-muted-foreground">Year · {p.year}</span>
        {p.sdg && <span className="text-muted-foreground">{p.sdg}</span>}
        <span className="text-muted-foreground">DOI · {p.doi}</span>
        <span className="text-muted-foreground ml-auto">{p.archive}</span>
      </div>

      <div className="relative z-10 p-6 md:p-10">
        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.15] max-w-4xl">
          {p.title}
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-mono uppercase tracking-widest text-[10px] mr-2">Author</span>
          {p.authors}
        </p>

        <div className="mt-8 grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Abstract
            </p>
            <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed">{p.abstract}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Empirical result
            </p>
            <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-5">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary tracking-tight leading-none">
                {p.metric.value}
              </p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.metric.label}</p>
            </div>
          </div>
        </div>

        {/* peel-back key findings — reveals on hover */}
        <div className="mt-8 relative">
          <div className="flex items-center justify-between border-t border-border/60 pt-4">
            <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary">
              Key findings ▽ (hover to peel back)
            </p>
          </div>
          <div className="grid transition-all duration-500 grid-rows-[0fr] group-hover:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <ul className="mt-4 space-y-2">
                {p.findings.map((f) => (<li key={f} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent"/>
                    {f}
                  </li>))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all">
            <FileText size={16}/>
            Download preprint (PDF)
            <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"/>
          </a>
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            View on Zenodo <ExternalLink size={13}/>
          </a>
        </div>
      </div>
    </motion.article>);
}
const ResearchPage = () => {
    return (<div className="min-h-screen bg-background">
      <Helmet>
        <title>Research — Ibrahim Mursalin</title>
        <meta name="description" content="Peer-archived independent research on AI-mediated design pedagogy for low-resource contexts. Preprint on Zenodo (CERN). +25.6 pts mean improvement (n=12)."/>
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/research"/>
        <meta property="og:title" content="Research — Ibrahim Mursalin"/>
        <meta property="og:description" content="Zenodo-archived thesis on vision-LLM design critique for junior designers in low-resource contexts."/>
        <meta property="og:url" content="https://ibrahimmursalin.pro.bd/research"/>
      </Helmet>

      <AppNav />

      <section className="relative pt-32 md:pt-44 pb-16 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <SignalField variant="ambient"/>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-6">
            Destination 04 · Research & Preprints
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-4xl">
            Empirical work, publicly <span className="text-primary">archived.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Each record below is a data specimen — metadata, abstract, key findings and a persistent DOI. Preprints live in Zenodo (CERN's open research repository) and can be cited immediately.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-32 px-5 md:px-10">
        <div className="container mx-auto max-w-6xl space-y-10">
          {papers.map((p, i) => (<PaperSpecimen key={p.doi} p={p} i={i}/>))}
        </div>
      </section>

      {/* ── ACADEMIC BREAKDOWN ─────────────────────── */}
      <section className="relative pb-32 px-5 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-10">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              DesignLens · Full Breakdown
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              The paper, <span className="text-primary">section by section.</span>
            </h2>
          </motion.div>

          <div className="grid gap-4">
            {[
            {
                k: "Research Question",
                v: "Can persona-driven, vision-LLM design critique meaningfully scaffold self-taught junior designers in low-resource contexts where expert human mentorship is unavailable?",
            },
            {
                k: "Motivation",
                v: "In Bangladesh and much of the Global South, junior designers learn alone. Bootcamps are unaffordable, senior mentors are scarce, and generic AI feedback is too vague to trust or act on. The mentorship gap is the real bottleneck — not access to tools.",
            },
            {
                k: "Methodology",
                v: "A vision-LLM orchestration pipeline delivering critique through three persona models — the Mentor (encouragement + priorities), the Art Director (visual craft), and the UX Reviewer (usability & hierarchy). Twelve self-taught junior designers each submitted the same brief twice — before and after using DesignLens — graded blind by senior designers on a 100-point rubric.",
            },
            {
                k: "Evaluation",
                v: "Mixed-methods: quantitative pre/post rubric scores, plus qualitative think-aloud sessions and semi-structured interviews. Statistical significance tested against a generic-AI-feedback control.",
            },
            {
                k: "Findings",
                v: "+25.6 pts mean improvement on the 100-pt rubric. Persona-driven critique outperformed generic AI feedback on every rubric dimension. Participants reported markedly higher confidence in accepting or rejecting AI suggestions.",
            },
            {
                k: "Impact",
                v: "The pipeline is portable to any low-resource South Asian design education context. Beyond the paper: an open web tool (designlens-v1.lovable.app) that junior designers can use today.",
            },
        ].map((s, i) => (<motion.div key={s.k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.05 }} className="panel rounded-xl p-6 md:p-8 grid md:grid-cols-[220px_1fr] gap-4 md:gap-8">
                <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary">
                  {s.k}
                </p>
                <p className="text-[15px] text-foreground/85 leading-relaxed">{s.v}</p>
              </motion.div>))}
          </div>

          {/* Downloads */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-10 rounded-2xl panel p-6 md:p-10">
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary mb-4">
              Research Contributions
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
              This work contributes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {[
            "A working model of AI-assisted, persona-driven design feedback grounded in formative-assessment theory.",
            "A reproducible human-evaluation protocol for design-critique interventions in low-resource contexts.",
            "An argument for educational accessibility as a first-class HCI design constraint, not an afterthought.",
            "A documented prompt-orchestration pipeline coordinating three critique personas over vision-LLM output.",
            "An interactive critique interface, publicly deployed, that other researchers and educators can extend.",
        ].map((c) => (<li key={c} className="flex gap-3 pl-4 border-l border-primary/30 text-sm text-foreground/85 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>
                  {c}
                </li>))}
            </ul>

            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary mb-4">
              Downloads & Persistent Links
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
            { label: "Thesis (PDF)", href: "https://doi.org/10.5281/zenodo.21738196" },
            { label: "Zenodo Record", href: "https://doi.org/10.5281/zenodo.21738196" },
            { label: "DesignLens App", href: "https://designlens-v1.lovable.app" },
            { label: "Contact author", href: "mailto:ibrahimmursalin766@gmail.com" },
        ].map((d) => (<a key={d.label} href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center justify-between px-4 py-3 rounded-md border border-border/70 hover:border-primary/50 hover:bg-primary/5 transition-colors">
                  <span className="text-sm text-foreground/90 font-medium">{d.label}</span>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors"/>
                </a>))}
            </div>
          </motion.div>
        </div>
      </section>

      <AppFooter />
    </div>);
};
export default ResearchPage;
