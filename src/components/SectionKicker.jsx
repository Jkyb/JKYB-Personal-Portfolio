/** Small accent-coloured eyebrow label used above section headings. */
export default function SectionKicker({ number, children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {number && (
        <span className="font-heading text-sm font-semibold text-accent">{number}</span>
      )}
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        {children}
      </span>
    </div>
  );
}
