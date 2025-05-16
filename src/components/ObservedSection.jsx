import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ObservedSection = ({ id, setActiveSection, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) setActiveSection(id);
  }, [isInView, id, setActiveSection]);

  return (
    <section id={id} ref={ref} className="min-h-screen pt-16">
      {children}
    </section>
  );
};

export default ObservedSection;
