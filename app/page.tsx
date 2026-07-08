"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { MangaCard } from "@/components/MangaCard";

type Manhwa = {
  id: string;
  title: string;
  description: string | null;
  cover: string | null;
  genres: string | null;
  rating: number | null;
  type: string | null;
  age_rating: string | null;
};

export default function Home() {
  const [manhwas, setManhwas] = useState<Manhwa[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("manhwas").select("*");
      setManhwas(data || []);
    }

    load();
  }, []);

  const filtered = manhwas.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#09090b] px-5 py-6 pb-28 text-white">
      <section className="mx-auto max-w-md">
        <header className="mb-7 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">Добрый вечер, Revi</p>
            <h1 className="text-3xl font-black tracking-tight">
              Revi Library
            </h1>
          </div>
          <div className="rounded-full bg-zinc-900 px-3 py-2 text-xl">👤</div>
        </header>

        <input
          className="mb-5 w-full rounded-2xl bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
          placeholder="Найти мангу или манхву..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2 className="mb-4 text-xl font-bold">Каталог</h2>

        <div className="mb-8 grid grid-cols-2 gap-4">
          {filtered.map((item) => (
            <MangaCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-500">Ничего не найдено</p>
        )}
      </section>
    </main>
  );
}