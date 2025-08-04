import React, { useState, useEffect } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { Menu, X, Search, Zap, LogIn } from 'lucide-react';
    import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";

    const Header = ({ siteName, navLinks }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isSearchOpen, setIsSearchOpen] = useState(false);
      const [isHidden, setIsHidden] = useState(false);
      const { scrollY } = useScroll();

      useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150 && !isMobileMenuOpen) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      });
      
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) setIsHidden(false);
      };
      const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

      const defaultNavLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
      ];

      const currentNavLinks = navLinks || defaultNavLinks;

      return (
        <motion.header
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={isHidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="sticky top-3 z-50 rounded-full ml-12 mr-12 bg-purple-600 backdrop-blur-lg shadow-sm border-b border-slate-200"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="inline-block bg-white rounded-xl px-1 py-2 group">
              <div className="flex items-center text-2xl md:text-3xl font-bold text-black bg-clip-text bg-gradient-to-r from-primary via-purple-900 to-pink-900 hover:opacity-80 transition-opacity">
                <Zap size={32} className="mr-2 text-black transform group-hover:scale-110 transition-transform duration-300" />
                {siteName}
                </div>
              </Link>

              <nav className="hidden lg:flex space-x-5 items-center">
                {currentNavLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className={({ isActive }) =>
                      `text-slate-600 hover:text-primary transition-colors duration-300 font-medium text-white relative group ${isActive ? "text-primary" : ""}`
                    }
                  >
                    {link.label}
                    <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                     {({ isActive }) => isActive && <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary scale-x-100 transition-transform duration-300 origin-left"></span>}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <motion.div
                  initial={false}
                  animate={{ width: isSearchOpen ? 160 : 0, opacity: isSearchOpen ? 1 : 0, marginRight: isSearchOpen ? '0.5rem' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden sm:block overflow-hidden"
                >
                  {isSearchOpen && (
                     <Input type="search" placeholder="Search..." className="h-9 bg-slate-100 border-slate-300 text-slate-700 focus:border-primary focus:ring-primary placeholder-slate-500" />
                  )}
                </motion.div>
                <Button variant="ghost" size="icon" onClick={toggleSearch} className="text-slate-600 text-white hover:text-primary hover:bg-slate-100">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="text-black  hidden sm:inline-flex">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </Link>
                
                <div className="lg:hidden">
                  <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-slate-600 hover:text-primary hover:bg-slate-100">
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                className="sm:hidden py-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Input type="search" placeholder="Search..." className="w-full h-10 bg-slate-100 border-slate-300 text-slate-700 focus:border-primary focus:ring-primary placeholder-slate-500" />
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 z-40 border-t border-slate-200 overflow-y-auto max-h-[calc(100vh-5rem)]"
              >
                <nav className="flex flex-col space-y-1 px-4">
                  {currentNavLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.href}
                      className={({ isActive }) =>
                        `block py-3 text-slate-700 hover:text-primary hover:bg-slate-100 rounded-md px-3 font-medium text-base transition-colors duration-300 ${isActive ? "text-primary bg-slate-100" : ""}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <Link to="/login" className="mt-2">
                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogIn className="mr-2 h-4 w-4" /> Login
                    </Button>
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      );
    };

    export default Header;