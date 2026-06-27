import Link from "next/link";
import { regions, zoneInfo } from "@/lib/regions";

export default function UkraineMap() {
  return (
    <div>
      <div className="ukraine-map">
        {regions.map((region) => {
          const signature = region.dishes.find((d) => d.signature) ?? region.dishes[0];
          return (
            <Link
              key={region.slug}
              href={`/menu/${region.slug}`}
              className="map-tile"
              style={{ gridArea: region.gridArea, backgroundColor: zoneInfo[region.zone].color }}
            >
              <span>{region.name}</span>
              <span className="dish">{signature.name}</span>
            </Link>
          );
        })}
      </div>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs sm:text-sm">
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
