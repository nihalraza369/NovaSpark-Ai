import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { Toaster } from "@/components/ui/toaster";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import HomePage from "@/pages/HomePage";
    import AboutPage from "@/pages/AboutPage";
    import ServicesPage from "@/pages/ServicesPage";
    import BlogPage from "@/pages/BlogPage";
    import ContactPage from "@/pages/ContactPage";
    import LoginPage from "@/pages/LoginPage";
    import NotFoundPage from "@/pages/NotFoundPage";
    import AiPage from "@/pages/AiPage";
    import TechTrendsPage from "@/pages/TechTrendsPage";
    import MotivationPage from "@/pages/MotivationPage";

    function App() {
      const siteName = "NovaSpark";
      const navLinks = [
        { href: "/", label: "Home" },
        { href: "/motivation", label: "Motivation" },
        { href: "/ai", label: "AI Insights" },
        { href: "/tech-trends", label: "Tech Trends" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ];

      return (
        <Router>
          <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans overflow-x-hidden">
            <Header siteName={siteName} navLinks={navLinks} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage siteName={siteName} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/ai" element={<AiPage />} />
                <Route path="/tech-trends" element={<TechTrendsPage />} />
                <Route path="/motivation" element={<MotivationPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer siteName={siteName} />
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;