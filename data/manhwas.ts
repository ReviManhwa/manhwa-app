export type Manhwa = {
  id: string;
  title: string;
  type: "Манхва" | "Манга" | "Маньхуа";
  genres: string[];
  rating: number;
  chapters: number;
  emoji: string;
  status: "Онгоинг" | "Завершена";
  age: "16+" | "18+";
  description: string;
};

export const manhwas: Manhwa[] = [
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    type: "Манхва",
    genres: ["Экшен", "Фэнтези"],
    rating: 9.8,
    chapters: 200,
    emoji: "⚡",
    status: "Завершена",
    age: "16+",
    description: "Самый слабый охотник становится сильнейшим благодаря загадочной системе повышения уровня.",
  },
  {
    id: "omniscient-reader",
    title: "Omniscient Reader",
    type: "Манхва",
    genres: ["Экшен", "Апокалипсис"],
    rating: 9.6,
    chapters: 206,
    emoji: "📚",
    status: "Онгоинг",
    age: "16+",
    description: "Мир романа становится реальностью, и единственный читатель знает, как выжить.",
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    type: "Манга",
    genres: ["Экшен", "Хоррор"],
    rating: 9.4,
    chapters: 170,
    emoji: "🪚",
    status: "Онгоинг",
    age: "18+",
    description: "История героя, который оказывается втянут в опасный мир демонов.",
  },
  {
    id: "eleceed",
    title: "Eleceed",
    type: "Манхва",
    genres: ["Комедия", "Экшен"],
    rating: 9.5,
    chapters: 300,
    emoji: "🐱",
    status: "Онгоинг",
    age: "16+",
    description: "Добрая и динамичная история про сверхспособности, дружбу и кота.",
  },
];