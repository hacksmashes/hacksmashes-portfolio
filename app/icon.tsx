import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0f12",
          color: "#7c93ff",
          fontSize: 18,
          fontFamily: "monospace",
          borderRadius: 6,
        }}
      >
        {"</>"}
      </div>
    ),
    { ...size },
  );
}
