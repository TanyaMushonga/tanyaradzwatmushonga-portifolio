"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "SECZim Codefest Runner Up 2026",
    category: "Hackathon",
    description:
      "Led a high-performing engineering team to secure second place and a $5,000 prize at the SECZim Codefest. We designed and engineered a robust, data-driven prudential risk-based supervision system tailored for real-time market compliance and automated anomaly detection.",
    src: "/gallery/seczim.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "POTRAZ Innovation Recognition 2025",
    category: "Award",
    description:
      "Honoured at the national Innovation Expo by POTRAZ for pioneering FinTech advancement with IDSphere. The project focused on building secure, accessible digital identity infrastructure designed to drive financial inclusion and lower barriers for underserved communities.",
    src: "/gallery/potraz_innovation_expo_cert.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Best Innovator Trophy 2024",
    category: "Achievement",
    description:
      "Represented the National University of Science and Technology (NUST) on a competitive stage, capturing top honours for an eco-friendly industrial innovation project. Engineered the core software architecture to monitor and optimise green industrial workflows.",
    src: "/gallery/best_innovator.jpeg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Pitching at ZITF Innovators Forum 2023",
    category: "Presentation",
    description:
      "Delivered a technical and business pitch for our proprietary Virtual Queuing product at the ZB Bank Innovators Pitch Competition. Engaged directly with venture capitalists, institutional investors, and strategic banking partners to secure growth opportunities.",
    src: "/gallery/zb_bank_innovators_pitch_competion.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "International Labour Organisation Certification 2026",
    category: "Professional Development",
    description:
      "Completed an intensive, fully sponsored 'Start Your Business' (SYB) training program validated by the International Labour Organisation. The curriculum refined my capabilities in operational scaling, financial planning, and launching tech-enabled commercial services.",
    src: "/gallery/siyb_cert.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Econet E-novate Expo 2025",
    category: "Exhibition",
    description:
      "Selected to showcase NUST computer science breakthroughs and software innovations at the Econet E-novate technology hub, demonstrating enterprise-grade system architectures to industry leaders, tech executives, and digital analysts.",
    src: "/gallery/econet-eenovate.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "National Cyber Security Conference 2025",
    category: "Conference",
    description:
      "Presented research and collaborated with cybersecurity experts at the annual National Cyber Security Conference & Expo. Focused on integrating advanced cloud security practices, zero-trust architectures, and robust devsecops workflows into scalable systems.",
    src: "/gallery/national_cyber_security.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    title: "Mine Entra Exhibition 2025",
    category: "Exhibition",
    description:
      "Exhibited an IoT-driven underground mine surveillance and safety telemetry system under the official POTRAZ pavilion. Demonstrated real-time data streaming pipelines and automated hazard warning networks to mining executives and regulatory bodies.",
    src: "/gallery/mine_entra_potraz.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 9,
    title: "ZB Bank Hackathon Winner 2023",
    category: "Hackathon",
    description:
      "Clinched first place at the ZB Bank Hackathon by architecting and developing an enterprise virtual queuing system. The solution targeted retail banking bottlenecks, utilizing real-time scheduling algorithms to seamlessly decongest physical branches.",
    src: "/gallery/zb_bank_hackthon_winner.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 10,
    title: "Transit to South Africa",
    category: "Travel",
    description:
      "Travelling to Cape Town, South Africa, to participate in international academic dialogue. This journey marked a transition from localized engineering execution to presenting original research on a global continent-wide stage.",
    src: "/gallery/flying-to-cape-town.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 11,
    title: "IEOM Conference Cape Town",
    category: "Conference",
    description:
      "Attended the 7th African International Conference on Industrial Engineering and Operations Management in Green Point, Cape Town. Engaged with global researchers, peer-reviewed contributors, and computing experts to discuss automation and operations.",
    src: "/gallery/IEOM-cape-town.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 12,
    title: "Best Paper Award",
    category: "Award",
    description:
      "Awarded the prestigious Best Paper Award at the IEOM Conference in Cape Town. The peer-reviewed research was recognized for its technical depth, methodological rigour, and high-impact contribution to engineering and data-driven systems.",
    src: "/gallery/best-paper-award.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Gallery & <span className="text-primary-400">Milestones</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-dark-400 max-w-2xl mx-auto"
        >
          A visual journey through engineering achievements, product launches, academic 
          research presentations, and technical milestones.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedItem(item)}
            className={`relative group overflow-hidden rounded-2xl bg-dark-800 border border-dark-700 cursor-pointer ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Increased background opacity on hover for readability of longer text */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary-400 text-xs md:text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.category}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm line-clamp-4 md:line-clamp-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-dark-900/50 hover:bg-dark-900 rounded-full text-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full md:w-2/3 h-[40vh] md:h-[70vh] bg-dark-900">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-dark-800 overflow-y-auto">
                <span className="text-primary-400 text-sm font-medium mb-2 uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;