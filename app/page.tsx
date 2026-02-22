import Link from 'next/link';
import { PersonaTabs } from '@/components/persona-tabs';

const benefits = [
  {
    title: 'Aller plus vite',
    text: 'Réduisez les délais grâce à une sélection initiale et des dossiers prêts à l’analyse.'
  },
  {
    title: 'Créer la confiance',
    text: 'Un cadre clair, des profils vérifiés et des critères partagés pour avancer sereinement.'
  },
  {
    title: 'Trouver le bon match',
    text: 'Des mises en relation fondées sur des signaux data et des critères opérationnels réels.'
  }
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-24 px-6 py-16">
      <section className="rounded-3xl bg-white p-10 shadow-soft md:p-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">LNDS • L&apos;exigence devient la norme</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          Accélérez votre cession ou votre reprise avec des mises en relation qualifiées et fiables.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          LNDS aligne vitesse, rigueur et transparence pour connecter les bons cédants et les bons acquéreurs, sans bruit inutile.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/offres" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Voir les offres
          </Link>
          <Link href="/comment-ca-marche" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400">
            Comprendre la méthode
          </Link>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {benefits.map((item) => (
          <article key={item.title} className="card-hover rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight">Comment ça marche</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['1. Collecte', 'Collecte des données financières, opérationnelles et projet de reprise.'],
            ['2. Scoring', 'Calcul de scores lisibles pour objectiver la qualité des dossiers.'],
            ['3. Mise en relation', 'Introduction ciblée entre profils compatibles, avec suivi.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-accent">{title}</p>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Pour chaque profil, un parcours précis</h2>
        <PersonaTabs />
      </section>

      <section className="grid gap-6 rounded-3xl bg-slate-900 p-10 text-white md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Des preuves, pas des promesses</h2>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div><p className="text-3xl font-semibold">+320</p><p className="text-xs text-slate-300">Dossiers analysés</p></div>
            <div><p className="text-3xl font-semibold">92%</p><p className="text-xs text-slate-300">Profils qualifiés</p></div>
            <div><p className="text-3xl font-semibold">3.8x</p><p className="text-xs text-slate-300">Gain de temps moyen</p></div>
          </div>
        </div>
        <div className="space-y-4">
          <blockquote className="rounded-xl bg-white/10 p-4 text-sm">“Une approche factuelle qui nous a permis d’identifier les bons repreneurs rapidement.” — Cédant (placeholder)</blockquote>
          <blockquote className="rounded-xl bg-white/10 p-4 text-sm">“Enfin une marketplace où la qualité des dossiers est constante.” — Acquéreur (placeholder)</blockquote>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-10">
        <h2 className="text-3xl font-semibold tracking-tight">Tarification claire</h2>
        <p className="mt-3 text-slate-600">Acquéreurs : 5 000€ / an. Cédants : modèle au succès, plafonné et progressif.</p>
        <Link href="/offres" className="mt-6 inline-block rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          Détail des offres
        </Link>
      </section>
    </div>
  );
}
