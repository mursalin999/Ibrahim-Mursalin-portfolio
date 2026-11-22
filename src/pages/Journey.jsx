import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
const milestones = [
    {
        year: "2026",
        chapter: "★ · National Recognition",
        title: "🥈 Runner-Up — BOCE 2026, Bangladesh National Round",
        blurb: "National medalist at the Bangladesh Olympiad on Climate Change and Environmental Issues (BOCE) 2026 — then selected for the National Team Selection Boot Camp, competing against 39 of Bangladesh's top students for a place in the IOCE 2026 team and finishing 16th in the final selection.",
        reflection: "I did not make the final international team, but reaching that stage taught me something bigger than a ranking. Competing with some of the brightest students from across Bangladesh pushed me to learn, question and understand our environment in a completely different way — and it made me even more curious about climate, ecology and the role young people can play in solving environmental challenges.",
        link: { label: "Full story & stats", href: "/achievements" },
    },
    {
        year: "July 2026",
        chapter: "★ · International Selection",
        title: "🥈 First Runner-Up — WSDG 2026, Bangladesh National Round",
        blurb: "BaySentinel (Ocean Sentinel) was named First Runner-Up at the World Sustainable Development Goals Challenge 2026 Bangladesh National Round, and selected to represent Bangladesh 🇧🇩 at the International Round in Malaysia.",
        reflection: "I couldn't attend the international round due to financial constraints, but the national recognition confirmed the project's potential. Recognition is not the destination; it is a reminder to keep building solutions that matter.",
        image: "/images/projects/baysentinel-live-map.jpg",
        link: { label: "Bay Sentinel case study", href: "/development" },
    },
    {
        year: "2020",
        chapter: "01 · Origin",
        title: "Teaching myself graphic design",
        blurb: "No formal school, no mentor. Just YouTube tutorials, pirated PDFs and hundreds of failed Photoshop files late into the night.",
        reflection: "This is where I learned that self-teaching is a skill of its own — you have to design your own curriculum, grade your own work and stay honest about what you actually understand.",
    },
    {
        year: "2021",
        chapter: "02 · Practice",
        title: "First freelance clients",
        blurb: "Logos, posters, book covers, YouTube thumbnails — for local Bangladeshi brands and slowly for clients abroad.",
        reflection: "Real clients teach you what tutorials cannot: how to receive brutal feedback, how to defend a decision, and how to ship on a deadline you didn't set.",
        image: "/images/apps/designlens-icon.jpg",
    },
    {
        year: "2023",
        chapter: "03 · Encounter",
        title: "Discovering AI",
        blurb: "First serious exposure to large language models and vision models. The realisation that these tools could reshape design education, not just automate it.",
        reflection: "I stopped seeing AI as a threat to designers and started asking a harder question: could it be the mentor that most self-taught designers in low-resource countries never get?",
    },
    {
        year: "2024",
        chapter: "04 · First build",
        title: "StudyBuddy — my first AI tool",
        blurb: "A lightweight study companion built to help students in Bangladesh summarise, quiz themselves and stay accountable. My first serious full-stack build.",
        reflection: "StudyBuddy taught me how to move from Figma to shipped software. It also showed me how hungry students here are for tools that were never designed with them in mind.",
    },
    {
        year: "2025",
        chapter: "05 · Thesis begins",
        title: "DesignLens is conceived",
        blurb: "A vision-LLM critique tool with three pedagogical personas — Mentor, Art Director and UX Reviewer — designed for self-taught junior designers.",
        reflection: "This was the moment my design practice and my research question fused. I was building the mentor I never had.",
        image: "/images/projects/designlens-critique.jpg",
        link: { label: "Open DesignLens", href: "https://designlens-v1.lovable.app" },
    },
    {
        year: "2025",
        chapter: "06 · Fieldwork",
        title: "User study · 12 participants, Bangladesh",
        blurb: "Structured evaluation with 12 self-taught junior designers. Rubric-graded critiques before and after the intervention.",
        reflection: "The hardest, most rewarding phase. Sitting with participants, watching them accept and reject AI feedback in real time, was the truest design research I've ever done.",
        image: "/images/projects/designlens-score-dashboard.jpg",
    },
    {
        year: "2026",
        chapter: "07 · Writing",
        title: "Writing the thesis",
        blurb: "Framing the empirical result inside formative-assessment theory. Making the argument that persona-driven AI critique outperforms generic feedback.",
        reflection: "Writing forced me to defend every claim. It's the phase where you learn whether your data actually says what you want it to say.",
    },
    {
        year: "2026",
        chapter: "08 · Archived",
        title: "Published on Zenodo (CERN)",
        blurb: "Peer-archived preprint with a permanent DOI. +25.6 pts mean improvement on a 100-point design rubric.",
        reflection: "An independent student from Mymensingh, with no institutional affiliation, now has a citable record in the same open archive as CERN physicists. That still moves me.",
        link: { label: "Read on Zenodo", href: "https://doi.org/10.5281/zenodo.21738196" },
    },
    {
        year: "2026",
        chapter: "09 · Impact",
        title: "Bay Sentinel goes live",
        blurb: "An open-access citizen-science platform tracking ghost fishing gear across the Bay of Bengal. Aligned with UN SDG 13 & 14.",
        reflection: "Design research shouldn't stop at the paper. Bay Sentinel is the applied side of the same belief — that human-centred technology should reach the communities usually left out.",
        image: "/images/projects/baysentinel-live-map.jpg",
        link: { label: "Case study", href: "/development" },
    },
    {
        year: "Now",
        chapter: "10 · Next",
        title: "Seeking research collaborations",
        blurb: "Open to HCI, AI-in-education and marine-conservation research groups. Especially interested in Global South and low-resource contexts.",
        reflection: "The next chapter is being written with other people. If any of this resonates, I would love to hear from you.",
        link: { label: "Email me", href: "mailto:ibrahimmursalin766@gmail.com" },
    },
];
function MilestoneRow({ m, i }) {
    const [open, setOpen] = useState(false);
    return (<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.25) }} className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-10">
      {/* rail + dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_theme(colors.primary.DEFAULT)] mt-2"/>
        <div className="flex-1 w-px bg-gradient-to-b from-primary/50 via-border/50 to-transparent mt-2"/>
      </div>

      <div className="pb-14 md:pb-20">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
            {m.chapter}
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {m.year}
          </span>
        </div>

        <h3 className="mt-3 font-heading text-2xl md:text-[28px] font-bold tracking-tight text-foreground leading-[1.15] max-w-2xl">
          {m.title}
        </h3>
        <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
          {m.blurb}
        </p>

        <button type="button" onClick={() => setOpen((v) => !v)} className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-primary hover:text-foreground transition-colors" aria-expanded={open}>
          {open ? "Collapse" : "Expand reflection"}
          <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`}/>
        </button>

        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <div className="mt-5 grid md:grid-cols-[1.4fr_1fr] gap-6 max-w-3xl">
            <div className="rounded-xl border border-border/60 bg-background/40 backdrop-blur-md p-5">
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-2">
                Reflection
              </p>
              <p className="text-sm text-foreground/85 leading-relaxed italic">
                {m.reflection}
              </p>
              {m.link && (<a href={m.link.href} target={m.link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors">
                  {m.link.label} <ArrowUpRight size={13}/>
                </a>)}
            </div>
            {m.image && (<div className="rounded-xl overflow-hidden border border-border/60 aspect-[4/3]">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover" loading="lazy"/>
              </div>)}
          </div>
        </motion.div>
      </div>
    </motion.div>);
}
const Journey = () => {
    return (<div className="min-h-screen bg-background">
      <Helmet>
        <title>My Journey — Ibrahim Mursalin</title>
        <meta name="description" content="From self-taught graphic designer in Mymensingh to independent HCI researcher archived on Zenodo — the ten chapters that got me here."/>
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/journey"/>
      </Helmet>

      <AppNav />

      <section className="relative pt-32 md:pt-44 pb-16 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <SignalField variant="ambient"/>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-6">
            Chapter Index · Eleven Milestones
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-3xl">
            The long road from Photoshop to <span className="text-primary">peer archive.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Every milestone below is a real inflection point — some quiet, some loud. Expand any chapter to read the reflection behind it.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-32 px-5 md:px-10">
        <div className="container mx-auto max-w-5xl">
          {milestones.map((m, i) => (<MilestoneRow key={m.chapter} m={m} i={i}/>))}
        </div>
      </section>

      <AppFooter />
    </div>);
};
export default Journey;
