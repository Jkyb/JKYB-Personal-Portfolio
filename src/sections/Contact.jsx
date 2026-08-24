import { motion } from "framer-motion";
import Button from "../components/Button";
import { socials } from "../data/social";

const links = [
  { label: "Email", value: socials.email, href: `mailto:${socials.email}` },
  { label: "GitHub", value: "View profile ↗", href: socials.github },
  { label: "LinkedIn", value: "View profile ↗", href: socials.linkedin },
  { label: "YouTube", value: "JKYB2.0 ↗", href: socials.youtube },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-ink/10 py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
            Have an idea?
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted">
            Let&apos;s turn it into something real.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`mailto:${socials.email}`} variant="accent">
              Say Hello
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
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-16 grid grid-cols-1 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {links.map((link) => (
            <div key={link.label}>
              <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {link.label}
              </dt>
              <dd>
                <a
                  href={link.href}
                  target={link.href?.startsWith("http") ? "_blank" : undefined}
                  rel={link.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="text-base font-medium text-ink transition-colors hover:text-accent wrap-break-word"
                >
                  {link.value}
                </a>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
