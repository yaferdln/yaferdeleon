import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/projectsData";
import LazyImage from "../components/LazyImage";

const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {/* Sticky Section Title */}
        <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
          <h1 className="text-base sm:text-lg pl-4 font-semibold text-teal-300 uppercase tracking-wider">
            Projects
          </h1>
        </div>
        {PROJECTS_DATA.map((project, index) => (
          <a
            key={index}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-md border-1 border-gray-400/20 hover:border-gray-400/40 bg-slate-800/20 hover:bg-slate-800/40 transition-colors duration-300 hover:shadow-md"
          >
            <div className="p-6 sm:flex gap-4">
              {/* Image */}
              <div className="w-full mb-4 sm:mb-0 sm:w-32 shrink-0">
                {project.image && (
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-30 sm:h-24 object-cover rounded border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow space-y-2 sm:space-y-4">
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
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-slate-800 text-teal-300 rounded-full px-3 py-1 text-xs md:text-sm font-mono"
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
          className="inline-flex items-center gap-1 group text-teal-300 text-base hover:underline hover:text-teal-400 transition-colors duration-200"
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

export default Projects;
