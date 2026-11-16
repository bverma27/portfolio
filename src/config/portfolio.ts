import { PortfolioData } from '../types';

/**
 * PORTFOLIO CONFIGURATION
 * ------------------------------------------------------------------
 * Single source of truth for all personal information, projects,
 * tech stack items, social links, and currently learning topics.
 * Edit this file to customize the portfolio content.
 * ------------------------------------------------------------------
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Morgan", // Replace with your name
    role: "Full-Stack Software Engineer",
    location: "San Francisco, CA / Remote",
    availability: "Available for new roles & selected freelance",
    availableForHire: true,
    headline: "Building digital experiences through code.",
    bio: [
      "I am a passionate software engineer focused on crafting clean, high-performance web applications with exceptional user experiences.",
      "My work sits at the intersection of robust backend engineering, elegant frontend architecture, and thoughtful human-centric design. I love breaking down complex problems into modular, maintainable systems.",
      "When I am not coding, you will find me exploring distributed systems, writing technical breakdowns, and experimenting with generative AI workflows."
    ],
    philosophy: "I believe great software is defined by speed, simplicity, and attention to detail. Every pixel, micro-interaction, and API endpoint should serve a purpose.",
    interests: [
      "Modern Web Architecture",
      "Interactive UI & Animation",
      "Scalable System Design",
      "Developer Tooling",
      "Open Source Software",
      "Generative AI & LLM Systems"
    ],
    email: "alex.morgan.dev@example.com", // Replace with your email
    resumeUrl: "#", // Link to resume PDF if available
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
      handle: "@alexmorgan",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
      handle: "in/alexmorgandev",
    },
    {
      name: "X / Twitter",
      url: "https://x.com",
      icon: "Twitter",
      handle: "@alexmorgancodes",
    },
    {
      name: "Email",
      url: "mailto:alex.morgan.dev@example.com",
      icon: "Mail",
      handle: "alex.morgan.dev@example.com",
    },
  ],

  techStack: [
    {
      name: "JavaScript (ES6+)",
      category: "core",
      icon: "Code2",
      description: "Modern asynchronous JS, event loop, closures & web APIs.",
      highlight: true,
    },
    {
      name: "TypeScript",
      category: "core",
      icon: "Binary",
      description: "Strong typing, interfaces, generics & compile-time safety.",
      highlight: true,
    },
    {
      name: "React",
      category: "frontend",
      icon: "Atom",
      description: "Component-driven architecture, custom hooks, and state management.",
      highlight: true,
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: "Layers",
      description: "Server-side rendering, App Router, SSR/SSG, and API routes.",
      highlight: true,
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "Palette",
      description: "Utility-first modern styling, responsive layouts & fluid design tokens.",
      highlight: true,
    },
    {
      name: "Node.js",
      category: "backend",
      icon: "Server",
      description: "Event-driven runtime for scalable, high-throughput microservices.",
      highlight: true,
    },
    {
      name: "Express",
      category: "backend",
      icon: "Cpu",
      description: "RESTful API design, middleware pipelines, and secure authentication.",
      highlight: true,
    },
    {
      name: "MongoDB",
      category: "database",
      icon: "Database",
      description: "Document modeling, aggregation pipelines, and indexing optimization.",
      highlight: true,
    },
    {
      name: "Git",
      category: "tools",
      icon: "GitBranch",
      description: "Branching strategies, interactive rebasing, and clean commit history.",
      highlight: true,
    },
    {
      name: "GitHub",
      category: "tools",
      icon: "Github",
      description: "CI/CD actions, pull request workflows, and open-source collaboration.",
      highlight: true,
    },
  ],

  projects: [
    {
      id: "hyperion-saas",
      title: "Hyperion Analytics",
      tagline: "Real-time analytics & telemetry engine for modern cloud applications",
      description: "A high-performance observability platform featuring streaming time-series dashboards, anomaly detection alerts, and an intuitive querying interface built for engineering teams.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "full-stack",
      metrics: "< 35ms query latency & 99.9% uptime",
      highlights: [
        "Architected server-sent events (SSE) pipeline for real-time metric streams",
        "Built responsive charting dashboard with sub-second aggregate visualization",
        "Implemented role-based access control (RBAC) and OAuth authentication"
      ],
      year: "2025",
    },
    {
      id: "devsync-collab",
      title: "DevSync Workspace",
      tagline: "Collaborative developer notepad with live markdown & code execution",
      description: "A lightweight collaborative workspace enabling developers to write documentation, test code snippets in real-time, and share architectural diagrams with peer-to-peer sync.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "full-stack",
      metrics: "Live multi-cursor sync with WebSockets",
      highlights: [
        "Conflict-free replicated data structures for seamless offline-first collaboration",
        "Syntax highlighting engine supporting 40+ programming languages",
        "Export to PDF, Markdown, and static documentation sites"
      ],
      year: "2024",
    },
    {
      id: "nexus-commerce",
      title: "Nexus Headless Storefront",
      tagline: "Ultra-fast headless e-commerce experience with sub-second page loads",
      description: "A modern storefront engineered for conversion. Features instant search with algorithmic filtering, optimistic cart management, and seamless Stripe checkout integration.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "frontend",
      metrics: "100/100 Lighthouse Performance score",
      highlights: [
        "Zero-layout-shift image optimization with Next.js edge caching",
        "Cart state persisted with local storage and optimistic server synchronisation",
        "Full keyboard accessibility compliance (WCAG 2.1 AA)"
      ],
      year: "2024",
    },
    {
      id: "lumina-api",
      title: "Lumina Gateway",
      tagline: "Intelligent API rate limiter and reverse proxy microservice",
      description: "A lightweight reverse proxy engineered with Node.js and Express that enforces sliding-window rate limiting, token verification, and granular traffic inspection.",
      technologies: ["Node.js", "Express", "JavaScript", "MongoDB", "Git"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "backend",
      metrics: "Handles 12,000+ requests/second",
      highlights: [
        "Sliding log algorithm prevents burst DDoS exploits with distributed locking",
        "Interactive developer console with request latency histograms",
        "Zero external dependencies for the core proxy routing pipeline"
      ],
      year: "2024",
    },
  ],

  learning: [
    {
      topic: "System Design & Distributed Architectures",
      category: "Architecture",
      description: "Deep diving into high-availability systems, sharding, caching topologies (Redis/Memcached), consensus protocols (Raft), and message queues (Kafka, RabbitMQ).",
      currentFocus: "Event-driven microservices & CQRS patterns",
      progress: 85,
      tags: ["Distributed Systems", "Scalability", "Event Streams", "Consistency Models"],
      icon: "Network",
    },
    {
      topic: "Advanced Data Structures & Algorithms",
      category: "Computer Science",
      description: "Practicing problem solving, graph algorithms, dynamic programming, and space-time complexity optimization for performant software solutions.",
      currentFocus: "Graph traversals, topological sorts, and DP memoization",
      progress: 80,
      tags: ["Graphs", "Dynamic Programming", "Trees", "Big-O Optimization"],
      icon: "Binary",
    },
    {
      topic: "AI Engineering & LLM Application Development",
      category: "Artificial Intelligence",
      description: "Mastering retrieval-augmented generation (RAG), vector embeddings, agentic loop architectures, structured output generation, and eval-driven prompting.",
      currentFocus: "Agentic tool use & hybrid vector-keyword retrieval",
      progress: 75,
      tags: ["RAG", "Agent Workflows", "Vector DBs", "Prompt Engineering"],
      icon: "Sparkles",
    },
    {
      topic: "Modern Full-Stack Engineering & Web Performance",
      category: "Full-Stack",
      description: "Mastering React Server Components (RSC), Next.js App Router internals, edge runtimes, web vitals optimization, and resilient database transaction pipelines.",
      currentFocus: "RSC rendering lifecycle & optimistic mutations",
      progress: 90,
      tags: ["React 19", "Edge Compute", "Web Vitals", "ACID Transactions"],
      icon: "Terminal",
    },
  ],
};
