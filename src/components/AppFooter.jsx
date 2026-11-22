import { Link } from "react-router-dom";
import { SiBehance, SiInstagram, SiFacebook, SiWhatsapp, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, BookOpen, Crown, FileText } from "lucide-react";
const socials = [
    { icon: SiBehance, href: "https://www.behance.net/ibrahimmursalin", label: "Behance" },
    { icon: SiInstagram, href: "https://www.instagram.com/ibrahimmursalin766?igsh=MWVhenRidnczeXg4Zg==", label: "Instagram" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ibrahimmursalin", label: "LinkedIn" },
    { icon: SiFacebook, href: "https://www.facebook.com/ibrahim.mursalin.2025", label: "Facebook" },
    { icon: SiWhatsapp, href: "https://wa.me/qr/YGDMACI7CDALL1", label: "WhatsApp" },
    { icon: SiGithub, href: "https://github.com/mursalin999", label: "GitHub" },
    { icon: FileText, href: "https://doi.org/10.5281/zenodo.21738196", label: "Zenodo" },
    { icon: BookOpen, href: "https://scholar.google.com/", label: "Scholar" },
    { icon: Crown, href: "https://ratings.fide.com/profile/532020775", label: "FIDE" },
    { icon: Mail, href: "mailto:ibrahimmursalin766@gmail.com", label: "Email" },
];
const cols = [
    {
        title: "Explore",
        items: [
            { label: "About", to: "/" },
            { label: "Journey", to: "/journey" },
            { label: "Graphic Design", to: "/graphic-design" },
            { label: "Web & App", to: "/development" },
            { label: "Research", to: "/research" },
            { label: "Achievements", to: "/achievements" },
            { label: "Achievement Gallery", to: "/achievements-gallery" },
        ],
    },
];
export default function AppFooter() {
    return (<footer className="relative border-t border-border/50 mt-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
            Signal · Coordinates
          </p>
          <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Let's build something worth <span className="text-primary">noticing.</span>
          </p>
          <a href="mailto:ibrahimmursalin766@gmail.com" className="mt-6 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Mail size={16}/>
            <span className="text-base font-medium">ibrahimmursalin766@gmail.com</span>
          </a>
          <p className="mt-4 font-mono text-[11px] tracking-wider text-muted-foreground">
            22.35°N 91.83°E · Mymensingh, Bangladesh
          </p>
        </div>

        {cols.map((c) => (<div key={c.title}>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {c.title}
            </p>
            <ul className="space-y-2">
              {c.items.map((i) => (<li key={i.to}>
                  <Link to={i.to} className="text-sm text-foreground/85 hover:text-primary transition-colors">
                    {i.label}
                  </Link>
                </li>))}
            </ul>
          </div>))}

        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Channels
          </p>
          <div className="flex flex-wrap gap-2.5">
            {socials.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-md border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <s.icon size={15}/>
              </a>))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-5 md:px-10 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          <span>© MMXXVI Ibrahim Mursalin</span>
          <span>Signal Field · v1.0</span>
        </div>
      </div>
    </footer>);
}
