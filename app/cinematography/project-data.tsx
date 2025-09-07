export interface Project {
    id?: number;
    title: string;
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

export const projects : Project[] = [
    {
        id: 1,
        title: "Entre Tormentas",
        slug: "entre-tormentas",
        category: "narrative",
        year: 2025,
        duration: 13,
        country: "Puerto Rico",
        festivals: ["SXSW"],
        logline:
        "After a hurricane ravaged his hometown, a grieving man breaks into an off-limits cemetery to rescue the lost remains of his brother in order to give him a proper burial.",
        credits: [
            { role: "Director", name: "Fran Zayas" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez, Surhail Navarro" },
            { role: "Cast", name: "José Eugenio Fernández, Magaly Carrasquillo, Eddie Díaz" },
            { role: "Cinematographer", name: "Irene Mercadal" },
            { role: "Editor", name: "Paul Wyderka, Fran Zayas" },
            { role: "Production Designer", name: "Ada Rodríguez" },
            { role: "Sound Designer", name: "Anna Tolkinen" },
            { role: "Colorist", name: "Patrick Devine" },
        ],
        mainImage: "/104_entre-tormentas-4.webp",
        poster: "/entre-tormentas-poster.webp",
        stills: [
        "/entre-tormentas-3.webp",
        "/entre-tormentas-1.webp",
        "/entre-tormentas-2.webp",
        "/entre-tormentas-4.webp",
        ],
    },
    {
        id: 2,
        title: "Honk",
        slug: "honk",
        category: "narrative",
        year: 2025,
        duration: 13,
        country: "US",
        festivals: ["Sunflower Film Festival"],
        logline: "A fleeting meditation. The suicide of a dear friend, the closing of my fertility window, getting older, being single, and giving birth. Middle life challenges. Who knew. These were all the events that led me to make HONK, a poem of sorts; an unexpected conversation between friends, long lost, the exploration of why people do what they do, the solace we create, and the relentless drive and beauty of nature to continue to thrive.",
        credits: [
            { role: "Director", name: "Fran Zayas" },
            { role: "Writer", name: "Vivia Honk" },
            { role: "Producer", name: "Vivia Honk" },
            { role: "Cast", name: "Wayne T. Carr, Vivia Font" },
            { role: "Cinematographer", name: "Irene Mercadal" },
        ],
        mainImage: "/111_honk-2_resized-3.webp",
        poster: "/110_Honk_poster.webp",
    },
    {
        id: 3,
        title: "Pusher",
        slug: "pusher",
        category: "narrative",
        year: 2024,
        duration: 12,
        country: "US",
        festivals: ["AAIFF"],
        logline: "Recently graduated from college and unemployed, Jeanie tries to get through her oppressively still and quiet days during the height of COVID-19 and is haunted by her witnessing her step-sister Minju being pushed in front of a moving subway train in a hate crime. When Jeanie is tasked with babysitting her niece, she fails to push through her intrusive thoughts of terrible things happening to her family.",
        credits: [
            { role: "Director", name: "John Kim" },
            { role: "Producer", name: "Dorothy Zixuan Wang, Joyce Xing" },
            { role: "Writer", name: "John Kim" },
            { role: "Cinematographer", name: "Irene Mercadal" },
            { role: "Cast", name: "Jueun Kang, Esther Hur" },
        ],
        mainImage: "/120_pusher-1.png",
        poster: "/122_pusher.png",
        stills: ["/124_pusher.jpeg", "/123_pusher.jpeg",  "/125_pusher.jpeg", "/126_pusher.jpeg",  "/122-1_pusher.jpeg", "/127_pusher.jpeg", "/129B_pusher.jpeg", "/123-2_pusher.jpeg"]
    },
]