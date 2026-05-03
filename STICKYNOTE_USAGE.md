# StickyNote Component - Guide d'utilisation

## Vue d'ensemble
Le composant `StickyNote` permet de transformer n'importe quel contenu en un post-it ou papier scotché, renforçant le style grunge/artisanal du site Antenox.

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | ReactNode | - | Contenu à afficher dans le post-it (obligatoire) |
| `color` | `'yellow' \| 'blue' \| 'gray' \| 'pink'` | `'yellow'` | Couleur du papier |
| `rotation` | number | `0` | Angle de rotation en degrés (-2 à 2 recommandé) |
| `className` | string | `''` | Classes CSS supplémentaires |
| `tapeColor` | `'light' \| 'dark'` | `'light'` | Couleur du scotch |

## Exemples d'utilisation

### 1. Formulaire de contact (déjà implémenté)
```tsx
<StickyNote color="yellow" rotation={-1.5} tapeColor="light">
  <form>
    {/* Contenu du formulaire */}
  </form>
</StickyNote>
```

### 2. Carte de concert
```tsx
<StickyNote color="blue" rotation={1.2} tapeColor="dark">
  <div>
    <h3 className="font-display text-2xl">Concert à Paris</h3>
    <p className="font-typewriter">Le Trianon - 15 Mai 2026</p>
  </div>
</StickyNote>
```

### 3. Note informative
```tsx
<StickyNote color="pink" rotation={-0.8}>
  <p className="font-handwriting text-lg">
    N'oubliez pas : prochain concert le 20 juin !
  </p>
</StickyNote>
```

### 4. Grille de post-its (concerts)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {concerts.map((concert, index) => (
    <StickyNote 
      key={concert.id}
      color={['yellow', 'blue', 'pink'][index % 3]}
      rotation={[1.5, -1.2, 0.8, -1.8][index % 4]}
    >
      <ConcertCard concert={concert} />
    </StickyNote>
  ))}
</div>
```

## Fonctionnalités

### Effet de scotch
Un pseudo-élément semi-transparent avec effet de flou simule un ruban adhésif en haut du papier.

### Interaction hover
- Au survol, le papier se redresse (rotation → 0°)
- Il se soulève légèrement (scale-105)
- L'ombre s'intensifie

### Texture papier
Une texture SVG subtile est appliquée en arrière-plan pour un aspect plus réaliste.

### Responsive
Le composant s'adapte automatiquement aux différentes tailles d'écran grâce aux classes `p-6 md:p-8`.

## Polices disponibles

Deux nouvelles polices ont été ajoutées à Tailwind :
- `font-typewriter` : Style machine à écrire (Courier New)
- `font-handwriting` : Style écriture manuscrite (Indie Flower - nécessite Google Fonts)

## Intégration Google Fonts

Ajoutez dans `index.html` (dans le `<head>`) :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
```

## Couleurs disponibles

- **Yellow** : Post-it jaune classique (#FFF4A3)
- **Blue** : Papier bleu clair (#A8D8EA)
- **Gray** : Papier journal gris (#D9D9D9)
- **Pink** : Post-it rose (#FFB6C1)

## Conseils d'utilisation

1. **Variez les rotations** : Utilisez des angles entre -2° et 2° pour un effet naturel
2. **Alternez les couleurs** : Créez un rythme visuel en variant les couleurs
3. **Responsive** : Sur mobile, réduisez le nombre de colonnes dans vos grilles
4. **Accessibilité** : Le contenu reste accessible, le composant ne gêne pas la navigation au clavier

