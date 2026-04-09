"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface GithubUser {
  login: string;
  avatar_url?: string;
  public_repos?: number;
  followers?: number;
  html_url?: string;
}

interface GithubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
  html_url: string;
}

interface GithubEvent {
  id: string;
  type: string;
  repo: { name: string };
  payload: Record<string, unknown>;
  created_at: string;
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

const GithubHighlights = () => {
  const [githubUser, setGithubUser] = useState<GithubUser | null>(null);
  const [githubEvents, setGithubEvents] = useState<GithubEvent[]>([]);
  const [stats, setStats] = useState({
    contributionsThisYear: 0,
    mostStarredRepo: null as GithubRepo | null,
    mostContributedRepo: null as GithubRepo | null,
    totalStars: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        setLoading(true);
        const [userRes, eventsRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/TanyaMushonga"),
          fetch("https://api.github.com/users/TanyaMushonga/events/public?per_page=100"),
          fetch("https://api.github.com/users/TanyaMushonga/repos?per_page=100&sort=stars"),
        ]);

        if (!userRes.ok || !eventsRes.ok || !reposRes.ok) {
          throw new Error("GitHub information unavailable.");
        }

        const userData = await userRes.json();
        const eventsData = (await eventsRes.json()) as GithubEvent[];
        const reposData = (await reposRes.json()) as GithubRepo[];

        setGithubUser(userData);
        setGithubEvents(eventsData.slice(0, 4));

        // Calculate contributions this year
        const currentYear = new Date().getFullYear();
        const thisYearStart = new Date(currentYear, 0, 1);
        const thisYearContributions = eventsData.filter(
          (event) => new Date(event.created_at) >= thisYearStart
        ).length;

        // Find most starred repo
        const mostStarred = reposData.reduce(
          (max, repo) =>
            repo.stargazers_count > (max?.stargazers_count ?? 0) ? repo : max,
          null as GithubRepo | null
        );

        // Find most forked repo (as proxy for most contributed)
        const mostForked = reposData.reduce(
          (max, repo) =>
            repo.forks_count > (max?.forks_count ?? 0) ? repo : max,
          null as GithubRepo | null
        );

        // Calculate total stars
        const totalStars = reposData.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );

        setStats({
          contributionsThisYear: thisYearContributions,
          mostStarredRepo: mostStarred,
          mostContributedRepo: mostForked,
          totalStars,
        });
      } catch (fetchError) {
        console.error("Error loading GitHub highlights:", fetchError);
        setError("Unable to load GitHub highlights right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, []);

  const renderAction = (event: GithubEvent) => {
    const repoName = event.repo?.name ?? "repository";
    const payload = event.payload as {
      size?: number;
      action?: string;
    } | undefined;

    if (event.type === "PushEvent") {
      const commitCount = payload?.size ?? 1;
      return `Pushed ${commitCount} commit${commitCount === 1 ? "" : "s"} to ${repoName}`;
    }

    if (event.type === "PullRequestEvent") {
      const actionType = payload?.action || "updated";
      return `${actionType} pull request in ${repoName}`;
    }

    if (event.type === "IssuesEvent") {
      const actionType = payload?.action || "updated";
      return `${actionType} issue in ${repoName}`;
    }

    if (event.type === "CreateEvent") {
      return `Created content in ${repoName}`;
    }

    return `${event.type} on ${repoName}`;
  };

  return (
    <section id="github-highlights" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">GitHub Highlights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Public contribution highlights pulled from my GitHub profile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="rounded-3xl border border-white/10 bg-dark-900 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Contribution summary
                </h3>
                <p className="text-gray-400 text-sm">GitHub stats & activity</p>
              </div>
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-400" />
            </div>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="h-20 rounded-3xl bg-dark-800 animate-pulse"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="text-gray-400">{error}</div>
            ) : githubUser ? (
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-dark-950 p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-400">Public repos</p>
                      <p className="text-3xl font-semibold text-white">
                        {githubUser.public_repos ?? 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Followers</p>
                      <p className="text-3xl font-semibold text-white">
                        {githubUser.followers ?? 0}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm text-gray-400">Total stars</p>
                      <p className="text-2xl font-semibold text-primary-400">
                        {stats.totalStars}
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm text-gray-400">This year contributions</p>
                      <p className="text-2xl font-semibold text-primary-400">
                        {stats.contributionsThisYear}
                      </p>
                    </div>
                  </div>
                </div>

                {stats.mostStarredRepo && (
                  <div className="rounded-3xl border border-white/10 bg-dark-950 p-6">
                    <p className="text-sm text-gray-400 mb-2">Most starred repo</p>
                    <a
                      href={stats.mostStarredRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white truncate">
                        {stats.mostStarredRepo.name}
                      </span>
                      <span className="text-primary-400 font-bold flex-shrink-0">
                        ⭐ {stats.mostStarredRepo.stargazers_count}
                      </span>
                    </a>
                  </div>
                )}

                {stats.mostContributedRepo && (
                  <div className="rounded-3xl border border-white/10 bg-dark-950 p-6">
                    <p className="text-sm text-gray-400 mb-2">Most forked repo</p>
                    <a
                      href={stats.mostContributedRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white truncate">
                        {stats.mostContributedRepo.name}
                      </span>
                      <span className="text-primary-400 font-bold flex-shrink-0">
                        🔀 {stats.mostContributedRepo.forks_count}
                      </span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-400">No GitHub data at the moment.</div>
            )}
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="space-y-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="h-20 rounded-3xl bg-dark-800 animate-pulse"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="rounded-3xl border border-white/10 bg-dark-900 p-6 text-gray-400">
                {error}
              </div>
            ) : githubEvents.length > 0 ? (
              githubEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-3xl border border-white/10 bg-dark-900 p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-gray-300">
                      {renderAction(event)}
                    </p>
                    <span className="text-xs uppercase tracking-[0.24em] text-primary-400">
                      {formatDate(event.created_at)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-white/10 bg-dark-900 p-6 text-gray-400">
                No recent public contributions found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubHighlights;
