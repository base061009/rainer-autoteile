import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Rainer Autoteile, Ihr Großhandelspartner für ganz Österreich";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OgShareImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #17A9C4 0%, #0E7A8F 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: 28,
            padding: "40px 56px",
          }}
        >
          <img src={logoSrc} width={680} height={165} />
        </div>
        <div
          style={{
            marginTop: 40,
            color: "#ffffff",
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: 0,
            textAlign: "center",
          }}
        >
          Ihr Großhandelspartner für ganz Österreich
        </div>
      </div>
    ),
    { ...size },
  );
}
