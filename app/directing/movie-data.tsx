export interface Movie {
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

export const movies : Movie[] = [
 {
        id: 1,
        title: "Baby Steps",
        slug: "babysteps",
        category: "Short Film",
        year: 2025,
        duration: 12,
        country: "US",
        logline: "A quirky 35-year old unemployed artist living in NYC, is determined to become a mother while trying to make ends meet.",
        credits: [            
            { role: "Writer/Director", name: "Irene Mercadal" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez" },
            { role: "Cast", name: "Glenna Brucken, Attilio Rigotti" },
            { role: "Cinematographer", name: "Elo Santa Maria" },
            { role: "Production Designer", name: "Hillia Aho" },
            { role: "Editor", name: "Orsolya Szánthó, Irene Mercadal" },
            { role: "Production Company", name: "Glitch & Desvelo" },
        ],
        mainImage: "/537-B_Babysteps.jpg",
        poster: "/530_Babysteps_Poster.png",
        stills: ["/534_Babysteps.png", "/533_Babysteps.png", "/536_Babysteps.png", "/532_Babysteps.png"]
    },    
    {
        id: 2,
        title: "Aguas y restos",
        slug: "aguas-y-restos",
        category: "Feature Film",
        year: 2027,
        duration: 90,
        country: "Chile",
        festivals: ["Torino Film Lab 2025", "Ventana Sur 2022", "Fondo de Fomento Audiovisual 2022"],
        logline: "An ambitious conservationist travels to a remote town in the south of Chile to save its endangered wetlands. As she becomes entangled with the local townsfolk and stalked by mysterious aquatic beings called the Sumpal, she questions whether she’s there to save the wildlife or be an accessory to their destruction. ",
        credits: [            
            { role: "Director", name: "Irene Mercadal" },
            { role: "Producer", name: "Fran Zayas" }
        ],
        mainImage: "/511_AyR.jpeg",
        poster: "/516_AyR.jpg",
    },    
    {
        id: 3,
        title: "Weona Loca",
        slug: "weona-loca",
        category: "Short film",
        year: 2021,
        country: "Chile",
        logline: "After being suspended by the school principal, explosive high school student Camila persuades her schoolmates to take-up-arms and join a pacific student protest. When no student shows up for the protest, Camila leads her friends to sneak into their school and break into the principal’s office. Things quickly escalate to a dead end and Camila is faced with a choice to make: to give up or to push forward.",
        festivals: ["Palm Springs International Film Festival", "Santiago International Film Festival"],
        credits: [            
            { role: "Director", name: "Irene Mercadal" },
            { role: "Producer", name: "Fran Zayas, Cono Vallejos" },
            { role: "Cast", name: "Michelle Mella ∙ Mabel Urrutia ∙ Rodrigo Calderón ∙ Valentina Bravo ∙ Luna Jara" },
            { role: "Editor", name: "Camila Mercadal, Irene Mercadal" },
            { role: "Cinematographer", name: "Mark Ingber" },
            { role: "Production Designer", name: "Maria Feuereisen" },
        ],
        mainImage: "/502_WL.png",
        poster: "/500_WL_Poster.png",
        stills: ["/502_WL.png", "/503_WL.png", "/504_WL.png", "/505_WL.png"]
    },
    {
        id: 4,
        title: "Alberto",
        slug: "alberto",
        category: "Short film",
        year: 2021,
        duration: 11,
        country: "US",
        logline: "A sensitive strip dancer finds intimacy in a lost poetry notebook. ",
        credits: [            
            { role: "Director", name: "Irene Mercadal" },
            { role: "Producer", name: "Fran Zayas" },
            { role: "Cast", name: "Branden Lindsay, Julie Benko, Jennifer Mogbock, James Henry" }
        ],
        mainImage: "/542_Alberto.jpeg",
        poster: "/541_Alberto.jpeg",
        stills: ["/542_Alberto.jpeg", "/543_Alberto.jpeg", "/544_Alberto.jpeg", "/545_Alberto.jpeg"]
    },
    {
        id: 5,
        title: "Barrio de perros",
        category: "Short Film",
        slug: "barrio-de-perros",
        year: 2016,
        duration: 4,
        country: "Chile",
        logline: "A tale of human society is found in the daily life of a dog’s shelter.",
        credits: [            
            { role: "Director", name: "Irene Mercadal" }
        ],
        mainImage: "/520_Barriodeperros.png",
        poster: "/520_Barriodeperros.png",
        stills: ["/521_Barriodeperros.png", "/522_Barriodeperros.png", "/523_Barriodeperros.png", "/524_Barriodeperros.png"]
    },
    {
        id: 6,
        title: "La pesca milagrosa",
        slug: "la-pesca",
        category: "Documentary",
        year: 2019,
        country: "Chile",
        logline: "Three friends spend an afternoon fishing, where the main goal is everything but.",
        credits: [            
            { role: "Director & Camera", name: "Irene Mercadal" }
        ],
        mainImage: "/560_Lapesca-square.png",
        poster: "/563_Lapesca_poster.png"
    },
]