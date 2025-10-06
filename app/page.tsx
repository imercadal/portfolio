'use client'

import Head from "next/head"
import Link from "next/link"
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Irene Mercadal Filmmaker</title>
        <meta name="keywords" content="cinematographer"></meta>
      </Head>
      <div className="relative">
        <div className="relative flex items-center justify-center h-screen overflow-hidden z-20">
            <iframe
              src="https://player.vimeo.com/video/1087396555?h=92d92e82e7&autoplay=1&muted=1&loop=1&background=1"
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Homepage Cinematography Reel"
              className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2"
            ></iframe>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
          className="absolute inset-0 flex items-center justify-center z-40"
        >
          <Link
            href="/cinematography"
            className="border-2 border-white px-8 py-3 text-base text-white hover:text-gray-300 hover:border-gray-300 transition-colors duration-100"
          >
            VIEW WORK
          </Link>
        </motion.div>
      </div>
    </>

  )
};