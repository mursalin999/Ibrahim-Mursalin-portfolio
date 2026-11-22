import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SiBehance, SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastY, setLastY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 20);
            setHidden(y > lastY && y > 100);
            setLastY(y);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastY]);
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);
    const socialLinks = [
        { icon: SiBehance, href: "https://www.behance.net/ibrahimmursalin", label: "Behance" },
        { icon: SiInstagram, href: "https://www.instagram.com/ibrahimmursalin766?igsh=MWVhenRidnczeXg4Zg==", label: "Instagram" },
        { icon: SiFacebook, href: "https://www.facebook.com/ibrahim.mursalin.2025", label: "Facebook" },
        { icon: SiWhatsapp, href: "https://wa.me/qr/YGDMACI7CDALL1", label: "WhatsApp" },
    ];
    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "Contact", to: "/#contact" },
    ];
    const handleNavClick = (to) => {
        if (to.startsWith("/#")) {
            const id = to.slice(2);
            if (location.pathname === "/") {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"} ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"}`}>
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="relative group">
          <span className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight">
            IM
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"/>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (<li key={link.label}>
                {link.to.startsWith("/#") ? (<Link to={link.to} onClick={() => handleNavClick(link.to)} className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"/>
                  </Link>) : (<Link to={link.to} className={`relative text-sm font-medium transition-colors group ${location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"}`}>
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"}`}/>
                  </Link>)}
              </li>))}
          </ul>
          <div className="flex items-center gap-3 border-l border-border/50 pl-6">
            {socialLinks.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-accent transition-colors duration-200">
                <s.icon size={16}/>
              </a>))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground relative z-50" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center z-40">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (<motion.li key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.1 }}>
                  {link.to.startsWith("/#") ? (<Link to={link.to} onClick={() => handleNavClick(link.to)} className="text-3xl font-heading font-bold text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>) : (<Link to={link.to} className={`text-3xl font-heading font-bold transition-colors ${location.pathname === link.to ? "text-primary" : "text-foreground hover:text-primary"}`}>
                      {link.label}
                    </Link>)}
                </motion.li>))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 mt-12">
              {socialLinks.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-accent transition-colors">
                  <s.icon size={22}/>
                </a>))}
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </header>);
};
export default Navbar;
