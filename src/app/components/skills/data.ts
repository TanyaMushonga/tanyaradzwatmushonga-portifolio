import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiDocker,
  SiAmazon,
} from "react-icons/si";
import { Server, Layers } from "lucide-react";

export const skills: Array<{
  category: string;
  icon: IconType;
  items: Array<{
    name: string;
    level: number;
    experience: string;
    icon: IconType;
    related: string[];
  }>;
}> = [
  {
    category: "Primary Tech Stack",
    icon: Layers,
    items: [
      {
        name: "React.js",
        level: 98,
        experience: "3+ years",
        icon: SiReact,
        related: ["Hooks", "Context API", "Redux", "Performance"],
      },
      {
        name: "Next.js",
        level: 95,
        experience: "2+ years",
        icon: SiNextdotjs,
        related: ["App Router", "SSR/SSG", "Server Actions", "Vercel"],
      },
      {
        name: "React Native",
        level: 92,
        experience: "2+ years",
        icon: SiReact,
        related: ["Expo", "Navigation", "Native Modules", "Animations"],
      },
      {
        name: "TypeScript",
        level: 90,
        experience: "2+ years",
        icon: SiTypescript,
        related: ["Generics", "Strict Mode", "Interfaces", "Zod"],
      },
      {
        name: "Tailwind CSS",
        level: 98,
        experience: "3+ years",
        icon: SiTailwindcss,
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
        icon: SiNodedotjs,
        related: ["Express", "API Design", "Middleware"],
      },
      {
        name: "Django",
        level: 80,
        experience: "2+ years",
        icon: SiDjango,
        related: ["DRF", "ORM", "Python"],
      },
      {
        name: "Docker",
        level: 82,
        experience: "2+ years",
        icon: SiDocker,
        related: ["Compose", "Containerization", "CI/CD"],
      },
      {
        name: "AWS",
        level: 75,
        experience: "1+ years",
        icon: SiAmazon,
        related: ["S3", "EC2", "Lambda", "Cloud Architecture"],
      },
    ],
  },
];
