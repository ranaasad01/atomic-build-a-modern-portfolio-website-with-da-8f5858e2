"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Star, Sparkles, Code, Layout, Terminal, Activity, ArrowUpRight, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { socialLinks } from "@/lib/data";
type BRAND = any;
const BRAND: any = [];
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

// ─── Inline data ───────────────────────────────────────────────────────────────

const FEATURED_PROJECTS = [
  {
    id: "fp1",
    title: "Pulse Analytics",
    description:
      "A real-time data visualization platform for SaaS companies. Tracks user behavior, funnel conversion, and revenue metrics in a single unified dashboard.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/65413d75edf841e9b25f662fdbc12a35.png",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    category: "Full-Stack",
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    id: "fp2",
    title: "Terrain CMS",
    description:
      "A headless content management system built for editorial teams. Supports structured content, rich media, and multi-channel publishing out of the box.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/2cb1334a4d7748318654fd4e5b3d0eb0.jpg",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    category: "Backend",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "fp3",
    title: "Orbit Design System",
    description:
      "A comprehensive component library and design token system used across five products. Includes 80+ accessible components with full Figma integration.",
    image: "https://s3-alpha.figma.com/hub/file/2243703585588860846/d997dd94-8b16-423d-a2c7-d20249967617-cover.png",
    technologies: ["React", "Storybook", "Radix UI", "Tailwind CSS"],
    category: "Design Systems",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

const SERVICES = [
  {
    id: "s1",
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with modern frameworks. From database schema to polished UI, every layer is considered.",
  },
  {
    id: "s2",
    icon: Layout,
    title: "UI & Design Systems",
    description:
      "Scalable component libraries and design tokens that keep teams moving fast without sacrificing visual consistency.",
  },
  {
    id: "s3",
    icon: Terminal,
    title: "API Architecture",
    description:
      "RESTful and GraphQL APIs designed for performance, security, and developer experience. Built to scale from day one.",
  },
  {
    id: "s4",
    icon: Activity,
    title: "Performance Audits",
    description:
      "Deep-dive analysis of Core Web Vitals, bundle size, and rendering bottlenecks. Actionable fixes, measurable results.",
  },
];

const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Alex shipped our entire redesign in six weeks. The attention to detail was extraordinary — every interaction felt considered.",
    name: "Priya Nair",
    role: "Head of Product, Luminary",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya%20Nair",
  },
  {
    id: "t2",
    quote:
      "The design system Alex built cut our frontend development time in half. It's the foundation every new feature is built on.",
    name: "Marcus Webb",
    role: "CTO, Fieldstone Labs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus%20Webb",
  },
  {
    id: "t3",
    quote:
      "Working with Alex felt like having a senior engineer and a product designer in one. Rare combination, exceptional output.",
    name: "Sofia Delgado",
    role: "Founder, Clearpath",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia%20Delgado",
  },
];

const STATS = [
  { value: "7+", label: "Years of experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "18", label: "Happy clients" },
  { value: "3", label: "Open-source libraries" },
];

// ─── Hero section ──────────────────────────────────────────────────────────────

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroLine: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  const socialIconMap: Record<string, React.ElementType> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter,
  };

  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* Background mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[var(--accent)]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.div variants={heroLine} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium tracking-wide">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroLine}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-balance mb-6"
            >
              {t("hero.headline1")}
              <br />
              <span className="text-[var(--accent)]">{t("hero.headline2")}</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={heroLine}
              className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10 text-pretty"
            >
              {t("hero.subhead")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroLine}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-[0_0_24px_rgba(var(--accent-rgb),0.35)]"
              >
                {t("hero.cta_primary")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)]/50 hover:bg-[var(--surface-raised)] transition-all duration-200"
              >
                {t("hero.cta_secondary")}
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={heroLine}
              className="flex items-center gap-5"
            >
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">
                {t("hero.find_me")}
              </span>
              <div className="flex items-center gap-3">
                {socialLinks
                  .filter((s) => socialIconMap[s.platform])
                  .map((s) => {
                    const Icon = socialIconMap[s.platform];
                    return (
                      <a
                        key={s.key}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.platform}
                        className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all duration-200"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    );
                  })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
            {t("hero.scroll")}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="container mx-auto max-w-6xl px-6 py-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  custom={i}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-[var(--accent)] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Reveal>
        <section id="projects" className="py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-6">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <p className="text-xs text-[var(--accent)] uppercase tracking-widest font-medium mb-3">
                  {t("projects.eyebrow")}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                  {t("projects.heading")}
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 shrink-0"
              >
                {t("projects.view_all")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Project cards — asymmetric bento */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              {/* Large card */}
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:col-span-3 group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.18)] hover:border-[var(--accent)]/30 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${FEATURED_PROJECTS[0].accent} opacity-60`}
                  aria-hidden="true"
                />
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={FEATURED_PROJECTS[0].image}
                    alt={FEATURED_PROJECTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative p-6">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-medium mb-3">
                    {FEATURED_PROJECTS[0].category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    {FEATURED_PROJECTS[0].title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {FEATURED_PROJECTS[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_PROJECTS[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[var(--surface-raised)] border border-[var(--border)] text-xs text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>

              {/* Two stacked smaller cards */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {FEATURED_PROJECTS.slice(1).map((project) => (
                  <motion.article
                    key={project.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group relative flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.18)] hover:border-[var(--accent)]/30 transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
                      aria-hidden="true"
                    />
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative p-5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-base font-bold mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="services"
          className="py-24 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]"
        >
          <div className="container mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: copy */}
              <div>
                <p className="text-xs text-[var(--accent)] uppercase tracking-widest font-medium mb-3">
                  {t("services.eyebrow")}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-5">
                  {t("services.heading")}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-pretty">
                  {t("services.body")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("services.check1"),
                    t("services.check2"),
                    t("services.check3"),
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle
                        className="h-4 w-4 text-[var(--accent)] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: service cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      variants={scaleIn}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] hover:border-[var(--accent)]/30 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.12)]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center mb-4">
                        <Icon
                          className="h-5 w-5 text-[var(--accent)]"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-sm font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <Reveal>
        <section id="testimonials" className="py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-14">
              <p className="text-xs text-[var(--accent)] uppercase tracking-widest font-medium mb-3">
                {t("testimonials.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {t("testimonials.heading")}
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {TESTIMONIALS.map((testimonial, i) => (
                <motion.blockquote
                  key={testimonial.id}
                  variants={fadeInUp}
                  custom={i}
                  className="relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.14)]"
                >
                  {/* Quote mark */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 text-5xl font-serif text-[var(--accent)]/20 leading-none select-none"
                  >
                    &ldquo;
                  </span>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-3.5 w-3.5 fill-[var(--accent)] text-[var(--accent)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-9 h-9 rounded-full object-cover border border-[var(--border)]"
                    />
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section id="contact" className="py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden px-8 py-16 md:px-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.08),0_16px_48px_-12px_rgba(0,0,0,0.22)]">
              {/* Background glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[var(--accent)]/10 blur-[80px]" />
              </div>

              <div className="relative z-10">
                <p className="text-xs text-[var(--accent)] uppercase tracking-widest font-medium mb-4">
                  {t("cta.eyebrow")}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-5 max-w-2xl mx-auto">
                  {t("cta.heading")}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
                  {t("cta.body")}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-[0_0_28px_rgba(var(--accent-rgb),0.4)]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {t("cta.button")}
                  </Link>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {BRAND.email}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                {/* Location note */}
                <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("cta.location_prefix")} {BRAND.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}