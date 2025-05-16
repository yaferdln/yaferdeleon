import { SKILLS_DATA } from "../constants/skillsData";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SKILLS_DATA.map((skill, index) => (
        <div key={index}>
          <h3 className="text-2xl font-semibold mb-4 text-left tracking-normal">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2 justify-start">
            {skill.items.map((item, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center bg-slate-800/40 rounded-full px-3 py-1 mb-2 transition-colors duration-300 hover:bg-slate-800 hover:text-teal-300`}
              >
                {item.icon && <item.icon className="mr-2 text-xl" />}
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
