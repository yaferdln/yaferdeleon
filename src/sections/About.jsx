import { memo } from "react";
import Marquee from "react-fast-marquee";
import { aboutText } from "../constants/aboutText";
import { techStack } from "../constants/techStack";

const About = () => {
  return (
    <>
      <div className="md:hidden w-full sticky top-0 z-30 bg-slate-900/10 backdrop-blur-sm py-2 mb-4">
        <h1 className="text-sm sm:text-base pl-4 font-semibold text-teal-300 uppercase tracking-wider">
          About
        </h1>
      </div>
      <div className="px-4">
        {/* About text */}
        <p
          className="text-sm md:text-base text-gray-400 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: aboutText.replace(/\n/g, "<br />"),
          }}
        ></p>
        {/* Tech Stack Marquee with hover effects */}
        <div className="mt-8">
          <h3 className="text-base md:text-lg font-semibold text-gray-300 mb-2">
            Tech Stack & Tools
          </h3>
          <Marquee
            speed={50}
            pauseOnHover
            gradient={false}
            autoFill
            className="overflow-hidden h-20 sm:h-24 md:h-32 mt-2"
          >
            <div className="flex items-center justify-center gap-3 px-2 sm:gap-4 sm:px-2 md:gap-6 md:px-4">
              {techStack.map(({ id, icon: Icon, title, color, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                >
                  <Icon className={`${color} text-4xl md:text-6xl`} />
                  <span className="sr-only">{title}</span>
                </a>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default memo(About);
