export const profile = {
  name: "Shadab Hussain",
  role: "Frontend Engineer",
  roles: [
    "React.js Specialist",
    "Next.js Specialist",
    "Full-Stack (MERN)",
    "Performance Engineer",
  ],
  location: "Delhi, India",
  email: "shadab.hussain.tech@gmail.com",
  phone: "+91 8400841731",
  linkedin: "https://linkedin.com/in/shadab-dashboard",
  github: "https://github.com/shadab0656",
  summary:
    "Frontend-focused engineer with 3+ years building high-performance, production React.js and Next.js applications — SSR, ISR, and CSR rendering strategies, component architecture, state management, and Core Web Vitals optimization — with the full-stack range to own the Node.js, Express, and MongoDB backend behind them.",
  extendedSummary:
    "I'm comfortable owning a feature end-to-end: UI, APIs, auth, and data — and shipping work that designers, backend engineers, and product teams actually rely on. Most of my recent work has been performance-critical: taking production apps from a Lighthouse score in the 60s to 90+, and cutting real user load times by 35–45% along the way.",
};

export const stats = [
  { value: "3+", label: "Years shipping production React & Next.js" },
  { value: "90+", label: "Lighthouse score, up from a 60 baseline" },
  { value: "40%+", label: "Average load-time reduction across platforms" },
  { value: "30%+", label: "Organic traffic growth after SSR/ISR migration" },
];

export const skillGroups = [
  {
    label: "Frontend Core",
    items: [
      "React.js",
      "Next.js (App Router, SSR/ISR/SSG/CSR)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "State & Data",
    items: ["Redux Toolkit", "Context API", "TanStack Query", "REST API Integration"],
  },
  {
    label: "Performance",
    items: [
      "Core Web Vitals (LCP, INP, CLS)",
      "Code Splitting",
      "Lazy Loading",
      "Tree Shaking",
      "Bundle & Image Optimization",
    ],
  },
  {
    label: "UI & Styling",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "CSS Modules",
      "Responsive / Mobile-First Design",
      "Design Systems",
    ],
  },
  {
    label: "Testing & Quality",
    items: ["Jest", "React Testing Library", "ESLint"],
  },
  {
    label: "Backend (Full-Stack)",
    items: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "MongoDB", "Mongoose"],
  },
  {
    label: "AI / GenAI",
    items: ["Google Gemini API", "Structured LLM output validation with Zod"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "Vercel", "Webpack", "Razorpay"],
  },
];

export const experience = [
  {
    company: "Sat Sukrit Media Pvt. Ltd.",
    title: "Frontend Engineer",
    period: "Jul 2023 — Present",
    location: "Delhi · Full-Time",
    points: [
      "Scaled Next.js production apps to Lighthouse 90+, cutting load times 40%+ via SSR/ISR, lazy loading, code splitting, and tree shaking.",
      "Led the Angular → Next.js migration for IIRF Ranking; SSR/ISR grew organic traffic 30%+ and cut API filtering response time 40%+.",
      "Optimized Core Web Vitals — LCP, INP, and CLS — site-wide across 3 production platforms.",
      "Designed and built a role-based (RBAC) admin dashboard in React with Redux Toolkit, powering editorial and admin workflows across 3 platforms.",
      "Shipped reusable, testable component libraries with Jest and React Testing Library coverage for core user flows.",
      "Independently designed Node.js/Express REST APIs with JWT auth and MongoDB/Mongoose schemas for data-heavy content and ranking workflows.",
      "Integrated Razorpay subscription billing end-to-end — checkout, webhooks, and entitlement logic.",
    ],
  },
  {
    company: "Oye Busy Pvt. Ltd.",
    title: "Frontend Developer",
    period: "Mar 2023 — Jun 2023",
    location: "Gurgaon · Part-Time",
    points: [
      "Built responsive React.js components and integrated REST APIs.",
      "Collaborated with backend engineers on API contracts and cross-team integrations.",
    ],
  },
];

export const projects = [
  {
    name: "educationpost.in",
    type: "Production · Sat Sukrit Media",
    category: "Production" as const,
    description:
      "Next.js SSR/SSG front-end cutting load times 35%+, with a role-based admin dashboard, Razorpay subscriptions, and a Node.js/MongoDB backend owned end-to-end.",
    stack: ["Next.js", "SSR/SSG", "Node.js", "MongoDB", "Razorpay"],
    link: "https://educationpost.in/",
    accent: "amber",
  },
  {
    name: "iirfranking.com",
    type: "Production · Sat Sukrit Media",
    category: "Production" as const,
    description:
      "Led the Angular → Next.js SSR/ISR migration — 30%+ traffic growth and 40%+ faster rendering on data-heavy ranking tables.",
    stack: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Razorpay"],
    link: "https://iirfranking.com/",
    accent: "teal",
  },
  {
    name: "icosaonline.com",
    type: "Production · Sat Sukrit Media",
    category: "Production" as const,
    description:
      "A fully responsive UI with optimized rendering and end-to-end Razorpay payment integration for seamless transactions.",
    stack: ["Next.js", "React", "Tailwind CSS", "Razorpay"],
    link: "https://icosaonline.com/",
    accent: "amber",
  },
  {
    name: "Resume–JD Skill-Gap Analyzer",
    type: "Personal project · GenAI",
    category: "Personal" as const,
    description:
      "A full-stack tool that compares a resume against a job description via the Gemini API, surfacing missing and matching skills. Uses Zod to validate and enforce structured LLM output for reliable downstream parsing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Zod"],
    link: "https://github.com/shadab0656",
    accent: "teal",
  },
];

export const projectCategories = ["All", "Production", "Personal"] as const;

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];
