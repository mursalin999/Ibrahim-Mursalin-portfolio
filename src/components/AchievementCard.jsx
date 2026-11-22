import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpenText, ExternalLink, ImagePlus, Images, Maximize2 } from "lucide-react";

/**
 * Reusable AchievementCard component.
 * Supports two modes:
 * 1) Gallery / Timeline card mode: pass `title`, `date`, `description`, and optional `image`
 *    (falls back to a clean editable image placeholder when `image` is null/omitted).
 * 2) Editorial featured card mode: pass `achievement` object (used on /achievements).
 */
export default function AchievementCard({
  achievement,
  image,
  title,
  date,
  description,
  category,
  detailPath,
  placeholderLabel = "Certificate / Event Photo Placeholder",
  onImageClick,
  index = 0,
}) {
  // Mode 1: Direct props / Gallery card with image or placeholder, title, date, description
  if (!achievement) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
        className="group panel rounded-2xl overflow-hidden flex flex-col hover:border-primary/45 transition-colors"
      >
        {image ? (
          <button
            type="button"
            onClick={() => onImageClick && onImageClick({ src: image, title, description })}
            aria-label={`View ${title} full size`}
            className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/60 bg-background/60 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img
              src={image}
              alt={`${title} — ${date}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-3 right-3 p-2 rounded-full bg-background/75 backdrop-blur border border-border/60 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} />
            </span>
          </button>
        ) : (
          <div className="aspect-[4/3] w-full border-b border-dashed border-border/80 bg-secondary/20 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-11 h-11 rounded-xl border border-border/70 bg-background/60 flex items-center justify-center mb-3">
              <ImagePlus size={18} className="text-primary" />
            </div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary">
              Image Placeholder
            </p>
            <p className="mt-1.5 text-xs font-medium text-foreground/85 max-w-[220px]">
              {placeholderLabel}
            </p>
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-primary">
              {date}
            </span>
            {category && (
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                {category}
              </span>
            )}
          </div>

          <h3 className="font-heading text-lg md:text-xl font-bold tracking-tight text-foreground leading-snug">
            {title}
          </h3>

          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>

          {detailPath && (
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
              <Link
                to={detailPath}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-foreground transition-colors"
              >
                View achievement details <ArrowUpRight size={13} />
              </Link>
              {image && onImageClick && (
                <button
                  type="button"
                  onClick={() => onImageClick({ src: image, title, description })}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  Inspect ↗
                </button>
              )}
            </div>
          )}
        </div>
      </motion.article>
    );
  }

  // Mode 2: Editorial featured achievement card (no embedded gallery image on /achievements)
  const isEditorial = achievement.variant === "editorial";
  const BadgeIcon = isEditorial ? BookOpenText : Award;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.24), ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl panel mb-6 md:mb-8"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.42]"
        style={{
          background: isEditorial
            ? "radial-gradient(110% 80% at 100% 0%, hsl(18 100% 68% / 0.10) 0%, transparent 55%), radial-gradient(100% 90% at 0% 100%, hsl(160 77% 59% / 0.08) 0%, transparent 60%)"
            : "radial-gradient(110% 80% at 100% 0%, hsl(160 77% 59% / 0.14) 0%, transparent 55%), radial-gradient(100% 90% at 0% 100%, hsl(196 90% 55% / 0.10) 0%, transparent 60%)",
        }}
      />
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
          isEditorial ? "via-accent/50" : "via-primary/60"
        } to-transparent`}
      />

      <div className="relative p-8 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.26em] uppercase ${
                isEditorial
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-primary/40 bg-primary/10 text-primary"
              }`}
            >
              <BadgeIcon size={12} />
              {achievement.recognition}
            </span>
            <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-muted-foreground">
              {achievement.organization} · {achievement.year}
            </span>
          </div>

          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
            {achievement.category}
          </span>
        </div>

        <div className="mt-6 grid lg:grid-cols-[1.35fr_0.9fr] gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.12]">
              {achievement.title}
            </h2>

            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
              {achievement.description}
            </p>

            {achievement.relatedProject && (
              <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-primary mb-1">
                    Project Behind the Award
                  </p>
                  <p className="text-sm text-foreground/90 font-medium">
                    {achievement.relatedProject.name} — {achievement.relatedProject.field}
                  </p>
                </div>
                {achievement.relatedProject.website && (
                  <a
                    href={achievement.relatedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-primary hover:text-foreground transition-colors"
                  >
                    baysentinel.pro.bd <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}

            {achievement.relatedEssay && (
              <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-4">
                <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-accent mb-1">
                  Featured Essay
                </p>
                <p className="font-heading text-base font-semibold text-foreground">
                  “{achievement.relatedEssay.title}”
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Topic: {achievement.relatedEssay.topic}
                </p>
              </div>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to={`/achievements/${achievement.id}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
              >
                View Details
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to={`/achievements-gallery#${achievement.id}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-border/70 text-foreground/90 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Images size={14} />
                Evidence Gallery
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6">
            <p className="font-mono text-[10px] tracking-[0.26em] uppercase text-muted-foreground mb-4">
              Verified Details
            </p>
            <dl className="space-y-3.5">
              {achievement.details.slice(0, 6).map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 border-b border-border/40 pb-2.5 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground/90 sm:text-right font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
