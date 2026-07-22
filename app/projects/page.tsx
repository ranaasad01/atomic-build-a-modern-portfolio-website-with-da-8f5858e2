"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowUpRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const PROJECTS = [
  {
    id: "1",
    title: "Luminary Design System",
    description:
      "A comprehensive component library and design system built for scale. Includes 80+ accessible components, dark mode support, and full Storybook documentation.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8ae735c2f8ef4f818229f390eeb5544e.png",
    technologies: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind"],
    category: "Frontend",
    featured: true,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "2",
    title: "Pulse Analytics Platform",
    description:
      "Real-time analytics dashboard for SaaS companies. Tracks user behavior, funnel conversion, and revenue metrics with live WebSocket updates.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/65413d75edf841e9b25f662fdbc12a35.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
    category: "Full-Stack",
    featured: true,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "3",
    title: "Orbit API Gateway",
    description:
      "High-performance API gateway with rate limiting, JWT authentication, request caching, and a developer portal for managing API keys.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8c0bd231bae04ca080c085448ad0fc14.png",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    category: "Backend",
    featured: false,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "4",
    title: "Folio — Portfolio Builder",
    description:
      "Drag-and-drop portfolio builder for creatives. Supports custom domains, SEO optimization, and one-click deployment to Vercel.",
    image: "https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85/hub/file/carousel/img/16065c7f1184c2d76d712826636cc4a4bd0c91cc",
    technologies: ["Next.js", "Prisma", "Vercel", "Stripe", "Tailwind"],
    category: "Full-Stack",
    featured: true,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "5",
    title: "Haze — Weather App",
    description:
      "Minimal weather application with animated weather states, hourly forecasts, and location-based alerts. Designed for calm, daily use.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/062fd1c13137465fbc39fa8761eed9c7.jpg",
    technologies: ["React Native", "Expo", "OpenWeather API", "Reanimated"],
    category: "Design",
    featured: false,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "6",
    title: "Vault — Password Manager",
    description:
      "End-to-end encrypted password manager with biometric unlock, secure sharing, and breach monitoring. Zero-knowledge architecture.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/66cab1a2e13f4bf5ad875f26ae5c6a19.jpg",
    technologies: ["Rust", "React", "AES-256", "WebAuthn", "SQLite"],
    category: "Backend",
    featured: false,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "7",
    title: "Spectrum Brand Identity",
    description:
      "Full brand identity system for a fintech startup. Covers logo design, color system, typography, motion guidelines, and component library.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/f2500b02362c45d68b5b11443edc0f0d.png",
    technologies: ["Figma", "After Effects", "Illustrator", "Framer"],
    category: "Design",
    featured: false,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "8",
    title: "Relay — Real-time Chat",
    description:
      "Slack-inspired team messaging app with threads, reactions, file sharing, and end-to-end encryption for private channels.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/4b1258eec433436b8f935080c5ea8a3a.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
    category: "Full-Stack",
    featured: false,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  {
    id: "9",
    title: "Prism — CSS Framework",
    description:
      "Lightweight utility-first CSS framework with a focus on performance. Ships at under 8kb gzipped with zero runtime dependencies.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/1ee1daaf9f5c482faed090eb9d368983.jpg",
    technologies: ["CSS", "PostCSS", "Node.js", "Rollup", "TypeScript"],
    category: "Frontend",
    featured: false,
    link: "https://github.com/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
];

const FILTER_CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Design",
  "Full-Stack",
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Design: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Full-Stack": "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20",
};

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const featuredCount = PROJECTS.filter((p) => p.featured).length;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
        >
          <div className="h-[500px] w-[700px] rounded-full bg-[var(--accent)]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-1.5 text-sm font-medium text-[var(--accent)] mb-6">
                {t("projects.hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold tracking-tight text-[var(--text-primary)] md:text-7xl leading-[1.05] text-balance mb-6"
            >
              {t("projects.hero.title.line1")}{" "}
              <span className="text-[var(--accent)]">
                {t("projects.hero.title.accent")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10"
            >
              {t("projects.hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6"
            >
              {[
                { value: PROJECTS.length, label: t("projects.hero.stat.total") },
                { value: featuredCount, label: t("projects.hero.stat.featured") },
                { value: FILTER_CATEGORIES.length - 1, label: t("projects.hero.stat.categories") },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Pills ─────────────────────────────────────────────────── */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-6 pb-10">
          <div className="flex flex-wrap gap-2">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium border transition-all duration-200",
                  activeFilter === cat
                    ? "bg-[var(--accent)] text-black border-[var(--accent)] shadow-[0_0_16px_var(--accent)/30]"
                    : "bg-white/5 text-[var(--text-secondary)] border-white/10 hover:bg-white/10 hover:text-[var(--text-primary)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Projects Grid ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              variants={scaleIn}
              custom={i}
              whileHover={{
                y: -6,
                boxShadow: "0 0 40px rgba(139,92,246,0.18), 0 20px 40px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden",
                "shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.2)]",
                project.featured && "sm:col-span-1"
              )}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-3 left-3 rounded-full bg-[var(--accent)]/90 px-2.5 py-0.5 text-xs font-semibold text-black">
                    {t("projects.card.featured")}
                  </span>
                )}
                {/* Category badge */}
                <span
                  className={cn(
                    "absolute top-3 right-3 rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm",
                    CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white/70 border-white/10"
                  )}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 text-xs text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/8">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      {t("projects.card.source")}
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="ml-auto flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors duration-200"
                    >
                      {t("projects.card.viewProject")}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="mb-4 text-4xl">🔍</div>
            <p className="text-[var(--text-secondary)]">
              {t("projects.empty")}
            </p>
          </motion.div>
        )}
      </section>
    </main>
  );
}