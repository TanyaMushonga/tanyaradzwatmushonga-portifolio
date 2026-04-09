"use client";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const articles = [
  {
    title: "AWS Cloud Engineering Series — 110 Modules of Real-World Infrastructure",
    description:
      "A complete learning path covering CI/CD, monitoring, resilient APIs, and cloud networking for production-grade systems.",
    link: "https://blog.tanyaradzwatmushonga.me/",
    tag: "Cloud Engineering",
  },
  {
    title: "Designing Scalable Django REST APIs for High-Traffic Mobile Platforms",
    description:
      "Practical patterns for API design, authentication, caching, and reliability in mobile-first ecosystems.",
    link: "https://blog.tanyaradzwatmushonga.me/",
    tag: "Backend Architecture",
  },
  {
    title: "Building Resilient Real-Time Systems for Service Marketplaces",
    description:
      "Lessons from architecting booking, notification, and provider routing flows for the Safi platform.",
    link: "https://blog.tanyaradzwatmushonga.me/",
    tag: "Thought Leadership",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Writing & Thought Leadership</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            In-depth technical writing that demonstrates my cloud architecture,
            backend API design, and platform engineering experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-3xl border border-white/10 p-8 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.24em] text-primary-400 font-semibold">
                  {article.tag}
                </span>
                <DocumentTextIcon className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {article.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{article.description}</p>
              <div className="flex items-center gap-2 text-primary-300 font-medium">
                <span>Read on the blog</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
