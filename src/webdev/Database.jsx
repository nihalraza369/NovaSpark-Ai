import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Layers, 
  Globe, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Star,
  TrendingUp,
  Menu
} from 'lucide-react';

const DatabaseDocumentation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedTech, setSelectedTech] = useState('html');

  const technologies = [
    {
      id: 'html',
      name: 'HTML',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
      filters: ['Semantic HTML', 'Forms', 'Accessibility', 'SEO Basics']
    },
    {
      id: 'css',
      name: 'CSS',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500',
      filters: ['Flexbox', 'Grid', 'Animations', 'Responsive Design']
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      filters: ['ES6+', 'DOM Manipulation', 'Async/Await', 'APIs']
    },
    {
      id: 'react',
      name: 'React',
      icon: Layers,
      color: 'from-cyan-500 to-blue-500',
      filters: ['Components', 'Hooks', 'State Management', 'Router']
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      icon: Globe,
      color: 'from-teal-500 to-green-500',
      filters: ['Utility Classes', 'Components', 'Responsive', 'Dark Mode']
    },
    {
      id: 'html',
      name: 'HTML',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
      filters: ['Semantic HTML', 'Forms', 'Accessibility', 'SEO Basics']
    },
    {
      id: 'css',
      name: 'CSS',
      icon: Palette,
      color: 'from-blue-500 to-cyan-500',
      filters: ['Flexbox', 'Grid', 'Animations', 'Responsive Design']
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      filters: ['ES6+', 'DOM Manipulation', 'Async/Await', 'APIs']
    },
    {
      id: 'react',
      name: 'React',
      icon: Layers,
      color: 'from-cyan-500 to-blue-500',
      filters: ['Components', 'Hooks', 'State Management', 'Router']
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      icon: Globe,
      color: 'from-teal-500 to-green-500',
      filters: ['Utility Classes', 'Components', 'Responsive', 'Dark Mode']
    }
  ];

  const frontendContent = {
    title: "Database Management",
    definition: "Database management involves the creation, maintenance, and optimization of databases that store application data. It ensures data integrity, security, and efficient retrieval for web applications.",
    importance: [
      "Creates engaging user experiences",
      "Ensures accessibility for all users", 
      "Optimizes performance and loading speed",
      "Implements responsive design for all devices"
    ],
    whatYouLearn: [
      "HTML structure and semantic markup",
      "CSS styling and modern layout techniques",
      "JavaScript programming and DOM manipulation",
      "React components and state management",
      "Responsive design principles",
      "Performance optimization techniques"
    ]
  };

  const roadmapSteps = [
    { step: 1, title: "HTML Basics", desc: "Learn structure and semantics" },
    { step: 2, title: "CSS Fundamentals", desc: "Styling and layouts" },
    { step: 3, title: "JavaScript Core", desc: "Programming fundamentals" },
    { step: 4, title: "React Framework", desc: "Component-based development" },
    { step: 5, title: "Advanced Topics", desc: "Performance and optimization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-0 left-0 w-80 h-full bg-slate-900/98 backdrop-blur-md border-r border-slate-700/50 overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="p-4 border-b border-slate-700/50 bg-slate-800/50">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Technologies
                </h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
            </div>
            
            {/* Mobile Technology List */}
            <div className="p-4 space-y-3">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                const isFilterActive = activeFilter === tech.id;
                
                return (
                  <div key={tech.id} className="relative">
                    <div
                      className={`flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 cursor-pointer transition-all duration-200 border ${
                        selectedTech === tech.id ? 'border-cyan-400 bg-slate-700/80' : 'border-slate-700/30'
                      }`}
                      onClick={() => {
                        setSelectedTech(tech.id);
                        setActiveFilter(null); // Close any open filters
                      }}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${tech.color} shadow-lg`}>
                          <IconComponent size={18} className="text-white" />
                        </div>
                        <span className="font-medium text-slate-200">{tech.name}</span>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveFilter(activeFilter === tech.id ? null : tech.id);
                        }}
                        className={`p-2 rounded-lg transition-all ${
                          isFilterActive 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-emerald-500 hover:bg-emerald-600'
                        } shadow-md`}
                      >
                        {isFilterActive ? <X size={14} className="text-white" /> : <Filter size={14} className="text-white" />}
                      </button>
                    </div>

                    {/* Mobile Filter Panel */}
                    {isFilterActive && (
                      <div className="mt-3 p-4 bg-slate-800/80 rounded-xl border border-slate-600/50 shadow-xl backdrop-blur-sm">
                        <h4 className="font-medium text-slate-200 mb-3 text-sm">Filter Options</h4>
                        <div className="space-y-2">
                          {tech.filters.map((filter, index) => (
                            <button
                              key={index}
                              className="w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700/60 rounded-lg transition-colors border border-slate-600/30 hover:border-slate-500/50"
                            >
                              {filter}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 z-30 overflow-y-auto min-h-screen">
          
          {/* Desktop Sidebar Header */}
          <div className="p-4 border-b border-slate-700/50 bg-slate-800/30">
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </h2>
          </div>

          {/* Desktop Technology List */}
          <div className="p-3 space-y-2">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              const isFilterActive = activeFilter === tech.id;
              
              return (
                <div key={tech.id} className="relative">
                  <div
                    className={`flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 cursor-pointer transition-all duration-200 border ${
                      selectedTech === tech.id ? 'border-cyan-400 bg-slate-700/80' : 'border-slate-700/30'
                    }`}
                    onClick={() => {
                      setSelectedTech(tech.id);
                      setActiveFilter(activeFilter === tech.id ? null : tech.id);
                    }}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${tech.color} shadow-lg`}>
                        <IconComponent size={18} className="text-white" />
                      </div>
                      <span className="font-medium text-slate-200">{tech.name}</span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveFilter(activeFilter === tech.id ? null : tech.id);
                      }}
                      className={`p-2 rounded-lg transition-all ${
                        isFilterActive 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-emerald-500 hover:bg-emerald-600'
                      } shadow-md`}
                    >
                      {isFilterActive ? <X size={14} className="text-white" /> : <Filter size={14} className="text-white" />}
                    </button>
                  </div>

                  {/* Desktop Filter Panel */}
                  {isFilterActive && (
                    <div className="mt-3 p-4 bg-slate-800/80 rounded-xl border border-slate-600/50 shadow-xl backdrop-blur-sm">
                      <h4 className="font-medium text-slate-200 mb-3 text-sm">Filter Options</h4>
                      <div className="space-y-2">
                        {tech.filters.map((filter, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700/60 rounded-lg transition-colors border border-slate-600/30 hover:border-slate-500/50"
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-3 sm:p-4 lg:p-6 max-w-5xl mx-auto">
            
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden mb-6">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center space-x-3 p-4 bg-slate-800/80 rounded-xl border border-slate-700/50 hover:bg-slate-700/80 transition-all w-full backdrop-blur-sm shadow-lg"
              >
                <Menu size={20} className="text-cyan-400" />
                <span className="text-slate-200 font-medium">Browse Technologies</span>
              </button>
            </div>

            {/* Header Section */}
            <div className="mb-10 lg:mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl w-fit shadow-xl">
                  <Code2 size={36} className="text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                    {frontendContent.title}
                  </h1>
                  <div className="flex items-center space-x-2 mt-3">
                    <Star className="text-yellow-400" size={18} />
                    <span className="text-slate-400 text-lg">Complete Course Guide</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                  {frontendContent.definition}
                </p>
              </div>
            </div>

            {/* Learning Roadmap Section */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="mr-4 text-emerald-400" size={28} />
                Learning Roadmap
              </h2>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-3xl p-6 lg:p-10 border border-slate-600/50 backdrop-blur-sm shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                  {roadmapSteps.map((step, index) => (
                    <div key={step.step} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold mb-4 shadow-lg group-hover:shadow-cyan-500/25">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-lg">{step.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                      {index < roadmapSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full">
                          <ChevronRight className="text-slate-600 mx-auto" size={20} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Frontend is Important */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center">
                <BookOpen className="mr-4 text-blue-400" size={28} />
                Why Frontend Development is Important?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {frontendContent.importance.map((point, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 p-6 bg-slate-800/60 rounded-2xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm shadow-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                      <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendContent.whatYouLearn.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-2xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <p className="text-slate-200 font-medium leading-relaxed">{skill}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Stats */}
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Course Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group">
                  <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">50+</h3>
                    <p className="text-lg opacity-90">Interactive Lessons</p>
                  </div>
                </div>
                <div className="group">
                  <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl text-white transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">20+</h3>
                    <p className="text-lg opacity-90">Hands-on Projects</p>
                  </div>
                </div>
                <div className="group sm:col-span-2 lg:col-span-1">
                  <div className="p-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl text-white transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">100%</h3>
                    <p className="text-lg opacity-90">Practical Learning</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default DatabaseDocumentation;