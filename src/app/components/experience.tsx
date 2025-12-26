"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "The Transfomation Legacy",
      location: "Remote",
      type: "Part-time",
      duration: "Jan 2025 - Present",
      current: true,
      description:
        "As a fullstack developer l built an internal tool for a South African based company. They use it when carring out their assessment process, when assessing the perfomance of other companies.",
      achievements: [
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Deploying the application on Vercel, and managing different environments.",
        "Implementing robust authentication and authorization system. Using session based authentication and role based access control.",
        "Integrating the application with AWS services, like S3 for file storage, RDS for database",
        "Integrated ChatGPT API for report generation and analytics",
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
      id: 2,
      title: "Mobile Application Developer",
      company: "Mviyo Technologies",
      location: "On site, Bulawayo, Zimbabwe",
      type: "Internship",
      duration: "June 2024 - June 2025",
      current: false,
      description:
        "As a Mobile Application Developer at Mviyo Technologies, I was responsible for developing and maintaining mobile applications using React Native and other related technologies. My role involved collaborating with cross-functional teams to create high-quality products that meet user needs and business goals. I also had a touch on the backend development using Django Rest Framework.",
      achievements: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Integrated with RESTful APIs, third-party libraries, and services like stripe for payment processing.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Participated in code reviews and providing constructive feedback to other developers.",
        "Collaborated on Safi a mobile application that is used by people to book cleaning services.",
        "Collaborated on Safizen a mobile application that is used by people who offer cleaning services to find clients who uses Safi.",
        "Collaborated on ZimTicket a mobile app that is used for accessing a range of events in Zimbabwe from different event orginizers. The app facilitates the buying of tickets for events.",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
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

  const currentExp = experiences[currentIndex];

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
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hidden md:block"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hidden md:block"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="overflow-hidden min-h-[600px]">
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
                className="w-full"
              >
                <div className="glass-effect rounded-2xl p-8 border border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {currentExp.title}
                      </h3>
                      <div className="flex items-center text-primary-400 font-semibold text-lg flex-wrap gap-2">
                        <BuildingOfficeIcon className="w-5 h-5" />
                        <span>{currentExp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-accent-400">{currentExp.type}</span>
                        {currentExp.current && (
                          <span className="ml-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end text-gray-400 text-sm gap-2">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span>{currentExp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span>{currentExp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {currentExp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {currentExp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-300 text-sm"
                          >
                            <ChevronRightIcon className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <span className="w-1 h-6 bg-accent-500 rounded-full mr-3"></span>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentExp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white/5 border border-white/5 hover:border-white/20 px-3 py-1.5 rounded-lg text-sm text-gray-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {experiences.map((_, index) => (
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
