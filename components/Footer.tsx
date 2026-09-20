import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 text-white">
      <Container className="flex flex-col items-center gap-2 py-3 sm:flex-row sm:justify-between sm:py-3.5">
        <Logo href="/" variant="footer" className="h-5 sm:h-6" />
        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/65 sm:justify-end"
          aria-label="Rechtliches"
        >
          <Link href="/impressum" className="transition-colors hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-white">
            Datenschutz
          </Link>
          <a
            href={SITE.glanzarenaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Rainer Glanzarena
          </a>
          <span className="text-white/40">
            © {year} {SITE.name}
          </span>
        </nav>
      </Container>
    </footer>
  );
}
