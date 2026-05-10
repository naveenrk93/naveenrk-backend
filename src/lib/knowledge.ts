import { Document } from "@langchain/core/documents";

/**
 * Hardcoded knowledge base about Naveen, derived from his resume (May 2026).
 *
 * Each Document is a small, focused chunk (~300–500 chars) so the embedding
 * model produces high-signal vectors and retrieved context stays tight.
 *
 * Conventions:
 *  - Every work-experience chunk repeats the company name so queries like
 *    "tell me about your work at X" match reliably.
 *  - Roles are tagged "Current role:" or "Previous role:" so time-sensitive
 *    questions ("what are you doing now?") retrieve the right chunks.
 *  - Metric numbers (50%, 70%, 80%, $5,000/mo) live in the same chunk as
 *    the project they describe, so the LLM can cite them in context.
 *
 * To add knowledge, append `new Document({ ... })` with a unique `source`.
 */
export const knowledgeDocs: Document[] = [
  // ============================================================
  // IDENTITY & CONTACT
  // ============================================================
  new Document({
    pageContent: `Naveen Ramkumar Varadarajan (also goes by Naveen R.K. or just Naveen) is a Senior AI-enabled Frontend Architect with 8+ years of professional experience shipping production software. He is currently based in Chennai, India. Best ways to reach him: LinkedIn (https://www.linkedin.com/in/naveenramkumar-varadarajan-542001116/), email naveenrk93@gmail.com, or phone +91 95000 66155.`,
    metadata: { source: "identity" },
  }),
  new Document({
    pageContent: `Connect with Naveen on LinkedIn: https://www.linkedin.com/in/naveenramkumar-varadarajan-542001116/ — this is the best channel for new opportunities, recruiter outreach, or to start a conversation. He typically replies within a day.`,
    metadata: { source: "contact-linkedin" },
  }),
  new Document({
    pageContent: `Naveen's GitHub: https://github.com/naveenrk93 — open-source experiments, side projects, and portfolio code live here.`,
    metadata: { source: "contact-github" },
  }),
  new Document({
    pageContent: `Availability: Naveen is currently open to senior and staff Frontend / Frontend Architect roles. He usually replies to outreach within a day. Best contact: LinkedIn (https://www.linkedin.com/in/naveenramkumar-varadarajan-542001116/) or email naveenrk93@gmail.com.`,
    metadata: { source: "availability" },
  }),
  new Document({
    pageContent: `Naveen's professional headlines and aliases — how he describes himself across his portfolio and resume: "Senior AI-enabled Frontend Architect", "Web Architect", "AI · Frontend", "Design Systems", "React · TypeScript", "RAG · LangGraph". He crafts design systems, performant UIs, and intelligent product interfaces.`,
    metadata: { source: "headlines" },
  }),

  // ============================================================
  // LEARNING MINDSET (used by the bot when asked about a tech he hasn't shipped)
  // ============================================================
  new Document({
    pageContent: `Naveen is a fast, self-motivated learner. His track record proves it: he jumped from PayPal's hardware-payments stack to ZoomInfo's micro-frontend platform to Prendio's full AI/RAG stack within a few years each — every move required ramping into a new domain quickly. Most recently he picked up LangChain, LangGraph, and LangSmith from scratch and shipped a production RAG procurement assistant that cut support queries by ~50%.`,
    metadata: { source: "fast-learner" },
  }),
  new Document({
    pageContent: `Naveen's approach to learning new tech is "learn by shipping". When agentic AI frameworks emerged, he didn't just read docs — he built a real production RAG system at Prendio. He uses AI tooling daily (Cursor, Claude Code, LangGraph) and treats every new project as a chance to expand his stack. Realistic ramp-up: productive in a new framework within a week, shipping in it within a month.`,
    metadata: { source: "learning-approach" },
  }),
  new Document({
    pageContent: `Naveen's formal AI foundation (DeepLearning.AI / Stanford coursework on Neural Networks, CNNs, NLP, RL, hyperparameter tuning) plus his hands-on production RAG work mean he can pick up adjacent ML/AI tools and frameworks without a steep ramp. He pairs deep React/TypeScript fluency with the willingness to dive into any new stack the role demands.`,
    metadata: { source: "learning-ai-foundation" },
  }),

  // ============================================================
  // PROFESSIONAL SUMMARY
  // ============================================================
  new Document({
    pageContent: `Naveen builds and ships end-to-end product experiences — from design systems and accessible component libraries to backend APIs and cloud infrastructure. He has owned full product surfaces at scale: real-time chat, scheduling, form tooling, and data-heavy grids serving enterprise teams. He moves fast, cares deeply about craft, and actively uses AI tools to raise the quality bar and ship faster.`,
    metadata: { source: "summary" },
  }),
  new Document({
    pageContent: `Beyond the frontend, Naveen has been building with AI APIs and agentic frameworks (ElevenLabs, Claude, LangChain, LangGraph, LangSmith) to explore what the next generation of intelligent product interfaces looks like. He is hands-on with production RAG systems and modern AI dev tooling like Cursor and Claude Code.`,
    metadata: { source: "summary-ai" },
  }),

  // ============================================================
  // PRENDIO — current role (Jan 2024 – Present)
  // ============================================================
  new Document({
    pageContent: `Current role: Senior AI-enabled Frontend Architect & UI Governor at Prendio in Chennai, India. Started January 2024 and is still in the role. Designated as the UI Governance Lead, championing organization-wide standards for design systems, accessibility, and code consistency across all frontend initiatives at Prendio.`,
    metadata: { source: "prendio-role" },
  }),
  new Document({
    pageContent: `At Prendio, Naveen built an internal RAG-powered procurement assistant using LangChain and LangGraph. It enables natural language querying over Purchase Order history and vendor documents, and reduced customer support queries by almost 50%. This is a real production AI system used daily by the Prendio team.`,
    metadata: { source: "prendio-rag" },
  }),
  new Document({
    pageContent: `At Prendio, Naveen orchestrated the overhaul of the entire frontend ecosystem by building a scalable architecture using React, TypeScript, and Chakra UI. The redesign boosted maintainability, performance, and team efficiency across multiple product verticals.`,
    metadata: { source: "prendio-architecture" },
  }),
  new Document({
    pageContent: `At Prendio, Naveen engineered and curated the Prendio Design System and a Storybook-based component library, empowering product teams to deliver consistent, accessible, and reusable UI elements aligned with product design.`,
    metadata: { source: "prendio-design-system" },
  }),
  new Document({
    pageContent: `At Prendio, Naveen refined virtualized rendering pipelines using react-window and React Query, achieving up to 70% reduction in unnecessary re-renders and significantly improving performance in heavy data grids.`,
    metadata: { source: "prendio-performance" },
  }),

  // ============================================================
  // ZOOMINFO (Oct 2020 – Dec 2023)
  // ============================================================
  new Document({
    pageContent: `Previous role: Senior Frontend Developer at ZoomInfo in Chennai, India, from October 2020 to December 2023 (~3.2 years). Naveen served as India's subject matter expert on React and frontend development methodologies across the entire ZoomInfo organization.`,
    metadata: { source: "zoominfo-role" },
  }),
  new Document({
    pageContent: `At ZoomInfo, Naveen directed the transformational effort to transition from a monolithic frontend structure to a modular micro-frontend framework. This improved development velocity, scalability, and gave cross-functional teams independent deployment capabilities. He spearheaded the creation and maintenance of multiple React-driven micro-frontends, libraries, and monolithic architectures, prioritizing scalability and resilience.`,
    metadata: { source: "zoominfo-microfrontends" },
  }),
  new Document({
    pageContent: `At ZoomInfo, Naveen owned four major products end-to-end as the technical lead: ZoomInfo Chat, ZoomInfo Schedule, ZITag, and ZoomInfo FormComplete. He also designed and published the React component library used across the entire ZoomInfo product ecosystem.`,
    metadata: { source: "zoominfo-products" },
  }),
  new Document({
    pageContent: `At ZoomInfo, Naveen implemented advanced socket optimization techniques leveraging Pusher.js for the Chat and Schedule applications, achieving an 80% reduction in data transmission overhead and saving the company approximately $5,000 per month in infrastructure costs.`,
    metadata: { source: "zoominfo-pusher" },
  }),

  // ============================================================
  // KUVERA (Jan 2020 – Oct 2020)
  // ============================================================
  new Document({
    pageContent: `Previous role: Full Stack Developer at Kuvera Inc in Bengaluru, India, from January 2020 to October 2020. At Kuvera, Naveen led and executed the Loan against Security (LAS) project, the Mutual Fund Portfolio replication project, and the KYC portfolio implementation. He evaluated and integrated third-party React libraries and tools, balancing innovation with reliability, and orchestrated both unit and functional testing for the entire product.`,
    metadata: { source: "kuvera" },
  }),

  // ============================================================
  // PAYPAL (Aug 2017 – May 2019)
  // ============================================================
  new Document({
    pageContent: `Previous role: Full Stack Engineer at PayPal in San Jose, California, USA, from August 2017 to May 2019. Naveen worked for the famous PayPal Innovations & Hardware Labs team. He was involved in creating, authorizing, tokenizing, and securely transferring Payment Credential Data (PCD) onto a Secure Element (a hardware wallet).`,
    metadata: { source: "paypal-role" },
  }),
  new Document({
    pageContent: `At PayPal's Innovations & Hardware Labs team, Naveen created and maintained backend servers using Node.js, React.js, and Express.js. He developed RESTful services and securely hosted them on Amazon EC2 instances. He also built a Kiosk that enhanced user onboarding for the OneFob hardware product while maintaining simplicity, safety, and security.`,
    metadata: { source: "paypal-projects" },
  }),

  // ============================================================
  // EDUCATION
  // ============================================================
  new Document({
    pageContent: `Education: Master of Science (MS) in Computer Systems Engineering from Northeastern University in Boston, Massachusetts, USA (January 2015 – January 2017).`,
    metadata: { source: "education-ms" },
  }),
  new Document({
    pageContent: `Education: Bachelor of Technology (BTech) in Electrical & Electronics Engineering from the National Institute of Technology (NIT) Trichy, India (January 2011 – January 2015).`,
    metadata: { source: "education-btech" },
  }),

  // ============================================================
  // COURSES
  // ============================================================
  new Document({
    pageContent: `AI/ML coursework from DeepLearning.AI / Stanford University: (1) Neural Networks & Deep Learning, (2) Convolutional Neural Networks (CNNs), Sequence Models, and NLP Applications, (3) Supervised, Unsupervised & Reinforcement Learning, and (4) Advanced Hyperparameter Tuning & Optimization. This formal AI foundation backs his hands-on production AI work.`,
    metadata: { source: "courses-ai" },
  }),

  // ============================================================
  // SKILLS (one chunk per category for clean retrieval)
  // ============================================================
  new Document({
    pageContent: `Programming languages Naveen works with day-to-day: TypeScript (primary), JavaScript, and Python. TypeScript is his daily driver across all production frontend and Node.js work. Python comes from his DeepLearning.AI / Stanford ML coursework (which is Python-based) and supports his AI/RAG exploration. All three are listed in the "primary stack" section of his portfolio.`,
    metadata: { source: "skills-languages" },
  }),
  new Document({
    pageContent: `Frontend skills: React 18, Next.js, TypeScript, Redux, Swagger, Storybook. Naveen has deep, production-grade experience with all of these, having shipped multiple component libraries and micro-frontends used by enterprise teams.`,
    metadata: { source: "skills-frontend" },
  }),
  new Document({
    pageContent: `AI / Machine Learning skills: LangChain, LangGraph, LangSmith, Claude (and Claude Code), Cursor, RAG systems, ElevenLabs. Naveen builds production RAG applications and uses agentic frameworks to ship intelligent product interfaces.`,
    metadata: { source: "skills-ai" },
  }),
  new Document({
    pageContent: `Performance engineering skills: Lighthouse, Web Vitals, React Profiler, compression & minification, virtualization techniques like react-window. He has measurable wins here — 70% reduction in re-renders at Prendio and 80% reduction in socket data overhead at ZoomInfo.`,
    metadata: { source: "skills-performance" },
  }),
  new Document({
    pageContent: `Tooling and CI/CD: Vite, Webpack, Vitest, Jest, ESLint, Prettier, GitLab CI/CD, CircleCI. Naveen owns developer experience and automation pipelines for fast, reliable shipping.`,
    metadata: { source: "skills-tooling" },
  }),
  new Document({
    pageContent: `Backend & APIs skills: Node.js, Express, Hapi, Koa, REST API design and integration. He has shipped backend services in production at PayPal, Kuvera, and Prendio.`,
    metadata: { source: "skills-backend" },
  }),
  new Document({
    pageContent: `Cloud & DevOps skills: AWS (EC2, S3, CloudFormation), GCP, Docker, Kubernetes. He has hands-on experience hosting and securing services on Amazon EC2 dating back to his PayPal years.`,
    metadata: { source: "skills-cloud" },
  }),
  new Document({
    pageContent: `Architecture & specialty skills: Design Systems, Micro-frontends, UI Governance, Accessibility (ARIA / WCAG 2.1). Naveen has formally held the UI Governance Lead role at Prendio and has built design systems at both Prendio and ZoomInfo.`,
    metadata: { source: "skills-architecture" },
  }),

  // ============================================================
  // FEATURED PROJECTS (one chunk each for clean retrieval)
  // ============================================================
  new Document({
    pageContent: `Featured project — "Prendio RAG Assistant" (LangGraph · LangChain · React): The AI procurement copilot Naveen built at Prendio. It lets users query Purchase Order history and vendor documents in natural language and delivers ~50% support deflection. This is his flagship production AI system.`,
    metadata: { source: "project-prendio-rag" },
  }),
  new Document({
    pageContent: `Featured project — "Prendio Design System" (React · TypeScript · Storybook): The design tokens, primitives, and governance system Naveen authored at Prendio for the entire organization. Drives consistency and accessibility across all product verticals.`,
    metadata: { source: "project-prendio-ds" },
  }),
  new Document({
    pageContent: `Featured project — "ZI Component Library" (React · TypeScript): The shared React component library Naveen designed and published for the entire ZoomInfo product ecosystem.`,
    metadata: { source: "project-zi-library" },
  }),
  new Document({
    pageContent: `Featured project — "Micro-frontend Platform" (Module Federation): Naveen led the migration from a frontend monolith to micro-frontends across cross-functional teams at ZoomInfo, enabling independent deployment and faster shipping.`,
    metadata: { source: "project-microfrontends" },
  }),

  // ============================================================
  // PORTFOLIO SITE (meta — about the site itself)
  // ============================================================
  new Document({
    pageContent: `About Naveen's portfolio site (the site this chatbot lives on): built with React 19, TanStack Start, and Framer Motion. Design language is a neon-on-dark "terminal" aesthetic. The chat assistant is called "Anti-Mage" — Naveen's tongue-in-cheek joke that he's allergic to "it's just magic" answers; every system in his world is real, readable engineering. (It's also a nod to the Dota 2 hero of the same name, for anyone who catches it.) Anti-Mage is powered by LangChain + Gemini, doing RAG (retrieval-augmented generation) over Naveen's resume, portfolio, and bio. Naveen built Anti-Mage himself as a live demo of the AI engineering work he does professionally.`,
    metadata: { source: "portfolio-site" },
  }),

  // ============================================================
  // ACHIEVEMENTS / RECOGNITION
  // ============================================================
  new Document({
    pageContent: `Recognition at Prendio: Developer Kudos awarded three times — December 2024, April 2025, and September 2025.`,
    metadata: { source: "achievements-prendio" },
  }),
  new Document({
    pageContent: `Recognition at ZoomInfo: Developer of the Month award multiple times. Naveen is the only person in ZoomInfo history to win the award in two consecutive months.`,
    metadata: { source: "achievements-zoominfo" },
  }),
];
