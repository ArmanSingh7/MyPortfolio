import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Link preview card shown when the site URL is shared on LinkedIn,
 * Slack, WhatsApp or X. Generated at build time.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f7f7f4",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#5b6270",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 10,
              background: "#2451ff",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            AS
          </div>
          Portfolio
        </div>

        <div
          style={{
            marginTop: 40,
            color: "#0e1116",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            marginTop: 16,
            color: "#2451ff",
            fontSize: 38,
            fontWeight: 600,
          }}
        >
          {`${site.role} · ${site.tagline}`}
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          {["Java", "Spring Boot", ".NET", "React", "SQL", "AWS"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #d4d1c8",
                color: "#2a2f38",
                fontSize: 24,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
