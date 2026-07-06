export type Chapter = {
  id: string;
  title: string;
  pages: string[];
};

export type Manhwa = {
  id: string;
  title: string;
  type: "Манхва" | "Манга" | "Маньхуа";
  cover: string;
  description: string;
  genres: string[];
  rating: number;
  status: "Онгоинг" | "Завершена";
  age: "16+" | "18+";
  chapters: Chapter[];
};

export const manhwas: Manhwa[] = [
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    type: "Манхва",
    cover: "/covers/solo-leveling.jpg",
    description:
      "Охотник Сон Джину становится сильнее после загадочной системы.",
    genres: ["Экшен", "Фэнтези", "Прокачка"],
    rating: 9.8,
    status: "Завершена",
    age: "16+",
    chapters: [
      {
        id: "1",
        title: "Глава 0 — Пролог",
        pages: [
          "/chapters/solo-leveling/1/1-0.jpg",
          "/chapters/solo-leveling/1/2-0.jpg",
          "/chapters/solo-leveling/1/3-0.jpg",
          "/chapters/solo-leveling/1/4-0.jpg",
          "/chapters/solo-leveling/1/5-0.jpg",
          "/chapters/solo-leveling/1/6-0.jpg",
          "/chapters/solo-leveling/1/7-0.jpg",
          "/chapters/solo-leveling/1/8-0.jpg",
        ],
      },
      {
        id: "2",
        title: "Глава 1",
        pages: [
          "/chapters/solo-leveling/2/1-1.jpg",
          "/chapters/solo-leveling/2/1-2.jpg",
          "/chapters/solo-leveling/2/1-3.jpg",
          "/chapters/solo-leveling/2/1-4.jpg",
          "/chapters/solo-leveling/2/1-5.jpg",
          "/chapters/solo-leveling/2/1-6.jpg",
          "/chapters/solo-leveling/2/1-7.jpg",
          "/chapters/solo-leveling/2/1-8.jpg",
          "/chapters/solo-leveling/2/1-9.jpg",
          "/chapters/solo-leveling/2/1-10.jpg",
          "/chapters/solo-leveling/2/1-11.jpg",
          "/chapters/solo-leveling/2/1-12.jpg",
          "/chapters/solo-leveling/2/1-13.jpg",
          "/chapters/solo-leveling/2/1-14.jpg",
        ],
      },
    ],
  },
];