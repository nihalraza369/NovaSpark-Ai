import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowDownCircle, Lightbulb, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bgImage =
  'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-1220-622f-8b48-e5a91794d945/raw?se=2025-06-01T09%3A43%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=6dbf0aca-ae92-5995-9fa5-d3e56a19b1dd&skoid=789f404f-91a9-4b2f-932c-c44965c11d82&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-01T08%3A41%3A29Z&ske=2025-06-02T08%3A41%3A29Z&sks=b&skv=2024-08-04&sig=2FknIX2ceTWnuJiy5Xm6XEtuxrIdBEtEi8QoSEf99Oc%3D';

const HeroSection = ({ siteName }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-slate-800 overflow-hidden px-6 py-16 md:py-24 bg-white">
      {/* Background Animated Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [30, -30, 30], y: [15, -15, 15], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <img
              src={bgImage}
              alt="AI Visual"
              className="w-full max-w-md z-10 relative"
            />
            <div className="absolute inset-0 rounded-xl bg-purple-300 blur-2xl opacity-30 group-hover:opacity-50 transition" />
          </div>
        </motion.div>

        {/* Text and CTA Buttons */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-900 to-pink-500">
              {siteName}
            </h1>
            <Zap
              size={64}
              className="absolute -top-6 -right-10 text-purple-800 animate-pulse"
            />
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Igniting Potential. Exploring Tomorrow's Technology.
            <br />
            Your Nexus for Growth and Innovation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Link to="/motivation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 text-white hover:brightness-110"
              >
                Get Inspired <Lightbulb className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/ai">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore AI <Cpu className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <ArrowDownCircle
          size={40}
          className="text-slate-400 animate-bounce cursor-pointer hover:text-primary"
          onClick={() =>
            document
              .getElementById('featured-content')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
