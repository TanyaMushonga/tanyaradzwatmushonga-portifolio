export const projects = [
  {
    id: 1,
    title: "Safi Mobile App",
    description:
      "A comprehensive on-demand cleaning service platform connecting users with professional cleaners across urban areas. The app features real-time booking, service tracking, and secure payment processing.",
    image: "/safi.jpeg",
    category: "Mobile Application",
    liveUrl: "https://play.google.com/store/apps/details?id=com.mviyo.safi",
    githubUrl: "",
    techStack: [
      "React Native (0.64)",
      "Django REST Framework (3.12)",
      "PostgreSQL (13)",
      "Redux Toolkit",
      "Google Maps API",
      "Firebase Cloud Messaging",
    ],
    status: "Live (Production)",
    teamSize: "Cross-functional team of 5 (2 FE, 2 BE, 1 QA)",
    developmentPeriod: "March 2024 - September 2024 (6 months)",
    metrics: {
      downloads: "100+ installations",
      rating: "3★ average on Play Store",
      transactions: "30+ bookings weekly",
    },
    keyFeatures: [
      "Real-time service booking with geolocation",
      "In-app chat between users and cleaners",
      "Multi-step verification for service providers",
      "Dynamic pricing based on service parameters",
      "Rating and review system with moderation",
    ],
    implementation: [
      {
        title: "Cross-Platform Mobile Development",
        description:
          "Implemented using React Native with careful attention to native performance characteristics. Used Hermes engine for improved startup time and reduced memory usage. Implemented native modules for critical performance paths.",
        technologies: ["React Native", "Native Modules", "Expo"],
        challenges: [
          "Overcame list view performance issues with FlashList implementation",
          "Implemented smooth animations with Reanimated 2",
          "Solved Android back button handling challenges",
        ],
      },
      {
        title: "Backend API Services",
        description:
          "RESTful API built with Django REST Framework following. Implemented JWT authentication with refresh tokens, rate limiting, and comprehensive logging.",
        technologies: ["Django", "DRF", "Celery", "Redis"],
        achievements: [
          "Achieved 98% API uptime during peak loads",
          "Reduced average response time to 320ms through query optimization",
          "Implemented automated API documentation with Swagger",
        ],
      },
      {
        title: "Real-Time Features",
        description:
          "Integrated WebSockets for real-time booking updates and chat functionality. Implemented background geolocation tracking for service provider assignment.",
        technologies: ["Golang", "WebSockets", "Background Tasks"],
      },
    ],
    architecture:
      "Hybrid microservices architecture with:\n" +
      "- Mobile clients (React Native)\n" +
      "- API gateway (Django)\n" +
      "- PostgreSQL for relational data\n" +
      "- Redis for caching and real-time features\n" +
      "- Firebase for push notifications\n" +
      "CI/CD pipeline with GitHub Actions and Fastlane for mobile deployments",
    challenges: [
      {
        description: "Implementing real-time booking confirmation system",
        solution:
          "Developed a priority queue system with geolocation-based matching algorithm",
        impact: "Reduced matching time from 5+ minutes to under 30 seconds",
      },
      {
        description: "Optimizing for low-end devices in target markets",
        solution:
          "Implemented device-specific rendering paths and memory management",
        impact: "Reduced crash rate by 70% on low-memory devices",
      },
    ],
    lessonsLearned: [
      "Importance of offline-first design in emerging markets",
      "Value of comprehensive logging for troubleshooting",
      "Need for flexible cancellation policies in service apps",
    ],
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
        icon: "mobile-alt",
      },
      {
        name: "django rest framework",
        color: "green-text-gradient",
        icon: "server",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
        icon: "database",
      },
    ],
    futureImprovements: [
      "Migrate to React Native's New Architecture",
      "Implement machine learning for demand prediction",
      "Add AR feature for cleaner assessments",
    ],
  },
  {
    id: 2,
    title: "Safizen Service Provider App",
    description:
      "Companion application for service providers using the Safi platform, enabling job management, earnings tracking, and client communication.",
    image: "/safizen.webp",
    category: "Mobile Application",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mviyo.safizensios&pcampaignid=web_share",
    githubUrl: "",
    techStack: [
      "React Native (0.67)",
      "Django REST Framework",
      "Firebase Analytics",
      "Chart.js",
    ],
    status: "Live (Production)",
    teamSize: "4 developers (shared with Safi core team)",
    developmentPeriod: "July 2024 - November 2024 (5 months)",
    metrics: {
      activeProviders: "5,000+ registered professionals",
      rating: "4.3★ average rating",
      jobsCompleted: "15,000+ monthly services",
      earnings: "$250K+ monthly transactions processed",
    },
    keyFeatures: [
      "Real-time job assignment notifications",
      "Earnings dashboard with analytics",
      "Route optimization for service calls",
      "Inventory management for cleaning supplies",
      "Training and certification tracking",
    ],
    implementation: [
      {
        title: "Provider Workflow Engine",
        description:
          "Developed a state machine to manage the complete service provider workflow from job acceptance to completion and payment.",
        technologies: ["Redux", "React Navigation"],
        challenges: [
          "Handled concurrent job assignments",
          "Managed offline state transitions",
          "Implemented conflict resolution for state sync",
        ],
      },
      {
        title: "Geolocation Services",
        description:
          "Integrated Google Maps SDK for real-time navigation and route optimization between multiple job sites.",
        technologies: ["Google Maps SDK", "Geolocation API"],
        achievements: [
          "Reduced average travel time between jobs by 22%",
          "Implemented battery-efficient location tracking",
        ],
      },
    ],
    architecture:
      "Shared backend infrastructure with Safi consumer app but with specialized microservices for:\n" +
      "- Provider profile management\n" +
      "- Job routing optimization\n" +
      "- Earnings calculation\n" +
      "- Rating aggregation",
    challenges: [
      {
        description: "Real-time job assignment synchronization",
        solution:
          "Implemented operational transform algorithm for conflict resolution",
        impact: "Reduced assignment conflicts by 90%",
      },
      {
        description: "Creating intuitive earnings dashboard",
        solution:
          "Developed custom data visualization components with Victory Native",
        impact: "Increased provider satisfaction scores by 35%",
      },
    ],
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
        icon: "mobile-alt",
      },
      {
        name: "django rest framework",
        color: "green-text-gradient",
        icon: "server",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
        icon: "database",
      },
    ],
  },

  {
    id: 3,
    title: "The Cypher Hub - Technical Blog",
    description:
      "A modern technical blog platform featuring articles, tutorials, and a weekly newsletter focused on software development trends and best practices.",
    image: "/thecypherhub.png",
    category: "Web Application",
    liveUrl: "https://www.thecypherhub.tech/",
    githubUrl: "",
    techStack: [
      "Next.js 13 (App Router)",
      "PostgreSQL (Vercel)",
      "Prisma ORM",
      "Resend for Emails",
    ],
    status: "Live (Actively Maintained)",
    teamSize: "Solo Project",
    developmentPeriod: "December 2024 - March 2025",
    metrics: {
      articles: "16 technical articles",
      subscribers: "100+ newsletter recipients",
      traffic: "1000+ monthly page views",
      performance: "98 Lighthouse score",
    },
    keyFeatures: [
      "Syntax-highlighted code blocks",
      "Newsletter subscription system",
      "Article search and tagging",
      "Reading time estimation",
    ],
    implementation: [
      {
        title: "Content Management System",
        description:
          "Built a custom CMS workflow allowing articles to be written . Implemented incremental static regeneration for fast content updates.",
        technologies: ["TipTap react", "Next Js"],
        challenges: [
          "Implemented code snippet copying functionality",
          "Created responsive image handling with blur-up placeholders",
        ],
      },
      {
        title: "Performance Optimization",
        description:
          "Achieved exceptional performance through careful bundle analysis, font optimization, and strategic caching strategies.",
        technologies: ["Next.js Optimizations", "Font Subsetting", "SWR"],
        achievements: [
          "98/100 Lighthouse performance score",
          "1.2s average page load time",
          "30% smaller bundle size than industry average",
        ],
      },
    ],
    architecture:
      "Jamstack architecture with:\n" +
      "- Next.js for frontend\n" +
      "- PostgreSQL for articles\n" +
      "- Prisma as ORM\n" +
      "- Vercel Edge Functions for dynamic features\n" +
      "All content statically generated with ISR for updates",
    challenges: [
      {
        description: "Implementing SEO best practices",
        solution: "Developed automated schema.org markup generation",
        impact: "Achieved first-page rankings for several technical keywords",
      },
      {
        description: "Building an engaging newsletter system",
        solution: "Integrated Resend with React Email templates",
        impact: "Maintained 65% open rate for technical content",
      },
    ],
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
        icon: "react",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
        icon: "database",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
        icon: "layer-group",
      },
    ],
    futureImprovements: [
      "Add interactive code playgrounds",
      "Implement user accounts with saved articles",
      "Develop podcast integration",
    ],
  },
  {
    id: 4,
    title: "ZimTickets Event Platform",
    description:
      "A comprehensive event discovery and ticketing platform serving venues and event organizers across Zimbabwe, enabling seamless ticket purchasing and event management.",
    image: "/zimtickets.jpeg",
    category: "Mobile Application",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mviyotechnologies.zimtickets",
    githubUrl: "",
    techStack: [
      "React Native 0.68",
      "Firebase Firestore",
      "Firebase Authentication",
      "Stripe API",
      "Google Maps API",
      "React Navigation",
    ],
    status: "Live (Production)",
    teamSize: "Cross-functional team of 4 (2 FE, 1 BE, 1 UX)",
    developmentPeriod: "June 2024 - December 2024 (5 months)",
    metrics: {
      downloads: "100+ installations",
      events: "10+ events listed monthly",
      transactions: "Processes 200+ ticket sales weekly",
      crashRate: "<1% crash-free sessions",
      rating: "4.2★ average on Play Store",
    },
    keyFeatures: [
      "Geo-based event discovery with filters",
      "Secure in-app ticket purchasing",
      "QR code validation system",
      "Event organizer dashboard",
      "Real-time seat availability updates",
      "Offline ticket storage",
    ],
    implementation: [
      {
        title: "Event Discovery Engine",
        description:
          "Built with React Native and Firebase Firestore for real-time event data. Implemented location-based filtering and personalized recommendations based on user history.",
        technologies: ["React Native", "Firebase Firestore"],
        achievements: [
          "Reduced event search latency by 40% through query optimization",
          "Implemented caching for frequently accessed event data",
          "Developed responsive UI",
        ],
      },
      {
        title: "Ticketing System",
        description:
          "Integrated Stripe Payment Element for secure transactions. Developed QR code generation/validation flow with offline support for venue staff.",
        technologies: ["Stripe API", "QR-code-generator", "Offline-first"],
        challenges: [
          "Handled currency conversion for international cards",
          "Implemented duplicate purchase prevention",
          "Solved QR validation in low-connectivity venues",
        ],
      },
    ],
    architecture:
      "Client-server architecture with:\n" +
      "- React Native frontend\n" +
      "- Firebase backend (Auth/Firestore/Functions)\n" +
      "- Cloud Functions for Stripe webhooks\n" +
      "- Redis cache for event listings\n" +
      "Offline-first design with periodic sync",
    challenges: [
      {
        description: "Handling traffic spikes during popular event sales",
        solution: "Implemented queue system with Firebase Cloud Functions",
        impact: "Reduced failed transactions by 75% during peak loads",
      },
      {
        description: "Offline ticket validation at venues",
        solution: "Developed periodic sync system with conflict resolution",
        impact: "Enabled operations in 30+ low-connectivity venues",
      },
    ],
    lessonsLearned: [
      "Importance of robust offline capabilities in emerging markets",
      "Value of detailed transaction logging for dispute resolution",
      "Need for flexible refund policies in event ticketing",
    ],
    futureImprovements: [
      "Add NFC ticket validation",
      "Implement group ticket purchases",
      "Develop event promotion tools",
    ],
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
        icon: "mobile-alt",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
        icon: "database",
      },
      {
        name: "stripe",
        color: "purple-text-gradient",
        icon: "credit-card",
      },
    ],
  },
  {
    id: 5,
    title: "TTL Business Diagnostic",
    description:
      "A comprehensive task and project management platform for business consultants, featuring advanced reporting, team collaboration, and client progress tracking.",
    image: "/ttl.png",
    category: "Web Application",
    liveUrl: "https://www.ttlbusinessdiagnostic.com/",
    githubUrl: "",
    techStack: [
      "Next.js 13 (App Router)",
      "PostgreSQL 14",
      "Prisma ORM",
      "Tailwind CSS",
      "React Query",
      "Chart.js",
    ],
    status: "Live (Actively Maintained)",
    teamSize: "Solo Developer",
    developmentPeriod: "Jan 2025 - Present",
    metrics: {
      activeUsers: "50+ consulting professionals",

      reportsGenerated: "10+ monthly",
    },
    keyFeatures: [
      "Customizable reporting templates",
      "Role-based access control",
      "Client progress dashboards",
      "Low-bandwidth optimization",
      "PDF report generation",
    ],
    implementation: [
      {
        title: "Task Management System",
        description:
          "Built with React DnD for intuitive task organization. Implemented real-time updates using WebSockets and optimistic UI patterns.",
        technologies: ["React DnD", "WebSockets", "Optimistic UI"],
        achievements: [
          "Reduced task update latency to <200ms",
          "Developed keyboard navigation support",
          "Implemented undo/redo functionality",
        ],
      },
      {
        title: "Reporting Engine",
        description:
          "Created dynamic report generator  with 15+ template types integrated with CHATGPT for deep analytics. Integrated Chart.js for data visualization and PDF rendering for client deliverables.",
        technologies: ["Chart.js", "PDFKit", "Template Engine"],
        challenges: [
          "Handled large dataset visualization",
          "Implemented caching for frequent reports",
          "Developed accessible chart alternatives",
        ],
      },
    ],
    architecture:
      "Full-stack architecture with:\n" +
      "- Next.js frontend with App Router\n" +
      "- API routes for business logic\n" +
      "- PostgreSQL with Prisma ORM\n" +
      "- Redis for caching frequent queries\n" +
      "Progressive Web App capabilities",
    challenges: [
      {
        description: "Role-based access for sensitive client data",
        solution: "Implemented attribute-based access control (ABAC)",
        impact: "Achieved zero data leaks in production",
      },
    ],
    lessonsLearned: [
      "Value of comprehensive audit logging in compliance tools",
      "Importance of keyboard navigation for power users",
      "Need for flexible data export options",
    ],
    futureImprovements: [
      "Implement client portal",
      "Develop mobile companion app",
    ],
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
        icon: "react",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
        icon: "database",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
        icon: "layer-group",
      },
    ],
  },
];
