import { motion } from "framer-motion";
import { socials } from "../data/social";

export default function CreativeWork() {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              AI-Assisted Development
            </h3>
            <p className="max-w-md text-base leading-relaxed text-muted">
              I use AI as a development partner for research, prototyping,
              debugging, ideation, and experimentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="mb-3 font-heading text-2xl font-bold text-ink">
              Beyond Development
            </h3>
            <p className="mb-4 max-w-md text-base leading-relaxed text-muted">
              Outside of code, I make music — piano, guitar, songwriting, and music
              production.
            </p>
            <a
              href={socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              JKYB2.0 on YouTube ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
