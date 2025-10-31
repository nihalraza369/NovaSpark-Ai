import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have this from ShadCN UI

// Background mein aahista se ghoomne wali glowing shapes
const BackgroundGlows = () => (
  <>
    <motion.div
      className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      animate={{ 
        x: [-20, 20, -20], 
        scale: [1, 1.1, 1] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
      animate={{ 
        y: [15, -15, 15], 
        rotate: [0, 90, 0] 
      }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
    />
  </>
);

const HeroSection = ({ siteName = "Novaspark AI" }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const robotPodiumVariants = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  // Naye holographic cards ke liye data
  const holographicFeatures = [
    { icon: Cpu, title: "AI Core", position: "absolute top-[20%] -left-10" },
    { icon: ShieldCheck, title: "Secure Learning", position: "absolute top-[55%] -right-12" },
    { icon: TrendingUp, title: "Skill Growth", position: "absolute bottom-[20%] -left-4" },
  ];
  
  const floatingCardVariant = {
      animate: (i) => ({
      y: [-8 + i, 8 - i, -8 + i],
      transition: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" }
    })
  };

  return (
    <section className="relative w-full bg-slate-950 flex items-center justify-center overflow-hidden py-24 sm:py-32 lg:py-0">
      {/* Video Background */}
      <video
        src="/videos/13510979_3840_2160_30fps.mp4" // Sahi path yahan dein
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-slate-900/90" />
      <BackgroundGlows />

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 h-full lg:h-[700px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
            >
              Shape the Future with
              <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                AI-Driven Learning
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0"
            >
              Master in-demand skills in AI, Cybersecurity, and more through our 
              next-generation educational platform.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-white text-slate-900 font-bold text-base hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/10">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content (Robot on a Podium) */}
          <motion.div
            className="relative h-full flex items-center justify-center"
            variants={robotPodiumVariants}
            initial="initial"
            animate="animate"
          >
            {/* Podium Circle - Size increased */}
            <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 blur-2xl opacity-40"/>
              {/* Glass Podium */}
              <div className="absolute inset-0 bg-slate-800/30 backdrop-blur-md rounded-full border border-slate-700"/>
              
              {/* Robot Image */}
              <motion.img 
                src="/robot.png" // Aapki robot image
                alt="AI Robot Assistant"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Holographic Feature Cards */}
              {holographicFeatures.map((feature, i) => (
                <motion.div
                    key={feature.title}
                    className={`${feature.position} hidden sm:flex items-center gap-3 p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border-l-2 border-cyan-400 shadow-lg`}
                    custom={i}
                    variants={floatingCardVariant}
                    animate="animate"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
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