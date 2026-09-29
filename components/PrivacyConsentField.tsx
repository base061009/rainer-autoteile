type PrivacyConsentFieldProps = {
  inputProps: React.ComponentProps<"input">;
  error?: string;
  onOpenPrivacy: () => void;
};

export function PrivacyConsentField({
  inputProps,
  error,
  onOpenPrivacy,
}: PrivacyConsentFieldProps) {
  return (
    <div>
      <label className="share-consent">
        <input type="checkbox" {...inputProps} />
        <span>
          Ich habe die{" "}
          <button
            type="button"
            className="share-faq-link"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onOpenPrivacy();
            }}
          >
            Datenschutzerklärung
          </button>{" "}
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
