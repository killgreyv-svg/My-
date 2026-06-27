export type Zone = "north" | "central" | "west" | "east" | "south";

export interface Dish {
  name: string;
  description: string;
  weight: string;
  signature?: boolean;
}

export interface Region {
  slug: string;
  name: string;
  zone: Zone;
  gridArea: string;
  theme: "light" | "dark";
  intro: string;
  dishes: Dish[];
}

export const zoneInfo: Record<Zone, { label: string; color: string }> = {
  north: { label: "Північ України", color: "#8FAE6B" },
  central: { label: "Центральна Україна", color: "#4F9099" },
  west: { label: "Західна Україна", color: "#9B7FB0" },
  east: { label: "Східна Україна", color: "#C9707A" },
  south: { label: "Південна Україна", color: "#E0954B" },
};

export const regions: Region[] = [
  {
    slug: "volyn",
    name: "Волинь",
    zone: "north",
    gridArea: "volyn",
    theme: "light",
    intro: "Лісовий край з простою та сердечною кухнею.",
    dishes: [
      { name: "Клецки картопляні з м'ясом", description: "Картопляні клецки, тушковані з домашнім м'ясом та цибулею.", weight: "250 г", signature: true },
      { name: "Капусняк волинський", description: "Наваристий суп на квашеній капусті з копченостями.", weight: "300 мл" },
      { name: "Деруни зі сметаною", description: "Хрусткі картопляні деруни, подаються з густою сметаною.", weight: "220 г" },
    ],
  },
  {
    slug: "polissya",
    name: "Полісся",
    zone: "north",
    gridArea: "polissya",
    theme: "dark",
    intro: "Грибні ліси та болота дали цьому краю особливий смак.",
    dishes: [
      { name: "Юшка грибна з перловкою", description: "Густа юшка з лісових грибів та перлової каші.", weight: "300 мл", signature: true },
      { name: "Картопляники з грибами", description: "Картопляні оладки з начинкою з лісових грибів.", weight: "230 г" },
      { name: "Чорний хліб з салом", description: "Домашній чорний хліб із шматочком копченого сала.", weight: "150 г" },
    ],
  },
  {
    slug: "sivershchyna",
    name: "Сіверщина",
    zone: "north",
    gridArea: "sivershchyna",
    theme: "light",
    intro: "Прикордонний край з власною випічкою та теплими стравами.",
    dishes: [
      { name: "Перепічка", description: "Пиріжок з начинкою, смажений у фритюрі до золотистої скоринки.", weight: "180 г", signature: true },
      { name: "Куліш сіверський", description: "Густа пшоняна каша зі смаженим салом та цибулею.", weight: "250 г" },
      { name: "Квашені огірки", description: "Домашні квашені огірки за традиційним рецептом.", weight: "150 г" },
    ],
  },
  {
    slug: "halychyna",
    name: "Галичина",
    zone: "west",
    gridArea: "halychyna",
    theme: "dark",
    intro: "Карпатське передгір'я з виразними сирними та м'ясними смаками.",
    dishes: [
      { name: "Банош з бринзою", description: "Кукурудзяна каша на вершках, посипана солоною бринзою.", weight: "250 г", signature: true },
      { name: "Жур галицький", description: "Кислий суп на житній заквасці з копченостями.", weight: "300 мл" },
      { name: "Шинка домашня", description: "В'ялена домашня шинка із прянощами.", weight: "150 г" },
    ],
  },
  {
    slug: "podillya",
    name: "Поділля",
    zone: "west",
    gridArea: "podillya",
    theme: "dark",
    intro: "Хлібний край із щедрими домашніми стравами.",
    dishes: [
      { name: "Вареники з картоплею", description: "Домашні вареники з картопляною начинкою та смаженою цибулею.", weight: "250 г", signature: true },
      { name: "Голубці з м'ясом", description: "Капустяні голубці, тушковані в томатній підливі.", weight: "250 г" },
      { name: "Деруни", description: "Хрусткі картопляні деруни, подаються зі сметаною.", weight: "220 г" },
    ],
  },
  {
    slug: "zakarpattya",
    name: "Закарпаття",
    zone: "west",
    gridArea: "zakarpattya",
    theme: "light",
    intro: "Угорські та румунські мотиви в гострих наваристих стравах.",
    dishes: [
      { name: "Бограч (угорський гуляш)", description: "Гострий м'ясний гуляш з кількох видів м'яса та паприкою.", weight: "300 мл", signature: true },
      { name: "Шаркі", description: "В'ялена шинка домашнього копчення.", weight: "150 г" },
      { name: "Палачинта", description: "Тонкі млинці з солодкою або сирною начинкою.", weight: "200 г" },
    ],
  },
  {
    slug: "karpaty",
    name: "Карпати",
    zone: "west",
    gridArea: "karpaty",
    theme: "dark",
    intro: "Гірська кухня на основі бринзи, кулеші та домашніх продуктів.",
    dishes: [
      { name: "Бриндзові кнедлики", description: "Картопляні кнедлики з начинкою з овечої бринзи.", weight: "250 г", signature: true },
      { name: "Гуслянка", description: "Кисломолочний напій із гірських пасовищ.", weight: "250 мл" },
      { name: "Кулеша з бринзою", description: "Кукурудзяна каша, подається з бринзою та маслом.", weight: "220 г" },
    ],
  },
  {
    slug: "bessarabiya",
    name: "Бессарабія",
    zone: "west",
    gridArea: "bessarabiya",
    theme: "light",
    intro: "Мультикультурний край з молдовськими нотками у стравах.",
    dishes: [
      { name: "Мамалига з бринзою", description: "Кукурудзяна каша з бринзою та шкварками.", weight: "250 г", signature: true },
      { name: "Плацинда", description: "Тонкий пиріг з сирною або картопляною начинкою.", weight: "200 г" },
      { name: "Зама", description: "Кислуватий курячий суп із заправкою з кваску.", weight: "300 мл" },
    ],
  },
  {
    slug: "naddniprianshchyna",
    name: "Наддніпрянщина",
    zone: "central",
    gridArea: "naddniprianshchyna",
    theme: "dark",
    intro: "Серце України з класичною домашньою кухнею.",
    dishes: [
      { name: "Вареники з картоплею", description: "Класичні вареники з картоплею та підсмаженою цибулею.", weight: "250 г", signature: true },
      { name: "Борщ наддніпрянський", description: "Червоний борщ на яловичому бульйоні з пампушками.", weight: "300 мл" },
      { name: "Кисіль овес'яний", description: "Густий вівсяний кисіль за давнім рецептом.", weight: "200 мл" },
    ],
  },
  {
    slug: "poltavshchyna",
    name: "Полтавщина",
    zone: "central",
    gridArea: "poltavshchyna",
    theme: "light",
    intro: "Край галушок та гостинних страв із насиченим смаком.",
    dishes: [
      { name: "Вареники з картоплею", description: "Домашні вареники з картопляною начинкою та смаженою цибулею.", weight: "250 г", signature: true },
      { name: "Голубці з м'ясом", description: "Капустяні голубці, тушковані в томатній підливі.", weight: "250 г" },
      { name: "Деруни", description: "Хрусткі картопляні деруни, подаються зі сметаною.", weight: "220 г" },
    ],
  },
  {
    slug: "slobozhanshchyna",
    name: "Слобожанщина",
    zone: "east",
    gridArea: "slobozhanshchyna",
    theme: "dark",
    intro: "Гостинний край із наваристим борщем та домашньою випічкою.",
    dishes: [
      { name: "Борщ із пампушками з часником", description: "Наваристий борщ з пухкими пампушками та часниковою заправкою.", weight: "300 мл", signature: true },
      { name: "Сальце з хроном", description: "Домашнє сало з гострим хроновим соусом.", weight: "150 г" },
      { name: "Кисіль ягідний", description: "Густий ягідний кисіль домашнього приготування.", weight: "200 мл" },
    ],
  },
  {
    slug: "dnipro-zaporizhzhya",
    name: "Подніпров'я і Запоріжжя",
    zone: "east",
    gridArea: "dnipro",
    theme: "light",
    intro: "Козацька кухня — щедра, ситна, з характером.",
    dishes: [
      { name: "Козацький куліш з салом", description: "Густа каша з пшоном, салом та смаженою цибулею.", weight: "280 г", signature: true },
      { name: "Тарань сушена", description: "В'ялена дунайська риба до пива та закусок.", weight: "150 г" },
      { name: "Книші", description: "Здобні пиріжки з начинкою з картоплі чи капусти.", weight: "180 г" },
    ],
  },
  {
    slug: "pryazovya",
    name: "Приазов'я",
    zone: "east",
    gridArea: "pryazovya",
    theme: "dark",
    intro: "Прибережний край із багатою рибною кухнею.",
    dishes: [
      { name: "Риба та рапани", description: "Свіжа азовська риба та рапани, приготовані на грилі.", weight: "280 г", signature: true },
      { name: "Юшка рибна", description: "Наваристий рибний суп з кореневими овочами.", weight: "300 мл" },
      { name: "Кефаль на грилі", description: "Кефаль, запечена на відкритому вогні з травами.", weight: "250 г" },
    ],
  },
  {
    slug: "prychornomorya",
    name: "Причорномор'я",
    zone: "south",
    gridArea: "prychornomorya",
    theme: "light",
    intro: "Морський край із вишуканими стравами з морепродуктів.",
    dishes: [
      { name: "Мідії у вершковому соусі", description: "Чорноморські мідії у нежирному вершковому соусі з часником.", weight: "250 г", signature: true },
      { name: "Скумбрія на мангалі", description: "Скумбрія, запечена на відкритому вогні з лимоном.", weight: "230 г" },
      { name: "Грецький салат по-чорноморськи", description: "Свіжі овочі з оливками та солоним сиром.", weight: "200 г" },
    ],
  },
  {
    slug: "tavriya",
    name: "Таврія",
    zone: "south",
    gridArea: "tavriya",
    theme: "dark",
    intro: "Кримськотатарські мотиви у південній кухні Таврії.",
    dishes: [
      { name: "Чебуреки", description: "Хрусткі смажені пиріжки з соковитою м'ясною начинкою.", weight: "220 г", signature: true },
      { name: "Кримськотатарський плов", description: "Розсипчастий плов з баранини та сухофруктів.", weight: "280 г" },
      { name: "Шурпа", description: "Наваристий баранячий суп з овочами.", weight: "300 мл" },
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
