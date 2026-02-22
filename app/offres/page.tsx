import Link from 'next/link';

function cedantFee(transactionAmount: number) {
  const fee = 0.02 * Math.sqrt(transactionAmount) * Math.sqrt(100000);
  return Math.min(fee, 10000);
}

export default function OffersPage() {
  const examples = [300000, 800000, 1500000];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-16">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Offres LNDS</h1>
        <p className="mt-4 text-slate-600">Un pricing pensé pour aligner intérêt économique, qualité des mises en relation et prévisibilité des coûts.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Acquéreur</h2>
          <p className="mt-2 text-slate-600">Accès annuel à la marketplace qualifiée + scoring complet.</p>
          <p className="mt-6 text-4xl font-semibold">5 000€ <span className="text-base font-medium text-slate-500">/ an</span></p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• Opportunités curées et vérifiées</li>
            <li>• Visualisation des deux scores</li>
            <li>• Priorisation des opportunités selon votre profil</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Cédant</h2>
          <p className="mt-2 text-slate-600">Commission au succès avec plafond de 10 000€ par transaction.</p>
          <p className="mt-6 text-2xl font-semibold">Formule continue, monotone, sans effet de seuil</p>
          <p className="mt-2 text-sm text-slate-600">Frais = min(10 000€, 0,02 × √(montant × 100 000))</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            {examples.map((amount) => (
              <li key={amount}>
                • Transaction {amount.toLocaleString('fr-FR')}€ → frais {Math.round(cedantFee(amount)).toLocaleString('fr-FR')}€
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">Quel que soit le montant, la commission reste toujours ≤ 10 000€.</p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold">Pourquoi ce modèle ?</h2>
        <p className="mt-3 text-slate-600">
          Parce que LNDS investit en amont dans la qualification, le screening des profils et le tooling d’évaluation. Le modèle aligne la qualité du service avec le résultat, tout en gardant une borne de coût juste pour le cédant.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          Demander un échange
        </Link>
      </section>
    </div>
  );
}
