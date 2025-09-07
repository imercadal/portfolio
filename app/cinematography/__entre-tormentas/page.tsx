import FilmProject from "@/components/film-project"

export default function FilmDetails() {
    const filmData = {
        poster: "/entre-tormentas-poster.webp",
        title: "Entre Tormentas",
        year: 2025,
        duration: 13,
        country: "Puerto Rico",
        festivals: "SXSW",
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
        stills: [
        "/entre-tormentas-3.webp",
        "/entre-tormentas-1.webp",
        "/entre-tormentas-2.webp",
        "/entre-tormentas-4.webp",
        ],
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject {...filmData} />
        </main>
    )
}