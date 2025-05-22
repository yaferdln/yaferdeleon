import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiJquery,
} from "react-icons/si";
export const SKILLS_DATA = [
  {
    id: 1,
    category: "Experienced With",
    items: [
      { id: 1, name: "HTML", icon: FaHtml5 },
      { id: 2, name: "CSS", icon: FaCss3Alt },
      { id: 3, name: "JavaScript", icon: FaJs },
      { id: 4, name: "jQuery", icon: SiJquery },
      { id: 5, name: "AJAX" }, // no icon
      { id: 6, name: "React", icon: FaReact },
      { id: 7, name: "Tailwind CSS", icon: SiTailwindcss },
      { id: 8, name: "PHP", icon: FaPhp },
      { id: 9, name: "MySQL", icon: SiMysql },
      { id: 10, name: "Git", icon: FaGitAlt },
    ],
  },
  {
    id: 2,
    category: "Currently Learning",
    items: [
      { id: 1, name: "Node.js", icon: FaNodeJs },
      { id: 2, name: "Express.js", icon: SiExpress },
      { id: 3, name: "MongoDB", icon: SiMongodb },
      { id: 4, name: "TypeScript", icon: SiTypescript },
      { id: 5, name: "Next.js", icon: SiNextdotjs },
    ],
  },
];
