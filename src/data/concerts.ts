export interface Concert {
    id: string;
    date: string;
    venue: string;
    city: string;
    country: string;
    ticketUrl?: string;
    isFree?: boolean;
}

export const CONCERTS: Concert[] = [
    { id: 'c5', date: '2023-05-12', venue: 'The Black Lab', city: 'Wasquehal', country: 'FR', isFree: true },
    { id: 'c1', date: '2026-04-04', venue: 'Tremplin Barb\'n\'Rock Festival', city: 'Crèvecoeur-le-grand', country: 'FR', isFree: true },
    { id: 'c4', date: '2026-06-30', venue: 'The Black Lab', city: 'Wasquehal', country: 'FR', isFree: true },
    { id: 'c2', date: '2026-05-09', venue: 'Tremplin Les Agités du Mélange', city: 'Vieux-Condé', country: 'FR', isFree: true },
    { id: 'c3', date: '2026-06-20', venue: 'Fête de la Musique', city: 'Carnières', country: 'FR', isFree: true },
    { id: 'c6', date: '2024-11-02', venue: 'Halloween Music Festival', city: 'Frameries', country: 'BE' },
    { id: 'c7', date: '2024-11-09', venue: 'The Black Lab', city: 'Wasquehal', country: 'FR', isFree: true },
    { id: 'c8', date: '2024-12-06', venue: 'Le Passage à Niveau', city: 'Béthune', country: 'FR' },
    { id: 'c9', date: '2024-12-14', venue: 'La Civette', city: 'Le Cateau-Cambresis', country: 'FR' },
    { id: 'c10', date: '2025-01-15', venue: 'Ninkasi', city: 'Lezennes', country: 'FR' },
    { id: 'c11', date: '2025-03-26', venue: 'Tremplin Perno Rock Festival', city: 'Lille', country: 'FR' },
    { id: 'c12', date: '2025-05-17', venue: 'Sault\'Ink Convention', city: 'Saultain', country: 'FR' },
    { id: 'c13', date: '2025-06-07', venue: 'La Griffe', city: 'Lille', country: 'FR' },
    { id: 'c14', date: '2025-06-21', venue: 'Fête de la Musique', city: 'Templemars', country: 'FR' },
    { id: 'c15', date: '2025-07-08', venue: 'The Black Lab', city: 'Wasquehal', country: 'FR', isFree: true },
    { id: 'c16', date: '2025-07-12', venue: 'Le Skål Bar', city: 'La Bassée', country: 'FR', isFree: true },
    { id: 'c17', date: '2025-10-31', venue: 'Halloween Music Festival', city: 'Frameries', country: 'BE' },
    { id: 'c18', date: '2025-11-07', venue: 'High Voltage Bar', city: 'Lille', country: 'FR', isFree: true },
];
