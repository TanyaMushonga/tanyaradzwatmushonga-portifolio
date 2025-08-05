import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const skills = [
  {
    category: "Frontend Development",
    icon: CodeBracketIcon,
    items: [
      {
        name: "React.js",
        level: 95,
        experience: "2+ years",
        icon: "⚛️",
        related: ["Next.js", "Gatsby", "React Router", "Context API"],
      },
      {
        name: "Next.js",
        level: 90,
        experience: "1+ years",
        icon: "▲",
        related: ["SSR", "SSG", "API Routes", "App Router"],
      },
      {
        name: "React Native",
        level: 85,
        experience: "2+ years",
        icon: "",
        related: ["Expo", "Native Modules", "Navigation", "Redux"],
      },
      {
        name: "TypeScript",
        level: 88,
        experience: "2+ years",
        icon: "🔷",
        related: ["Type Safety", "Interfaces", "Generics", "Decorators"],
      },
    ],
  },
  {
    category: "Backend Development",
    icon: WrenchScrewdriverIcon,
    items: [
      {
        name: "Node.js",
        level: 90,
        experience: "1+ years",
        icon: "🟢",
        related: ["Express.js"],
      },
      {
        name: "Python",
        level: 85,
        experience: "1+ years",
        icon: "🐍",
        related: ["Django"],
      },
    ],
  },
  // {
  //   category: "Cloud & DevOps",
  //   icon: CloudIcon,
  //   items: [
  //     {
  //       name: "AWS",
  //       level: 88,
  //       experience: "2+ years",
  //       icon: "☁️",
  //       related: ["EC2", "S3", "Lambda", "RDS", "CloudFront"],
  //     },
  //     {
  //       name: "Docker",
  //       level: 85,
  //       experience: "2+ years",
  //       icon: "🐳",
  //       related: ["Containerization", "Multi-stage builds", "Compose"],
  //     },

  //     {
  //       name: "GitHub Actions",
  //       level: 82,
  //       experience: "2+ years",
  //       icon: "🔄",
  //       related: ["CI/CD", "Workflows", "Automated Testing"],
  //     },
  //   ],
  // },
];
