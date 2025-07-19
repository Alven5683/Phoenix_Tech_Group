import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutUs from './pages/AboutUs';
import Policies from './pages/Policies';
import PortfolioPage from './pages/PortfolioPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ProjectEstimator from './pages/ProjectEstimator';

function App() {
  // Inject Crisp Chat on component mount
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '9064a1d5-0a03-4c32-916c-b2990148cb84';

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Optional cleanup if needed (usually not required for Crisp)
      // document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/AboutUs" element={<Navigate to="/about" replace />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
        <Route path="/project-estimator" element={<ProjectEstimator />} />
      </Routes>
    </div>
  );
}

export default App;



