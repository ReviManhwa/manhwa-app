"use client";

import Link from "next/link";

type ChapterLink = {
  id: string;
  title: string;
};

type ReaderProps = {
  titleId: string;
  titleName: string;
  chapterTitle: string;
  pages: string[];
  prevChapter?: ChapterLink;
  nextChapter?: ChapterLink;
};

export function Reader({
  titleId,
  titleName,
  chapterTitle,
  pages,
  prevChapter,
  nextChapter,
}: ReaderProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-black p-4">
        <Link href={"/title/" + titleId} className="text-violet-300">
          ← Назад
        </Link>

        <h1 className="mt-3 text-2xl font-black">{titleName}</h1>
        <p className="text-zinc-400">{chapterTitle}</p>
        <p className="text-sm text-zinc-500">Страниц: {pages.length}</p>
      </div>

      <div className="mx-auto max-w-3xl">
        {pages.map((page, index) => (
          <img
            key={index}
            src={page}
            alt={"Страница " + (index + 1)}
            className="w-full"
          />
        ))}
      </div>

      <div className="mx-auto max-w-3xl p-4 pb-24">
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

            {prevChapter && (
              <Link
                href={"/title/" + titleId + "/chapter/" + prevChapter.id}
                className="rounded-2xl bg-zinc-900 p-4 text-zinc-300"
              >
                ← Предыдущая: {prevChapter.title}
              </Link>
            )}

            <Link
              href={"/title/" + titleId}
              className="rounded-2xl bg-zinc-900 p-4 font-bold"
            >
              Вернуться к тайтлу
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}