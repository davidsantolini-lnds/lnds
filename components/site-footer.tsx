import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-sm font-semibold text-slate-900">LNDS</p>
          <p className="mt-2 text-sm text-slate-600">L&apos;exigence devient la norme.</p>
        </div>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-500 md:justify-end">
          <li><Link href="#" className="hover:text-slate-800">Mentions légales</Link></li>
          <li><Link href="#" className="hover:text-slate-800">Politique de confidentialité</Link></li>
          <li><Link href="#" className="hover:text-slate-800">CGU</Link></li>
        </ul>
      </div>
    </footer>
  );
}
