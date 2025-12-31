# Guinée Propre & Fleurie - Site Web

Site web officiel du mouvement citoyen **Ville Propre & Fleurie - Guinée**

## 🌱 À propos

Plateforme numérique présentant les actions, résultats et villes engagées dans le mouvement pour une Guinée plus propre et plus verte.

## 🚀 Technologies

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **React Router** (navigation)
- **Lucide React** (icons)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Preview du build de production
npm run preview
```

## 📁 Structure du Projet

```
guinee-propre-fleurie/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── layout/      # Layout (Navbar, Footer)
│   │   └── ui/          # UI components (Button, Section)
│   ├── data/            # Données des villes
│   ├── pages/           # Pages de l'application
│   └── App.tsx          # Configuration des routes
├── public/              # Assets statiques
└── index.html           # Point d'entrée HTML
```

## 🌐 Pages

- **Accueil** (`/`) - Page d'accueil
- **Nos Villes** (`/villes`) - Galerie des villes engagées
- **Ville Details** (`/villes/:id`) - Fiche détaillée d'une ville
- **Résultats Nationaux** (`/resultats`) - Impact global du mouvement
- **Nos Projets** (`/projets`) - Projets et axes d'intervention
- **Les Régions** (`/regions`) - Présentation des régions naturelles
- **À Propos** (`/about`) - Mission et vision
- **Participer** (`/participer`) - Comment s'engager
- **Contact** (`/contact`) - Formulaire de contact

## 🎨 Personnalisation

Les couleurs de la marque sont définies dans `tailwind.config.js` :

```js
colors: {
  brand: {
    50: '#f0fdf4',
    // ... autres nuances
    900: '#14532d',
  }
}
```

## 📊 Données des Villes

Les données sont stockées dans `src/data/cities.ts` avec :
- 38 villes (5 communes de Conakry + 33 préfectures)
- Statuts : Active, En cours, À venir
- Statistiques : agents, bénévoles, déchets collectés, etc.

## 🔐 Sécurité

- Headers de sécurité configurés dans `staticwebapp.config.json`
- CSP (Content Security Policy)
- Protection XSS

## 📝 License

© 2024 Ville Propre & Fleurie - Guinée. Tous droits réservés.

## 👥 Contact

Pour toute question : contact@guineepropre.gn

---

**Fait avec ❤️ pour une Guinée plus propre et plus verte** 🇬🇳
