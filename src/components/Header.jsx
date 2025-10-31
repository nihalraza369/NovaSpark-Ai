import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Zap, LogIn, ChevronDown, TrendingUp, Brain, BookOpen, Settings, ArrowRight, UserPlus, Code, Server, Database, GitBranch, UploadCloud, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ siteName = "Novaspark" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll par header ko hide/show karne ka effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = 'translateY(-100%)'; // Scroll down
      } else {
        header.style.transform = 'translateY(0)'; // Scroll up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);
  
  // Mobile menu open hone par body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const navigationItems = {
    webDev: {
      label: "Web Development",
      icon: Code,
      href: "/web-development",
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
      href: "/ai-insights",
      suggestions: [
        { title: "AI Trends", desc: "Latest AI developments", href: "/ai/trends", icon: TrendingUp },
        { title: "Machine Learning", desc: "ML fundamentals", href: "/ai/ml-basics", icon: Brain },
        { title: "AI Tools", desc: "Boost productivity", href: "/ai/tools", icon: Wrench },
        { title: "AI in Business", desc: "Industry transformation", href: "/ai/business", icon: Settings },
      ]
    },
    // Aap yahan aur items add kar sakte hain
  };

  const staticLinks = [
    { label: "Courses", href: "/courses" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" }
  ];

  const DropdownMenu = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 mt-3 w-[28rem] bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden"
    >
      <div className="p-5 grid grid-cols-2 gap-x-6 gap-y-4">
        {item.suggestions.map((suggestion) => (
          <a key={suggestion.title} href={suggestion.href} className="group flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-gray-100 rounded-lg mr-4">
              <suggestion.icon className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{suggestion.title}</h4>
              <p className="text-sm text-gray-500">{suggestion.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 transition-transform duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Main Nav */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <Zap size={28} className="text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">{siteName}</span>
            </a>
            
            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(navigationItems).map(([key, item]) => (
                <div key={key} className="relative" onMouseEnter={() => setActiveDropdown(key)} onMouseLeave={() => setActiveDropdown(null)}>
                  <a href={item.href} className="flex items-center px-4 py-2 text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
                    {item.label}
                    <ChevronDown size={18} className={`ml-1 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </a>
                  <AnimatePresence>
                    {activeDropdown === key && <DropdownMenu item={item} />}
                  </AnimatePresence>
                </div>
              ))}
              {staticLinks.map(link => (
                <a key={link.label} href={link.href} className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href="/login" className="px-5 py-2 text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              <div className='flex items-center'>
                <LogIn size={16} className="mr-2" /> Login
              </div>
            </a>
            <a href="/signup">
              <button className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm hover:shadow-md">
                <UserPlus size={16} className="mr-2" /> Sign Up
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-gray-700 hover:bg-gray-100 rounded-md">
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
            className="lg:hidden fixed inset-0 z-50 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b">
                <span className="text-xl font-bold text-gray-800">{siteName}</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <X size={24} />
                </button>
              </div>

              <nav className="p-5 flex flex-col space-y-2">
                {Object.values(navigationItems).map(item => (
                   <a key={item.label} href={item.href} className="p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-50">{item.label}</a>
                ))}
                {staticLinks.map(link => (
                   <a key={link.label} href={link.href} className="p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-50">{link.label}</a>
                ))}
              </nav>

              <div className="absolute bottom-0 left-0 w-full p-5 border-t">
                 <div className="flex flex-col space-y-3">
                    <a href="/login" className="w-full text-center px-5 py-3 text-gray-600 font-medium bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      Login
                    </a>
                    <a href="/signup" className="w-full text-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Sign Up
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