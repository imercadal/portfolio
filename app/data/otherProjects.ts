import { Project } from "../types/project";

export const otherProjects : Project[] = [
{
        id: 1,
        title: "Dirt and Water",
        bajada: "2-channel video installation",
        slug: "dirtwater",
        category: "Installation",
        year: 2022,
        country: "NYC",
        logline: "Super 16 mm Film, Audio Recordings, AI-Generated Transcriptions & Data Extraction, Data Analysis. Shown as part of the This Is Not a Drill Exhibition on technology, the climate emergency, equity, and creative practice.",
        mainImage: "/TINAD_1.jpg",
        urlToItem: [{ title: "TINAD website", url: "https://nyu.manifoldapp.org/projects/this-is-not-a-drill-exhibition-catalog"}],
    }, 
    {
        id: 2,
        title: "Pare de sufrir",
        bajada: "Podcast",
        slug: "paredesufrir",
        category: "Podcast",
        year: 2024,
        country: "Latin America",
        logline: "Interviews with Latin American filmmakers and dramatic artists about their work and the state of film today.",
        credits: [            
            { role: "Hosting & Audio by", name: "Irene Mercadal" },
            { role: "Music by", name: "Benjamin Griffiths" },
        ],
        mainImage: "/Poster_T2_gradient.png",
        urlToItem: [
            { title: "Apple Music", url: "https://podcasts.apple.com/us/podcast/pare-de-sufrir/id1650451493"},
            { title: "Spotify", url: "https://open.spotify.com/show/4C3I14E2S0y2U4Gcy49xso?si=331808d13d794908"}
        ],
    }, 
    {
        id: 3,
        title: "Developer portfolio",
        bajada: "web projects",
        slug: "dev-portfolio",
        category: "Developer",
        year: 2024,
        country: "Chile, US",
        logline: "Check out some of the projects I've developed from scratch.",
        credits: [            
            { role: "Technologies", name: "JS, TS, Node.js, React, Next.js, TailwindCSS, i18n, REST APIs, Git, Sanity CMS, AWS, Axios, JQuery, Vercel, Material UI, Framer Motion." }
        ],
        mainImage: "/dev2.png",
        urlToItem: [
            { title: "GO TO PORTFOLIO", url: "https://irenemercadal.dev"}
        ],
    }, 
]

/**
Dirt and Water is an artistic research of peatlands, a type of wetland that covers 3% of the global land surface but stores 21% of all the carbon locked in the soil. Through interviews of inhabitants of peatlands and landscape filming, we share our findings as a compendium of contradicting perspectives.

Despite being relatively unknown ecosystems, peatlands play an essential role in adapting to climate change. Partially flooded land born from the melting of glaciers thousands of years ago, peatlands' biotic components (moss, lichens, plants) degrade very slowly, which means the carbon they capture from the atmosphere is deposited into layers of organic matter. If dried out or destroyed, the carbon they hold is released into the atmosphere.

As if that weren't enough, peatlands act as "huge sponges," capturing rain water and slowly releasing it to the groundwater, thus acting as fresh water reservoirs. They also protect the land against floods, hurricanes, droughts, and tsunamis, and are home to great biodiversity.

Unfortunately, the wonders of peatlands are largely unheard of, and they are subject to exploitation and draining. Therefore, we focused our research on investigating what people know about peatlands, what they think they are, and how they relate to these ecosystems.

Our thesis: we initially thought people who live near peatlands would have a more pragmatic relationship to them than scientists and activists that know about them, but are outsiders.

We spoke to and interviewed inhabitants of the Tortel commune in the Aysén Region of the Chilean Patagonia, as well as biologists who work in natural conservation of flora and fauna in the same area. In the process, we filmed the peatlands: from those being "harvested," meaning the peat is being extracted, to pristine peatlands hidden far into the fiords.

When we sat down to analyze the interviews, we quickly realized that it wasn't as simple as a binary of two groups with opposing perspectives, but a variety of voices, each with their unique perspective. Some of the stances we heard were hard for us to grasp, because of the geographical, cultural, and historical distance that separated us.

Using automated transcriptions and data analysis, we extracted the most commonly used words of each interview. Although the differences were minimal, we found the text extracted from the scientists' interviews was pretty accurate, but the text extracted from the local's interviews included a large number of random words that the AI registered wrong. AI feeds off the voices that are present on the internet, and these people's way of speaking largely does not exist online. AI was unable to understand their words in the same way that we couldn't understand their points of view. Technology, in this case, maintained that distance.

In an interconnected world, are minorities and remote communities included in the narrative? The fight against global warming requires a coordinated response amongst the world's inhabitants: are we making enough effort to include everybody's voices in the conversation on how to face it?
 */