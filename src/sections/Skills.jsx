import { SKILLS_DATA } from "../constants/skillsData";
import { memo, useMemo } from "react";

const Skills = () => {
  const skills = useMemo(() => SKILLS_DATA, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
      <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
        <h1 className="text-sm sm:text-base pl-4 font-semibold text-teal-300 uppercase tracking-wider">
          Skills
        </h1>
      </div>

      {skills.map((skill, index) => (
        <div
          key={index}
          className="group border-1 border-gray-400/10 hover:border-gray-400/20 bg-slate-900/10 p-6 transition-colors duration-300"
        >
          <h3 className="text-base md:text-lg font-semibold mb-6 text-left tracking-wide text-slate-300">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-4 justify-start">
            {skill.items.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-start bg-slate-900 px-3 py-1 text-sm md:text-base text-slate-400 hover:bg-teal-400 hover:text-slate-900 transition-colors duration-300"
              >
                {item.icon && (
                  <item.icon className="mr-1 text-xl md:text-2xl" />
                )}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Skills);
