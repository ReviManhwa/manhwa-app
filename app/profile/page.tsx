import Link from "next/link";

const stats = [
  { label: "📚 Читаю", value: "12" },
  { label: "❤️ Избранное", value: "83" },
  { label: "📂 Подборки", value: "6" },
  { label: "👥 Друзья", value: "0" },
];

const menu = [
  { label: "✏️ Редактировать профиль", href: "/profile/edit" },
  { label: "🔐 Войти", href: "/login" },
  { label: "✨ Регистрация", href: "/register" },
  { label: "🔒 Приватность", href: "/privacy" },
  { label: "🎨 Персонализация", href: "/settings" },
  { label: "🌍 Язык приложения", href: "/settings" },
  { label: "💜 Поддержать проект", href: "/support" },
  { label: "🔞 Mature-контент", href: "/settings" },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#09090b] p-6 pb-28 text-white">
      <h1 className="mb-6 text-4xl font-black">
        👤 Профиль
      </h1>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-violet-700 via-fuchsia-700 to-zinc-900 p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-5xl">
            🌸
          </div>

          <div>
            <h2 className="text-3xl font-black">
              Revi
            </h2>

            <p className="text-zinc-200">
              @revi_library
            </p>
          </div>
        </div>

        <p className="mt-5 text-zinc-200">
          Добро пожаловать в свою библиотеку манги и манхвы ❤️
        </p>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-zinc-900 p-4 text-center"
          >
            <p className="text-2xl font-black text-violet-300">
              {item.value}
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3">
        {menu.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between rounded-2xl bg-zinc-900 px-5 py-4 transition hover:bg-zinc-800"
          >
            <span>{item.label}</span>

            <span className="text-zinc-500">
              →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}