import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${SITE.legalName}.`,
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title: `Datenschutzerklärung | ${SITE.name}`,
    description: `Informationen zur Datenverarbeitung bei ${SITE.legalName}.`,
    url: `${SITE.url}/datenschutz`,
  },
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-semibold text-ink">1. Verantwortlicher</h2>
            <p className="mt-2">
              {SITE.legalName}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
              <br />
              Telefon: {SITE.phone}
              <br />
              E-Mail: {SITE.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">
              2. Hosting und Server-Logfiles
            </h2>
            <p className="mt-2">
              Beim Aufruf der Website verarbeitet der Hosting-Anbieter
              technisch notwendige Daten (insbesondere IP-Adresse, Datum und
              Uhrzeit, aufgerufene Seite, Browser- und Betriebssystemkennung).
              Das dient der Auslieferung und Sicherheit der Website.
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
              Die Daten werden nicht mit anderen Datenquellen zusammengeführt
              und nach kurzer Frist gelöscht, soweit keine längere Aufbewahrung
              zur Aufklärung von Störungen oder Missbrauch erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">3. Cookies</h2>
            <p className="mt-2">
              Es werden derzeit keine Analyse- oder Marketing-Cookies gesetzt.
              Technisch notwendige Sitzungsdaten können durch den Betrieb der
              Website anfallen. Sollten später optionale Cookies eingesetzt
              werden, holen wir zuvor eine Einwilligung ein.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">4. Formulare</h2>
            <p className="mt-2">
              Über die Website können Sie Zugangsdaten beantragen oder eine
              Nachricht senden. Die Verarbeitung erfolgt, um Ihre Anfrage zu
              prüfen und zu beantworten. Rechtsgrundlage ist Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche Maßnahmen) und
              Ihre Bestätigung über das Formular.
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-ink">
                Antrag auf Zugangsdaten:
              </strong>{" "}
              Ansprechperson, Firmenname, E-Mail-Adresse, UID-Nummer,
              Firmenbuchnummer.
            </p>
            <p className="mt-2">
              <strong className="font-semibold text-ink">
                Kontaktanfrage:
              </strong>{" "}
              Ansprechperson, Firma, Anliegen.
            </p>
            <p className="mt-3">
              Die Angaben werden nicht veröffentlicht. Eine Anbindung an ein
              externes CRM besteht derzeit nicht. Wird ein Dienstleister
              (z.&nbsp;B. Hosting oder E-Mail-Versand) eingesetzt, erfolgt das
              nur im erforderlichen Umfang und auf Grundlage eines
              Auftragsverarbeitungsvertrags.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">5. Speicherdauer</h2>
            <p className="mt-2">
              Anfragen speichern wir, solange es für die Bearbeitung und
              allfällige Rückfragen nötig ist. Entsteht daraus eine
              Geschäftsbeziehung, gelten die gesetzlichen Aufbewahrungsfristen.
              Andernfalls löschen wir die Daten, sobald der Zweck entfällt und
              keine Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">
              6. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch und das Recht, eine erteilte Einwilligung
              jederzeit mit Wirkung für die Zukunft zu widerrufen. Zur Ausübung
              Ihrer Rechte schreiben Sie an {SITE.email}.
            </p>
            <p className="mt-3">
              Außerdem haben Sie das Recht auf Beschwerde bei der
              Österreichischen Datenschutzbehörde, Barichgasse 40 bis 42, 1030 Wien,
              {" "}
              <a
                href="https://www.dsb.gv.at"
                className="text-ink underline-offset-2 hover:underline"
              >
                www.dsb.gv.at
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
