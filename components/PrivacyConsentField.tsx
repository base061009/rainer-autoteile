type PrivacyConsentFieldProps = {
  inputProps: React.ComponentProps<"input">;
  error?: string;
};

export function PrivacyConsentField({
  inputProps,
  error,
}: PrivacyConsentFieldProps) {
  return (
    <div>
      <label className="share-consent">
        <input type="checkbox" {...inputProps} />
        <span>
          Ich habe die{" "}
          <a
            href="/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="share-faq-link"
            onClick={(event) => event.stopPropagation()}
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und akzeptiert.
        </span>
      </label>
      {error ? (
        <span className="share-field-error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
