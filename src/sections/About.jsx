import Marquee from "react-fast-marquee";
import { aboutText } from "../constants/aboutText";
import { techStack } from "../constants/techStack";

const About = () => {
  return (
    <>
      {/* About text */}
      <p
        className="text-sm md:text-lg text-gray-400 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: aboutText.replace(/\n/g, "<br />"),
        }}
      ></p>

      {/* Tech Stack Marquee with hover effects */}
      <div className="mt-8">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-300 mb-2">
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
            {techStack.map(({ icon: Icon, title, color, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="transition-all bg-slate-800/40 backdrop-blur-sm p-3 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800/60 hover:text-white hover:scale-125 transform hover:rotate-6 duration-300"
              >
                <Icon className={`${color} text-3xl md:text-5xl`} />
                <span className="sr-only">{title}</span>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default About;
