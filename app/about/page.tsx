import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Irene Mercadal | About",
    description: "Irene Mercadal is a filmmaker, cinematographer, and interdisciplinary artist based in NYC. Film MFA from NYU Tisch, director of Aguas y restos, and member of Glitch.",
};

export default function About() {
    return (
        <>
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-16 pt-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
                    <div className="relative aspect-[3/4] w-full sm:w-1/2 md:w-full mx-auto sm:px-0 max-h-[80vh]">
                        <Image src="/10_Irenes-headshot.webp" alt="Irene Mercadal" fill className="object-cover" />
                    </div>
                    <div className="space-y-6 text-sm">
                        <p className="text-base font-bold">Hi! I&apos;m Irene, a filmmaker  and interdisciplinary artist.</p>
                        <p>
                            My <Link href='/directing' className="font-bold">films</Link> explore a variety of topics, 
                            including environmentalism, power dynamics and social justice, and I&apos;m particularly interested 
                            in exploring the female gaze.
                        </p>
                        <p>
                            My debut feature film <Link href='/directing/aguas-y-restos' className="font-bold">Aguas y restos</Link> is in development 
                            and is currently part of the <a href="https://www.torinofilmlab.it/" rel="noopener noreferrer">Torino Film Lab&apos;s</a> Green Narratives 
                            development workshop. My short film Baby Steps was just finished and will premiere soon. And although I specialize in film, I also 
                            work with mixed media, I am a full stack developer, and collaborate with digital artists, theater makers and performers, particularly 
                            within the company I&apos;m a part of, <a href="https://glitchworks.org/" rel="noopener noreferrer" className="font-bold"> Glitch</a>.
                        </p>
                        <p>
                            I grew up in Talca, Chile, and  I&apos;ve been living in NYC for the past seven years. In that period, I&apos;ve graduated with a Film MFA 
                            from NYU Tisch and I&apos;ve been Director of Photography on numerous short narrative films. My work is shaped by my bachelor degree 
                            in film aesthetics, and my previous work in documentary film back in Chile.
                        </p>
                        <p>
                            Besides dedicating some time to my projects as writer/director, I&apos;m interested in collaborating with other people, 
                            whether as a DP or in any capacity that will allow me to explore, grow and learn. So if my work looks like down your alley, hit me up!
                        </p>
                        <div className="hidden lg:flex flex-row text-sm/7 pt-8">
                            <div className="w-1/2 pb-6 md:pb-0">
                                <h2 className="w text-base font-light mb-2">CONTACT</h2>
                                <div className="flex-2 pl-4 bg-green-10">
                                    <a
                                        href="mailto:irenemercadal@gmail.com"
                                        rel="noopener noreferrer"
                                    >
                                        <p>Email — irenemercadal@gmail.com</p>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/imercadal/"
                                        rel="noopener noreferrer"
                                    >
                                        <p>Instagram — imercadal</p>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/irene-mercadal/"
                                        rel="noopener noreferrer"
                                    >
                                        <p>LinkedIn — irene-mercadal</p>
                                    </a>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h2 className="flex-1 text-base font-light mb-2">AWARDS</h2>
                                <div className="flex-2 pl-6">
                                    <p>Volker Bahnemann Award for Outstanding Cinematography, awarded by <strong>ARRI 2022</strong></p>
                                    <p>Nestor Almendros Award for Best Cinematography, <strong>First Run Film Festival 2025</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden flex-col text-sm/7 pt-8">
                    <div className="flex sm:w-1/2 pb-8">
                        <h2 className="w-20 shrink-0 text-base font-light mb-2">CONTACT</h2>
                        <div className="flex-2 pl-6 sm:pl-10 md:pl-12">
                            <a
                                href="mailto:irenemercadal@gmail.com"
                                rel="noopener noreferrer"
                            >
                                <p>Email — irenemercadal@gmail.com</p>
                            </a>
                            <a
                                href="https://www.instagram.com/imercadal/"
                                rel="noopener noreferrer"
                            >
                                <p>Instagram — imercadal</p>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/irene-mercadal/"
                                rel="noopener noreferrer"
                            >
                                <p>LinkedIn — irene-mercadal</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex sm:w-1/2">
                        <h2 className="w-20 shrink-0 text-base font-light mb-2">AWARDS</h2>
                        <div className="flex-2 pl-6 sm:pl-8 md:pl-12">
                            <p>Volker Bahnemann Award for Outstanding Cinematography, awarded by ARRI 2022</p>
                            <p>Nestor Almendros Award for Best Cinematography, First Run Film Festival 2025</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container flex justify-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 pb-8'>

                <div className="mt-10">
                    <a
                        href="/Irene-Mercadal-Resume.pdf"
                        download
                        className="inline-block border border-current px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </>
    );
};

/*
<div className="flex flex-col sm:flex-row text-sm/7">
    <h2 className="w-20 shrink-0 text-base font-light mb-4 sm:mb-2">EDUCATION</h2>
    <div className="pl-0 sm:pl-6 space-y-4">
        <div>
            <p className="font-bold">2023 — New York University</p>
            <p>Film M.F.A.</p>
        </div>
        <div>
            <p className="font-bold">2016 — Pontificia Universidad Católica de Chile</p>
            <p>Bachelor in Arts, Double Major in Film Aesthetics and Audiovisual Communication</p>
        </div>
    </div>
</div>
 */