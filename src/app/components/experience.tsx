"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Lanitech360",
    location: "Remote",
    type: "Contract",
    duration: "Dec 2025 - Present",
    current: true,
    description:
      "Lead frontend developer responsible for building comprehensive business suite applications. Owning the entire frontend architecture and API integration using Next.js and React.",
    achievements: [
      "Architecting and building business suite applications from scratch.",
      "Owning the complete frontend development lifecycle.",
      "Integrating complex APIs with the frontend interface.",
      "Ensuring high performance and scalable architectural patterns.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "The Transfomation Legacy",
    location: "Remote",
    type: "Part-time",
    duration: "Jan 2025 - Dec 2025",
    current: false,
    description:
      "As a fullstack developer l built an internal tool for a South African based company. They use it when carring out their assessment process, when assessing the perfomance of other companies.",
    achievements: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deploying the application on Vercel.",
      "Implementing robust authentication.",
      "Integrating with AWS services.",
      "Integrated ChatGPT API.",
    ],
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "ChatGPT API",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "Mobile Application Developer",
    company: "Mviyo Technologies",
    location: "On site, Bulawayo, Zimbabwe",
    type: "Internship",
    duration: "June 2024 - June 2025",
    current: false,
    description:
      "Responsible for developing and maintaining mobile applications using React Native. Collaborated with cross-functional teams to create high-quality products that meet user needs and business goals.",
    achievements: [
      "Developed web apps using React.js.",
      "Collaborated with cross-functional teams.",
      "Integrated with RESTful APIs & Stripe.",
      "Implemented responsive design.",
      "Collaborated on Safi & Safizen apps.",
      "Collaborated on ZimTicket mobile app.",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Django REST",
      "Docker",
    ],
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(experiences.length / itemsPerView) - 1;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused, nextSlide]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentBatch = experiences.slice(
    currentIndex * itemsPerView,
    (currentIndex * itemsPerView) + itemsPerView
  );

  // Hande edge case where last batch might have fewer items (though with 4 items and 2 per view it's exact)
  // If undefined, it just won't render, but let's ensure safety if data changes.

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional journey showcasing growth, achievements, and impact
            across various organizations
          </p>
        </motion.div>

        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hidden md:block"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hidden md:block"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="overflow-hidden min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {currentBatch.map((exp) => (
                  <div key={exp.id} className="glass-effect rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1" title={exp.title}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-400 font-semibold text-sm flex-wrap gap-2">
                          <BuildingOfficeIcon className="w-4 h-4" />
                          <span>{exp.company}</span>
                          {exp.current && (
                            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end text-gray-400 text-xs gap-1 shrink-0">
                        <div className="flex items-center">
                          <CalendarIcon className="w-3 h-3 mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="w-3 h-3 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                          <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.slice(0, 3).map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start text-gray-400 text-xs"
                            >
                              <ChevronRightIcon className="w-3 h-3 text-primary-400 mr-1.5 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-2">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                          <span className="w-1 h-4 bg-accent-500 rounded-full mr-2"></span>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.slice(0, 6).map((tech, i) => (
                            <span
                              key={i}
                              className="bg-white/5 border border-white/5 px-2 py-1 rounded text-xs text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-primary-500 w-8"
                  : "bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
