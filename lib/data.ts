export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  description: string;
}

export const APP_NAME = "Alex Rivera";
export const APP_TAGLINE = "Full-Stack Developer & Creative Technologist";
export const APP_LOCATION = "San Francisco, CA";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Projects", href: "/projects", key: "projects" },
  { label: "About", href: "/about", key: "about" },
  { label: "Contact", href: "/contact", key: "contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/alexmorgan",
    handle: "github.com/alexmorgan",
    description: "Browse my open-source projects, contributions, and code experiments",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexmorgandev",
    handle: "linkedin.com/in/alexmorgandev",
    description: "Professional background, endorsements, and career updates",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/alexmorgandev",
    handle: "@alexmorgandev",
    description: "Thoughts on web development, design systems, and the occasional hot take",
  },
  {
    platform: "Dribbble",
    url: "https://dribbble.com/alexmorgandev",
    handle: "dribbble.com/alexmorgandev",
    description: "UI explorations, design concepts, and visual side projects",
  },
  {
    platform: "Email",
    url: "mailto:hello@alexmorgandev.com",
    handle: "hello@alexmorgandev.com",
    description: "For longer conversations or file sharing, drop me a direct email",
  },
];