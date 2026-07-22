"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Calendar, ExternalLink } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
type BRAND = any;
const BRAND: any = [];
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─── Inline mock data ──────────────────────────────────────────────────────────

const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "48", label: "Projects Shipped" },
  { value: "23", label: "Happy Clients" },
  { value: "12", label: "Open Source Repos" },
];

const EXPERIENCES = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Vercel",
    period: "2022 — Present",
    description:
      "Lead development of Next.js-based infrastructure tooling used by over 300,000 developers. Architected real-time collaboration features, reduced build times by 40%, and mentored a team of five engineers across two time zones.",
    side: "right",
  },
  {
    role: "Frontend Engineer",
    company: "Linear",
    period: "2020 — 2022",
    description:
      "Built core product UI from the ground up using React and TypeScript. Owned the keyboard-navigation system, drag-and-drop issue board, and the design-token pipeline that unified the product's visual language.",
    side: "left",
  },
  {
    role: "Software Engineer",
    company: "Stripe",
    period: "2018 — 2020",
    description:
      "Developed internal tooling for the payments infrastructure team. Shipped the redesigned Dashboard analytics surface, improving data visibility for 50,000+ merchants and cutting support tickets by 18%.",
    side: "right",
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2017 — 2018",
    description:
      "Designed and built websites and web apps for small businesses and startups across the Bay Area. Delivered 14 projects on time and within budget, establishing a reputation for clean code and thoughtful UX.",
    side: "left",
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Figma", "SVG Animation"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Go", "PostgreSQL", "Redis", "Prisma", "tRPC", "GraphQL", "REST APIs"],
  },
  {
    category: "Infrastructure",
    skills: ["Vercel", "AWS", "Docker", "GitHub Actions", "Terraform", "Cloudflare", "Supabase", "PlanetScale"],
  },
  {
    category: "Craft",
    skills: ["System Design", "Performance Auditing", "Accessibility", "Design Systems", "Technical Writing", "Code Review"],
  },
];

// ─── SkillBadge ───────────────────────────────────────────────────────────────

function SkillBadge({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white/70 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}

// ─── StatCard ─────────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.12),0_8px_24px_-8px_rgba(0,0,0,0.3)]">
      <span className="text-4xl font-bold tracking-tight text-[var(--accent)]">{value}</span>
      <span className="mt-1 text-sm text-white/50">{label}</span>
    </div>
  );
}

// ─── TimelineCard ─────────────────────────────────────────────────────────────

function TimelineCard({
  role,
  company,
  period,
  description,
  side,
  index,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  side: string;
  index: number;
}) {
  const isRight = side === "right";

  return (
    <div className={cn("relative flex w-full items-start gap-0 md:gap-8", isRight ? "md:flex-row" : "md:flex-row-reverse")}>
      {/* Card */}
      <motion.div
        variants={isRight ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className={cn(
          "relative z-10 w-full md:w-[calc(50%-2rem)] rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.28)] hover:border-[var(--accent)]/20 hover:bg-white/[0.05] transition-all duration-300",
          isRight ? "md:mr-auto" : "md:ml-auto",
        )}
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white">{role}</h3>
            <p className="text-sm font-medium text-[var(--accent)]">{company}</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {period}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
      </motion.div>

      {/* Center dot — hidden on mobile, visible on md+ */}
      <div className="absolute left-0 top-6 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_12px_var(--accent)] md:left-1/2 md:block" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-white">

      {/* ── 1. Split Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/6 px-6 pb-20 pt-28 md:px-12 lg:px-20">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: editorial heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
              {t("about.eyebrow")}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold leading-[1.08] tracking-tight text-white text-balance md:text-6xl lg:text-7xl"
            >
              {t("about.heroHeading")}
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-md text-lg leading-relaxed text-white/60 text-pretty">
              {t("about.heroSubtext")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                {BRAND.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                {BRAND.email}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: glowing avatar */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full opacity-40 blur-2xl"
                style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)", transform: "scale(1.3)" }}
              />
              {/* Avatar frame */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-[var(--accent)]/30 shadow-[0_0_60px_rgba(139,92,246,0.25)] md:h-80 md:w-80">
                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/ef32ea2b282f4576b06012869b023d96.jpg"
                  alt={`${BRAND.name} — ${BRAND.role}`}
                  className="h-full w-full object-cover"
                />
                {/* Subtle overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, var(--accent)/10 0%, transparent 60%)" }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              >
                <p className="text-xs font-medium text-white/50">{t("about.badgeLabel")}</p>
                <p className="text-sm font-semibold text-white">{t("about.badgeValue")}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Bio + Stats ────────────────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
                  {t("about.bioEyebrow")}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
                  {t("about.bioHeading")}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-white/60 text-pretty">
                  {t("about.bioPara1")}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base leading-relaxed text-white/60 text-pretty">
                  {t("about.bioPara2")}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-white/60 text-pretty">
                  {t("about.bioPara3")}
                </p>
              </Reveal>
            </div>

            {/* Stats grid */}
            <Reveal delay={0.1} className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 0.07}>
                    <StatCard value={stat.value} label={stat.label} />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Experience Timeline ────────────────────────────────────────── */}
      <section className="border-t border-white/6 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
              {t("about.expEyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
              {t("about.expHeading")}
            </h2>
          </Reveal>

          {/* Timeline wrapper */}
          <div className="relative flex flex-col gap-12">
            {/* Vertical connecting line (desktop only) */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/40 via-[var(--accent)]/20 to-transparent md:block"
            />

            {EXPERIENCES.map((exp, i) => (
              <TimelineCard key={exp.company} {...exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Skills Grid ────────────────────────────────────────────────── */}
      <section className="border-t border-white/6 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
              {t("about.skillsEyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
              {t("about.skillsHeading")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_CATEGORIES.map((cat, ci) => (
              <Reveal key={cat.category} delay={ci * 0.08}>
                <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.2)] hover:border-[var(--accent)]/20 transition-colors duration-300">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Closing CTA */}
          <Reveal delay={0.1} className="mt-20 text-center">
            <p className="mb-6 text-lg text-white/50 text-pretty">
              {t("about.ctaText")}
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(139,92,246,0.55)] hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {t("about.ctaButton")}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}