import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import ibrahimPhoto from "@/assets/ibrahim-photo.jpg";
const Hero = () => {
    return (<section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow"/>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]"/>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28 md:py-32">
          {/* Text */}
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-mono text-sm tracking-widest uppercase text-accent mb-6">
              Professional Freelance Graphic Designer
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="heading-xl text-foreground mb-6 leading-[0.95]">
              Creative Logo
              <br />
              <span className="gradient-text">& Brand Identity</span>
              <br />
              <span className="gradient-text">Designer</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-lg">
              Modern Logos, Brand Identity, Social Media Posters & Print Design
              <span className="text-foreground font-medium"> that actually get noticed.</span>
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.85 }} className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              I'm <strong className="text-foreground">Ibrahim Mursalin</strong> — a freelance graphic designer helping brands, startups & creators grab attention in a world of 3‑second attention spans.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]">
                View My Portfolio
                <span className="inline-block transition-transform group-hover:translate-x-1">✦</span>
              </Link>
              <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm border border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                Get a Free Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img src={ibrahimPhoto} alt="Ibrahim Mursalin – Professional Freelance Graphic Designer specializing in logo design and brand identity" className="w-full h-auto object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"/>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20"/>
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-2xl border border-accent/10"/>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-scroll-hint"/>
      </motion.div>
    </section>);
};
export default Hero;
