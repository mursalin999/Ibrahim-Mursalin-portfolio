import { Flame, Sparkles, Waves } from "lucide-react";

export const appImages = {
  baySentinelIcon: "/images/apps/baysentinel-icon.jpg",
  designLensIcon: "/images/apps/designlens-icon.jpg",
  baySentinelLiveMap: "/images/projects/baysentinel-live-map.jpg",
  baySentinelHome: "/images/projects/baysentinel-home.jpg",
  baySentinelReport: "/images/projects/baysentinel-report.jpg",
  baySentinelImpact: "/images/projects/baysentinel-impact.jpg",
  baySentinelAbout: "/images/projects/baysentinel-about.jpg",
  designLensCritique: "/images/projects/designlens-critique.jpg",
  designLensScoreDashboard: "/images/projects/designlens-score-dashboard.jpg",
  designLensResearchAbout: "/images/projects/designlens-research-about.jpg",
  terraFluxHero: "/assets/aistudio/Screenshot_20261122-173501_1_fd51f7d8.jpg",
  terraFluxCalendarMatrix: "/assets/aistudio/Screenshot_20261122-173748_1_a6d2cc54.jpg",
  terraFluxExploreHeatmap: "/assets/aistudio/Screenshot_20261122-173706_1_a6a71378.jpg",
  terraFluxExploreTimeline: "/assets/aistudio/Screenshot_20261122-173719_1_a42f19df.jpg",
  terraFluxDivergence: "/assets/aistudio/Screenshot_20261122-173923_1_f0d3645d.jpg",
  terraFluxGridSensitivity: "/assets/aistudio/Screenshot_20261122-173933_1_d1cda467.jpg",
  terraFluxMethodology: "/assets/aistudio/Screenshot_20261122-173950_1_22ae4a8f.jpg",
  terraFluxAbout: "/assets/aistudio/Screenshot_20261122-174007_1_22394a9a.jpg",
};

export const projects = [
  {
    id: "baysentinel",
    eyebrow: "01 · Climate · SDG 13 & 14",
    category: "Climate · SDG 13 & 14",
    name: "BaySentinel",
    tagline:
      "Mapping ghost fishing gear and coastal ecosystem vulnerabilities across the Bay of Bengal and Bangladesh's coastline.",
    problem:
      "Ghost fishing gear silently kills marine life across the Bay of Bengal, but there is no accessible public map of where it accumulates, who reports it, or how it correlates with tide, storm and fleet activity along Bangladesh's coastline. Environmental agencies and volunteer cleanup teams work blind.",
    approach:
      "An open-access dashboard that ingests community-reported sightings, overlays them onto coastal geography, and surfaces spatial patterns for conservation crews. Built as a live intervention aligned with UN SDG 13 (climate action) and SDG 14 (life below water) — not a research prototype.",
    stack: [
      "React",
      "TypeScript",
      "Interactive Maps",
      "Spatial Data Visualization",
      "Ecosystem Monitoring",
      "Tailwind",
    ],
    outcome: [
      "Public dashboard live and open for evaluation",
      "Structured for volunteer-submitted incident reports",
      "Framework portable to other coastal regions in South Asia",
    ],
    live: "https://baysentinel.pro.bd",
    icon: Waves,
    logo: appImages.baySentinelIcon,
    accent: "primary",
    screenshots: [
      { src: appImages.baySentinelLiveMap, title: "Live Ghost-Gear Map dashboard", ratio: "portrait" },
      { src: appImages.baySentinelHome, title: "Home — Making the invisible ocean crisis visible", ratio: "portrait" },
      { src: appImages.baySentinelReport, title: "Report Ghost Gear — no account needed", ratio: "portrait" },
      { src: appImages.baySentinelImpact, title: "Impact — The Ghost-Gear Crisis explainer", ratio: "portrait" },
      { src: appImages.baySentinelAbout, title: "About — Mission & team", ratio: "portrait" },
    ],
    extended: {
      whyBangladesh:
        "Bangladesh has one of the world's most productive but least-monitored coastlines. Millions of livelihoods depend on the Bay of Bengal, yet ghost-gear accumulation is largely undocumented and public marine data is scarce.",
      prototype:
        "A lightweight, low-bandwidth citizen-science web app: fishermen, students and NGO volunteers can submit a ghost-gear sighting in under a minute, no account required. Reports are geo-tagged, timestamped and rendered onto a public map.",
      limits:
        "Reports are currently self-verified — no field validation yet. Classification of gear type relies on the reporter. Coverage is thin outside major coastal districts.",
      futureResearch:
        "ML-assisted gear-type classification from submitted imagery; correlation with tidal and storm data; a longitudinal study measuring whether public visibility changes cleanup frequency.",
      collaboration:
        "Actively looking to partner with marine biologists, coastal-NGO field teams and HCI researchers working on citizen-science interfaces for the Global South.",
    },
  },
  {
    id: "designlens",
    eyebrow: "02 · AI · HCI · Education",
    category: "AI · HCI · Education",
    name: "DesignLens",
    version: "V2",
    tagline:
      "AI-powered design critique that stands in for scarce human mentorship — backed by a peer-archived research thesis.",
    problem:
      "Junior and self-taught designers in low-resource contexts rarely get access to experienced mentors. Generic AI feedback is shallow. There was no persona-driven, formatively-grounded critique tool built specifically for them.",
    approach:
      "A vision-LLM orchestration pipeline translating computer vision into deterministic, persona-driven critique protocols — the Mentor, the Art Director and the UX Reviewer — each scaffolded by formative assessment theory. Product decisions are directly informed by an empirical study conducted in Bangladesh.",
    stack: [
      "Vision-LLM API",
      "React",
      "Tailwind CSS",
      "Formative Assessment Architecture",
      "Prompt Orchestration",
    ],
    outcome: [
      "+25.6 pts mean improvement on a 100-point design rubric (n=12)",
      "Thesis archived on Zenodo — CERN's open research repository",
      "V2 deployment live and openly evaluable",
    ],
    live: "https://designlens-v1.lovable.app",
    icon: Sparkles,
    logo: appImages.designLensIcon,
    accent: "secondary",
    screenshots: [
      { src: appImages.designLensCritique, title: "DesignLens — AI critique workspace", ratio: "portrait" },
      { src: appImages.designLensScoreDashboard, title: "Score Dashboard — rubric tracking over time", ratio: "portrait" },
      { src: appImages.designLensResearchAbout, title: "Research page — study details and researcher context", ratio: "portrait" },
    ],
  },
  {
    id: "terraflux",
    eyebrow: "03 · Environmental Technology · NASA Space Apps Challenge",
    category: "Environmental Technology · NASA Space Apps Challenge",
    name: "TerraFlux",
    tagline:
      "TerraFlux aims to bring NASA satellite-based active fire observations into a unified, accessible view by combining fire detections from MODIS and VIIRS (NOAA-20) datasets.",
    description:
      "TerraFlux is an environmental data visualization project developed for the NASA Space Apps Challenge. It brings satellite-based active fire observations from NASA's FIRMS datasets into a unified format, helping users explore fire activity across different satellite sources. Its core concept also includes a Burning Activity Calendar to make temporal fire patterns easier to understand and explore.",
    problem:
      "Active fire records from NASA's MODIS (1 km) and VIIRS (375 m, NOAA-20) satellite instruments use different spatial resolutions, formats, and overpass schedules, making cross-sensor comparison and seasonal pattern analysis difficult for students, researchers, and local analysts.",
    approach:
      "TerraFlux brings NASA FIRMS satellite-based active fire observations from MODIS and VIIRS (NOAA-20) into a unified analytical interface with a 3D globe and 2D map explorer, cross-sensor agreement analysis, and a Burning Activity Calendar for exploring temporal fire patterns clearly.",
    stack: [
      "NASA FIRMS",
      "MODIS & VIIRS (NOAA-20)",
      "React",
      "Three.js / react-globe.gl",
      "Leaflet",
      "Recharts",
      "Supabase",
    ],
    keyFeatures: [
      "Integration of MODIS and VIIRS (NOAA-20) active fire observations.",
      "Unified presentation of satellite fire detection data.",
      "Burning Activity Calendar for exploring fire activity over time.",
      "Accessible visualization of environmental satellite data.",
    ],
    outcome: [
      "Integration of MODIS and VIIRS (NOAA-20) active fire observations",
      "Unified presentation of satellite fire detection data",
      "Burning Activity Calendar for exploring fire activity over time",
      "Accessible visualization of environmental satellite data",
    ],
    icon: Flame,
    accent: "secondary",
    screenshots: [
      {
        src: appImages.terraFluxHero,
        title: "TerraFlux — Two satellites. One analytical view.",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxCalendarMatrix,
        title: "Burning Activity Calendar — Monthly observation matrix",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxExploreHeatmap,
        title: "Explore Workspace — 3D Globe & calendar heatmap",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxExploreTimeline,
        title: "Explore Workspace — 3D Globe & thermal activity timeline",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxDivergence,
        title: "Cross-Sensor Resolution — Instrument divergence analysis",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxGridSensitivity,
        title: "Grid Sensitivity & daily detections by sensor",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxMethodology,
        title: "Methodology — Harmonization workflow & epistemic boundaries",
        ratio: "portrait",
      },
      {
        src: appImages.terraFluxAbout,
        title: "About TerraFlux — Provenance & NASA FIRMS attribution",
        ratio: "portrait",
      },
    ],
    extended: {
      coreConcept:
        "TerraFlux brings NASA FIRMS satellite detections from MODIS and VIIRS (NOAA-20) into a unified analytical framework so users can inspect spatial distributions, compare cross-sensor agreement, and track temporal patterns without learning two separate data formats.",
      burningCalendar:
        "The Burning Activity Calendar organizes monthly and daily satellite thermal anomaly counts across 2020–2026 into an accessible visual matrix, making seasonal cycles and unusual spikes easier to explore.",
      scientificBoundaries:
        "Designed strictly as an environmental data visualization and exploratory tool grounded in stored NASA FIRMS records — clearly distinguishing satellite thermal anomalies from confirmed ground fires.",
    },
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
