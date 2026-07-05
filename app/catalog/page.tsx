"use client";

import { useState } from "react";
import { manhwas } from "@/data/manhwas";
import { MangaCard } from "@/components/MangaCard";

const filters = ["Все", "Манхва", "Манга", "16+", "18+", "Онгоинг", "Завершена"];

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Все");

  const filteredManhwas = manhwas.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "Все" ||
      item.type === activeFilter ||
      item.age === activeFilter ||
      item.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#09090b] text-white p-6 pb-28">
      <h1 className="text-4xl font-black mb-6">📚 Каталог</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Найти мангу или манхву..."
        className="mb-5 w-full rounded-2xl bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-500"
      />

      <div className="mb-6 flex gap-2 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm ${
              activeFilter === filter
                ? "bg-violet-600 text-white"
                : "bg-zinc-900 text-zinc-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredManhwas.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredManhwas.map((item) => (
            <MangaCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-zinc-900 p-6 text-center text-zinc-400">
          Ничего не найдено
        </div>
      )}
    </main>
  );
}