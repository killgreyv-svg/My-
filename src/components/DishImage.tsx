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
