import Image from "next/image";

const PHOTO_BY_NAME: Record<string, string> = {
  "Вареники з картоплею": "/images/dishes/vareniky-z-kartopleyu.jpg",
  "Голубці з м'ясом": "/images/dishes/holubtsi-z-myasom.jpg",
  "Деруни": "/images/dishes/deruny.jpg",
};

const EMOJI_BY_KEYWORD: [string, string][] = [
  ["вареник", "🥟"],
  ["голубц", "🥬"],
  ["дерун", "🥔"],
  ["борщ", "🍲"],
  ["юшка", "🍜"],
  ["суп", "🍜"],
  ["риба", "🐟"],
  ["рапан", "🦪"],
  ["мідії", "🦪"],
  ["кефаль", "🐟"],
  ["скумбрі", "🐟"],
  ["чебурек", "🥟"],
  ["плов", "🍛"],
  ["шурпа", "🍲"],
  ["хліб", "🍞"],
  ["сало", "🥓"],
  ["шинка", "🥓"],
  ["бограч", "🍖"],
  ["гуляш", "🍖"],
  ["кулі", "🍲"],
  ["банош", "🌽"],
  ["мамалиг", "🌽"],
  ["кнедлик", "🥟"],
  ["палачинт", "🥞"],
  ["плацинд", "🥧"],
  ["книш", "🥐"],
  ["сметан", "🥛"],
  ["гуслянк", "🥛"],
  ["кисіль", "🍯"],
  ["салат", "🥗"],
  ["огірк", "🥒"],
];

function pickEmoji(name: string): string {
  const lower = name.toLowerCase();
  const match = EMOJI_BY_KEYWORD.find(([kw]) => lower.includes(kw));
  return match ? match[1] : "🍽️";
}

export default function DishImage({ name, dark = false }: { name: string; dark?: boolean }) {
  const photo = PHOTO_BY_NAME[name];

  if (photo) {
    return (
      <div className="aspect-[4/5] w-full rounded-md overflow-hidden relative">
        <Image src={photo} alt={name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`aspect-[4/5] w-full rounded-md flex items-center justify-center text-5xl ${
        dark ? "bg-maroon-dark/40" : "bg-maroon/10"
      }`}
      aria-hidden
    >
      {pickEmoji(name)}
    </div>
  );
}
