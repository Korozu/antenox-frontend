export interface Concert {
    id: string;
    date: string;
    venue: string;
    city: string;
    country: string;
    ticketUrl?: string;
    isFree?: boolean;
    facebookEventUrl?: string;
}
