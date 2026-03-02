export type ProjectRole = "Director" | "Cinematographer"

export interface Project {
    id?: number;
    title: string;
    roles: ProjectRole[]
    slug: string;
    category: string;
    year: number;
    duration?: number;
    country: string;
    festivals?: string[];
    logline: string;
    credits: Array<{ role: string, name: string }>;
    mainImage: string;
    poster?: string;
    stills?: string[];
}