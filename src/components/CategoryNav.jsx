import React from 'react';
    import { motion } from 'framer-motion';
    import { ChevronRight } from 'lucide-react';

    const CategoryNav = ({ categories, title }) => {
      if (!categories || categories.length === 0) {
        return null;
      }

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };

      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 100,
          },
        },
      };

      return (
        <nav className="bg-slate-800 py-8 border-b border-t border-slate-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {title && <h2 className="text-2xl font-semibold text-center text-blue-400 mb-6">{title}</h2>}
            <motion.ul
              className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.li key={category.id || category.name} variants={itemVariants}>
                  <a
                    href={category.href || `/category/${category.id}`}
                    className="group flex items-center text-lg font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 ease-in-out"
                  >
                    {category.name}
                    <ChevronRight className="ml-1 h-5 w-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-blue-400" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </nav>
      );
    };

    export default CategoryNav;