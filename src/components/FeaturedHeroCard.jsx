import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Oversized treatment for the single most prominent featured project.
 */
export default function FeaturedHeroCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="border-t border-ink/10 py-12 md:py-20"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-4 text-sm text-muted">
            <span className="font-heading text-accent">01</span>
            <span className="h-px w-10 bg-ink/10" />
            <span className="uppercase tracking-wide">{project.year}</span>
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <h3 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-6xl">
            <Link to={`/work/${project.id}`} className="transition-colors hover:text-accent">
              {project.title}
            </Link>
          </h3>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <Link
        to={`/work/${project.id}`}
        aria-label={`View ${project.title} project details`}
        className="group relative mb-8 block aspect-video overflow-hidden rounded-2xl bg-accent-light"
      >
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ImagePlaceholder
            label={project.title}
            note="PROJECT SCREENSHOT"
            src={project.image}
            alt={`${project.title} — project screenshot`}
          />
        </div>
        <span className="absolute right-5 top-5 rounded-full bg-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Project
        </span>
        {project.gallery?.length > 0 && (
          <span className="absolute bottom-5 left-5 rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink">
            +{project.gallery.length} Photos
          </span>
        )}
      </Link>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-2">
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
            View Case Study
          </Link>
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
            >
              Play on itch.io ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
