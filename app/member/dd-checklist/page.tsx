"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

/*
 * This page implements a simple checklist for the "DD" (développement durable) process.
 * It ensures the user is authenticated via Supabase before allowing access. If no
 * session is found the user will be redirected to the login page. Each checklist
 * item can be toggled and is stored in local state. In a more advanced version
 * you could persist these values in Supabase for each user.
 */

export default function ChecklistDDPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [items, setItems] = useState([
    { id: 1, text: "Définir le périmètre du projet", completed: false },
    { id: 2, text: "Choisir le type d'aménagement durable", completed: false },
    { id: 3, text: "Collecter et analyser les données locales", completed: false },
    { id: 4, text: "Évaluer l'impact environnemental", completed: false },
    { id: 5, text: "Établir les indicateurs de suivi", completed: false },
  ]);

  // Initialise Supabase client. Client side keys are safe to expose since
  // they only allow public operations (anon key). Values are drawn from the
  // environment so they can be configured in a .env.local file.
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  // Check for authenticated session on mount.
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      } else {
        router.push("/login");
      }
    };
    fetchSession();
  }, [router, supabase.auth]);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Checklist DD</h1>
      <p className="text-gray-600">
        Suivez cette checklist pour progresser dans votre projet de développement
        durable. Cochez les éléments lorsque vous les avez accomplis.
      </p>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center">
            <input
              id={`item-${item.id}`}
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <label
              htmlFor={`item-${item.id}`}
              className={`ml-3 text-lg ${item.completed ? "line-through text-gray-500" : ""}`}
            >
              {item.text}
            </label>
          </li>
        ))}
      </ul>
      <div className="pt-6">
        <button
          onClick={() => router.push("/member/pipeline")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retour au pipeline
        </button>
      </div>
    </div>
  );
}