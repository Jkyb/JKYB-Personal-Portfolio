import { motion } from "framer-motion";
import Button from "../components/Button";
import { socials } from "../data/social";
import profilePhoto from "../data/images/profile.jpg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p
            variants={item}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Developer &amp; Creative Technologist — Based in the Philippines
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink"
          >
            I build digital
            <br />
            experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            I&apos;m a developer who enjoys turning ideas into interactive websites,
            applications, games, and 3D experiences.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#work" variant="accent">
              View My Work
            </Button>
            {socials.cv ? (
              <Button href={socials.cv} variant="outline" download>
                Download CV
              </Button>
            ) : (
              <Button variant="outline" disabled title="CV coming soon">
                TODO: Add CV
              </Button>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-4xl bg-accent-light sm:-inset-6"
          />
          <div className="aspect-4/5 overflow-hidden rounded-3xl bg-accent-light shadow-sm">
            <img
              src={profilePhoto}
              alt="Kent, developer and creative technologist"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-ink/10 bg-background px-4 py-3 shadow-sm sm:-bottom-6 sm:-left-6">
            <p className="font-heading text-sm font-semibold text-ink">Joel Kent Bruzo</p>
            <p className="text-xs text-muted">Dev &amp; Creative Technologist</p>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 rounded-full bg-accent-light/70 blur-3xl sm:block"
      />
    </section>
  );
}
