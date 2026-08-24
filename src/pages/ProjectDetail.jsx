import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Lightbox from "../components/Lightbox";
import { getProjectById, projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) {
    return (
      <section className="container-page py-32 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h1 className="mb-6 font-heading text-3xl font-bold text-ink">
          Project not found.
        </h1>
        <Button href="/#work" as="a">
          Back to Work
        </Button>
      </section>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const next = projects[(currentIndex + 1) % projects.length];
  const albumImages = [project.image, ...project.gallery].filter(Boolean);

  return (
    <article className="py-16 sm:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
          >
            ← Back to Work
          </Link>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category} · {project.year}
          </p>
          <h1 className="mb-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-ink sm:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {project.longDescription || project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.demo && (
              <Button href={project.links.demo} variant="accent">
                <span>Link to Project</span>
              </Button>
            )}
            {project.links?.source && (
              <Button href={project.links.source} variant="outline">
                <span>View Source</span>
              </Button>
            )}
          </div>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => project.image && setLightboxIndex(0)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`mt-14 block aspect-video w-full overflow-hidden rounded-2xl bg-accent-light ${
            project.image ? "cursor-zoom-in" : "cursor-default"
          }`}
          aria-label={project.image ? `Open ${project.title} screenshot in full view` : undefined}
        >
          <ImagePlaceholder
            label={project.title}
            note="PROJECT SCREENSHOT"
            src={project.image}
            alt={`${project.title} — project screenshot`}
          />
        </motion.button>

        {project.gallery?.length > 0 && (
          <div className="mt-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Album — {project.gallery.length} more image
              {project.gallery.length > 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setLightboxIndex(index + 1)}
                  className="group aspect-4/3 overflow-hidden rounded-xl bg-accent-light cursor-zoom-in"
                  aria-label={`Open ${project.title} gallery image ${index + 1} in full view`}
                >
                  <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                    <ImagePlaceholder
                      label={project.title}
                      note={`GALLERY ${index + 1}`}
                      src={image}
                      alt={`${project.title} — gallery image ${index + 1}`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <Lightbox
          images={albumImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-ink/10 pt-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-sm text-ink/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project.highlights?.length > 0 && (
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                What this project involved
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-base text-ink/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-ink/10 pt-10">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Next Project
            </p>
            <Link
              to={`/work/${next.id}`}
              className="font-heading text-2xl font-bold text-ink transition-colors hover:text-accent"
            >
              {next.title} →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
