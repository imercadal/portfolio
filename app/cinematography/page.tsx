"use client"

import Image from "next/image";
import Link from "next/link";
import { projects } from './project-data';
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function Cinematography() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="container mx-auto px-8 py-6">
        <div className="space-y-8">
          <div className="relative block group sm:mb-6 my-20">
            <div className="relative z-30 w-full h-80 md:h-96 mb-4 overflow-hidden rounded-xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://player.vimeo.com/video/708494331?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                title="Cinematography Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div 
              onClick={() => setIsPlaying(true)}
              className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-3000 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <h1 className="text-xl tracking-wider text-gray-300">REEL 2025</h1>
            </div>
          </div>
          <h1 className="text-2xl font-semibold my-1 pt-4 tracking-wide">NARRATIVE</h1>
          {projects.map((project) => (
          <div key={project.id} className="relative block group">
              <div className="relative w-full h-48 md:h-112 mb-4 overflow-hidden">
                  <Image
                      src={project.mainImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
                  />
              </div>
              <div className="flex justify-between items-baseline">
              <h2 className="text-2xl font-light group-hover:text-yellow-500 transition-colors">
                <Link href={`/cinematography/${project.slug}`} >
                  <span className="absolute inset-0"></span>
                  {project.title}
                </Link>
              </h2>
              <div className="text-sm text-gray-600">
                  <span className="mr-2">{project.category}</span>
                  <span>{project.year}</span>
              </div>
              </div>
          </div>
          ))}
        </div>
    </div>
  )
}