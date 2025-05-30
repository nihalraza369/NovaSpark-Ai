import React from 'react';
    import HeroSection from '@/components/HeroSection';
    import HeroCarousel from '@/components/HeroCarousel';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Lightbulb, Cpu, BarChart3, Newspaper, Users, MessageSquare } from 'lucide-react';

    const FeatureCard = ({ icon, title, description, link, delay }) => (
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
      >
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg mr-4 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 text-sm mb-5 leading-relaxed flex-grow">{description}</p>
        <Link to={link}>
          <Button variant="ghost" className="text-primary hover:text-primary/80 mt-auto self-start px-0">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    );

    const HomePage = ({ siteName }) => {
      return (
        <>
          <HeroSection siteName={siteName} />
          
          <section id="featured-content" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Discover What Ignites You
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore our curated content designed to inspire, educate, and empower you on your journey of growth and innovation.
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Lightbulb size={28} />} 
                  title="Motivational Insights" 
                  description="Fuel your ambition with articles, stories, and strategies for personal and professional growth."
                  link="/motivation"
                  delay={0}
                />
                <FeatureCard 
                  icon={<Cpu size={28} />} 
                  title="AI Unveiled" 
                  description="Demystify Artificial Intelligence. Explore its applications, ethics, and future impact on our world."
                  link="/ai"
                  delay={1}
                />
                <FeatureCard 
                  icon={<BarChart3 size={28} />} 
                  title="Tech Frontiers" 
                  description="Stay ahead of the curve with deep dives into emerging technologies and innovation trends."
                  link="/tech-trends"
                  delay={2}
                />
              </div>
            </div>
          </section>

          <HeroCarousel />

          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                More to Explore
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Newspaper size={28} />} 
                  title="Latest Articles" 
                  description="Catch up on our newest blog posts covering a wide range of topics in motivation and technology."
                  link="/blog"
                  delay={0}
                />
                <FeatureCard 
                  icon={<Users size={28} />} 
                  title="About NovaSpark" 
                  description="Learn more about our mission, vision, and the team dedicated to bringing you quality content."
                  link="/about"
                  delay={1}
                />
                <FeatureCard 
                  icon={<MessageSquare size={28} />} 
                  title="Get in Touch" 
                  description="Have questions or want to collaborate? We'd love to hear from you. Reach out today!"
                  link="/contact"
                  delay={2}
                />
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Ignite Your Potential?
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl max-w-xl mx-auto mb-8 opacity-90"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our community and start your journey towards personal growth and technological understanding.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/login">
                  <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-semibold text-lg px-10 py-3 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                    Join NovaSpark Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </>
      );
    };

    export default HomePage;