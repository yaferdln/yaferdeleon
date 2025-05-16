import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { socialLinks } from "./constants/socialLinks";
import SocialLink from "./components/SocialLink";
import TypewriterEffect from "./components/TypewriterEffect";
import Navbar from "./components/Navbar";
import ObservedSection from "./components/ObservedSection";

import { About, Services, Projects, Skills, Contact, Footer } from "./sections";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-slate-800 leading-relaxed">
      <div className="flex flex-col lg:flex-row">
        {/* Header: Left on large, top on small */}
        <header className="w-full lg:w-1/3 p-6 lg:p-12 lg:h-screen lg:sticky lg:top-0 self-start z-50 border-r border-slate-800  ">
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
                I don't just build sites. I build experiences.
              </p>

              {/* Navbar: Hidden on small screens */}
              <div className="hidden lg:block">
                <Navbar activeSection={activeSection} />
              </div>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} social={social} />
              ))}
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <ObservedSection id="about" setActiveSection={setActiveSection}>
            <About />
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
        </main>
      </div>
    </div>
  );
};

export default App;
