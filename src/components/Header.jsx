import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Zap, LogIn, ChevronDown, TrendingUp, Brain, BookOpen, Settings, ArrowRight, UserPlus, Code, Server, Database, GitBranch, UploadCloud, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ siteName = "NovaSpark" }) => { // Changed default siteName for consistency
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll-based styling

  // Scroll par header ko hide/show karne ka effect aur border-radius change
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const headerElement = document.querySelector('header');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header hide/show logic
      if (!isMobileMenuOpen) { // Only apply hide/show when mobile menu is closed
        if (currentScrollY > lastScrollY && currentScrollY > 80) { // Scroll down
          headerElement.style.transform = 'translateY(-100%)';
        } else { // Scroll up
          headerElement.style.transform = 'translateY(0)';
        }
      }
      lastScrollY = currentScrollY;

      // Scroll-based styling (e.g., border-radius, shadow)
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]); // Dependency on isMobileMenuOpen

  // Mobile menu open hone par body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount
    };
  }, [isMobileMenuOpen]);

  const navigationItems = {
    webDev: {
      label: "Web Development",
      icon: Code,
      href: "/web-development", // Changed href for clarity
      suggestions: [
        { title: "Frontend", desc: "Crafting user interfaces", href: "/webdev/frontend", icon: Code },
        { title: "Backend", desc: "Powering server-side logic", href: "/webdev/backend", icon: Server },
        { title: "Database", desc: "Managing your data", href: "/webdev/database", icon: Database },
        { title: "Version Control", desc: "Collaborate with Git", href: "/webdev/git", icon: GitBranch },
        { title: "Deployment", desc: "Go live with your app", href: "/webdev/deployment", icon: UploadCloud },
        { title: "Tools", desc: "Essential dev resources", href: "/webdev/tools", icon: Wrench },
      ]
    },
    aiInsights: {
      label: "AI Insights",
      icon: Brain,
      href: "/ai-insights", // Changed href for clarity
      suggestions: [
        { title: "AI Trends", desc: "Latest AI developments", href: "/ai/trends", icon: TrendingUp },
        { title: "Machine Learning", desc: "ML fundamentals", href: "/ai/ml-basics", icon: Brain },
        { title: "AI Tools", desc: "Boost productivity", href: "/ai/tools", icon: Wrench },
        { title: "AI in Business", desc: "Industry transformation", href: "/ai/business", icon: Settings },
      ]
    },
    programming: { // Changed key to lowercase for consistency
      label: "Programming Languages",
      icon: Code, // Changed icon from Brain to Code for Programming
      href: "/programming-languages", // Changed href for clarity
      suggestions: [
        { title: "Python", desc: "Versatile and powerful", href: "/programming/python", icon: Brain }, // Icon changed to Brain for Python specific focus
        { title: "JavaScript", desc: "Web's core language", href: "/programming/javascript", icon: Code },
        { title: "C++", desc: "High-performance systems", href: "/programming/cpp", icon: Wrench }, // Changed href, icon
        { title: "PHP", desc: "Server-side scripting", href: "/programming/php", icon: Server }, // Changed href, icon
        { title: "C#", desc: "Microsoft ecosystems", href: "/programming/csharp", icon: Settings }, // Changed href, icon
        { title: "Java", desc: "Enterprise applications", href: "/programming/java", icon: Database }, // Changed href, icon
      ]
    },
  };

  const staticLinks = [
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" }
  ];

  const DropdownMenu = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: -5 }} // Slightly adjusted initial animation
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[30rem] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100/70 overflow-hidden p-6" // Enhanced dropdown styling
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {item.suggestions.map((suggestion) => (
          <a
            key={suggestion.title}
            href={suggestion.href}
            className="group flex items-start p-3 -m-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mr-4 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-200"> {/* Enhanced icon background */}
              <suggestion.icon className="text-blue-600 group-hover:text-blue-700" size={20} /> {/* Icon color on hover */}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{suggestion.title}</h4>
              <p className="text-sm text-gray-500 mt-0.5">{suggestion.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg rounded-b-2xl md:rounded-b-3xl' // Scrolled state
        : 'bg-transparent' // Initial state
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Main Nav */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2 group">
              <Zap size={28} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-200" />
              <span className="text-2xl font-bold text-gray-800">{siteName}</span>
            </a>
            
            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(navigationItems).map(([key, item]) => (
                <div key={key} className="relative" onMouseEnter={() => setActiveDropdown(key)} onMouseLeave={() => setActiveDropdown(null)}>
                  <a href={item.href} className="flex items-center px-4 py-2 text-gray-700 font-medium hover:text-blue-700 hover:bg-blue-50/70 rounded-lg transition-all duration-200">
                    {item.label}
                    <ChevronDown size={18} className={`ml-1 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180 text-blue-700' : ''}`} />
                  </a>
                  <AnimatePresence>
                    {activeDropdown === key && <DropdownMenu item={item} />}
                  </AnimatePresence>
                </div>
              ))}
              {staticLinks.map(link => (
                <a key={link.label} href={link.href} className="px-4 py-2 text-gray-700 font-medium hover:text-blue-700 hover:bg-blue-50/70 rounded-lg transition-all duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3"> {/* Increased space */}
            <a href="/login" className="flex items-center px-5 py-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 group">
              <LogIn size={18} className="mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" /> Login
            </a>
            <a href="/signup">
              <button className="flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"> {/* Enhanced button style */}
                <UserPlus size={18} className="mr-2" /> Sign Up
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/50" // Darker overlay
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }} // Changed ease
              className="absolute top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl flex flex-col" // Added flex-col
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-100">
                <a href="/" className="flex items-center space-x-2">
                  <Zap size={24} className="text-blue-600" />
                  <span className="text-xl font-bold text-gray-800">{siteName}</span>
                </a>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  <X size={24} />
                </button>
              </div>

              <nav className="p-5 flex flex-col space-y-2 flex-grow overflow-y-auto"> {/* Added flex-grow and overflow-y-auto */}
                {Object.values(navigationItems).map(item => (
                   <a key={item.label} href={item.href} className="p-3 text-lg font-medium text-gray-700 rounded-lg hover:bg-blue-50/70 hover:text-blue-700 transition-colors duration-200">{item.label}</a>
                ))}
                {staticLinks.map(link => (
                   <a key={link.label} href={link.href} className="p-3 text-lg font-medium text-gray-700 rounded-lg hover:bg-blue-50/70 hover:text-blue-700 transition-colors duration-200">{link.label}</a>
                ))}
              </nav>

              <div className="w-full p-5 border-t border-gray-100">
                 <div className="flex flex-col space-y-3">
                    <a href="/login" className="w-full text-center px-5 py-3 text-gray-700 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                      Login
                    </a>
                    <a href="/signup">
                      <button className="w-full text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-md">
                        Sign Up
                      </button>
                    </a>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;