export type Category = "about" | "the-work" | "experience" | "contact";

export const categories: { id: Category; label: string }[] = [
  { id: "about", label: "About" },
  { id: "the-work", label: "The Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export interface Question {
  id: string;
  category: Category;
  question: string;
  answer: string;
  linkLabel: string;
  linkHref: string;
}

// Update these to change highlighted projects without editing question text.
export const flagshipAIProjectId = "honasa-consumer";
export const proudestProjectId = "toffee-inc";

export const questions: Question[] = [
  // About
  {
    id: "who-is-akancha",
    category: "about",
    question: "Who is Akancha?",
    answer:
      "A business strategist working at the intersection of strategy and AI — BBA graduate, now studying MSc Management & AI at Southampton.",
    linkLabel: "Becoming →",
    linkHref: "/becoming",
  },
  {
    id: "background",
    category: "about",
    question: "What's her background?",
    answer:
      "BBA from Inspiria Knowledge Campus, now completing an MSc in Management & AI — with 7+ real business projects along the way.",
    linkLabel: "Becoming →",
    linkHref: "/becoming",
  },
  {
    id: "studying",
    category: "about",
    question: "What is she studying?",
    answer: "MSc Management & Artificial Intelligence, University of Southampton.",
    linkLabel: "Becoming →",
    linkHref: "/becoming",
  },

  // The Work
  {
    id: "best-ai-project",
    category: "the-work",
    question: "Show your best AI project",
    answer:
      "The Honasa Consumer analysis is the strongest example — tracing how AI investment at a real company compounds into decisions that can't be easily copied.",
    linkLabel: "View Project →",
    linkHref: `/work/${flagshipAIProjectId}`,
  },
  {
    id: "marketing-projects",
    category: "the-work",
    question: "Show your marketing projects",
    answer:
      "Detrash, Mamaearth, and boAt are the strongest brand and marketing case studies — each tackling a different kind of positioning challenge.",
    linkLabel: "The Work →",
    linkHref: "/work",
  },
  {
    id: "proudest-project",
    category: "the-work",
    question: "Which project are you most proud of?",
    answer:
      "Toffee Inc. — a demand-forecasting model that cut inventory costs by 96%. The outcome was measurable, specific, and came from a genuinely simple insight.",
    linkLabel: "View Project →",
    linkHref: `/work/${proudestProjectId}`,
  },
  {
    id: "research",
    category: "the-work",
    question: "What research have you done?",
    answer:
      "The graduate job market study analysed 55 real listings to find the gap between what universities teach and what employers want. There's also a full postgraduate research proposal in the pipeline.",
    linkLabel: "View Project →",
    linkHref: "/work/what-employers-look-for",
  },
  {
    id: "why-hire",
    category: "the-work",
    question: "Why should I hire you?",
    answer:
      "My work combines business strategy, research, marketing, and practical AI application. Rather than treating AI as the solution, I use it where it creates measurable value, and every project in this portfolio demonstrates that approach.",
    linkLabel: "How I Think →",
    linkHref: "/how-i-think",
  },

  // Experience
  {
    id: "experience",
    category: "experience",
    question: "What experience do you have?",
    answer:
      "Course Representative, Academic Co-Chair, Student Ambassador, and competition team leadership — see the full timeline.",
    linkLabel: "Open Experience →",
    linkHref: "/field-notes",
  },
  {
    id: "team-leadership",
    category: "experience",
    question: "Have you led teams?",
    answer:
      "Yes — elected Course Representative and repeated case-competition team leadership, including a Best Team win.",
    linkLabel: "Open Experience →",
    linkHref: "/field-notes",
  },
  {
    id: "cv",
    category: "experience",
    question: "Can I see your CV?",
    answer: "Available on request. Get in touch and I'll send the latest version.",
    linkLabel: "Get In Touch →",
    linkHref: "/contact",
  },

  // Contact
  {
    id: "roles",
    category: "contact",
    question: "What kind of roles are you looking for?",
    answer:
      "I'm looking for graduate opportunities and early-career roles across strategy, product, marketing, consulting, and AI-enabled business functions.",
    linkLabel: "Get In Touch →",
    linkHref: "/contact",
  },
  {
    id: "open-to-opportunities",
    category: "contact",
    question: "Are you open to opportunities?",
    answer: "Current availability is stated clearly on the Contact page.",
    linkLabel: "Get In Touch →",
    linkHref: "/contact",
  },
  {
    id: "how-to-contact",
    category: "contact",
    question: "How can I contact you?",
    answer: "Directly — email, LinkedIn, or calendar link, all in one place.",
    linkLabel: "Get In Touch →",
    linkHref: "/contact",
  },
  {
    id: "more-work",
    category: "contact",
    question: "Can I see more of your work?",
    answer:
      "Beyond this portfolio, I regularly share projects, reflections, competitions, and professional updates on LinkedIn.",
    linkLabel: "LinkedIn →",
    linkHref: "/linkedin",
  },
];

export interface RoleShortcut {
  id: string;
  label: string;
  intro: string;
  steps: { label: string; href: string }[];
}

export const roleShortcuts: RoleShortcut[] = [
  {
    id: "recruiter",
    label: "I'm a Recruiter",
    intro: "Here's where to focus your time.",
    steps: [
      { label: "Experience", href: "/field-notes" },
      { label: "Projects", href: "/work" },
      { label: "Get In Touch", href: "/contact" },
    ],
  },
  {
    id: "hiring",
    label: "I'm Hiring",
    intro: "Start with the work, then how I think.",
    steps: [
      { label: "The Work", href: "/work" },
      { label: "How I Think", href: "/how-i-think" },
      { label: "Get In Touch", href: "/contact" },
    ],
  },
  {
    id: "ai-projects",
    label: "Show me AI Projects",
    intro: "The strongest AI work is here.",
    steps: [
      { label: "Honasa Consumer", href: `/work/${flagshipAIProjectId}` },
      { label: "How I Think", href: "/how-i-think" },
    ],
  },
  {
    id: "marketing",
    label: "Show me Marketing Work",
    intro: "Brand and marketing case studies.",
    steps: [
      { label: "Detrash", href: "/work/detrash" },
      { label: "Mamaearth", href: "/work/mamaearth" },
      { label: "boAt", href: "/work/boat" },
    ],
  },
  {
    id: "research",
    label: "I'm interested in your Research",
    intro: "Research-led projects, grounded in real data.",
    steps: [
      { label: "What Employers Actually Look For", href: "/work/what-employers-look-for" },
      { label: "Get In Touch", href: "/contact" },
    ],
  },
  {
    id: "explore",
    label: "Explore the Portfolio",
    intro: "All fourteen projects, in editorial order.",
    steps: [{ label: "The Work", href: "/work" }],
  },
  {
    id: "strategy",
    label: "Strategy & Consulting",
    intro: "The method and the portfolio, in that order.",
    steps: [
      { label: "How I Think", href: "/how-i-think" },
      { label: "The Work", href: "/work" },
      { label: "Experience", href: "/field-notes" },
    ],
  },
];
