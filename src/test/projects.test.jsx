import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Development from "@/pages/Development";
import ProjectDetail from "@/pages/ProjectDetail";
import { projects } from "@/data/projects";

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
          <Route path="/development" element={<Development />} />
          <Route path="/development/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe("Projects & Web Apps — TerraFlux integration", () => {
  it("renders BaySentinel, DesignLens, and TerraFlux on /development with detail links", () => {
    renderAt("/development");
    expect(screen.getByRole("heading", { level: 3, name: /BaySentinel/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /DesignLens/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /TerraFlux/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Environmental Technology · NASA Space Apps Challenge/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Burning Activity Calendar for exploring fire activity over time/i)
    ).toBeInTheDocument();

    const detailLinks = screen.getAllByRole("link", { name: /View project details/i });
    const hrefs = detailLinks.map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/development/baysentinel");
    expect(hrefs).toContain("/development/designlens");
    expect(hrefs).toContain("/development/terraflux");
  });

  it("renders the TerraFlux project-detail view with key features and all 8 UI/UX screenshots", () => {
    const { container } = renderAt("/development/terraflux");
    expect(screen.getByRole("heading", { level: 1, name: /^TerraFlux$/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Integration of MODIS and VIIRS \(NOAA-20\) active fire observations/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Unified presentation of satellite fire detection data/i)
    ).toBeInTheDocument();

    const terraFlux = projects.find((p) => p.id === "terraflux");
    expect(terraFlux?.screenshots).toHaveLength(8);
    const imgSrcs = Array.from(container.querySelectorAll("img")).map((img) =>
      img.getAttribute("src")
    );
    for (const shot of terraFlux.screenshots) {
      expect(imgSrcs).toContain(shot.src);
    }
  });
});
