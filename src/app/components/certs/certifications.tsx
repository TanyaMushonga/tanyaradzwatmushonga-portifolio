"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Cloud,
  Cpu,
  Code,
  BarChart,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { certifications } from "./data";
import Link from "next/link";

const Certifications = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "cloud":
        return Cloud;
      case "development":
        return Code;
      case "data":
        return BarChart;
      case "security":
        return ShieldCheck;
      case "ai":
        return Cpu;
      default:
        return GraduationCap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "cloud":
        return "from-blue-400 to-cyan-500";
      case "development":
        return "from-green-400 to-emerald-500";
      case "data":
        return "from-purple-400 to-violet-500";
      case "security":
        return "from-red-400 to-rose-500";
      case "ai":
        return "from-orange-400 to-amber-500";
      default:
        return "from-indigo-400 to-blue-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-400 bg-green-400/20 border-green-400/30";
      case "Expired":
        return "text-red-400 bg-red-400/20 border-red-400/30";
      case "Renewal Due":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
      default:
        return "text-gray-400 bg-gray-400/20 border-white/10";
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Professional certifications demonstrating expertise across various technologies and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = getIcon(cert.category);
            const categoryGradient = getCategoryColor(cert.category);
            const statusColor = getStatusColor(cert.status);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden border border-white/10 group hover:border-white/20 transition-all duration-300 flex flex-col h-full"
              >
                <div className={`bg-gradient-to-r ${categoryGradient} p-6 relative`}>
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <IconComponent className="w-24 h-24 text-white" />
                  </div>

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-1 relative z-10 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-white/80 text-sm relative z-10 font-medium">
                    {cert.organization}
                  </p>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {cert.description}
                  </p>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="bg-dark-800 border border-white/5 px-2 py-1 rounded-md text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="text-xs text-gray-500 flex items-center px-1">
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="space-y-3 pt-4 border-t border-white/5 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Issued</span>
                      </div>
                      <span className="text-gray-300">{cert.issueDate}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <ShieldCheck className="w-4 h-4 mr-2" />
                          <span>ID</span>
                        </div>
                        <span className="text-primary-400 font-mono text-xs">
                          {cert.credentialId.slice(0, 8)}...
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 flex gap-3">
                    <Link href={cert.verifyUrl} target="_blank" className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" /> View
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
