import { ImageResponse } from "next/og";

export const alt = "Aiveeno | AI Transformation & Automation Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111312",
          color: "#F5F7F6",
          padding: "64px 72px",
          border: "1px solid rgba(245, 247, 246, 0.14)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "2px",
              backgroundColor: "#C9A35B",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#AEB3AF",
              fontWeight: 500,
            }}
          >
            Aiveeno Advisory
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              color: "#F5F7F6",
            }}
          >
            AI Transformation & Automation Solutions.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#AEB3AF",
              fontWeight: 400,
            }}
          >
            Connecting business-first AI transformation with cloud, data, DevOps and software engineering foundations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "1px solid rgba(245, 247, 246, 0.14)",
            fontSize: 20,
            color: "#9FA5A1",
          }}
        >
          <span>Enterprise AI · Cloud & Technology</span>
          <span style={{ color: "#C9A35B", letterSpacing: "0.06em" }}>
            aiveeno.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

