import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/projectsData";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {PROJECTS_DATA.map((project, index) => (
        <a
          key={index}
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex flex-col rounded-md hover:bg-slate-800/40 hover:text-teal-400 transition-colors duration-300"
        >
          <div className="p-6 flex gap-4">
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-1/5 h-auto rounded-md object-cover border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
            />

            {/* Content */}
            <div className="flex flex-col flex-grow space-y-4">
              <h3 className="text-xl font-semibold tracking-normal flex items-center gap-2">
                {project.title}
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 transform group-hover:rotate-[45deg]"
                />
              </h3>
              <p className="text-sm md:text-base mb-4 text-slate-400">
                {project.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
