import { useInView } from "framer-motion";
import React, { useRef, useEffect, useState, Suspense } from "react";

const ObservedSection = ({ id, onVisibleChange, loadComponent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (isInView && !Component) {
      loadComponent().then((mod) => {
        setComponent(() => mod.default);
      });
    }
  }, [isInView, loadComponent, Component]);

  useEffect(() => {
    onVisibleChange(id, isInView);
  }, [id, isInView, onVisibleChange]);

  return (
    <section id={id} ref={ref} className="min-h-screen pt-16">
      {Component && (
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen py-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-10 h-10 border-4 border-teal-300 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-teal-300 text-sm sm:text-base tracking-wide">
                  Loading...
                </p>
              </div>
            </div>
          }
        >
          <Component />
        </Suspense>
      )}
    </section>
  );
};

export default React.memo(ObservedSection);
