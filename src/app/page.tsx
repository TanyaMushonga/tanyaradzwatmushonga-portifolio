import About from "./components/about";
import Awards from "./components/awards/awards";
// import Certifications from "./components/certs/certifications";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/Hero";
import Projects from "./components/projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <Testimonials />
      {/* <Certifications /> */}
      <Contact />
    </main>
  );
}
