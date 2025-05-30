import { memo } from "react";
import Marquee from "react-fast-marquee";
import { aboutText } from "../constants/aboutText";
import { techStack } from "../constants/techStack";

const About = () => {
  return (
    <>
      {/* Sticky Mobile Header */}
      <div className="md:hidden sticky top-0 z-30 w-full bg-slate-900/60 backdrop-blur-md">
        <h1 className="text-sm sm:text-base py-3 px-6 font-bold text-teal-300 uppercase tracking-wider mb-6">
          About
        </h1>
      </div>

      {/* About Section */}
      <section className="px-4 max-w-5xl mx-auto">
        {/* About Text */}
        <div
          className="text-sm md:text-base text-gray-400 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: aboutText }}
        />

        {/* Tech Stack Marquee */}
        <div className="mt-10">
          <div className="border border-slate-700 rounded-md p-2 shadow-inner">
            <Marquee
              speed={50}
              pauseOnHover
              gradient={false}
              autoFill
              className="overflow-hidden h-20 sm:h-24 md:h-28"
            >
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
                {techStack.map(({ id, icon: Icon, title, color, url }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                    className="group transition-transform hover:scale-110"
                  >
                    <Icon
                      className={`${color} text-4xl md:text-6xl group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]`}
                    />
                    <span className="sr-only">{title}</span>
                  </a>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(About);
