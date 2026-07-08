import { supabase } from "@/lib/supabase";
import { Reader } from "@/components/Reader";

type PageProps = {
  params: Promise<{
    id: string;
    chapterId: string;
  }>;
};

export default async function ChapterPage({ params }: PageProps) {
  const { id, chapterId } = await params;

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

  const { data: chapterPages } = await supabase
    .from("chapter_pages")
    .select("*")
    .eq("chapter_id", chapterId)
    .order("page", { ascending: true });
    console.log("chapterId =", chapterId);
    console.log("chapterPages =", chapterPages);

  if (!title || !chapters) {
    return (
      <main className="min-h-screen bg-black p-6 text-white">
        Глава не найдена
      </main>
    );
  }

  const chapterIndex = chapters.findIndex((item) => item.id === chapterId);
  const chapter = chapters[chapterIndex];
  const prevChapter = chapters[chapterIndex - 1];
  const nextChapter = chapters[chapterIndex + 1];

  if (!chapter) {
    return (
      <main className="min-h-screen bg-black p-6 text-white">
        Глава не найдена
      </main>
    );
  }

  const pages = (chapterPages || [])
    .map((item) => item.image)
    .filter(Boolean);

  return (
    <Reader
      titleId={title.id}
      titleName={title.title}
      chapterTitle={chapter.title}
      pages={pages}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}