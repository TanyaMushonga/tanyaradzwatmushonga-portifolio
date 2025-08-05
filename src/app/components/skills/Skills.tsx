"use client";
import { motion } from "framer-motion";
import { skills } from "./data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical skills across modern development stack and
            emerging technologies
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
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-effect p-6 rounded-xl border border-white/10 group hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-400/20 rounded-lg flex items-center justify-center mr-3">
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

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">
                          Proficiency
                        </span>
                        <span className="text-sm font-semibold text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-accent-400 h-2 rounded-full"
                        />
                      </div>
                    </div>

                    {skill.related && (
                      <div className="flex flex-wrap gap-2">
                        {skill.related.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-dark-800 px-2 py-1 rounded-md text-xs text-gray-300"
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
