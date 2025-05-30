import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect, useCallback, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { socialLinks } from "./constants/socialLinks";

import { SocialLink, Navbar, ObservedSection } from "./components";

const About = lazy(() => import("./sections/About"));
const Careers = lazy(() => import("./sections/Careers"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));
const Archive = lazy(() => import("./pages/Archive"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionActive = useCallback((id) => {
    setActiveSection(id);
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-slate-900 text-gray-400 selection:bg-teal-300 selection:text-gray-900 leading-relaxed">
              <div className="flex flex-col lg:flex-row">
                {/* Sidebar/Header */}
                <header className="w-full lg:w-1/3 p-6 lg:p-12 lg:h-screen lg:sticky lg:top-0 self-start z-50 border-r border-slate-800">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-300 mb-2 md:mb-4">
                        Yafer De Leon
                      </h2>
                      <h3 className="text-lg md:text-2xl font-semibold text-slate-400 mb-2">
                        Frontend Developer
                      </h3>
                      <p className="text-sm md:text-base leading-normal mb-2 md:mb-4">
                        Building more than just websites — creating digital
                        journeys.
                      </p>
                      <div className="hidden lg:block mt-8">
                        <Navbar activeSection={activeSection} />
                      </div>
                    </div>

                    <div className="flex space-x-4 md:space-x-6 mt-2">
                      {socialLinks.map((social, index) => (
                        <SocialLink key={index} social={social} />
                      ))}
                    </div>
                  </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 md:overflow-y-auto scroll-smooth">
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center h-screen">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-10 h-10 border-4 border-teal-300 border-t-transparent rounded-full animate-spin"></div>
                          <p className="text-teal-300 text-sm sm:text-base tracking-wide">
                            Loading, please wait...
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <ObservedSection
                      id="about"
                      setActiveSection={handleSectionActive}
                    >
                      <About />
                    </ObservedSection>
                    <ObservedSection
                      id="careers"
                      setActiveSection={handleSectionActive}
                    >
                      <Careers />
                    </ObservedSection>
                    <ObservedSection
                      id="services"
                      setActiveSection={handleSectionActive}
                    >
                      <Services />
                    </ObservedSection>
                    <ObservedSection
                      id="projects"
                      setActiveSection={handleSectionActive}
                    >
                      <Projects />
                    </ObservedSection>

                    <ObservedSection
                      id="contact"
                      setActiveSection={handleSectionActive}
                    >
                      <Contact />
                    </ObservedSection>
                    <section id="footer">
                      <Footer />
                    </section>
                  </Suspense>
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/archive"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-10 h-10 border-4 border-teal-300 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-teal-300 text-sm sm:text-base tracking-wide">
                      Loading, please wait...
                    </p>
                  </div>
                </div>
              }
            >
              <Archive />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-10 h-10 border-4 border-teal-300 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-teal-300 text-sm sm:text-base tracking-wide">
                      Loading, please wait...
                    </p>
                  </div>
                </div>
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default memo(App);
