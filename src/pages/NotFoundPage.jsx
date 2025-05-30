import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { AlertTriangle, Home } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AlertTriangle size={80} className="text-destructive mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-4">404</h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 mb-6">Page Not Found</h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto mb-10">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 shadow-lg">
                <Home className="mr-2 h-5 w-5" />
                Go Back Home
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="absolute bottom-0 left-0 w-full h-32 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 61.3301C0 61.3301 300.793 135.342 720 61.3301C1139.21 -12.6818 1440 61.3301 1440 61.3301V120H0V61.3301Z" fill="hsl(var(--primary))"/>
            </svg>
          </motion.div>
        </div>
      );
    };

    export default NotFoundPage;