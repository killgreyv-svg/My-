import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center group">
      <Image
        src={light ? "/images/logo-cream.png" : "/images/logo-maroon.png"}
        alt="Кобзар — всеукраїнська кухня"
        width={1009}
        height={267}
        priority
        className="h-12 sm:h-16 w-auto group-hover:opacity-80 transition-opacity"
      />
    </Link>
  );
}
