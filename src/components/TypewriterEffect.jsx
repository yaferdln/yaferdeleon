import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = ({ words }) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-teal-300 mb-2 md:mb-4">
      <span className="type-writer">
        <Typewriter
          words={words}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={40}
        />
      </span>
    </h2>
  );
};

export default TypewriterEffect;
