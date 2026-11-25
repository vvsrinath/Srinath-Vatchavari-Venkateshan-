export const site = {
  name: "Srinath Vatchavari Venkateshan",
  monogram: "SVV",
  primaryIdentity: "Independent Thinker",
  tagline: "Curiosity has no boundaries.",
  supportingStatement:
    "Exploring the intersections of engineering, science, technology, research and entrepreneurship.",
  linkedin: "https://www.linkedin.com/in/srinath-v-a26b372b7/",
  certificationsLinkedin:
    "https://www.linkedin.com/in/srinath-v-a26b372b7/details/certifications/",
  github: "https://github.com/vvsrinath?tab=repositories",
  email: "vvsrinath0@gmail.com" as string | null,
  // Put a PDF in /public and set this to e.g. "/srinath-venkateshan-resume.pdf".
  resume: null as string | null,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Exploration", href: "#exploration" },
  { label: "Projects", href: "#projects" },
  { label: "Recognition", href: "#recognition" },
  { label: "Approach", href: "#philosophy" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];
