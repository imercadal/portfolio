import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { otherProjects } from '@/app/data/otherProjects';
import { Project } from "@/app/types/project";
import Link from 'next/link';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

type Params = { slug: string };

export default async function OtherDetailPage({ params } : { params: Promise<Params>}){
    const { slug } = await params;

    const project: Project | undefined = otherProjects.find(
        (p) => p.slug === slug
    )

    if(!project){
        return <NotFoundPage />
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={project} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/other" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to OTHER PROJECTS
              </Link>
            </div>
        </main>
    );
};