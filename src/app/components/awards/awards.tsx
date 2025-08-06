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

  const getIcon = (
    type: AwardType
  ): React.ComponentType<React.SVGProps<SVGSVGElement>> => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = getIcon(award.type as AwardType);
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
                    className={`p-3 rounded-xl bg-gradient-to-r from-primary-400 to-primary-600 bg-opacity-20`}
                  >
                    <IconComponent
                      className={`w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent`}
                    />
                  </div>
                  {award.rank && (
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 text-white text-sm font-semibold`}
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

                {/* Date and Certificate Link */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{award.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
