import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${SITE.legalName}.`,
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title: `Impressum | ${SITE.name}`,
    description: `Impressum von ${SITE.legalName}.`,
    url: `${SITE.url}/impressum`,
  },
};

export default function ImpressumPage() {
  return (
    <main id="main" className="min-h-full bg-white text-ink">
      <Container className="max-w-3xl py-10 sm:py-14">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          Zurück
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-ink">
          Impressum
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-semibold text-ink">Medieninhaber</h2>
            <p className="mt-2">
              {SITE.legalName}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
              <br />
              {SITE.address.countryName}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Kontakt</h2>
            <p className="mt-2">
              Telefon:{" "}
              <a href={SITE.phoneHref} className="text-ink underline-offset-2 hover:underline">
                {SITE.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink underline-offset-2 hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Firmenbuch</h2>
            <p className="mt-2">
              Firmenbuchnummer: {SITE.companyRegisterNumber}
              <br />
              Firmenbuchgericht: {SITE.companyRegisterCourt}
              <br />
              Die zur Vertretung befugten Organe ergeben sich aus dem Firmenbuch.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Gewerbe</h2>
            <p className="mt-2">
              Gegenstand: Handel mit Kraftfahrzeugteilen und Zubehör.
              <br />
              Mitglied der Wirtschaftskammer Österreich / Wirtschaftskammer Wien.
              <br />
              Gewerbebehörde: Magistratisches Bezirksamt des XI. Bezirkes, 1110 Wien.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">Haftung</h2>
            <p className="mt-2">
              Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für
              Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine
              Gewähr. Für verlinkte fremde Seiten sind deren Betreiber
              verantwortlich.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
