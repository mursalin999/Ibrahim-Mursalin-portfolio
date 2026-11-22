import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
const links = [
    { label: "About", to: "/" },
    { label: "Journey", to: "/journey" },
    { label: "Graphic Design", to: "/graphic-design" },
    { label: "Web & App", to: "/development" },
    { label: "Research", to: "/research" },
    { label: "Achievements", to: "/achievements" },
    { label: "Gallery", to: "/achievements-gallery" },
    { label: "Publications", to: "/#publications" },
];
export default function AppNav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const on = () => setScrolled(window.scrollY > 16);
        on();
        window.addEventListener("scroll", on);
        return () => window.removeEventListener("scroll", on);
    }, []);
    useEffect(() => setOpen(false), [location]);
    return (<header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open
            ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"}`}>
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_theme(colors.primary.DEFAULT)]">
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70"/>
          </span>
          <span className="font-heading text-base md:text-lg font-bold tracking-tight text-foreground">
            Ibrahim Mursalin
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (<li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) => `relative px-3 lg:px-3.5 py-2 text-sm rounded-md transition-colors ${isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"}`}>
                {({ isActive }) => (<>
                    {l.label}
                    {isActive && (<span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-px bg-primary shadow-[0_0_8px_theme(colors.primary.DEFAULT)]"/>)}
                  </>)}
              </NavLink>
            </li>))}
        </ul>

        <a href="mailto:ibrahimmursalin766@gmail.com" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.28em] uppercase text-primary hover:text-foreground transition-colors">
          Contact ↗
        </a>

        <button className="md:hidden text-foreground relative z-50" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </nav>

      {open && (<div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <ul className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (<li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) => `block px-3 py-3 rounded-md text-base font-medium ${isActive
                    ? "text-primary bg-primary/10"
                    : "text-foreground/90 hover:bg-secondary"}`}>
                  {l.label}
                </NavLink>
              </li>))}
            <li className="pt-2 mt-2 border-t border-border/60">
              <a href="mailto:ibrahimmursalin766@gmail.com" className="block px-3 py-3 font-mono text-xs tracking-[0.25em] uppercase text-primary">
                Contact ↗
              </a>
            </li>
          </ul>
        </div>)}
    </header>);
}
