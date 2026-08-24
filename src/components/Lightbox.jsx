import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Minimal full-screen lightbox for viewing a project's image album.
 * No external dependency — just a portal-less fixed overlay.
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const isOpen = index !== null;

  const handleKeyDown = useCallback(
    (event) => {
      if (!isOpen) return;
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [isOpen, index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-4 sm:p-10"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:border-accent hover:text-accent sm:left-8"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:border-accent hover:text-accent sm:right-8"
              >
                →
              </button>
            </>
          )}

          {isOpen && (
            <motion.img
              key={images[index]}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[index]}
              alt=""
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          )}

          {images.length > 1 && (
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-wide text-background/70">
              {index + 1} / {images.length}
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
