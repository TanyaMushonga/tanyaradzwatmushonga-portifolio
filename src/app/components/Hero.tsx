"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "Problem Solver",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [floatingElements, setFloatingElements] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setFloatingElements(elements);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-accent-400/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary-500/20 mb-8"
        >
          <RocketLaunchIcon className="w-5 h-5 text-primary-400 mr-2" />
          <span className="text-sm text-gray-300">
            Welcome to my digital space
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Tanyaradzwa T Mushonga</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-20 mb-8 flex items-center justify-center"
        >
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 flex items-center">
            <CodeBracketIcon className="w-8 h-8 md:w-12 md:h-12 text-primary-400 mr-4" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" as const }}
                className="gradient-text"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          I create innovative digital experiences using cutting-edge
          technologies. Passionate about building scalable applications that
          make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const experienceElement = document.getElementById("projects");
              if (experienceElement) {
                experienceElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-primary-500 to-accent-400 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 neon-glow"
            type="button"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1paG-n4qLToDo1FXV9ZyUhizv3msFoaJ-/view?usp=sharing",
                "_blank"
              )
            }
            className="glass-effect px-8 py-4 rounded-full text-white font-semibold text-lg border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300"
            type="button"
          >
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
        >
          {[
            { number: "6+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "8+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-6 rounded-xl border border-primary-500/20"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-4">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut" as const,
            }}
            className="cursor-pointer"
            onClick={handleScrollToAbout}
          >
            <ArrowDownIcon className="w-6 h-6 text-primary-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut" as const,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
