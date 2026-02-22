'use client';

import { useState } from 'react';

const content = {
  cedant: {
    title: 'Cédant',
    body: 'Vous cherchez des repreneurs sérieux, capables de financer et piloter la reprise. LNDS filtre, qualifie et vous présente uniquement des profils crédibles.',
    points: ['Dossier valorisé et cadré', 'Accès à une base d’acquéreurs qualifiés', 'Accompagnement jusqu’à la transaction']
  },
  acquereur: {
    title: 'Acquéreur',
    body: 'Vous gagnez du temps avec des opportunités triées, notées et comparables. Vous avancez avec une méthode de sélection rigoureuse.',
    points: ['Marketplace premium et curée', 'Scoring entreprise + scoring repreneur', 'Mises en relation pertinentes et rapides']
  }
} as const;

type TabKey = keyof typeof content;

export function PersonaTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('cedant');

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <div className="mb-6 flex gap-2 rounded-xl bg-slate-100 p-1 w-fit">
        {(Object.keys(content) as TabKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeTab === key ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-pressed={activeTab === key}
          >
            {content[key].title}
          </button>
        ))}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{content[activeTab].title}</h3>
      <p className="mt-3 max-w-3xl text-slate-600">{content[activeTab].body}</p>
      <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
        {content[activeTab].points.map((point) => (
          <li key={point} className="gradient-border rounded-xl p-4">{point}</li>
        ))}
      </ul>
    </section>
  );
}
