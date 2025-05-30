import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { Briefcase, MessageCircle, Users, Zap } from 'lucide-react';

    const services = [
      {
        icon: <Briefcase size={36} className="text-primary" />,
        title: "AI Strategy Consulting",
        description: "Leverage our expertise to integrate AI into your business strategy, unlocking new opportunities and efficiencies. We help you navigate the complexities of AI adoption.",
        detailsLink: "/services/ai-consulting",
        img_placeholder: "Business professionals discussing AI strategy around a futuristic interface",
        alt: "AI Strategy Consulting"
      },
      {
        icon: <Users size={36} className="text-primary" />,
        title: "Motivational Workshops",
        description: "Empower your team with our dynamic workshops focused on mindset, productivity, and leadership. Tailored to inspire action and foster a culture of growth.",
        detailsLink: "/services/motivational-workshops",
        img_placeholder: "Engaged audience participating in a motivational workshop",
        alt: "Motivational Workshops"
      },
      {
        icon: <Zap size={36} className="text-primary" />,
        title: "Tech Innovation Briefings",
        description: "Stay ahead of the curve with our curated briefings on the latest technological advancements, from Web3 to Quantum Computing. Understand the trends that matter.",
        detailsLink: "/services/tech-briefings",
        img_placeholder: "Abstract visualization of data streams and technological innovation",
        alt: "Tech Innovation Briefings"
      },
      {
        icon: <MessageCircle size={36} className="text-primary" />,
        title: "Personalized Coaching",
        description: "Achieve your personal and professional goals with one-on-one coaching sessions. We provide guidance and support tailored to your unique journey.",
        detailsLink: "/services/coaching",
        img_placeholder: "Coach and client in a productive one-on-one session",
        alt: "Personalized Coaching"
      },
    ];

    const ServicesPage = () => {
      return (
        <div className="bg-white text-slate-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="container mx-auto text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At NovaSpark, we offer a range of services designed to empower individuals and organizations. Explore how we can help you achieve your goals and navigate the future.
            </p>
          </motion.section>

          <section className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-slate-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-primary/20 transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="h-56 w-full bg-slate-200 overflow-hidden">
                     <img  class="w-full h-full object-cover" alt={service.alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-3">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                    <Link to={service.detailsLink} className="mt-auto">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

           <section className="container mx-auto text-center mt-16 md:mt-24 py-12 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-xl">
            <motion.h2 
              className="text-3xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-slate-600 max-w-xl mx-auto mb-8"
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today for a consultation and let's discuss how NovaSpark can help you or your organization thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-3 shadow-lg">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </section>
        </div>
      );
    };

    export default ServicesPage;