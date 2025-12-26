"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Clock, Award } from "lucide-react";

const hackathons = [
  {
    name: "ZITF Innovators Forum 2024",
    role: "Team Lead & Lead Developer",
    project: "AgriConnect",
    description: "Developed an offline-first mobile app connecting rural farmers to urban markets using SMS-based synchronization.",
    achievement: "1st Place Winner - Best Agricultural Solution",
    timeframe: "48 Hours",
    stack: ["React Native", "Android", "SMS Gateway"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Harare Civic Tech Hackathon",
    role: "Frontend Engineer",
    project: "CityWatch",
    description: "Built a citizen reporting platform for municipal service delivery issues with geospatial tracking.",
    achievement: "Finalist - Top 5",
    timeframe: "24 Hours",
    stack: ["Next.js", "Mapbox GL", "Firebase"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "FinTech Innovation Challenge",
    role: "Solo Developer",
    project: "MullaFlow",
    description: "Prototyped a peer-to-peer micro-lending platform using blockchain for identity verification.",
    achievement: "Best Technical Implementation",
    timeframe: "36 Hours",
    stack: ["Solidity", "React", "Web3.js"],
    color: "from-purple-500 to-pink-500",
  },
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-accent-500/20 mb-4">
             <Trophy className="w-5 h-5 text-accent-400 mr-2" />
             <span className="text-accent-200 text-sm font-medium">Competitive Programming</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Rapid prototyping and problem-solving under pressure.
          </p>
        </motion.div>

        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/0 via-primary-500/50 to-primary-500/0 md:-translate-x-1/2" />

            <div className="space-y-12">
                {hackathons.map((event, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dark-950 border-2 border-primary-500 rounded-full translate-y-8 md:-translate-x-2 z-10 box-content shadow-[0_0_10px_rgba(14,165,233,0.5)]" />

                        {/* Spacer for Timeline Alignment */}
                        <div className="flex-1 hidden md:block" />

                        {/* Content Card */}
                        <div className="flex-1 ml-12 md:ml-0">
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="glass-effect p-6 rounded-2xl border border-white/10 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-10 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-20`} />

                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <div className="flex items-center text-primary-400 text-sm font-mono">
                                        <Clock className="w-4 h-4 mr-1" /> {event.timeframe}
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                        {event.role}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                                    {event.name}
                                </h3>
                                <div className="text-lg font-semibold gradient-text mb-4">
                                    {event.project}
                                </div>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {event.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-dark-800 rounded bg-opacity-50 text-xs text-gray-400 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
                                    <Award className="w-5 h-5 text-yellow-400 mr-3 shrink-0" />
                                    <span className="text-sm font-semibold text-white">{event.achievement}</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
