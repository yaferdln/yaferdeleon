import { SKILLS_DATA } from "../constants/skillsData";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {SKILLS_DATA.map((skill, index) => (
        <div key={index} className="bg-slate-800/40 rounded px-8 py-4">
          <h3 className="text-md md:text-lg font-semibold mb-6 text-center tracking-wide text-slate-300">
            {skill.category}
          </h3>

          <div className="flex flex-wrap gap-3 justify-center">
            {skill.items.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center bg-slate-800/40 rounded-full px-4 py-2 mb-3 text-sm md:text-md font-medium text-slate-300 transition-colors duration-300 hover:bg-teal-400 hover:text-slate-900 cursor-default select-none"
              >
                {item.icon && <item.icon className="mr-2 text-lg" />}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
