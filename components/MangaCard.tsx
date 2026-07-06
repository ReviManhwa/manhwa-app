import Link from "next/link";
import type { Manhwa } from "@/data/manhwas";

type Props = {
  item: Manhwa;
};

export function MangaCard({ item }: Props) {
  return (
    <Link
      href={"/title/&{item.id}"}
      className="block rounded-3xl bg-zinc-900 p-3 shadow-md shadow-black/40 transition hover:bg-zinc-800"
    >
      <div className="mb-3 overflow-hidden rounded-2xl aspect-[3/4]">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-violet-300">{item.type}</span>
        <span className="text-xs text-pink-300">{item.age}</span>
      </div>

      <h3 className="font-bold leading-tight">{item.title}</h3>

      <p className="text-sm text-zinc-400">
        {item.genres.join(" • ")}
      </p>

      <p className="mt-2 text-sm text-yellow-300">
        ⭐ {item.rating} • {item.chapters.length} глав
      </p>
    </Link>
  );
}