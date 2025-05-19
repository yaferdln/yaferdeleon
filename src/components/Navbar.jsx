import { navbarLinks } from "../constants/navbarLinks";

const Navbar = ({ activeSection }) => {
  return (
    <nav className="mt-4 mb-8  pl-1 border-slate-700 relative">
      <ul className="flex flex-col space-y-4">
        {navbarLinks.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <li
              key={link.title}
              className={`relative flex items-center gap-4 py-1 group ${
                isActive ? "sticky top-0 z-10" : ""
              }`}
            >
              <span
                className={`h-0.5 transition-all duration-300 ${
                  isActive
                    ? "w-12 bg-white"
                    : "w-4 bg-slate-400 group-hover:w-12 group-hover:bg-white"
                }`}
              />
              <a
                href={`#${link.href}`}
                className={`block text-sm sm:text-base lg:text-base uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-teal-300"
                    : "text-slate-400 hover:text-teal-300"
                }`}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
