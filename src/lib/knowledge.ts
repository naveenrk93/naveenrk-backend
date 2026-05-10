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
  // SKILLS — chunks mirror the six categories rendered in the
  // portfolio's Skills section (`section #03`), so when a recruiter
  // asks "what's his testing stack?" or "what's in his AI stack?"
  // retrieval returns the exact list shown on the page.
  //
  //   1. languages & frameworks
  //   2. frontend craft & data
  //   3. architecture & patterns
  //   4. ai · rag · llms
  //   5. testing & quality
  //   6. infra · cloud · observability
  //
  // Plus depth chunks for backend APIs, performance wins, and build
  // tooling that aren't surfaced as their own panel on the site.
  // ============================================================
  new Document({
    pageContent: `Languages & frameworks Naveen ships in production (panel 1 of 6 in his portfolio's Skills section): TypeScript (primary, daily driver across all frontend and Node.js work), JavaScript, Python (backs his DeepLearning.AI / Stanford ML coursework and his AI/RAG exploration), React, Next.js, and Node.js. React + Next.js is his core UI stack and has been across Prendio, ZoomInfo, Kuvera, and PayPal.`,
    metadata: { source: "skills-languages-frameworks" },
  }),
  new Document({
    pageContent: `Frontend craft & data layer Naveen works with (panel 2 of 6): Tailwind CSS, Chakra UI, Storybook, Redux, Zustand, React Query (TanStack Query), GraphQL, tRPC, WebSockets, and accessibility (a11y · WCAG AA). Production proof: Chakra UI powers the Prendio frontend; Storybook drives both the Prendio Design System and the ZoomInfo React component library; React Query + react-window cut re-renders by 70% at Prendio; WebSockets via Pusher.js powered ZoomInfo Chat (where Naveen drove an 80% reduction in transmission overhead). As UI Governance Lead at Prendio he is the org-wide owner of WCAG AA compliance.`,
    metadata: { source: "skills-frontend-craft-data" },
  }),
  new Document({
    pageContent: `Architecture & patterns Naveen practices and has shipped (panel 3 of 6): Micro-frontends, Module Federation, Design Systems, Component-Driven Development, REST API design, and React Profiler-driven performance work. Production proof: he led ZoomInfo's monolith → micro-frontend migration on Module Federation, authored both the Prendio Design System and the ZoomInfo React component library, and is currently UI Governance Lead at Prendio. This is the category that earns the "Architect" in his title.`,
    metadata: { source: "skills-architecture-patterns" },
  }),
  new Document({
    pageContent: `AI · RAG · LLMs stack Naveen ships with (panel 4 of 6): LangChain, LangGraph, LangSmith, Claude (Anthropic), Gemini (Google), Pinecone, pgvector, and prompt engineering. Production proof: he built the Prendio RAG procurement assistant on LangChain + LangGraph (~50% support deflection in production), uses Claude and Cursor daily for AI-assisted development, and built this very portfolio chatbot ("Anti-Mage") on LangChain + Gemini with retrieval over his resume and bio. He's hands-on with both managed (Pinecone) and self-hosted (pgvector) vector stores.`,
    metadata: { source: "skills-ai-rag-llms" },
  }),
  new Document({
    pageContent: `Testing & quality stack Naveen uses (panel 5 of 6): Vitest, Playwright, Cypress, Testing Library, Google Lighthouse, and Web Vitals. Vitest for unit and component tests, Playwright and Cypress for end-to-end testing, Testing Library for user-centric component testing, Lighthouse + Web Vitals for production performance monitoring. He treats testing as a craft — a habit he formed orchestrating both unit and functional testing for the entire product at Kuvera.`,
    metadata: { source: "skills-testing-quality" },
  }),
  new Document({
    pageContent: `Infra · cloud · observability stack (panel 6 of 6): Docker, AWS (EC2, S3, CloudFormation), Vercel, GitHub Actions, Datadog, and Sentry. AWS dates back to PayPal where he hosted Node.js / Express services on EC2; Vercel is his modern hosting choice for Next.js apps; Docker for containerization; GitHub Actions for CI/CD pipelines; Datadog and Sentry for production monitoring and error tracking. He has also worked with GCP and Kubernetes in past stacks.`,
    metadata: { source: "skills-infra-cloud-observability" },
  }),
  new Document({
    pageContent: `Performance engineering — Naveen's strongest measurable wins: 70% reduction in unnecessary re-renders at Prendio (using react-window virtualization paired with React Query), and an 80% reduction in WebSocket transmission overhead at ZoomInfo (~$5,000/month in saved infrastructure cost). His performance toolbox: React Profiler, Google Lighthouse, Web Vitals, virtualization (react-window), compression, minification, and profiler-driven re-render hunting.`,
    metadata: { source: "skills-performance" },
  }),
  new Document({
    pageContent: `Backend & APIs (depth chunk, not its own panel on the site): Node.js, Express, Hapi, Koa, REST API design and integration, plus GraphQL and tRPC where teams use them. He has shipped backend services in production at PayPal (Node.js + Express on AWS EC2), Kuvera (full-stack), and Prendio. The frontend craft & data category lists his data-layer choices; this chunk covers the server side.`,
    metadata: { source: "skills-backend" },
  }),
  new Document({
    pageContent: `Build & dev tooling (depth chunk, not its own panel on the site): Vite, Webpack, ESLint, Prettier, npm/pnpm. He owns developer experience — from build configuration to lint and formatter setup — to keep teams shipping fast without breaking conventions. Has historical experience with GitLab CI/CD and CircleCI; currently uses GitHub Actions (listed under infra · cloud · observability).`,
    metadata: { source: "skills-build-tooling" },
  }),
  new Document({
    pageContent: `How Naveen organizes his stack on his portfolio (the Skills section / section 03): six categorized panels arranged in a 3×2 grid that read left-to-right as a story — what I write (languages & frameworks) → how I build UI (frontend craft & data) → how I structure systems (architecture & patterns) → how I add intelligence (ai · rag · llms) → how I ensure quality (testing & quality) → how I deploy and monitor (infra · cloud · observability). The architecture panel is intentionally top-right — it's his strongest differentiator and what earns the "Architect" in his title.`,
    metadata: { source: "skills-organization" },
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
    pageContent: `About Naveen's portfolio site (the site this chatbot lives on): built with React 19, TanStack Start, and Framer Motion, styled with Tailwind CSS. Design language is a neon-on-dark "terminal" aesthetic with a typewriter boot intro, monospace terminal prompts, and snap-scroll one-section-per-viewport navigation. The chat assistant is called "Anti-Mage" — Naveen's tongue-in-cheek joke that he's allergic to "it's just magic" answers; every system in his world is real, readable engineering. (It's also a nod to the Dota 2 hero of the same name, for anyone who catches it.) Anti-Mage is powered by LangChain + Google Gemini, doing RAG (retrieval-augmented generation) over Naveen's resume, portfolio, and bio. Naveen built Anti-Mage himself as a live demo of the AI engineering work he does professionally.`,
    metadata: { source: "portfolio-site" },
  }),
  new Document({
    pageContent: `Portfolio site sections in order: 01 About (summary, four pillars: Craft & Architecture, AI-Native Product, Performance, Velocity), 02 Work (career timeline: Prendio, ZoomInfo, Kuvera, PayPal), 03 Skills (six categorized panels — see the skills-organization chunk for the breakdown), 04 Education (Northeastern MS + NIT Trichy BTech + DeepLearning.AI / Stanford coursework), 05 Awards (Prendio Developer Kudos and ZoomInfo Developer of the Month), 06 Projects (Prendio RAG Assistant, Prendio Design System, ZI Component Library, Micro-frontend Platform), 07 Contact (email, phone, GitHub, LinkedIn, resume PDF, faux terminal session).`,
    metadata: { source: "portfolio-sections" },
  }),
  new Document({
    pageContent: `Brand icons on the portfolio Skills section come from local SVG files bundled at build time (under src/assets/icons/) rather than a runtime CDN — no external network calls, ~12 KB gzipped total, all icons fingerprinted and cached from the same origin as the site. This is one of the small performance touches that reflects how Naveen thinks about frontend performance everywhere.`,
    metadata: { source: "portfolio-icons-perf" },
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
