import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/projectsData";
import LazyImage from "../components/LazyImage";
import { memo, useMemo } from "react";

const Projects = () => {
  const projects = useMemo(() => PROJECTS_DATA, []);

  return (
    <div className="grid grid-cols-1 gap-2 px-4">
      <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
        <h1 className="text-sm sm:text-base pl-4 font-semibold text-teal-300 uppercase tracking-wider">
          Projects
        </h1>
      </div>

      {projects.map((project, index) => (
        <a
          key={index}
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border-1 border-gray-400/10 hover:border-gray-400/20 bg-slate-900/10 p-6 transition-colors duration-300"
        >
          <div className="p-0 sm:flex gap-2">
            <div className="w-full mb-4 sm:mb-0 sm:w-32 shrink-0">
              {project.image && (
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-30 sm:h-24 object-cover border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
                />
              )}
            </div>
            <div className="flex flex-col flex-grow space-y-2">
              <h3 className="text-sm md:text-base font-semibold tracking-normal flex items-center gap-2 text-slate-300 group-hover:text-teal-400">
                {project.title}
                <FiArrowUpRight
                  size={16}
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 transform group-hover:rotate-[45deg]"
                />
              </h3>
              <p className="text-xs md:text-sm text-slate-400">
                {project.description}
              </p>
              {project.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-slate-900 text-teal-300 px-3 py-1 text-xs md:text-sm font-mono"
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
      <a
        href="/archive"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 group text-teal-300 text-xs md:text-sm hover:underline hover:underline-offset-4 hover:text-teal-400 transition-colors duration-200"
      >
        View Full Project Archive
        <FiArrowUpRight
          size={16}
          className="transition-transform duration-300 transform group-hover:rotate-45"
        />
      </a>
    </div>
  );
};

export default memo(Projects);
