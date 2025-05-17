import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

export const SKILLS_DATA = [
  {
    category: "I Have Experience With",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "React.js", icon: FaReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    category: "I'm Currently Learning",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React.js", icon: FaReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    ],
  },
];
