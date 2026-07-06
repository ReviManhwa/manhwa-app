"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", icon: "🏠", label: "Главная" },
  { href: "/catalog", icon: "🔍", label: "Каталог" },
  { href: "/library", icon: "📚", label: "Библиотека" },
  { href: "/calendar", icon: "📅", label: "Календарь" },
  { href: "/support", icon: "💜", label: "Поддержать" },
  { href: "/profile", icon: "👤", label: "Профиль" },
];

export function BottomNav() {
  const pathname = usePathname();

  if (pathname.includes("/chapter/")) {
    return null;
  }

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-[94%] max-w-md -translate-x-1/2 justify-around rounded-3xl border border-white/10 bg-zinc-950/90 px-2 py-3 text-[11px] backdrop-blur">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-1 text-zinc-300"
        >
          <span className="text-lg">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}