# LNDS — Site marketing (Next.js 14)

Site marketing premium en français pour LNDS, orienté conversion de deux audiences :
- **Acquéreurs / repreneurs** (abonnement 5 000€/an)
- **Cédants / vendeurs** (commission au succès plafonnée à 10 000€)

Tagline: **"L'exigence devient la norme"**.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Démarrage local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # mode développement
npm run build   # build production
npm run start   # démarrage production
npm run lint    # lint
```

## Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
  comment-ca-marche/page.tsx
  scoring/page.tsx
  offres/page.tsx
  contact/page.tsx
components/
  logo-mark.tsx
  site-header.tsx
  site-footer.tsx
  persona-tabs.tsx
  faq-accordion.tsx
```

## Déploiement Vercel

1. Pousser le dépôt sur GitHub/GitLab/Bitbucket.
2. Importer le projet dans Vercel.
3. Vercel détecte automatiquement Next.js.
4. Build command: `npm run build`
5. Output: automatique (Next.js)
6. Déployer.

Aucune variable d’environnement n’est requise pour cette version statique.
