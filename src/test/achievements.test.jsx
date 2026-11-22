import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "@/pages/Index";
import Achievements from "@/pages/Achievements";
import AchievementDetail from "@/pages/AchievementDetail";
import AchievementGallery from "@/pages/AchievementGallery";
import { achievementGalleryTimeline } from "@/data/achievements";

vi.mock("@/components/signal/SignalField", () => ({
  default: () => <div data-testid="signal-field-mock" />,
}));

beforeEach(() => {
  window.scrollTo = vi.fn();
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

function renderAt(initialRoute) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements-gallery" element={<AchievementGallery />} />
          <Route path="/achievements/:id" element={<AchievementDetail />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe("Achievements & Gallery integration", () => {
  it("renders the two compact achievement previews and Gallery nav link on the homepage", () => {
    renderAt("/");
    expect(screen.getAllByText(/Atlântia International STEM Olympiad/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Lumiere Scholars Essay Award/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /Explore achievements/i })).toHaveAttribute("href", "/achievements");
    expect(screen.getByRole("link", { name: /Image gallery/i })).toHaveAttribute("href", "/achievements-gallery");
    expect(screen.getByRole("link", { name: /^Gallery$/i })).toHaveAttribute("href", "/achievements-gallery");
  });

  it("renders Recognition & Achievements with both new achievements and preserved older milestones", () => {
    renderAt("/achievements");
    expect(screen.getByText(/Gold Medal — Atlântia International STEM Olympiad 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/30% Merit Scholarship — Lumiere Scholars Essay Award/i)).toBeInTheDocument();
    expect(screen.getByText(/From National Runner-Up to/i)).toBeInTheDocument();
    expect(screen.getAllByText(/International Innovation Competition/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/World Sustainable Development Goals Challenge/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/FIDE Arena Candidate Master/i).length).toBeGreaterThan(0);
  });

  it("renders the Atlântia 2026 detail view with verified details and Bay Sentinel link", () => {
    renderAt("/achievements/atlantia-stem-olympiad-2026");
    expect(
      screen.getByRole("heading", { level: 1, name: /Gold Medal — Atlântia International STEM Olympiad 2026/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Russian House, Dhaka, Bangladesh/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/19 November 2026/i).length).toBeGreaterThan(0);
    const projectLink = screen.getByRole("link", { name: /Visit Bay Sentinel/i });
    expect(projectLink).toHaveAttribute("href", "https://baysentinel.pro.bd");
  });

  it("renders the Lumiere Scholars Essay Award detail view with reflection and verified quote", () => {
    renderAt("/achievements/lumiere-scholars-essay-2026");
    expect(
      screen.getByRole("heading", { level: 1, name: /30% Merit Scholarship — Lumiere Scholars Essay Award/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Cancer by 2050: Eliminated, or Manageable\?/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/What I Learned/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Humanity's greatest achievement may be less about making cancer disappear/i)
    ).toBeInTheDocument();
  });

  it("renders /achievements-gallery timeline with all 14 uploaded images, IIC placeholder, and working year filters", () => {
    const { container } = renderAt("/achievements-gallery");
    expect(screen.getByRole("heading", { level: 1, name: /Certificates & event gallery/i })).toBeInTheDocument();

    // Verify year filter buttons exist
    const allBtn = screen.getByRole("button", { name: /^All$/i });
    const btn2026 = screen.getByRole("button", { name: /^2026$/i });
    const btn2025 = screen.getByRole("button", { name: /^2025$/i });
    expect(allBtn).toBeInTheDocument();
    expect(btn2026).toBeInTheDocument();
    expect(btn2025).toBeInTheDocument();

    // Verify all 14 uploaded /assets/aistudio/ images render in the gallery (including WSDG replacement & 4 chess events)
    const expectedImages = achievementGalleryTimeline
      .flatMap((group) => group.items)
      .map((item) => item.image)
      .filter(Boolean);
    expect(expectedImages).toHaveLength(14);
    expect(expectedImages).toContain("/assets/aistudio/Screenshot_20261122-171643_1_427a0c61.jpg");
    expect(expectedImages).not.toContain("/assets/aistudio/photo_of_me_798e61e6.jpg");

    const renderedSrcs = Array.from(container.querySelectorAll("img")).map((img) =>
      img.getAttribute("src")
    );
    for (const src of expectedImages) {
      expect(renderedSrcs).toContain(src);
    }

    // Verify editable placeholder renders for IIC 2026
    expect(screen.getByText(/Image Placeholder/i)).toBeInTheDocument();
    expect(screen.getByText(/IIC 2026 Certificate \/ Photo Placeholder/i)).toBeInTheDocument();

    // Verify year filtering works cleanly
    fireEvent.click(btn2025);
    expect(screen.getByText(/FIDE Arena Candidate Master \(ACM\) — Official Diploma/i)).toBeInTheDocument();
    expect(screen.getByText(/Mymensingh DSO Interschool Rapid Rating Chess — Trophy/i)).toBeInTheDocument();
    expect(screen.getByText(/NHSPC 2025 Chess Competition — Stage Award/i)).toBeInTheDocument();
    expect(screen.getByText(/NHSPC 2025 Chess Event — Gold Medalists/i)).toBeInTheDocument();
    expect(screen.getByText(/Mymensingh Youth Chess Championship — Runners-Up \(U-16\)/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Atlântia International STEM Olympiad — Gold Medal Ceremony/i)
    ).not.toBeInTheDocument();

    fireEvent.click(btn2026);
    expect(
      screen.getByText(/Atlântia International STEM Olympiad — Gold Medal Ceremony/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/FIDE Arena Candidate Master \(ACM\) — Official Diploma/i)
    ).not.toBeInTheDocument();

    fireEvent.click(allBtn);
    expect(
      screen.getByText(/Atlântia International STEM Olympiad — Gold Medal Ceremony/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/FIDE Arena Candidate Master \(ACM\) — Official Diploma/i)).toBeInTheDocument();
  });
});
