import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Cpu, Brain, BookOpen, Lightbulb, ChevronRight } from 'lucide-react';

    const aiTopics = [
      {
        title: "Introduction to Artificial Intelligence",
        description: "Understand the fundamentals of AI, its history, and key concepts like machine learning and deep learning.",
        icon: <BookOpen size={28} className="text-primary" />,
        link: "/ai/introduction-to-ai",
        img_placeholder: "Abstract representation of a learning brain or neural network",
        alt: "Introduction to AI concept"
      },
      {
        title: "Machine Learning Explained",
        description: "Dive into the world of machine learning algorithms, supervised vs. unsupervised learning, and practical applications.",
        icon: <Cpu size={28} className="text-primary" />,
        link: "/ai/machine-learning",
        img_placeholder: "Visualization of data points being classified by a machine learning model",
        alt: "Machine Learning concept"
      },
      {
        title: "Deep Learning & Neural Networks",
        description: "Explore the architecture of neural networks, how deep learning models are trained, and their impact on various fields.",
        icon: <Brain size={28} className="text-primary" />,
        link: "/ai/deep-learning",
        img_placeholder: "Complex multi-layered neural network diagram",
        alt: "Deep Learning Neural Network"
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Learn how computers understand and process human language, from chatbots to translation services.",
        icon: <i className="fas fa-comments text-primary text-2xl"></i>, 
        link: "/ai/nlp",
        img_placeholder: "Sound waves transforming into text, symbolizing NLP",
        alt: "Natural Language Processing concept"
      },
      {
        title: "Computer Vision",
        description: "Discover how AI enables computers to 'see' and interpret visual information from the world around us.",
        icon: <i className="fas fa-eye text-primary text-2xl"></i>,
        link: "/ai/computer-vision",
        img_placeholder: "An eye merging with digital pixels, representing computer vision",
        alt: "Computer Vision concept"
      },
      {
        title: "The Ethics of AI",
        description: "Delve into the critical ethical considerations, biases, and societal impacts of artificial intelligence.",
        icon: <i className="fas fa-balance-scale text-primary text-2xl"></i>,
        link: "/ai/ethics-of-ai",
        img_placeholder: "A balanced scale with a human silhouette on one side and a robot on the other",
        alt: "Ethics of AI concept"
      },
    ];

    const AiPage = () => {
      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
              <Cpu size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              AI Insights
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Journey into the fascinating world of Artificial Intelligence. Explore foundational concepts, cutting-edge research, and the transformative potential of AI.
            </p>
          </motion.section>

          <section className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  className="bg-slate-50 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 w-full bg-slate-200 flex items-center justify-center">
                     <img  class="w-full h-full object-cover" alt={topic.alt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
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
            <Lightbulb size={36} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Ready to Dive Deeper?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Our comprehensive articles and resources are designed to make complex AI topics accessible and engaging. Start your learning journey today!
            </p>
            <Link to="/blog?category=AI+Insights">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 shadow-lg">
                View All AI Articles
              </Button>
            </Link>
          </motion.section>
        </div>
      );
    };

    export default AiPage;