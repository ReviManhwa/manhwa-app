export type Collection = {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
  visibility: "private" | "public";
  description: string;
};

export const collections: Collection[] = [
  {
    id: "reading",
    name: "Читаю",
    icon: "📖",
    color: "from-violet-600 to-fuchsia-600",
    count: 12,
    visibility: "private",
    description: "То, что читаю сейчас.",
  },
  {
    id: "favorites",
    name: "Любимые",
    icon: "❤️",
    color: "from-pink-600 to-rose-600",
    count: 8,
    visibility: "public",
    description: "Мои самые любимые тайтлы.",
  },
  {
    id: "glass",
    name: "Стекло",
    icon: "😭",
    color: "from-blue-600 to-indigo-600",
    count: 5,
    visibility: "public",
    description: "Истории, которые пробивают на эмоции.",
  },
  {
    id: "later",
    name: "На потом",
    icon: "⏳",
    color: "from-amber-600 to-orange-600",
    count: 21,
    visibility: "private",
    description: "Хочу прочитать позже.",
  },
];