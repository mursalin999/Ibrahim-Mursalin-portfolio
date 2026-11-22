import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import logo1 from "@/assets/portfolio/logo-1.jpg";
import logo2 from "@/assets/portfolio/logo-2.jpg";
import tshirtGrid1 from "@/assets/portfolio/tshirt-grid-1.jpg";
import bookPodium1 from "@/assets/portfolio/book-podium-1.jpg";
import poster13 from "@/assets/portfolio/poster-13.png";
import poster11 from "@/assets/portfolio/poster-11.png";
import thumbnail1 from "@/assets/portfolio/thumbnail-1.png";
import poster16 from "@/assets/portfolio/poster-16.png";
const featured = [
    { image: logo1, title: "CareerLeo – Custom Mascot Logo", category: "Logo Design", anchor: "#logo-design" },
    { image: poster13, title: "Royal Essence – Luxury Product Ad", category: "Social Media Poster", anchor: "#social-media-poster" },
    { image: tshirtGrid1, title: "Retro & Nature T‑Shirt Collection", category: "T-Shirt Design", anchor: "#tshirt-design" },
    { image: bookPodium1, title: "Mystery Thriller Book Cover", category: "Book Cover Design", anchor: "#ebook-cover-design" },
    { image: poster11, title: "FocusFlow – SaaS Product Poster", category: "Social Media Poster", anchor: "#social-media-poster" },
    { image: thumbnail1, title: "Military Inspection Thumbnail", category: "YouTube Thumbnail", anchor: "#thumbnail-design" },
    { image: logo2, title: "Bearkong Digital – Growth Logo", category: "Logo Design", anchor: "#logo-design" },
    { image: poster16, title: "Zain Global – Education Poster", category: "Social Media Poster", anchor: "#social-media-poster" },
];
const FeaturedWork = () => {
    const [lightbox, setLightbox] = useState(null);
    return (<section id="work" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"/>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            Selected Design Projects
          </p>
          <h2 className="heading-lg text-foreground">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated selection of logos, social media posters, book covers & apparel designs crafted for clients worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, i) => (<motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-primary">
              <button type="button" onClick={() => setLightbox(item)} aria-label={`View ${item.title} full size`} className="aspect-square overflow-hidden relative block w-full cursor-zoom-in">
                <img src={item.image} alt={`${item.title} by Ibrahim Mursalin – ${item.category}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <span className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={14}/>
                </span>
                <span className="pointer-events-none select-none absolute bottom-2 right-2 z-10 text-[9px] font-medium tracking-wider uppercase text-white/60 mix-blend-overlay drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] font-mono">
                  © Ibrahim Mursalin
                </span>
              </button>
              <Link to={`/portfolio${item.anchor}`} className="block p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-1">
                  {item.category}
                </p>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {item.title}
                </h3>
              </Link>
            </motion.div>))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-14">
          <Link to="/portfolio" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]">
            View Full Portfolio
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
          </Link>
        </motion.div>
      </div>
      <ImageLightbox open={!!lightbox} src={lightbox?.image ?? null} alt={lightbox ? `${lightbox.title} by Ibrahim Mursalin – ${lightbox.category}` : undefined} title={lightbox?.title} onClose={() => setLightbox(null)}/>
    </section>);
};
export default FeaturedWork;
