# Guide d'installation i18n pour Antenox

## Installation des dépendances

Exécutez cette commande dans le terminal :

```bash
pnpm install i18next react-i18next i18next-browser-languagedetector
```

## Structure mise en place

```
antenox-frontend/
├── public/
│   └── locales/
│       ├── fr/
│       │   └── translation.json  ← Traductions françaises
│       └── en/
│           └── translation.json  ← Traductions anglaises
├── src/
│   ├── i18n.ts                   ← Configuration i18next
│   ├── main.tsx                  ← Import de i18n ajouté
│   └── components/
│       └── LanguageSelector.tsx  ← Sélecteur de langue FR/EN
```

## Fichiers modifiés

Tous les composants suivants ont été mis à jour pour utiliser les traductions :

- ✅ `Header.tsx` - Titre et sous-titre
- ✅ `Navbar.tsx` - Menu de navigation + intégration du sélecteur de langue
- ✅ `AudioPlayer.tsx` - Labels d'accessibilité
- ✅ `SectionApropos.tsx` - Présentation du groupe
- ✅ `SectionConcerts.tsx` - Liste des concerts
- ✅ `SectionStream.tsx` - Plateformes de streaming
- ✅ `SectionTechnique.tsx` - Documents officiels
- ✅ `SectionContact.tsx` - Formulaire de contact
- ✅ `PastConcerts.tsx` - Archives des concerts
- ✅ `DocumentCard.tsx` - Cartes de documents
- ✅ `Footer.tsx` - Pied de page

## Comment ça fonctionne

### 1. Configuration (i18n.ts)

Le fichier `src/i18n.ts` :
- Détecte automatiquement la langue du navigateur
- Utilise le français comme langue de secours (fallbackLng)
- Charge les traductions depuis `public/locales/{langue}/translation.json`
- Compatible avec GitHub Pages grâce au `basePath` dynamique

### 2. Utilisation dans les composants

```tsx
import { useTranslation } from 'react-i18next'

export default function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <h1>{t('header.title')}</h1>
  )
}
```

### 3. Sélecteur de langue

Le composant `LanguageSelector` permet de basculer entre FR et EN :
- Design grunge cohérent avec la DA du site
- Icône globe + indicateur visuel FR/EN
- Stockage de la préférence dans localStorage

## Déploiement sur GitHub Pages

La configuration gère automatiquement le sous-répertoire `/antenox-frontend/` :

```ts
const basePath = isProduction ? '/antenox-frontend' : ''
```

Les fichiers JSON sont chargés via `fetch` avec le bon chemin en production.

## Ajouter de nouvelles traductions

1. Ouvrez `public/locales/fr/translation.json` et `public/locales/en/translation.json`
2. Ajoutez votre clé de traduction dans les deux fichiers :

```json
{
  "my_section": {
    "title": "Mon Titre",
    "description": "Ma description"
  }
}
```

3. Utilisez-la dans votre composant :

```tsx
<h2>{t('my_section.title')}</h2>
<p>{t('my_section.description')}</p>
```

## Support HTML dans les traductions

Pour les textes avec balises HTML (comme dans SectionApropos) :

```tsx
<p dangerouslySetInnerHTML={{ __html: t('about.intro_p1') }} />
```

## Langues supportées

- 🇫🇷 **Français** (langue par défaut)
- 🇬🇧 **Anglais** (traductions rock/alternatif)

---

**Note** : N'oubliez pas d'exécuter `pnpm install` avant de lancer le projet !

