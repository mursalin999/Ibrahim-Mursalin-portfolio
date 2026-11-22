import { motion } from "framer-motion";
import { FileText, ExternalLink, ArrowUpRight } from "lucide-react";
const appIcons = {
    baySentinel: "/images/apps/baysentinel-icon.jpg",
    designLens: "/images/apps/designlens-icon.jpg",
};
const products = [
    {
        logo: appIcons.designLens,
        name: "DesignLens",
        tag: "AI Design Critique",
        blurb: "The product built from my thesis — an AI-powered critique tool that gives junior designers structured feedback on typography, color, hierarchy, composition & impact.",
        href: "https://designlens-v1.lovable.app",
        accent: "from-primary/20 to-accent/10",
        iconColor: "text-primary",
    },
    {
        logo: appIcons.baySentinel,
        name: "Bay Sentinel",
        tag: "Web App",
        blurb: "A separate product I designed & shipped end-to-end — from concept and UI to deployment. Live in production.",
        href: "https://baysentinel.pro.bd",
        accent: "from-accent/20 to-primary/10",
        iconColor: "text-accent",
    },
];
const Research = () => {
    return (<section id="research" className="section-padding relative noise-overlay">
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"/>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            Research & Products
          </p>
          <h2 className="heading-lg text-foreground">
            Beyond the canvas — <span className="gradient-text">I build & research too.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I don't just design — I study how design gets better, then turn the research into real, shipped products.
          </p>
        </motion.div>

        {/* Featured research card */}
        <motion.a href="https://doi.org/10.5281/zenodo.21738196" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="group relative block glass-card rounded-2xl p-6 md:p-10 mb-8 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:glow-primary">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none"/>

          <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-start md:items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center shrink-0">
              <FileText size={24} className="text-primary"/>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-md border border-primary/30 text-primary bg-primary/5">
                  Published Thesis
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-md border border-border text-muted-foreground">
                  Zenodo · 2026
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  DOI: 10.5281/zenodo.21738196
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                An AI-Powered Interactive Interface for Automated Graphic Design Critique & Feedback for Junior Designers
              </h3>

              <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed">
                My research on how vision-capable AI can deliver structured, mentor-like critique across typography, color, hierarchy, composition & impact — helping self-taught designers grow without expert access.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-foreground shrink-0 md:justify-self-end">
              <span>Read on Zenodo</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary"/>
            </div>
          </div>
        </motion.a>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (<motion.a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group glass-card rounded-2xl p-6 md:p-7 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-5">
                <img src={p.logo} alt={`${p.name} app icon`} className="w-12 h-12 rounded-xl object-cover border border-border/60" loading="lazy"/>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors"/>
              </div>

              <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-2">
                {p.tag}
              </p>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.blurb}
              </p>

              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                Visit live site
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </div>
            </motion.a>))}
        </div>
      </div>
    </section>);
};
export default Research;
