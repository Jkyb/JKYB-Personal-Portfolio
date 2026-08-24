import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Large featured project card. Index is used for the accent "number" label
 * (e.g. 01, 02) that runs alongside each featured project.
 */
export default function ProjectCard({ project, index, reverse = false }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid grid-cols-1 items-center gap-8 border-t border-ink/10 py-12 md:grid-cols-2 md:gap-14 md:py-20 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link
        to={`/work/${project.id}`}
        aria-label={`View ${project.title} project details`}
        className="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-accent-light"
      >
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <ImagePlaceholder
            label={project.title}
            note="PROJECT SCREENSHOT"
            src={project.image}
            alt={`${project.title} — project screenshot`}
          />
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Project
        </span>
        {project.gallery?.length > 0 && (
          <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
            +{project.gallery.length} Photos
          </span>
        )}
      </Link>

      <div>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted">
          <span className="font-heading text-accent">{number}</span>
          <span className="h-px flex-1 bg-ink/10" />
          <span className="uppercase tracking-wide">{project.year}</span>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>

        <h3 className="mb-4 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
          <Link to={`/work/${project.id}`} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>

        <p className="mb-6 max-w-md text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink/70"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            to={`/work/${project.id}`}
            className="text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Project Details
          </Link>
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
            >
              Link to Project ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
