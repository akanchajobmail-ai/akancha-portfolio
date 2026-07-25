export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  deck: string;
  tags: string[];
  overview: string;
  challenge: string;
  research: string;
  insights: string;
  approach: string;
  ai: string;
  solution: string;
  outcome: string;
  reflection: string;
  related: string[];
};

export const projects: Project[] = [
  {
    slug: "daily-t",
    title: "Daily T",
    subtitle: "A tea brand built to fix a habit, not a taste",
    deck: "A tea brand designed to fix a habit problem, not a taste problem.",
    tags: ["AI in Business", "Venture Design", "Brand & Marketing"],
    overview:
      "A proposed Darjeeling tea, fortified with Vitamin B12 and Magnesium, built around one idea: don't ask people to start a new habit, fix the one they already have.",
    challenge:
      "This was never really a tea problem. A large share of Indian vegetarians are B12-deficient, and roughly a third of adults globally are short on Magnesium — but people who know they need a supplement still don't take it consistently, because it's one more thing to remember.",
    research:
      "Public nutrition data on the target group, a look at four different kinds of competitor (mass-market tea, premium D2C tea, supplement brands, functional drinks like Yogi Tea), and the actual fortification and data-privacy rules a real brand would have to follow in India.",
    insights:
      "\"Priya,\" the persona this was built around — a 32-year-old vegetarian software engineer — doesn't need a new supplement routine. She needs the tea she already drinks every day to quietly start doing more for her.",
    approach:
      "Roll out the tech in phases — start basic, add the AI layer only once there are enough users to justify it, rather than over-building before anyone's actually using the product. Source from Darjeeling specifically, because that's a protected designation a competitor can't just copy overnight.",
    ai: "Five separate AI jobs sitting behind the product: one predicts how the nutrients hold up in hot water, one forecasts demand by season, one flags quality problems before a person would catch them, and one tracks what competitors and customers are saying online.",
    solution: "A full venture design — persona, the AI architecture behind it, and a three-year plan for getting there.",
    outcome: "Aiming for 5,000–10,000 subscribers in year one, scaling toward 50,000–100,000 by year two.",
    reflection:
      "The most defensible advantage in a data-driven venture usually isn't the first product feature — it's the behavioural data that accumulates around it, which a competitor genuinely can't copy even if they copy the product.",
    related: ["honasa-consumer", "detrash"],
  },
  {
    slug: "honasa-consumer",
    title: "The Real Risk Is Not Using AI",
    subtitle: "Honasa Consumer",
    deck: "\"The real risk is not using AI\" — tested as a real decision, not a slogan.",
    tags: ["AI in Business", "Research"],
    overview:
      "A look at how Honasa Consumer, Mamaearth's parent company, uses AI in decisions that actually matter — product, customer engagement, market positioning — not as a headline feature.",
    challenge:
      "\"This company uses AI\" isn't an interesting sentence on its own. The real question was what specific decisions it changed — what got built, how it entered the market, how it scaled — at a company that went from startup to IPO in a few years.",
    research:
      "Annual reports and investor materials, data on the Indian beauty and wellness market, and the founders' own public comments — including Ghazal Alagh's line that \"the real risk is not using AI, it's not using it.\"",
    insights:
      "AI at Honasa isn't one flagship feature — it's woven through several different decisions at once, which is a harder thing for a competitor to copy than any single product.",
    approach:
      "Trace specific founder decisions back to what they were actually trying to achieve, rather than describing AI use in general terms.",
    ai: "An AI decision-support concept and a way of keeping that system accountable as the company keeps scaling its use of it.",
    solution: "An analysis connecting the company's AI investment directly to its product, market-entry and scaling choices.",
    outcome: "A clear case for AI as something that compounds in value over time, not a marketing line.",
    reflection:
      "The most interesting AI questions are rarely about the model itself — they're about which decisions a company is actually willing to hand real weight to, and which it isn't.",
    related: ["mamaearth", "daily-t"],
  },
  {
    slug: "detrash",
    title: "Fixing a One-Way Conversation",
    subtitle: "Detrash",
    deck: "A sustainability brand with a real story, stuck broadcasting instead of talking.",
    tags: ["Brand & Marketing", "AI in Business"],
    overview:
      "A full marketing plan for Detrash, a UK watch brand built on sustainability, for an audience that can smell a marketing pitch from a mile away.",
    challenge:
      "Detrash needed to stand for something real on sustainability without sounding like it was greenwashing — and its existing content was talking at people instead of building any kind of relationship with them.",
    research:
      "Market data from GWI, Mintel and Euromonitor, a direct look at Detrash's own social engagement, and press coverage from the Financial Times and WatchPro.",
    insights:
      "This audience — people I nicknamed \"Digitally Native Ethical Urban Explorers\" — actively tunes out influencer campaigns and lifestyle content. What lands with them is evidence, repeated over time.",
    approach:
      "Build one connected campaign — \"Time That Leaves a Mark\" — linking limited editions to specific environmental causes, instead of a string of one-off campaigns that don't add up to anything.",
    ai: "Used AI to work through consumer research and competitor data quickly — but wrote the actual brand story myself. AI can scale a real story. It shouldn't be the one inventing it.",
    solution:
      "A new product line, the campaign concept, better use of existing channels, and a way of measuring success that isn't just \"did they buy once.\"",
    outcome: "A plan that turns Detrash from a brand broadcasting into a brand actually talking with its customers.",
    reflection: "A strong ethical story delivered through a one-way broadcast is a wasted advantage.",
    related: ["honasa-consumer", "mamaearth"],
  },
  {
    slug: "mamaearth",
    title: "What Comes After 2,155% Growth",
    subtitle: "Mamaearth",
    deck: "2,155% growth in one year. The harder question is what comes next.",
    tags: ["Brand & Marketing", "Research"],
    overview:
      "Mamaearth grew from a baby-care startup into a unicorn-valued company almost overnight. This looks at what it should do next.",
    challenge:
      "Growth that fast, on one category, doesn't answer the harder question — how do you keep growing against HUL, Dabur and Patanjali, who have far more scale and reach than you ever will?",
    research:
      "Mamaearth's certifications (Made Safe™, PETA), its pricing against six named competitors, how it went from online-only to 10,000+ physical stores, and the wider Beauty & Personal Care market it's competing in (~US$26.85bn, growing 8.5% a year).",
    insights:
      "Mamaearth's real edge was never size — it was trust in the brand and genuinely useful product innovation. Trying to beat Patanjali on price was never going to work; Patanjali is already 15–20% cheaper.",
    approach:
      "Grow into new categories — men's skincare, age-specific ranges — and use AI-driven personalisation, instead of trying to out-scale bigger players at their own game.",
    ai: "AI-personalisation recommended as one lever among a few, not a silver bullet.",
    solution: "Four growth moves delivered as one plan.",
    outcome: "One workstream alone — a refill and sustainability push — carried an estimated ₹586.8 million in savings over three years.",
    reflection:
      "Reading a company's real advantage from its numbers, not its own marketing, is a genuinely different skill from reading its story.",
    related: ["honasa-consumer", "detrash"],
  },
  {
    slug: "what-employers-look-for",
    title: "What Employers Actually Look For",
    deck: "Fifty-five job listings, and the gap nobody names out loud.",
    tags: ["Research", "People & Organisations"],
    overview:
      "A research project built on fifty-five real graduate job listings, to find out where what universities teach and what employers actually want start to disagree.",
    challenge:
      "There's no single \"graduate job market.\" Finance, tech, marketing, consulting and HR each want something different, and a general degree doesn't map cleanly onto any one of them.",
    research:
      "Fifty-five listings, broken down by how much each sector emphasises hard skills versus soft skills — Finance at 61% hard-skills, HR at 52% soft-skills — with communication showing up in 67% of every listing, regardless of sector.",
    insights:
      "The actual gaps are specific: no hands-on training with the tools employers use day to day, limited comfort with commercial numbers, and not enough practice working across time zones or remotely.",
    approach:
      "Recommend targeted workshops on specific tools (CRM platforms, Excel, SQL) rather than rebuilding an entire curriculum from scratch.",
    ai: "Used AI to process and pattern-match across all fifty-five listings — the kind of scan that would take days by hand, done in a fraction of the time.",
    solution: "A prioritised, specific list of fixes for both students and the university.",
    outcome: "Concrete, implementable recommendations instead of a vague \"teach more practical skills.\"",
    reflection:
      "\"Employability\" isn't one target — the skills that matter change completely depending on which part of the job market you're actually walking into.",
    related: ["career-advice", "ai-grading"],
  },
  {
    slug: "calvin-klein-pvh",
    title: "Automating Hiring Without Losing the People",
    subtitle: "Calvin Klein / PVH",
    deck: "A fashion giant automating recruitment — and what that does to the people still doing the job.",
    tags: ["People & Organisations", "AI in Business"],
    overview:
      "A look at whether a major fashion company can bring in AI hiring tools and 3D design software without damaging the culture and people underneath it.",
    challenge:
      "The technology was moving faster than the culture and leadership needed to support it — one striking number: 56% of monitored workers reported high stress, against 40% of those who weren't monitored.",
    research:
      "Company reports and case materials, workforce and diversity data, and research on algorithmic bias, motivation and leadership under pressure.",
    insights:
      "Most \"digital transformation\" problems aren't really about the technology at all — they're people and management problems that happen to involve software.",
    approach:
      "Build the ethics directly into the hiring and design systems themselves — clear criteria, ongoing bias checks — instead of treating fairness as a policy added on afterward.",
    ai: "A full governance approach for AI-driven hiring and design tools, aimed at cutting bias without stripping away people's autonomy or creative ownership.",
    solution:
      "Six specific moves — from fairer AI hiring criteria to giving employees a say in how their own workflows get redesigned, to a shift away from surveillance-style performance tracking.",
    outcome: "A set of recommendations that live inside the systems themselves, not next to them.",
    reflection:
      "Policy fixes that don't touch the actual infrastructure tend not to hold — the fairness has to be built into the system, not bolted on top of it.",
    related: ["velocity-inc", "honasa-consumer"],
  },
  {
    slug: "velocity-inc",
    title: "When Wellness Programmes Don't Reach the Floor",
    subtitle: "Velocity Inc.",
    deck: "Wellness programmes on paper. Burnout on the warehouse floor.",
    tags: ["People & Organisations", "Research"],
    overview:
      "A cloud and e-commerce company had wellness programmes running — and a genuinely disengaged workforce anyway. This works out why.",
    challenge:
      "The company had grown fast without building the structure to match — office and warehouse staff were treated noticeably differently, leadership was inconsistent, and burnout kept happening despite the wellness push.",
    research:
      "The company's own workforce data, read through established ideas about fairness at work, motivation, and adaptive leadership.",
    insights:
      "A wellness programme and actual employee wellbeing aren't the same thing — a policy can exist on paper and still never reach the warehouse floor.",
    approach:
      "Look at the problem from three different angles — office staff, warehouse staff, management — instead of treating the workforce as one group with one experience.",
    ai: "AI-enabled communication tools recommended as part of fixing how information actually moves between teams.",
    solution: "Four fixes — fairness, communication, leadership, and inclusion — each with an honest look at what could go wrong trying to implement them.",
    outcome: "Standardised policy with room for local flexibility, real feedback loops for leaders, and measurable inclusion targets.",
    reflection:
      "Diagnosing the gap between a policy and what actually happens on the ground means looking at the ground, not just the policy document.",
    related: ["calvin-klein-pvh", "honasa-consumer"],
  },
  {
    slug: "career-advice",
    title: "Why Career Advice Doesn't Travel",
    deck: "Career theory built for one culture, tested against two.",
    tags: ["Research", "People & Organisations"],
    overview:
      "Most career-development advice assumes you can choose your own path, change employers freely, and pick your own direction. That's not how career progression works everywhere — this tests where those assumptions break.",
    challenge:
      "Career theories built on Western, individual-choice assumptions don't hold up in family-business or more collective cultures, where career paths are often set by obligation rather than personal choice.",
    research:
      "Three established career-development theories, tested against two real, very different career stories — one from a family business in late-20th-century India, one a modern, multi-employer career.",
    insights:
      "The one framework that actually held up across both — Career Ecosystem Theory — worked precisely because it accounts for family and cultural context, instead of assuming there's one \"right\" way a career should look.",
    approach:
      "Test each theory against both real stories in turn, and be specific about exactly where each one's assumptions stopped applying.",
    ai: "Not applicable to this project.",
    solution: "A clear account of where three well-known career theories genuinely fall short.",
    outcome: "A defensible answer — grounded in two real cases, not just an opinion.",
    reflection:
      "Testing a theory against a case you actually know well, rather than accepting its own framing, is usually the fastest way to find what it was quietly assuming all along.",
    related: ["what-employers-look-for", "ai-grading"],
  },
  {
    slug: "ai-grading",
    title: "Should AI Grade Your Work?",
    deck: "Human grading isn't neutral either. Neither answer is the easy one.",
    tags: ["AI in Business", "Research"],
    overview:
      "Should universities let AI grade student work? The honest answer isn't \"yes\" or \"no\" — it's about who's actually accountable when it gets something wrong.",
    challenge:
      "Human grading gets treated as automatically fair, but tiredness, workload and unconscious bias all creep in. AI grading is more consistent, but it comes with its own problems — it can be confidently wrong, hard to see inside, and it can't actually be held responsible for a decision.",
    research:
      "Research on bias in algorithms, how often AI tools get things confidently wrong, how transparent (or not) these systems really are, and how universities currently handle accountability.",
    insights:
      "The real question isn't which system makes fewer mistakes — it's which system's mistakes are easier to catch and fix. AI bias can actually be tested and audited in a way human bias can't.",
    approach:
      "Put both systems side by side against the exact same standard — fairness, transparency, accountability, the ability to correct a mistake — instead of treating them as two separate debates.",
    ai: "The whole project is about this — a proposed setup where a human always has final say, but the system itself is constantly checked and open to challenge.",
    solution: "Four working principles: a human stays accountable, the system stays visible, it's monitored continuously, and students keep a genuine right to appeal.",
    outcome: "A workable case for using AI grading responsibly, not a blanket yes or no.",
    reflection:
      "The most interesting question about adopting AI is rarely about accuracy — it's about who's actually on the hook when it goes wrong.",
    related: ["calvin-klein-pvh", "career-advice"],
  },
  {
    slug: "akancha",
    title: "Solving Decision Fatigue in Online Shopping",
    subtitle: "AKANCHA",
    deck: "Everyone already shops online. Nobody's solved decision fatigue.",
    tags: ["Venture Design", "AI in Business"],
    overview:
      "A concept for a shopping platform that pairs AI recommendations with an actual human stylist, built for people who are tired of scrolling.",
    challenge:
      "Endless online choice makes shopping exhausting, most people don't actually know what suits them, and real personal styling is expensive and hard to access.",
    research:
      "Looked closely at existing players — Stitch Fix, Trunk Club, Thread, Wantable — for how they price and scale, plus the sustainable-fashion scene in India for potential partners.",
    insights:
      "The actual gap wasn't styling advice in general — it was styling for a wider range of body types, something even the big international players still don't do well.",
    approach: "Combine AI and a human stylist rather than picking one. AI alone doesn't have taste. A human alone doesn't scale.",
    ai: "A recommendation engine (TensorFlow), built on a Django backend with a React front end — specified, not built, but designed to the point where it could be.",
    solution: "Four target customer groups, a hybrid AI/human service, and Indian sustainable-fashion partnerships as the real point of difference.",
    outcome: "A complete concept with a clear position against much bigger, better-funded competitors.",
    reflection: "Standing out from a Stitch Fix means finding a genuine gap, not just a smaller version of what they already do.",
    related: ["daily-t", "boat"],
  },
  {
    slug: "boat",
    title: "Building a Category With No Technology Edge",
    subtitle: "boAt",
    deck: "No technology edge. Category leadership anyway.",
    tags: ["Brand & Marketing", "Research"],
    overview:
      "boAt went from a small imported-audio reseller to India's biggest audio brand — without any real technology advantage over global competitors.",
    challenge:
      "How do you build category leadership from nothing, while also being almost entirely dependent on Chinese manufacturing?",
    research:
      "boAt's origin story and its 2016 pivot, its marketing tie-ins (IPL, T-Series, Marvel, Lakme Fashion Week), and its 2022 manufacturing joint venture with Dixon Technologies.",
    insights:
      "In a category where the products themselves are fairly similar, loyalty came from community and identity, not from having the better product.",
    approach:
      "Focus on the two moves that were genuinely deliberate strategy — the #BoatHeads community, and moving manufacturing to India — rather than crediting good timing as if it were a masterplan.",
    ai: "Not applicable to this project.",
    solution: "A four-part marketing breakdown mapped against a manufacturing shift from 1% to 75% India-made.",
    outcome: "A full picture of how the brand built loyalty and cut a major supply-chain risk at the same time.",
    reflection: "Supply-chain risk can matter just as much as marketing — and it did here.",
    related: ["akancha", "toffee-inc"],
  },
  {
    slug: "toffee-inc",
    title: "Cutting Inventory Costs by 96%",
    subtitle: "Toffee Inc.",
    deck: "A chocolate bar, five states, and a cost problem hiding in a spreadsheet.",
    tags: ["Research"],
    overview:
      "A confectionery company's demand kept swinging wildly by season. A demand-forecasting model brought its inventory costs down by 96%.",
    challenge:
      "Huge seasonal demand swings, a 15-day lead time on supply, high ordering costs, and constant pressure between keeping enough stock and not overstocking a product that spoils.",
    research: "Five years of the company's own sales and cost data.",
    insights:
      "One single demand forecast for the whole year doesn't work when demand genuinely swings by season — the model only got useful once peak and off-season were calculated separately.",
    approach: "Forecast demand by season, then calculate the ideal order size separately for each.",
    ai: "Not applicable to this project.",
    solution: "Five practical recommendations, including better vendor coordination and cold-chain logistics.",
    outcome: "Total inventory costs dropped from ₹31,25,060 to roughly ₹1,28,749 — a 96% reduction.",
    reflection: "A fairly simple model can produce a dramatic result, if you split it by the one variable that actually matters.",
    related: ["boat", "mamaearth"],
  },
  {
    slug: "anne-with-an-e",
    title: "Why the Adaptation Actually Works",
    subtitle: "Anne with an E",
    deck: "A period drama, a modern eye, and a rating that had to be earned.",
    tags: ["Research"],
    overview: "A close review of a three-season TV adaptation, testing whether it actually earns the emotion it's going for.",
    challenge: "Give real, specific critique without either gushing or nitpicking for the sake of it.",
    research: "Scene-by-scene viewing across all three seasons, plus background on the show's creator and casting.",
    insights: "The review got stronger once it was organised by theme — imagination versus expectation, belonging — rather than just recapping the plot.",
    approach: "Build every point from a specific scene or choice, not a general impression.",
    ai: "Not applicable to this project.",
    solution: "A structured argument across character, theme, and production quality.",
    outcome: "A 4.5-out-of-5 rating, backed up point by point.",
    reflection:
      "Building an argument from specific evidence rather than a general impression is a skill that transfers directly into any kind of persuasive writing — business included.",
    related: ["thailand", "what-employers-look-for"],
  },
  {
    slug: "thailand",
    title: "What Thailand Taught Me About India",
    subtitle: "International Knowledge Tour",
    deck: "Seven days, two countries, one recalibrated idea of what \"developed\" means.",
    tags: ["Research"],
    overview:
      "A week across Bangkok and Pattaya, visiting trade shows and a manufacturing plant, to see how another country actually runs business day to day.",
    challenge:
      "A genuinely packed week — different industries, different sessions, a new culture every day — needed to turn into real insight, not just a travel log.",
    research:
      "A manufacturing site visit, two trade shows (Glassman Asia, Food Pack Asia), and Laem Chabang Port — one of the busiest deep-sea ports in Southeast Asia.",
    insights:
      "India's strengths aren't just about \"catching up\" to more developed infrastructure — relationship-driven business and cultural depth are real advantages, not something to be engineered away.",
    approach: "Structure everything as a direct Thailand-versus-India comparison, not a day-by-day diary.",
    ai: "Not applicable to this project.",
    solution: "A comparative look at trade, logistics, manufacturing and sustainability practices.",
    outcome: "A specific, usable set of comparisons rather than a general \"great trip\" takeaway.",
    reflection:
      "Getting comfortable in an unfamiliar system, fast, is the actual transferable skill — more than any single fact learned about Thai manufacturing.",
    related: ["anne-with-an-e", "akancha"],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const allTags = ["AI in Business", "Brand & Marketing", "Research", "People & Organisations", "Venture Design"];

export type Role = {
  title: string;
  org: string;
  dates: string;
  body: string;
};

export const roles: Role[] = [
  {
    title: "Restaurant & Bar Floor Manager",
    org: "The Shoe Inn Gastro Pub, Romsey",
    dates: "2026",
    body: "Run the floor during service — table flow, kitchen-floor coordination, opening and closing. Made me noticeably faster at reading a room under pressure.",
  },
  {
    title: "Student Ambassador",
    org: "University of Southampton",
    dates: "2026–Present",
    body: "Show prospective students around and answer the questions that don't have official answers. Good practice at being useful on the spot, without a script.",
  },
  {
    title: "Business Development Intern",
    org: "Eventage Trade Fair & Events (CONWOO Exhibition)",
    dates: "2024–2025",
    body: "150+ outbound calls a day inviting architects and designers to an exhibition, plus live event support. Turned cold outreach from intimidating into routine.",
  },
  {
    title: "Event Operations Assistant (Freelance)",
    org: "Dec&Deets Event Management, Lataguri",
    dates: "2025",
    body: "Coordinated a two-day, four-function wedding alongside a crew I'd just met. Taught me that teamwork often comes from shared urgency, not formal structure.",
  },
  {
    title: "Social Media Coordinator (Freelance)",
    org: "Self-employed, Siliguri",
    dates: "2023–2025",
    body: "Built content strategy from scratch for several early-stage clients at once. Grew visibility by over 50% and followers by up to 40% across accounts.",
  },
  {
    title: "Podcast Host & Content Producer",
    org: "Teen Queue (self-founded)",
    dates: "2020–2022",
    body: "Built a youth media platform from zero — 50+ episodes produced, hosted and edited myself. Audience grew ~30% through a fireside chat series.",
  },
  {
    title: "Private Tutor",
    org: "Self-employed, Siliguri",
    dates: "2020–2025",
    body: "Taught five students one-to-one at once. Average 20% improvement in six months, all five in the top 10% of their class.",
  },
];

export const timeline: { year: string; label: string; detail: string }[] = [
  { year: "2008–2022", label: "Nirmala Convent School, Siliguri", detail: "Schooling through to ISC (Business/Commerce). Co-organised the annual fundraising fete." },
  { year: "2020–2025", label: "Private Tutor", detail: "Siliguri. Five students, ~20% average improvement." },
  { year: "2020–2022", label: "Teen Queue — Co-Founder & Host", detail: "Self-founded platform, 50+ episodes." },
  { year: "2021", label: "Kiann Media — Social Media Intern", detail: "Nashik. Content generated 1,000+ engagements." },
  { year: "2021", label: "Miss Craftista — HR & Design Intern", detail: "Bengaluru. Contributed to a 10% engagement increase." },
  { year: "2022–2025", label: "Inspiria Knowledge Campus — BBA (Global Business), First Class", detail: "Siliguri. Academic Co-Chair; six competition wins." },
  { year: "2022–2023", label: "Rotaract Club — Public Relations Officer", detail: "Won Pitch Fest at UDDHAV." },
  { year: "2022–2023", label: "Community Welfare Volunteer", detail: "Rotaract Club." },
  { year: "—", label: "\"Switch\" Competition Win", detail: "INSVAGANZA." },
  { year: "—", label: "\"I Critique\" Media Analysis Competition Win", detail: "Inspiria Literary Club." },
  { year: "—", label: "Bithindra Biswas Industry Connect", detail: "Team win." },
  { year: "—", label: "Chief Managing Officer — Model United Nations", detail: "Logistics and registration." },
  { year: "—", label: "Event Host — Public Triumph Celebration", detail: "Insignia Club." },
  { year: "2024", label: "Case Quest (Toffee Inc. case) — Best Team Award", detail: "" },
  { year: "2023–2025", label: "Social Media Coordinator (Freelance)", detail: "Siliguri." },
  { year: "2024–2025", label: "Instilt Educate — Social Media Manager & Tutor", detail: "" },
  { year: "2024–2025", label: "Business Development Intern — Eventage Trade Fair & Events", detail: "" },
  { year: "2024", label: "Case Quest Volume 3 — Dual Award Winner", detail: "" },
  { year: "2025", label: "Event Operations Assistant (Freelance) — Dec&Deets", detail: "" },
  { year: "2025", label: "International Knowledge Tour — Thailand", detail: "" },
  { year: "2025–2026", label: "University of Southampton — MSc Management & Artificial Intelligence", detail: "Elected Course Representative." },
  { year: "2026–Present", label: "Student Ambassador", detail: "" },
  { year: "2026", label: "Restaurant & Bar Floor Manager", detail: "" },
];

export const thinking = [
  { n: "01", title: "Problem", body: "Say the problem the way the person living it would say it. If I can't do that yet, I don't understand it." },
  { n: "02", title: "Research", body: "Numbers, people, and context. Never just one of the three." },
  { n: "03", title: "Pattern", body: "The insight is the connection nobody else drew — not a new fact, a new link between two facts already sitting there." },
  { n: "04", title: "Strategy", body: "A bet, not a to-do list — as clear about what we're not doing as what we are." },
  { n: "05", title: "AI", body: "Used where it actually saves time or surfaces something real. If it doesn't, it's decoration." },
  { n: "06", title: "Prototype", body: "Something people can react to, not admire." },
  { n: "07", title: "Iterate", body: "Cut the version I liked best if the feedback disagrees with it." },
  { n: "08", title: "Outcome", body: "A decision, a launch, a real change. If nothing moved, it wasn't the plan — it was a deck." },
];

export const skills: { skill: string; where: string }[] = [
  { skill: "Digital Marketing", where: "Detrash" },
  { skill: "Brand Analysis", where: "Mamaearth, boAt" },
  { skill: "AI in Business Decisions", where: "Honasa Consumer" },
  { skill: "AI Product Design", where: "Daily T, AKANCHA" },
  { skill: "Research & Data Synthesis", where: "What Employers Actually Look For" },
  { skill: "AI Ethics & Governance", where: "Should AI Grade Your Work?, Automating Hiring Without Losing the People" },
  { skill: "People & Organisational Diagnosis", where: "Velocity Inc., Automating Hiring Without Losing the People" },
  { skill: "Business Modelling", where: "AKANCHA, Daily T, Honasa Consumer" },
  { skill: "Research Methods", where: "What Employers Actually Look For, Why Career Advice Doesn't Travel" },
  { skill: "Peer & Stakeholder Representation", where: "Elected Course Representative, MSc programme" },
  { skill: "Team Leadership Under Pressure", where: "Case Quest competitions" },
  { skill: "Public Speaking", where: "Case Quest Q&A, Student Ambassador" },
  { skill: "Cross-Cultural Communication", where: "Thailand knowledge tour" },
  { skill: "Event Coordination", where: "Student Ambassador, Floor Manager" },
  { skill: "Applying Real Frameworks to Real Problems", where: "Detrash, Daily T, Velocity Inc." },
  { skill: "Adaptability", where: "Floor Manager, Thailand tour" },
  { skill: "Problem-Solving Under Pressure", where: "Floor Manager, Case Quest Q&A" },
];

export const credentials = [
  "Best Team + Most Innovative Solution — Case Quest Volume 3 (dual award)",
  "Best Team Award — Toffee Inc. case competition",
  "Winner — \"Switch,\" INSVAGANZA debate competition",
  "Winner — \"I Critique\" media analysis competition",
  "Winner — Pitch Fest at UDDHAV (Rotaract regional Zonal Meet)",
  "Elected Course Representative — MSc Management & AI programme",
  "Public Relations Officer — Rotaract Club, Inspiria Knowledge Campus",
  "Academic Co-Chair — undergraduate peer-support role",
];
