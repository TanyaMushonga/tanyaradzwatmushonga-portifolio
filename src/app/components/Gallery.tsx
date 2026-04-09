"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "SECZim Codefest Runner Up",
    category: "Hackathon",
    description:
      "Secured a $5,000 prize at the SECZim Codefest for Developing a Prudential Risk-Based Supervision System.",
    src: "/gallery/seczim.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "POTRAZ Innovation Recognition",
    category: "Award",
    description:
      "Awarded to IDSphere for transformative innovation in FinTech and promoting inclusive finance at the 2025 Innovation Expo.",
    src: "/gallery/potraz_innovation_expo_cert.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Best Innovator Trophy",
    category: "Achievement",
    description:
      "Representing NUST with the top honors for eco-friendly industrial innovation.",
    src: "/gallery/best_innovator.jpeg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Pitching at UNDP Accelerator Lab",
    category: "Presentation",
    description:
      "Presenting the Virtual Queuing solution during the ZB Bank Innovators Pitch Competition.",
    src: "/gallery/zb_bank_innovators_pitch_competion.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "International Labour Organization Certification",
    category: "Professional Development",
    description:
      "Completed the 'Start Your Business' (SYB) training program facilitated by Fine Touch Development Trust.",
    src: "/gallery/siyb_cert.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Econet E-novate Expo",
    category: "Exhibition",
    description:
      "Showcasing NUST computer science innovations at the Econet E-novate technology hub.",
    src: "/gallery/econet-eenovate.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "National Cyber Security Conference",
    category: "Conference",
    description:
      "Networking and presenting at the 2025 National Cyber Security Conference & Expo.",
    src: "/gallery/national_cyber_security.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    title: "Mine Entra Exhibition",
    category: "Exhibition",
    description:
      "Collaborating with POTRAZ at Mine Entra to discuss the future of ICTs in sustainable mining.",
    src: "/gallery/mine_entra_potraz.jpeg",
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
          A visual journey through my professional life, exhibitions, and
          recognition.
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
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary-400 text-sm font-medium mb-1">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
