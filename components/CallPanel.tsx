"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { SITE } from "@/lib/site";

export function CallPanel({ onClose }: { onClose: () => void }) {
  const [qrSrc, setQrSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    void QRCode.toDataURL(SITE.phoneHref, {
      margin: 1,
      width: 280,
      color: { dark: "#111111", light: "#ffffff" },
      errorCorrectionLevel: "M",
    }).then((url) => {
      if (!cancelled) setQrSrc(url);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="share-call">
      <p className="share-card-lead">
        Mehr in den FAQ:{" "}
        <a href="/#faq" className="share-faq-link" onClick={onClose}>
          FAQ
        </a>
      </p>

      <div className="share-contact-scan">
        {qrSrc ? (
          <img
            src={qrSrc}
            alt={`QR-Code zum Anrufen von ${SITE.phone}`}
            className="share-qr"
            width={140}
            height={140}
          />
        ) : (
          <div className="share-qr share-qr-pending" aria-hidden />
        )}
        <p className="share-scan-caption">Code scannen zum Anrufen.</p>
        <p className="share-phone">{SITE.phone}</p>
      </div>

      <div className="share-contact-call-wrap">
        <a href={SITE.phoneHref} className="share-submit share-contact-call">
          <span className="share-contact-call-label">
            <Phone className="size-4" aria-hidden />
            Anrufen
          </span>
          <span className="share-contact-call-number">{SITE.phone}</span>
        </a>
      </div>
    </div>
  );
}
