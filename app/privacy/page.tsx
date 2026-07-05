const settings = [
  "Кто видит мою библиотеку",
  "Кто видит мои подборки",
  "Кто видит, что я читаю",
  "Кто может писать мне",
  "Кто может добавлять меня в друзья",
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#09090b] p-6 pb-28 text-white">
      <h1 className="mb-3 text-4xl font-black">🔒 Приватность</h1>
      <p className="mb-6 text-zinc-400">
        Управляй тем, что видят другие пользователи.
      </p>

      <div className="grid gap-3">
        {settings.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-zinc-900 p-4"
          >
            <p className="mb-3 font-bold">{item}</p>
            <select className="w-full rounded-xl bg-zinc-800 px-3 py-2">
              <option>Все</option>
              <option>Только друзья</option>
              <option>Только я</option>
            </select>
          </div>
        ))}
      </div>
    </main>
  );
}