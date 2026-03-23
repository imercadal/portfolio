export interface OtherProject {
    id?: number;
    title: string;
    bajada?: string;
    slug: string;
    category?: string;
    year: number;
    country?: string;
    festivals?: string[];
    description: string;
    credits?: Array<{ role: string, name: string }>;
    mainImage: string;
    stills?: string[];
    urlToItem?: Array<{ title: string, url: string }>;
}