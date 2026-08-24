import { motion } from "framer-motion";
import FeaturedHeroCard from "../components/FeaturedHeroCard";
import ProjectCard from "../components/ProjectCard";
import SectionKicker from "../components/SectionKicker";
import { featuredProjects } from "../data/projects";

const [heroProject, ...restProjects] = featuredProjects;

export default function FeaturedProjects() {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <SectionKicker number="01">Featured Work</SectionKicker>
          <h2 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Selected projects.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A mix of games, data visualisation, 3D environments, and applications —
            spanning the full path from idea to working product.
          </p>
        </motion.div>

        <div>
          {heroProject && <FeaturedHeroCard project={heroProject} />}
          {restProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
