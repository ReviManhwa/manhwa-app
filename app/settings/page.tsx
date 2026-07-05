const themes = [
  { name: "Violet", emoji: "💜", color: "bg-violet-600" },
  { name: "Sakura", emoji: "🌸", color: "bg-pink-500" },
  { name: "Ocean", emoji: "🌊", color: "bg-blue-500" },
  { name: "Emerald", emoji: "💚", color: "bg-emerald-500" },
  { name: "Ruby", emoji: "❤️", color: "bg-red-500" },
  { name: "Gold", emoji: "💛", color: "bg-yellow-500" },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white p-6 pb-28">
      <h1 className="text-4xl font-black mb-3">🎨 Персонализация</h1>
      <p className="text-zinc-400 mb-6">
        В будущем здесь можно будет менять цвета, яркость, темы и стиль карточек.
      </p>

      <h2 className="text-xl font-bold mb-4">Темы</h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {themes.map((theme) => (
          <div key={theme.name} className="rounded-3xl bg-zinc-900 p-4">
            <div className={`mb-4 h-20 rounded-2xl ${theme.color}`} />
            <h3 className="font-bold">
              {theme.emoji} {theme.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-zinc-900 p-5">
        <h2 className="text-xl font-bold mb-3">Pro Studio</h2>
        <p className="text-zinc-400">
          Позже добавим смешивание цветов, яркость, свечение, прозрачность,
          скругления, фон и собственные темы.
        </p>
      </div>
    </main>
  );
}