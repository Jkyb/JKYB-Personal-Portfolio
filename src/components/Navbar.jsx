import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import { socials } from "../data/social";
import logo from "../data/images/logo.jpg";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-ink/10 bg-background/90 backdrop-blur"
          : "border-transparent bg-background/0"
      }`}
    >
      <nav
        className="container-page flex items-center justify-between py-4"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-ink"
        >
          <img
            src={logo}
            alt="JKYB logo"
            className="h-9 w-9 rounded-full border border-ink/10 object-cover"
          />
          JKYB
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wide text-ink/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {socials.cv ? (
            <Button href={socials.cv} variant="outline" className="text-xs" download>
              Download CV
            </Button>
          ) : (
            <Button
              variant="outline"
              className="text-xs"
              disabled
              title="CV coming soon"
            >
              TODO: Add CV
            </Button>
          )}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <motion.line
              x1="0"
              x2="18"
              stroke="currentColor"
              strokeWidth="1.6"
              animate={isOpen ? { y1: 7, y2: 7, rotate: 45 } : { y1: 1, y2: 1, rotate: 0 }}
              style={{ originX: "9px", originY: "7px" }}
            />
            <motion.line
              x1="0"
              x2="18"
              y1="7"
              y2="7"
              stroke="currentColor"
              strokeWidth="1.6"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.line
              x1="0"
              x2="18"
              stroke="currentColor"
              strokeWidth="1.6"
              animate={isOpen ? { y1: 7, y2: 7, rotate: -45 } : { y1: 13, y2: 13, rotate: 0 }}
              style={{ originX: "9px", originY: "7px" }}
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-background md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-heading text-2xl font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                {socials.cv ? (
                  <Button href={socials.cv} variant="accent" className="w-full" download>
                    Download CV
                  </Button>
                ) : (
                  <Button variant="accent" className="w-full" disabled title="CV coming soon">
                    TODO: Add CV
                  </Button>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
