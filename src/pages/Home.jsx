import About from "../sections/About";
import Contact from "../sections/Contact";
import CreativeWork from "../sections/CreativeWork";
import Experiments from "../sections/Experiments";
import FeaturedProjects from "../sections/FeaturedProjects";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experiments />
      <About />
      <Skills />
      <CreativeWork />
      <Contact />
    </>
  );
}
