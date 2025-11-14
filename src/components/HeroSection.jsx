import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- Optimized Background Glows ---
// Using simpler CSS animation for continuous, less CPU-intensive background movement
const BackgroundGlows = () => (
  <>
    <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-glow-slow-1 pointer-events-none" />
    <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-glow-slow-2 pointer-events-none" />
    {/* Tailwind CSS keyframes for optimized glows */}
    <style jsx>{`
      @keyframes glow-slow-1 {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(20px, -30px) scale(1.05); }
        66% { transform: translate(-10px, 10px) scale(0.95); }
      }
      @keyframes glow-slow-2 {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
        33% { transform: translate(-15px, 20px) rotate(30deg) scale(1.03); }
        66% { transform: translate(10px, -10px) rotate(-20deg) scale(0.97); }
      }
      .animate-glow-slow-1 {
        animation: glow-slow-1 25s infinite ease-in-out;
      }
      .animate-glow-slow-2 {
        animation: glow-slow-2 30s infinite ease-in-out;
      }
    `}</style>
  </>
);

const HeroSection = ({ siteName = "Novaspark AI" }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }, // Slightly reduced stagger duration
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Increased y for more noticeable entry
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const robotPodiumVariants = {
    initial: { opacity: 0, scale: 0.8, y: 50 }, // Added y for a subtle lift-up effect
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  // Naye holographic cards ke liye data
  const holographicFeatures = [
    { icon: Cpu, title: "AI Core", position: "absolute top-[15%] -left-12 sm:top-[20%] sm:-left-10", delay: 0.6 },
    { icon: ShieldCheck, title: "Secure Learning", position: "absolute top-[50%] -right-14 sm:top-[55%] sm:-right-12", delay: 0.8 },
    { icon: TrendingUp, title: "Skill Growth", position: "absolute bottom-[15%] -left-6 sm:bottom-[20%] sm:-left-4", delay: 1.0 },
  ];
  
  // Floating card animation refined for better performance:
  // Use 'y' for GPU-accelerated transforms and simpler keyframes
  const floatingCardMotion = (i) => ({
    y: ["0%", "8%", "0%"], // Using percentage for relative movement
    transition: {
      duration: 5 + i * 0.5, // Slightly vary duration
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.3 // Stagger initial delay
    }
  });


  return (
    <section className="relative w-full bg-slate-950 flex items-center justify-center overflow-hidden py-24 sm:py-32 lg:py-0 min-h-[calc(100vh-80px)]"> {/* Added min-h for better layout on smaller screens */}
      {/* Video Background */}
      {/* Preload and use object-cover. Keeping opacity low helps performance */}
      <video
        src="/videos/13510979_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Add preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 md:opacity-15 pointer-events-none" // Reduced opacity slightly, added pointer-events-none
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-slate-900/95 pointer-events-none" /> {/* Increased overlay opacity */}
      <BackgroundGlows />

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 h-full lg:h-[700px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left pt-12 lg:pt-0" // Added padding for better mobile spacing
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white drop-shadow-md"
            >
              Shape the Future with
              <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500"> {/* Updated gradient */}
                AI-Driven Learning
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 font-light"
            >
              Master in-demand skills in AI, Cybersecurity, and more through our 
              next-generation educational platform.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-lg hover:from-cyan-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-fuchsia-600/30 rounded-full"> {/* Enhanced button style */}
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content (Robot on a Podium) */}
          <motion.div
            className="relative h-full flex items-center justify-center py-10 lg:py-0" // Added padding for mobile
            variants={robotPodiumVariants}
            initial="initial"
            animate="animate"
          >
            {/* Podium Circle - Size increased */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px]"> {/* Slightly adjusted sizes */}
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-50"/> {/* Adjusted colors and opacity */}
              {/* Glass Podium */}
              <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-md rounded-full border border-slate-700"/>
              
              {/* Robot Image */}
              <motion.img 
                src="/robot.png" // Aapki robot image
                alt="AI Robot Assistant"
                className="absolute inset-0 w-full h-full object-contain scale-[0.85] sm:scale-90 lg:scale-100 drop-shadow-2xl" // Adjusted scale to fit better
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Holographic Feature Cards */}
              {holographicFeatures.map((feature, i) => (
                <motion.div
                    key={feature.title}
                    className={`${feature.position} hidden sm:flex items-center gap-3 p-3 bg-slate-800/60 backdrop-blur-sm rounded-lg border-l-2 border-cyan-400 shadow-xl`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: i % 2 === 0 ? 20 : -20 }} // Initial position for better entry
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      y: 0, 
                      ...floatingCardMotion(i) // Apply the floating animation
                    }}
                    transition={{ duration: 0.6, delay: feature.delay, ease: "easeOut" }}
                >
                    <feature.icon className="h-6 w-6 text-cyan-300" />
                    <span className="font-bold text-sm text-white whitespace-nowrap">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;