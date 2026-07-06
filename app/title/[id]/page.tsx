import { manhwas } from "@/data/manhwas";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function TitlePage({ params }: PageProps) {
  const { id } = await params;
  const title = manhwas.find((item) => item.id === id);

  if (!title) {
    return (
      <main className="min-h-screen bg-[#09090b] p-6 text-white">
        Тайтл не найден
      </main>
    );
  }

  const firstChapter = title.chapters[0];

  return (
    <main className="min-h-screen bg-[#09090b] p-6 pb-28 text-white">
      <img
        src={title.cover}
        alt={title.title}
        className="mb-5 h-96 w-full rounded-3xl object-cover"
      />

      <h1 className="mb-2 text-4xl font-black">{title.title}</h1>
      <p className="mb-3 text-zinc-400">{title.genres.join(" • ")}</p>
      <p className="mb-5 text-zinc-300">{title.description}</p>

      <div className="mb-6 flex gap-2">
        <span className="rounded-full bg-violet-600 px-3 py-1 text-sm">
          ⭐ {title.rating}
        </span>
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
          {title.status}
        </span>
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
          {title.age}
        </span>
      </div>

      {firstChapter && (
        <Link
href={"/title/" + title.id + "/chapter/" + firstChapter.id}          className="mb-6 block rounded-2xl bg-violet-600 py-4 text-center font-bold"
        >
          📖 Читать {firstChapter.title}
        </Link>
      )}

      <h2 className="mb-3 text-2xl font-bold">Главы</h2>

      <div className="grid gap-3">
        {title.chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={"/title/" + title.id + "/chapter/" + chapter.id}
            className="rounded-2xl bg-zinc-900 p-4"
          >
            {chapter.title}
          </Link>
        ))}
      </div>
    </main>
  );
}