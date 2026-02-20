import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <nav className="container mx-auto p-4 flex gap-4">
            <Link href="/">Accueil</Link>
            <Link href="/manifeste">Manifeste</Link>
            <Link href="/admission">Admission</Link>
            <Link href="/login">Connexion</Link>
            <Link href="/member">Espace membre</Link>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
