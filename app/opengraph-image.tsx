import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0d0f12",
          color: "#edeef0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#7c93ff", fontSize: 22, marginBottom: 24 }}>
          {`// ${siteConfig.name}`}
        </div>
        <div style={{ display: "flex", fontSize: 62, lineHeight: 1.15, maxWidth: 900 }}>
          Building fast, scalable and modern web experiences.
        </div>
        <div style={{ display: "flex", color: "#9aa1ac", fontSize: 26, marginTop: 32 }}>
          {siteConfig.role} · React · Next.js · Node.js
        </div>
      </div>
    ),
    { ...size },
  );
}
