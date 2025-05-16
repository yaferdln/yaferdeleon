import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaTools,
  FaUserShield,
  FaLaptopCode,
  FaUsers,
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
  {
    category: "Experienced Skills",
    items: [
      { name: "IT Support Assistant - Airport", icon: FaUserShield },
      { name: "PC Building (Freelance)", icon: FaTools },
      { name: "Hardware Troubleshooting", icon: FaLaptopCode },
      { name: "Network Configuration", icon: FaLaptopCode },
      { name: "Software Installation & Maintenance", icon: FaLaptopCode },
      // add more specific experienced skills here
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", icon: FaUsers },
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Teamwork" },
      { name: "Adaptability" },
      { name: "Attention to Detail" },
      // add more soft skills here
    ],
  },
];
