import { manhwas } from "@/data/manhwas";
import { Reader } from "@/components/Reader";

type PageProps = {
  params: Promise<{
    id: string;
    chapterId: string;
  }>;
};

export default async function ChapterPage({ params }: PageProps) {
  const { id, chapterId } = await params;

  const title = manhwas.find((item) => item.id === id);
  const chapterIndex =
    title?.chapters.findIndex((item) => item.id === chapterId) ?? -1;

  const chapter = title?.chapters[chapterIndex];
  const prevChapter = title?.chapters[chapterIndex - 1];
  const nextChapter = title?.chapters[chapterIndex + 1];

  if (!title || !chapter) {
    return (
      <main className="min-h-screen bg-black p-6 text-white">
        Глава не найдена
      </main>
    );
  }

  return (
    <Reader
      titleId={title.id}
      titleName={title.title}
      chapterTitle={chapter.title}
      pages={chapter.pages}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}