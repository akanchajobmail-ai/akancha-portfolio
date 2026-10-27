export interface QuestionLink {
  label: string;
  href: string;
}

export interface Question {
  id: string;
  question: string;
  // Paragraphs/bullet lines separated by "\n\n".
  answer: string;
  links: QuestionLink[];
}

export const questions: Question[] = [
  {
    id: "strongest-ai-strategy",
    question: "Show me your strongest AI strategy project",
    answer:
      "My strongest AI strategy projects explore how businesses can move from identifying AI opportunities to designing practical, business-led solutions.\n\n01. AI Strategy for Honasa Consumer (Mamaearth) — AI in product development, customer engagement and competitive positioning: sentiment analysis, product prioritisation and personalised recommendations.\n\n02. Daily T: AI-Powered Functional Tea Venture — a five-layer AI architecture covering personalisation, engagement, demand forecasting, quality control and competitor sentiment analysis, with an 18-month implementation roadmap.\n\n03. Future-Proofing Calvin Klein — AI-enabled recruitment, data-informed performance management and people-centred organisational change for a global fashion business.\n\nThese are strategy and academic case studies, not claims of completed AI deployments for the companies concerned.",
    links: [
      { label: "Honasa Consumer (Mamaearth)", href: "/work/honasa-consumer" },
      { label: "Daily T", href: "/work/daily-t" },
      { label: "Calvin Klein / PVH", href: "/work/calvin-klein-pvh" },
    ],
  },
  {
    id: "what-for-business",
    question: "What can you do for a business?",
    answer:
      "I work at the intersection of business strategy, AI, marketing and people. My focus is understanding the problem first, then deciding what technology, strategy or process could genuinely improve it.\n\n• AI strategy: identify valuable AI use cases, design AI-enabled workflows and build implementation roadmaps.\n\n• Business transformation: examine existing processes and consider how people and organisations adapt to change.\n\n• Marketing and growth: develop brand positioning, content strategies, customer engagement plans and growth campaigns.\n\n• Research and decision support: turn business evidence, customer insights and market research into practical recommendations.\n\n• People and change management: explore stakeholder needs, responsible AI adoption and human-centred change.\n\nMy approach is straightforward: understand the problem, research it properly, identify the insight, develop a strategy, and turn it into something useful.",
    links: [
      { label: "Daily T", href: "/work/daily-t" },
      { label: "Calvin Klein / PVH", href: "/work/calvin-klein-pvh" },
      { label: "Detrash", href: "/work/detrash" },
      { label: "Mamaearth", href: "/work/mamaearth" },
    ],
  },
  {
    id: "marketing-growth-work",
    question: "Show me your marketing and growth work",
    answer:
      'My marketing work combines commercial thinking with brand storytelling and customer insight.\n\nDetrash: Fixing a One-Way Conversation — a digital marketing strategy for a sustainable watch brand, closing the gap between broadcasting sustainability messages and building real engagement, proposing "Time That Leaves a Mark."\n\nMamaearth: What Comes After 2,155% Growth? — how a rapidly growing consumer brand could sustain growth through category expansion, stronger differentiation and AI-enabled personalisation.\n\nboAt: Building a Category With No Technology Edge — how community, identity, partnerships and distribution helped build brand leadership in a competitive market.\n\nMy freelance social media work also produced reported improvements of over 50% in brand visibility, 30% in engagement and 40% in follower growth across client accounts.',
    links: [
      { label: "Detrash", href: "/work/detrash" },
      { label: "Mamaearth", href: "/work/mamaearth" },
      { label: "boAt", href: "/work/boat" },
    ],
  },
  {
    id: "ai-research",
    question: "What AI research have you done?",
    answer:
      "My research explores where AI can support better decisions, how it should be governed, and what businesses need for adoption to work in practice.\n\n01. Designing AI Decision Support for Tea Grading — my MSc dissertation examines how an AI-enabled platform could improve consistency in tea tasting and grading without replacing expert judgement. Academic research and research-grounded system design — not a deployed grading system.\n\n02. The Real Risk Is Not Using AI: Honasa Consumer — how AI relates to product decisions, customer engagement and market positioning at Mamaearth's parent company. Business research and strategic analysis.\n\n03. Should AI Grade Your Work? — fairness, bias, transparency and accountability in higher education assessment, proposing a hybrid approach that keeps humans responsible for final decisions. Academic research and proposed AI governance model.\n\n04. Daily T: AI-Powered Functional Tea Venture — a proposed AI architecture spanning personalisation, demand forecasting, quality monitoring and customer sentiment, with a phased roadmap. Venture design and proposed AI solution, not a deployed commercial system.",
    links: [
      { label: "Tea Grading Research", href: "/work/ai-tea-grading" },
      { label: "Honasa Consumer", href: "/work/honasa-consumer" },
      { label: "Should AI Grade Your Work?", href: "/work/ai-grading" },
      { label: "Daily T", href: "/work/daily-t" },
    ],
  },
  {
    id: "why-consider-you",
    question: "Why should we consider you?",
    answer:
      "I combine business education, applied AI strategy, marketing experience and practical problem-solving rather than approaching AI as a purely technical exercise.\n\n• Business-first AI thinking: my projects connect AI opportunities to customer needs, strategic decisions and operational challenges.\n\n• Research-led recommendations: my tea-grading research draws on interviews with industry participants and validates design recommendations with intended users.\n\n• Marketing experience with measurable outcomes: my freelance work delivered reported gains in visibility, engagement and follower growth.\n\n• Product and venture thinking: Daily T and AKANCHA explore how to turn identified customer problems into structured product concepts and implementation plans.\n\n• Experience working with people: event coordination, team operations, stakeholder communication and representing student concerns.\n\nI'm particularly interested in helping businesses identify where AI creates genuine value, how to introduce it responsibly, and how to translate ideas into practical solutions.",
    links: [
      { label: "The Work", href: "/work" },
      { label: "Homepage", href: "/" },
    ],
  },
  {
    id: "working-on-now",
    question: "What are you working on now?",
    answer:
      "I'm currently working as a Business Support & Events Intern at New Forest Business Partnership (NFBP), supporting business events, operations and content. My work includes the 2026 Brilliance in Business Awards and the 2027 Business Show, alongside exploring how AI can reduce routine manual work and improve team workflows.\n\nAlongside my role, I'm continuing to develop my practical AI knowledge through Microsoft learning resources and exploring how AI can be applied responsibly in real business settings. I also attend relevant business and AI events to learn from practitioners, build connections and understand the challenges organisations face.\n\nMy ongoing focus is connecting what I learn through my MSc in Management and AI with practical business problems.",
    links: [{ label: "Experience", href: "/field-notes" }],
  },
  {
    id: "leading-experience",
    question: "What is Akancha's leading experience?",
    answer:
      "My most relevant hands-on experience is at New Forest Business Partnership, where I support business events and operations while exploring where AI can reduce manual work. Alongside that, I led PR and communications for the Rotaract Club at Inspiria Knowledge Campus — including UDDHAV, a regional Zonal Meet with 100+ attendees — and I'm the elected Course Representative for my MSc cohort at Southampton.\n\nAcross roles, the throughline is the same: operating under real pressure, representing other people's interests, and being useful without a script.",
    links: [{ label: "Experience", href: "/field-notes" }],
  },
  {
    id: "cv",
    question: "Can I see your CV?",
    answer:
      "Of course. You can explore my projects and professional experience on this portfolio, or download my CV for a structured overview of my education, skills and experience.",
    links: [
      { label: "Download CV (PDF)", href: "/pdfs/Akancha-Sharma-CV.pdf" },
      { label: "View my projects", href: "/work" },
      { label: "View my experience", href: "/field-notes" },
    ],
  },
];

export const questionById = (id: string) => questions.find((q) => q.id === id);

// Separate from the eight questions — direct shortcuts to the portfolio's main sections.
export const exploreLinks: QuestionLink[] = [
  { label: "Discover my journey", href: "/becoming" },
  { label: "Explore my experience", href: "/field-notes" },
  { label: "Explore my projects", href: "/work" },
  { label: "How I think", href: "/how-i-think" },
  { label: "Connect with me on LinkedIn", href: "https://www.linkedin.com/in/akanchasharma" },
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
    id: "exploring",
    label: "I'm Just Exploring",
    intro: "No pressure — start wherever looks interesting.",
    steps: [
      { label: "The Work", href: "/work" },
      { label: "Becoming", href: "/becoming" },
      { label: "How I Think", href: "/how-i-think" },
    ],
  },
];
