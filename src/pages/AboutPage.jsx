import React from 'react';
    import { motion } from 'framer-motion';
    import { Users, Target, Eye, Zap } from 'lucide-react';

    const AboutPage = () => {
      const teamMembers = [
        { name: "Alex Johnson", role: "Founder & AI Visionary", img_placeholder: "Professional headshot of Alex Johnson", alt: "Alex Johnson, Founder" },
        { name: "Maria Garcia", role: "Lead Motivational Strategist", img_placeholder: "Professional headshot of Maria Garcia", alt: "Maria Garcia, Motivational Strategist" },
        { name: "Sam Lee", role: "Head of Technology Research", img_placeholder: "Professional headshot of Sam Lee", alt: "Sam Lee, Technology Researcher" },
      ];

      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              About NovaSpark
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              NovaSpark is dedicated to illuminating the path to personal growth and technological understanding. We believe in the synergistic power of human potential and cutting-edge innovation to shape a brighter future.
            </p>
          </motion.section>

          <section className="container mx-auto grid md:grid-cols-3 gap-10 mb-16 md:mb-24">
            <motion.div 
              className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Target size={40} className="text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-slate-800">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To inspire and empower individuals by providing accessible, high-quality content on motivation, AI, and emerging technologies, fostering a community of learners and innovators.
              </p>
            </motion.div>
            <motion.div 
              className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Eye size={40} className="text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-slate-800">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be a leading global platform where human aspiration meets technological advancement, creating a future where everyone can achieve their full potential and contribute to a smarter world.
              </p>
            </motion.div>
            <motion.div 
              className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Zap size={40} className="text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-slate-800">Our Values</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-1 leading-relaxed">
                <li>Inspiration & Empowerment</li>
                <li>Knowledge & Clarity</li>
                <li>Innovation & Progress</li>
                <li>Integrity & Inclusivity</li>
              </ul>
            </motion.div>
          </section>

          <section className="container mx-auto text-center mb-12 md:mb-20">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team (Illustrative)
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name} 
                  className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-200 transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img  class="w-full h-full object-cover" alt={member.alt} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </motion.div>
              ))}
            </div>
             <p className="mt-8 text-sm text-slate-500">Note: Team members are illustrative for design purposes.</p>
          </section>
        </div>
      );
    };

    export default AboutPage;