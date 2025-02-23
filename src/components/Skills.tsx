import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code2, Database, Globe, Bot } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "Python"]
  },
  {
    category: "Data Science, AI, and Machine Learning",
    icon: <Bot className="w-6 h-6" />,
    items: ["Pandas", "Big Data", "NumPy", "Data Mining", "Python", "Jupyter Notebooks", "R Studio"]
  },
  {
    category: "Other",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Git", "CI/CD", "Cloud Computing", "DevOps", "Linux"]
  }
];

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    startAutoScroll(); // Start auto-scroll on page load
  }, []);

  const startAutoScroll = async () => {
    await controls.start({ x: 0 }); // Reset position
    controls.start({ 
      x: "-100%", 
      transition: { ease: "linear", duration: 25, repeat: Infinity } // Continuous loop
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
        
        <motion.div 
          className="overflow-hidden cursor-grab" 
          whileTap={{ cursor: "grabbing" }}
          ref={ref}
        >
          <motion.div 
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }} 
            className="flex space-x-6"
            animate={controls}
            initial={{ x: 0 }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            onDragEnd={() => startAutoScroll()} // Resume scrolling after manual drag
          >
            {/* Duplicate skills for infinite loop */}
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div 
                key={index} 
                className="min-w-[300px] bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

