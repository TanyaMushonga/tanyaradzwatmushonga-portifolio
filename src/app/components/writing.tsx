"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://console.tanyaradzwatmushonga.me/api";

interface Article {
  title: string;
  description: string;
  slug: string;
  readTime?: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
}

interface Collection {
  id: string | number;
  name?: string;
  title?: string;
  description: string;
  slug: string;
  coverImgUrl?: string;
  articles?: Array<unknown>;
  createdAt?: string;
  updatedAt?: string;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
};

const Writing = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [articlesRes, collectionsRes] = await Promise.all([
          fetch(`${API_BASE}/blog?page=1&page_size=6`),
          fetch(`${API_BASE}/collections`),
        ]);

        if (!articlesRes.ok) {
          throw new Error("Failed to fetch latest blog articles.");
        }
        if (!collectionsRes.ok) {
          throw new Error("Failed to fetch series collections.");
        }

        const articlesData = await articlesRes.json();
        const collectionsData = await collectionsRes.json();

        const latestArticles: Article[] = articlesData.blogs || [];
        const latestCollections: Collection[] =
          Array.isArray(collectionsData) ? collectionsData : collectionsData.collections || [];

        setArticles(latestArticles.slice(0, 4));
        setCollections(latestCollections.slice(0, 3));
      } catch (fetchError) {
        console.error("Error fetching blog highlights:", fetchError);
        setError("Unable to load blog highlights at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const latestArticle = articles[0];
  const featuredArticles = articles.slice(1, 4);

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
            Live highlights from my technical blog, showcasing the latest series,
            deep-dive articles, and platform engineering insights.
          </p>
        </motion.div>

        {error ? (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-red-200">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6">
            <div className="space-y-6">
              {loading ? (
                <div className="space-y-4">
                  <div className="h-72 rounded-3xl bg-dark-800 animate-pulse" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="h-52 rounded-3xl bg-dark-800 animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {latestArticle ? (
                    <a
                      href={`https://blog.tanyaradzwatmushonga.me/blog/${latestArticle.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-3xl border border-white/10 bg-dark-900 p-8 transition-all duration-300 hover:border-primary-500/30"
                    >
                      <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.24em] text-primary-400 font-semibold">
                        <BookOpenIcon className="w-4 h-4" />
                        Latest Article
                      </div>
                      <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">
                        {latestArticle.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {latestArticle.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 items-center">
                        {latestArticle.readTime && <span>{latestArticle.readTime} read</span>}
                        <span>{formatDate(latestArticle.publishedAt || latestArticle.updatedAt)}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="rounded-3xl border border-white/10 bg-dark-900 p-8 text-gray-300">
                      No latest blog article available right now.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredArticles.map((article) => (
                      <a
                        key={article.slug}
                        href={`https://blog.tanyaradzwatmushonga.me/blog/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-3xl border border-white/10 bg-dark-900 p-6 transition-all duration-300 hover:border-primary-500/30"
                      >
                        <div className="text-xs uppercase tracking-[0.24em] text-primary-400 font-semibold mb-3">
                          {article.category || "Technical Article"}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-3">
                          {article.title}
                        </h4>
                        <p className="text-gray-400 text-sm line-clamp-3">
                          {article.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-dark-900 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Latest Series
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Curated learning paths from the blog.
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="space-y-4">
                  {loading ? (
                    <div className="space-y-3">
                      {[...Array(3)].map((index) => (
                        <div
                          key={index}
                          className="h-20 rounded-2xl bg-dark-800 animate-pulse"
                        />
                      ))}
                    </div>
                  ) : collections.length > 0 ? (
                    collections.map((collection) => {
                      const collectionName = collection.name || collection.title || "Series";
                      const modulesCount = collection.articles?.length ?? 0;
                      const publishedDate = formatDate(collection.createdAt || collection.updatedAt);

                      return (
                        <a
                          key={collection.id}
                          href={`https://blog.tanyaradzwatmushonga.me/series/${collection.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-3xl border border-white/10 bg-dark-950 p-4 transition-all duration-300 hover:border-primary-500/30"
                        >
                          <div className="text-sm text-gray-400 mb-2">
                            {collectionName}
                          </div>
                          <div className="flex items-center justify-between gap-4 mb-3 text-xs uppercase tracking-[0.24em] text-primary-400 font-semibold">
                            <span>{modulesCount} module{modulesCount === 1 ? "" : "s"}</span>
                            {publishedDate && <span>{publishedDate}</span>}
                          </div>
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {collection.description}
                          </p>
                        </a>
                      );
                    })
                  ) : (
                    <div className="text-gray-400">No series available yet.</div>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-dark-900 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Blog Home</h3>
                  <span className="text-sm text-primary-400">console</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Read the full blog for deep dives on system design, cloud
                  engineering, and production-ready platform development.
                </p>
                <a
                  href="https://blog.tanyaradzwatmushonga.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-400"
                >
                  Visit the blog
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Writing;
