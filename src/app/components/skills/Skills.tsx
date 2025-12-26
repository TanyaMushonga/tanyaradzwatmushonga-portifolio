"use client";
import { motion } from "framer-motion";
import { skills } from "./data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized in the React ecosystem with strong backend foundations.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center mb-8">
                <category.icon className="w-8 h-8 text-primary-400 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05, zIndex: 10 }}
                    animate={{
                      y: [0, -8, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: skillIndex * 0.5
                      }
                    }}
                    className="glass-effect p-6 rounded-xl border border-white/10 group hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-400/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{skill.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {skill.experience}
                          </p>
                        </div>
                      </div>
                    </div>

                    {skill.related && (
                      <div className="flex flex-wrap gap-2 relative z-10 mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                        {skill.related.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white/5 border border-white/5 px-2 py-1 rounded-md text-xs text-gray-300 group-hover:bg-white/10 group-hover:border-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
