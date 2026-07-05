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
        <h1 className="text-3xl font-black">Тайтл не найден</h1>
        <Link href="/catalog" className="mt-4 inline-block text-violet-400">
          Назад в каталог
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090b] pb-28 text-white">
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-violet-700 via-fuchsia-700 to-zinc-900 text-8xl">
        {title.emoji}
      </div>

      <section className="mx-auto max-w-md p-5">
        <Link href="/catalog" className="text-sm text-violet-300">
          Назад в каталог
        </Link>

        <div className="mb-3 mt-5 flex items-center justify-between">
          <span className="rounded-full bg-violet-600 px-3 py-1 text-sm">
            {title.type}
          </span>
          <span className="font-bold text-yellow-400">⭐ {title.rating}</span>
        </div>

        <h1 className="mb-2 text-4xl font-black">{title.title}</h1>

        <p className="mb-6 text-zinc-400">{title.genres.join(" • ")}</p>

        <div className="mb-6 grid grid-cols-2 gap-3">
          <Link
            href={"/title/" + title.id + "/read"}
            className="rounded-2xl bg-violet-600 py-4 text-center font-bold"
          >
            📖 Читать
          </Link>

          <button className="rounded-2xl bg-zinc-900 py-4 font-bold">
            ❤️ В библиотеку
          </button>
        </div>

        <div className="mb-6 rounded-3xl bg-zinc-900 p-5">
          <h2 className="mb-3 text-2xl font-bold">Описание</h2>
          <p className="leading-7 text-zinc-300">{title.description}</p>
        </div>

        <div className="rounded-3xl bg-zinc-900 p-5">
          <h2 className="mb-5 text-2xl font-bold">Последние главы</h2>

          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-zinc-800 py-4"
            >
              <span>Глава {title.chapters - index}</span>
              <span className="text-zinc-500">→</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}