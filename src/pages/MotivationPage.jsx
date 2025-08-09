import React, { useState, useEffect } from 'react';
import { Code, Database, GitBranch, Server, Globe, Lightbulb, Target, BarChart3, Sparkles, Brain, Users, ChevronRight, Play, ArrowRight, CheckCircle, Star, Trophy, Zap } from 'lucide-react';
import FrontendDocumentation from "@/webdev/Frontend";
import BackendDocumentation from '../webdev/Backend';
import DatabaseDocumentation from '../webdev/Deployment';
import DeploymentDocumentation from '../webdev/Deployment';
import ToolandResourseDocumentation from '../webdev/ToolandResourse';
import VersionControlDocumentation from '../webdev/Versioncontrol';

const WebDevelopmentMotivationPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const motivationalTopics = [
    {
      title: "Frontend Development",
      description: "Create stunning user interfaces that users love. Master React, Vue, Angular and build beautiful, responsive web applications that engage millions of users worldwide.",
      icon: <Code size={32} className="text-blue-500" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["React & Vue.js", "Responsive Design", "Interactive UIs", "Modern CSS"],
      detailsLink: "/webdev/Frontend"
    },
    {
      title: "Backend Development",
      description: "Build the backbone of web applications. Learn Node.js, Python, Java and create robust APIs, handle databases, and manage server-side logic that powers the digital world.",
      icon: <Server size={32} className="text-green-500" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: ["Node.js & Python", "REST APIs", "Authentication", "Cloud Services"],
      detailsLink: "/webdev/Backend"
    },
    {
      title: "Database Management",
      description: "Store, organize and retrieve data efficiently. Master SQL, NoSQL databases and learn how to design schemas that can handle millions of records seamlessly.",
      icon: <Database size={32} className="text-purple-500" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: ["MySQL & MongoDB", "Database Design", "Query Optimization", "Data Security"],
      detailsLink: "/webdev/Database"
    },
    {
      title: "Version Control",
      description: "Collaborate like a pro developer. Master Git, GitHub workflows and learn how to manage code versions, work in teams, and contribute to open source projects.",
      icon: <GitBranch size={32} className="text-orange-500" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: ["Git & GitHub", "Branching Strategies", "Code Reviews", "Team Collaboration"],
      detailsLink: "/webdev/VersionControl"
    },
    {
      title: "Deployment & DevOps",
      description: "Take your applications live! Learn Docker, AWS, CI/CD pipelines and deploy scalable applications that can handle thousands of concurrent users.",
      icon: <Globe size={32} className="text-indigo-500" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      features: ["Docker & Kubernetes", "AWS & Azure", "CI/CD Pipelines", "Performance Optimization"],
      detailsLink: "/webdev/Deployment"
    },
    {
      title: "Tools & Resources",
      description: "Discover the best development tools, frameworks, and resources that will accelerate your learning journey and make you a more productive developer.",
      icon: <Zap size={32} className="text-yellow-500" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      features: ["VS Code Tips", "Chrome DevTools", "Testing Frameworks", "Productivity Tools"],
      detailsLink: "/webdev/ToolandResourse"
    },
  ];

  const benefits = [
    { icon: <Trophy className="text-yellow-500" />, title: "High Salary Potential", desc: "Web developers earn $70k-$150k+ annually" },
    { icon: <Globe className="text-blue-500" />, title: "Work From Anywhere", desc: "Remote opportunities across the globe" },
    { icon: <Star className="text-purple-500" />, title: "Creative Freedom", desc: "Build innovative solutions and express creativity" },
    { icon: <Target className="text-green-500" />, title: "Job Security", desc: "High demand with growing tech industry" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
                <Code size={36} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Web Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Transform your ideas into powerful web applications. Join millions of developers worldwide and build the future of the internet.
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
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Start Learning Today
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/50 flex items-center justify-center">
                  View Roadmap
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>

            {/* Right Diagram/Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8">
                    {/* Animated Code Blocks */}
                    <div className="col-span-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 animate-pulse">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-3/4 h-2 bg-white/40 rounded"></div>
                        <div className="w-1/2 h-2 bg-white/40 rounded"></div>
                        <div className="w-2/3 h-2 bg-white/40 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                      <Database className="text-white" size={24} />
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                      <Server className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <CheckCircle className="text-white" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Web Development */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Web Development?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Web development is the most in-demand skill in the digital age. Here's why you should start your journey today.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BarChart3 className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Growing Industry</h3>
            <p className="text-slate-600">Web development jobs are projected to grow 23% from 2021 to 2031, much faster than average.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Problem Solving</h3>
            <p className="text-slate-600">Develop critical thinking and logical reasoning skills that apply to all areas of life.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lightbulb className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Innovation</h3>
            <p className="text-slate-600">Be at the forefront of technology and create solutions that impact millions of people.</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-800">Community</h3>
            <p className="text-slate-600">Join a supportive global community of developers who share knowledge and collaborate.</p>
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Master Every <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Aspect</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From frontend magic to backend power, learn all the skills you need to become a complete web developer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {motivationalTopics.map((topic, index) => (
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
                      {topic.detailsLink && (
                        <a
                          href={topic.detailsLink}
                          className={`px-6 py-3 bg-gradient-to-r ${topic.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group-hover:scale-105`}
                        >
                          <span>Start Learning</span>
                          <ChevronRight size={18} />
                        </a>
                      )}
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
              <Sparkles size={48} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join thousands of successful developers who started their careers with our comprehensive courses and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-white text-slate-800 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3">
                <Trophy className="text-yellow-500" size={24} />
                <span>Start Free Course</span>
              </button>
              <button className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3">
                <span>View Success Stories</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                <div className="text-white/80">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentMotivationPage;