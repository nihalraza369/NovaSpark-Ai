import React, { useState, useEffect } from 'react';
import { Cpu, Brain, BookOpen, Lightbulb, ChevronRight, Play, ArrowRight, CheckCircle, Star, Trophy, Zap, MessageSquare, Eye, Scale, Sparkles, Target, BarChart3, Users, Globe, Rocket } from 'lucide-react';

const AIInsightsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiTopics = [
    {
      title: "Introduction to Artificial Intelligence",
      description: "Understand the fundamentals of AI, its history, and key concepts that are reshaping our world. From basic algorithms to complex neural networks.",
      icon: <BookOpen size={32} className="text-blue-500" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["AI Fundamentals", "History & Evolution", "Core Concepts", "Real-world Impact"]
    },
    {
      title: "Machine Learning Explained",
      description: "Dive deep into machine learning algorithms, supervised vs unsupervised learning, and discover how machines learn from data to make predictions.",
      icon: <Cpu size={32} className="text-green-500" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: ["Supervised Learning", "Unsupervised Learning", "Algorithms", "Data Analysis"]
    },
    {
      title: "Deep Learning & Neural Networks",
      description: "Explore the fascinating world of neural networks, understand how deep learning models are trained, and their revolutionary applications.",
      icon: <Brain size={32} className="text-purple-500" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: ["Neural Networks", "Deep Learning", "Model Training", "Advanced AI"]
    },
    {
      title: "Natural Language Processing",
      description: "Learn how computers understand and process human language, from chatbots to translation services that break down language barriers.",
      icon: <MessageSquare size={32} className="text-orange-500" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: ["Text Processing", "Chatbots", "Language Models", "Translation"]
    },
    {
      title: "Computer Vision",
      description: "Discover how AI enables computers to 'see' and interpret visual information, powering everything from medical imaging to autonomous vehicles.",
      icon: <Eye size={32} className="text-indigo-500" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      features: ["Image Recognition", "Object Detection", "Visual Analysis", "Medical Imaging"]
    },
    {
      title: "Ethics of AI",
      description: "Delve into critical ethical considerations, biases, and societal impacts of AI. Understanding responsible AI development and deployment.",
      icon: <Scale size={32} className="text-pink-500" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      features: ["AI Ethics", "Bias Detection", "Responsible AI", "Society Impact"]
    },
  ];

  const benefits = [
    { icon: <Rocket className="text-blue-500" />, title: "Future-Ready Career", desc: "AI skills are in highest demand across industries" },
    { icon: <Globe className="text-green-500" />, title: "Global Impact", desc: "Create solutions that change the world" },
    { icon: <Brain className="text-purple-500" />, title: "Intellectual Growth", desc: "Enhance problem-solving and analytical thinking" },
    { icon: <Target className="text-orange-500" />, title: "Innovation Leader", desc: "Be at the forefront of technological revolution" }
  ];

  const stats = [
    { number: "75%", label: "Jobs will use AI by 2030" },
    { number: "$200K+", label: "Average AI Engineer Salary" },
    { number: "40%", label: "Productivity increase with AI" },
    { number: "15.7T", label: "AI contribution to global economy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                <Cpu size={36} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  AI Insights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Journey into the fascinating world of Artificial Intelligence. Master the technology that's revolutionizing every industry and shaping our future.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-white/50">
                    <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">{benefit.title}</h3>
                      <p className="text-xs text-slate-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Start AI Journey
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/50 flex items-center justify-center">
                  Explore Topics
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>

            {/* Right AI Visualization */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
                
                {/* Neural Network Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Nodes */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-4 h-4 bg-white/80 rounded-full animate-pulse"
                        style={{
                          top: `${30 + Math.sin(i * 30 * Math.PI / 180) * 120}px`,
                          left: `${140 + Math.cos(i * 30 * Math.PI / 180) * 120}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${2 + Math.random()}s`
                        }}
                      />
                    ))}
                    
                    {/* Center Brain Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-spin" style={{animationDuration: '10s'}}>
                        <Brain className="text-white" size={32} />
                      </div>
                    </div>
                    
                    {/* Connecting Lines Animation */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[...Array(8)].map((_, i) => (
                        <line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + Math.cos(i * 45 * Math.PI / 180) * 40}%`}
                          y2={`${50 + Math.sin(i * 45 * Math.PI / 180) * 40}%`}
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="2"
                          className="animate-pulse"
                          style={{animationDelay: `${i * 0.2}s`}}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <Zap className="text-white" size={16} />
                </div>
                <div className="absolute top-1/4 left-10 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <Eye className="text-white" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              AI is <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Transforming Everything</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The numbers speak for themselves. AI is not just the future - it's happening now.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn AI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Why Master <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Artificial Intelligence?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI is not just changing technology - it's revolutionizing how we work, think, and solve problems.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BarChart3 className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Exponential Growth</h3>
            <p className="text-slate-600">AI market is expected to reach $1.8 trillion by 2030, creating millions of new opportunities.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Enhanced Intelligence</h3>
            <p className="text-slate-600">Augment human capabilities and solve complex problems that were once impossible.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Rocket className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Innovation Catalyst</h3>
            <p className="text-slate-600">Drive breakthrough innovations in healthcare, finance, education, and every industry.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Global Community</h3>
            <p className="text-slate-600">Join millions of AI researchers, engineers, and enthusiasts shaping the future.</p>
          </div>
        </div>
      </section>

      {/* AI Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Master Every <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">AI Domain</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From foundational concepts to cutting-edge applications, explore comprehensive AI knowledge that will prepare you for the future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {aiTopics.map((topic, index) => (
              <div
                key={topic.title}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${topic.bgColor} border border-white/50`}
               
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${topic.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(topic.icon, { className: "text-white" })}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {topic.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {topic.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-500" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`px-6 py-3 bg-gradient-to-r ${topic.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group-hover:scale-105`}>
                        <span>Explore Topic</span>
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
              <Brain size={48} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join the AI revolution and become part of the most transformative technology of our time. Your journey into artificial intelligence starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-white text-slate-800 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3">
                <Rocket className="text-blue-500" size={24} />
                <span>Begin AI Journey</span>
              </button>
              <button className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3">
                <span>View AI Resources</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100,000+</div>
                <div className="text-white/80">AI Enthusiasts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">AI Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Learning Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInsightsPage;