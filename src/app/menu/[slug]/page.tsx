import { notFound } from "next/navigation";
import { getRegion, regions } from "@/lib/regions";
import RegionMenu from "@/components/RegionMenu";

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getRegion(slug);
  return {
    title: region ? `${region.name} — Кобзар` : "Кобзар",
  };
}

export default async function RegionMenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  return <RegionMenu region={region} />;
}
