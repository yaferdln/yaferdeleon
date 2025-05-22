import { lazy, Suspense, useState, useEffect, useCallback, memo } from "react"; // Added memo, useCallback
import AOS from "aos";
import "aos/dist/aos.css";
import { socialLinks } from "./constants/socialLinks";

import { SocialLink, Navbar, ObservedSection } from "./components";

// Lazily load sections to improve initial bundle size
const About = lazy(() => import("./sections/About"));
const Careers = lazy(() => import("./sections/Careers"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  // Use a ref for activeSection to avoid re-renders of App component
  // if other parts of the App don't strictly depend on this state change.
  // However, Navbar *does* depend on it, so useState is appropriate here.
  // The key is to ensure ObservedSection updates this efficiently.
  const [activeSection, setActiveSection] = useState("about");

  // Callback for IntersectionObserver to update activeSection
  // Use useCallback to prevent it from being recreated on every App re-render
  const handleSectionActive = useCallback((id) => {
    // Optional: Add a debounce here if state updates are too frequent during scroll
    // For example, if you scroll very fast and activeSection updates many times a second.
    // However, IntersectionObserver is usually efficient enough.
    setActiveSection(id);
  }, []); // No dependencies, so this function is stable

  useEffect(() => {
    // Initialize AOS only once
    AOS.init({
      // Consider adding once: true if you only want animations to play once
      once: true,
    });

    // Optional: Clean up AOS if your component unmounts (unlikely for App.jsx)
    // return () => AOS.refreshHard(); // Or other AOS cleanup if necessary
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-gray-400 selection:bg-teal-300 selection:text-gray-900 leading-relaxed">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar/Header */}
          <header className="w-full lg:w-1/3 p-6 lg:p-12 lg:h-screen lg:sticky lg:top-0 self-start z-50 border-r border-slate-800">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-300 mb-2 md:mb-4">
                  Yafer De Leon
                </h2>
                <h3 className="text-base md:text-xl font-semibold text-slate-400 mb-2">
                  Frontend Developer
                </h3>
                {/* TypewriterEffect: This is a potential source of frequent re-renders.
                    If it causes issues, consider if you truly need it or can optimize its internal
                    state management to minimize App re-renders.
                    For now, it stays as is, as its impact might be minimal. */}

                <p className="text-xs md:text-sm leading-normal mb-2 md:mb-4">
                  Building more than just websites — creating digital journeys.
                </p>

                {/* Navbar visible on large screens - now memoized */}
                <div className="hidden lg:block">
                  <Navbar activeSection={activeSection} />
                </div>
              </div>

              {/* Social Links - now memoized SocialLink components */}
              <div className="flex space-x-6">
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
                <div className="p-4 text-center text-teal-300">Loading...</div>
              }
            >
              {/* Pass the memoized callback to ObservedSection */}
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
                id="skills"
                setActiveSection={handleSectionActive}
              >
                <Skills />
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
    </>
  );
};

export default memo(App);
