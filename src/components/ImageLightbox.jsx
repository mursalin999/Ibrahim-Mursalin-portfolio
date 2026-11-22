import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const ImageLightbox = ({ open, src, alt, title, onClose }) => {
    useEffect(() => {
        if (!open)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open, onClose]);
    return (<AnimatePresence>
      {open && src && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 sm:p-8" onClick={onClose} role="dialog" aria-modal="true" aria-label={title || "Image preview"}>
          <button type="button" onClick={onClose} aria-label="Close preview" className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2.5 rounded-full bg-card/80 border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <X size={20}/>
          </button>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={src} alt={alt || title || "Portfolio preview"} className="max-w-[95vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none" draggable={false}/>
              <span className="pointer-events-none select-none absolute bottom-3 right-3 text-[11px] sm:text-xs font-medium tracking-wider uppercase text-white/70 mix-blend-overlay drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-mono">
                © Ibrahim Mursalin
              </span>
            </div>
            {title && (<p className="font-heading text-sm sm:text-base text-foreground text-center max-w-xl px-2">
                {title}
              </p>)}
          </motion.div>
        </motion.div>)}
    </AnimatePresence>);
};
export default ImageLightbox;
