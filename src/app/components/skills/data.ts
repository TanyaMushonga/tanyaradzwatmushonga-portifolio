import { Server, Layers } from "lucide-react";

export const skills = [
  {
    category: "Primary Tech Stack",
    icon: Layers,
    items: [
      {
        name: "React.js",
        level: 98,
        experience: "3+ years",
        icon: "⚛️",
        related: ["Hooks", "Context API", "Redux", "Performance"],
      },
      {
        name: "Next.js",
        level: 95,
        experience: "2+ years",
        icon: "▲",
        related: ["App Router", "SSR/SSG", "Server Actions", "Vercel"],
      },
      {
        name: "React Native",
        level: 92,
        experience: "2+ years",
        icon: "📱",
        related: ["Expo", "Navigation", "Native Modules", "Animations"],
      },
      {
        name: "TypeScript",
        level: 90,
        experience: "2+ years",
        icon: "🔷",
        related: ["Generics", "Strict Mode", "Interfaces", "Zod"],
      },
      {
        name: "Tailwind CSS",
        level: 98,
        experience: "3+ years",
        icon: "🎨",
        related: ["Design Systems", "Dark Mode", "Animations", "Responsive"],
      },
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: Server,
    items: [
      {
        name: "Node.js",
        level: 85,
        experience: "2+ years",
        icon: "🟢",
        related: ["Express", "API Design", "Middleware"],
      },
      {
        name: "Django",
        level: 80,
        experience: "2+ years",
        icon: "🐍",
        related: ["DRF", "ORM", "Python"],
      },
      {
        name: "Docker",
        level: 82,
        experience: "2+ years",
        icon: "🐳",
        related: ["Compose", "Containerization", "CI/CD"],
      },
      {
        name: "AWS",
        level: 75,
        experience: "1+ years",
        icon: "☁️",
        related: ["S3", "EC2", "Lambda", "Cloud Architecture"],
      },
    ],
  },
];
