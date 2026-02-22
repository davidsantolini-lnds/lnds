import Link from 'next/link';
import { LogoMark } from './logo-mark';

const navLinks = [
  { href: '/comment-ca-marche', label: 'Comment ça marche' },
  { href: '/scoring', label: 'Scoring' },
  { href: '/offres', label: 'Offres' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <LogoMark />
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
