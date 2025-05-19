import { Link } from "react-router-dom";
import { ARCHIVED_PROJECTS_DATA } from "../constants/archivedProjectsData";

const Archive = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 px-6 py-12">
      {/* Back to Home */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-teal-300 hover:underline hover:text-teal-400 transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-slate-200 mb-8">My Projects</h1>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700 text-slate-300">
              <th className="py-2">Project</th>
              <th className="py-2">Year</th>
              <th className="py-2">Built With</th>
              <th className="py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {ARCHIVED_PROJECTS_DATA.map((project) => (
              <tr key={project.id} className="border-b border-slate-700">
                <td className="py-3 text-slate-300">{project.title}</td>
                <td className="py-3">{project.year}</td>
                <td className="py-3">
                  {project.techStack.map((tech, i) => (
                    <a
                      key={i}
                      href={project.techLinks[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-slate-800 text-teal-300 rounded-full px-3 py-1 text-xs font-mono mr-2"
                    >
                      {tech}
                    </a>
                  ))}
                </td>
                <td className="py-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:underline"
                  >
                    {new URL(project.demoLink).hostname.replace("www.", "")}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden space-y-6">
        {ARCHIVED_PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="border border-slate-800 rounded-lg p-4 bg-slate-800/50 hover:bg-slate-800 transition"
            onClick={() => window.open(project.demoLink, "_blank")}
          >
            <div className="mb-2">
              <span className="block text-xs text-slate-500 uppercase">
                Project
              </span>
              <p className="text-teal-300 font-semibold">{project.title}</p>
            </div>
            <div>
              <span className="block text-xs text-slate-500 uppercase">
                Year
              </span>
              <p>{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
