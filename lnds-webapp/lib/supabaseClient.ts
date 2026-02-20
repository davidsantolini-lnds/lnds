"use client";

import { createBrowserClient } from '@supabase/auth-helpers-nextjs';

// Create a Supabase client using environment variables. This helper is
// invoked in client-side components (with the 'use client' directive).
export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
