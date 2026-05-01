export type ProjectRole = "Director" | "Cinematographer"

export interface Project {
    id: number;
    title: string;
    bajada?: string;
    roles?: ProjectRole[]
    slug: string;
    category: string;
    year: number;
    duration?: number;
    country: string;
    status?: string;
    festivals?: string[];
    logline: string;
    credits?: Array<{ role: string, name: string }>;
    mainImage: string;
    poster?: string;
    stills?: string[];
    urlToItem?: Array<{ title: string, url: string }>;
}