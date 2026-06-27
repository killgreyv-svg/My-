import Link from "next/link";
import type { Region } from "@/lib/regions";
import { zoneInfo } from "@/lib/regions";
import DishImage from "./DishImage";
import Logo from "./Logo";

const ADDITIVES = ["Сметана", "Хліб", "Овочева нарізка", "Соус домашній"];

export default function RegionMenu({ region }: { region: Region }) {
  const dark = region.theme === "dark";

  return (
    <main
      className={`flex-1 ${dark ? "bg-maroon-dark text-cream" : "bg-cream text-ink"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <Logo light={dark} />
          <Link
            href="/"
            className={`text-sm underline-offset-4 hover:underline ${
              dark ? "text-cream/80" : "text-maroon/80"
            }`}
          >
            ← До мапи регіонів
          </Link>
        </div>

        <div className="flex justify-center mb-3">
          <div
            className={`ribbon px-12 py-3 ${dark ? "bg-cream" : "bg-maroon"}`}
          >
            <h1
              className={`font-logo text-2xl sm:text-3xl tracking-wide ${
                dark ? "text-maroon-dark" : "text-cream"
              }`}
            >
              {region.name}
            </h1>
          </div>
        </div>

        <p
          className={`text-center text-sm sm:text-base mb-2 ${
            dark ? "text-cream/80" : "text-ink/70"
          }`}
        >
          {region.intro}
        </p>
        <p
          className={`text-center text-xs uppercase tracking-widest mb-10 ${
            dark ? "text-cream/50" : "text-ink/40"
          }`}
          style={{ color: zoneInfo[region.zone].color }}
        >
          {zoneInfo[region.zone].label}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {region.dishes.map((dish) => (
            <div key={dish.name} className="flex flex-col gap-3">
              <DishImage name={dish.name} dark={dark} />
              <div
                className={`relative px-4 py-4 border-2 ${
                  dark ? "border-cream/60" : "border-maroon/50"
                } ${dish.signature ? (dark ? "bg-cream text-maroon-dark" : "bg-maroon text-cream") : ""}`}
              >
                {dish.signature && (
                  <span
                    className={`absolute -top-3 -right-3 text-[9px] rounded-full w-14 h-14 flex items-center justify-center text-center border ${
                      dark ? "bg-maroon-dark text-cream border-cream/60" : "bg-cream text-maroon border-maroon/50"
                    }`}
                  >
                    СТРАВА ВІД ШЕФА
                  </span>
                )}
                <h2 className="font-semibold uppercase text-sm sm:text-base tracking-wide mb-2">
                  {dish.name}
                </h2>
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-3">
                  {dish.description}
                </p>
                <p className="text-xs italic opacity-70">{dish.weight}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 pt-6 border-t flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm ${
            dark ? "border-cream/30" : "border-maroon/30"
          }`}
        >
          <span className="font-semibold uppercase tracking-wide">Додатки:</span>
          {ADDITIVES.map((item, i) => (
            <span key={item} className="opacity-80">
              {item}
              {i < ADDITIVES.length - 1 && <span className="mx-3 opacity-50">•</span>}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
