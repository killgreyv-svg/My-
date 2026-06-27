import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex flex-col items-center leading-none group">
      <span
        className={`font-logo text-3xl sm:text-4xl tracking-wide ${
          light ? "text-cream" : "text-maroon"
        } group-hover:opacity-80 transition-opacity`}
      >
        Кобзар
      </span>
      <span
        className={`text-[10px] sm:text-xs tracking-[0.25em] font-semibold mt-1 ${
          light ? "text-cream/80" : "text-maroon/80"
        }`}
      >
        ВСЕУКРАЇНСЬКА КУХНЯ
      </span>
    </Link>
  );
}
