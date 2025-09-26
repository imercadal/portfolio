import { type PageProps } from "next";
import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { projects, Project } from "@/app/cinematography/project-data";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function FilmDetailPage({ params } : PageProps<{ slug: string }>){

    const project = projects.find(
        (p) => p.slug === params.slug
    );

    if (!project) {
        return <NotFoundPage />;
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={project} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/cinematography" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to projects
              </Link>
            </div>
        </main>
    )
}
    

/*
import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { projects, Project } from "@/app/cinematography/project-data";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function FilmDetailPage({ params } : { params: { slug: string }}){

    const project: Project | undefined = projects.find(
        (p) => p.slug === params.slug
    );

    if (!project) {
        return <NotFoundPage />;
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={project} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/cinematography" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to projects
              </Link>
            </div>
        </main>
    )
}
    
*/