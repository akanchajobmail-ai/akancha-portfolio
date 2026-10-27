export type QABlock = {
  question: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  deck: string;
  tags: string[];
  cardChallenge: string;
  cardContribution: string;
  overview: string;
  problem: QABlock;
  aiRole: QABlock;
  strategy: QABlock;
  frameworks: QABlock;
  delivered: QABlock;
  outcome: string;
  reflection: string;
  related: string[];
  externalLink?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "ai-tea-grading",
    title: "Designing AI Decision Support for Tea Grading",
    subtitle: "The AI That Shouldn't Grade the Tea",
    deck: "Research into how AI could support consistency in tea tasting and grading — without replacing the person who actually understands the tea.",
    tags: ["AI in Business", "Research"],
    cardChallenge: "A tea brokerage's grading judgement lived in memory, not in any system.",
    cardContribution:
      "Designed AI decision-support recommendations that keep the human expert in charge.",
    overview:
      "Tea grading is a judgement-heavy business process. At a small tea brokerage in Siliguri, much of that judgement lived in experience, memory and informal records. This research asked what an AI-enabled platform would actually need to do to make tea tasting and grading more consistent, without taking the decision away from the people who understand the tea.",
    problem: {
      question: "Why isn't tea grading just a spreadsheet problem?",
      points: [
        "Tea grading sits at the centre of buying, pricing and buyer acceptance, yet the reasoning behind those decisions was never held in one structured system.",
        "The real question wasn't whether human judgement is subjective — it was what conditions (trust, accountability, data control, cost) would make tea professionals actually accept AI support.",
      ],
    },
    aiRole: {
      question: "Where should AI sit in a judgement-heavy decision?",
      points: [
        "AI is framed as decision support, not automated judgement — structuring information, surfacing comparisons, preserving expert knowledge.",
        "The sensory judgement and accountability stay with the human expert; AI's job is making that expertise easier to structure, compare and reuse, not replacing it.",
      ],
    },
    strategy: {
      question: "What should the platform actually do?",
      points: [
        "Recommended structured grading support, historical comparison, and buyer-requirement matching as the platform's core jobs — not sensory automation.",
        "Recommended environmental and image standardisation to remove a major source of inconsistency before any AI layer is added.",
        "Deliberately scoped where not to automate — treated as the main design decision, not an afterthought.",
      ],
    },
    frameworks: {
      question: "How was this actually researched?",
      points: [
        "Interpretivist case study design",
        "Two-stage interviews (7 + validation focus group)",
        "Thematic analysis",
      ],
    },
    delivered: {
      question: "What's the evidence this would work?",
      points: [
        "A grounded account of what one real tea-trading business would need from an AI-enabled decision-support system — research-grounded recommendations, not a built system.",
        "Validated directly with the three focal-company participants in a Stage-2 focus group, rather than finalised in isolation.",
      ],
    },
    outcome:
      "A grounded account of what one real tea-trading business would need from an AI-enabled decision-support system. Rather than asking whether AI can grade tea, the research asks a more useful design question: what should AI do when the person making the decision has expertise the system does not?",
    reflection:
      "The most important design decision was deciding where not to automate. In judgement-intensive work, the value of AI may come less from replacing expertise and more from making expertise easier to structure, compare, preserve and use.",
    related: ["ai-grading", "career-advice"],
  },
  {
    slug: "daily-t",
    title: "Daily T",
    subtitle: "A tea brand built to fix a habit, not a taste",
    deck: "A tea brand designed to fix a habit problem, not a taste problem.",
    tags: ["AI in Business", "Venture Design", "Brand & Marketing"],
    cardChallenge:
      "People who know they need a B12/Magnesium supplement still don't take one consistently.",
    cardContribution:
      "Designed a fortified tea venture, its AI roadmap and a three-year growth plan.",
    overview:
      "A proposed Darjeeling tea, fortified with Vitamin B12 and Magnesium, built around one idea: don't ask people to start a new habit, fix the one they already have.",
    problem: {
      question: "Is this really a tea problem?",
      points: [
        "A large share of Indian vegetarians are B12-deficient, and roughly a third of adults globally are short on Magnesium.",
        "People who already know they need a supplement still don't take one consistently — it's one more thing to remember. Awareness isn't the barrier; adoption is.",
      ],
    },
    aiRole: {
      question: "What's AI's job inside the product?",
      points: [
        "Five proposed AI jobs sit behind the product: predicting how nutrients hold up in hot water, forecasting demand by season, flagging quality problems early, and tracking competitor and customer sentiment online.",
        "Phased in only once there are enough users to justify it — specified as part of the venture design, not built or deployed.",
      ],
    },
    strategy: {
      question: "How does a niche tea brand actually defend itself?",
      points: [
        "Fix the habit people already have — their daily cup of tea — instead of asking them to adopt a new supplement routine.",
        "Source from Darjeeling specifically, a protected designation a competitor can't copy overnight.",
        "Roll the AI layer out in phases tied to user volume, rather than over-building before there's demand.",
      ],
    },
    frameworks: {
      question: "What shaped the venture design?",
      points: [
        "Persona-led design (nutrition-deficiency data)",
        "4-category competitor mapping",
        "India fortification & data-privacy rules",
      ],
    },
    delivered: {
      question: "What does success look like?",
      points: [
        "A full venture design: persona, product, the AI architecture behind it, and a three-year roadmap — a specified concept, not a built or launched product.",
        "Modelled to 5,000–10,000 subscribers in year one, scaling toward 50,000–100,000 by year two — projections, not actuals.",
      ],
    },
    outcome:
      "Aiming for 5,000–10,000 subscribers in year one, scaling toward 50,000–100,000 by year two.",
    reflection:
      "The most defensible advantage in a data-driven venture usually isn't the first product feature — it's the behavioural data that accumulates around it, which a competitor genuinely can't copy even if they copy the product.",
    related: ["honasa-consumer", "detrash"],
  },
  {
    slug: "honasa-consumer",
    title: "The Real Risk Is Not Using AI",
    subtitle: "Honasa Consumer",
    deck: '"The real risk is not using AI" — tested as a real decision, not a slogan.',
    tags: ["AI in Business", "Research"],
    cardChallenge: '"This company uses AI" isn\'t an interesting sentence on its own.',
    cardContribution:
      "Traced Honasa's AI investment to the specific decisions it actually changed.",
    overview:
      "A look at how Honasa Consumer, Mamaearth's parent company, uses AI in decisions that actually matter — product, customer engagement, market positioning — not as a headline feature.",
    problem: {
      question: 'Is "we use AI" even a real claim?',
      points: [
        '"This company uses AI" isn\'t interesting on its own. The real question was what specific decisions it changed — what got built, how it entered the market, how it scaled — at a company that went from startup to IPO in a few years.',
      ],
    },
    aiRole: {
      question: "Which decisions does AI actually touch?",
      points: [
        "AI at Honasa isn't one flagship feature — it's woven through product, customer engagement and market positioning at once, which is harder for a competitor to copy than any single AI feature.",
        "Grounded in the founders' own framing — Ghazal Alagh's line that \"the real risk is not using AI, it's not using it\" — tested as a real decision, not a slogan.",
      ],
    },
    strategy: {
      question: "What's the accountability model?",
      points: [
        "Proposed an AI decision-support concept, plus a way of keeping that system accountable as the company keeps scaling its use of it.",
        'Traced specific founder decisions back to what they were actually trying to achieve, rather than describing "AI use" in general terms.',
      ],
    },
    frameworks: {
      question: "What's this analysis built on?",
      points: [
        "Annual reports & investor materials",
        "Beauty & wellness market data",
        "Founders' public statements",
      ],
    },
    delivered: {
      question: "What does the case actually show?",
      points: [
        "An analysis connecting Honasa's AI investment directly to its product, market-entry and scaling choices — a case for AI as something that compounds in value, not a marketing line. Analytical output, not a deployed system.",
      ],
    },
    outcome:
      "A clear case for AI as something that compounds in value over time, not a marketing line.",
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
    cardChallenge: "Detrash had a real sustainability story but was broadcasting, not talking.",
    cardContribution:
      "Built a full AI-accelerated brand marketing plan — campaign, product line and a new success metric.",
    overview:
      "A full marketing plan for Detrash, a UK watch brand built on sustainability, for an audience that can smell a marketing pitch from a mile away.",
    problem: {
      question: "Why does a good sustainability story still fall flat?",
      points: [
        "Detrash needed to stand for something real on sustainability without sounding like it was greenwashing.",
        "Its existing content was talking at people instead of building any kind of relationship with them — a marketing-communication problem, not a product problem.",
      ],
    },
    aiRole: {
      question: "Where does AI belong in telling a brand story?",
      points: [
        "AI was used to work through consumer research and competitor data quickly — not to write the brand's voice or invent its story.",
        "AI can scale a real story once a person has written it. It shouldn't be the one inventing it.",
      ],
    },
    strategy: {
      question: "What's the actual marketing strategy?",
      points: [
        'Named the audience precisely — "Digitally Native Ethical Urban Explorers" — people who tune out influencer campaigns and respond to evidence repeated over time.',
        'Built one connected campaign, "Time That Leaves a Mark," linking limited editions to specific environmental causes, replacing a string of disconnected one-off campaigns.',
        'Recommended a new product line, better use of existing channels, and a success metric beyond "did they buy once" — full brand-marketing strategy, not a tech fix.',
      ],
    },
    frameworks: {
      question: "What's the research behind the campaign?",
      points: [
        "GWI",
        "Mintel",
        "Euromonitor",
        "Social engagement audit",
        "FT & WatchPro coverage",
        "AI-assisted research synthesis",
      ],
    },
    delivered: {
      question: "What does the plan deliver?",
      points: [
        "A full marketing plan: product line, campaign concept, channel plan and a new way of measuring success — a strategic recommendation, not an executed campaign.",
        "Turns Detrash from a brand broadcasting into a brand positioned to actually talk with its customers — a directional outcome, to be proven once executed.",
      ],
    },
    outcome:
      "A plan that turns Detrash from a brand broadcasting into a brand actually talking with its customers.",
    reflection:
      "A strong ethical story delivered through a one-way broadcast is a wasted advantage.",
    related: ["honasa-consumer", "mamaearth"],
  },
  {
    slug: "mamaearth",
    title: "What Comes After 2,155% Growth",
    subtitle: "Mamaearth",
    deck: "2,155% growth in one year. The harder question is what comes next.",
    tags: ["Brand & Marketing", "Research"],
    cardChallenge:
      "2,155% growth in a year doesn't answer what Mamaearth does next against HUL and Dabur.",
    cardContribution:
      "Recommended four growth moves, including an AI-personalisation lever and a costed sustainability workstream.",
    overview:
      "Mamaearth grew from a baby-care startup into a unicorn-valued company almost overnight. This looks at what it should do next.",
    problem: {
      question: "What comes after triple-digit growth?",
      points: [
        "Growth that fast, on one category, doesn't answer the harder question — how do you keep growing against HUL, Dabur and Patanjali, who have far more scale and reach?",
      ],
    },
    aiRole: {
      question: "Is AI personalisation the answer?",
      points: [
        "AI-driven personalisation is recommended as one growth lever among several — not a silver bullet, and not something Mamaearth is shown to have already built at this scale.",
        "Relevant because competing on price against Patanjali (already 15–20% cheaper) was never viable; personalisation is a lever trust and product innovation can actually support.",
      ],
    },
    strategy: {
      question: "Where should Mamaearth actually compete?",
      points: [
        "Grow into new categories — men's skincare, age-specific ranges — rather than trying to out-scale bigger players at their own game.",
        "Lead with trust and product innovation, Mamaearth's real edge, instead of competing on price or shelf reach.",
        "Push a refill-and-sustainability workstream as a concrete, costed growth move.",
      ],
    },
    frameworks: {
      question: "What's the growth case built on?",
      points: [
        "Made Safe™ & PETA certification data",
        "6-competitor pricing benchmark",
        "Category market sizing (~US$26.85bn, +8.5%/yr)",
      ],
    },
    delivered: {
      question: "What's the financial case?",
      points: [
        "Four growth moves delivered as one plan — a strategic recommendation.",
        "The refill-and-sustainability workstream alone models an estimated ₹586.8 million in savings over three years — a projection grounded in the company's own numbers, not an audited result.",
      ],
    },
    outcome:
      "One workstream alone — a refill and sustainability push — carried an estimated ₹586.8 million in savings over three years.",
    reflection:
      "Reading a company's real advantage from its numbers, not its own marketing, is a genuinely different skill from reading its story.",
    related: ["honasa-consumer", "detrash"],
  },
  {
    slug: "what-employers-look-for",
    title: "What Employers Actually Look For",
    deck: "Fifty-five job listings, and the gap nobody names out loud.",
    tags: ["Research", "People & Organisations"],
    cardChallenge:
      'There\'s no single "graduate job market" — and curricula treat it like there is.',
    cardContribution:
      "Used AI to pattern-match 55 job listings into a sector-by-sector skills-gap list.",
    overview:
      "A research project built on fifty-five real graduate job listings, to find out where what universities teach and what employers actually want start to disagree.",
    problem: {
      question: 'Is there even one "graduate job market"?',
      points: [
        "There's no single \"graduate job market.\" Finance, tech, marketing, consulting and HR each want something different, and a general degree doesn't map cleanly onto any one of them.",
      ],
    },
    aiRole: {
      question: "What did AI actually do here?",
      points: [
        "AI was used to process and pattern-match across all fifty-five listings — the kind of scan that would take days by hand, done in a fraction of the time.",
        "It's what made a sector-by-sector breakdown, not just an overall average, practical at this scale.",
      ],
    },
    strategy: {
      question: "What should change, specifically?",
      points: [
        "Recommended targeted workshops on specific tools (CRM platforms, Excel, SQL) rather than rebuilding an entire curriculum from scratch.",
        'Named the actual gaps — hands-on tool training, commercial-numbers comfort, remote/cross-timezone practice — instead of a vague "teach more practical skills."',
      ],
    },
    frameworks: {
      question: "How was the gap measured?",
      points: [
        "55-listing dataset",
        "Hard-skill vs soft-skill analysis by sector",
        "AI pattern-matching across listings",
      ],
    },
    delivered: {
      question: "What's the actual recommendation?",
      points: [
        "A prioritised, specific list of fixes for both students and the university, grounded directly in the 55-listing dataset.",
      ],
    },
    outcome:
      'Concrete, implementable recommendations instead of a vague "teach more practical skills."',
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
    cardChallenge:
      "AI hiring and 3D design tools were moving faster than the culture meant to support them.",
    cardContribution:
      "Designed an AI governance approach that builds fairness into the systems themselves.",
    overview:
      "A look at whether a major fashion company can bring in AI hiring tools and 3D design software without damaging the culture and people underneath it.",
    problem: {
      question: "Can a fashion giant automate hiring without losing its people?",
      points: [
        "The technology was moving faster than the culture and leadership needed to support it — 56% of monitored workers reported high stress, against 40% of those who weren't monitored.",
      ],
    },
    aiRole: {
      question: "What AI is actually in play?",
      points: [
        "AI hiring tools and 3D design software sit at the centre of the case — the question is whether they can be adopted without damaging culture and people underneath them.",
        "Most \"digital transformation\" problems here aren't about the technology itself — they're people and management problems that happen to involve software.",
      ],
    },
    strategy: {
      question: "How do you build fairness in, not bolt it on?",
      points: [
        "Recommended building ethics directly into the hiring and design systems themselves — clear criteria, ongoing bias checks — instead of treating fairness as a policy added afterward.",
        "Proposed a full governance approach for AI-driven hiring and design, aimed at cutting bias without stripping away people's autonomy or creative ownership.",
      ],
    },
    frameworks: {
      question: "What's the governance case built on?",
      points: [
        "Company reports & case materials",
        "Workforce & diversity data",
        "Algorithmic-bias research",
      ],
    },
    delivered: {
      question: "What are the concrete moves?",
      points: [
        "Six specific moves — from fairer AI hiring criteria to employee input on workflow redesign to moving away from surveillance-style tracking — a governance recommendation, not an implemented policy.",
      ],
    },
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
    cardChallenge:
      "Wellness programmes were running on paper; burnout kept happening on the warehouse floor.",
    cardContribution:
      "Diagnosed the gap from three angles and recommended AI-enabled communication as one of four fixes.",
    overview:
      "A cloud and e-commerce company had wellness programmes running — and a genuinely disengaged workforce anyway. This works out why.",
    problem: {
      question: "Why doesn't a wellness programme fix wellbeing?",
      points: [
        "The company had grown fast without building the structure to match — office and warehouse staff were treated noticeably differently, leadership was inconsistent, and burnout kept happening despite the wellness push.",
      ],
    },
    aiRole: {
      question: "Where could AI actually help?",
      points: [
        "AI-enabled communication tools are recommended as part of fixing how information actually moves between office, warehouse and management — not the centrepiece of the fix.",
        "The core problem is a communication and fairness gap; AI only helps once that gap is actually diagnosed.",
      ],
    },
    strategy: {
      question: "What changes for office, warehouse and management?",
      points: [
        "Looked at the problem from three angles — office staff, warehouse staff, management — instead of treating the workforce as one group with one experience.",
        "Recommended standardised policy with room for local flexibility, real feedback loops for leaders, and measurable inclusion targets.",
      ],
    },
    frameworks: {
      question: "What's this diagnosis built on?",
      points: [
        "Company workforce data",
        "Organisational-fairness theory",
        "Adaptive leadership theory",
      ],
    },
    delivered: {
      question: "What are the four fixes?",
      points: [
        "Four fixes — fairness, communication, leadership, and inclusion — each with an honest look at what could go wrong implementing it. A diagnosis-and-recommendation package, not an implemented change.",
      ],
    },
    outcome:
      "Standardised policy with room for local flexibility, real feedback loops for leaders, and measurable inclusion targets.",
    reflection:
      "Diagnosing the gap between a policy and what actually happens on the ground means looking at the ground, not just the policy document.",
    related: ["calvin-klein-pvh", "honasa-consumer"],
  },
  {
    slug: "career-advice",
    title: "Why Career Advice Doesn't Travel",
    deck: "Career theory built for one culture, tested against two.",
    tags: ["Research", "People & Organisations"],
    cardChallenge:
      "Western career theory assumes choices people in collective cultures don't actually get to make.",
    cardContribution:
      "Tested three theories against two real career stories to find the one that holds up.",
    overview:
      "Most career-development advice assumes you can choose your own path, change employers freely, and pick your own direction. That's not how career progression works everywhere — this tests where those assumptions break.",
    problem: {
      question: "Why doesn't career advice travel across cultures?",
      points: [
        "Career theories built on Western, individual-choice assumptions don't hold up in family-business or more collective cultures, where career paths are often set by obligation rather than personal choice.",
      ],
    },
    aiRole: {
      question: "Where does AI actually fit here?",
      points: [
        "AI wasn't part of this research's original scope — the method was a close qualitative test of theory against two real, contrasting career stories, not a data task AI would meaningfully change.",
        "Looking forward, the most defensible AI use would be pattern analysis across many more career stories to see which theory holds at scale — a recommendation for extending this work, not something applied here.",
      ],
    },
    strategy: {
      question: "Which theory actually survives contact with reality?",
      points: [
        "Tested three established career theories against two real, very different stories — one from a family business in late-20th-century India, one a modern multi-employer career — and was specific about exactly where each theory's assumptions stopped applying.",
        'Identified Career Ecosystem Theory as the one framework that held up, because it accounts for family and cultural context instead of assuming one "right" shape for a career.',
      ],
    },
    frameworks: {
      question: "How was each theory tested?",
      points: [
        "Career Ecosystem Theory",
        "2 other career-development theories",
        "Comparative case analysis",
      ],
    },
    delivered: {
      question: "What's the defensible conclusion?",
      points: [
        "A clear, defensible account of where three well-known career theories fall short — grounded in two real cases, not an opinion piece.",
      ],
    },
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
    cardChallenge:
      "Human grading isn't neutral either — so is AI grading really the riskier option?",
    cardContribution:
      "Proposed four principles for responsible AI grading, built around visibility and appeal.",
    overview:
      'Should universities let AI grade student work? The honest answer isn\'t "yes" or "no" — it\'s about who\'s actually accountable when it gets something wrong.',
    problem: {
      question: "Is human grading even the fair default?",
      points: [
        "Human grading gets treated as automatically fair, but tiredness, workload and unconscious bias all creep in.",
        "AI grading is more consistent, but it comes with its own problems — it can be confidently wrong, hard to see inside, and can't actually be held responsible for a decision.",
      ],
    },
    aiRole: {
      question: "What's AI's actual role in grading?",
      points: [
        "The whole project is about this — a proposed setup where a human always has final say, but the system itself is constantly checked and open to challenge.",
        'AI bias can actually be tested and audited in a way human bias can\'t — which reframes the real question from "which system makes fewer mistakes" to "whose mistakes are easier to catch and fix."',
      ],
    },
    strategy: {
      question: "What would responsible AI grading require?",
      points: [
        "Put both systems side by side against the exact same standard — fairness, transparency, accountability, the ability to correct a mistake — instead of treating them as two separate debates.",
        "Proposed four working principles: a human stays accountable, the system stays visible, it's monitored continuously, and students keep a genuine right to appeal.",
      ],
    },
    frameworks: {
      question: "What's this case built on?",
      points: [
        "Algorithmic-bias research",
        "AI transparency & accountability research",
        "University grading-policy review",
      ],
    },
    delivered: {
      question: "What are the working principles?",
      points: [
        "A workable case for using AI grading responsibly, not a blanket yes or no — a policy recommendation, not a deployed grading system.",
      ],
    },
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
    cardChallenge:
      "Endless choice makes online shopping exhausting, and real styling is expensive.",
    cardContribution:
      "Specified an AI-plus-human styling concept and shipped a live front-end demo.",
    overview:
      "A concept for a shopping platform that pairs AI recommendations with an actual human stylist, built for people who are tired of scrolling.",
    problem: {
      question: "Why is online shopping so exhausting?",
      points: [
        "Endless online choice makes shopping exhausting, most people don't actually know what suits them, and real personal styling is expensive and hard to access.",
      ],
    },
    aiRole: {
      question: "What's the AI actually meant to do?",
      points: [
        "A recommendation engine (TensorFlow, on a Django backend with a React front end) was specified in enough technical detail to be buildable — but it was specified, not built; the AI described here was never deployed.",
        "AI alone doesn't have taste and a human alone doesn't scale — the concept pairs an AI recommendation layer with an actual human stylist rather than picking one.",
      ],
    },
    strategy: {
      question: "How do you beat Stitch Fix without their budget?",
      points: [
        "Targeted the gap competitors miss: styling for a wider range of body types, which even the big international players (Stitch Fix, Trunk Club, Thread, Wantable) still don't do well.",
        "Positioned Indian sustainable-fashion partnerships as the real point of difference against much bigger, better-funded competitors.",
      ],
    },
    frameworks: {
      question: "What's the concept built on?",
      points: [
        "Stitch Fix / Trunk Club / Thread / Wantable benchmarking",
        "India sustainable-fashion scan",
        "TensorFlow",
        "Django",
        "React",
      ],
    },
    delivered: {
      question: "What actually exists today?",
      points: [
        "A complete venture concept — four target customer groups, a hybrid AI/human service model, and a sustainable-fashion partnership angle.",
        "A live front-end demo (see Elevate Your Wardrobe); the AI recommendation engine itself remains a specification, not a deployed system.",
      ],
    },
    outcome:
      "A complete concept with a clear position against much bigger, better-funded competitors.",
    reflection:
      "Standing out from a Stitch Fix means finding a genuine gap, not just a smaller version of what they already do.",
    related: ["daily-t", "boat"],
    externalLink: {
      label: "View Elevate Your Wardrobe",
      href: "https://elevateyourwardrobe.akancha.co.uk/",
    },
  },
  {
    slug: "mealmate",
    title: "MealMate",
    subtitle: "Turning a week's worth of food decisions into one workflow",
    deck: "A meal-planning product that turns what you already have, your dietary needs and your budget into a practical seven-day food plan.",
    tags: ["Venture Design", "AI in Business"],
    cardChallenge: "Meal planning is five separate decisions most tools solve only one of.",
    cardContribution:
      "Shipped a working AI-driven planner that turns pantry, budget and waste into one weekly plan.",
    overview:
      "MealMate plans seven days of meals around what's already in the kitchen, builds the grocery list, keeps the week under budget, and hands over a batch-prep schedule — built around vegetarian, high-protein eating on a UK budget.",
    problem: {
      question: "Why do meal-planning apps only solve one problem at a time?",
      points: [
        "Meal planning is rarely one decision. You have to work out what's already in the kitchen, what to cook, what to buy, what it will cost, and what needs using up first — and most tools solve only one piece at a time.",
      ],
    },
    aiRole: {
      question: "What's AI actually generating here?",
      points: [
        "The generation logic that turns pantry items, protein/calorie targets and a budget into a full week's plan is AI-driven, though the exact model isn't detailed publicly.",
        "This case study focuses on the product decisions the plan needed to make, not the model behind it.",
      ],
    },
    strategy: {
      question: "How do the decisions connect?",
      points: [
        "Connected the decisions instead of solving them one at a time: kitchen inventory → a 7-day plan → shopping list → cost estimate → batch-prep schedule → leftovers plan.",
        "Built the product around three constraints that show up directly on the product itself — vegetarian/high-protein eating, a fixed UK weekly budget, and food waste.",
      ],
    },
    frameworks: {
      question: "What constraints does the product enforce?",
      points: [
        "Google sign-in",
        "Private per-account kitchen data",
        "Estimated (not live) grocery pricing",
      ],
    },
    delivered: {
      question: "What's live right now?",
      points: [
        "A working demo product — six connected steps from pantry to batch-prep schedule — explicitly a demo build, not a finished commercial platform.",
        "See the live product (MealMate link) for its current state.",
      ],
    },
    outcome:
      "A working demo product, not a finished commercial platform — sign-in is via Google, kitchen data is described as private to the account, and the product itself states it's a demo build with estimated rather than live grocery pricing.",
    reflection:
      "Reducing decision fatigue only works if you actually connect the decisions — a meal plan, a shopping list and a budget that don't talk to each other are still three separate chores.",
    related: ["daily-t", "akancha"],
    externalLink: { label: "View MealMate", href: "https://mealmate.rishabh.uk/" },
  },
  {
    slug: "boat",
    title: "Building a Category With No Technology Edge",
    subtitle: "boAt",
    deck: "No technology edge. Category leadership anyway.",
    tags: ["Brand & Marketing", "Research"],
    cardChallenge: "boAt had no technology edge and leaned entirely on Chinese manufacturing.",
    cardContribution: "Mapped the two deliberate strategic moves behind its category win.",
    overview:
      "boAt went from a small imported-audio reseller to India's biggest audio brand — without any real technology advantage over global competitors.",
    problem: {
      question: "How do you lead a category with no technology edge?",
      points: [
        "How do you build category leadership from nothing, while also being almost entirely dependent on Chinese manufacturing?",
      ],
    },
    aiRole: {
      question: "Where does AI fit into this story?",
      points: [
        "AI wasn't part of boAt's actual strategy examined here — its advantage was community and manufacturing strategy, not technology or data science.",
        "Looking forward, the clearest AI application would be demand-forecasting across boAt's huge SKU range to tighten the India-manufacturing ramp further — a recommendation for extending this analysis, not something boAt is shown to have built.",
      ],
    },
    strategy: {
      question: "What were the two moves that actually mattered?",
      points: [
        "Identified the two genuinely deliberate strategic moves — the #BoatHeads community and the shift of manufacturing to India — and separated them from good timing that just looked like a masterplan.",
        "Mapped loyalty-building (community, identity) against supply-chain risk reduction (1% to 75% India-made) as two sides of the same strategy.",
      ],
    },
    frameworks: {
      question: "What's this case built on?",
      points: [
        "Company origin story & 2016 pivot",
        "IPL / T-Series / Marvel / Lakme tie-ins",
        "Dixon Technologies manufacturing JV",
      ],
    },
    delivered: {
      question: "What does the breakdown show?",
      points: [
        "A four-part marketing breakdown mapped directly against the India-manufacturing shift from 1% to 75% — an analytical case study, not a brand-side intervention.",
      ],
    },
    outcome:
      "A full picture of how the brand built loyalty and cut a major supply-chain risk at the same time.",
    reflection: "Supply-chain risk can matter just as much as marketing — and it did here.",
    related: ["akancha", "toffee-inc"],
  },
  {
    slug: "toffee-inc",
    title: "Cutting Inventory Costs by 96%",
    subtitle: "Toffee Inc.",
    deck: "A chocolate bar, five states, and a cost problem hiding in a spreadsheet.",
    tags: ["Research"],
    cardChallenge: "Seasonal demand swings were hiding a massive inventory-cost problem.",
    cardContribution: "Built a seasonally-split forecasting model that cut inventory costs by 96%.",
    overview:
      "A confectionery company's demand kept swinging wildly by season. A demand-forecasting model brought its inventory costs down by 96%.",
    problem: {
      question: "Why was a chocolate bar's inventory bleeding cash?",
      points: [
        "Huge seasonal demand swings, a 15-day lead time on supply, high ordering costs, and constant pressure between keeping enough stock and not overstocking a product that spoils.",
      ],
    },
    aiRole: {
      question: "Could AI have done this better?",
      points: [
        "AI wasn't used in the original model — the 96% cost reduction came from a seasonally-split statistical forecast, not a machine-learning system.",
        "The natural next step is an ML-based demand model trained on the same five years of sales data, to catch finer seasonal and regional patterns than a split annual/peak model can — a recommendation, not something built here.",
      ],
    },
    strategy: {
      question: "What's the actual fix?",
      points: [
        "Forecast demand by season rather than with one annual model, then calculate the ideal order size separately for peak and off-season.",
        "Paired the forecasting fix with vendor coordination and cold-chain logistics recommendations, addressing the spoilage risk directly.",
      ],
    },
    frameworks: {
      question: "What's the model built on?",
      points: [
        "5 years of sales & cost data",
        "Seasonal demand forecasting",
        "Order-size optimisation",
      ],
    },
    delivered: {
      question: "What's the proof?",
      points: [
        "Total inventory costs modelled down from ₹31,25,060 to roughly ₹1,28,749 — a 96% reduction — plus five practical recommendations.",
        "A modelled result from historical data, not an audited live deployment.",
      ],
    },
    outcome:
      "Total inventory costs dropped from ₹31,25,060 to roughly ₹1,28,749 — a 96% reduction.",
    reflection:
      "A fairly simple model can produce a dramatic result, if you split it by the one variable that actually matters.",
    related: ["boat", "mamaearth"],
  },
  {
    slug: "anne-with-an-e",
    title: "Why the Adaptation Actually Works",
    subtitle: "Anne with an E",
    deck: "A period drama, a modern eye, and a rating that had to be earned.",
    tags: ["Research"],
    cardChallenge: "A period-drama adaptation needed real critique, not a gush or a nitpick.",
    cardContribution: "Built a scene-by-scene, theme-led argument earning its 4.5-out-of-5 rating.",
    overview:
      "A close review of a three-season TV adaptation, testing whether it actually earns the emotion it's going for.",
    problem: {
      question: "How do you critique an adaptation without gushing or nitpicking?",
      points: [
        "Give real, specific critique without either gushing or nitpicking for the sake of it.",
      ],
    },
    aiRole: {
      question: "Where does AI fit into a review like this?",
      points: [
        "AI wasn't part of this review — it's close scene-by-scene critical viewing and argument-building, a human-judgement skill, not a data task.",
        "The forward-looking link: this evidence-based, scene-by-scene method is exactly what you'd need to validate an AI sentiment or content-analysis tool against human critical judgement — a connection, not something applied here.",
      ],
    },
    strategy: {
      question: "What made the argument actually land?",
      points: [
        "Organised the review by theme — imagination versus expectation, belonging — rather than recapping the plot, which is what made the argument land.",
        "Built every point from a specific scene or choice, not a general impression.",
      ],
    },
    frameworks: {
      question: "How was the show actually reviewed?",
      points: ["Scene-by-scene critical viewing (3 seasons)", "Creator & casting research"],
    },
    delivered: {
      question: "What's the verdict, and why?",
      points: [
        "A structured argument across character, theme and production quality, backing a 4.5-out-of-5 rating point by point.",
      ],
    },
    outcome: "A 4.5-out-of-5 rating, backed up point by point.",
    reflection:
      "Building an argument from specific evidence rather than a general impression is a skill that transfers directly into any kind of persuasive writing — business included.",
    related: ["thailand", "what-employers-look-for"],
  },
  {
    slug: "thailand",
    title: "What Thailand Taught Me About India",
    subtitle: "International Knowledge Tour",
    deck: 'Seven days, two countries, one recalibrated idea of what "developed" means.',
    tags: ["Research"],
    cardChallenge: "A packed week across two countries risked becoming a travel log.",
    cardContribution:
      "Turned site visits and trade shows into a direct Thailand-vs-India business comparison.",
    overview:
      "A week across Bangkok and Pattaya, visiting trade shows and a manufacturing plant, to see how another country actually runs business day to day.",
    problem: {
      question: "How does a packed study tour become real insight?",
      points: [
        "A genuinely packed week — different industries, different sessions, a new culture every day — needed to turn into real insight, not just a travel log.",
      ],
    },
    aiRole: {
      question: "Where could AI pick this up next?",
      points: [
        "AI wasn't part of this trip or its analysis — it's a direct, first-hand comparison of how business is actually run day to day in another country.",
        "The forward-looking link: the port and manufacturing throughput data gathered here (e.g. Laem Chabang) is exactly what an AI logistics-forecasting tool would need — a recommendation for where this material could feed next, not something built from it.",
      ],
    },
    strategy: {
      question: "What's the actual comparison?",
      points: [
        "Structured the whole account as a direct Thailand-versus-India comparison rather than a day-by-day diary, which is what turned it into usable insight.",
        'Reframed India\'s position: relationship-driven business and cultural depth as real advantages, not something to be engineered away while "catching up" on infrastructure.',
      ],
    },
    frameworks: {
      question: "What was this built on?",
      points: [
        "Manufacturing site visit",
        "Glassman Asia & Food Pack Asia trade shows",
        "Laem Chabang Port visit",
      ],
    },
    delivered: {
      question: "What's the usable takeaway?",
      points: [
        "A specific, usable set of trade, logistics, manufacturing and sustainability comparisons — a comparative analysis, not an implemented recommendation.",
      ],
    },
    outcome: 'A specific, usable set of comparisons rather than a general "great trip" takeaway.',
    reflection:
      "Getting comfortable in an unfamiliar system, fast, is the actual transferable skill — more than any single fact learned about Thai manufacturing.",
    related: ["anne-with-an-e", "akancha"],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const allTags = [
  "AI in Business",
  "Brand & Marketing",
  "Research",
  "People & Organisations",
  "Venture Design",
];

export type Role = {
  title: string;
  org: string;
  dates: string;
  body: string;
  link?: string;
};

export const roles: Role[] = [
  {
    title: "Business Support & Events Intern",
    org: "New Forest Business Partnership, Lymington / Hybrid",
    dates: "2026–Present",
    link: "https://www.nfbp.org.uk/",
    body: "Support business events, operations and content across the New Forest. Working on the 2026 Brilliance in Business Awards and 2027 Business Show, while exploring where AI can improve routine work.",
  },
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
    title: "Social Media Intern",
    org: "Kiann Media, Nashik",
    dates: "2021",
    body: "Managed social media platforms and developed 10+ pieces of content on top marketing trends, generating over 1,000 engagements and boosting brand awareness. Coordinated interview scheduling for candidates, achieving a 90% interview attendance rate.",
  },
  {
    title: "HR & Design Intern",
    org: "Miss Craftista, Bengaluru",
    dates: "2021",
    body: "Supported the HR department by maintaining accurate employee records and coordinating across five departments. Contributed to the design department by creating social media posts, resulting in a 10% increase in online engagement and brand visibility.",
  },
  {
    title: "Private Tutor",
    org: "Self-employed, Siliguri",
    dates: "2020–2025",
    body: "Taught five students one-to-one at once. Average 20% improvement in six months, all five in the top 10% of their class.",
  },
];

export const timeline: { year: string; label: string; detail: string; subpoints?: string[] }[] = [
  {
    year: "2008–2022",
    label: "Nirmala Convent School, Siliguri",
    detail:
      "Schooling through to ISC (Business/Commerce). Co-organised the annual fundraising fete.",
  },
  {
    year: "2020–2025",
    label: "Private Tutor",
    detail: "Siliguri. Five students, ~20% average improvement.",
  },
  {
    year: "2020–2022",
    label: "Teen Queue — Co-Founder & Host",
    detail: "Self-founded platform, 50+ episodes.",
  },
  {
    year: "2021",
    label: "Kiann Media — Social Media Intern",
    detail: "Nashik. Content generated 1,000+ engagements.",
  },
  {
    year: "2021",
    label: "Miss Craftista — HR & Design Intern",
    detail: "Bengaluru. Contributed to a 10% engagement increase.",
  },
  {
    year: "2022–2025",
    label: "Inspiria Knowledge Campus — BBA (Global Business), First Class",
    detail: "Siliguri. Academic Co-Chair, plus a run of competition wins and leadership roles:",
    subpoints: [
      "Case Quest Volume 2 — Best Team",
      "Case Quest Volume 3 — Best Team and Most Innovative Solution",
      "Event Host, Public Triumph Celebration — Insignia Club",
      "SWITCH — debate-style business competition, INSVAGANZA",
      "Chief Managing Officer — Model United Nations",
      "International Knowledge Tour — Thailand industry and business study visit",
      "Bithindra Biswas Industry Connect — winning team",
      "I Critique — media analysis competition, winner",
      "Rotaract Club — public relations leadership, UDDHAV and Pitch Fest win",
    ],
  },
  {
    year: "2022–2023",
    label: "Rotaract Club — Public Relations Officer & Community Welfare Volunteer",
    detail:
      "Led PR, communications and community-welfare drives for the club. Won Pitch Fest at UDDHAV, the regional Rotaract Zonal Meet.",
  },
  { year: "2023–2025", label: "Social Media Coordinator (Freelance)", detail: "Siliguri." },
  { year: "2024–2025", label: "Instilt Educate — Social Media Manager & Tutor", detail: "" },
  {
    year: "2024–2025",
    label: "Business Development Intern — Eventage Trade Fair & Events",
    detail: "",
  },
  { year: "2025", label: "Event Operations Assistant (Freelance) — Dec&Deets", detail: "" },
  {
    year: "2025–2026",
    label: "University of Southampton — MSc Management & Artificial Intelligence",
    detail: "Elected Course Representative.",
  },
  { year: "2026–Present", label: "Student Ambassador", detail: "" },
  { year: "2026", label: "Restaurant & Bar Floor Manager", detail: "" },
  {
    year: "2026–Present",
    label: "New Forest Business Partnership — Business Support & Events Intern",
    detail:
      "Lymington / Hybrid. Business support, events, and identifying where AI can reduce manual effort.",
  },
];

export const thinking = [
  {
    n: "01",
    title: "Problem",
    body: "Say the problem the way the person living it would say it. If I can't do that yet, I don't understand it.",
  },
  {
    n: "02",
    title: "Research",
    body: "Numbers, people, and context. Never just one of the three.",
  },
  {
    n: "03",
    title: "Pattern",
    body: "The insight is the connection nobody else drew — not a new fact, a new link between two facts already sitting there.",
  },
  {
    n: "04",
    title: "Strategy",
    body: "A bet, not a to-do list — as clear about what we're not doing as what we are.",
  },
  {
    n: "05",
    title: "AI",
    body: "Used where it actually saves time or surfaces something real. If it doesn't, it's decoration.",
  },
  { n: "06", title: "Prototype", body: "Something people can react to, not admire." },
  {
    n: "07",
    title: "Iterate",
    body: "Cut the version I liked best if the feedback disagrees with it.",
  },
  {
    n: "08",
    title: "Outcome",
    body: "A decision, a launch, a real change. If nothing moved, it wasn't the plan — it was a deck.",
  },
];

export const skills: { skill: string; where: string }[] = [
  { skill: "Digital Marketing", where: "Detrash" },
  { skill: "Brand Analysis", where: "Mamaearth, boAt" },
  { skill: "AI in Business Decisions", where: "Honasa Consumer" },
  { skill: "AI Product Design", where: "Daily T, AKANCHA" },
  { skill: "Research & Data Synthesis", where: "What Employers Actually Look For" },
  {
    skill: "AI Ethics & Governance",
    where: "Should AI Grade Your Work?, Automating Hiring Without Losing the People",
  },
  {
    skill: "People & Organisational Diagnosis",
    where: "Velocity Inc., Automating Hiring Without Losing the People",
  },
  { skill: "Business Modelling", where: "AKANCHA, Daily T, Honasa Consumer" },
  {
    skill: "Research Methods",
    where: "What Employers Actually Look For, Why Career Advice Doesn't Travel",
  },
  {
    skill: "Peer & Stakeholder Representation",
    where: "Elected Course Representative, MSc programme",
  },
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
  'Winner — "Switch," INSVAGANZA debate competition',
  'Winner — "I Critique" media analysis competition',
  "Winner — Pitch Fest at UDDHAV (Rotaract regional Zonal Meet)",
  "Elected Course Representative — MSc Management & AI programme",
  "Public Relations Officer — Rotaract Club, Inspiria Knowledge Campus",
  "Academic Co-Chair — undergraduate peer-support role",
];
