import { users } from "@/data/users";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserPage({ params }: PageProps) {
  const { id } = await params;
  const user = users.find((item) => item.id === id);

  if (!user) {
    return (
      <main className="min-h-screen bg-[#09090b] p-6 text-white">
        <h1 className="text-3xl font-black">Пользователь не найден</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090b] pb-28 text-white">
      <div className={"h-40 bg-gradient-to-br " + user.banner} />

      <section className="mx-auto max-w-md p-5">
        <div className="-mt-14 mb-5 flex items-end gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#09090b] bg-zinc-900 text-5xl">
            {user.avatar}
          </div>

          <div>
            <h1 className="text-3xl font-black">{user.displayName}</h1>
            <p className="text-zinc-400">@{user.username}</p>
          </div>
        </div>

        <p className="mb-5 text-zinc-300">{user.bio}</p>

        <div className="mb-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-zinc-900 p-4 text-center">
            <p className="text-xl font-bold text-violet-300">{user.followers}</p>
            <p className="text-xs text-zinc-400">Подписчики</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-4 text-center">
            <p className="text-xl font-bold text-violet-300">{user.reading.length}</p>
            <p className="text-xs text-zinc-400">Читает</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-4 text-center">
            <p className="text-xl font-bold text-violet-300">{user.favorites.length}</p>
            <p className="text-xs text-zinc-400">Любимые</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="rounded-2xl bg-violet-600 py-3 font-bold">
            ➕ Подписаться
          </button>

          <button className="rounded-2xl bg-zinc-900 py-3 font-bold">
            💬 Написать
          </button>
        </div>
      </section>
    </main>
  );
}