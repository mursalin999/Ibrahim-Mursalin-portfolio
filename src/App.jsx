import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Development from "./pages/Development";
import ProjectDetail from "./pages/ProjectDetail";
import ResearchPage from "./pages/ResearchPage";
import Journey from "./pages/Journey";
import Achievements from "./pages/Achievements";
import AchievementDetail from "./pages/AchievementDetail";
import AchievementGallery from "./pages/AchievementGallery";
import NotFound from "./pages/NotFound";
import { useImageProtection } from "./hooks/use-image-protection";
const queryClient = new QueryClient();
const App = () => {
    useImageProtection();
    return (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/graphic-design" element={<Portfolio />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/development" element={<Development />}/>
          <Route path="/development/:id" element={<ProjectDetail />}/>
          <Route path="/research" element={<ResearchPage />}/>
          <Route path="/journey" element={<Journey />}/>
          <Route path="/achievements" element={<Achievements />}/>
          <Route path="/achievements-gallery" element={<AchievementGallery />}/>
          <Route path="/achievements/gallery" element={<Navigate to="/achievements-gallery" replace />}/>
          <Route path="/achievements/:id" element={<AchievementDetail />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
};
export default App;
