"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { regions, zoneInfo } from "@/lib/regions";
import { oblastPaths, regionLabelPositions, UKRAINE_VIEWBOX } from "@/lib/ukraine-map-data";

function labelLines(name: string): string[] {
  if (name.length <= 11) return [name.toUpperCase()];
  const words = name.split(" ");
  if (words.length === 1) return [name.toUpperCase()];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" ").toUpperCase(), words.slice(mid).join(" ").toUpperCase()];
}

export default function UkraineMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const pathsByRegion = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const oblast of oblastPaths) {
      const list = map.get(oblast.regionSlug) ?? [];
      list.push(oblast.d);
      map.set(oblast.regionSlug, list);
    }
    return map;
  }, []);

  const hoveredRegion = regions.find((r) => r.slug === hovered);
  const hoveredDish = hoveredRegion
    ? hoveredRegion.dishes.find((d) => d.signature) ?? hoveredRegion.dishes[0]
    : null;

  return (
    <div>
      <svg
        viewBox={UKRAINE_VIEWBOX}
        className="ukraine-svg-map w-full max-w-2xl mx-auto"
        role="img"
        aria-label="Інтерактивна мапа регіонів України"
      >
        {regions.map((region) => {
          const paths = pathsByRegion.get(region.slug) ?? [];
          return (
            <g
              key={region.slug}
              className="region-group"
              role="link"
              tabIndex={0}
              aria-label={`${region.name} — відкрити меню`}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/menu/${region.slug}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(`/menu/${region.slug}`);
                }
              }}
              onMouseEnter={() => setHovered(region.slug)}
              onMouseLeave={() => setHovered((h) => (h === region.slug ? null : h))}
              onFocus={() => setHovered(region.slug)}
              onBlur={() => setHovered((h) => (h === region.slug ? null : h))}
            >
              {paths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={zoneInfo[region.zone].color}
                  stroke="var(--cream)"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
              ))}
              {(() => {
                const pos = regionLabelPositions[region.slug];
                if (!pos) return null;
                const lines = labelLines(region.name);
                const lineHeight = 9;
                const startY = pos.y - ((lines.length - 1) * lineHeight) / 2;
                return (
                  <text
                    x={pos.x}
                    y={startY}
                    textAnchor="middle"
                    className="region-label"
                    fontSize={8.5}
                    fontWeight={700}
                    fill="var(--cream)"
                    stroke="rgba(0,0,0,0.35)"
                    strokeWidth={0.4}
                    paintOrder="stroke"
                    style={{ pointerEvents: "none" }}
                  >
                    {lines.map((line, i) => (
                      <tspan key={i} x={pos.x} dy={i === 0 ? 0 : lineHeight}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                );
              })()}
            </g>
          );
        })}
      </svg>

      <div className="text-center mt-4 h-10">
        {hoveredRegion && hoveredDish ? (
          <p className="text-sm sm:text-base">
            <span className="font-semibold text-maroon">{hoveredRegion.name}</span>
            <span className="text-ink/60"> — {hoveredDish.name}</span>
          </p>
        ) : (
          <p className="text-sm text-ink/50">Натисніть на регіон, щоб відкрити меню</p>
        )}
      </div>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm">
        {Object.entries(zoneInfo).map(([key, info]) => (
          <li key={key} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: info.color }}
            />
            <span className="text-ink/80">{info.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
