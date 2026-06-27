"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { regions, zoneInfo } from "@/lib/regions";
import { oblastPaths, regionLabelPositions, UKRAINE_VIEWBOX } from "@/lib/ukraine-map-data";

function wrapWords(text: string, maxLen: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxLen && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
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
                const nameLines = wrapWords(region.name.toUpperCase(), 13);
                const dish = region.dishes.find((d) => d.signature) ?? region.dishes[0];
                const dishLines = wrapWords(dish.name, 18);
                const nameLineHeight = 9.5;
                const dishLineHeight = 7.5;
                const gap = 2.5;
                const totalHeight =
                  nameLines.length * nameLineHeight + gap + dishLines.length * dishLineHeight;
                const y = pos.y - totalHeight / 2 + nameLineHeight * 0.8;
                return (
                  <g style={{ pointerEvents: "none" }}>
                    <text
                      x={pos.x}
                      y={y}
                      textAnchor="middle"
                      fontFamily="var(--font-logo)"
                      fontSize={9}
                      fontWeight={700}
                      fill="var(--ink)"
                      stroke="var(--cream)"
                      strokeWidth={2}
                      paintOrder="stroke"
                    >
                      {nameLines.map((line, i) => (
                        <tspan key={i} x={pos.x} dy={i === 0 ? 0 : nameLineHeight}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                    <text
                      x={pos.x}
                      y={y + (nameLines.length - 1) * nameLineHeight + gap + dishLineHeight}
                      textAnchor="middle"
                      fontFamily="var(--font-body)"
                      fontSize={6.5}
                      fill="var(--ink)"
                      stroke="var(--cream)"
                      strokeWidth={1.6}
                      paintOrder="stroke"
                    >
                      {dishLines.map((line, i) => (
                        <tspan key={i} x={pos.x} dy={i === 0 ? 0 : dishLineHeight}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
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
