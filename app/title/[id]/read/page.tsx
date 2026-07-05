export default function ReadPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📖 Чтение главы</h1>

      <div className="grid gap-4">
        <div className="h-[500px] rounded-2xl bg-zinc-900 flex items-center justify-center">
          Страница 1
        </div>

        <div className="h-[500px] rounded-2xl bg-zinc-900 flex items-center justify-center">
          Страница 2
        </div>

        <div className="h-[500px] rounded-2xl bg-zinc-900 flex items-center justify-center">
          Страница 3
        </div>
      </div>
    </main>
  );
}