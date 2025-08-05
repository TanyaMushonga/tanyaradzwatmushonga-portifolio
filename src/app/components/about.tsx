"use client";
import { motion } from "framer-motion";
import {
  UserIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer from{" "}
                <span className="text-primary-400 font-semibold">
                  Harare, Zimbabwe
                </span>
                , with a deep love for creating digital experiences that make a
                difference. My journey in tech started with curiosity and has
                evolved into a mission to build scalable, innovative solutions.
              </p>

              <p>
                With expertise spanning modern web technologies, cloud
                platforms, and emerging technologies like AI/ML, I bring ideas
                to life through clean code and thoughtful design. I believe in
                continuous learning and staying ahead of technological trends.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to
                open-source projects, mentoring fellow developers, or exploring
                the latest in tech innovation. I&apos;m always excited to
                collaborate on projects that challenge me and create positive
                impact.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center text-gray-400">
                <MapPinIcon className="w-5 h-5 mr-2 text-primary-400" />
                <span>Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center text-gray-400">
                <UserIcon className="w-5 h-5 mr-2 text-accent-400" />
                <span>Full Stack Developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 glass-effect rounded-3xl border border-white/20" />
              <Image
                src="/profile.jpg"
                alt="Tanyaradzwa Mushonga"
                className="relative z-10 w-full h-full object-cover rounded-3xl"
                width={400}
                height={400}
              />

           
              <motion.div
                animate={{ y: [0, -80, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 glass-effect p-4 rounded-xl border border-primary-500/30"
              >
                <CodeBracketIcon className="w-8 h-8 text-primary-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 80, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-effect p-4 rounded-xl border border-accent-500/30"
              >
                <RocketLaunchIcon className="w-8 h-8 text-accent-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
