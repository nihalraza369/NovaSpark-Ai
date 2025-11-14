import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Zap } from 'lucide-react'; // Assuming you still want these icons

const AboutPage = () => {
  const teamMembers = [
    { name: "Nihal Nughman", role: "Full Stack Web Developer", img_placeholder: "A smiling, professional man with short dark hair, wearing a casual but smart t-shirt, looking directly at the camera. The background is a subtly blurred modern office setting.", alt: "Nihal Nughman, Full Stack Web Developer" },
    // You can add more team members here
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-gray-100 min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Hero Section */}
        <motion.section
          className="text-center mb-20 md:mb-32"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
            Innovate, Inspire, Ignite
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            At NovaSpark, we're not just building technology; we're crafting experiences that empower, educate, and elevate. Join us on a journey to redefine possibilities.
          </p>
        </motion.section>

        {/* Mission, Vision, Values Section */}
        <section className="grid md:grid-cols-3 gap-10 mb-20 md:mb-32">
          <motion.div
            className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <Target size={48} className="text-blue-400 mb-5" />
            <h2 className="text-3xl font-bold mb-4 text-gray-50">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To be the catalyst for personal and technological breakthroughs, providing cutting-edge insights and tools that ignite innovation and foster continuous growth.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <Eye size={48} className="text-purple-400 mb-5" />
            <h2 className="text-3xl font-bold mb-4 text-gray-50">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Envisioning a world where technology and human potential converge seamlessly, creating a future rich with opportunity, understanding, and shared advancement.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <Zap size={48} className="text-pink-400 mb-5" />
            <h2 className="text-3xl font-bold mb-4 text-gray-50">Our Values</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-lg pl-2">
              <li>**Curiosity:** Always questioning, always learning.</li>
              <li>**Integrity:** Building trust through transparency.</li>
              <li>**Impact:** Creating meaningful change.</li>
              <li>**Collaboration:** Stronger together.</li>
            </ul>
          </motion.div>
        </section>

        {/* Call to Action / Core Philosophy */}
        <motion.section
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 md:p-16 rounded-3xl shadow-2xl text-center mb-20 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            We Believe in the Power of Connection
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Connecting people with knowledge, ideas with innovation, and potential with reality. This is the NovaSpark promise.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors duration-300 shadow-lg transform hover:scale-105">
            Explore Our Work
          </button>
        </motion.section>

        {/* Team Section */}
        <section className="text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-50 tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            Meet the Architect
          </motion.h2>
          <div className="grid justify-center"> {/* Centering the single team member */}
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 text-center transform hover:scale-105 transition-transform duration-300 max-w-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="w-40 h-40 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover rounded-full border-4 border-gray-800"
                    alt={member.alt}
                    src="IMG_0507.jpg" // Ensure this image path is correct or provide a dynamic one
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-50 mb-2">{member.name}</h3>
                <p className="text-blue-400 text-xl font-medium">{member.role}</p>
                <p className="text-gray-400 mt-4 text-md">
                  Driven by a passion for crafting robust and intuitive digital experiences, Nihal brings innovative solutions to life.
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-md text-gray-400 font-light">
            Note: The team section is designed for an illustrative purpose. More members will join the journey soon!
          </p>
        </section>
      </div>

      {/* Tailwind CSS for animated blobs */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.35, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;