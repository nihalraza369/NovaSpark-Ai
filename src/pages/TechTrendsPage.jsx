import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Globe, Share2, ShieldCheck, Leaf, ChevronRight, Play, ArrowRight, CheckCircle, Star, Trophy, Code, Terminal, Coffee, Cpu, Database, Settings } from 'lucide-react';

const ProgrammingLanguagesPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programmingLanguages = [
    {
      title: "Python",
      description: "Python is leading the charge in AI, machine learning, web development, and data science. With libraries like TensorFlow, Django, and Pandas, it's the most versatile language today.",
      icon: <Code size={32} className="text-green-500" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: ["AI & Machine Learning", "Web Development", "Data Science", "Automation"],
      popularity: "95%",
      salary: "$120K",
      jobs: "50K+"
    },
    {
      title: "JavaScript",
      description: "JavaScript continues to dominate web development with React, Vue, Node.js, and countless frameworks. It's essential for both frontend and backend development.",
      icon: <Globe size={32} className="text-yellow-500" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      features: ["Frontend Development", "Backend (Node.js)", "Mobile Apps", "Desktop Apps"],
      popularity: "92%",
      salary: "$110K",
      jobs: "80K+"
    },
    {
      title: "C++",
      description: "C++ remains the powerhouse for system programming, game development, embedded systems, and performance-critical applications where speed matters most.",
      icon: <Cpu size={32} className="text-blue-500" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["System Programming", "Game Development", "Embedded Systems", "High Performance"],
      popularity: "78%",
      salary: "$115K",
      jobs: "25K+"
    },
    {
      title: "PHP",
      description: "PHP powers over 75% of websites including WordPress, Facebook's backend. With Laravel and Symfony frameworks, it's perfect for modern web applications.",
      icon: <ShieldCheck size={32} className="text-purple-500" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: ["Web Development", "CMS Development", "E-commerce", "Server-side Scripting"],
      popularity: "68%",
      salary: "$95K",
      jobs: "35K+"
    },
    {
      title: "C#",
      description: "C# is Microsoft's versatile language perfect for Windows applications, game development with Unity, enterprise solutions, and cross-platform development.",
      icon: <Settings size={32} className="text-indigo-500" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      features: ["Windows Development", "Game Development", "Enterprise Apps", "Cross-platform"],
      popularity: "72%",
      salary: "$105K",
      jobs: "30K+"
    },
    {
      title: "Java",
      description: "Java remains the backbone of enterprise applications, Android development, and large-scale distributed systems. It's platform-independent and highly scalable.",
      icon: <Coffee size={32} className="text-red-500" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: ["Enterprise Applications", "Android Development", "Backend Systems", "Big Data"],
      popularity: "85%",
      salary: "$125K",
      jobs: "60K+"
    },
  ];

  const benefits = [
    { icon: <Trophy className="text-yellow-500" />, title: "High Demand Skills", desc: "Programming languages are the most sought-after skills" },
    { icon: <Globe className="text-blue-500" />, title: "Global Opportunities", desc: "Work remotely for companies worldwide" },
    { icon: <Star className="text-purple-500" />, title: "Problem Solving", desc: "Build solutions that impact millions of users" },
    { icon: <TrendingUp className="text-green-500" />, title: "Continuous Growth", desc: "Technology field with endless learning opportunities" }
  ];

  const industryStats = [
    { number: "27M", label: "Developers Worldwide" },
    { number: "$150K", label: "Average Senior Salary" },
    { number: "22%", label: "Job Growth Rate" },
    { number: "500+", label: "Programming Languages" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-block p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                <TrendingUp size={36} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Programming Languages
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Master the most in-demand programming languages and build your career in software development. From Python to JavaScript, learn the tools that power the digital world.
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
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Start Coding Today
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/50 flex items-center justify-center">
                  Choose Language
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>

            {/* Right Code Visualization */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
                
                {/* Animated Code Editor */}
                <div className="absolute inset-0 p-8">
                  {/* Editor Header */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-t-xl p-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white/80 text-sm ml-4">main.py</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-b-xl p-6 h-full">
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-white/60">1</span>
                        <span className="text-white/90">import</span>
                        <span className="text-blue-300">tensorflow</span>
                        <span className="text-white/90">as tf</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/60">2</span>
                        <span className="text-white/90">import</span>
                        <span className="text-blue-300">numpy</span>
                        <span className="text-white/90">as np</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/60">3</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/60">4</span>
                        <span className="text-purple-300">def</span>
                        <span className="text-yellow-300">create_model</span>
                        <span className="text-white/90">():</span>
                      </div>
                      <div className="flex items-center space-x-2 ml-6">
                        <span className="text-white/60">5</span>
                        <span className="text-white/90">model = tf.keras.Sequential([</span>
                      </div>
                      <div className="flex items-center space-x-2 ml-12">
                        <span className="text-white/60">6</span>
                        <span className="text-green-300">tf.keras.layers.Dense</span>
                        <span className="text-white/90">(128),</span>
                      </div>
                    </div>
                    
                    {/* Typing Cursor Animation */}
                    <div className="mt-4 flex items-center">
                      <span className="text-white/60 mr-2">7</span>
                      <div className="w-2 h-4 bg-white animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Language Icons */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <Code className="text-white" size={20} />
                </div>
                <div className="absolute bottom-16 left-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <Terminal className="text-white" size={16} />
                </div>
                <div className="absolute top-1/3 right-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <Database className="text-white" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Programming <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Industry Stats</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The numbers show why programming is the most valuable skill in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Programming */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Why Learn <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Programming?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Programming is not just coding - it's problem-solving, creativity, and building the future of technology.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Growing Demand</h3>
            <p className="text-slate-600">Software development jobs are growing 22% faster than average, with millions of new positions expected.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Creative Problem Solving</h3>
            <p className="text-slate-600">Develop logical thinking and creativity by building solutions that solve real-world problems.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Globe className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Global Impact</h3>
            <p className="text-slate-600">Create applications and systems that are used by millions of people around the world.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Trophy className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">High Earning Potential</h3>
            <p className="text-slate-600">Software developers earn some of the highest salaries across all industries and skill levels.</p>
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Master Popular <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Languages</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from the most in-demand programming languages and start building your career in software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programmingLanguages.map((language, index) => (
              <div
                key={language.title}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${language.bgColor} border border-white/50`}
                style={{
                  transform: `translateY(${scrollY * 0.03}px)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${language.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(language.icon, { className: "text-white" })}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                          {language.title}
                        </h3>
                        <div className="flex space-x-4 text-sm">
                          <div className="text-center">
                            <div className="font-bold text-slate-800">{language.popularity}</div>
                            <div className="text-slate-600 text-xs">Popular</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-slate-800">{language.salary}</div>
                            <div className="text-slate-600 text-xs">Avg Salary</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-slate-800">{language.jobs}</div>
                            <div className="text-slate-600 text-xs">Jobs</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {language.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {language.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-500" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`px-6 py-3 bg-gradient-to-r ${language.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group-hover:scale-105`}>
                        <span>Start Learning</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
              <Code size={48} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Coding?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join millions of developers worldwide and start building amazing applications. Choose your first programming language and begin your coding journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-white text-slate-800 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3">
                <Play className="text-indigo-500" size={24} />
                <span>Start Free Course</span>
              </button>
              <button className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3">
                <span>Browse Languages</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-white/80">Students Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-white/80">Coding Exercises</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammingLanguagesPage;