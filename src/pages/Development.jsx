import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
import ImageLightbox from "@/components/ImageLightbox";
import { projects } from "@/data/projects";

function Mockup({ accent }) {
  const bar = accent === "secondary" ? "bg-accent/70" : "bg-primary/70";
  const soft = accent === "secondary" ? "bg-accent/30" : "bg-primary/30";
  return (
    <div
      className="relative aspect-[4/3] rounded-xl overflow-hidden panel"
      style={{
        transform: "perspective(1000px) rotateY(-6deg) rotateX(3deg)",
        transformOrigin: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-0 inset-x-0 h-8 bg-background/70 border-b border-border/60 flex items-center gap-1.5 px-3">
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
      </div>
      <div className="absolute inset-0 top-8 p-5 grid grid-cols-3 gap-3">
        <div className="col-span-2 space-y-2">
          <div className={`h-3 rounded ${bar} w-1/3`} />
          <div className="h-3 rounded bg-muted/60 w-2/3" />
          <div className="h-3 rounded bg-muted/40 w-1/2" />
          <div className={`mt-3 h-24 rounded-lg ${soft}`} />
          <div className="h-3 rounded bg-muted/50 w-full" />
          <div className="h-3 rounded bg-muted/40 w-3/4" />
        </div>
        <div className="space-y-2">
          <div className={`h-16 rounded-lg ${soft}`} />
          <div className="h-3 rounded bg-muted/50" />
          <div className="h-3 rounded bg-muted/40 w-2/3" />
          <div className={`h-16 rounded-lg ${soft} opacity-60`} />
        </div>
      </div>
    </div>
  );
}

function CaseCard({ c, i, onOpen }) {
  const flip = i % 2 === 1;
  const hero = c.screenshots?.[0];
  const heroFrame =
    hero?.ratio === "portrait" ? "aspect-[10/16] max-w-[480px] mx-auto" : "aspect-[4/3]";
  const listTitle = c.keyFeatures ? "Key Features" : "Outcome";
  const listItems = c.keyFeatures ?? c.outcome;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flip ? "lg:[direction:rtl]" : ""}`}
    >
      <div className="lg:[direction:ltr]">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: [-6, 6] }}
          viewport={{ once: false }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          {hero ? (
            <button
              type="button"
              onClick={() => onOpen(hero)}
              className={`group relative block w-full ${heroFrame} rounded-xl overflow-hidden panel border border-border/70 focus:outline-none focus:ring-2 focus:ring-primary`}
              aria-label={`Open ${hero.title}`}
            >
              <img
                src={hero.src}
                alt={hero.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] font-mono uppercase tracking-wider text-white/70 mix-blend-overlay drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                © Ibrahim Mursalin
              </span>
            </button>
          ) : (
            <Mockup accent={c.accent} />
          )}
        </motion.div>

        {c.screenshots && c.screenshots.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-2">
            {c.screenshots.slice(1).map((s) => (
              <button
                key={s.src}
                type="button"
                onClick={() => onOpen(s)}
                className="group relative aspect-[3/4] rounded-md overflow-hidden border border-border/60 hover:border-primary/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Open ${s.title}`}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="lg:[direction:ltr]">
        <div className="flex items-center gap-3 mb-6">
          {c.logo ? (
            <img
              src={c.logo}
              alt={`${c.name} app icon`}
              className="w-10 h-10 rounded-lg border border-border/70 object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg border border-border/70 bg-card/40 flex items-center justify-center">
              <c.icon size={16} className={c.accent === "secondary" ? "text-accent" : "text-primary"} />
            </div>
          )}
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {c.eyebrow}
          </p>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {c.name}
          </h3>
          {c.version && (
            <span className="font-mono text-xs text-primary tracking-widest">{c.version}</span>
          )}
        </div>

        <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-xl">
          {c.tagline}
        </p>

        <div className="mt-8 space-y-6 max-w-xl">
          {c.description && (
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                Overview
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          )}

          {[
            ["Problem", c.problem],
            ["Approach", c.approach],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                {k}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{v}</p>
            </div>
          ))}

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {c.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded border border-border/70 text-muted-foreground bg-background/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
              {listTitle}
            </p>
            <ul className="space-y-1.5">
              {listItems.map((o) => (
                <li key={o} className="text-sm text-foreground/85 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {c.extended && (
            <div className="space-y-5 pt-2 border-t border-border/50">
              {[
                ["Why Bangladesh", c.extended.whyBangladesh],
                ["Prototype", c.extended.prototype],
                ["Current limitations", c.extended.limits],
                ["Future research directions", c.extended.futureResearch],
                ["Potential collaboration", c.extended.collaboration],
                ["Unified Analytical Concept", c.extended.coreConcept],
                ["Burning Activity Calendar", c.extended.burningCalendar],
                ["Scientific Boundaries", c.extended.scientificBoundaries],
              ]
                .filter(([, v]) => Boolean(v))
                .map(([k, v]) => (
                  <div key={k}>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                      {k}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v}</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {c.live && (
            <a
              href={c.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Launch live deployment
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
          <Link
            to={`/development/${c.id}`}
            className={`group inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-all ${
              c.live
                ? "border border-border/70 text-foreground hover:border-primary/50 hover:text-primary"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            View project details
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          {c.repo && (
            <a
              href={c.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} /> Repository <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const Development = () => {
  const [shot, setShot] = useState(null);
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Web & App Development — Ibrahim Mursalin</title>
        <meta
          name="description"
          content="Case studies: BaySentinel — mapping ghost fishing gear across the Bay of Bengal (SDG 14); DesignLens V2 — AI-powered design critique; and TerraFlux — NASA Space Apps Challenge MODIS & VIIRS fire observation visualization."
        />
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/development" />
        <meta property="og:title" content="Web & App Development — Ibrahim Mursalin" />
        <meta
          property="og:description"
          content="Case studies for BaySentinel, DesignLens, and TerraFlux — climate, NASA Earth observation, and AI/HCI web apps."
        />
        <meta property="og:url" content="https://ibrahimmursalin.pro.bd/development" />
      </Helmet>

      <AppNav />

      <section className="relative pt-32 md:pt-44 pb-20 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <SignalField variant="ambient" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-6"
          >
            Destination 03 · Projects &amp; Web Apps
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-4xl"
          >
            Live systems, not <span className="text-primary">prototypes.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Every build here is a public intervention with a stated problem, a defensible approach, a real stack and a measurable outcome. Open for evaluation by recruiters, olympiad judges and collaborators.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-32 px-5 md:px-10">
        <div className="container mx-auto max-w-6xl space-y-32">
          {projects.map((c, i) => (
            <CaseCard key={c.id} c={c} i={i} onOpen={setShot} />
          ))}
        </div>
      </section>

      <AppFooter />
      <ImageLightbox
        open={!!shot}
        src={shot?.src ?? null}
        alt={shot?.title}
        title={shot?.title}
        onClose={() => setShot(null)}
      />
    </div>
  );
};

export default Development;
