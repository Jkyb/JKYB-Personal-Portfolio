import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ExperimentCard({ experiment, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group rounded-xl border border-ink/10 bg-white/40 p-4 transition-colors hover:border-accent/40"
    >
      <div className="mb-4 aspect-16/10 overflow-hidden rounded-lg bg-accent-light">
        <ImagePlaceholder
          label={experiment.title}
          note="SCREENSHOT"
          src={experiment.image}
          alt={`${experiment.title} — screenshot`}
        />
      </div>
      <h4 className="mb-1 font-heading text-lg font-semibold text-ink">
        {experiment.title}
      </h4>
      <p className="mb-3 text-sm leading-relaxed text-muted">{experiment.description}</p>
      <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
        {experiment.technologies.join(" · ")}
      </p>
      {experiment.links?.demo && (
        <a
          href={experiment.links.demo}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
        >
          Try it ↗
        </a>
      )}
    </motion.article>
  );
}
