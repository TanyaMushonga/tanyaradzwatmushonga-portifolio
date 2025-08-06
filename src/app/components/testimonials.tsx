"use client";
import { motion } from "framer-motion";
import {
  ChatBubbleLeftIcon,
  StarIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  project: string;
  contact: {
    email: string;
    phone?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
  };
  workRelation: "Client" | "Colleague" | "Manager" | "Mentor";
  date: string;
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(
    null
  );

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Tatenda Kodzai",
      position: "Software Project Manager",
      company: "Mviyo Technologies",

      testimonial:
        "Working with Tanyaradzwa on the mobile app project was a fantastic experience. His React Native skills are top-notch, and he brings creative solutions to complex problems. He's also an excellent team player who mentors junior developers.",
      rating: 5,
      project: "ZimTickets",
      contact: {
        email: "tatenda.kodzai@mviyo.com",
        phone: "+26378425696",
        linkedin: "https://www.linkedin.com/in/tatenda-kodzai/",
      },
      workRelation: "Manager",
      date: "December 2024",
    },
    {
      id: 2,
      name: "Wyne Chitambara",
      position: "DevOps Engineer",
      company: "Mviyo technologies",

      testimonial:
        "I mentored Tanya and l was impressed by his ability to learn DevOps principles focusing on AWS and he quickly apply them to solve real-world problems.",
      rating: 5,
      project: "Safi Platform",
      contact: {
        email: "wyne.chitamba@mviyo.com",
        phone: "+263784331639",
        linkedin: "https://www.linkedin.com/in/wyne-c-b16b54114/",
      },
      workRelation: "Colleague",
      date: "April 2024",
    },
    {
      id: 3,
      name: "Matsemela Makhafola",
      position: "",
      company: "The Transformation Legacy",
      testimonial:
        "I was really impress when l worked with Tanyaradzwa, He is such a great communicator. He was updating me every stage of the project until it was completed and now we are actually using the platform the he built and it is doing exactly what we want it to do, no errors.",
      rating: 5,
      project: "TTL Business Diagnostic",
      contact: {
        email: "bmakhafola@tic-it.co.za",
        phone: "+27727290700",
      },
      workRelation: "Client",
      date: "July 2025",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  const getRelationColor = (relation: string) => {
    const colors = {
      Client: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Colleague: "bg-green-500/20 text-green-400 border-green-500/30",
      Manager: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Mentor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return (
      colors[relation as keyof typeof colors] ||
      "bg-gray-500/20 text-gray-400 border-gray-500/30"
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 relative bg-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-400/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What clients, colleagues, and industry professionals say about
            working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <ChatBubbleLeftIcon className="w-8 h-8 text-primary-400" />
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <blockquote className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>

                <div className="mb-4">
                  <div className="text-sm text-primary-400 font-medium mb-1">
                    Project: {testimonial.project}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.date}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-500 text-xs flex items-center">
                        <BuildingOfficeIcon className="w-3 h-3 mr-1" />
                        {testimonial.company}
                      </p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full border text-xs ${getRelationColor(
                        testimonial.workRelation
                      )}`}
                    >
                      {testimonial.workRelation}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={
                      activeTestimonial === testimonial.id
                        ? { opacity: 1, height: "auto" }
                        : {}
                    }
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/5 pt-3 mt-3">
                      <div className="text-xs text-gray-400 mb-2">
                        Contact Information:
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center text-gray-300">
                          <EnvelopeIcon className="w-3 h-3 mr-2" />
                          <a
                            href={`mailto:${testimonial.contact.email}`}
                            className="hover:text-primary-400 transition-colors"
                          >
                            {testimonial.contact.email}
                          </a>
                        </div>
                        {testimonial.contact.phone && (
                          <div className="flex items-center text-gray-300">
                            <PhoneIcon className="w-3 h-3 mr-2" />
                            <a
                              href={`tel:${testimonial.contact.phone}`}
                              className="hover:text-primary-400 transition-colors"
                            >
                              {testimonial.contact.phone}
                            </a>
                          </div>
                        )}
                        {testimonial.contact.website && (
                          <div className="flex items-center text-gray-300">
                            <GlobeAltIcon className="w-3 h-3 mr-2" />
                            <a
                              href={testimonial.contact.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary-400 transition-colors"
                            >
                              Website
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 mt-2">
                        {testimonial.contact.linkedin && (
                          <a
                            href={testimonial.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 bg-dark-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all"
                          >
                            <FaLinkedin className="w-3 h-3" />
                          </a>
                        )}
                        {testimonial.contact.twitter && (
                          <a
                            href={testimonial.contact.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 bg-dark-800 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all"
                          >
                            <FaTwitter className="w-3 h-3" />
                          </a>
                        )}
                        {testimonial.contact.github && (
                          <a
                            href={testimonial.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 bg-dark-800 rounded flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-500/20 transition-all"
                          >
                            <FaGithub className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        activeTestimonial === testimonial.id
                          ? null
                          : testimonial.id
                      )
                    }
                    className="w-full mt-3 py-2 text-xs text-primary-400 hover:text-primary-300 transition-colors border-t border-white/5"
                  >
                    {activeTestimonial === testimonial.id
                      ? "Hide Contact"
                      : "Show Contact"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
