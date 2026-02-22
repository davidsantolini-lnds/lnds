'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Combien de temps pour recevoir des mises en relation qualifiées ?',
    a: 'Après validation du dossier, les premières mises en relation peuvent démarrer sous quelques jours selon votre profil et votre secteur.'
  },
  {
    q: 'Le scoring est-il opaque ?',
    a: 'Non. LNDS expose les critères utilisés et fournit une lecture claire des facteurs qui renforcent ou dégradent un score.'
  },
  {
    q: 'Puis-je utiliser LNDS si je suis primo-acquéreur ?',
    a: 'Oui, dès lors que votre capacité de financement et votre projet de reprise sont structurés et vérifiables.'
  }
];

export function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white">
          <button
            className="flex w-full items-center justify-between px-5 py-4 text-left font-medium"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {faq.q}
            <span className="text-accent">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm text-slate-600">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
