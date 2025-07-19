import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutUs from './pages/AboutUs';
import Policies from './pages/Policies';
import PortfolioPage from './pages/PortfolioPage';
import CaseStudyPage from './pages/CaseStudyPage';

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
