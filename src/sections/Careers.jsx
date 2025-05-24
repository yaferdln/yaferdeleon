import { CAREERS_DATA } from "../constants/careersData";
import LazyImage from "../components/LazyImage";
import { FiArrowUpRight } from "react-icons/fi";
import { memo, useMemo } from "react";

const Careers = () => {
  const careers = useMemo(() => CAREERS_DATA, []);

  return (
    <div className="grid grid-cols-1 gap-2 px-4">
      <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
        <h1 className="text-sm sm:text-base pl-4 font-semibold text-teal-300 uppercase tracking-wider">
          Careers
        </h1>
      </div>

      {careers.map((career) => (
        <div
          key={career.id}
          className="group border-1 border-gray-400/10 hover:border-gray-400/20 bg-slate-900/10 p-6 transition-colors duration-300"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {career.image && (
                <div className="w-12 h-12 shrink-0">
                  <LazyImage
                    src={career.image}
                    alt={`${career.company} logo`}
                    className="w-full h-full object-cover border-2 group-hover:border-teal-400 transition-colors duration-300"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-slate-200">
                  {career.position}
                </h3>
                <p className="text-sm md:text-base text-teal-300 font-medium">
                  {career.company}
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-400">
              {career.description}
            </p>

            <div className="text-sm md:text-base text-slate-300">
              <span className="text-sm md:text-base font-mono">
                {career.date}
              </span>
              {career.date && career.year && <span> &middot; </span>}
              <span className="text-sm md:text-base font-mono">
                {career.year}
              </span>
            </div>

            {career.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {career.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-slate-900 text-teal-300 px-3 py-1 text-xs md:text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm md:text-base group text-teal-300 hover:underline hover:underline-offset-4 hover:text-teal-400 transition-colors duration-200"
      >
        View Full Resume
        <FiArrowUpRight
          size={16}
          className="transition-transform duration-300 transform group-hover:rotate-45"
        />
      </a>
    </div>
  );
};

export default memo(Careers);
