import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/projectsData";
import LazyImage from "../components/LazyImage";
import { memo, useMemo } from "react";

const Projects = () => {
  const projects = useMemo(() => PROJECTS_DATA, []);

  return (
    <>
      <div className="md:hidden sticky top-0 z-30 w-full bg-slate-900/60 backdrop-blur-md">
        <h1 className="text-sm sm:text-base py-3 px-6 font-bold text-teal-300 uppercase tracking-wider mb-6">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-2 px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-gray-700 rounded-md p-6 transition-colors duration-300"
          >
            <div className="p-0 sm:flex gap-2">
              <div className="w-full mb-4 sm:mb-0 sm:w-32 shrink-0">
                {project.image && (
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-30 sm:h-24 object-cover rounded-sm border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
                  />
                )}
              </div>
              <div className="flex flex-col flex-grow space-y-2">
                <h3 className="text-base md:text-lg font-semibold tracking-normal flex items-center gap-2 text-slate-300 group-hover:text-teal-400">
                  {project.title}
                  <FiArrowUpRight
                    size={16}
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 transform group-hover:rotate-[45deg]"
                  />
                </h3>
                <p className="text-sm md:text-base text-slate-400">
                  {project.description}
                </p>
                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block rounded-full bg-slate-800/50 text-teal-300 px-3 py-1 text-xs md:text-sm font-mono"
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
          className="inline-flex items-center gap-1 group text-teal-300 p-6 text-sm md:text-base hover:underline hover:underline-offset-4 hover:text-teal-400 transition-colors duration-200"
        >
          View Full Project Archive
          <FiArrowUpRight
            size={16}
            className="transition-transform duration-300 transform group-hover:rotate-45"
          />
        </a>
      </div>
    </>
  );
};

export default memo(Projects);
