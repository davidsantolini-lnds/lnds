# Héberger le logo LNDS sans binaire dans le repo

Le site référence désormais un logo distant (pas de fichier binaire versionné localement) :

`https://YOUR_PROJECT_REF.supabase.co/storage/v1/object/public/branding/lnds.jpg`

## Recommandation Supabase Storage
1. Créez un bucket public `branding` dans Supabase Storage.
2. Uploadez votre fichier `lnds.jpg` dans ce bucket.
3. Récupérez l'URL publique et remplacez `YOUR_PROJECT_REF` dans les pages HTML du site.

## Pourquoi
- Repo plus léger (pas de binaire à versionner).
- Changement de logo sans nouveau commit front.
- Possibilité de gérer versioning/CDN côté stockage objet.
