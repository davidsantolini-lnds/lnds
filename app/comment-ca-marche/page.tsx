import Link from 'next/link';
import { FaqAccordion } from '@/components/faq-accordion';

export default function HowItWorksPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-16 px-6 py-16">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Comment LNDS opère, étape par étape</h1>
        <p className="mt-4 text-slate-600">Notre méthode transforme un processus opaque en pipeline structuré : collecte, scoring, mise en relation.</p>
      </section>
      <section className="space-y-6">
        {[
          {
            title: 'Collecte',
            text: 'Nous centralisons les informations essentielles: entreprise, intentions, timing, financement et contraintes. Chaque dossier est normalisé pour comparaison.'
          },
          {
            title: 'Scoring',
            text: 'Deux scores complémentaires permettent d’évaluer la qualité des entreprises et la crédibilité des repreneurs. Les critères sont explicités pour garder la maîtrise.'
          },
          {
            title: 'Mise en relation',
            text: 'Nous introduisons uniquement des parties compatibles, avec une logique de probabilité de closing et une expérience fluide des deux côtés.'
          }
        ].map((item, index) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold text-accent">Étape {index + 1}</p>
            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold tracking-tight">FAQ</h2>
        <FaqAccordion />
      </section>

      <section className="rounded-3xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Prêt à structurer votre projet ?</h2>
        <p className="mt-2 text-slate-300">Parlez à l’équipe LNDS pour lancer votre parcours dans les meilleures conditions.</p>
        <Link href="/contact" className="mt-5 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
          Prendre contact
        </Link>
      </section>
    </div>
  );
}
