import { Link } from "react-router-dom";
import { SiBehance, SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
const socialLinks = [
    { icon: SiBehance, href: "https://www.behance.net/ibrahimmursalin", label: "Behance" },
    { icon: SiInstagram, href: "https://www.instagram.com/ibrahimmursalin766?igsh=MWVhenRidnczeXg4Zg==", label: "Instagram" },
    { icon: SiFacebook, href: "https://www.facebook.com/ibrahim.mursalin.2025", label: "Facebook" },
    { icon: SiWhatsapp, href: "https://wa.me/qr/YGDMACI7CDALL1", label: "WhatsApp" },
];
const Footer = () => {
    return (<footer className="border-t border-border/50 bg-background relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"/>

      <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-bold text-foreground mb-1">
              Ibrahim Mursalin
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Visual Storyteller · Pixel Perfectionist
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-accent transition-colors duration-200">
                <s.icon size={16}/>
              </a>))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ibrahim Mursalin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);
};
export default Footer;
