/**
 * PhotoGallery
 *
 * Simule la lecture de fichiers Markdown :
 * chaque objet Photo représente le front-matter + le contenu
 * qu'on extrairait d'un fichier .md (ex: via gray-matter).
 *
 * En production, remplacer PHOTO_DATA par un import dynamique
 * des fichiers Markdown depuis /content/photos/*.md
 */

/* ──────────────────────────────────────────
   Type strict Photo
────────────────────────────────────────── */
export interface Photo {
  /** Slug unique (nom du fichier .md sans extension) */
  slug: string
  /** Titre de la photo */
  title: string
  /** URL de l'image (placeholder via picsum) */
  src: string
  /** Alt text accessible */
  alt: string
  /** Date de prise de vue ISO 8601 */
  date: string
  /** Lieu / événement */
  location: string
  /** Photographe */
  photographer?: string
  /** Tags libres */
  tags: string[]
}

/* ──────────────────────────────────────────
   Données simulées (front-matter Markdown)
────────────────────────────────────────── */
const PHOTO_DATA: Photo[] = [
  {
    slug: 'concert-paris-2024',
    title: 'Paris — La Maroquinerie',
    src: 'https://picsum.photos/seed/antenox1/600/400',
    alt: 'Antenox en concert à la Maroquinerie, Paris',
    date: '2024-11-15',
    location: 'La Maroquinerie, Paris',
    photographer: 'Léa Moreau',
    tags: ['concert', 'live', 'paris'],
  },
  {
    slug: 'studio-session-2025',
    title: 'Session Studio — Mars 2025',
    src: 'https://picsum.photos/seed/antenox2/600/400',
    alt: 'Enregistrement en studio',
    date: '2025-03-08',
    location: 'Studio Galilée, Lyon',
    photographer: 'Tom Desmarais',
    tags: ['studio', 'recording'],
  },
  {
    slug: 'festival-ete-2025',
    title: 'Festival des Vieilles Charrues',
    src: 'https://picsum.photos/seed/antenox3/600/400',
    alt: 'Antenox sur scène au festival',
    date: '2025-07-20',
    location: 'Carhaix-Plouguer',
    photographer: 'Léa Moreau',
    tags: ['festival', 'live', 'outdoor'],
  },
  {
    slug: 'backstage-bordeaux',
    title: 'Backstage — Bordeaux',
    src: 'https://picsum.photos/seed/antenox4/600/400',
    alt: 'Backstage avant le concert de Bordeaux',
    date: '2025-02-03',
    location: 'Rock School Barbey, Bordeaux',
    tags: ['backstage', 'coulisses'],
  },
  {
    slug: 'portrait-groupe',
    title: 'Portrait officiel 2025',
    src: 'https://picsum.photos/seed/antenox5/600/400',
    alt: 'Portrait officiel du groupe Antenox',
    date: '2025-01-10',
    location: 'Paris',
    photographer: 'Tom Desmarais',
    tags: ['portrait', 'officiel'],
  },
  {
    slug: 'tournee-automne-2024',
    title: 'Tournée Automne 2024',
    src: 'https://picsum.photos/seed/antenox6/600/400',
    alt: 'Vue de scène pendant la tournée automne',
    date: '2024-10-02',
    location: 'Nantes',
    photographer: 'Léa Moreau',
    tags: ['tournée', 'live', 'nantes'],
  },
]

/* ──────────────────────────────────────────
   Composant
────────────────────────────────────────── */
export default function PhotoGallery() {
  return (
    <div className="flex flex-wrap gap-4">
      {PHOTO_DATA.map((photo) => (
        <article
          key={photo.slug}
          className="group relative overflow-hidden border-2 border-[#1A1A1A] bg-[#1A1A1A] flex-1 min-w-[280px]"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full aspect-[3/2] object-cover grayscale group-hover:grayscale-0
                       transition-all duration-500 group-hover:scale-105"
          />

          {/* Overlay info */}
          <div
            className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100
                       transition-opacity duration-300 flex flex-col justify-end p-4"
          >
            <p className="font-display text-[#E5E5E5] text-xl leading-tight">{photo.title}</p>
            <p className="font-mono text-[#3d6399] text-[11px] mt-1 tracking-wide">
              {photo.location}
            </p>
            <div className="flex items-center justify-between mt-2">
              <time
                dateTime={photo.date}
                className="font-mono text-[10px] text-[#7a7a7a]"
              >
                {new Date(photo.date).toLocaleDateString('fr-FR', {
                  day: '2-digit', month: 'long', year: 'numeric',
                })}
              </time>
              {photo.photographer && (
                <span className="font-mono text-[10px] text-[#7a7a7a]">
                  © {photo.photographer}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {photo.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] px-2 py-0.5 bg-[#2D4B73] text-white uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
