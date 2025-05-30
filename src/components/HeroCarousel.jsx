import React, { useState, useEffect, useCallback } from 'react';
    import { Link } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ChevronLeft, ChevronRight, Zap, Brain, Rocket } from 'lucide-react';
    import { Button } from "@/components/ui/button";

    const slidesData = [
      { 
        id: 1, 
        title: "Unlock Your Potential",
        subtitle: "Dive into motivational content that sparks creativity and drives success.",
        img_placeholder: "Abstract representation of human mind and potential with light background", 
        alt: "Abstract human mind with glowing connections on a light background",
        Icon: Zap,
        bgColor: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100",
        textColor: "text-purple-700",
        buttonLink: "/motivation"
      },
      { 
        id: 2, 
        title: "Explore AI Frontiers",
        subtitle: "Discover the latest in Artificial Intelligence and its transformative power.",
        img_placeholder: "Futuristic AI interface or neural network with light background", 
        alt: "Glowing neural network or AI interface on a light background",
        Icon: Brain,
        bgColor: "bg-gradient-to-br from-sky-100 via-cyan-50 to-teal-100",
        textColor: "text-sky-700",
        buttonLink: "/ai"
      },
      { 
        id: 3, 
        title: "Innovate with Technology",
        subtitle: "Stay ahead with insights into cutting-edge tech trends and innovations.",
        img_placeholder: "Abstract representation of technological advancement with light background", 
        alt: "Digital circuits and futuristic technology on a light background",
        Icon: Rocket,
        bgColor: "bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100",
        textColor: "text-green-700",
        buttonLink: "/tech-trends"
      },
    ];

    const HeroCarousel = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [direction, setDirection] = useState(0);

      const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
      }, []);

      const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
      };

      useEffect(() => {
        const timer = setInterval(() => {
          nextSlide();
        }, 7000); 
        return () => clearInterval(timer);
      }, [nextSlide]);

      const slideVariants = {
        hidden: (direction) => ({ opacity: 0, x: direction > 0 ? "100%" : "-100%", scale: 0.95 }),
        visible: { opacity: 1, x: 0, scale: 1 },
        exit: (direction) => ({ opacity: 0, x: direction < 0 ? "100%" : "-100%", scale: 0.95 }),
      };
      
      const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7, ease: "easeOut" } },
      };
      
      const currentSlide = slidesData[currentIndex];
      const CurrentIcon = currentSlide.Icon;

      return (
        <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden shadow-inner">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 w-full h-full ${currentSlide.bgColor} flex items-center justify-center`}
            >
              <img  
                alt={currentSlide.alt} 
                class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" />
              
              <div className="relative z-10 text-center p-6 md:p-8 max-w-3xl mx-auto">
                <motion.div variants={textVariants} className="mb-5">
                  <CurrentIcon size={56} className={`${currentSlide.textColor} mx-auto mb-3 drop-shadow-sm`} />
                </motion.div>
                <motion.h2 
                  variants={textVariants}
                  className={`text-4xl md:text-5xl font-bold ${currentSlide.textColor} mb-5 drop-shadow-sm`}
                >
                  {currentSlide.title}
                </motion.h2>
                <motion.p 
                  variants={textVariants}
                  className={`text-lg md:text-xl ${currentSlide.textColor}/80 mb-8 max-w-xl mx-auto`}
                >
                  {currentSlide.subtitle}
                </motion.p>
                <motion.div variants={textVariants}>
                  <Link to={currentSlide.buttonLink}>
                    <Button 
                      size="lg" 
                      className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-md px-8 py-3 rounded-lg shadow-lg hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute top-1/2 left-3 md:left-6 transform -translate-y-1/2 z-20 text-slate-600 bg-white/40 hover:bg-white/70 backdrop-blur-sm rounded-full p-2.5 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute top-1/2 right-3 md:right-6 transform -translate-y-1/2 z-20 text-slate-600 bg-white/40 hover:bg-white/70 backdrop-blur-sm rounded-full p-2.5 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </Button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2.5">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-slate-400/60 hover:bg-slate-500/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      );
    };

    export default HeroCarousel;