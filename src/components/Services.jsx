import { motion } from "framer-motion";
import { Palette, Shirt, BookOpen, Image, Video, Youtube, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const services = [
    {
        icon: Palette,
        title: "Logo & Brand Identity Design",
        description: "Custom logo design, wordmarks, monograms & complete brand identity systems that make your business instantly recognizable.",
        anchor: "#logo-design",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        icon: Shirt,
        title: "T‑Shirt & Apparel Graphics",
        description: "Streetwear, typography & print‑on‑demand ready t-shirt designs for clothing brands, influencers & merch stores.",
        anchor: "#tshirt-design",
        gradient: "from-accent/20 to-accent/5",
    },
    {
        icon: BookOpen,
        title: "Ebook & Book Cover Design",
        description: "Professional book covers for Amazon KDP, Kindle & print editions — fiction, non-fiction & self-help genres.",
        anchor: "#ebook-cover-design",
        gradient: "from-primary/15 to-accent/10",
    },
    {
        icon: Image,
        title: "Social Media Poster Design",
        description: "Scroll-stopping social media graphics, promotional posters, product ads & banner designs for brands & businesses.",
        anchor: "#social-media-poster",
        gradient: "from-accent/15 to-primary/10",
    },
    {
        icon: Youtube,
        title: "YouTube Thumbnail Design",
        description: "Eye-catching, click-worthy YouTube thumbnails designed to boost views, CTR & engagement for content creators.",
        anchor: "#thumbnail-design",
        gradient: "from-primary/20 to-accent/5",
    },
    {
        icon: Video,
        title: "Video Editing & Motion Graphics",
        description: "Engaging motion graphics, animated ads & video edits that bring your brand story to life with dynamic visuals.",
        anchor: "#video-editing",
        gradient: "from-accent/20 to-primary/10",
    },
];
const Services = () => {
    return (<section id="services" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none"/>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            Graphic Design Services
          </p>
          <h2 className="heading-lg text-foreground">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From logo creation to social media marketing materials — I deliver professional graphic design solutions tailored to your brand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (<motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <Link to={`/portfolio${service.anchor}`} className="group block glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-500 hover:glow-primary h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={22} className="text-primary"/>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"/>
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default Services;
