"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, MapPin, Clock, CheckCircle, Send, User, MessageSquare, FileText, ArrowRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { socialLinks } from "@/lib/data";
type BRAND = any;
const BRAND: any = [];
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    description: "Best for detailed inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexmorgan",
    href: "https://github.com/alexmorgan",
    description: "Check out my open source work",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexmorgandev",
    href: "https://linkedin.com/in/alexmorgandev",
    description: "Professional networking",
  },
];

const SOCIAL_BAND = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alexmorgan",
    handle: "@alexmorgan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexmorgandev",
    handle: "alexmorgandev",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/alexmorgandev",
    handle: "@alexmorgandev",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${BRAND.email}`,
    handle: BRAND.email,
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters";
  }
  return errors;
}

export default function ContactPage() {
  const t = useTranslations();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[600px] h-[600px] rounded-full bg-[var(--accent)]/10 blur-[120px]" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              {t("contact.hero.badge")}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 bg-gradient-to-br from-white via-white/90 to-[var(--accent)] bg-clip-text text-transparent"
            >
              {t("contact.hero.title")}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-pretty max-w-xl mx-auto"
            >
              {t("contact.hero.description")}
            </motion.p>
          </motion.div>
        </section>
      </Reveal>

      {/* ── Two-column: Form + Info ───────────────────────────────────────── */}
      <Reveal>
        <section className="px-6 pb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[480px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white">
                    {t("contact.success.title")}
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-sm">
                    {t("contact.success.description")}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    {t("contact.success.cta")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {t("contact.form.heading")}
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {t("contact.form.subheading")}
                    </p>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      {t("contact.form.nameLabel")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.form.namePlaceholder")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/30 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--accent)]/60 focus:border-[var(--accent)]/60 ${
                          errors.name
                            ? "border-red-500/60"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      {t("contact.form.emailLabel")}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.form.emailPlaceholder")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/30 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--accent)]/60 focus:border-[var(--accent)]/60 ${
                          errors.email
                            ? "border-red-500/60"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      {t("contact.form.subjectLabel")}
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("contact.form.subjectPlaceholder")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/30 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--accent)]/60 focus:border-[var(--accent)]/60 ${
                          errors.subject
                            ? "border-red-500/60"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                    </div>
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      {t("contact.form.messageLabel")}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.form.messagePlaceholder")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/30 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--accent)]/60 focus:border-[var(--accent)]/60 resize-none ${
                          errors.message
                            ? "border-red-500/60"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-black font-semibold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        {t("contact.form.submitting")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Right: Info column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Availability badge */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 font-semibold text-sm">
                    {t("contact.availability.status")}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {t("contact.availability.description")}
                </p>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {t("contact.responseTime.heading")}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {t("contact.responseTime.description")}
                </p>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {t("contact.location.heading")}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">{BRAND.location}</p>
              </div>

              {/* Preferred contact methods */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-white text-sm mb-4">
                  {t("contact.methods.heading")}
                </h3>
                <ul className="space-y-3">
                  {CONTACT_METHODS.map((method) => (
                    <li key={method.label}>
                      <a
                        href={method.href}
                        target={method.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent)]/10 transition-all duration-200">
                          <method.icon className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-200" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-white group-hover:text-[var(--accent)] transition-colors duration-200">
                            {method.label}
                          </p>
                          <p className="text-xs text-[var(--text-secondary)]">
                            {method.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Social Band ───────────────────────────────────────────────────── */}
      <Reveal>
        <section className="border-t border-white/10 bg-white/[0.02] px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-10 font-medium">
              {t("contact.social.eyebrow")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {SOCIAL_BAND.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition-all duration-200 group"
                >
                  <item.icon
                    className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors duration-200 leading-none mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-none">
                      {item.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}