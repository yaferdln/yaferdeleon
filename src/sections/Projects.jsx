import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS_DATA } from "../constants/projectsData";
import LazyImage from "../components/LazyImage";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {PROJECTS_DATA.map((project, index) => (
        <a
          key={index}
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-md hover:bg-slate-800/40 transition-colors duration-300 hover:shadow-md"
        >
          <div className="p-6 flex gap-4">
            {/* Image */}
            <div className="hidden sm:block w-24 sm:w-32 shrink-0">
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-20 sm:h-24 object-cover rounded-md border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow space-y-2 sm:space-y-4">
              <h3 className="text-md md:text-lg font-semibold tracking-normal flex items-center gap-2 text-slate-300 group-hover:text-teal-400">
                {project.title}
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 transform group-hover:rotate-[45deg]"
                />
              </h3>
              <p className="text-sm md:text-md text-slate-400">
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
      <div className="mt-8 text-left">
        <a
          href="/archive"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 text-xs md:text-sm hover:underline hover:text-teal-400 transition-colors duration-200"
        >
          View Full Project Archive
        </a>
      </div>
    </div>
  );
};

export default Projects;
