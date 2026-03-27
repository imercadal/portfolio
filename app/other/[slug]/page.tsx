import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { otherProjects } from '@/app/data/otherProjects';
import { Project } from "@/app/types/project";
import Link from 'next/link';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams() {
    return otherProjects.map((p) => ({ slug: p.slug }));
};

export async function generateMetadata(
    { params }: { params: Promise<Params> }
): Promise<Metadata> {
    const { slug } = await params;
    const project = otherProjects.find((p) => p.slug === slug);
    if (!project) {
        return { title: "Project Not Found | Other", description: "The requested project could not be found." };
    }
    return {
        title: `${project.title} | Irene Mercadal`,
        description: project.logline ?? "A project by Irene Mercadal.",
        openGraph: {
            title: project.title,
            description: project.logline ?? "A project by Irene Mercadal.",
            url: `/other/${project.slug}`,
            images: project.mainImage ? [{ url: project.mainImage }] : [],
        },
    };
};

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