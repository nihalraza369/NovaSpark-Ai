import React from 'react';
import HeroSection from '@/components/HeroSection';
import HeroCarousel from '@/components/HeroCarousel';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Sparkles,
  Zap,
  Rocket,
  Star,
  TrendingUp,
  Brain
} from 'lucide-react';

const FloatingElement = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon, title, description, link, delay, gradient = false }) => (
  <motion.div
    className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
      gradient 
        ? 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white' 
        : 'bg-white/70 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl'
    }`}
    initial={{ opacity: 0, y: 50, rotateY: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ 
      duration: 0.8, 
      delay: delay * 0.15,
      ease: "easeOut"
    }}
    whileHover={{
      rotateY: 5,
      transition: { duration: 0.3 }
    }}
  >
    {/* Animated background effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    
    {/* Floating particles effect */}
    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
      <Sparkles size={16} className="animate-pulse" />
    </div>
    
    <div className="relative z-10">
      <motion.div 
        className={`flex items-center mb-6 ${gradient ? 'text-white' : 'text-primary'}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`p-4 rounded-xl mr-4 ${
          gradient 
            ? 'bg-white/20 backdrop-blur-sm' 
            : 'bg-gradient-to-br from-primary/10 to-purple-500/10'
        }`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold ${gradient ? 'text-white' : 'text-slate-800'}`}>
          {title}
        </h3>
      </motion.div>
      
      <p className={`text-sm mb-6 leading-relaxed ${
        gradient ? 'text-white/90' : 'text-slate-600'
      }`}>
        {description}
      </p>
      
      <Link to={link}>
        <Button 
          variant="ghost" 
          className={`group/btn ${
            gradient 
              ? 'text-white hover:bg-white/10 border border-white/20' 
              : 'text-primary hover:text-primary/80 hover:bg-primary/5'
          } transition-all duration-300`}
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const StatsCard = ({ icon, number, label, delay }) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay * 0.1 }}
  >
    <div className="relative mb-4">
      <div className="w-16 h-16 mx-auto bg-blue-700 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
        <Star size={12} className="text-yellow-600" />
      </div>
    </div>
    <motion.div
      className="text-3xl font-bold text-white mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
    >
      {number}
    </motion.div>
    <div className="text-white/80 text-sm">{label}</div>
  </motion.div>
);

const HomePage = ({ siteName }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <>
      <motion.div style={{ y, opacity }}>
        <HeroSection siteName={siteName} />
      </motion.div>
      
      {/* Floating Stats Section */}
      <section className="relative z-10 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="bg-blue-600 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatsCard icon={<Users size={24} />} number="10K+" label="Community Members" delay={0} />
              <StatsCard icon={<Newspaper size={24} />} number="500+" label="Articles Published" delay={1} />
              <StatsCard icon={<TrendingUp size={24} />} number="95%" label="User Satisfaction" delay={2} />
              <StatsCard icon={<Rocket size={24} />} number="24/7" label="Learning Support" delay={3} />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Featured Content */}
      <section id="featured-content" className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FloatingElement delay={0}>
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Zap size={16} />
                Featured Content
              </motion.div>
            </FloatingElement>
            
            <FloatingElement delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 tracking-tight">
                Discover What{' '}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-600 bg-clip-text text-transparent">
                  Ignites You
                </span>
              </h2>
            </FloatingElement>
            
            <FloatingElement delay={0.2}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Explore our curated content designed to inspire, educate, and empower you on your journey of growth and innovation.
              </p>
            </FloatingElement>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <FeatureCard 
              icon={<Lightbulb size={32} />} 
              title="Motivational Insights" 
              description="Fuel your ambition with articles, stories, and strategies for personal and professional growth that transform your mindset."
              link="/motivation"
              delay={0}
            />
            <FeatureCard 
              icon={<Brain size={32} />} 
              title="AI Unveiled" 
              description="Demystify Artificial Intelligence. Explore its applications, ethics, and future impact on our world with expert insights."
              link="/ai"
              delay={1}
              gradient={true}
            />
            <FeatureCard 
              icon={<BarChart3 size={32} />} 
              title="Tech Frontiers" 
              description="Stay ahead of the curve with deep dives into emerging technologies and innovation trends shaping tomorrow."
              link="/tech-trends"
              delay={2}
            />
          </div>
        </div>
      </section>

      <HeroCarousel />

      {/* Enhanced More to Explore Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 tracking-tight">
              More to{' '}
              <span className="relative">
                Explore
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dive deeper into our ecosystem of knowledge and community connections.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <FeatureCard 
              icon={<Newspaper size={32} />} 
              title="Latest Articles" 
              description="Catch up on our newest blog posts covering a wide range of topics in motivation, technology, and personal development."
              link="/blog"
              delay={0}
            />
            <FeatureCard 
              icon={<Users size={32} />} 
              title="About NovaSpark" 
              description="Learn more about our mission, vision, and the passionate team dedicated to bringing you transformative content."
              link="/about"
              delay={1}
            />
            <FeatureCard 
              icon={<MessageSquare size={32} />} 
              title="Get in Touch" 
              description="Have questions or want to collaborate? We'd love to hear from you. Let's create something amazing together!"
              link="/contact"
              delay={2}
              gradient={true}
            />
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Rocket size={16} />
              Join the Revolution
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Ready to{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Ignite
                </span>
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles size={24} className="text-yellow-400" />
                </motion.div>
              </span>
              {' '}Your Potential?
            </h2>
            
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/90 leading-relaxed">
              Join our community and start your journey towards personal growth and technological understanding.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-slate-900 font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Join NovaSpark Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;