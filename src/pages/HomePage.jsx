import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import HeroCarousel from '@/components/HeroCarousel';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Lightbulb, 
  Cpu, 
  BarChart3, 
  Newspaper, 
  Users, 
  MessageSquare,
  Rocket,
  TrendingUp,
  Brain
} from 'lucide-react';

// NAYA COMPONENT (LIGHT THEME): Numbers ko animate karne ke liye
const AnimatedCounter = ({ to, icon: Icon, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 2,
    });
    return controls.stop;
  }, [to, count]);

  return (
    <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-blue-100/70 rounded-full mb-4">
            <Icon className="w-7 h-7 text-blue-600" />
        </div>
        <div className="flex items-end">
            <motion.h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                {rounded}
            </motion.h3>
            <span className="text-4xl md:text-5xl font-bold text-blue-600">+</span>
        </div>
        <p className="text-sm text-slate-600 mt-2">{label}</p>
    </div>
  );
};

// FEATURE CARD KA NAYA DESIGN (LIGHT THEME)
const FeatureCard = ({ icon: Icon, title, description, link, delay }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl p-6 bg-white/60 backdrop-blur-md border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, delay: delay * 0.1, ease: "easeOut" }}
  >
    <div className="relative z-10">
      <div className="flex items-center mb-5">
        <div className="p-3 rounded-lg bg-blue-100/70 mr-4">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      
      <Link to={link}>
        <Button 
          variant="ghost" 
          className="group/btn text-blue-600 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const HomePage = ({ siteName }) => {
  return (
    // Main background ab white hai, aur default text color dark
    <div className="bg-white text-slate-800">
      <HeroSection siteName={siteName} />
      
      {/* KEY METRICS SECTION - NAYA DESIGN AUR POSITION */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="bg-gray-50/70 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
              <AnimatedCounter to={10000} icon={Users} label="Community Members" />
              <AnimatedCounter to={500} icon={Newspaper} label="Articles Published" />
              <AnimatedCounter to={95} icon={TrendingUp} label="User Satisfaction" />
              <AnimatedCounter to={24} icon={Rocket} label="Hours Learning Support" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FEATURED CONTENT SECTION - LIGHT BACKGROUND */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Discover What{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Ignites You
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our curated content designed to inspire, educate, and empower you on your journey of growth and innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Lightbulb} 
              title="Motivational Insights" 
              description="Fuel your ambition with articles and strategies for personal and professional growth that transform your mindset."
              link="/motivation"
              delay={0}
            />
            <FeatureCard 
              icon={Brain} 
              title="AI Unveiled" 
              description="Demystify Artificial Intelligence. Explore its applications, ethics, and future impact on our world with expert insights."
              link="/ai"
              delay={1}
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Tech Frontiers" 
              description="Stay ahead of the curve with deep dives into emerging technologies and innovation trends shaping tomorrow."
              link="/tech-trends"
              delay={2}
            />
          </div>
        </div>
      </section>

      <HeroCarousel />

      {/* MORE TO EXPLORE SECTION - LIGHT BACKGROUND */}
      <section className="py-24 md:py-32 bg-white">
         <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              More to Explore
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dive deeper into our ecosystem of knowledge and community connections.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Newspaper} 
              title="Latest Articles" 
              description="Catch up on our newest blog posts covering a wide range of topics in technology and personal development."
              link="/blog"
              delay={0}
            />
            <FeatureCard 
              icon={Users} 
              title="About NovaSpark" 
              description="Learn more about our mission, vision, and the passionate team dedicated to bringing you transformative content."
              link="/about"
              delay={1}
            />
            <FeatureCard 
              icon={MessageSquare} 
              title="Get in Touch" 
              description="Have questions or want to collaborate? We'd love to hear from you. Let's create something amazing together!"
              link="/contact"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION - WOHI VIDEO WALA BACKGROUND */}
      <section className="relative py-24 md:py-32 overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video src="/videos/13510979_3840_2160_30fps.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,23,40,0.4),rgba(10,13,24,1))]"/>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Ignite Your Potential?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-300">
              Join thousands of learners and start your journey towards mastering tomorrow's technology today.
            </p>
            
            <Link to="/signup">
                <Button 
                  size="lg" 
                  className="group bg-cyan-500 text-slate-900 font-bold text-lg px-10 py-7 rounded-2xl shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Join NovaSpark Now
                </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;