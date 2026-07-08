import Link from "next/link";

type Props = {
  item: {
    id: string;
    title: string;
    cover: string | null;
    type: string | null;
    age_rating: string | null;
    genres: string | null;
    rating: number | null;
    chapters?: number | null;
  };
};

export function MangaCard({ item }: Props) {
  const genres = item.genres
    ? item.genres.split(",").join(" • ")
    : "";

  return (
    <Link
      href={"/title/" + item.id}
      className="block rounded-3xl bg-zinc-900 p-3 shadow-md shadow-black/40 transition hover:bg-zinc-800"
    >
      <div className="mb-3 aspect-[3/4] overflow-hidden rounded-2xl">
        <img
          src={item.cover || "/placeholder.jpg"}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-violet-300">
          {item.type || "Манхва"}
        </span>

        <span className="text-xs text-pink-300">
          {item.age_rating || ""}
        </span>
      </div>

      <h3 className="font-bold leading-tight">
        {item.title}
      </h3>

      <p className="text-sm text-zinc-400">
        {genres}
      </p>

      <p className="mt-2 text-sm text-yellow-300">
        ⭐ {item.rating ?? "-"} • {item.chapters ?? 0} глав
      </p>
    </Link>
  );
}