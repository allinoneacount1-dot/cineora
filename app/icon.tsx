import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cineora";
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
          background: "#08090D",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 4,
            background:
              "radial-gradient(circle at 30% 30%, #00F5FF 0%, transparent 60%)",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            width: 14,
            height: 14,
            background: "#00F5FF",
            transform: "rotate(45deg)",
            boxShadow: "0 0 8px rgba(0,245,255,0.6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
