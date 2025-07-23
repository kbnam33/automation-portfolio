import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import { CaseStudy } from "./screens/CaseStudy/CaseStudy";
import { CaseStudySalesCoach } from "./screens/CaseStudySalesCoach/CaseStudySalesCoach";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Ensure all 'element' props are wrapped in curly braces */}
        <Route path="/" element={<Desktop />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/ai-sales-coach" element={<CaseStudySalesCoach />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
