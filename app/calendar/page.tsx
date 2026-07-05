const releases = [
  { day: 2, title: "Solo Leveling", chapter: "Глава 188", time: "10:00" },
  { day: 2, title: "Omniscient Reader", chapter: "Глава 207", time: "12:00" },
  { day: 5, title: "Jinx", chapter: "Глава 74", time: "18:00" },
  { day: 8, title: "Eleceed", chapter: "Глава 301", time: "16:00" },
  { day: 12, title: "Chainsaw Man", chapter: "Глава 171", time: "20:00" },
];

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white p-6 pb-28">
      <h1 className="text-4xl font-black mb-2">📅 Календарь</h1>
      <p className="text-zinc-400 mb-6">Выход новых глав в этом месяце.</p>

      <div className="grid grid-cols-7 gap-2 mb-8">
        {Array.from({ length: 31 }).map((_, index) => {
          const day = index + 1;
          const hasRelease = releases.some((item) => item.day === day);

          return (
            <div
              key={day}
              className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm ${
                hasRelease ? "bg-violet-600 text-white" : "bg-zinc-900 text-zinc-400"
              }`}
            >
              <span>{day}</span>
              {hasRelease && <span className="text-xs">●</span>}
            </div>
          );
        })}
      </div>

      <h2 className="text-xl font-bold mb-4">Сегодня / ближайшие релизы</h2>

      <div className="grid gap-3">
        {releases.map((item) => (
          <div
            key={`${item.title}-${item.chapter}`}
            className="rounded-2xl bg-zinc-900 p-4 flex items-center justify-between"
          >
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.chapter}</p>
            </div>
            <span className="text-violet-300">{item.time}</span>
          </div>
        ))}
      </div>
    </main>
  );
}