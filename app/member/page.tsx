'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MemberArea() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      if (!session?.user) {
        router.push('/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    getUser();
  }, [supabase, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Espace membre</h1>
      <p className="mt-2">Bienvenue {user?.email} !</p>
      <nav className="mt-4 flex gap-4">
        <Link href="/member/pipeline" className="text-blue-600 underline">
          Pipeline
        </Link>
        <Link href="/member/dd-checklist" className="text-blue-600 underline">
          Checklist DD
        </Link>
      </nav>
      <button onClick={handleLogout} className="mt-4 text-red-500 underline">
        Se déconnecter
      </button>
    </div>
  );
}
