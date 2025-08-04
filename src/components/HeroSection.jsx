
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowDownCircle, Lightbulb, Cpu, Bot, Shield, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ siteName = "Novaspark AI" }) => {
  // Animation variants for floating boxes
  const floatingBoxVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Robot floating animation
  const robotVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Glow animation for robot
  const glowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingBoxes = [
    {
      id: 1,
      icon: Bot,
      text: "🤖 AI Assistant",
      position: "top-[20%] left-[10%]",
      delay: 0
    },
    {
      id: 2,
      icon: Shield,
      text: "🔐 Cybersecurity",
      position: "top-[15%] right-[15%]",
      delay: 1
    },
    {
      id: 3,
      icon: TrendingUp,
      text: "📈 Marketing Growth",
      position: "bottom-[25%] left-[8%]",
      delay: 2
    },
    {
      id: 4,
      icon: Heart,
      text: "💡 Motivation Hub",
      position: "bottom-[20%] right-[12%]",
      delay: 1.5
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-slate-800 overflow-hidden px-6 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [-20, 20, -20], 
            y: [-10, 10, -10], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [30, -30, 30], 
            y: [15, -15, 15], 
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-6">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteName}
            </motion.h1>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Zap
                size={48}
                className="absolute -top-4 -right-8 lg:-right-12 text-yellow-500 animate-pulse"
              />
            </motion.div>
          </div>

          <motion.p 
            className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering your journey through <strong>Artificial Intelligence</strong>, <strong>Cybersecurity</strong>, 
            <strong> Digital Marketing</strong>, and <strong>Personal Growth</strong>. 
            Transform your potential into expertise with cutting-edge learning experiences.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                // Add your navigation logic here
                console.log('Get Started clicked');
              }}
            >
              Get Started <Lightbulb className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              onClick={() => {
                // Add your navigation logic here
                console.log('Learn More clicked');
              }}
            >
              Learn More <Cpu className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Robot Visual with Floating Boxes */}
        <motion.div
          className="relative flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-lg">
            {/* Robot Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-2xl"
              variants={glowVariants}
              animate="animate"
            />
            
            {/* Robot Image */}
            <motion.div
              className="relative z-10"
              variants={robotVariants}
              animate="animate"
            >
              <img
                src="robot.png"
                alt="Novaspark AI Robot Assistant"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Boxes */}
            {floatingBoxes.map((box) => {
              const IconComponent = box.icon;
              return (
                <motion.div
                  key={box.id}
                  className={`absolute ${box.position} z-20`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: box.delay,
                    type: "spring",
                    stiffness: 100 
                  }}
                >
                  <motion.div
                    className="backdrop-blur-md bg-white/80 border border-white/20 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={floatingBoxVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.95)"
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 whitespace-nowrap">
                      <IconComponent size={16} className="text-blue-600" />
                      <span>{box.text}</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownCircle
            size={40}
            className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
            onClick={() =>
              document
                .getElementById('featured-content')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;