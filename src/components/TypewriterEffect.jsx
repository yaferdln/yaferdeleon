import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = ({ words }) => {
  return (
    <h2 className="text-lg md:text-xl font-medium tracking-tight text-teal-300 mb-4">
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
