import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Instagram, Twitter, Linkedin, Zap } from 'lucide-react';

    const Footer = ({ siteName }) => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
          <div className="container mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <Link to="/" className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 mb-4 inline-block">
                  <Zap size={28} className="mr-2 text-primary" />
                  {siteName}
                </Link>
                <p className="text-sm leading-relaxed">
                  Empowering innovation and inspiring growth through technology and motivation. Your nexus for a brighter future.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-5 text-lg">Explore</p>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/motivation" className="hover:text-primary transition-colors">Web Development</Link></li>
                  <li><Link to="/ai" className="hover:text-primary transition-colors">AI Insights</Link></li>
                  <li><Link to="/tech-trends" className="hover:text-primary transition-colors">Pragramming Languages</Link></li>
                  <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-5 text-lg">Company</p>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-5 text-lg">Connect With Us</p>
                <div className="flex space-x-5 mb-6">
                  <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-blue-600 transition-colors">
                    <Facebook size={22} />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-pink-600 transition-colors">
                    <Instagram size={22} />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-sky-500 transition-colors">
                    <Twitter size={22} />
                  </a>
                   <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-blue-700 transition-colors">
                    <Linkedin size={22} />
                  </a>
                </div>
                <p className="font-semibold text-slate-800 mb-3 text-md">Stay Updated</p>
                <form className="flex">
                  <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-l-md focus:ring-primary focus:border-primary text-slate-700 placeholder-slate-400" />
                  <button type="submit" className="bg-gradient-to-r from-primary to-purple-600 text-white px-5 py-2.5 text-sm rounded-r-md hover:opacity-90 transition-opacity font-semibold">Join</button>
                </form>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-10 text-center">
              <p className="text-sm">
                &copy; {currentYear} {siteName}. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;