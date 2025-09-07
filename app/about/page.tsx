import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="container mx-auto  max-w-4xl px-4 py-24 pt-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
                <div className="relative aspect-[3/4] w-full sm:w-1/2 md:w-full mx-auto sm:px-0">
                    <Image src="/10_Irenes-headshot.webp" alt="Irene Mercadal" fill className="object-cover" />
                </div>
                <div className="space-y-6 text-sm">
                    <p className="text-base font-bold">Hi! I’m Irene, a filmmaker  and interdisciplinary artist.</p>
                    <p>
                        My <Link href='/directing' className="font-bold">films</Link> explore a variety of topics, 
                        including environmentalism, power dynamics and social justice, and I’m particularly interested 
                        in exploring the female gaze.
                    </p>
                    <p>
                        My debut feature film <Link href='/directing/aguas-y-restos' className="font-bold">Aguas y restos</Link> is in development 
                        and is currently part of the <a href="https://www.torinofilmlab.it/" rel="noopener noreferrer">Torino Film Lab's</a> Green Narratives 
                        development workshop. My short film Baby Steps was just finished and will premiere soon. And although I specialize in film, I also 
                        work with mixed media, I am a full stack developer, and collaborate with digital artists, theater makers and performers, particularly 
                        within the company I’m a part of, <a href="https://glitchworks.org/" rel="noopener noreferrer" className="font-bold"> Glitch</a>.
                    </p>
                    <p>
                        I grew up in Talca, Chile, and  I’ve been living in NYC for the past seven years. In that period, I’ve graduated with a Film MFA 
                        from NYU Tisch and I’ve been Director of Photography on numerous short narrative films. My work is shaped by my bachelor degree 
                        in film aesthetics, and my previous work in documentary film back in Chile.
                    </p>
                    <p>
                        Besides dedicating some time to my projects as writer/director, I’m interested in collaborating with other people, 
                        whether as a DP or in any capacity that will allow me to explore, grow and learn. So if my work looks like down your alley, hit me up!
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row text-sm/7 pt-8">
                <div className="flex sm:w-1/2 pb-6 md:pb-0 bg-red-10">
                    <h2 className="w text-base font-light mb-2">CONTACT</h2>
                    <div className="flex-2 pl-6 sm:pl-8 md:pl-12 bg-green-10">
                        <a
                            href="mailto:irenemercadal@gmail.com"
                            rel="noopener noreferrer"
                        >
                            <p className="pl-3">Email — irenemercadal@gmail.com</p>
                        </a>
                        <a
                            href="https://www.instagram.com/imercadal/"
                            rel="noopener noreferrer"
                        >
                            <p className="pl-3">Instagram — imercadal</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/irene-mercadal/"
                            rel="noopener noreferrer"
                        >
                            <p className="pl-3">LinkedIn — irene-mercadal</p>
                        </a>
                    </div>
                </div>
                <div className="flex sm:w-1/2">
                    <h2 className="flex-1 text-base font-light mb-2">AWARDS</h2>
                    <div className="flex-2 pl-12">
                        <p>Volker Bahnemann Award for Outstanding Cinematography, awarded by ARRI 2022</p>
                        <p>Nestor Almendros Award for Best Cinematography, First Run Film Festival 2025</p>
                    </div>
                </div>

            </div>
        </div>

  )
}

/**
     <Image
        src='/instagram-icon.webp'
        alt="Instagram Logo"
        height={20}
        width={20}
    />


            <div className="container mx-auto px-4 py-24 pt-36">
            <div className="flex">
                <div className="pt-6 grid gap-y-2">
                    <h2 className="text-xl font-light mb-2">CONTACT</h2>
                    <div className="bg-green-100">
                        <a
                            href="mailto:irenemercadal@gmail.com"
                            rel="noopener noreferrer"
                        >
                            <p className="pl-3">Email — irenemercadal@gmail.com</p>
                        </a>
                        <a
                            href="https://www.instagram.com/imercadal/"
                            rel="noopener noreferrer"
                        >
                            <p className="pl-3">Instagram — imercadal</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/irene-mercadal/"
                            rel="noopener noreferrer"
                        >
                            <p className="pl-3">LinkedIn — irene-mercadal</p>
                        </a>
                    </div>
                </div>
                <div className="pt-6 grid gap-y-2">
                    <h2 className="text-xl font-light mb-2">AWARDS</h2>
                    <p>Volker Bahnemann Award for Outstanding Cinematography, awarded by ARRI 2022</p>
                    <p>Nestor Almendros Award for Best Cinematography, First Run Film Festival 2025</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="relative aspect-[3/4] w-full">
                    <Image src="/10_Irenes-headshot.webp" alt="Irene Mercadal" fill className="object-cover" />
                </div>
                <div className="space-y-6 text-sm">
                    <p className="text-base font-bold">Hi! I’m Irene, a filmmaker  and interdisciplinary artist.</p>
                    <p>
                        My <Link href='/directing' className="font-bold">films</Link> explore a variety of topics, 
                        including environmentalism, power dynamics and social justice, and I’m particularly interested 
                        in exploring the female gaze.
                    </p>
                    <p>
                        My debut feature film <Link href='/directing/aguas-y-restos' className="font-bold">Aguas y restos</Link> is in development 
                        and is currently part of the <a href="https://www.torinofilmlab.it/" rel="noopener noreferrer">Torino Film Lab's</a> Green Narratives 
                        development workshop. My short film Baby Steps was just finished and will premiere soon. And although I specialize in film, I also 
                        work with mixed media, I am a full stack developer, and collaborate with digital artists, theater makers and performers, particularly 
                        within the company I’m a part of, <a href="https://glitchworks.org/" rel="noopener noreferrer" className="font-bold"> Glitch</a>.
                    </p>
                    <p>
                        I grew up in Talca, Chile, and  I’ve been living in NYC for the past seven years. In that period, I’ve graduated with a Film MFA 
                        from NYU Tisch and I’ve been Director of Photography on numerous short narrative films. My work is shaped by my bachelor degree 
                        in film aesthetics, and my previous work in documentary film back in Chile.
                    </p>
                    <p>
                        Besides dedicating some time to my projects as writer/director, I’m interested in collaborating with other people, 
                        whether as a DP or in any capacity that will allow me to explore, grow and learn. So if my work looks like down your alley, hit me up!
                    </p>
                </div>
            </div>
        </div>
 */