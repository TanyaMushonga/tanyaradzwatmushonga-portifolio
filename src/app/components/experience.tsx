"use client";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
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

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full border-4 border-dark-900 z-10" />

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 pl-12 md:pl-0"
                      : "md:pl-12 pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-primary-400 font-semibold">
                          <BuildingOfficeIcon className="w-4 h-4 mr-2" />
                          <span>{exp.company}</span>
                          <span className="mx-2">•</span>
                          <span className="text-accent-400">{exp.type}</span>
                        </div>

                        <div className="flex items-center text-gray-400 text-sm">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          <span>{exp.duration}</span>
                          <span className="mx-2">•</span>
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
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
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-dark-800 px-3 py-1 rounded-md text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Experience;
