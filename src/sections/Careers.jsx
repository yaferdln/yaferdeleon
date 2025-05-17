import { CAREERS_DATA } from "../constants/careersData";
import LazyImage from "../components/LazyImage";
const Careers = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {CAREERS_DATA.map((career) => (
        <div
          key={career.id}
          className="group rounded-md hover:bg-slate-800/40 p-6 transition-colors duration-300"
        >
          <div className="flex items-center gap-6">
            {/* Image */}
            {career.image && (
              <div className="hidden sm:block w-24 sm:w-32 shrink-0">
                <LazyImage
                  src={career.image}
                  alt={`${career.company} logo`}
                  className="w-full h-20 sm:h-24 object-cover rounded-md border border-slate-700 group-hover:border-teal-400 transition-colors duration-300"
                />
              </div>
            )}

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-md md:text-lg font-semibold text-slate-200">
                {career.position}
              </h3>
              <p className="text-sm md:text-md text-teal-300 font-medium mb-4">
                {career.company}
              </p>
              <p className="text-sm md:text-md text-slate-400 mb-3">
                {career.description}
              </p>

              {/* Date and Year */}
              <div className="text-xs text-slate-400 mb-2">
                <span>{career.date}</span>
                {career.date && career.year && <span> &middot; </span>}
                <span>{career.year}</span>
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
      <div className="mt-8 text-left">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 text-xs md:text-sm hover:underline hover:text-teal-400 transition-colors duration-200"
        >
          View Full Resume
        </a>
      </div>
    </div>
  );
};

export default Careers;
