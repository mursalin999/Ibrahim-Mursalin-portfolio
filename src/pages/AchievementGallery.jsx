import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
import ImageLightbox from "@/components/ImageLightbox";
import AchievementCard from "@/components/AchievementCard";
import { achievementGalleryTimeline } from "@/data/achievements";

export default function AchievementGallery() {
  const location = useLocation();
  const [selectedYear, setSelectedYear] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const target =
        document.getElementById(id) ||
        document.querySelector(`[data-achievement-id="${id}"]`);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  const years = ["All", ...achievementGalleryTimeline.map((group) => group.year)];
  const visibleGroups =
    selectedYear === "All"
      ? achievementGalleryTimeline
      : achievementGalleryTimeline.filter((group) => group.year === selectedYear);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Achievements &amp; Certificates Gallery — Ibrahim Mursalin</title>
        <meta
          name="description"
          content="Grid-based chronological timeline of certificates, award ceremonies, and recognition milestones for Ibrahim Mursalin."
        />
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/achievements-gallery" />
        <meta property="og:title" content="Achievements & Certificates Gallery — Ibrahim Mursalin" />
        <meta
          property="og:description"
          content="Chronological gallery of certificates, award ceremony photographs, and recognition documents across STEM olympiads, essay scholarships, and chess."
        />
        <meta property="og:url" content="https://ibrahimmursalin.pro.bd/achievements-gallery" />
      </Helmet>

      <AppNav />

      <section className="relative pt-32 md:pt-44 pb-12 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-45 pointer-events-none">
          <SignalField variant="ambient" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={13} /> Back to Achievements
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-end justify-between gap-6"
          >
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                Achievements Gallery · Timeline
              </p>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
                Certificates &amp; event <span className="text-primary">gallery.</span>
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                A chronological grid of official certificates, scholarship confirmations, and award ceremony photographs across national olympiads, research writing, and FIDE chess. Click any card image to inspect it full-size.
              </p>
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by year">
              {years.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`px-4 py-2 rounded-md font-mono text-[11px] tracking-[0.2em] uppercase border transition-colors ${
                    selectedYear === yr
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-background/40 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <main className="pb-28 px-5 md:px-10">
        <div className="container mx-auto max-w-6xl space-y-16">
          {visibleGroups.map((group, groupIdx) => (
            <section key={group.year} className="relative grid grid-cols-[auto_1fr] gap-5 md:gap-8">
              {/* Timeline rail */}
              <div className="relative flex flex-col items-center pt-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_16px_theme(colors.primary.DEFAULT)]" />
                {groupIdx < visibleGroups.length - 1 && (
                  <span className="flex-1 w-px bg-gradient-to-b from-primary/60 via-border/60 to-transparent mt-3" />
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-4 mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                    {group.year}
                  </h2>
                  <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-muted-foreground">
                    {group.periodLabel} · {group.items.length}{" "}
                    {group.items.length === 1 ? "entry" : "entries"}
                  </span>
                </div>

                {/* Grid-based timeline cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, idx) => (
                    <div
                      key={item.id}
                      id={item.id}
                      data-achievement-id={item.achievementId}
                      className="scroll-mt-28 flex"
                    >
                      <AchievementCard
                        image={item.image}
                        title={item.title}
                        date={item.date}
                        category={item.category}
                        description={item.description}
                        detailPath={item.detailPath}
                        placeholderLabel={item.placeholderLabel}
                        onImageClick={setLightbox}
                        index={idx}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <AppFooter />

      <ImageLightbox
        open={Boolean(lightbox)}
        src={lightbox?.src ?? null}
        alt={lightbox?.description || lightbox?.title}
        title={lightbox?.title}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
