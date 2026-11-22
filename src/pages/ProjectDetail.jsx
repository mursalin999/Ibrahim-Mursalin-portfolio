import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Maximize2 } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
import ImageLightbox from "@/components/ImageLightbox";
import { getProjectById } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [shot, setShot] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Project Not Found — Ibrahim Mursalin</title>
        </Helmet>
        <AppNav />
        <main className="pt-36 pb-24 px-5 md:px-10">
          <div className="container mx-auto max-w-3xl panel rounded-3xl p-8 md:p-12 text-center">
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary mb-4">
              Projects &amp; Web Apps
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Project not found
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              The requested project case study could not be found. Explore all web applications in the Projects &amp; Web Apps section.
            </p>
            <div className="mt-8">
              <Link
                to="/development"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft size={14} /> Back to Web &amp; App Development
              </Link>
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    );
  }

  const canonicalUrl = `https://ibrahimmursalin.pro.bd/development/${project.id}`;
  const Icon = project.icon;
  const listTitle = project.keyFeatures ? "Key Features" : "Outcomes";
  const listItems = project.keyFeatures ?? project.outcome;

  const extendedEntries = project.extended
    ? [
        ["Why Bangladesh", project.extended.whyBangladesh],
        ["Prototype Architecture", project.extended.prototype],
        ["Unified Analytical Concept", project.extended.coreConcept],
        ["Burning Activity Calendar", project.extended.burningCalendar],
        ["Scientific Boundaries", project.extended.scientificBoundaries],
        ["Current Limitations", project.extended.limits],
        ["Future Research Directions", project.extended.futureResearch],
        ["Potential Collaboration", project.extended.collaboration],
      ].filter(([, v]) => Boolean(v))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          {project.name} — {project.category} | Ibrahim Mursalin
        </title>
        <meta name="description" content={project.description || project.tagline} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${project.name} — Ibrahim Mursalin`} />
        <meta property="og:description" content={project.description || project.tagline} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <AppNav />

      <section className="relative pt-32 md:pt-40 pb-12 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <SignalField variant="ambient" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Link
            to="/development"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={13} /> All Projects &amp; Web Apps
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={`${project.name} icon`}
                  className="w-10 h-10 rounded-lg border border-border/70 object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg border border-border/70 bg-card/40 flex items-center justify-center">
                  <Icon
                    size={16}
                    className={project.accent === "secondary" ? "text-accent" : "text-primary"}
                  />
                </div>
              )}
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary">
                {project.category}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-foreground leading-[1.08]">
                {project.name}
              </h1>
              {project.version && (
                <span className="font-mono text-sm tracking-widest text-primary">
                  {project.version}
                </span>
              )}
            </div>

            <p className="mt-5 text-base md:text-lg text-foreground/85 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {project.description && (
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
                {project.description}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Launch live deployment <ExternalLink size={14} />
                </a>
              )}
              <Link
                to="/development"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border/70 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                Explore other projects <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="pb-28 px-5 md:px-10">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-6 md:gap-8">
            <section className="panel rounded-3xl p-7 md:p-10 space-y-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-2">
                  Problem &amp; Context
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-2">
                  Approach &amp; Design
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </section>

            <aside className="panel rounded-3xl p-7 md:p-10 space-y-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-3">
                  {listTitle}
                </p>
                <ul className="space-y-2.5">
                  {listItems.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-foreground/85 leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
                  Technology Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded border border-border/70 text-muted-foreground bg-background/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {extendedEntries.length > 0 && (
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {extendedEntries.map(([title, copy]) => (
                <div key={title} className="panel rounded-2xl p-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-2.5">
                    {title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{copy}</p>
                </div>
              ))}
            </section>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <div className="mb-6">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-2">
                  Interface Showcase
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  UI &amp; Visualization <span className="text-primary">Screens</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {project.screenshots.map((s) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setShot(s)}
                    className="group panel rounded-2xl overflow-hidden text-left hover:border-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex flex-col"
                    aria-label={`Inspect ${s.title}`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-border/60 bg-background/60">
                      <img
                        src={s.src}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 p-2 rounded-full bg-background/75 backdrop-blur border border-border/60 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={14} />
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-medium text-foreground/90 leading-snug">
                        {s.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

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
}
