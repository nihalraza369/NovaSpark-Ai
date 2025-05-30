import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { TrendingUp, Zap, Globe, Share2, ShieldCheck, Leaf, ChevronRight } from 'lucide-react';

    const techTrends = [
      {
        title: "Quantum Computing",
        description: "Explore the revolutionary potential of quantum mechanics to solve problems currently intractable for classical computers.",
        icon: <Zap size={28} className="text-primary" />,
        link: "/tech-trends/quantum-computing",
        img_placeholder: "Abstract visualization of qubits and quantum entanglement",
        alt: "Quantum Computing concept"
      },
      {
        title: "Web3 & The Metaverse",
        description: "Understand the shift towards a decentralized internet and immersive digital experiences shaping the future of online interaction.",
        icon: <Globe size={28} className="text-primary" />,
        link: "/tech-trends/web3-metaverse",
        img_placeholder: "Futuristic cityscape representing the Metaverse with interconnected nodes",
        alt: "Web3 and Metaverse concept"
      },
      {
        title: "Sustainable Technology",
        description: "Discover innovations in green tech, renewable energy, and circular economy models driving a more sustainable future.",
        icon: <Leaf size={28} className="text-primary" />,
        link: "/tech-trends/sustainable-tech",
        img_placeholder: "Wind turbines and solar panels in a lush green landscape",
        alt: "Sustainable Technology concept"
      },
      {
        title: "Cybersecurity in the Age of AI",
        description: "Learn about the evolving landscape of cybersecurity threats and AI-driven defense mechanisms.",
        icon: <ShieldCheck size={28} className="text-primary" />,
        link: "/tech-trends/ai-cybersecurity",
        img_placeholder: "Digital shield protecting data from cyber threats",
        alt: "AI Cybersecurity concept"
      },
      {
        title: "The Future of Connectivity (5G/6G)",
        description: "Explore how next-generation networks will power a hyper-connected world, enabling new applications and services.",
        icon: <Share2 size={28} className="text-primary" />,
        link: "/tech-trends/connectivity",
        img_placeholder: "Abstract network of interconnected devices and data streams",
        alt: "Future of Connectivity concept"
      },
      {
        title: "Biotechnology & Genetic Engineering",
        description: "Delve into advancements in biotech, from CRISPR gene editing to personalized medicine, and their ethical implications.",
        icon: <i className="fas fa-dna text-primary text-2xl"></i>,
        link: "/tech-trends/biotechnology",
        img_placeholder: "DNA helix structure with glowing nodes representing genetic modification",
        alt: "Biotechnology concept"
      },
    ];

    const TechTrendsPage = () => {
      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
              <TrendingUp size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              Tech Trends
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about the cutting-edge technologies and innovations shaping our future. Explore the trends that are redefining industries and daily life.
            </p>
          </motion.section>

          <section className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techTrends.map((trend, index) => (
                <motion.div
                  key={trend.title}
                  className="bg-slate-50 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                   <div className="h-48 w-full bg-slate-200 flex items-center justify-center">
                     <img  class="w-full h-full object-cover" alt={trend.alt} src="https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">{trend.icon}</div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">{trend.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{trend.description}</p>
                    <Link to={trend.link} className="mt-auto self-start">
                      <Button variant="link" className="text-primary hover:text-primary/80 px-0 font-semibold">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
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
            <Zap size={36} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Our in-depth analyses and articles help you understand the implications and opportunities of these transformative technologies.
            </p>
            <Link to="/blog?category=Tech+Trends">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 shadow-lg">
                Explore All Tech Articles
              </Button>
            </Link>
          </motion.section>
        </div>
      );
    };

    export default TechTrendsPage;