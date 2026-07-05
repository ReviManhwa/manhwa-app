"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Вход выполнен!");
    window.location.href = "/profile";
  }

  return (
    <main className="min-h-screen bg-[#09090b] p-6 text-white">
      <h1 className="mb-6 text-4xl font-black">🔑 Вход</h1>

      <div className="grid gap-4">
        <input
          placeholder="Email"
          className="rounded-2xl bg-zinc-900 px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Пароль"
          type="password"
          className="rounded-2xl bg-zinc-900 px-4 py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} className="rounded-2xl bg-violet-600 py-4 font-bold">
          Войти
        </button>
      </div>
    </main>
  );
}