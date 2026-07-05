export default function EditProfilePage() {
  return (
    <main className="min-h-screen bg-[#09090b] p-6 pb-28 text-white">
      <h1 className="mb-6 text-4xl font-black">✏️ Редактировать профиль</h1>

      <div className="mb-6 rounded-3xl bg-zinc-900 p-5">
        <p className="mb-3 text-sm text-zinc-400">Аватар</p>
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800 text-5xl">
          🌸
        </div>
        <button className="rounded-xl bg-violet-600 px-4 py-2 font-bold">
          Сменить аватар
        </button>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm text-zinc-400">Ник</span>
          <input
            defaultValue="Revi"
            className="rounded-2xl bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-zinc-400">@username</span>
          <input
            defaultValue="revi"
            className="rounded-2xl bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-zinc-400">О себе</span>
          <textarea
            defaultValue="Люблю манхвы, романтику, стекло и красивые арты."
            className="min-h-28 rounded-2xl bg-zinc-900 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>

        <button className="mt-2 rounded-2xl bg-fuchsia-600 py-4 font-bold">
          Сохранить изменения
        </button>
      </div>
    </main>
  );
}