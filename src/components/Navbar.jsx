import { navbarLinks } from "../constants/navbarLinks";
import { memo } from "react";
const Navbar = ({ activeSection }) => {
  return (
    <nav className="relative">
      <ul className="flex flex-col space-y-4">
        {navbarLinks.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <li
              key={link.title}
              className={`relative flex items-center py-1 ${
                isActive ? "sticky top-0 z-10" : ""
              }`}
            >
              <a
                href={`#${link.href}`}
                className={`relative inline-flex items-center gap-2 text-sm sm:text-base lg:text-base uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-teal-300"
                    : "text-slate-400 hover:text-teal-300"
                }`}
              >
                <span
                  className={`h-0.5 transition-all duration-[500ms] ease-in-out ${
                    isActive
                      ? "w-12 bg-white"
                      : "w-4 bg-slate-400 hover:w-12 hover:bg-white"
                  }`}
                />
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Navbar);
