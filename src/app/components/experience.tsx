"use client";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      type: "Full-time",
      duration: "Jan 2023 - Present",
      current: true,
      description:
        "Leading development of enterprise web applications serving 100K+ users. Architected microservices infrastructure reducing system downtime by 99.5%.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led team of 6 developers on multiple high-impact projects",
        "Implemented CI/CD pipeline increasing deployment frequency by 300%",
        "Mentored 10+ junior developers improving team productivity",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      location: "Harare, Zimbabwe",
      type: "Full-time",
      duration: "Jun 2022 - Dec 2022",
      current: false,
      description:
        "Developed and maintained multiple client projects including e-commerce platforms and business management systems.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Integrated payment systems processing $500K+ monthly",
        "Improved code quality through implementation of testing practices",
        "Collaborated with design team to create pixel-perfect UIs",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupHub Zimbabwe",
      location: "Harare, Zimbabwe",
      type: "Contract",
      duration: "Jan 2022 - May 2022",
      current: false,
      description:
        "Specialized in creating modern, responsive web interfaces for startup companies across various industries.",
      achievements: [
        "Developed 8 startup MVPs with rapid turnaround",
        "Achieved 95+ PageSpeed Insights scores on all projects",
        "Implemented modern design systems and component libraries",
        "Trained team on modern frontend development practices",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Figma", "SCSS"],
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      location: "Harare, Zimbabwe",
      type: "Full-time",
      duration: "Aug 2021 - Dec 2021",
      current: false,
      description:
        "Entry-level position focusing on frontend development and learning modern web technologies.",
      achievements: [
        "Completed 20+ client websites with zero bugs reported",
        "Learned and mastered React ecosystem in 3 months",
        "Contributed to company's design system and best practices",
        "Received 'Outstanding Newcomer' award",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "WordPress"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-400" />

          {/* Experience Items */}
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
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full border-4 border-dark-900 z-10" />

                {/* Content */}
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
                    {/* Experience Header */}
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

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Achievements */}
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

                    {/* Technologies */}
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
