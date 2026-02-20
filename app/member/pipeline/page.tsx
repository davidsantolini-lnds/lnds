'use client';

import { useEffect } from 'react';
import { createClient } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Pipeline() {
  const supabase = createClient();
  const router = useRouter();

  // Redirect unauthenticated users to the login page
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.push('/login');
      }
    });
  }, [supabase, router]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Pipeline</h1>
      <p className="mt-4">
        Ici vous pouvez consulter et gérer votre pipeline.
      </p>
    </div>
  );
}
