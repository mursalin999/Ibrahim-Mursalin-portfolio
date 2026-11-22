import { motion } from "framer-motion";
import ibrahimPhoto from "@/assets/ibrahim-photo.jpg";
const skills = [
    "Logo Design",
    "Brand Identity",
    "Social Media Posters",
    "Apparel Graphics",
    "Book Covers",
    "YouTube Thumbnails",
    "Motion Graphics",
    "Print Design",
];
const About = () => {
    return (<section id="about" className="section-padding relative noise-overlay">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            About Me
          </p>
          <h2 className="heading-lg text-foreground">
            Who's behind <span className="gradient-text">the pixels?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img src={ibrahimPhoto} alt="Ibrahim Mursalin – Professional Freelance Graphic Designer based in Bangladesh" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
              </div>
              <div className="absolute -z-10 -bottom-3 -left-3 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-sm"/>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-3 space-y-6">
            <p className="text-xl md:text-2xl font-heading font-semibold text-foreground leading-snug">
              Visual Storyteller.{" "}
              <span className="gradient-text">Pixel Perfectionist.</span>{" "}
              Full‑time Designer.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm <strong className="text-foreground">Ibrahim Mursalin</strong>, a professional freelance graphic designer based in Bangladesh with <strong className="text-foreground">3–4 years of hands‑on experience</strong> serving local brands and now actively expanding to clients worldwide. I help brands stop the scroll — because in a world of 3‑second attention spans, a bad design is the fastest way to lose a customer.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in <strong className="text-foreground">modern logo design, brand identity, social media poster design, t-shirt graphics, book covers & motion graphics</strong>. My style is clean, trendy, and human‑centric. I don't just "make things pretty" — I solve real problems visually so your brand can grow, sell, and be remembered.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I work daily in <strong className="text-foreground">Adobe Photoshop, Adobe Illustrator, Canva, CapCut</strong> and modern <strong className="text-foreground">AI tools</strong> — combining classic design fundamentals with the latest creative tech. Every project gets unlimited revisions until you're 100% happy, fast communication, and on‑time delivery. I treat your brand like it's my own.
            </p>

            <p className="text-lg font-heading font-medium gradient-text">
              Let's create something cool together.
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill, i) => (<motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.06 }} className="px-4 py-1.5 rounded-full text-xs font-medium border border-border bg-secondary text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-200">
                  ✦ {skill}
                </motion.span>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};
export default About;
