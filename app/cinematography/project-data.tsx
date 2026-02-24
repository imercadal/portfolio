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
        title: "Entre tormentas",
        slug: "entre-tormentas",
        category: "narrative",
        year: 2025,
        duration: 13,
        country: "Puerto Rico",
        festivals: ["SXSW" , "New Orleans International Film Festival", "Mar del Plata International Film Festival", "Shorts Mexico", "Vermont International Film Festival", "FEST - New Directors/New Films Festival", "Curta Kinoforum - São Paulo International Short Film Festival", "International Short Film Festival of Cyprus"],
        logline:
        "After a hurricane ravaged his hometown, a grieving man breaks into an off-limits cemetery to rescue the lost remains of his brother in order to give him a proper burial.",
        credits: [
            { role: "Director", name: "Fran Zayas" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez, Surhail Navarro" },
            { role: "Cast", name: "José Eugenio Fernández, Magaly Carrasquillo, Eddie Díaz" },
            { role: "Cinematographer", name: "Irene Mercadal" },
            { role: "Editor", name: "Paul Wyderka, Fran Zayas" },
            { role: "Production Designer", name: "Ada Rodríguez" },
            { role: "Sound Designer", name: "Anne Tolkkinen" },
            { role: "Colorist", name: "Patrick Devine" },
        ],
        mainImage: "/101_entre-tormentas-main.webp",
        poster: "/100_entre-tormentas-poster.webp",
        stills: [
        "/105_entre-tormentas.webp",
        "/102_entre-tormentas.webp",
        "/103_entre-tormentas.webp",
        "/101_entre-tormentas-main.webp",
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
        festivals: ["Indie Street Film Festival", "Sunflower Film Festival", "Imagine This Woman's Film Festival"],
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
        mainImage: "/120_pusher-1.webp",
        poster: "/125_pusher.jpeg",
        stills: ["/124_pusher.jpeg", "/123_pusher.jpeg",  "/128_pusher.jpeg", "/126_pusher.jpeg",  "/122-1_pusher.jpeg", "/127_pusher.jpeg", "/129B_pusher.jpeg", "/123-2_pusher.jpeg"]
    },
    {
        id: 4,
        title: "Grandma & I",
        slug: "grandma-and-i",
        category: "narrative",
        year: 2025,
        duration: 12,
        country: "US",
        logline: "An eccentric Chinese grandma with Alzheimer’s and her depressed out-of-school American granddaughter connect with their past, present, and future.",
        credits: [
            { role: "Director", name: "Aubrey Wang" },
            { role: "Producers", name: "Aubrey Zehui Wang, Jack Auen, Sin Young Kim" },
            { role: "Writer", name: "John Kim" },
            { role: "Cinematographer", name: "Irene Mercadal" },
            { role: "Cast", name: "Clio Barrett, Julyana Soelistyo" },
        ],
        mainImage: "/160_Grandma-and-I.jpg",
        poster: "/161_Grandma-and-I.jpg",
        stills: ["/163_Grandma-and-I.jpg", "/160_Grandma-and-I.jpg",  "/165_Grandma-and-I.jpg", "/164_Grandma-and-I.jpg"]
    },
    {
        id: 5,
        title: "Scoby",
        slug: "scoby",
        category: "narrative",
        year: 2025,
        duration: 10,
        country: "US",
        logline: "",
        credits: [
            { role: "Director", name: "Benji Santayana Zusman" },
            { role: "Producer", name: "Raha Amirfazli" },
            { role: "Cinematographer", name: "Irene Mercadal" },
            { role: "Cast", name: "Clio Barrett, Julyana Soelistyo" },
        ],
        mainImage: "/130_scoby.jpg",
        poster: "/130_scoby.jpg",
        stills: ["/130_scoby.jpg", "/130_scoby.jpg",  "/130_scoby.jpg", "/130_scoby.jpg"]
    },
    {
        id: 8,
        title: "A Toy Car",
        slug: "a-toy-car",
        category: "narrative",
        year: 2019,
        duration: 9,
        country: "US",
        logline: "A fishmonger attends a lavish Chinese New Year's party at the home of his cousin, a well-off headmaster, to ask him for his son's acceptance into the school.",
        credits: [
            { role: "Starring", name: "Yi He · Xiaomei Huang · Jie Wang" },
            { role: "Directed by", name: "Yumeng Han" },
            { role: "Produced by", name: "Ewing Luo, Paul Oscar Kanter, Yumeng Han" },
            { role: "Written by", name: "Yumeng Han" },
            { role: "Cinematographer", name: "Irene Mercadal" },
        ],
        mainImage: "/180_AToyCar.png",
        poster: "/180_AToyCar.png",
        stills: ["/181_AToyCar.png", "/182_AToyCar.png",  "/183_AToyCar.png", "/184_AToyCar.png"]
    },
]