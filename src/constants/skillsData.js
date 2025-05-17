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
    category: "Experienced With",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "jQuery", icon: SiJquery },
      { name: "AJAX" }, // No dedicated icon for AJAX, leave without icon or use FaJs again
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: FaGitAlt },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
];
