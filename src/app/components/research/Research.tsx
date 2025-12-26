"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, FlaskConical } from "lucide-react";
import Link from "next/link";
export const researchPapers = [
  {
    title: "Intelligent Aerial Traffic Observation System with Real-Time Speed Detection and Automated Citation Generation",
    abstract:
      "A dissertation project proposing an autonomous drone-based system for traffic enforcement. The study leverages computer vision algorithms to detect vehicle speed in real-time and automate citation generation, aiming to enhance road safety monitoring efficiency.",
    status: "In Review (Poster Submission)",
    journal: "12th ICAT Conference",
    date: "2026",
    link: "https://1drv.ms/w/c/60ca998cf444f795/IQBvbEVQFyrRTLYHs-MlP805AXvRknGSUdybnz7PKOnyKTk",
  },
  {
    title: "Securing Mobile Banking in Zimbabwe through Biometric Authentication: A Practical Framework",
    abstract:
      "An integrative review developing a robust security framework for the Zimbabwean fintech sector. The paper analyzes current vulnerabilities and proposes a practical implementation of biometric multi-factor authentication to mitigate mobile banking fraud.",
    status: "In Review (Full Paper Submission)",
    journal: "POTRAZ & ZCHPC",
    date: "2025",
    link: "https://docs.google.com/document/d/1KBjo7E-2shuq-vs2_R4ckWj0NB5xa-aSEc3CdamxmPQ/edit?usp=sharing",
  },
];
const Research = () => {
  return (
    <section id="research" className="py-20 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Academic Research</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Contributing to the advancement of software engineering through code and theory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-2xl border border-white/10 group hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-24 h-24 text-primary-500" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${paper.status === "Published"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : paper.status === "Under Review"
                      ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  }`}>
                  {paper.status}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <FileText className="w-3 h-3 mr-1" /> {paper.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {paper.title}
              </h3>

              <div className="text-sm text-primary-300 mb-4 font-medium">
                {paper.journal}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {paper.abstract}
              </p>

              <Link href={paper.link} target="_blank" className="flex items-center text-primary-400 text-sm font-medium cursor-pointer group-hover:underline">
                Read Abstract <FlaskConical className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
