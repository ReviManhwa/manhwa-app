"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Manhwa = {
  id: string;
  title: string;
  description: string | null;
  cover: string | null;
};

type Chapter = {
  id: string;
  manhwa_id: string | null;
  title: string | null;
  pages: string | null;
};

export default function AdminPage() {
  const [manhwas, setManhwas] = useState<Manhwa[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [manhwaId, setManhwaId] = useState("");
  const [manhwaTitle, setManhwaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  const [chapterManhwaId, setChapterManhwaId] = useState("");
  const [chapterId, setChapterId] = useState("");
  const [chapterTitle, setChapterTitle] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    const { data: manhwaData } = await supabase.from("manhwas").select("*");
    const { data: chapterData } = await supabase.from("chapters").select("*");

    setManhwas(manhwaData || []);
    setChapters(chapterData || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function addManhwa() {
    if (!manhwaId || !manhwaTitle) {
      alert("Заполни id и название");
      return;
    }

    const { error } = await supabase.from("manhwas").insert({
      id: manhwaId,
      title: manhwaTitle,
      description: description || "Описание пока не добавлено",
      cover: cover || null,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setManhwaId("");
    setManhwaTitle("");
    setDescription("");
    setCover("");
    await load();
    alert("Манхва добавлена");
  }

  async function uploadChapter() {
    if (!chapterManhwaId || !chapterTitle || !files) {
      alert("Заполни все поля и выбери картинки");
      return;
    }

    setLoading(true);

    const selectedFiles = Array.from(files);
    const uploadedUrls: string[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileName = `${chapterManhwaId}/${chapterId}/${i + 1}-${file.name}`;

      const { error } = await supabase.storage
        .from("chapters")
        .upload(fileName, file, { upsert: true });

      if (error) {
        setLoading(false);
        alert(error.message);
        return;
      }

      const { data } = supabase.storage.from("chapters").getPublicUrl(fileName);
      uploadedUrls.push(data.publicUrl);
    }

    const { error } = await supabase.from("chapters").insert({
      id: chapterId,
      manhwa_id: chapterManhwaId,
      title: chapterTitle,
      pages: uploadedUrls.join("\n"),
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setChapterId("");
    setChapterTitle("");
    setFiles(null);
    await load();
    alert("Глава загружена");
  }

  async function deleteManhwa(id: string) {
    if (!confirm("Удалить манхву?")) return;

    const { error } = await supabase.from("manhwas").delete().eq("id", id);
    if (error) alert(error.message);
    await load();
  }

  async function deleteChapter(id: string) {
    if (!confirm("Удалить главу?")) return;

    const { error } = await supabase.from("chapters").delete().eq("id", id);
    if (error) alert(error.message);
    await load();
  }

  return (
    <main className="min-h-screen bg-black p-5 pb-32 text-white">
      <section className="mx-auto max-w-md">
        <h1 className="mb-6 text-3xl font-black">Revi Admin</h1>

        <div className="mb-6 rounded-3xl bg-zinc-950 p-4">
          <h2 className="mb-4 text-xl font-bold">Добавить манхву</h2>

          <input className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" placeholder="id, например solo-leveling" value={manhwaId} onChange={(e) => setManhwaId(e.target.value)} />
          <input className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" placeholder="Название" value={manhwaTitle} onChange={(e) => setManhwaTitle(e.target.value)} />
          <textarea className="mb-3 min-h-24 w-full rounded-2xl bg-zinc-900 px-4 py-3" placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" placeholder="Ссылка на обложку" value={cover} onChange={(e) => setCover(e.target.value)} />

          <button onClick={addManhwa} className="w-full rounded-2xl bg-violet-600 py-4 font-bold">
            Сохранить манхву
          </button>
        </div>

        <div className="mb-6 rounded-3xl bg-zinc-950 p-4">
          <h2 className="mb-4 text-xl font-bold">Загрузить главу</h2>

          <select className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" value={chapterManhwaId} onChange={(e) => setChapterManhwaId(e.target.value)}>
            <option value="">Выбери манхву</option>
            {manhwas.map((item) => (
              <option key={item.id} value={item.id}>{item.title}</option>
            ))}
          </select>

          <input className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" placeholder="id главы, например solo-leveling-4" value={chapterId} onChange={(e) => setChapterId(e.target.value)} />
          <input className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" placeholder="Название главы" value={chapterTitle} onChange={(e) => setChapterTitle(e.target.value)} />
          <input className="mb-3 w-full rounded-2xl bg-zinc-900 px-4 py-3" type="file" multiple accept="image/*" onChange={(e) => setFiles(e.target.files)} />

          <button onClick={uploadChapter} disabled={loading} className="w-full rounded-2xl bg-fuchsia-600 py-4 font-bold disabled:opacity-50">
            {loading ? "Загружаю..." : "Загрузить главу"}
          </button>
        </div>

        <h2 className="mb-3 text-xl font-bold">Манхвы</h2>
        <div className="mb-6 grid gap-3">
          {manhwas.map((item) => (
            <div key={item.id} className="rounded-3xl bg-zinc-950 p-4">
              <p className="text-xs text-violet-300">{item.id}</p>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
              <button onClick={() => deleteManhwa(item.id)} className="mt-3 w-full rounded-2xl bg-red-950 py-3 text-red-200">
                Удалить
              </button>
            </div>
          ))}
        </div>

        <h2 className="mb-3 text-xl font-bold">Главы</h2>
        <div className="grid gap-3">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="rounded-3xl bg-zinc-950 p-4">
              <p className="text-xs text-pink-300">{chapter.manhwa_id}</p>
              <h3 className="text-lg font-bold">{chapter.title}</h3>
              <p className="text-sm text-zinc-400">{chapter.id}</p>
              <button onClick={() => deleteChapter(chapter.id)} className="mt-3 w-full rounded-2xl bg-red-950 py-3 text-red-200">
                Удалить
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}