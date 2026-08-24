import { motion } from "framer-motion";
import SectionKicker from "../components/SectionKicker";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink/10 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionKicker number="03">About</SectionKicker>
            <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
              A developer who likes building things.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-5 text-lg leading-relaxed text-muted"
          >
            <p>
              I&apos;m a developer interested in the intersection of technology,
              creativity, and interactive experiences.
            </p>
            <p>
              My work ranges from web applications and data visualisation to
              multiplayer games and 3D environments. I enjoy learning by building —
              experimenting with new technologies, taking ideas from concept to
              working prototype, and finding practical ways to make digital
              experiences more engaging.
            </p>
            <p>
              My experience includes web development, programming, databases, game
              development, and 3D modelling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
