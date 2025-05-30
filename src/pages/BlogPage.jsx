import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Search, CalendarDays, UserCircle, Tag } from 'lucide-react';

    const initialBlogPosts = [
      {
        id: 1,
        title: "The Future of Work: How AI is Changing Everything",
        slug: "future-of-work-ai",
        category: "AI Insights",
        date: "2025-05-20",
        author: "Dr. AI Expert",
        excerpt: "Explore the transformative impact of artificial intelligence on job markets, skill requirements, and the very nature of work...",
        img_placeholder: "Futuristic office with AI assistants and holographic displays",
        alt: "AI transforming the workplace"
      },
      {
        id: 2,
        title: "Unlocking Your Inner Drive: 5 Keys to Sustainable Motivation",
        slug: "unlocking-inner-drive",
        category: "Motivation",
        date: "2025-05-15",
        author: "Jane Motivator",
        excerpt: "Discover practical strategies to tap into your intrinsic motivation and maintain high levels of drive and enthusiasm long-term...",
        img_placeholder: "Person standing on a mountain peak at sunrise, symbolizing achievement",
        alt: "Achieving peak motivation"
      },
      {
        id: 3,
        title: "Blockchain & Web3: Beyond the Hype",
        slug: "blockchain-web3-beyond-hype",
        category: "Tech Trends",
        date: "2025-05-10",
        author: "Tech Trendsetter",
        excerpt: "A deep dive into the real-world applications and potential of blockchain technology and the decentralized web...",
        img_placeholder: "Abstract visualization of interconnected blockchain nodes",
        alt: "Blockchain technology visualization"
      },
      {
        id: 4,
        title: "Ethical AI: Navigating the Moral Maze",
        slug: "ethical-ai-moral-maze",
        category: "AI Insights",
        date: "2025-05-05",
        author: "Ethics Scholar",
        excerpt: "Understanding the ethical considerations in AI development and deployment is crucial. We explore key challenges and frameworks...",
        img_placeholder: "Balanced scales with a brain on one side and a heart on the other, symbolizing AI ethics",
        alt: "Ethical considerations in AI"
      },
       {
        id: 5,
        title: "The Power of Positive Habits for Lasting Change",
        slug: "positive-habits-lasting-change",
        category: "Motivation",
        date: "2025-04-28",
        author: "Habit Coach",
        excerpt: "Learn how to build and maintain positive habits that can fundamentally reshape your life for the better...",
        img_placeholder: "Person joyfully tending to a thriving plant, symbolizing growth through habits",
        alt: "Growth through positive habits"
      },
      {
        id: 6,
        title: "Quantum Computing: The Next Tech Revolution?",
        slug: "quantum-computing-revolution",
        category: "Tech Trends",
        date: "2025-04-22",
        author: "Quantum Physicist",
        excerpt: "An accessible introduction to the mind-bending world of quantum computing and its potential to revolutionize industries.",
        img_placeholder: "Stylized representation of a qubit or quantum computer chip",
        alt: "Quantum computing concept"
      }
    ];
    
    const categories = ["All", "AI Insights", "Motivation", "Tech Trends"];

    const BlogPage = () => {
      const [searchTerm, setSearchTerm] = useState("");
      const [selectedCategory, setSelectedCategory] = useState("All");

      const filteredPosts = initialBlogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              NovaSpark Blog
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Insights, inspiration, and innovations. Explore our latest articles on motivation, AI, and cutting-edge technology.
            </p>
          </motion.section>

          <section className="container mx-auto mb-10 md:mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
              <div className="relative flex-grow w-full md:w-auto">
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="pl-10 h-11 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'text-slate-600 border-slate-300 hover:bg-primary/10 hover:text-primary'}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {filteredPosts.length === 0 && (
              <p className="text-center text-slate-500 text-lg py-10">No articles found. Try adjusting your search or category.</p>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-slate-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-primary/20 transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block h-52 w-full bg-slate-200 overflow-hidden">
                     <img  class="w-full h-full object-cover" alt={post.alt} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 flex items-center text-xs text-slate-500 space-x-3">
                      <span className="flex items-center"><Tag className="mr-1 h-3.5 w-3.5 text-primary/70" /> {post.category}</span>
                      <span className="flex items-center"><CalendarDays className="mr-1 h-3.5 w-3.5 text-primary/70" /> {new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-slate-500 mt-auto pt-3 border-t border-slate-200">
                      <UserCircle className="mr-1.5 h-4 w-4 text-primary/70" /> By {post.author}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Placeholder for pagination if many posts */}
          {initialBlogPosts.length > 6 && (
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline">Next</Button>
            </div>
          )}
        </div>
      );
    };

    export default BlogPage;