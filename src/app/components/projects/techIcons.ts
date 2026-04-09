import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import {
  SiAmazon,
  SiChartdotjs,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpo,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGooglemaps,
} from "react-icons/si";

const icons: Array<[RegExp, IconType]> = [
  [/next/i, SiNextdotjs],
  [/react native|react/i, SiReact],
  [/django/i, SiDjango],
  [/postgres/i, SiPostgresql],
  [/prisma/i, SiPrisma],
  [/firebase/i, SiFirebase],
  [/redux/i, SiReact],
  [/google maps|googlemap|map/i, SiGooglemaps],
  [/chart\.js|chartjs|chart/i, SiChartdotjs],
  [/typescript|ts/i, SiTypescript],
  [/javascript|js/i, SiJavascript],
  [/python/i, SiPython],
  [/tailwind/i, SiTailwindcss],
  [/vercel/i, SiVercel],
  [/aws|amazon web services|amazonaws/i, SiAmazon],
  [/docker/i, SiDocker],
  [/kubernetes|k8s/i, SiKubernetes],
  [/graphql/i, SiGraphql],
  [/node|node\.js|nodejs/i, SiNodedotjs],
  [/mongo|mongodb/i, SiMongodb],
  [/linux/i, SiLinux],
  [/git/i, SiGit],
  [/expo/i, SiExpo],
  [/html/i, SiHtml5],
  [/css/i, SiCss3],
];

export const getTechIcon = (tech: string): IconType => {
  const normalized = tech.toLowerCase();

  for (const [pattern, Icon] of icons) {
    if (pattern.test(normalized)) {
      return Icon;
    }
  }

  return FaCode;
};
