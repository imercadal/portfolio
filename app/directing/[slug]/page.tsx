import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { movies, Movie } from '@/app/directing/movie-data';
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function MovieDetailPage({ params } : { params: { slug: string }}){
    const movie: Movie | undefined = movies.find(
        (m) => m.slug === params.slug
    )

    if (!movie){
        return <NotFoundPage />
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={movie} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/directing" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to projects
              </Link>
            </div>
        </main>
    )

};
/*
import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { movies, Movie } from '@/app/directing/movie-data';
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function MovieDetailPage({ params } : PageProps ){
    const { slug } = await params;

    const movie: Movie | undefined = movies.find(
        (m) => m.slug === slug
    )

    if (!movie){
        return <NotFoundPage />
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={movie} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/directing" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to projects
              </Link>
            </div>
        </main>
    )

};


import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { movies, Movie } from '@/app/directing/movie-data';
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function MovieDetailPage({ params } : { params: { slug: string }}){
    const movie: Movie | undefined = movies.find(
        (m) => m.slug === params.slug
    )

    if (!movie){
        return <NotFoundPage />
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={movie} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/directing" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to projects
              </Link>
            </div>
        </main>
    )

}
*/