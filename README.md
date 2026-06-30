# Lunoo & Luna — Site vitrine

Site one-page de la série jeunesse **Lunoo & Luna**, construit avec **Svelte + Vite**.

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou plus récent (npm inclus)

## Démarrer en local

```bash
npm install      # installe les dépendances (une seule fois)
npm run dev      # lance le serveur de dev → http://localhost:5173
```

## Construire pour la production

```bash
npm run build    # génère le site optimisé dans dist/
npm run preview  # prévisualise le build de production en local
```

Le contenu de `dist/` est un site statique : déposez-le tel quel sur n'importe quel
hébergeur (Netlify, Vercel, OVH, GitHub Pages, FTP…).

## Structure

```
lunoo-svelte/
├─ index.html              Point d'entrée HTML (polices, meta)
├─ vite.config.js          Configuration Vite
├─ svelte.config.js        Configuration Svelte
├─ public/
│  └─ assets/              Images (couvertures, pages, personnages, logos)
└─ src/
   ├─ main.js              Montage de l'app Svelte
   ├─ app.css              Styles globaux (reset, animations, boutons, responsive)
   ├─ App.svelte           Assemble toutes les sections
   ├─ lib/
   │  ├─ data.js           Données (livres, FAQ, URL Amazon)
   │  └─ actions.js        Actions Svelte : parallaxe + apparition au scroll
   └─ components/
      ├─ Header.svelte
      ├─ Hero.svelte
      ├─ KidsLove.svelte
      ├─ ParentsLove.svelte
      ├─ Characters.svelte
      ├─ Collection.svelte
      ├─ BookPreview.svelte   (carrousel de feuilletage)
      ├─ Story.svelte
      ├─ Reviews.svelte
      ├─ HowItWorks.svelte
      ├─ Faq.svelte           (accordéon)
      ├─ FinalCta.svelte
      └─ Footer.svelte
```

## Personnaliser

- **Liens & prix Amazon** : `src/lib/data.js`
- **Textes** : directement dans le composant `.svelte` concerné
- **Couleurs / styles globaux** : `src/app.css`
- **Images** : remplacez les fichiers dans `public/assets/` (gardez les mêmes noms)

> Astuce : l'URL Amazon principale est centralisée dans `src/lib/data.js`
> (`amazonUrl`). Modifiez-la une fois pour la propager partout.
