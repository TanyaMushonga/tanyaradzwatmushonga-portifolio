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
              transition={{ delay: categoryIndex * 0.15 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <category.icon className="w-8 h-8 text-primary-400" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {category.category}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Horizontal skill highlights with real iconography and motion.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-dark-900 relative">
                {/* Gradient Masks for smooth fade */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{ 
                    duration: 30 + categoryIndex * 5, // Slightly different speeds for variety
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex gap-4 px-4 py-6 min-w-max"
                >
                  {[...category.items, ...category.items].map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={`${skill.name}-${index}`}
                        className="min-w-[240px] rounded-3xl border border-white/10 bg-dark-950 p-6 flex-shrink-0 hover:border-primary-500/50 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary-500/10 text-primary-400 flex items-center justify-center">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {skill.experience}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-300">
                          {skill.related.map((tech, i) => (
                            <span
                              key={i}
                              className="rounded-full border border-white/10 bg-white/5 px-2 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
