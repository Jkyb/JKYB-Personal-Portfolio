/**
 * Visually clear placeholder used until a real screenshot/render is added.
 * Swap by passing a real `src` — the placeholder disappears automatically.
 */
export default function ImagePlaceholder({
  label,
  note = "IMAGE COMING SOON",
  src,
  alt = "",
  className = "",
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt || `${label} — placeholder image`}
      className={`relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-accent-light px-6 py-10 text-center ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(23,23,23,0.06) 0px, rgba(23,23,23,0.06) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <span className="relative font-heading text-lg font-semibold uppercase tracking-tight text-ink sm:text-xl">
        {label}
      </span>
      <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {note}
      </span>
    </div>
  );
}
