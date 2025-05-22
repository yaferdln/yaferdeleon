import { lazy, Suspense, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { socialLinks } from "./constants/socialLinks";
import {
  SocialLink,
  TypewriterEffect,
  Navbar,
  ObservedSection,
} from "./components";

const About = lazy(() => import("./sections/About"));
const Careers = lazy(() => import("./sections/Careers"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  const sectionTitles = {
    about: "About",
    careers: "Careers",
    services: "Services",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  };
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-400 selection:bg-teal-300 selection:text-gray-800 leading-relaxed">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar/Header */}
        <header className="w-full lg:w-1/3 p-6 lg:p-12 lg:h-screen lg:sticky lg:top-0 self-start z-50 border-r border-slate-800">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-300 mb-2 md:mb-4">
                Yafer De Leon
              </h2>

              <TypewriterEffect
                words={[
                  "Web Developer",
                  "Tech Support",
                  "PC Builder",
                  "Content Creator",
                  "Airdrop Hunter",
                  "Crypto Enthusiast",
                ]}
              />

              <p className="text-sm md:text-base leading-normal mb-2 mb:mb-4">
                Building more than just websites — creating digital journeys.
              </p>

              {/* Navbar visible on large screens */}
              <div className="hidden lg:block">
                <Navbar activeSection={activeSection} />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} social={social} />
              ))}
            </div>
          </div>
        </header>
        {/* Mobile Sticky Section Label
        <div className="lg:hidden fixed top-0 left-0 w-full z-50">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-700 shadow-sm">
            <h2 className="text-teal-300 text-sm font-medium tracking-wide">
              {sectionTitles[activeSection]}
            </h2>
          </div>
        </div> */}
        {/* Main Content Area */}

        <main className="flex-1 md:overflow-y-auto scroll-smooth">
          <Suspense
            fallback={
              <div className="p-4 text-center text-teal-300">Loading...</div>
            }
          >
            <ObservedSection id="about" setActiveSection={setActiveSection}>
              <About />
            </ObservedSection>
            <ObservedSection id="careers" setActiveSection={setActiveSection}>
              <Careers />
            </ObservedSection>
            <ObservedSection id="services" setActiveSection={setActiveSection}>
              <Services />
            </ObservedSection>

            <ObservedSection id="projects" setActiveSection={setActiveSection}>
              <Projects />
            </ObservedSection>

            <ObservedSection id="skills" setActiveSection={setActiveSection}>
              <Skills />
            </ObservedSection>

            <ObservedSection id="contact" setActiveSection={setActiveSection}>
              <Contact />
            </ObservedSection>

            <section id="footer">
              <Footer />
            </section>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
