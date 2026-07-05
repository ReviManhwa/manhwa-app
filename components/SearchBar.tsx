"use client";

import { useState } from "react";

export function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="🔍 Найти мангу или манхву..."
      className="w-full rounded-2xl bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-500"
    />
  );
}