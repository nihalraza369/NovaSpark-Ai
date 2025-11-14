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
    img_description: "A sleek, futuristic office environment with holographic interfaces, people collaborating with AI robots, and a glowing digital city visible through large windows at dusk. High-tech, optimistic.",
    alt: "AI transforming the workplace",
    imageUrl: "/images/ai-workplace.svg"
  },
  {
    id: 2,
    title: "Unlocking Your Inner Drive: 5 Keys to Sustainable Motivation",
    slug: "unlocking-inner-drive",
    category: "Motivation",
    date: "2025-05-15",
    author: "Jane Motivator",
    excerpt: "Discover practical strategies to tap into your intrinsic motivation and maintain high levels of drive and enthusiasm long-term...",
    img_description: "A person standing triumphantly at the peak of a majestic, snow-capped mountain range, arms outstretched towards a vibrant sunrise. Clouds are below them, symbolizing overcoming challenges. Inspirational, grand scale.",
    alt: "Achieving peak motivation",
    imageUrl: "/images/motivation.svg"
  },
  {
    id: 3,
    title: "Blockchain & Web3: Beyond the Hype",
    slug: "blockchain-web3-beyond-hype",
    category: "Tech Trends",
    date: "2025-05-10",
    author: "Tech Trendsetter",
    excerpt: "A deep dive into the real-world applications and potential of blockchain technology and the decentralized web...",
    img_description: "An abstract, glowing network of interconnected nodes and lines, representing a blockchain. The colors are deep blues and purples with bright, sparkling connections. Digital, complex, secure feel.",
    alt: "Blockchain technology visualization",
    imageUrl: "/images/blockchain.svg"
  },
  {
    id: 4,
    title: "Ethical AI: Navigating the Moral Maze",
    slug: "ethical-ai-moral-maze",
    category: "AI Insights",
    date: "2025-05-05",
    author: "Ethics Scholar",
    excerpt: "Understanding the ethical considerations in AI development and deployment is crucial. We explore key challenges and frameworks...",
    img_description: "A visually striking image of balanced, old-fashioned brass scales. On one pan rests a glowing, intricate digital brain, on the other, a stylized, warm human heart. Both are perfectly balanced. Symbolic of AI ethics.",
    alt: "Ethical considerations in AI",
    imageUrl: "/images/ethical-ai.svg"
  },
   {
    id: 5,
    title: "The Power of Positive Habits for Lasting Change",
    slug: "positive-habits-lasting-change",
    category: "Motivation",
    date: "2025-04-28",
    author: "Habit Coach",
    excerpt: "Learn how to build and maintain positive habits that can fundamentally reshape your life for the better...",
    img_description: "A person with a serene expression, gently watering a small, vibrant green plant growing robustly in rich soil. The background is softly blurred with warm, natural light. Symbolizes growth and nurturing.",
    alt: "Growth through positive habits",
    imageUrl: "/images/habits.svg"
  },
  {
    id: 6,
    title: "Quantum Computing: The Next Tech Revolution?",
    slug: "quantum-computing-revolution",
    category: "Tech Trends",
    date: "2025-04-22",
    author: "Quantum Physicist",
    excerpt: "An accessible introduction to the mind-bending world of quantum computing and its potential to revolutionize industries.",
    img_description: "An abstract, minimalist depiction of a quantum computer chip or a qubit. It features glowing, interconnected geometric shapes in shades of blue and purple, with subtle energy effects. Clean, high-tech, mysterious.",
    alt: "Quantum computing concept",
    imageUrl: "/images/quantum.svg"
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const postCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-100 min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        className="container mx-auto text-center mb-16 md:mb-24"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
          The NovaSpark Blog
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
          Dive into cutting-edge insights, spark your motivation, and explore the future of technology with our expert articles.
        </p>
      </motion.section>

      {/* Search and Categories */}
      <motion.section
        className="container mx-auto mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700">
          <div className="relative flex-grow w-full md:w-auto">
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-12 h-12 w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all rounded-full px-5 py-2 text-md font-medium
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600'
                    : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-blue-500 hover:text-blue-300'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto">
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-400 text-xl py-20">No articles found. Try adjusting your search or category.</p>
        )}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={postCardVariants}
            >
              <Link to={`/blog/${post.slug}`} className="block h-56 w-full overflow-hidden relative group">
                {/* Dynamically setting the image src from post.imageUrl */}
                <img src={post.imageUrl} alt={post.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm font-semibold text-gray-100 bg-blue-600 px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-50 mb-3 leading-tight hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-5 flex-grow font-light">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mt-auto pt-4 border-t border-gray-700">
                  <span className="flex items-center">
                    <UserCircle className="mr-2 h-4 w-4 text-purple-400" /> {post.author}
                  </span>
                  <span className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-pink-400" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pagination (if many posts) */}
      {initialBlogPosts.length > 6 && (
        <div className="flex justify-center mt-16">
          <Button variant="outline" className="mr-4 bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-blue-500 hover:text-blue-300 rounded-full px-6 py-3">Previous</Button>
          <Button variant="outline" className="bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-blue-500 hover:text-blue-300 rounded-full px-6 py-3">Next</Button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;