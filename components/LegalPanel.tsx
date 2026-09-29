import { SITE } from "@/lib/site";

export function LegalPanel({ doc }: { doc: "impressum" | "datenschutz" }) {
  if (doc === "impressum") {
    return (
      <div className="share-legal">
        <section>
          <h3>Medieninhaber</h3>
          <p>
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
          <h3>Kontakt</h3>
          <p>
            Telefon:{" "}
            <a href={SITE.legalPhoneHref}>{SITE.legalPhone}</a>
            <br />
            E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </section>
        <section>
          <h3>Firmenbuch</h3>
          <p>
            Firmenbuchnummer: {SITE.companyRegisterNumber}
            <br />
            Firmenbuchgericht: {SITE.companyRegisterCourt}
            <br />
            Die zur Vertretung befugten Organe ergeben sich aus dem Firmenbuch.
          </p>
        </section>
        <section>
          <h3>Gewerbe</h3>
          <p>
            Gegenstand: Handel mit Kraftfahrzeugteilen und Zubehör.
            <br />
            Mitglied der Wirtschaftskammer Österreich / Wirtschaftskammer Wien.
            <br />
            Gewerbebehörde: Magistratisches Bezirksamt des XI. Bezirkes, 1110 Wien.
          </p>
        </section>
        <section>
          <h3>Haftung</h3>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für
            Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine
            Gewähr. Für verlinkte fremde Seiten sind deren Betreiber
            verantwortlich.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="share-legal">
      <section>
        <h3>1. Verantwortlicher</h3>
        <p>
          {SITE.legalName}
          <br />
          {SITE.address.street}
          <br />
          {SITE.address.zip} {SITE.address.city}
          <br />
          Telefon: {SITE.legalPhone}
          <br />
          E-Mail: {SITE.email}
        </p>
      </section>
      <section>
        <h3>2. Hosting und Server-Logfiles</h3>
        <p>
          Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch
          notwendige Daten (insbesondere IP-Adresse, Datum und Uhrzeit,
          aufgerufene Seite, Browser- und Betriebssystemkennung). Das dient der
          Auslieferung und Sicherheit der Website. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO. Die Daten werden nicht mit anderen Datenquellen
          zusammengeführt und nach kurzer Frist gelöscht, soweit keine längere
          Aufbewahrung zur Aufklärung von Störungen oder Missbrauch erforderlich
          ist.
        </p>
      </section>
      <section>
        <h3>3. Cookies</h3>
        <p>
          Es werden derzeit keine Analyse- oder Marketing-Cookies gesetzt.
          Technisch notwendige Sitzungsdaten können durch den Betrieb der
          Website anfallen. Sollten später optionale Cookies eingesetzt werden,
          holen wir zuvor eine Einwilligung ein.
        </p>
      </section>
      <section>
        <h3>4. Formulare</h3>
        <p>
          Über die Website können Sie Zugangsdaten beantragen oder eine
          Nachricht senden. Die Verarbeitung erfolgt, um Ihre Anfrage zu prüfen
          und zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Maßnahmen) und Ihre Bestätigung über das Formular.
        </p>
        <p>
          <strong>Antrag auf Zugangsdaten:</strong> Ansprechperson, Firmenname,
          E-Mail-Adresse, UID-Nummer, Firmenbuchnummer.
        </p>
        <p>
          <strong>Kontaktanfrage:</strong> Ansprechperson, Firma,
          E-Mail-Adresse, Anliegen.
        </p>
        <p>
          Die Angaben werden nicht veröffentlicht. Für den Versand der Anfragen
          nutzen wir Resend (Resend, Inc.). Die Übermittlung erfolgt nur, um
          Ihre Nachricht an uns zuzustellen, und auf Grundlage eines
          Auftragsverarbeitungsvertrags.
        </p>
      </section>
      <section>
        <h3>5. Speicherdauer</h3>
        <p>
          Anfragen speichern wir, solange es für die Bearbeitung und allfällige
          Rückfragen nötig ist. Entsteht daraus eine Geschäftsbeziehung, gelten
          die gesetzlichen Aufbewahrungsfristen. Andernfalls löschen wir die
          Daten, sobald der Zweck entfällt und keine Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </section>
      <section>
        <h3>6. Ihre Rechte</h3>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
          und das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für
          die Zukunft zu widerrufen. Zur Ausübung Ihrer Rechte schreiben Sie an{" "}
          {SITE.email}.
        </p>
        <p>
          Außerdem haben Sie das Recht auf Beschwerde bei der Österreichischen
          Datenschutzbehörde, Barichgasse 40 bis 42, 1030 Wien,{" "}
          <a href="https://www.dsb.gv.at" rel="noopener noreferrer">
            www.dsb.gv.at
          </a>
          .
        </p>
      </section>
    </div>
  );
}
