import { useInView } from "framer-motion";
import React, { useRef, useEffect, useState, Suspense, lazy } from "react";

const ObservedSection = ({ id, setActiveSection, loadComponent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (isInView && !Component) {
      loadComponent().then((mod) => {
        setComponent(() => mod.default);
      });
    }

    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection, loadComponent, Component]);

  return (
    <section id={id} ref={ref} className="min-h-screen pt-16">
      {Component && (
        <Suspense
          fallback={<div className="text-center py-12">Loading...</div>}
        >
          <Component />
        </Suspense>
      )}
    </section>
  );
};

export default React.memo(ObservedSection);
