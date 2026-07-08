import Link from "next/link";
import { supabase } from "@/lib/supabase";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function TitlePage({ params }: PageProps) {
  const { id } = await params;

  const { data: title } = await supabase
    .from("manhwas")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  const { data: chapters } = await supabase
    .from("chapters")
    .select("*")
    .eq("manhwa_id", id)
    .order("created_at", { ascending: true });

  if (!title) {
    return (
      <main className="min-h-screen bg-black p-6 text-white">
        Тайтл не найден
      </main>
    );
  }

  const firstChapter = chapters?.[0];
  const genres = title.genres ? title.genres.split(",").map((g: string) => g.trim()) : [];

  return (
    <main className="min-h-screen bg-black pb-28 text-white">
      <section className="mx-auto max-w-md px-5 pt-6">
        {title.cover && (
          <img
            src={title.cover}
            alt={title.title}
            className="mx-auto mb-5 h-[430px] w-full rounded-3xl object-cover"
          />
        )}

        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-violet-300">{title.type || "Манхва"}</p>
            <h1 className="text-3xl font-black">{title.title}</h1>
          </div>

          {title.age_rating && (
            <span className="rounded-full bg-pink-600/20 px-3 py-1 text-sm text-pink-300">
              {title.age_rating}
            </span>
          )}
        </div>

        <div className="mb-5 flex gap-3 text-sm text-zinc-300">
          <span>⭐ {title.rating || "—"}</span>
          <span>📚 {chapters?.length || 0} глав</span>
          <span>{title.year || "—"} г.</span>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3">
          <Info label="Статус" value={title.status} />
          <Info label="Перевод" value={title.translation_status} />
          <Info label="Формат" value={title.format} />
          <Info label="Тип" value={title.type} />
        </div>

        <p className="mb-5 text-zinc-300">
          {title.description || "Описание пока не добавлено"}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-3">
          <Info label="Автор" value={title.author} />
          <Info label="Художник" value={title.artist} />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {genres.map((genre: string) => (
            <span
              key={genre}
              className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
            >
              {genre}
            </span>
          ))}
        </div>

        {firstChapter && (
          <Link
            href={`/title/${title.id}/chapter/${firstChapter.id}`}
            className="mb-6 block rounded-2xl bg-fuchsia-600 py-4 text-center font-bold"
          >
            📖 Читать {firstChapter.title}
          </Link>
        )}

        <h2 className="mb-3 text-2xl font-bold">Главы</h2>

        <div className="grid gap-3">
          {(chapters || []).map((chapter) => (
            <Link
              key={chapter.id}
              href={`/title/${title.id}/chapter/${chapter.id}`}
              className="rounded-2xl bg-zinc-900 p-4 font-semibold"
            >
              {chapter.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string | number | null }) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-3">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="font-semibold">{value || "—"}</p>
    </div>
  );
}