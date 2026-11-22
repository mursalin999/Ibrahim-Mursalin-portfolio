import { motion } from "framer-motion";
import photoshop from "@/assets/tools/photoshop.png";
import illustrator from "@/assets/tools/illustrator.png";
import canva from "@/assets/tools/canva.png";
import capcut from "@/assets/tools/capcut.png";
import aiTools from "@/assets/tools/ai.png";
const tools = [
    { name: "Adobe Photoshop", img: photoshop },
    { name: "Adobe Illustrator", img: illustrator },
    { name: "Canva", img: canva },
    { name: "CapCut", img: capcut },
    { name: "AI Tools", img: aiTools },
];
const Tools = () => {
    return (<section id="tools" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            My Toolkit
          </p>
          <h2 className="heading-lg text-foreground">
            Tools & <span className="gradient-text">Software</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The professional design stack I use every day to bring brands, posters, and motion graphics to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((t, i) => (<motion.div key={t.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="glass-card rounded-xl p-5 text-center hover:border-primary/30 hover:glow-primary transition-all duration-500">
              <div className="w-16 h-16 mx-auto flex items-center justify-center mb-3">
                <img src={t.img} alt={`${t.name} logo`} width={64} height={64} loading="lazy" className="w-full h-full object-contain"/>
              </div>
              <p className="text-sm text-foreground font-medium leading-tight">{t.name}</p>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default Tools;
