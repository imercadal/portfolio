import Image from 'next/image';
import Link from 'next/link';
import { movies } from './movie-data';

export default function Directing(){
    return(
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-xl font-bold mb-12 tracking-wide text-right">NARRATIVE AND DOCUMENTARY FILMS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {movies.map((movie) => (
                        <div key={movie.id} className="relative aspect-square overflow-hidden group">
                                <Image
                                    src={movie.mainImage || "/placeholder.svg"}
                                    alt={movie.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className='absolute z-10 inset-0 bg-yellow-200 opacity-0 group-hover:opacity-60 transition-opacity duration-300'></span>
                                <h1 className='absolute z-20 inset-0 flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'> 
                                    <Link href={`/directing/${movie.slug}`} key={movie.id} className="text-xl font-bold text-gray-900 uppercase tracking-wider">
                                        {movie.title}
                                    </Link>
                                </h1>
                        </div>
                    ))}
                </div>
            </div>
    )
};
