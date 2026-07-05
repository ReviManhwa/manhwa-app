export type UserProfile = {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  banner: string;
  followers: number;
  reading: string[];
  favorites: string[];
};

export const users: UserProfile[] = [
  {
    id: "revi",
    username: "revi",
    displayName: "Revi",
    avatar: "🌸",
    bio: "Люблю манхвы, романтику, стекло и красивые арты.",
    banner: "from-violet-700 to-fuchsia-700",
    followers: 1280,
    reading: ["solo-leveling", "omniscient-reader"],
    favorites: ["eleceed", "chainsaw-man"],
  },
  {
    id: "moonreader",
    username: "moonreader",
    displayName: "MoonReader",
    avatar: "🌙",
    bio: "Читаю по ночам и собираю лучшие подборки.",
    banner: "from-blue-700 to-indigo-900",
    followers: 642,
    reading: ["eleceed"],
    favorites: ["solo-leveling"],
  },
];