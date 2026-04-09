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
    title: "Technical Blog",
    description:
      "A modern technical blog platform featuring articles, tutorials, and a weekly newsletter focused on software development trends and best practices.",
    image: "/thecypherhub.png",
    category: "Web Application",
    liveUrl: "https://blog.tanyaradzwatmushonga.me/",
    githubUrl: "https://github.com/TanyaMushonga/tanyas-blog",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS v4",
      "Resend",
    ],
    status: "Live (Actively Maintained)",
    teamSize: "Solo Project",
    developmentPeriod: "December 2024 - March 2025",
    metrics: {
      articles: "16+ technical articles",
      subscribers: "100+ newsletter recipients",
      traffic: "1000+ monthly page views",
      performance: "98 Lighthouse score",
    },
    keyFeatures: [
      "Syntax-highlighted code blocks with copy functionality",
      "Newsletter subscription system with Resend integration",
      "Article search and tagging",
      "Reading time estimation",
      "SEO optimization with schema.org markup",
      "Responsive image handling with blur-up placeholders",
    ],
    implementation: [
      {
        title: "Content Management System",
        description:
          "Built a custom CMS workflow allowing articles to be written and published seamlessly. Implemented incremental static regeneration for fast content updates with automatic schema.org markup generation.",
        technologies: ["TipTap React", "Next.js ISR", "Markdown"],
        challenges: [
          "Implemented code snippet copying functionality",
          "Created responsive image handling with blur-up placeholders",
          "Automated SEO best practices implementation",
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
          "First-page rankings for several technical keywords",
        ],
      },
      {
        title: "Newsletter System",
        description:
          "Integrated Resend with React Email templates for automated newsletter delivery with 65% open rate.",
        technologies: ["Resend", "React Email", "Email Automation"],
        achievements: [
          "65% open rate for technical content",
          "Automated subscriber management",
          "Rich email templates with React",
        ],
      },
    ],
    architecture:
      "Jamstack architecture with:\n" +
      "- Next.js 15 (App Router) for frontend\n" +
      "- PostgreSQL for article storage\n" +
      "- Prisma as ORM\n" +
      "- Vercel Edge Functions for dynamic features\n" +
      "- Resend for email delivery\n" +
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
    lessonsLearned: [
      "Importance of performance optimization in content platforms",
      "Value of automated SEO implementation",
      "Best practices for newsletter engagement",
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
      "Add comment system with moderation",
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
          "Developed responsive UI that works on low-end devices",
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
    githubUrl: "https://github.com/TanyaMushonga/ttl-web-client",
    techStack: [
      "Next.js 13",
      "TypeScript",
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
      adoption: "Growing user base with positive feedback",
    },
    keyFeatures: [
      "Customizable reporting templates",
      "Role-based access control (RBAC)",
      "Client progress dashboards",
      "Low-bandwidth optimization",
      "PDF report generation",
      "Task management with drag-and-drop",
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
          "Created dynamic report generator with 15+ template types integrated with ChatGPT for deep analytics. Integrated Chart.js for data visualization and PDF rendering for client deliverables.",
        technologies: ["Chart.js", "PDFKit", "Template Engine", "ChatGPT"],
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
      "Add collaborative whiteboarding features",
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
  {
    id: 6,
    title: "AWS Terraform Backend CI/CD",
    description:
      "Production-ready Terraform infrastructure for deploying containerized applications to AWS ECS Fargate, automated with CodePipeline and CloudWatch monitoring.",
    image: "/project-placeholder.svg",
    category: "Infrastructure",
    liveUrl: "https://github.com/TanyaMushonga/aws-terraform-backend-cicd",
    githubUrl: "https://github.com/TanyaMushonga/aws-terraform-backend-cicd",
    techStack: [
      "Terraform",
      "AWS ECS",
      "AWS CodePipeline",
      "AWS CodeBuild",
      "CloudWatch",
      "Docker",
    ],
    status: "Infrastructure as Code",
    teamSize: "Solo Project",
    developmentPeriod: "2025",
    metrics: {
      deployments: "Automated CI/CD pipeline",
      monitoring: "CloudWatch alarms configured",
      availability: "Designed for zero-downtime deploys",
    },
    keyFeatures: [
      "AWS ECS Fargate container orchestration",
      "Automated CodePipeline build and deploy flow",
      "Infrastructure modules for reuse",
      "Monitoring and alerting with CloudWatch",
    ],
    implementation: [
      {
        title: "Terraform Infrastructure",
        description:
          "Built reusable Terraform modules for networking, ECS, and CI/CD resources on AWS.",
        technologies: ["Terraform", "AWS", "Docker"],
        achievements: [
          "Created secure ECS Fargate deployment architecture",
          "Standardized IaC with reusable modules",
        ],
      },
      {
        title: "CI/CD Automation",
        description:
          "Configured AWS CodePipeline and CodeBuild to build Docker images and deploy containerized services automatically.",
        technologies: ["AWS CodePipeline", "CodeBuild", "CloudWatch"],
      },
    ],
    architecture:
      "AWS infrastructure with Terraform-managed VPC, ECS Fargate services, CodePipeline, CodeBuild, and CloudWatch. Designed to support containerized applications with automated deployment and monitoring.",
    challenges: [
      {
        description:
          "Coordinating infrastructure modules across multiple environments",
        solution:
          "Used Terraform workspaces and modular variables to manage staging and production configurations",
        impact: "Enabled safer deployments and easier environment management",
      },
    ],
    lessonsLearned: [
      "The value of versioned infrastructure modules",
      "How to automate AWS deployments with CodePipeline",
      "Best practices for multi-environment Terraform configurations",
    ],
    tags: [
      {
        name: "terraform",
        color: "blue-text-gradient",
        icon: "cloud",
      },
      {
        name: "aws",
        color: "cyan-text-gradient",
        icon: "cloud",
      },
      {
        name: "cicd",
        color: "purple-text-gradient",
        icon: "rocket",
      },
    ],
  },
  {
    id: 7,
    title: "Blog Admin Dashboard",
    description:
      "A modern admin dashboard for managing blog content, newsletter subscribers, and editorial workflows with rich text editing and automation.",
    image: "/project-placeholder.svg",
    category: "Web Application",
    liveUrl: "https://github.com/TanyaMushonga/tanyas-blog-admin",
    githubUrl: "https://github.com/TanyaMushonga/tanyas-blog-admin",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tiptap",
      "Trigger.dev",
      "Resend",
      "Prisma ORM",
      "PostgreSQL",
    ],
    status: "Open Source",
    teamSize: "Solo Project",
    developmentPeriod: "2025",
    metrics: {
      automation: "Newsletter workflow automated",
      editor: "Rich-content blog editor",
      security: "Secure authenticated admin access",
    },
    keyFeatures: [
      "Rich text content editor with Tiptap",
      "Newsletter subscriber management",
      "Secure Lucia authentication",
      "Automated emails via Trigger.dev and Resend",
      "Draft and publish workflow",
    ],
    implementation: [
      {
        title: "Admin Content Workflow",
        description:
          "Built an editor-first admin experience for publishing and managing technical blog content with secure authentication.",
        technologies: ["Next.js", "Tiptap", "Prisma", "Lucia Auth"],
        achievements: [
          "Delivered a polished editorial interface",
          "Integrated newsletter automation into admin workflows",
          "Implemented secure session management",
        ],
      },
      {
        title: "Subscriber Automation",
        description:
          "Configured Trigger.dev and Resend to send emails and manage blog subscribers from the admin dashboard with advanced email templates.",
        technologies: ["Trigger.dev", "Resend", "React Email"],
      },
    ],
    architecture:
      "Admin dashboard with Next.js frontend, Prisma ORM, secure Lucia authentication, and email automation integrations for managing blog posts and subscribers.",
    challenges: [
      {
        description: "Balancing editorial workflows with security",
        solution:
          "Implemented role-based access and secure session management for admin users",
        impact: "Protected content while preserving publishing speed",
      },
    ],
    lessonsLearned: [
      "How to build admin experiences that feel fast and secure",
      "The value of automating newsletter workflows",
      "Best practices for rich text editing in Next.js",
    ],
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
        icon: "react",
      },
      {
        name: "tiptap",
        color: "pink-text-gradient",
        icon: "pencil",
      },
      {
        name: "trigger.dev",
        color: "cyan-text-gradient",
        icon: "sparkles",
      },
    ],
  },
  {
    id: 8,
    title: "Workstation Orchestrator",
    description:
      "A cross-platform bootstrapper that automates workstation setup for developers, DevOps engineers, and security professionals on Linux, macOS, and Windows.",
    image: "/project-placeholder.svg",
    category: "Infrastructure",
    liveUrl: "https://github.com/TanyaMushonga/workstation-orchestrator",
    githubUrl: "https://github.com/TanyaMushonga/workstation-orchestrator",
    techStack: ["Shell scripting", "Bash", "POSIX", "Git", "Cross-platform"],
    status: "Open Source",
    teamSize: "Solo Project",
    developmentPeriod: "2024-2025",
    metrics: {
      platforms: "Linux, macOS, Windows",
      automation: "Developer environment bootstrapper",
      tools: "Security and productivity tooling",
    },
    keyFeatures: [
      "Automated workstation provisioning",
      "Cross-platform compatibility",
      "Developer tooling orchestration",
      "Secure bootstrap workflows",
      "Modular installation scripts",
    ],
    implementation: [
      {
        title: "Platform Detection",
        description:
          "Built shell scripts to detect the host OS and install the right tooling for each environment with intelligent fallbacks.",
        technologies: ["Shell", "Bash", "POSIX"],
      },
      {
        title: "Tooling Automation",
        description:
          "Automated the installation of developer and security tools for consistent workstation setup across platforms.",
        technologies: ["Shell", "Git"],
      },
    ],
    architecture:
      "Shell-based orchestration with modular install scripts, platform detection, and environment setup routines to quickly bootstrap developer workstations.",
    challenges: [
      {
        description: "Managing differences across operating systems",
        solution:
          "Used conditionals and modular scripts to support Linux, macOS, and Windows reliably",
        impact: "Reduced onboarding time for new development environments",
      },
    ],
    lessonsLearned: [
      "The value of repeatable developer environments",
      "How to write maintainable cross-platform shell automation",
      "Best practices for handling OS-specific package managers",
    ],
    tags: [
      {
        name: "automation",
        color: "green-text-gradient",
        icon: "terminal",
      },
      {
        name: "shell",
        color: "orange-text-gradient",
        icon: "code",
      },
      {
        name: "cross-platform",
        color: "purple-text-gradient",
        icon: "device-mobile",
      },
    ],
  },
  {
    id: 9,
    title: "SkyMarshal API",
    description:
      "A Django REST API for intelligent aerial traffic monitoring, featuring vehicle detection, ALPR, drone fleet control, and real-time compliance workflows.",
    image: "/project-placeholder.svg",
    category: "API",
    liveUrl: "https://github.com/TanyaMushonga/skymarshal-api",
    githubUrl: "https://github.com/TanyaMushonga/skymarshal-api",
    techStack: [
      "Django REST Framework",
      "Python",
      "YOLOv8",
      "WebSockets",
      "PostGIS",
      "Kafka",
      "PostgreSQL",
    ],
    status: "Open Source",
    teamSize: "Solo Project",
    developmentPeriod: "2024-2025",
    metrics: {
      analytics: "Real-time vehicle and speed monitoring",
      drones: "Fleet management and telemetry",
      security: "Role-based API authentication",
    },
    keyFeatures: [
      "Vehicle detection and tracking for aerial feeds",
      "Automatic License Plate Recognition (ALPR)",
      "Real-time drone fleet telemetry",
      "Secure API authentication and officer roles",
      "High-throughput event processing",
    ],
    implementation: [
      {
        title: "Traffic Monitoring API",
        description:
          "Created REST endpoints for vehicle tracking, speed estimation, and enforcement workflows with comprehensive logging.",
        technologies: ["Django REST Framework", "Python"],
        achievements: [
          "Built API key authentication for ESP32-CAM devices",
          "Created endpoints for incident and violation processing",
          "Implemented comprehensive request logging and analytics",
        ],
      },
      {
        title: "Computer Vision Integration",
        description:
          "Integrated YOLOv8 and Kafka for high-throughput vehicle detection and event streaming with real-time processing.",
        technologies: ["YOLOv8", "Kafka", "WebSockets", "OpenCV"],
        achievements: [
          "Real-time vehicle detection and classification",
          "Event streaming for downstream processing",
          "Scalable detection pipeline",
        ],
      },
    ],
    architecture:
      "Django REST API connected to YOLOv8 vision pipelines, Kafka event streams, and PostGIS-backed telemetry tracking for aerial traffic operations.",
    challenges: [
      {
        description:
          "Processing high-volume vision events while keeping APIs responsive",
        solution:
          "Separated detection pipelines from REST request handling and used event queues",
        impact: "Maintained stable API performance under load",
      },
    ],
    lessonsLearned: [
      "The power of separating vision pipelines from API traffic",
      "How to secure edge device access with API keys",
      "Best practices for event-driven architectures",
    ],
    futureImprovements: [
      "Add vehicle re-identification across frames",
      "Implement traffic flow analytics",
      "Add alert notification system",
    ],
    tags: [
      {
        name: "django-rest-framework",
        color: "green-text-gradient",
        icon: "server",
      },
      {
        name: "yolo",
        color: "orange-text-gradient",
        icon: "cpu",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
        icon: "database",
      },
    ],
  },
  
  
];
