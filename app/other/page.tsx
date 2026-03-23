import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import { otherProjects } from '../data/otherProjects';

export default function DiveDeeper(){
    return(
        <>
            <Head>
                <title>Irene Mercadal | Other</title>
                <meta name="description" content="Irene Mercadal is a filmmaker, cinematographer, and interdisciplinary artist based in NYC. Film MFA from NYU Tisch, director of Aguas y restos, and member of Glitch."/>
            </Head>
            <div className="container mx-auto max-w-6xl min-h-[90vh] px-4 sm:px-6 lg:px-0 py-16 pt-30">
                <h1 className='py-4 text-xl uppercase font-bold tracking-widest'>Other projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                    <div key={project.id} className="relative aspect-square overflow-hidden group border-2 border-black">
                        <Image
                            src={project.mainImage || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className='absolute z-10 inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300'></span> 
                        <Link href={`/other/${project.slug}`} key={project.id} className='absolute inset-0 flex flex-col items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h2 className="text-xl font-bold text-white shadow-xl uppercase tracking-wider">{project.title}</h2>                  
                            <p className="tracking-wider text-white/80">{project.bajada}</p> 
                        </Link>
                    </div>
                )
            )}
                </div>
            </div>
        </>
    );
};