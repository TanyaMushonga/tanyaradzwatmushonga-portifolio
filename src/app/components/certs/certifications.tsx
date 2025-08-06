// File: app/components/Certifications.js
"use client";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  CloudIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ClockIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { certifications } from "./data";
import Image from "next/image";

const Certifications = () => {
  interface CategoryIcons {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }

  type CertificationCategory =
    | "cloud"
    | "development"
    | "data"
    | "security"
    | "ai"
    | "general";

  const getIcon = (
    category: CertificationCategory
  ): React.ComponentType<React.SVGProps<SVGSVGElement>> => {
    const icons: CategoryIcons = {
      cloud: CloudIcon,
      development: CodeBracketIcon,
      data: ChartBarIcon,
      security: ShieldCheckIcon,
      ai: CpuChipIcon,
      general: AcademicCapIcon,
    };
    return icons[category] || AcademicCapIcon;
  };

  interface CategoryColors {
    [key: string]: string;
  }

  const getCategoryColor = (category: CertificationCategory): string => {
    const colors: CategoryColors = {
      cloud: "from-blue-400 to-cyan-500",
      development: "from-green-400 to-emerald-500",
      data: "from-purple-400 to-violet-500",
      security: "from-red-400 to-rose-500",
      ai: "from-orange-400 to-amber-500",
      general: "from-indigo-400 to-blue-500",
    };
    return colors[category] || "from-gray-400 to-gray-500";
  };

  type CertificationStatus = "Active" | "Expired" | "Renewal Due";

  interface StatusColors {
    [key: string]: string;
  }

  const getStatusColor = (status: CertificationStatus): string => {
    const colors: StatusColors = {
      Active: "text-green-400 bg-green-400/20",
      Expired: "text-red-400 bg-red-400/20",
      "Renewal Due": "text-yellow-400 bg-yellow-400/20",
    };
    return colors[status] || "text-gray-400 bg-gray-400/20";
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise across various
            technologies and platforms
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = getIcon(
              cert.category as CertificationCategory
            );
            const categoryGradient = getCategoryColor(
              cert.category as CertificationCategory
            );
            const statusColor = getStatusColor(
              cert.status as CertificationStatus
            );

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl overflow-hidden border border-white/10 group hover:border-white/20 transition-all duration-300"
              >
                {/* Certificate Header */}
                <div
                  className={`bg-gradient-to-r ${categoryGradient} p-6 relative`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  {/* Organization Logo/Badge */}
                  <div className="flex items-center mb-2">
                    {cert.logo && (
                      <Image
                        width={30}
                        height={30}
                        src={cert.logo}
                        alt={cert.organization}
                        className="w-8 h-8 rounded bg-white/10 backdrop-blur-sm mr-3"
                      />
                    )}
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {cert.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  {cert.skills && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        Skills Covered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 4).map((skill, i) => (
                          <span
                            key={i}
                            className="bg-dark-800 px-2 py-1 rounded-md text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="bg-dark-800 px-2 py-1 rounded-md text-xs text-gray-400">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Certificate Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span>Issued:</span>
                      </div>
                      <span className="text-white">{cert.issueDate}</span>
                    </div>

                    {cert.expiryDate && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-400">
                          <ClockIcon className="w-4 h-4 mr-2" />
                          <span>Expires:</span>
                        </div>
                        <span className="text-white">{cert.expiryDate}</span>
                      </div>
                    )}

                    {cert.credentialId && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ID:</span>
                        <span className="text-primary-400 font-mono text-xs">
                          {cert.credentialId.slice(0, 12)}...
                        </span>
                      </div>
                    )}

                    {cert.score && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Score:</span>
                        <span className="text-accent-400 font-bold">
                          {cert.score}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {cert.certificateUrl && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-gradient-to-r ${categoryGradient} px-4 py-2 rounded-lg text-white font-medium text-sm hover:shadow-lg transition-all duration-200`}
                        onClick={() =>
                          window.open(cert.certificateUrl, "_blank")
                        }
                      >
                        View Certificate
                      </motion.button>
                    )}

                    {cert.verifyUrl && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full border border-primary-500/30 px-4 py-2 rounded-lg text-primary-400 font-medium text-sm hover:bg-primary-500/10 transition-colors"
                        onClick={() => window.open(cert.verifyUrl, "_blank")}
                      >
                        Verify Credential
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Certification Overview
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  number: certifications.length,
                  label: "Total Certifications",
                  icon: ShieldCheckIcon,
                  color: "text-primary-400",
                },
                {
                  number: certifications.filter((c) => c.status === "Active")
                    .length,
                  label: "Active Certifications",
                  icon: AcademicCapIcon,
                  color: "text-green-400",
                },
                {
                  number: new Set(certifications.map((c) => c.category)).size,
                  label: "Categories Covered",
                  icon: ChartBarIcon,
                  color: "text-accent-400",
                },
                {
                  number: new Set(certifications.map((c) => c.organization))
                    .size,
                  label: "Organizations",
                  icon: CloudIcon,
                  color: "text-purple-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certification Timeline */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                Recent Certifications
              </h4>
              <div className="space-y-3">
                {certifications
                  .sort(
                    (a, b) =>
                      new Date(b.issueDate).getTime() -
                      new Date(a.issueDate).getTime()
                  )
                  .slice(0, 3)
                  .map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-dark-800/50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(
                            cert.category as CertificationCategory
                          )} mr-3`}
                        />
                        <div>
                          <div className="text-white font-medium text-sm">
                            {cert.title}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {cert.organization}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-xs">
                        {cert.issueDate}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
