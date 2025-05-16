import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { socialLinks } from "./constants/socialLinks";

import SocialLink from "./components/SocialLink";
import TypewriterEffect from "./components/TypewriterEffect";
import Navbar from "./components/Navbar";
import ObservedSection from "./components/ObservedSection";
import StickyHeading from "./components/StickyHeading";

import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 selection:bg-teal-300 selection:text-slate-800 leading-relaxed flex flex-col lg:flex-row">
      {/* Header: Left on large, top on small */}
      <header className="w-full lg:w-1/3 p-6 lg:p-16 lg:h-screen lg:sticky lg:top-0 self-start bg-slate-950 z-50">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tight text-slate-300 sm:text-5xl mb-4">
              Yafer De Leon
            </h1>
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
            <p className="text-lg leading-normal mb-4">
              Web developer na bulok para sayo.
            </p>

            {/* Navbar: Hidden on small screens */}
            <div className="lg:block lg:mt-8 hidden">
              <Navbar activeSection={activeSection} />
            </div>
          </div>

          <div className="flex space-x-4 mt-6 lg:mt-8">
            {socialLinks.map((social, index) => (
              <SocialLink key={index} social={social} />
            ))}
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 h-screen overflow-y-auto scroll-smooth p-4">
        <ObservedSection id="about" setActiveSection={setActiveSection}>
          <h1 className="sticky top-0 bg-slate-950/80 backdrop-blur text-teal-300 text-xl font-semibold z-50 w-full lg:hidden text-left">
            About
          </h1>
          <About />
        </ObservedSection>
        <ObservedSection id="services" setActiveSection={setActiveSection}>
          <h1 className="sticky top-0 bg-slate-950/80 backdrop-blur text-teal-300 text-xl font-semibold py-2 px-6 z-50 w-full lg:hidden">
            Services
          </h1>
          <Services />
        </ObservedSection>
        <ObservedSection id="projects" setActiveSection={setActiveSection}>
          <h1 className="sticky top-0 bg-slate-950/80 backdrop-blur text-teal-300 text-xl font-semibold py-2 px-6 z-50 w-full lg:hidden">
            Projects
          </h1>
          <Projects />
        </ObservedSection>
        <ObservedSection id="skills" setActiveSection={setActiveSection}>
          <h1 className="sticky top-0 bg-slate-950/80 backdrop-blur text-teal-300 text-xl font-semibold py-2 px-6 z-50 w-full lg:hidden">
            Skills
          </h1>
          <Skills />
        </ObservedSection>
        <ObservedSection id="contact" setActiveSection={setActiveSection}>
          <h1 className="sticky top-0 bg-slate-950/80 backdrop-blur text-teal-300 text-xl font-semibold py-2 px-6 z-50 w-full lg:hidden">
            Contact
          </h1>
          <Contact />
        </ObservedSection>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
