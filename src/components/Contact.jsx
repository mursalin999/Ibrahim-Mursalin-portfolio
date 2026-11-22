import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Clock, Globe } from "lucide-react";
const projectTypes = [
    "Logo / Brand Identity",
    "T‑Shirt Design",
    "Ebook Cover",
    "YouTube Thumbnail",
    "Social Media Poster",
    "Other",
];
const budgetRanges = [
    "Under $500",
    "$500 – $1,000",
    "$1,000 – $2,500",
    "$2,500+",
];
const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (<section id="contact" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none"/>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-3">
            Get in Touch
          </p>
          <h2 className="heading-lg text-foreground">
            Let's Create{" "}
            <span className="gradient-text">Something Amazing</span>
          </h2>
        </motion.div>

        {submitted ? (<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-xl p-12 text-center max-w-md mx-auto glow-primary">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-5">
              <Send className="text-primary" size={24}/>
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Message Sent!
            </h3>
            <p className="text-muted-foreground">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
          </motion.div>) : (<div className="grid lg:grid-cols-5 gap-10">
            {/* Info side */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Have a project in mind? Let's talk about how we can make your brand unforgettable.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Email</p>
                    <p className="text-sm text-muted-foreground">ibrahimmursalin766@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-accent"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe size={18} className="text-primary"/>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Available For</p>
                    <p className="text-sm text-muted-foreground">Worldwide Remote</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form side */}
            <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} onSubmit={handleSubmit} className="lg:col-span-3 glass-card rounded-xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" required className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" placeholder="Your name"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" placeholder="you@email.com"/>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-project-type" className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
                  <select id="contact-project-type" name="projectType" required className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                    <option value="">Select a type</option>
                    {projectTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-budget-range" className="block text-sm font-medium text-foreground mb-1.5">Budget Range (optional)</label>
                  <select id="contact-budget-range" name="budgetRange" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                    <option value="">Select range</option>
                    {budgetRanges.map((b) => (<option key={b} value={b}>{b}</option>))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea required rows={5} className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all" placeholder="Tell me about your project..."/>
              </div>

              <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.01]">
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1"/>
              </button>
            </motion.form>
          </div>)}
      </div>
    </section>);
};
export default Contact;
