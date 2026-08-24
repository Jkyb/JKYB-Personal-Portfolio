import { motion } from "framer-motion";
import ExperimentCard from "../components/ExperimentCard";
import SectionKicker from "../components/SectionKicker";
import { experiments } from "../data/experiments";

export default function Experiments() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <SectionKicker number="02">Experiments</SectionKicker>
          <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Things I built because I was curious.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Small experiments, prototypes, and ideas built while exploring web
            technologies and interactive interfaces.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment, index) => (
            <ExperimentCard key={experiment.id} experiment={experiment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
