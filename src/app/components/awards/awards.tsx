// File: app/components/Awards.js
"use client";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  StarIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { awards } from "./data";
 

const Awards = () => {
  interface IconMap {
    competition: typeof TrophyIcon;
    recognition: typeof StarIcon;
    academic: typeof AcademicCapIcon;
    innovation: typeof RocketLaunchIcon;
    certification: typeof ShieldCheckIcon;
    achievement: typeof SparklesIcon;
  }

  type AwardType = keyof IconMap;

  const getIcon = (type: AwardType): React.ComponentType<React.SVGProps<SVGSVGElement>> => {
    const icons: IconMap = {
      competition: TrophyIcon,
      recognition: StarIcon,
      academic: AcademicCapIcon,
      innovation: RocketLaunchIcon,
      certification: ShieldCheckIcon,
      achievement: SparklesIcon,
    };
    return icons[type] || TrophyIcon;
  };

  interface GradientMap {
    competition: string;
    recognition: string;
    academic: string;
    innovation: string;
    certification: string;
    achievement: string;
  }

  const getGradient = (type: AwardType): string => {
    const gradients: GradientMap = {
      competition: "from-yellow-400 to-orange-500",
      recognition: "from-purple-400 to-pink-500",
      academic: "from-blue-400 to-indigo-500",
      innovation: "from-green-400 to-teal-500",
      certification: "from-red-400 to-rose-500",
      achievement: "from-cyan-400 to-blue-500",
    };
    return gradients[type] || "from-yellow-400 to-orange-500";
  };

  return (
    <section id="awards" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Awards & Recognition</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition for technical excellence, innovation, and contributions
            to the development community
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = getIcon(award.type as AwardType);
            const gradient = getGradient(award.type as AwardType);

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-all duration-300"
              >
                {/* Award Icon & Rank */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-20`}
                  >
                    <IconComponent
                      className={`w-8 h-8 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                    />
                  </div>
                  {award.rank && (
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-semibold`}
                    >
                      {award.rank}
                    </div>
                  )}
                </div>

                {/* Award Details */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-2">
                    {award.organization}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {award.description}
                  </p>
                </div>

                {/* Award Metrics */}
                {award.metrics && (
                  <div className="bg-dark-800/50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {Object.entries(award.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies/Skills */}
                {award.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {award.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-dark-800 px-2 py-1 rounded-md text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Date and Certificate Link */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{award.date}</span>
                  {award.certificateUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${gradient} text-white text-sm font-medium hover:shadow-lg transition-all duration-200`}
                      onClick={() =>
                        window.open(award.certificateUrl, "_blank")
                      }
                    >
                      View Certificate
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "12+", label: "Awards Won", icon: TrophyIcon },
            { number: "5+", label: "Competitions", icon: RocketLaunchIcon },
            { number: "3+", label: "Recognition", icon: StarIcon },
            { number: "98%", label: "Success Rate", icon: SparklesIcon },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-6 rounded-xl border border-primary-500/20"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
