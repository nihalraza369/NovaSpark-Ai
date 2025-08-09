import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Zap, LogIn, ChevronDown, TrendingUp, Brain, BookOpen, Settings, ArrowRight } from 'lucide-react';

const Header = ({ siteName = "YourBrand" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isMobileMenuOpen) {
        setIsHidden(true);
        setActiveDropdown(null);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const navigationItems = {
    motivation: {
      label: "Motivation",
      icon: TrendingUp,
      href: "/motivation",
      suggestions: [
        { title: "Daily Motivation Quotes", desc: "Start your day with inspiring quotes", href: "/motivation/quotes" },
        { title: "Success Stories", desc: "Real stories of achievement", href: "/motivation/stories" },
        { title: "Goal Setting Guide", desc: "How to set and achieve your goals", href: "/motivation/goals" },
        { title: "Personal Development", desc: "Transform your mindset", href: "/motivation/development" },
        { title: "Morning Routines", desc: "Routines of successful people", href: "/motivation/routines" },
        { title: "Overcoming Challenges", desc: "Turn obstacles into opportunities", href: "/motivation/challenges" },
        { title: "Productivity Hacks", desc: "Get more done in less time", href: "/motivation/productivity" },
        { title: "Mental Strength", desc: "Build unshakeable confidence", href: "/motivation/strength" }
      ]
    },
    aiInsights: {
      label: "AI Insights",
      icon: Brain,
      href: "/ai-insights",
      suggestions: [
        { title: "Latest AI Trends", desc: "Stay updated with AI developments", href: "/ai/trends" },
        { title: "AI Tools Review", desc: "Best AI tools for productivity", href: "/ai/tools" },
        { title: "Machine Learning Basics", desc: "Understanding ML fundamentals", href: "/ai/ml-basics" },
        { title: "AI in Business", desc: "How AI transforms industries", href: "/ai/business" },
        { title: "ChatGPT & AI Assistants", desc: "Guide to AI chatbots", href: "/ai/chatbots" },
        { title: "AI Image Generation", desc: "Create art with AI", href: "/ai/image-generation" }
      ]
    },
    techTrends: {
      label: "Tech Trends",
      icon: BookOpen,
      href: "/tech-trends",
      suggestions: [
        { title: "Web Development", desc: "Latest in web technologies", href: "/tech/web-dev" },
        { title: "Mobile Apps", desc: "Mobile development trends", href: "/tech/mobile" },
        { title: "Cloud Computing", desc: "Cloud technologies and services", href: "/tech/cloud" },
        { title: "Cybersecurity", desc: "Protecting digital assets", href: "/tech/security" },
        { title: "Blockchain & Crypto", desc: "Decentralized technologies", href: "/tech/blockchain" },
        { title: "Internet of Things", desc: "Connected devices ecosystem", href: "/tech/iot" }
      ]
    },
    services: {
      label: "Services",
      icon: Settings,
      href: "/services",
      suggestions: [
        { title: "Consulting", desc: "Expert guidance for your business", href: "/services/consulting" },
        { title: "Development", desc: "Custom software solutions", href: "/services/development" },
        { title: "Design", desc: "Creative design services", href: "/services/design" },
        { title: "Support", desc: "24/7 technical support", href: "/services/support" },
        { title: "Marketing", desc: "Digital marketing solutions", href: "/services/marketing" },
        { title: "Training", desc: "Professional training programs", href: "/services/training" }
      ]
    }
  };

  const staticLinks = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" }
  ];

  const handleMouseEnter = (key) => {
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsHidden(false);
      setActiveDropdown(null);
    }
  };

  return (
    <header
      className={`sticky  z-50 mx-4 lg:mx-8 xl:mx-12 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-blue-600/95 backdrop-blur-xl shadow-lg border border-blue-500/30 rounded-full"> 
        <div className="container mx-auto px-4 sm:px-2 lg:px-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <div className="flex items-center bg-white text-black rounded-xl px-1 py-3 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Zap size={32} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl font-bold">{siteName}</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(navigationItems).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href={item.href}
                    className="flex items-center px-5 py-3 text-white hover:text-blue-200 font-medium rounded-lg hover:bg-white/10 transition-all duration-200 group text-lg"
                  >
                    <item.icon size={20} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                    {item.label}
                    <ChevronDown size={18} className={`ml-1 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </a>

                  {/* Dropdown Menu */}
                  {activeDropdown === key && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 opacity-100 scale-100 transition-all duration-200">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <item.icon size={20} className="mr-2 text-blue-600" />
                          {item.label}
                        </h3>
                        <div className="grid gap-2">
                          {item.suggestions.map((suggestion, index) => (
                            <a
                              key={index}
                              href={suggestion.href}
                              className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    {suggestion.title}
                                  </h4>
                                  <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{suggestion.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Static Links */}
              {staticLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-5 py-3 text-white hover:text-blue-200 font-medium rounded-lg hover:bg-white/10 transition-all duration-200 text-lg"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="hidden sm:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Login Button */}
              <a href="/login">
                <button className="hidden sm:flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                  <LogIn size={18} className="mr-2" />
                  Login
                </button>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="p-4 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {Object.entries(navigationItems).map(([key, item]) => (
                    <div key={key}>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                        className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center">
                          <item.icon size={18} className="mr-3" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === key && (
                        <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          {item.suggestions.map((suggestion, index) => (
                            <a
                              key={index}
                              href={suggestion.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {suggestion.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Login */}
                <a href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="flex items-center justify-center w-full px- py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium">
                    <LogIn size={18} className="mr-2" />
                    Login
                  </button>
                </a>
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;