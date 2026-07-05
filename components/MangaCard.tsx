import Link from "next/link";
import type { Manhwa } from "@/data/manhwas";

export function MangaCard({ item }: { item: Manhwa }) {
  return (
    <Link
      href={`/title/${item.id}`}
      className="block rounded-3xl bg-zinc-900 p-3 shadow-md shadow-black/40 transition hover:bg-zinc-800"
    >
      <div className="mb-3 flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-zinc-800 text-5xl">
        {item.emoji}
      </div>

      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-violet-300">{item.type}</span>
        <span className="text-xs text-pink-300">{item.age}</span>
      </div>

      <h3 className="font-bold leading-tight">{item.title}</h3>

      <p className="text-sm text-zinc-400">{item.genres.join(" • ")}</p>

      <p className="mt-2 text-sm text-yellow-300">
        ⭐ {item.rating} • {item.chapters} глав
      </p>
    </Link>
  );
}