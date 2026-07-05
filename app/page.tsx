import { manhwas } from "@/data/manhwas";
import { MangaCard } from "@/components/MangaCard";

const folders = ["📖 Читаю", "✅ Прочитано", "❤️ Любимые", "⏳ На потом"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white px-5 py-6 pb-28">
      <section className="mx-auto max-w-md">
        <header className="mb-7 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">🌙 Добрый вечер, Revi</p>
            <h1 className="text-3xl font-black tracking-tight">Revi Library</h1>
          </div>
          <div className="rounded-full bg-zinc-900 px-3 py-2 text-xl">👤</div>
        </header>

        <div className="mb-5 rounded-2xl bg-zinc-900 px-4 py-3 text-zinc-400">
          🔍 Найти мангу или манхву...
        </div>

        <div className="mb-6 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-700/40 via-fuchsia-700/20 to-zinc-900 p-5 shadow-lg shadow-violet-900/30">
          <p className="mb-1 text-sm text-violet-200">📖 Продолжить чтение</p>
          <h2 className="text-2xl font-bold">Solo Leveling</h2>
          <p className="mb-4 text-zinc-300">Глава 87 • 79%</p>
          <button className="rounded-xl bg-violet-500 px-5 py-2 font-semibold">
            Продолжить →
          </button>
        </div>

        <h2 className="mb-4 text-xl font-bold">🔥 Популярное</h2>

        <div className="mb-8 grid grid-cols-2 gap-4">
          {manhwas.map((item) => (
            <MangaCard key={item.id} item={item} />
          ))}
        </div>

        <h2 className="mb-4 text-xl font-bold">📚 Моя библиотека</h2>

        <div className="mb-8 grid gap-3">
          {folders.map((folder) => (
            <div key={folder} className="flex items-center justify-between rounded-2xl bg-zinc-900 px-4 py-3">
              <span className="font-semibold">{folder}</span>
              <span className="text-zinc-500">›</span>
            </div>
          ))}
          <button className="rounded-2xl border border-dashed border-violet-500/60 px-4 py-3 text-violet-300">
            ＋ Создать свою папку
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-5">
          <p className="mb-2 text-2xl">💜</p>
          <h2 className="text-xl font-bold">Поддержать Revi Library</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Чтение остаётся бесплатным. Поддержка помогает развивать проект.
          </p>
          <button className="mt-4 w-full rounded-xl bg-fuchsia-600 py-3 font-bold">
            Поддержать проект
          </button>
        </div>
      </section>
    </main>
  );
}