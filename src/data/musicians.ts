export interface Musician {
  name: string
  role: string
  photo: string
  bio: string
  quote?: string
}

export const MUSICIANS: Musician[] = [
  {
    name: 'Kael',
    role: 'Guitare & Voix',
    photo: 'https://picsum.photos/seed/kael/400/530',
    bio: "Fondateur et frontman d'Antenox, Kael développe depuis l'enfance une obsession pour les guitares saturées et les textes qui grattent. Influencé par Fugazi, Nick Cave et le krautrock, il cherche dans chaque morceau la tension maximale avant la rupture.",
    quote: '"Je veux que les gens sortent du concert avec quelque chose de cassé en eux — en bien."',
  },
  {
    name: 'Mira',
    role: 'Basse & Synthétiseurs',
    photo: 'https://picsum.photos/seed/mira/400/530',
    bio: "Mira est l'architecte sonique du groupe. Sa basse lourde et ses nappes de synthé créent la colonne vertébrale sur laquelle tout repose. Formée au conservatoire avant de tout plaquer pour le noise, elle apporte une rigueur harmonique rare dans le rock alternatif.",
    quote: '"La basse, c\'est la gravité. Enlève-la et tout s\'envole — mais pas de la bonne façon."',
  },
  {
    name: 'Dov',
    role: 'Batterie',
    photo: 'https://picsum.photos/seed/dov/400/530',
    bio: "Dov frappe comme si chaque concert était le dernier. Son jeu, à la croisée du jazz free et du hardcore, maintient le groupe dans un état d'urgence permanente. Il est le moteur thermique d'Antenox — bruyant, chaud, irremplaçable.",
  },
  {
    name: 'Nyx',
    role: 'Guitare & Samples',
    photo: 'https://picsum.photos/seed/nyx/400/530',
    bio: "Arrivée en dernier dans le groupe, Nyx en est aujourd'hui la couleur. Ses textures de guitare ambient et ses samples déconstruits ouvrent des espaces que les autres instruments s'empressent de remplir. Elle vient du monde de la musique électronique et ça s'entend.",
    quote: '"Je ne joue pas de la guitare. Je joue de l\'espace entre les notes."',
  },
]

