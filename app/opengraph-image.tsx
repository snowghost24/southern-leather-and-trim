import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: Katzkin leather interiors and auto detailing in Ocoee, Florida`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when the site is shared in a text or on social. */
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
          background: "#2a1b17",
          color: "#efe6d5",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 40, marginTop: 28, color: "#c9bba6" }}>
            Katzkin leather interiors and auto detailing
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: 0,
              borderTop: "5px dashed #c9813f",
              marginBottom: 36,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 40,
            }}
          >
            <span>{site.phone.display}</span>
            <span>
              {site.address.street} {site.address.city}, {site.address.state}
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
