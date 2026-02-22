export default function ScoringPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-6 py-16">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Scoring transparent</h1>
        <p className="mt-4 text-slate-600">LNDS combine lecture financière, exécution opérationnelle et compatibilité stratégique dans deux scores distincts.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-semibold">Score Entreprise</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>• Croissance du chiffre d’affaires et stabilité des marges</li>
            <li>• Qualité des revenus (récurrence, concentration clients)</li>
            <li>• Robustesse opérationnelle et dépendance dirigeant</li>
            <li>• Potentiel de transmission et perspectives sectorielles</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-semibold">Score Repreneur</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>• Capacité de financement vérifiable</li>
            <li>• Cohérence du projet de reprise</li>
            <li>• Expérience de management et de transformation</li>
            <li>• Alignement avec les enjeux humains de la cession</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-blue-900">
        <h3 className="text-lg font-semibold">Note de transparence</h3>
        <p className="mt-2 text-sm">
          Les scores LNDS ne remplacent pas la due diligence. Ils fournissent une base commune de décision, explicable et actionnable, afin de réduire l’incertitude en amont.
        </p>
      </section>
    </div>
  );
}
