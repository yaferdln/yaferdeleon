import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ObservedSection = ({ id, setActiveSection, children }) => {
  const ref = useRef(null);
  // Use threshold to define when section is considered "in view"
  const isInView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <section id={id} ref={ref} className="min-h-screen pt-16">
      {children}
    </section>
  );
};

export default ObservedSection;
