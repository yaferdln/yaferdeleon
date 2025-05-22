import { SKILLS_DATA } from "../constants/skillsData";

const Skills = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sticky Section Title */}
        <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
          <h1 className="text-base sm:text-lg pl-4 font-semibold text-teal-300 uppercase tracking-wider">
            Skills
          </h1>
        </div>
        {SKILLS_DATA.map((skill, index) => (
          <div
            key={index}
            className="group rounded-md border-1 border-gray-400/20 hover:border-gray-400/40 bg-slate-800/20 hover:bg-slate-800/40 p-6 transition-colors duration-300"
          >
            <h3 className="text-base md:text-lg font-semibold mb-6 text-center tracking-wide text-slate-300">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center bg-slate-800/40 rounded-full px-4 py-2 mb-3 text-xs md:text-sm text-slate-300 transition-colors duration-300 hover:bg-teal-400 hover:text-slate-900 cursor-default select-none"
                >
                  {item.icon && <item.icon className="mr-2 text-lg" />}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
