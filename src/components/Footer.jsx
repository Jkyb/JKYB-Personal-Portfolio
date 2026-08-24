export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-background">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-heading text-lg font-bold tracking-tight text-ink">Joel Kent Bruzo</p>
          <p className="text-sm text-muted">Developer · Creative Technologist</p>
        </div>
        <p className="text-sm text-muted">© {year} Joel Kent Bruzo. All rights reserved.</p>
      </div>
    </footer>
  );
}
