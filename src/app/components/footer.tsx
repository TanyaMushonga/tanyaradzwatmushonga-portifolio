"use client";
import { motion } from "framer-motion";
import {
  HeartIcon,
  CodeBracketIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/tanyaradzwatm",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/tanyaradzwa-mushonga",
      label: "LinkedIn",
    },
    {
      icon: TwitterIcon,
      href: "https://twitter.com/tanyaradzwa_tm",
      label: "Twitter",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/tanyaradzwa.tm",
      label: "Instagram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-400/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">
                      Tanyaradzwa Mushonga
                    </h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Passionate about creating innovative digital solutions that
                  make a difference. Based in Harare, Zimbabwe, working with
                  clients globally.
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                      >
                        <CodeBracketIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">
                  Get In Touch
                </h4>
                <div className="space-y-3 text-gray-400">
                  <p>📧 hello@tanyaradzwatmushonga.me</p>
                  <p>📱 +263 77 123 4567</p>
                  <p>📍 Harare, Zimbabwe</p>
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                      Available for new projects
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 mb-4 md:mb-0"
            >
              <span>© {currentYear} Built with</span>
              <HeartIcon className="w-4 h-4 mx-2 text-red-400" />
              <span>by Tanyaradzwa Mushonga</span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUpIcon className="w-5 h-5" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-gray-400"
              >
                Made with Next.js & Tailwind CSS
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;