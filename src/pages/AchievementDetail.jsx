import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpenText,
  ExternalLink,
  Images,
  Waves,
} from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
import { getAchievementById } from "@/data/achievements";

export default function AchievementDetail() {
  const { id } = useParams();
  const achievement = getAchievementById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!achievement) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Achievement Not Found — Ibrahim Mursalin</title>
        </Helmet>
        <AppNav />
        <main className="pt-36 pb-24 px-5 md:px-10">
          <div className="container mx-auto max-w-3xl panel rounded-3xl p-8 md:p-12 text-center">
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary mb-4">
              Achievements
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Achievement record not found
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              The achievement you requested could not be found. Browse all milestones or explore the chronological image gallery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft size={14} /> Back to Achievements
              </Link>
              <Link
                to="/achievements-gallery"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border/70 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Images size={14} /> Open Image Gallery
              </Link>
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    );
  }

  const isEssay = Boolean(achievement.relatedEssay);
  const isAtlantia = achievement.id === "atlantia-stem-olympiad-2026";
  const canonicalUrl = `https://ibrahimmursalin.pro.bd/achievements/${achievement.id}`;
  const HeaderIcon = isEssay ? BookOpenText : Award;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{achievement.title} — Ibrahim Mursalin</title>
        <meta name="description" content={achievement.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${achievement.title} — Ibrahim Mursalin`} />
        <meta property="og:description" content={achievement.description} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <AppNav />

      <section className="relative pt-32 md:pt-40 pb-12 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <SignalField variant="ambient" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={13} /> All Achievements
            </Link>

            <Link
              to={`/achievements-gallery#${achievement.id}`}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-primary hover:text-foreground transition-colors"
            >
              <Images size={13} /> Open Photo & Certificate Gallery
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.26em] uppercase ${
                  isEssay
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-primary/40 bg-primary/10 text-primary"
                }`}
              >
                <HeaderIcon size={12} /> {achievement.recognition}
              </span>
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-muted-foreground">
                {achievement.organization} · {achievement.date}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl">
              {achievement.title}
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {achievement.description}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24 px-5 md:px-10">
        <div className="container mx-auto max-w-5xl space-y-8">
          {/* Atlântia International STEM Olympiad 2026 Detailed View */}
          {isAtlantia && (
            <>
              <div className="grid lg:grid-cols-[1.25fr_0.95fr] gap-6 md:gap-8">
                <section className="panel rounded-3xl p-7 md:p-10 space-y-5">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary">
                    The Recognition
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                    Bangladesh National Round 2026
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {achievement.detailedDescription}
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    Awarded the <strong className="text-foreground">Gold Medal</strong> in the{" "}
                    <strong className="text-foreground">Engineers</strong> category (Grades 9–10), with the award ceremony held on{" "}
                    <strong className="text-foreground">19 November 2026</strong> at{" "}
                    <strong className="text-foreground">Russian House, Dhaka, Bangladesh</strong>.
                  </p>
                </section>

                <aside className="panel rounded-3xl p-7 md:p-10">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
                    Recognition Details
                  </p>
                  <dl className="space-y-3.5">
                    {achievement.details.map((d) => (
                      <div
                        key={d.label}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-border/40 pb-2.5 last:border-b-0 last:pb-0"
                      >
                        <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                          {d.label}
                        </dt>
                        <dd className="text-sm text-foreground/90 font-medium sm:text-right">
                          {d.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>

              {achievement.relatedProject && (
                <section className="panel rounded-3xl p-7 md:p-12">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-4">
                    <Waves size={14} /> The Project Behind the Award — Bay Sentinel
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                    AI-assisted, community-driven coastal conservation in the Bay of Bengal.
                  </h2>
                  <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
                    {achievement.relatedProject.summary}
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {achievement.relatedProject.purposes.map((purpose, idx) => (
                      <div
                        key={purpose}
                        className="rounded-xl border border-border/60 bg-background/40 p-5"
                      >
                        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                          Purpose · {String(idx + 1).padStart(2, "0")}
                        </p>
                        <p className="text-sm text-foreground/85 leading-relaxed">{purpose}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-primary/50 pl-5">
                    {achievement.relatedProject.motivation}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={achievement.relatedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      aria-label="Visit Bay Sentinel official website (opens in a new tab)"
                    >
                      Visit Bay Sentinel (baysentinel.pro.bd)
                      <ExternalLink size={14} />
                    </a>
                    <Link
                      to={achievement.relatedProject.caseStudyPath}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border/70 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      Read Development Case Study <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </section>
              )}
            </>
          )}

          {/* Lumiere Scholars Essay Award Editorial Detail View */}
          {isEssay && achievement.relatedEssay && (
            <>
              <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-6 md:gap-8">
                <section className="panel rounded-3xl p-7 md:p-10 space-y-5">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-accent">
                    About the Essay
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-[1.2]">
                    “{achievement.relatedEssay.title}”
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {achievement.relatedEssay.overview}
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {achievement.relatedEssay.centralArgument}
                  </p>
                </section>

                <aside className="panel rounded-3xl p-7 md:p-10">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
                    Recognition Details
                  </p>
                  <dl className="space-y-3.5">
                    {achievement.details.map((d) => (
                      <div
                        key={d.label}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-border/40 pb-2.5 last:border-b-0 last:pb-0"
                      >
                        <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                          {d.label}
                        </dt>
                        <dd className="text-sm text-foreground/90 font-medium sm:text-right">
                          {d.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>

              {/* Featured Editorial Quote */}
              <section className="panel rounded-3xl p-8 md:p-12 border-l-4 border-l-accent">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-accent mb-4">
                  Featured Essay Quotation
                </p>
                <blockquote className="font-heading text-xl md:text-3xl font-semibold tracking-tight text-foreground leading-[1.3]">
                  “{achievement.relatedEssay.quote}”
                </blockquote>
                <p className="mt-5 font-mono text-xs tracking-wider text-muted-foreground">
                  — {achievement.relatedEssay.quoteAttribution}
                </p>
              </section>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                <section className="panel rounded-3xl p-7 md:p-10">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-4">
                    Central Argument & Themes
                  </p>
                  <ul className="space-y-3">
                    {achievement.relatedEssay.themes.map((theme) => (
                      <li
                        key={theme}
                        className="flex gap-3 pl-3 border-l border-primary/40 text-sm md:text-[15px] text-foreground/85 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{theme}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-6">
                  <div className="panel rounded-3xl p-7 md:p-9">
                    <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary mb-3">
                      Research and Writing Approach
                    </p>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {achievement.relatedEssay.researchApproach}
                    </p>
                  </div>

                  <div className="panel rounded-3xl p-7 md:p-9">
                    <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-accent mb-3">
                      {achievement.relatedEssay.reflectionTitle}
                    </p>
                    <p className="text-[15px] text-foreground/90 leading-relaxed italic">
                      “{achievement.relatedEssay.reflection}”
                    </p>
                  </div>
                </section>
              </div>
            </>
          )}

          {/* Fallback Detail View for Previous Achievements */}
          {!isAtlantia && !isEssay && (
            <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-6 md:gap-8">
              <section className="panel rounded-3xl p-7 md:p-10 space-y-5">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary">
                  Milestone Overview
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {achievement.detailedDescription}
                </p>
                {achievement.relatedProject && (
                  <div className="pt-2 flex flex-wrap gap-3">
                    {achievement.relatedProject.website && (
                      <a
                        href={achievement.relatedProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Visit {achievement.relatedProject.name} <ExternalLink size={14} />
                      </a>
                    )}
                    <Link
                      to={achievement.relatedProject.caseStudyPath}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border/70 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      View Case Study <ArrowUpRight size={14} />
                    </Link>
                  </div>
                )}
              </section>

              <aside className="panel rounded-3xl p-7 md:p-10">
                <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
                  Recognition Details
                </p>
                <dl className="space-y-3.5">
                  {achievement.details.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-border/40 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                        {d.label}
                      </dt>
                      <dd className="text-sm text-foreground/90 font-medium sm:text-right">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          )}

          {/* Separate Image Gallery Redirect Strip (keeps images on dedicated gallery page) */}
          <section className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.26em] uppercase text-primary mb-1.5">
                Certificates & Event Photographs
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                All certificates, ceremony photographs, and event documentation are archived chronologically in the dedicated Achievement Image Gallery.
              </p>
            </div>
            <Link
              to={`/achievements-gallery#${achievement.id}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-primary/40 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Images size={15} />
              View in Achievement Gallery
              <ArrowUpRight size={14} />
            </Link>
          </section>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
