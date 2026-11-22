import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
const testimonials = [
    {
        quote: "Working with Ibrahim was a turning point for Drape Fashion. He understood our brand vision instantly and delivered posters and seasonal campaigns that genuinely raised our standard. His designs feel premium, modern, and rooted in the message we want to send to our customers. He is reliable, creative, and treats every project as if it were his own.",
        name: "Syed Ahteshamul Alam",
        role: "Founder & CEO, Drape Fashion",
    },
];
const Testimonials = () => {
    return (<section id="testimonials" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            Client Words
          </p>
          <h2 className="heading-lg text-foreground">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (<motion.figure key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="glass-card rounded-2xl p-8 md:p-10 relative hover:border-primary/30 transition-all duration-500">
              <Quote className="absolute top-6 right-6 text-primary/20" size={48}/>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (<Star key={idx} size={16} className="fill-primary text-primary"/>))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed text-base md:text-lg mb-6 italic">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>))}
        </div>
      </div>
    </section>);
};
export default Testimonials;
