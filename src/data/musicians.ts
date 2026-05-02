export interface Musician {
  name: string
  role: string
  photo: string
  bio: string
  quote?: string
}

export const MUSICIANS: Musician[] = [
  {
    name: 'Vic',
    role: 'Guitare & Voix',
    photo: 'https://picsum.photos/seed/kael/400/530',
    bio: "Le rock, pour Vic, c'est dans son ADN familial\n" +
        "depuis l'enfance. Côté influences, c'est la\n" +
        "sainte trinité : le grunge sans filtre de Nirvana,\n" +
        "la puissance de Foo Fighters, et l'attitude cash\n" +
        "d'Oasis. Sur scène, c'est lui qui hurle et\n" +
        "balance les riffs, le moteur scénique qui refuse\n" +
        "toute barrière. Sa mission est simple :\n" +
        "transformer le public en un chaos organisé et\n" +
        "suant pour une communion totale à chaque\n" +
        "\n" +
        "live.",
    quote: '"No Worries"',
  },
  {
    name: 'Marion',
    role: 'Batterie',
    photo: 'https://picsum.photos/seed/mira/400/530',
    bio: "Marion, c'est la précision chirurgicale qui\n" +
        "cimente le chaos d'Antenox, la seule femme\n" +
        "derrière les fûts. Elle a fait ses classes aux\n" +
        "percussions avant d'être forgée par la\n" +
        "puissance et le groove de groupes comme\n" +
        "Linkin Park, Nothing But Thieves, et The\n" +
        "Warning. Elle est le métronome humain qui\n" +
        "assure un tempo nerveux qui ne dévie\n" +
        "jamais. Le plus fort ? Elle est toujours\n" +
        "souriante sur scène, la preuve qu'on peut\n" +
        "allier good vibes et gros rock sans\n" +
        "\n" +
        "concessions."
  },
  {
    name: 'Alex',
    role: 'Basse',
    photo: 'https://picsum.photos/seed/dov/400/530',
    bio: "Alex joue depuis 15 ans, avec une basse\n" +
        "quasi greffée aux mains. Autodidacte et\n" +
        "passionné, il puise son style entre le groove\n" +
        "explosif de Rage Against the Machine et les\n" +
        "vibes plus old school d’Iron Maiden ou Deep\n" +
        "Purple. C’est le pilier tranquille du groupe,\n" +
        "celui qui garde tout le monde aligné et fait\n" +
        "tourner l’ensemble avec cohésion et solidité\n" +
        "– toujours au service du son, toujours au\n" +
        "\n" +
        "service du collectif."
  },
  {
    name: 'Rem',
    role: 'Guitare & Voix',
    photo: 'https://picsum.photos/seed/nyx/400/530',
    bio: 'Rémi tombe dans la musique ado, grâce aux\n' +
        'groupes que son père lui faisait tourner en\n' +
        'boucle à la maison. Il chope une gratte à 15\n' +
        'ans et apprend tout en autodidacte, avec\n' +
        'passion et persévérance. Son truc, c’est\n' +
        'composer des riffs qui tabassent, influencés\n' +
        'par le metal moderne façon Landmvrks,\n' +
        'Ashen ou Novelists. Toujours à la recherche\n' +
        'du bon son, entre mélodie bien sentie et gros\n' +
        '\n' +
        'mur de guitare.'
  },
]

