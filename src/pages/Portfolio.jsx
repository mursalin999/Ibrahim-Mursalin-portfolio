import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";
import SignalField from "@/components/signal/SignalField";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import logo1 from "@/assets/portfolio/logo-1.jpg";
import logo2 from "@/assets/portfolio/logo-2.jpg";
import logo3 from "@/assets/portfolio/logo-3.jpg";
import logo4 from "@/assets/portfolio/logo-4.png";
import logo5 from "@/assets/portfolio/logo-5.jpg";
import logo6 from "@/assets/portfolio/logo-6.jpg";
import logo7 from "@/assets/portfolio/logo-7.jpg";
import logo8 from "@/assets/portfolio/logo-8.jpg";
import logo9 from "@/assets/portfolio/logo-9.jpg";
import logosGrid from "@/assets/portfolio/logos-grid.png";
import tshirtGrid1 from "@/assets/portfolio/tshirt-grid-1.jpg";
import tshirtGrid2 from "@/assets/portfolio/tshirt-grid-2.jpg";
import tshirtGrid3 from "@/assets/portfolio/tshirt-grid-3.jpg";
import bookShowcase1 from "@/assets/portfolio/book-showcase-1.png";
import bookShowcase2 from "@/assets/portfolio/book-showcase-2.jpg";
import bookShowcase3 from "@/assets/portfolio/book-showcase-3.jpg";
import bookPodium1 from "@/assets/portfolio/book-podium-1.jpg";
import bookPodium2 from "@/assets/portfolio/book-podium-2.jpg";
import bookPodium3 from "@/assets/portfolio/book-podium-3.jpg";
import thumbnail1 from "@/assets/portfolio/thumbnail-1.png";
import thumbnail2 from "@/assets/portfolio/thumbnail-2.png";
import thumbnail3 from "@/assets/portfolio/thumbnail-3.png";
import thumbnail4 from "@/assets/portfolio/thumbnail-4.jpg";
import thumbnail5 from "@/assets/portfolio/thumbnail-5.png";
import poster1 from "@/assets/portfolio/poster-1.png";
import poster2 from "@/assets/portfolio/poster-2.png";
import poster3 from "@/assets/portfolio/poster-3.png";
import poster4 from "@/assets/portfolio/poster-4.png";
import poster5 from "@/assets/portfolio/poster-5.png";
import poster6 from "@/assets/portfolio/poster-6.png";
import poster7 from "@/assets/portfolio/poster-7.png";
import poster8 from "@/assets/portfolio/poster-8.png";
import poster9 from "@/assets/portfolio/poster-9.jpg";
import poster10 from "@/assets/portfolio/poster-10.png";
import poster11 from "@/assets/portfolio/poster-11.png";
import poster12 from "@/assets/portfolio/poster-12.jpg";
import poster13 from "@/assets/portfolio/poster-13.png";
import poster14 from "@/assets/portfolio/poster-14.png";
import poster15 from "@/assets/portfolio/poster-15.png";
import poster16 from "@/assets/portfolio/poster-16.png";
import poster17 from "@/assets/portfolio/poster-17.png";
import poster18 from "@/assets/portfolio/poster-18.png";
import poster19 from "@/assets/portfolio/poster-19.png";
import poster20 from "@/assets/portfolio/poster-20.jpeg";
import poster21 from "@/assets/portfolio/poster-21.jpg";
import poster22 from "@/assets/portfolio/poster-22.png";
import poster23 from "@/assets/portfolio/poster-23.jpg";
import poster24 from "@/assets/portfolio/poster-24.jpg";
import poster25 from "@/assets/portfolio/poster-25.jpg";
import poster27 from "@/assets/portfolio/poster-27.jpg";
import poster28 from "@/assets/portfolio/poster-28.png";
import posterJordan from "@/assets/portfolio/poster-jordan.png";
import posterDurex from "@/assets/portfolio/poster-durex.png";
import posterDrapeMemo from "@/assets/portfolio/poster-drape-memo.png";
const logoProjects = [
    { image: logo1, title: "CareerLeo – Custom Lion Mascot Logo", description: "A scholarly lion mascot with compass for a career guidance brand." },
    { image: logo2, title: "Bearkong Digital – Marketing Agency Logo", description: "Bold bear icon with rising arrow for a digital marketing agency." },
    { image: logo3, title: "Ambassador IT – Modern Lettermark Logo", description: "Clean geometric 'A' mark for an IT growth partner." },
    { image: logo4, title: "সততা সুজ – Bengali Shoe Brand Logo Design", description: "Vibrant red calligraphic logo for a Bangladeshi shoe retailer." },
    { image: logo5, title: "Baraka Enterprise – Minimal Monogram Logo", description: "Clean double-B monogram for a modern enterprise brand." },
    { image: logo6, title: "ST Shield – 3D Emblem Logo Design", description: "Bold red shield emblem with interlocking S & T letterforms." },
    { image: logo7, title: "Supreme Construction – Hexagon Logo Design", description: "Chrome hexagonal S mark with blue and red accents for a construction firm." },
    { image: logo8, title: "Xuitts Team – AI & Tech Logo Design", description: "Futuristic purple neural network logo for a machine learning team brand." },
    { image: logo9, title: "iStock Matrix – Tech Network Logo Design", description: "Futuristic blue node-network logo for a modern technology and data brand." },
    { image: logosGrid, title: "Logo Design Portfolio – Brand Marks Collection", description: "A showcase of diverse custom logos crafted for various brands and businesses.", wide: true },
];
const tshirtProjects = [
    { image: tshirtGrid1, title: "T‑Shirt Design – Retro & Nature Themes", description: "Yoga, camping, vintage car, and seasonal designs for POD sellers.", wide: true },
    { image: tshirtGrid2, title: "T‑Shirt Design – Adventure & Holiday Collection", description: "Mountains, hunting, Christmas, and Black Friday themed apparel designs.", wide: true },
    { image: tshirtGrid3, title: "T‑Shirt Design – Lifestyle & Seasonal", description: "Yoga, summer, Halloween, camping and motivational themed tee designs.", wide: true },
];
const bookProjects = [
    { image: bookShowcase1, title: "Book Cover Design – Thriller, Art & Non‑Fiction", description: "Shadows in the Rain, The Art of Silence, and Shifting Tides covers.", wide: true },
    { image: bookShowcase2, title: "Book Cover Design – Non‑Fiction & Romance", description: "Value of Time, Two Nations Theory, and Love's Crimson Hearts covers.", wide: true },
    { image: bookShowcase3, title: "Book Cover Design – Mystery & Sci‑Fi", description: "Dark forest thriller, Beyond the Horizon, and Whispers of Tomorrow.", wide: true },
    { image: bookPodium1, title: "Cabin Crew – Mystery Thriller Book Cover", description: "Crime mystery thriller trilogy cover with dark forest atmosphere." },
    { image: bookPodium2, title: "Whispers of the Heart – Romantic Novel Cover", description: "Romantic novel cover with sunset lakeside scene." },
    { image: bookPodium3, title: "Whispers of Tomorrow – Non‑Fiction Book Cover", description: "Bold feather motif cover for a journey through invisible cities." },
];
const thumbnailProjects = [
    { image: thumbnail1, title: "Military Inspection – YouTube Thumbnail Design", description: "High-impact military inspection thumbnail with bold typography and action visuals." },
    { image: thumbnail2, title: "Alerta Global – News YouTube Thumbnail", description: "Geopolitical analysis thumbnail with split-screen military imagery and bold text." },
    { image: thumbnail3, title: "Epstein Files – Documentary Thumbnail Design", description: "Dramatic investigative thumbnail with top-secret files and reaction imagery." },
    { image: thumbnail4, title: "Epstein Files Exposed – Exposé Thumbnail", description: "Courtroom-style exposé thumbnail with unsealed documents and bold headlines." },
    { image: thumbnail5, title: "Top 3 Fun Facts – Engagement Thumbnail Design", description: "Bold green and yellow fun facts thumbnail with expressive reaction imagery." },
];
const posterProjects = [
    { image: posterJordan, title: "Air Jordan 4 'Built to Fly' – Featured Poster Design", description: "Featured work — cinematic dark-mode sneaker poster with bold typography, geometric accents and premium product styling for the Air Jordan 4.", wide: true },
    { image: posterDurex, title: "Durex Bangladesh – Bengali Awareness Campaign Poster", description: "Playful Bengali-language safety awareness poster with mascot characters, vibrant product lineup and clean iconography." },
    { image: posterDrapeMemo, title: "Drape Fashion – Branded Cash Memo / Invoice Design", description: "Elegant gold and black branded cash memo template designed for Drape Fashion's retail billing." },
    { image: poster1, title: "Deshi Shik Kabab – Food Promotion Poster", description: "Vibrant food promotion poster with 30% off deal for a kabab restaurant." },
    { image: poster2, title: "Hot & Fresh Pizza – Restaurant Poster Design", description: "Fiery pizza promotion poster with bold pricing and order-now call to action." },
    { image: poster3, title: "Bubble Tea Special – Café Poster Design", description: "Refreshing bubble tea promotional poster with splashy visuals and discount badge." },
    { image: poster4, title: "Fresh Salad – Healthy Food Poster Design", description: "Clean and appetizing salad promotion poster with fresh green aesthetics." },
    { image: poster5, title: "Big Burger – Fast Food Promotion Poster", description: "Bold burger promotion poster with fiery background and 50% off badge." },
    { image: poster6, title: "Crispy Fried Chicken – Food Poster Design", description: "Sizzling fried chicken promo poster with golden tones and order-now button." },
    { image: poster7, title: "Travel Adventure – Tourism Poster Design", description: "Clean travel planning poster with personalized trip discovery and 30% off deal." },
    { image: poster8, title: "Educational Excellence – Event Poster Design", description: "Warm-toned educational conference poster with modern desk imagery and event details." },
    { image: poster9, title: "Nexora PulsePods – Product Ad Design", description: "Sleek product advertisement for wireless earbuds with pricing and feature highlights." },
    { image: poster10, title: "Home Gym – Fitness Product Ad Poster", description: "Bold fitness equipment promotion poster with 40% off deal and trust badges." },
    { image: poster11, title: "FocusFlow – SaaS Product Poster Design", description: "Tech-forward SaaS product poster with neon accents for a freelancer productivity app." },
    { image: poster12, title: "FlyHugz – Travel Bundle Product Poster", description: "Best-selling travel essentials bundle poster with clean product photography." },
    { image: poster13, title: "Royal Essence – Luxury Perfume Ad Design", description: "Premium luxury perfume advertisement poster with dramatic splash effects." },
    { image: poster14, title: "Educational Excellence – Conference Poster V2", description: "Warm-toned educational event poster with modern desk and accessibility details." },
    { image: poster15, title: "Travel Adventure – Tourism Poster V2", description: "Clean travel discovery poster with dual-image layout and 30% off badge." },
    { image: poster16, title: "Zain Global – Study Abroad Poster Design", description: "Educational agency social media poster for international admissions campaign." },
    { image: poster17, title: "Zain Global – Study Abroad Social Post V2", description: "Professional study abroad poster with world map and country flags." },
    { image: poster18, title: "Aurélia – Perfume Instagram Story Design", description: "Elegant perfume brand Instagram story with 'Find Your Signature' headline." },
    { image: poster19, title: "Aurélia – Product Social Media Post", description: "Luxury perfume product post with 'The Scent of Confidence' tagline." },
    { image: poster20, title: "Boyysen Fashion – New Arrival Banner Design", description: "Premium men's fashion banner with gold typography and seasonal collection theme." },
    { image: poster21, title: "Drape Fashion – Seasonal Collection Banner", description: "Elegant horizontal fashion banner showcasing the 2026 men's seasonal collection." },
    { image: poster22, title: "Kivahan Cafe – Special Cold Coffee Poster", description: "Vibrant cold coffee promotional poster with splashy visuals and bold pricing." },
    { image: poster23, title: "Kivahan Cafe – Brand Story Instagram Post", description: "Editorial-style cafe Instagram post with brand details and store information." },
    { image: poster24, title: "Drape Fashion – Bangla Noboborsho Poster", description: "Festive Bengali New Year fashion poster with mandala art and traditional motifs." },
    { image: poster25, title: "Men's Watch – Premium Product Ad Design", description: "Premium men's watch product poster with feature callouts and luxury aesthetic." },
    { image: poster27, title: "Fresh Pineapple Juice – Tropical Beverage Poster", description: "Vibrant tropical beverage advertisement with lush foliage, splash effects, and holiday vibes." },
    { image: poster28, title: "CR7 Cristiano Ronaldo – Sports Fan Poster Design", description: "High-energy sports poster featuring 3D typography, dynamic lighting, and Al Nassr club branding." },
];
const VideoCard = ({ project, index }) => {
    const videoRef = useRef(null);
    const [needsTap, setNeedsTap] = useState(false);
    useEffect(() => {
        const v = videoRef.current;
        if (!v)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                v.play().catch(() => setNeedsTap(true));
            }
            else {
                v.pause();
            }
        }, { threshold: 0.25 });
        observer.observe(v);
        return () => observer.disconnect();
    }, []);
    const handleTap = () => {
        const v = videoRef.current;
        if (!v)
            return;
        v.play().then(() => setNeedsTap(false)).catch(() => { });
    };
    return (<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-primary">
      <div className="relative aspect-[9/16] max-h-[500px] overflow-hidden bg-black" onClick={handleTap}>
        <video ref={videoRef} src={project.video} className="w-full h-full object-cover" muted loop playsInline autoPlay preload="metadata" controls={false}/>
        {needsTap && (<button onClick={handleTap} aria-label="Play video" className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm">
            <span className="rounded-full bg-primary text-primary-foreground p-5 shadow-lg">
              <Play className="w-8 h-8"/>
            </span>
          </button>)}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </motion.div>);
};
const videoProjects = [
    { video: "/portfolio/video-1.mp4", title: "Black Friday Sale – Motion Graphics Ad", description: "Vibrant red and black animated sale promo with bold typography and urgency-driven design." },
    { video: "/portfolio/video-2.mp4", title: "Brand Motion Graphics – Video Edit", description: "Dynamic motion graphics piece with smooth transitions and engaging visual storytelling." },
    { video: "/portfolio/video-3.mp4", title: "Product Promo – Motion Graphics Edit", description: "Sleek product promotional video with seamless transitions and dynamic motion design." },
    { video: "/portfolio/video-4.mp4", title: "Brand Story – Animated Video Ad", description: "Engaging animated brand video with smooth motion graphics and visual storytelling." },
    { video: "/portfolio/video-5.mp4", title: "Fashion Reel – Short Form Video Edit", description: "Cinematic short-form fashion reel with dynamic cuts and brand-driven storytelling." },
    { video: "/portfolio/video-6.mp4", title: "Actor in Elegant Dress – Cinematic Edit", description: "Elegant cinematic edit featuring an actor in a flowing dress with smooth color grading and motion." },
];
const PortfolioSection = ({ id, title, intro, projects, onImageClick, rationale, }) => (<section id={id} className="section-padding scroll-mt-24">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-12">
        <h2 className="heading-lg text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{intro}</p>
        {rationale && (<div className="mt-6 grid md:grid-cols-3 gap-3 max-w-4xl">
            {[
            ["Communication goal", rationale.goal],
            ["Target audience", rationale.audience],
            ["Design decisions", rationale.decisions],
        ].map(([k, v]) => (<div key={k} className="panel rounded-lg p-4">
                <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-primary mb-1.5">
                  {k}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{v}</p>
              </div>))}
          </div>)}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (<motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`group glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-primary ${project.wide ? "sm:col-span-2 lg:col-span-3" : ""}`}>
            <button type="button" onClick={() => onImageClick(project)} aria-label={`View ${project.title} full size`} className={`relative overflow-hidden block w-full cursor-zoom-in ${project.wide ? "aspect-video" : "aspect-square"}`}>
              <img src={project.image} alt={`${project.title} by Ibrahim Mursalin`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
              <span className="pointer-events-none select-none absolute bottom-2 right-2 z-10 text-[9px] md:text-[10px] font-medium tracking-wider uppercase text-white/60 mix-blend-overlay drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] font-mono">
                © Ibrahim Mursalin
              </span>
            </button>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </motion.div>))}
      </div>
    </div>
  </section>);
const Portfolio = () => {
    const location = useLocation();
    const [lightboxProject, setLightboxProject] = useState(null);
    const openLightbox = (project) => setLightboxProject(project);
    const closeLightbox = () => setLightboxProject(null);
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
            }
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return (<div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio – Ibrahim Mursalin, Graphic Designer</title>
        <meta name="description" content="Selected work by Ibrahim Mursalin: logos, brand identity, t-shirts, book covers, posters, YouTube thumbnails & motion graphics."/>
        <link rel="canonical" href="https://ibrahimmursalin.pro.bd/portfolio"/>
        <meta property="og:title" content="Portfolio – Ibrahim Mursalin, Graphic Designer"/>
        <meta property="og:description" content="Selected work by Ibrahim Mursalin: logos, brand identity, t-shirts, book covers, posters, YouTube thumbnails & motion graphics."/>
        <meta property="og:url" content="https://ibrahimmursalin.pro.bd/portfolio"/>
      </Helmet>
      <AppNav />
      <div className="pt-20 relative">
        <div className="section-padding pb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <SignalField variant="ambient"/>
          </div>
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
                Destination 02 · Graphic Design
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                Marks, posters &<br />
                <span className="text-primary">motion.</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Browse my complete collection of logo designs, social media posters, t-shirt graphics, book covers, YouTube thumbnails & motion graphics projects.
              </p>
            </motion.div>
          </div>
        </div>

        <PortfolioSection id="social-media-poster" title="Social Media Poster & Ad Design" intro="Scroll‑stopping social media posters, product advertisements, promotional graphics and banner designs for brands, restaurants, SaaS products and e-commerce businesses." projects={posterProjects} onImageClick={openLightbox} rationale={{
            goal: "Stop the scroll in under a second, then hold attention long enough to communicate one offer or one idea.",
            audience: "Mobile-first consumers on Instagram, Facebook and TikTok — mostly Bengali and English-reading young adults.",
            decisions: "High-contrast focal typography, colour-coded urgency cues, generous negative space and product photography treated as hero rather than decoration.",
        }}/>

        <div className="bg-secondary/30">
          <section id="video-editing" className="section-padding scroll-mt-24">
            <div className="container mx-auto max-w-6xl">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-12">
                <h2 className="heading-lg text-foreground mb-3">
                  Video Editing & Motion Graphics
                </h2>
                <p className="text-muted-foreground max-w-2xl">Engaging motion graphics, animated ads, and video edits that bring brands to life with dynamic storytelling and smooth transitions.</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videoProjects.map((project, i) => (<VideoCard key={project.title} project={project} index={i}/>))}
              </div>
            </div>
          </section>
        </div>

        <PortfolioSection id="logo-design" title="Logo Design & Brand Marks" intro="Modern, minimal, and memorable custom logo designs for startups, small businesses, and personal brands. Each mark is custom‑built to fit the client's story and audience." projects={logoProjects} onImageClick={openLightbox} rationale={{
            goal: "Compress a brand's story into a mark that survives shrinking to a favicon and scaling to a billboard.",
            audience: "Founders and small-business owners who need immediate recognition and long-term equity in one shape.",
            decisions: "Geometric construction over trend, restrained palette, custom letterforms where a typeface would feel generic, and legibility tested at 16px first.",
        }}/>

        <div className="bg-secondary/30">
          <PortfolioSection id="tshirt-design" title="T‑Shirt & Apparel Design" intro="From bold streetwear to clean typography, I create print‑ready t‑shirt designs for clothing brands, influencers, and print‑on‑demand sellers." projects={tshirtProjects} onImageClick={openLightbox} rationale={{
            goal: "Turn a wearer into a walking statement — the design has to earn its place on someone's chest.",
            audience: "Print-on-demand shoppers browsing Amazon Merch, Redbubble and Etsy across the US and EU.",
            decisions: "Compositional balance for chest-print zones, a single dominant colour per shirt, and typography chosen for silhouette rather than novelty.",
        }}/>
        </div>

        <PortfolioSection id="ebook-cover-design" title="Ebook & Book Cover Design" intro="Professional book covers for Amazon KDP, Kindle, and print that match your genre and speak to your readers — fiction, non-fiction & self-help." projects={bookProjects} onImageClick={openLightbox} rationale={{
            goal: "Signal genre and tone in a Kindle thumbnail — before the reader ever reads the title.",
            audience: "KDP browsers scanning grids of covers on a phone, plus print buyers holding the book at arm's length.",
            decisions: "Genre-honest typography, tonal colour grading over decoration, and a single legible focal image that still reads at 200×300 px.",
        }}/>

        <div className="bg-secondary/30">
          <PortfolioSection id="thumbnail-design" title="YouTube Thumbnail Design" intro="Eye‑catching, click‑worthy YouTube thumbnails designed to boost views, CTR and engagement for YouTubers and content creators." projects={thumbnailProjects} onImageClick={openLightbox} rationale={{
            goal: "Win the click within a crowded browse row without lying about what the video actually delivers.",
            audience: "Global YouTube viewers scanning suggested-videos rails on mobile and TV screens.",
            decisions: "Faces first, three-word headlines, saturated hero colour paired with dark background, and a clear visual promise that the video pays off.",
        }}/>
        </div>
      </div>
      <AppFooter />
      <ImageLightbox open={!!lightboxProject} src={lightboxProject?.image ?? null} alt={lightboxProject ? `${lightboxProject.title} by Ibrahim Mursalin` : undefined} title={lightboxProject?.title} onClose={closeLightbox}/>
    </div>);
};
export default Portfolio;
