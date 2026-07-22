"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowUp } from 'lucide-react';
import { useTranslations } from "next-intl";
import { navLinks, APP_NAME, APP_TAGLINE } from "@/lib/data";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" aria-hidden="true" />,
  linkedin: <Linkedin className="h-4 w-4" aria-hidden="true" />,
  twitter: <Twitter className="h-4 w-4" aria-hidden="true" />,
  mail: <Mail className="h-4 w-4" aria-hidden="true" />,
};

const footerSocials = [
  { key: "github", label: "GitHub", href: "https://github.com/alexmorgan" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/alexmorgandev" },
  { key: "twitter", label: "Twitter", href: "https://twitter.com/alexmorgandev" },
  { key: "mail", label: "Email", href: "mailto:hello@alexmorgandev.com" },
];

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getLinkHref = (href: string): string => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--surface)]/30"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block font-bold text-xl tracking-tight mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-md"
              aria-label={`${APP_NAME} — home`}
            >
              <span className="gradient-text">{APP_NAME}</span>
            </Link>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 max-w-xs">
              {APP_TAGLINE}. Building fast, beautiful, and purposeful web products.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => (
                <motion.a
                  key={social.key}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                >
                  {socialIcons[social.key]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              {t("footer.navHeading")}
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-sm"
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              {t("footer.contactHeading")}
            </h3>
            <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
              {t("footer.contactBody")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-sm"
            >
              {t("footer.contactCta")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">
            {t("footer.copyright")}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
            {t("footer.backToTop")}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}