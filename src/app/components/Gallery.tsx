"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "SECZim Codefest Runner Up 2026",
    category: "Hackathon",
    description:
      "Secured a $5,000 prize at the SECZim Codefest for developing a prudential risk-based supervision system.",
    src: "/gallery/seczim.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "POTRAZ Innovation Recognition 2025",
    category: "Award",
    description:
      "Recognized for FinTech innovation with IDSphere at the 2025 Innovation Expo, highlighting inclusive finance solutions.",
    src: "/gallery/potraz_innovation_expo_cert.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Best Innovator Trophy 2024",
    category: "Achievement",
    description:
      "Represented NUST and won top honors for an eco-friendly industrial innovation project.",
    src: "/gallery/best_innovator.jpeg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Pitching at ZITF Innovators Forum 2023",
    category: "Presentation",
    description:
      "Presented the Virtual Queuing product in the ZB Bank Innovators Pitch Competition to investors and partners.",
    src: "/gallery/zb_bank_innovators_pitch_competion.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "International Labour Organization Certification 2026",
    category: "Professional Development",
    description:
      "Completed the 'Start Your Business' training program, validating my ability to build and scale tech-enabled services.",
    src: "/gallery/siyb_cert.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Econet E-novate Expo 2025",
    category: "Exhibition",
    description:
      "Showcased NUST computer science innovations and engineering solutions at the Econet E-novate technology hub.",
    src: "/gallery/econet-eenovate.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "National Cyber Security Conference 2025",
    category: "Conference",
    description:
      "Presented and networked at the 2025 National Cyber Security Conference & Expo to deepen my security and cloud engineering practice.",
    src: "/gallery/national_cyber_security.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    title: "Mine Entra Exhibition 2025",
    category: "Exhibition",
    description:
      "Exhibited an underground mine surveillance system at the Mine Entra Exhibition under the POTRAZ booth.",
    src: "/gallery/mine_entra_potraz.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 9,
    title: "ZB Bank Hackathon Winner 2023",
    category: "Hackathon",
    description:
      "Won the ZB Bank Hackathon for developing a virtual queuing system to decongest bank queues.",
    src: "/gallery/zb_bank_hackthon_winner.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
];

const Gallery = () => {
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
          A visual journey through awards, product launches, cloud engineering
          milestones, and writing achievements.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative group overflow-hidden rounded-2xl bg-dark-800 border border-dark-700 ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary-400 text-xs md:text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.category}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
