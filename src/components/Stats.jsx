import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Clock, FileText, Rocket } from "lucide-react";
const stats = [
    { icon: Clock, value: 4, suffix: "+", label: "Years of Experience" },
    { icon: Briefcase, value: 250, suffix: "+", label: "Design Projects Delivered" },
    { icon: FileText, value: 1, suffix: "", label: "Published Thesis on Zenodo" },
    { icon: Rocket, value: 2, suffix: "", label: "Shipped Product Apps" },
];
const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                const duration = 1600;
                const start = performance.now();
                const tick = (t) => {
                    const p = Math.min(1, (t - start) / duration);
                    setCount(Math.floor(end * (1 - Math.pow(1 - p, 3))));
                    if (p < 1)
                        requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            }
        }, { threshold: 0.4 });
        io.observe(el);
        return () => io.disconnect();
    }, [end]);
    return (<span ref={ref}>
      {count}
      {suffix}
    </span>);
};
const Stats = () => {
    return (<section id="stats" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            By the Numbers
          </p>
          <h2 className="heading-lg text-foreground">
            Trusted Worldwide, <span className="gradient-text">Built in Bangladesh</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-500">
              <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-primary"/>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1">
                <Counter end={s.value} suffix={s.suffix}/>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{s.label}</p>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default Stats;
