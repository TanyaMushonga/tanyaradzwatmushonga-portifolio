"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Clear status after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "hello@tanyaradzwatmushonga.me",
      href: "mailto:hello@tanyaradzwatmushonga.me",
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+263 77 123 4567",
      href: "tel:+263771234567",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Harare, Zimbabwe",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/tanyaradzwatm",
      color: "hover:text-gray-400",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tanyaradzwa-mushonga",
      color: "hover:text-blue-400",
    },
    {
      icon: TwitterIcon,
      label: "Twitter",
      href: "https://twitter.com/tanyaradzwa_tm",
      color: "hover:text-sky-400",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://instagram.com/tanyaradzwa.tm",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center ${
                    status.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                  ) : (
                    <ExclamationCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                  )}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-400 px-8 py-4 rounded-lg text-white font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  ) : (
                    <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center p-4 rounded-xl bg-dark-800/30 border border-white/5 hover:border-primary-500/30 transition-all duration-300 group"
                  >
                    <div className="bg-primary-500/20 p-3 rounded-lg mr-4 group-hover:bg-primary-500/30 transition-colors">
                      <info.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {info.label}
                      </div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center p-4 rounded-xl bg-dark-800/30 border border-white/5 hover:border-white/20 transition-all duration-300 text-gray-400 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 mr-3" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">
                  Currently Available
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;m currently accepting new projects and collaborations. Let&apos;s
                discuss how we can work together to bring your vision to life.
              </p>
              <div className="mt-4 flex items-center text-sm text-accent-400">
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-12 border border-white/10 bg-gradient-to-r from-primary-500/5 to-accent-400/5">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a complete web application, mobile app, or just
              want to discuss an idea, I&apos;m here to help turn your vision into
              reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-accent-400 px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="mailto:hello@tanyaradzwatmushonga.me"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 px-8 py-4 rounded-lg text-white font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Send Quick Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
