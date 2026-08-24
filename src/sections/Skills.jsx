import { motion } from "framer-motion";
import SectionKicker from "../components/SectionKicker";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="border-t border-ink/10 py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <SectionKicker number="04">Skills</SectionKicker>
          <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Tools of the trade.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-ink/15 px-3 py-1.5 text-sm text-ink/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
