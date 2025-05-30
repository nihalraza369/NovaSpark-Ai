import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Lightbulb, Target, BarChart3, Sparkles, Brain, Users, ChevronRight } from 'lucide-react';

    const motivationalTopics = [
      {
        title: "Goal Setting Mastery",
        description: "Learn effective strategies to set, pursue, and achieve meaningful goals in your personal and professional life.",
        icon: <Target size={28} className="text-primary" />,
        link: "/motivation/goal-setting",
        img_placeholder: "Person writing goals in a planner with a determined expression",
        alt: "Goal Setting concept"
      },
      {
        title: "Building Resilience",
        description: "Develop the mental fortitude to bounce back from adversity, overcome challenges, and thrive under pressure.",
        icon: <Sparkles size={28} className="text-primary" />,
        link: "/motivation/resilience",
        img_placeholder: "Strong tree weathering a storm, symbolizing resilience",
        alt: "Resilience concept"
      },
      {
        title: "Mindset & Positive Psychology",
        description: "Explore the power of your mindset and learn how to cultivate positivity, gratitude, and a growth-oriented outlook.",
        icon: <Brain size={28} className="text-primary" />,
        link: "/motivation/mindset",
        img_placeholder: "Silhouette of a head with glowing positive thoughts and ideas",
        alt: "Positive Mindset concept"
      },
      {
        title: "Productivity Hacks",
        description: "Discover proven techniques and tools to boost your productivity, manage your time effectively, and achieve more.",
        icon: <BarChart3 size={28} className="text-primary" />,
        link: "/motivation/productivity",
        img_placeholder: "Organized desk with a checklist and a focused person working",
        alt: "Productivity concept"
      },
      {
        title: "Leadership & Influence",
        description: "Develop your leadership skills and learn how to inspire, motivate, and influence others positively.",
        icon: <Users size={28} className="text-primary" />,
        link: "/motivation/leadership",
        img_placeholder: "Diverse group of people collaborating effectively, led by an inspiring figure",
        alt: "Leadership concept"
      },
      {
        title: "Finding Your Purpose",
        description: "Embark on a journey of self-discovery to uncover your passions, values, and unique purpose in life.",
        icon: <Lightbulb size={28} className="text-primary" />,
        link: "/motivation/finding-purpose",
        img_placeholder: "Person looking at a starry night sky, contemplating their purpose",
        alt: "Finding Purpose concept"
      },
    ];

    const MotivationPage = () => {
      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
              <Lightbulb size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              Motivation Hub
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Unlock your full potential and achieve your dreams. Explore resources, strategies, and inspiration to fuel your journey of personal and professional growth.
            </p>
          </motion.section>

          <section className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {motivationalTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  className="bg-slate-50 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 w-full bg-slate-200 flex items-center justify-center">
                     <img  class="w-full h-full object-cover" alt={topic.alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">{topic.icon}</div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">{topic.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{topic.description}</p>
                    <Link to={topic.link} className="mt-auto self-start">
                      <Button variant="link" className="text-primary hover:text-primary/80 px-0 font-semibold">
                        Explore Topic <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section 
            className="container mx-auto text-center mt-16 md:mt-24 py-12 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={36} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Ready to Ignite Your Inner Drive?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Our articles and guides are packed with actionable advice to help you overcome obstacles and achieve lasting motivation.
            </p>
            <Link to="/blog?category=Motivation">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 shadow-lg">
                Read Motivational Articles
              </Button>
            </Link>
          </motion.section>
        </div>
      );
    };

    export default MotivationPage;