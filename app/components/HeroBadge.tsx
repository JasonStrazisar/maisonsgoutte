"use client";

import { useDialKit } from "dialkit";

function hexToRgba(hex: string, alpha: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return `rgba(255,255,255,${alpha})`;
  return `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${alpha})`;
}

const dialConfig = {
  Style: {
    color: { type: "color" as const, default: "#ffffff" },
    opacity: [0.6, 0, 1] as [number, number, number],
    size: [11, 8, 16] as [number, number, number],
    weight: [600, 300, 900] as [number, number, number],
    letterSpacing: [3, 0, 8] as [number, number, number],
  },
};

export default function HeroBadge() {
  const d = useDialKit("Hero Badge", dialConfig);

  return (
    <div
      className="overline"
      style={{
        color: hexToRgba(d.Style.color, d.Style.opacity),
        fontSize: d.Style.size,
        fontWeight: d.Style.weight,
        letterSpacing: d.Style.letterSpacing,
      }}
    >
      Élections municipales 2026
    </div>
  );
}
