import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cineora — A Living Cinematic Civilization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #08090D 0%, #0A0F2C 50%, #1a0a3a 100%)",
          color: "#F6F8FF",
          fontFamily: "serif",
        }}
      >
        {/* Top mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 22,
            letterSpacing: "0.3em",
            color: "#00F5FF",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              background: "#00F5FF",
              borderRadius: 2,
              transform: "rotate(45deg)",
            }}
          />
          <span>cineora · genesis</span>
        </div>

        {/* Center headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 400,
              lineHeight: 0.95,
              maxWidth: 900,
            }}
          >
            A Living
            <br />
            Cinematic
            <br />
            <span style={{ color: "#00F5FF", fontStyle: "italic" }}>
              Civilization
            </span>
            <span style={{ color: "#9B4DFF" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(246,248,255,0.7)",
              maxWidth: 800,
              fontFamily: "sans-serif",
              fontWeight: 300,
            }}
          >
            Where imagination becomes ownership.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "rgba(246,248,255,0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>cineora-mocha.vercel.app</span>
          <span>v1.0.0</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
