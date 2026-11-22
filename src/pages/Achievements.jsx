import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, Medal, Globe2, Leaf, ArrowUpRight, Waves, Trophy, Images } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import AchievementCard from "@/components/AchievementCard";
import { featuredAchievements } from "@/data/achievements";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Recognition & Achievements — Ibrahim Mursalin</title>
        <meta
          name="description"
          content="Recognition and achievements: Atlântia International STEM Olympiad 2026 Gold Medal, Lumiere Scholars Essay Award 30% Merit Scholarship, BOCE 2026, IIC 2026, WSDG 2026, and FIDE Arena Candidate Master."
        />
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/achievements" />
        <meta property="og:title" content="Recognition & Achievements — Ibrahim Mursalin" />
        <meta
          property="og:description"
          content="Milestones across scientific exploration, environmental innovation, independent research writing, and competitive chess."
        />
        <meta property="og:url" content="https://ibrahimmursalin.pro.bd/achievements" />
      </Helmet>

      <AppNav />

      <main className="pt-32 md:pt-40 pb-16 px-5 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6"
          >
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                Achievements
              </p>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Recognition &amp; <span className="text-primary">Achievements.</span>
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Some milestones that reflect my interests in scientific exploration, environmental innovation, research, and independent learning.
              </p>
            </div>

            <Link
              to="/achievements-gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-primary/40 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Images size={15} />
              Achievement Image Gallery
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* ── NEW FEATURED ACHIEVEMENTS (Atlântia 2026 & Lumiere Scholars 2026) ── */}
          {featuredAchievements.map((item, idx) => (
            <AchievementCard key={item.id} achievement={item} index={idx} />
          ))}

          {/* ── FEATURED · BOCE 2026 ── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl panel mb-6 md:mb-8"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.55]"
              style={{
                background:
                  "radial-gradient(120% 80% at 100% 0%, hsl(160 77% 59% / 0.16) 0%, transparent 55%), radial-gradient(100% 90% at 0% 100%, hsl(196 90% 55% / 0.12) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="relative p-8 md:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.28em] uppercase text-accent">
                  <Leaf size={12} /> National Recognition
                </span>
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                  2026 · Climate &amp; Environmental Science
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-start gap-6">
                <div className="text-5xl md:text-6xl leading-none select-none" aria-hidden>
                  🥈
                </div>
                <div className="flex-1 min-w-[260px]">
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl">
                    From National Runner-Up to <span className="text-primary">Team Bangladesh Selection</span>
                  </h2>
                  <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed text-[15px]">
                    A journey through Bangladesh's national climate and environmental science olympiad — from becoming Runner-Up at BOCE 2026 to competing among 39 of the country's top students for the opportunity to represent Bangladesh at IOCE 2026.
                  </p>
                </div>
              </div>

              {/* Journey path */}
              <div className="mt-12 grid lg:grid-cols-[1.15fr_1fr] gap-10">
                <ol className="relative space-y-0">
                  {[
                    {
                      emoji: "🇧🇩",
                      title: "National Competition",
                      text: "Bangladesh Olympiad on Climate Change & Environmental Issues (BOCE) 2026",
                    },
                    {
                      emoji: "🥈",
                      title: "Runner-Up — BOCE 2026 National Round",
                      text: "National medalist in climate & environmental science",
                    },
                    {
                      emoji: "🏕️",
                      title: "National Team Selection Boot Camp",
                      text: "Selected as a national medalist to compete for Team Bangladesh",
                    },
                    {
                      emoji: "👥",
                      title: "Top 39 Students Nationwide",
                      text: "Competed with 39 of Bangladesh's best students",
                    },
                    {
                      emoji: "📍",
                      title: "16th in the Final Selection for IOCE 2026",
                      text: "Final stage of the Team Bangladesh selection process",
                    },
                  ].map((step, i, arr) => (
                    <motion.li
                      key={step.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      className="relative flex gap-5 pb-8 last:pb-0"
                    >
                      {i < arr.length - 1 && (
                        <span
                          className="absolute left-[21px] top-11 bottom-0 w-px bg-gradient-to-b from-accent/50 to-border/50"
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-10 w-11 h-11 shrink-0 rounded-full border flex items-center justify-center text-lg bg-background/70 backdrop-blur ${
                          i === 1
                            ? "border-accent/60 shadow-[0_0_24px_hsl(160_77%_59%/0.25)]"
                            : "border-border/70"
                        }`}
                      >
                        {step.emoji}
                      </span>
                      <div className="pt-2">
                        <p className={`font-heading font-bold tracking-tight ${i === 1 ? "text-accent text-lg" : "text-foreground"}`}>
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>

                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["🏆", "National Position", "Runner-Up"],
                      ["👥", "National Selection Pool", "Top 39 Students"],
                      ["📊", "Final Boot Camp Rank", "16th Place"],
                      ["🌍", "Next Stage", "Team Bangladesh Selection for IOCE 2026"],
                    ].map(([emoji, label, value], i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="rounded-xl border border-border/60 bg-background/40 backdrop-blur-md p-4 hover:border-accent/40 transition-colors"
                      >
                        <span className="text-lg" aria-hidden>
                          {emoji}
                        </span>
                        <p className="mt-2 font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 font-heading text-sm font-bold tracking-tight text-foreground leading-snug">
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Reflection */}
                  <blockquote className="rounded-xl border-l-2 border-accent/60 bg-accent/[0.05] p-5 text-sm text-foreground/85 leading-relaxed italic">
                    “I did not make it to the final international team, but reaching this stage taught me something bigger than a ranking. Competing with some of the brightest students from across Bangladesh pushed me to learn, question, and understand our environment in a completely different way. This experience made me even more curious about climate, ecology, and the role young people can play in solving environmental challenges.”
                  </blockquote>

                  <p className="text-xs text-muted-foreground/80 leading-relaxed flex items-start gap-2">
                    <Waves size={14} className="shrink-0 mt-0.5 text-primary" />
                    The same environmental curiosity powers BaySentinel — my open-access climate intervention for the Bay of Bengal.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── IIC 2026 · Bay Sentinel National Round Winner ── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl panel mb-6 md:mb-8"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.55]"
              style={{
                background:
                  "radial-gradient(120% 80% at 100% 0%, hsl(45 90% 58% / 0.14) 0%, transparent 55%), radial-gradient(100% 90% at 0% 100%, hsl(160 77% 59% / 0.14) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="relative p-8 md:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.28em] uppercase text-accent">
                  <Trophy size={12} /> National Round Winner
                </span>
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                  2026 · International Innovation Competition
                </span>
              </div>

              <h2 className="mt-7 font-heading text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl">
                Winner — Bangladesh National Round, International Innovation Competition{" "}
                <span className="text-primary">2026</span>
              </h2>

              <p className="mt-5 flex flex-wrap items-center gap-2.5 text-base md:text-lg text-foreground/85">
                <Globe2 size={18} className="text-primary shrink-0" />
                <span>
                  Selected to Represent Bangladesh
                  <span className="mx-2 inline-block align-middle text-lg leading-none">🇧🇩</span>
                  at the International Round in Egypt
                  <span className="ml-2 inline-block align-middle text-lg leading-none">🇪🇬</span>
                </span>
              </p>

              <div className="mt-8 grid lg:grid-cols-[1.25fr_1fr] gap-10">
                <div className="space-y-5 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                  <p>
                    <strong className="text-foreground">Bay Sentinel</strong> won the Bangladesh National Round of the International Innovation Competition 2026, earning the opportunity to represent Bangladesh at the international round in Egypt.
                  </p>
                  <blockquote className="border-l-2 border-accent/60 pl-5 py-1 text-foreground/90 italic">
                    “From mapping invisible ghost gear to standing on a national stage — Bay Sentinel keeps proving that local problems can carry global solutions.”
                  </blockquote>
                  <div className="pt-2">
                    <Link
                      to="/development"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
                    >
                      See the Bay Sentinel case study <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
                    Key Highlights
                  </p>
                  <ul className="space-y-4">
                    {[
                      ["🏆", "Winner — Bangladesh National Round, International Innovation Competition 2026"],
                      ["🇧🇩", "Selected to represent Bangladesh at the international round in Egypt"],
                      ["🌊", "Project: Bay Sentinel (Ocean Sentinel)"],
                      ["🤖", "AI-powered coastal conservation platform"],
                    ].map(([emoji, text]) => (
                      <li key={text} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                        <span className="shrink-0 text-base leading-6">{emoji}</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── WSDG 2026 ── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl panel"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.55]"
              style={{
                background:
                  "radial-gradient(120% 80% at 0% 0%, hsl(196 90% 55% / 0.16) 0%, transparent 55%), radial-gradient(100% 90% at 100% 100%, hsl(160 77% 59% / 0.14) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="relative p-8 md:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.28em] uppercase text-primary">
                  <Medal size={12} /> National Recognition
                </span>
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                  July 2026
                </span>
              </div>

              <h2 className="mt-7 font-heading text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl">
                First Runner-Up — World Sustainable Development Goals Challenge{" "}
                <span className="text-primary">(WSDG) 2026</span>, Bangladesh National Round
              </h2>

              <p className="mt-5 flex items-center gap-2.5 text-base md:text-lg text-foreground/85">
                <Globe2 size={18} className="text-primary shrink-0" />
                <span>
                  Selected to Represent Bangladesh
                  <span className="mx-2 inline-block align-middle text-lg leading-none">🇧🇩</span>
                  at the WSDG 2026 International Round (Malaysia)
                </span>
              </p>

              <div className="mt-8 grid lg:grid-cols-[1.25fr_1fr] gap-10">
                <div className="space-y-5 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                  <p>
                    <strong className="text-foreground">BaySentinel (Ocean Sentinel)</strong> was recognized as the First Runner-Up at the World Sustainable Development Goals Challenge (WSDG) 2026 Bangladesh National Round. The project was subsequently selected to represent Bangladesh at the WSDG 2026 International Round in Malaysia.
                  </p>
                  <p>
                    Although I was unable to participate in the international round due to financial constraints, this national recognition reflects the impact and potential of the project and continues to motivate my work in AI-driven environmental conservation.
                  </p>
                  <blockquote className="border-l-2 border-primary/60 pl-5 py-1 text-foreground/90 italic">
                    “Recognition is not the destination; it is a reminder to keep building solutions that matter.”
                  </blockquote>
                  <div className="pt-2">
                    <Link
                      to="/development"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
                    >
                      See the Bay Sentinel case study <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6">
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
                    Key Highlights
                  </p>
                  <ul className="space-y-4">
                    {[
                      ["🥈", "First Runner-Up — WSDG 2026 Bangladesh National Round"],
                      ["🇧🇩", "Selected to represent Bangladesh internationally"],
                      ["🌊", "Project: BaySentinel (Ocean Sentinel)"],
                      ["🤖", "AI-powered coastal conservation platform"],
                      ["🎯", "SDGs: 14 (Life Below Water), 13 (Climate Action), 9 (Industry, Innovation & Infrastructure)"],
                    ].map(([emoji, text]) => (
                      <li key={text} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                        <span className="shrink-0 text-base leading-6">{emoji}</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── CHESS TITLE ── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-8 rounded-3xl panel p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
          >
            <div className="w-14 h-14 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0">
              <Crown size={22} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-2">
                Strategic Cognition
              </p>
              <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground">
                FIDE Arena Candidate Master (ACM)
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Regional team captain, divisional champion and National U-20 competitor. FIDE ID · 532020775.
              </p>
              <a
                href="https://ratings.fide.com/profile/532020775"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-foreground transition-colors"
              >
                View my FIDE profile <ArrowUpRight size={13} />
              </a>
            </div>
            <span className="self-start md:self-center font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border border-border text-muted-foreground whitespace-nowrap">
              FIDE Title
            </span>
          </motion.article>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Achievements;
