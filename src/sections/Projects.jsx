import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/projectsData";

const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {PROJECTS_DATA.map((project, index) => (
          <a
            key={index}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-md hover:bg-slate-800/40 hover:text-teal-400 transition-colors duration-300 hover:shadow-md"
          >
            <div className="p-6 flex gap-4">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-1/4 sm:w-1/5 h-auto rounded-md object-cover border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow space-y-2 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold tracking-normal flex items-center gap-2 text-slate-300">
                  {project.title}
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 transform group-hover:rotate-[45deg]"
                  />
                </h3>
                <p className="text-sm md:text-base text-slate-400">
                  {project.description}
                </p>
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-slate-700/50 text-xs text-slate-400 rounded-full px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
