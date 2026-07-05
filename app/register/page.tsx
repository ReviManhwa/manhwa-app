"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Аккаунт создан! Теперь можно войти.");
    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-[#09090b] p-6 text-white">
      <h1 className="mb-6 text-4xl font-black">✨ Регистрация</h1>

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

        <button onClick={register} className="rounded-2xl bg-fuchsia-600 py-4 font-bold">
          Создать аккаунт
        </button>
      </div>
    </main>
  );
}