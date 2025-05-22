import { CAREERS_DATA } from "../constants/careersData";
import LazyImage from "../components/LazyImage";
import { FiArrowUpRight } from "react-icons/fi";

const Careers = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        {/* Sticky Section Title */}
        <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
          <h1 className="text-base sm:text-lg pl-4 font-semibold text-teal-300 uppercase tracking-wider">
            Careers
          </h1>
        </div>
        {CAREERS_DATA.map((career) => (
          <div
            key={career.id}
            className="group rounded-md border-1 border-gray-400/20 hover:border-gray-400/40 bg-slate-800/20  hover:bg-slate-800/40 p-6 transition-colors duration-300"
          >
            <div className="flex-col sm:flex-row flex gap-1 sm:gap-3">
              {/* Image */}
              {career.image && (
                <div className="w-24 sm:w-32 shrink-0">
                  <LazyImage
                    src={career.image}
                    alt={`${career.company} logo`}
                    className="w-full h-20 sm:h-24 object-cover rounded-md border-2 group-hover:border-teal-400 transition-colors duration-300"
                  />
                </div>
              )}

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-slate-200">
                  {career.position}
                </h3>
                <p className="text-sm md:text-base text-teal-300 font-medium mb-4">
                  {career.company}
                </p>

                <p className="text-sm md:text-base text-slate-400 mb-3">
                  {career.description}
                </p>

                {/* Date and Year */}
                <div className="text-sm text-slate-300 mb-4">
                  <span className="text-sm md:text-base font-mono">
                    {career.date}
                  </span>
                  {career.date && career.year && <span> &middot; </span>}
                  <span className="text-sm md:text-base font-mono">
                    {career.year}
                  </span>
                </div>

                {/* Tech Stack */}
                {career.techStack && career.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {career.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block bg-slate-800 text-teal-300 rounded-full px-3 py-1 text-xs md:text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 group text-teal-300 text-base hover:underline hover:text-teal-400 transition-colors duration-200"
        >
          View Full Resume
          <FiArrowUpRight
            size={16}
            className="transition-transform duration-300 transform group-hover:rotate-45"
          />
        </a>
      </div>
    </>
  );
};

export default Careers;
