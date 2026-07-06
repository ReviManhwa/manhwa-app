"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ReaderProps = {
  titleId: string;
  titleName: string;
  chapterTitle: string;
  pages: string[];
  prevChapter?: {
    id: string;
    title: string;
  };
  nextChapter?: {
    id: string;
    title: string;
  };
};

export function Reader({
  titleId,
  titleName,
  chapterTitle,
  pages,
  prevChapter,
  nextChapter,
}: ReaderProps) {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black pb-10 text-white">
      <div
        className={
          "fixed left-0 top-0 z-50 w-full bg-black/90 p-4 backdrop-blur transition-transform duration-300 " +
          (showTopBar ? "translate-y-0" : "-translate-y-full")
        }
      >
        <Link href={"/title/" + titleId} className="text-violet-300">
          ← Назад к тайтлу
        </Link>

        <h1 className="mt-2 text-xl font-bold">{titleName}</h1>
        <p className="text-sm text-zinc-400">{chapterTitle}</p>
      </div>

      <div className="mx-auto max-w-3xl pt-24">
        {pages.map((page, index) => (
          <img
            key={page}
            src={page}
            alt={"Страница " + (index + 1)}
            className="w-full"
          />
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-3xl px-4 pb-10">
        <div className="rounded-3xl bg-zinc-950 p-5 text-center">
          <p className="mb-4 text-zinc-400">Глава прочитана</p>

          <div className="grid gap-3">
            {nextChapter ? (
              <Link
                href={"/title/" + titleId + "/chapter/" + nextChapter.id}
                className="rounded-2xl bg-violet-600 p-4 font-bold"
              >
                Читать дальше: {nextChapter.title} →
              </Link>
            ) : (
              <div className="rounded-2xl bg-zinc-900 p-4 text-zinc-500">
                Следующей главы пока нет
              </div>
            )}

            <Link
              href={"/title/" + titleId}
              className="rounded-2xl bg-zinc-900 p-4 font-bold"
            >
              Вернуться к тайтлу
            </Link>

            {prevChapter && (
              <Link
                href={"/title/" + titleId + "/chapter/" + prevChapter.id}
                className="rounded-2xl bg-zinc-900 p-4 text-zinc-300"
              >
                ← Предыдущая: {prevChapter.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}