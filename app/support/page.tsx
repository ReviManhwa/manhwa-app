const goals = [
  { name: "Серверы", percent: 40 },
  { name: "Разработка", percent: 25 },
  { name: "Хранилище", percent: 20 },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white p-6 pb-28">
      <h1 className="text-4xl font-black mb-3">💜 Поддержать</h1>
      <p className="text-zinc-400 mb-6">
        Чтение остаётся бесплатным. Поддержка помогает развивать Revi Library.
      </p>

      <div className="rounded-3xl bg-gradient-to-br from-violet-700/60 to-zinc-900 p-5 mb-6">
        <h2 className="text-2xl font-bold mb-2">Revi Support</h2>
        <p className="text-zinc-300">
          Поддержка добровольная. Никаких обязательных оплат для чтения.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {["1$", "3$", "5$"].map((sum) => (
          <button key={sum} className="rounded-2xl bg-zinc-900 py-4 font-bold">
            {sum}
          </button>
        ))}
      </div>

      <button className="mb-8 w-full rounded-2xl bg-fuchsia-600 py-4 font-bold">
        Другая сумма
      </button>

      <h2 className="text-xl font-bold mb-4">На что идут средства</h2>

      <div className="grid gap-4">
        {goals.map((goal) => (
          <div key={goal.name} className="rounded-2xl bg-zinc-900 p-4">
            <div className="mb-2 flex justify-between">
              <span>{goal.name}</span>
              <span className="text-violet-300">{goal.percent}%</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-800">
              <div
                className="h-2 rounded-full bg-violet-500"
                style={{ width: `${goal.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}